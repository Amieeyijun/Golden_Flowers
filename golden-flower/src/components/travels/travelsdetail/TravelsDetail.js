import React, { Component } from 'react';
import style from "./TravelsDetail.module.css";
import { Icon } from 'antd';
import Axios from "../../../Axios/Axios";
import url from "url";

class TravelsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detaildata: {}
        }
    }
    componentDidMount() {
        let infoid = url.parse(this.props.location.search, true).query.id
        Axios.get('/travels/getDetail', {
            params: {
                infoid: infoid
            }
        })
            .then(res => {
                console.log(res.data)
                this.setState({
                    detaildata: res.data[0]
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
    componentDidUpdate() {
        console.log(111111)
        console.log(document.getElementsByTagName("h2"))
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

                <div className={style.contentbox}>

                    <div>
                        <div className={style.publisher}>
                            <Icon type="user" />  by {this.state.detaildata.publisher}
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: this.state.detaildata.content }} className={style.content}>
                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default TravelsDetail;