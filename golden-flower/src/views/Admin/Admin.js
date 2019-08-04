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
                        �ҵ���
        </Menu.Item>
                    <Menu.Item key="app" className={style.second}>
                        <Icon type="appstore" />
                        �ҵ��μ�
        </Menu.Item>
                    <Menu.Item key="call" className={style.third}>
                        <Icon type="appstore" />
                        �ҵĵ���
        </Menu.Item>
                    <Menu.Item key="alipay" className={style.fouth}>
                        �ҵĶ���
                    </Menu.Item>
                    <SubMenu className={style.fifth}
                        title={
                            <span className="submenu-title-wrapper" >
                                <Icon type="setting" />
                                ���� </span>
                        }
                    >
                        <Menu.ItemGroup>
                            <Menu.Item key="setting:1">�ҵĻ</Menu.Item>
                            <Menu.Item key="setting:2">�ҵ�С��</Menu.Item>
                            <Menu.Item key="setting:3">�ҵ��ղ�</Menu.Item>
                            <Menu.Item key="setting:4">�ҵĽ��</Menu.Item>
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