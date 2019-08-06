import React, { Component } from 'react';
import style from './TopMenu.module.css'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import Change from '../TopMenu/Change/Change'
import { BackTop } from 'antd';
class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAll: "",
            userone: {}
        }
        this.changeColor = this.changeColor.bind(this)
    }
    changeColor(e) {
        console.log(e.target)
        console.log(this.state.userone)
    }

    componentDidMount() {

        this.setState({
            userAll: window.sessionStorage.getItem("user"),
            userone: JSON.parse(window.sessionStorage.getItem("user"))
        })
    }
    render() {
        return (
            <div>
                <div className={style.header}>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className={style.logo}><img src={require("../../imgs/LOGO.png")} alt="" /></div>
                        </Col>
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                            <div className={style.guide}>
                                <div className={style.adver}>
                                    <p> I WILL LEAVE ALL MY WEARINESS AND IDEAL TAKE MY CAMERA AND COMPUTER AWAY FROM THE BUSY AND GO TO EMPTY</p>

                                </div>
                                <div className={style.contain} onClick={this.changeColor}>
                                    <Link to='/' className={style.home}> 首页</Link>
                                    <Link to='/travel' className={style.home}>旅游攻略</Link>
                                    <Link to='/goods' className={style.home}>去旅游</Link>
                                    <Link to='/app' className={style.home}>APP</Link>
                                    <Change />
                                </div>
                            </div>
                            <BackTop visibilityHeight='650' />
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}


export default TopMenu;