import React, { Component } from 'react';
import Rousel from '../../components/Rousel/Rousel'
import Search from '../../components/Search/Search'
import Japen from '../../components/Japen/Japen'
import Attract from '../../components/Attract/Attract'
import style from './Home.module.css'
import { Carousel } from 'antd'
import { Row, Col } from 'antd';
import { Divider } from 'antd';
class Home extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.pre = this.pre.bind(this)
        this.next = this.next.bind(this)
    }
    onChange(a, b, c) {
        console.log(a, b, c);
    }
    pre() {
        this.choose.slick.slickPrev()
    }
    next() {
        this.choose.slick.slickNext()
    }
    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className={style.rousels}><Rousel /></div>
                        <div className={style.search}>
                            <Search />
                        </div>
                        <div className={style.travel}>
                            <Attract />
                        </div>
                        <div>
                            <div className={style.japen}>
                                <div className={style.title}>
                                    <p>当季精选  |  日本</p>
                                    <div className={style.divi}></div>
                                </div>
                                <img src={require('../../imgs/japen.jpg')} />
                                <div className={style.japen_attrction}>
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                </div>
                            </div>
                            <div className={style.xizang}>
                                <div className={style.title}>
                                    <p>当季精选  |  西藏</p>
                                    <div className={style.divi}></div>
                                </div>
                                <img src={require('../../imgs/japen.jpg')} />
                                <div className={style.japen_attrction}>
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                </div>
                            </div>

                            <div className={style.xizang}>
                                <div className={style.title}>
                                    <p>当季精选  |  沙巴</p>
                                    <div className={style.divi}></div>
                                </div>
                                <img src={require('../../imgs/japen.jpg')} />
                                <div className={style.japen_attrction}>
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                    <Japen />
                                </div>
                            </div>
                        </div>
                        <div className={style.comments}>
                            <span className={style.start}></span>
                            <h2>旅游攻略</h2>
                            <div>
                                <Carousel dots='false' autoplay ref={el => { this.choose = el }}>
                                    <div>
                                        <div className={style.comments_rousel}>
                                            <div >
                                                <img src={require('../../imgs/rousel1.jpeg')} />
                                                <span>必达士</span>
                                                <p>氹仔官也街27号</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>营业时间：11：00—22:00</span>

                                            </div>
                                            <div>
                                                <img src={require('../../imgs/rousel2.jpeg')} />
                                                <span>莫义记</span>
                                                <p>氹仔旧城区官也街9号A铺</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>营业时间：11:00-21:00</span>
                                            </div>
                                            <div>
                                                <img src={require('../../imgs/rousel3.jpeg')} />
                                                <span>小飞象葡国餐厅</span>
                                                <p>澳门氹仔地堡街喜来登广场2楼</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>营业时间：12:00—23:30</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.comments_rousel}>

                                            <div >
                                                <img src='https://n1-q.mafengwo.net/s10/M00/5C/50/wKgBZ1ouoM-ABC0uAAUJngE3vB455.jpeg' />
                                                <span>尼甘布鱼市</span>
                                                <p>黄昏的海滩是游玩小憩的不二选择</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>TIPS.乌鸦是 斯里兰卡 的神鸟</span>
                                            </div>


                                            <div >
                                                <img src='https://p3-q.mafengwo.net/s10/M00/F9/B0/wKgBZ1oykSqAUh5QAAxauCoJD1U77.jpeg' />
                                                <span>狮子岩</span>
                                                <p>曾经的富丽堂皇幻化成一层浅浅的石砖</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Tips:壁画明文规定不能拍照</span>

                                            </div>


                                            <div >
                                                <img src='https://b4-q.mafengwo.net/s10/M00/E0/82/wKgBZ1o30YWABFTmAAPPpUZPqog71.jpeg' />
                                                <span>佛牙寺</span>
                                                <p>不如我唱首赞美诗</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Tips:安检严格</span>

                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.comments_rousel}>

                                            <div >
                                                <img src='https://p2-q.mafengwo.net/s13/M00/81/99/wKgEaVyuppKAHz0OAADQUPBMXHE69.jpeg' />
                                                <span>阿苏男孩号</span>
                                                <p>面向儿童设计的可爱专列</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>运行时间：1日往返2次</span>

                                            </div>
                                            <div >
                                                <img src='https://b3-q.mafengwo.net/s13/M00/81/CC/wKgEaVyuppmAR5r4AAKfk8_ubvw05.jpeg' />
                                                <span>SL人吉蒸汽列车</span>
                                                <p>日本最古老的现役蒸汽机车</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>运行时间：1日往返1次 </span>

                                            </div>


                                            <div >
                                                <img src='https://n2-q.mafengwo.net/s13/M00/81/E8/wKgEaVyuppyAeDutAAGUHAdNOhs63.jpeg' />
                                                <span>“海幸山幸”</span>
                                                <p>从神话中来的度假村式列车</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>运行时间：1日往返1次</span>

                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.comments_rousel}>
                                            <div >
                                                <img src='https://p2-q.mafengwo.net/s13/M00/1F/34/wKgEaVx0O6KATuXrAAdX_a0njSA88.jpeg' />
                                                <span>巴拿山</span>
                                                <p>漫步在这个浪漫的城堡里</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>建议游玩时长：1day</span>

                                            </div>
                                            <div >
                                                <img src='https://n1-q.mafengwo.net/s13/M00/1F/63/wKgEaVx0O7iARKPdAAgIQ2e7A1091.jpeg' />
                                                <span>海云观 灵姑湾</span>
                                                <p>人生必去的50个地方之一</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Tips:提前一天过去</span>

                                            </div>
                                            <div >
                                                <img src='https://n2-q.mafengwo.net/s13/M00/1F/75/wKgEaVx0O8CAOUwsAAzt556UJPo80.jpeg' />
                                                <span>芽庄</span>
                                                <p>打卡‘情人’的浪漫教堂</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Tips:来做一个精油SPA</span>

                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                            <div className={style.pre} onClick={this.pre}>
                                <img src={require('../../imgs/pre.png')} />
                            </div>
                            <div className={style.next} onClick={this.next}>
                                <img src={require('../../imgs/next.png')} />
                            </div>
                        </div>
                        <div className={style.points}></div>

                    </Col>
                </Row>

            </div>



        );
    }
}

export default Home;