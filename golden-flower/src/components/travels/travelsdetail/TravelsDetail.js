import React, { Component } from 'react';
import style from "./TravelsDetail.module.css";
import { Icon } from 'antd';
import Axios from "../../../Axios/Axios";
import url from "url";

class TravelsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detaildata: {},
            postdata: [],
            block: "block"
        }
    }
    componentDidMount() {
        let keywords = this.props.location.search.substr(1);
        let infoid = url.parse(this.props.location.search, true).query.id;
        let publisher = url.parse(this.props.location.search, true).query.publisher;
        let title = url.parse(this.props.location.search, true).query.title
        Axios.get('/travels/getDetail', {
            params: {
                infoid: infoid,
                publisher: publisher,
                title: title,
                keywords: keywords
            }
        })
            .then(res => {
                if (title) {
                    this.setState({
                        detaildata: res.data[0],
                        block: "none"
                    });
                    return;
                }
                if (infoid && publisher) {
                    console.log('notitle', res.data)
                    this.setState({
                        detaildata: res.data[0][0],
                        postdata: res.data[1]
                    });
                    return;
                }
                if (keywords) {
                    console.log(keywords, res.data)
                    this.setState({
                        detaildata: res.data[0],
                        block: "none"
                    });
                    return;
                }

            })
            .catch(err => {
                console.error(err);
            })

    }
    render() {
        return (
            <div>
                <div className={style.title}>
                    <img src={require("../../../imgs/dyhshang.png")} />
                    <div>{this.state.detaildata.title}</div>
                    <div className={style.info}>{this.state.detaildata.info}</div>
                    <img src={require("../../../imgs/dyhxia.png")} className={style.titleimg} />
                </div>

                <div className={style.box}>

                    <div className={style.contentbox}>
                        <div className={style.publisher}>
                            <Icon type="user" />  by {this.state.detaildata.publisher}
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: this.state.detaildata.content }} className={style.content}>

                        </div>
                    </div>
                    <div className={style.userpost} style={{ display: this.state.block }}>
                        <div>
                            <div style={{ fontSize: '20px', fontWeight: 700 }}>ta的帖子</div>
                            {
                                this.state.postdata.map((item, ind) => {
                                    return (
                                        <div className={style.postbox} key={ind}>
                                            <img src={item.img} alt="" />
                                            <div className={style.postinfo}>
                                                <div className={style.postdate}>
                                                    <p>Post By{item.publisher}</p>
                                                    <p>2019年6月2日</p>
                                                </div>
                                                <div className={style.infotitle}>
                                                    {item.title}
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default TravelsDetail;