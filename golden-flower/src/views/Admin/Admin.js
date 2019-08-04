import React, { Component } from 'react';
import style from './Admin.module.css'
import { Menu, Icon, Row, Col,Avatar  } from 'antd';
const { SubMenu } = Menu;

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            username:JSON.parse(window.sessionStorage.getItem("user")).username
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Col xs={8} sm={16} md={24} lg={32} className={style.col}>
                <img className={style.imgtop} src="http://1.s60i.faiusr.com/2/1050/AJoICAIQjO7ivwUY44_S6gMggA8o9AM.jpg" alt="" />
                
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className={style.sdaohang}>
                    <Menu.Item key="mail" className={style.first}>
                        <Icon type="mail" />
                        我的窝
        </Menu.Item>
                    <Menu.Item key="app" className={style.second}>
                        <Icon type="appstore" />
                        我的游记
        </Menu.Item>
                    <Menu.Item key="call" className={style.third}>
                        <Icon type="appstore" />
                        我的点评
        </Menu.Item>
                    <Menu.Item key="alipay" className={style.fouth}>
                        我的订单
                    </Menu.Item>
                    <SubMenu className={style.fifth}
                        title={
                            <span className="submenu-title-wrapper" >
                                <Icon type="setting" />
                                更多 </span>
                        }
                    >
                        <Menu.ItemGroup>
                            <Menu.Item key="setting:1">我的活动</Menu.Item>
                            <Menu.Item key="setting:2">我的小组</Menu.Item>
                            <Menu.Item key="setting:3">我的收藏</Menu.Item>
                            <Menu.Item key="setting:4">我的结伴</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>

                <div className={style.bodyer}>
                    <Row>
                        <Col span={8} className={style.six}>
                        <Avatar size={120} src="https://i02piccdn.sogoucdn.com/2534159fde91fa3c" className={style.personSrc}/>
                        <div className={style.title}>{this.state.username}</div>
                        </Col>
                        <Col span={16} >
                        </Col>
                    </Row>
                </div>
            </Col >
        );
    }
}

export default Admin;