import React, { Component } from 'react';
import style from "./BottomMenu.module.css";
import { Row, Col } from 'antd';
import { Divider } from 'antd';

class BottomMenu extends Component {
    render() {
        return (
            <div>
                <div className={style.bottombox}>
                    <div className={style.rowbox}>
                        <Row gutter={30}>
                            <Col className={style.gutter} span={8}>
                                <div>
                                    <div className={style.bottomtitle}>最新游记</div>
                                    <Divider className={style.divider} />
                                    <div className={style.youjibox}>
                                        <div>
                                            <img src="https://p1-q.mafengwo.net/s6/M00/86/FF/wKgB4lJyCaSAViNmAAu89WEz8go13.jpeg?imageMogr2%2Fthumbnail%2F%21240x240r%2Fgravity%2FCenter%2Fcrop%2F%21240x240%2Fquality%2F90" alt="" />
                                        </div>
                                        <div className={style.youji}>
                                            <p>
                                                度假的正确打开方式——吃泡三亚
                                            </p>
                                            <p>
                                                来到三亚，泡酒店、吃海鲜才是正确的打开方式哟~
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.youjibox}>
                                        <div>
                                            <img src="https://n2-q.mafengwo.net/s6/M00/15/9C/wKgB4lK5LeuAdMJ0AAUZpQstAX024.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90" alt="" />
                                        </div>
                                        <div className={style.youji}>
                                            <p>
                                                纵观西江千户苗寨，解锁所有玩法！
                                            </p>
                                            <p>
                                                叮咚作响的精美银饰，制作精良的风雨桥吊脚楼，穿行在木楼古寨中的华服少女西江永远是黔东南的象征。
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.youjibox}>
                                        <div>
                                            <img src="https://p1-q.mafengwo.net/s14/M00/ED/C9/wKgE2l1E7iqAPKuPAAA4Ksl-7GE637.jpg?imageView2%2F2%2Fw%2F680%2Fq%2F90" alt="" />
                                        </div>
                                        <div className={style.youji}>
                                            <p>
                                                呼伦贝尔旅游攻略草原的魅力诱惑
                                            </p>
                                            <p>
                                                呼伦贝尔草原的魅力诱惑，你拿什么理由说不！
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col className={style.gutter} span={8}>
                                <div className={style.bottomtitle}>关于我们</div>
                                <Divider className={style.divider} />
                                <div className={style.aboutus}>
                                    <p>
                                        “ 做一个安静的人，
                                        读书，旅行，等待爱情。
                                        给自己一段柔软的时光，
                                        不用太远，不用太贵，
                                        去一个安静的地方将自己释放，抚慰。
                                        旅行，就应该只是单纯地出去走走。
                                        去哪里，并不重要。
                                        心宽，便是远方。 ”
                                   </p>
                                </div>
                            </Col>
                            <Col className={style.gutter} span={8}>
                                <div className={style.bottomtitle}>联系我们</div>
                                <Divider className={style.divider} />
                                <div className={style.youjibox}>
                                    <div>
                                        <img src={require("../../imgs/mw.jpg")} alt="" />
                                    </div>
                                    <div className={style.youji}>
                                        <p>
                                            她,集美貌与智慧于一身
                                            </p>
                                    </div>
                                </div>
                                <div className={style.youjibox}>
                                    <div>
                                        <img src={require("../../imgs/dyj.png")} alt="" />
                                    </div>
                                    <div className={style.youji}>
                                        <p>
                                            她,活泼可爱善良大方美丽单纯
                                            </p>
                                    </div>
                                </div>
                                <div className={style.youjibox}>
                                    <div>
                                        <img src={require("../../imgs/xby.jpg")} alt="" />
                                    </div>
                                    <div className={style.youji}>
                                        <p>
                                            他,嗯...
                                            </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
            </div>
        );
    }
}

export default BottomMenu;