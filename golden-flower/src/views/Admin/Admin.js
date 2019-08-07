import React, { Component } from 'react';
import style from './Admin.module.css'
import { Menu, Icon, Row, Col, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import Myhome from '../../components/Myhome/Myhome'
const { SubMenu } = Menu;

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            username: JSON.parse(window.sessionStorage.getItem("user")).username,
            live: JSON.parse(window.sessionStorage.getItem("user")).live
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
            <div className={style.box}>
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
                        购物车
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
                            <Avatar size={120} src="https://i02piccdn.sogoucdn.com/2534159fde91fa3c" className={style.personSrc} />
                            <div className={style.title}>{this.state.username}</div>
                            <div className={style.label}>
                                <div>VIP</div>
                                <div>分舵</div>
                                <div><Icon type="branches" /></div>
                            </div>
                            <div className={style.level}>
                                <div>等级：<a href="#">LV.1</a></div>
                                <div>访问数：0</div>
                                <div><Link to="/admininfo"><Icon type="setting" /></Link></div>
                            </div>
                            <div className={style.attention}>
                                <div>
                                    <div><b>6</b></div>
                                    <div>关注</div>
                                </div>
                                <div>
                                    <div><b>6</b></div>
                                    <div>粉丝</div>
                                </div>
                                <div>
                                    <div><b>6</b></div>
                                    <div>蜂蜜</div>
                                </div>
                            </div>

                            <div className={style.myattention}>
                                <h3><a href="#">我的关注</a></h3>
                                <div className={style.myattentionAll}>
                                    <div>
                                        <img src="http://n4-q.mafengwo.net/s12/M00/0D/B6/wKgED1w2wTGACDWuAACV7G0pZBM93.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="" />
                                        <h5>马蜂窝</h5>
                                    </div>
                                    <div>
                                        <img src="http://p1-q.mafengwo.net/s11/M00/E6/B5/wKgBEFsWUTmAexhvAANf5Uux-cw10.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="" />
                                        <h5>马小蜂</h5>
                                    </div>
                                    <div>
                                        <img src="http://b4-q.mafengwo.net/s10/M00/E8/CD/wKgBZ1iZk2SAGbKsAAME0TWzCHE45.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="" />
                                        <h5>小蚂</h5>
                                    </div>
                                    <div>
                                        <img src="http://b2-q.mafengwo.net/s12/M00/A2/BC/wKgED1v83YqAKP_tAARgGAR8q2059.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="" />
                                        <h5>蜂窝机</h5>
                                    </div>
                                    <div>
                                        <img src="http://p4-q.mafengwo.net/s12/M00/9C/59/wKgED1v7pZ6AIlXKAAOM2KwjrY870.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="" />
                                        <h5>毛老师</h5>
                                    </div>
                                    <div>
                                        <img src="http://n1-q.mafengwo.net/s9/M00/0D/F5/wKgBs1hPb8WAEruUAAGXKCGfy4U06.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="" />
                                        <h5>杜老师</h5>
                                    </div>
                                    <div>
                                        <img src="https://n2-q.mafengwo.net/s12/M00/B5/68/wKgED1w4DVOAYSkYAAl7jdI1qy475.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="" />
                                        <h5>杨老师</h5>
                                    </div>
                                    <div>
                                        <img src="https://p3-q.mafengwo.net/s10/M00/09/5B/wKgBZ1m5576ATt3bAAuDvtg45y034.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="" />
                                        <h5>鲁老师</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={style.MessageBoard}>
                                <img src={require("../../imgs/MrMD.png")} alt="" />
                                <h3>留言板</h3>
                                <textarea name="" id="" cols="30" rows="10">说点啥呗..</textarea>
                                <input type="button" value="留言" />
                            </div>
                            <img src={require('../../imgs/LOGO.png')} alt="" className={style.srcc}/>
                        </Col>
                        <Col span={16} className={style.eight}>
                            <Myhome now={this.state.current} name={this.state.username}/>
                        </Col>
                    </Row>
                </div>
            </Col >
            </div>
        );
    }
}

export default Admin;