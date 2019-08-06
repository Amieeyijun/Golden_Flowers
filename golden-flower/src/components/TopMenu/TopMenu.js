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
            selfStyle: style.home
        }
        this.changeColor = this.changeColor.bind(this)
    }
    changeColor(e) {
        if (e.target.href == 'http://localhost:3000/') {
            this.setState(
                { selfStyle: style.home }
            )
        }
        if (e.target.href == 'http://localhost:3000/travel') {
            this.setState(
                { selfStyle: style.travels }
            )
        }
        if (e.target.href == 'http://localhost:3000/goods') {
            this.setState(
                { selfStyle: style.goods }
            )
        }
        if (e.target.href == 'http://localhost:3000/app') {
            this.setState(
                { selfStyle: style.APP }
            )
        }
        if (e.target.href == undefined) {
            this.setState(
                { selfStyle: style.welcome }
            )
        }
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
                                    <Link to='/' className={this.state.selfStyle}> 首页</Link>
                                    <Link to='/travel' className={this.state.selfStyle}>旅游攻略</Link>
                                    <Link to='/goods' className={this.state.selfStyle}>去旅游</Link>
                                    <Link to='/app' className={this.state.selfStyle}>APP</Link>
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