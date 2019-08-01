import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from "./TravelsItem.module.css"
import { Divider } from 'antd';
import { withRouter } from 'react-router-dom'
class TravelsItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgheight: Math.random() * 200 + 200 + "px",
            itemData: this.props.ItemData
        }
        this.toDetail = this.toDetail.bind(this);
    }
    toDetail() {
        this.props.history.push("/travelsdetail");
    }
    render() {
        return (
            <div>

                <div className={style.box} onClick={this.toDetail}>
                    <div className={style.imgbox} style={{ height: this.state.imgheight }}>
                        <img src={this.state.itemData.img} />

                    </div>
                    <div className={style.title}>
                        {this.state.itemData.title}
                    </div>
                    <Divider className={style.divider} />

                    <div className={style.info}>
                        {this.state.itemData.info}
                    </div>
                    <div className={style.folowme}>
                        <Link to="/travelsdetail">
                            跟我走吧
                            </Link>
                    </div>
                </div>



            </div>
        );
    }
}

export default withRouter(TravelsItem);