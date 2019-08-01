import React, { Component } from 'react';
import style from './TopMenu.module.css'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state={}
        this.changeColor=this.changeColor.bind(this)
    }
    changeColor(e){
        console.log(e.target)

    }
    render() {
        return (

            <div>
                <div className={style.header}>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className={style.logo}></div>

                        </Col>
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                            <div className={style.guide}>
                                <div className={style.adver}>
                                    <p> I WILL LEAVE ALL MY WEARINESS AND IDEAL TAKE MY CAMERA AND COMPUTER AWAY FROM THE BUSY AND GO TO EMPTY</p>

                                </div>
                                <div className={style.contain} onClick={this.changeColor}>
                                    <div className={style.com}> 
                                        <Link to='/'>首页</Link>
                                    </div>
                                    <div>
                                        <Link to='/travel'>旅游攻略</Link>
                                    </div>
                                    <div>
                                        <Link to='/goods'>去旅游</Link>
                                    </div>
                                    <div>
                                        <Link to='/admin'>个人中心</Link>
                                    </div>
                                    <div>
                                        <Link to='/login'>登录/</Link>
                                        <Link to='/registered'>注册</Link>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}


export default TopMenu;