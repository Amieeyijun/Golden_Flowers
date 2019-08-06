import React, { Component } from 'react';
import Rousel from '../../components/Rousel/Rousel'
import Search from '../../components/Search/Search'
import Japen from '../../components/Japen/Japen'
import Attract from '../../components/Attract/Attract'
import style from './Home.module.css'
import axios from '../../Axios/Axios'
import { Carousel } from 'antd'
import { Row, Col } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allData: [],
            travelsData: []
        }
        this.onChange = this.onChange.bind(this)
        this.pre = this.pre.bind(this)
        this.next = this.next.bind(this)
        this.goDetail = this.goDetail.bind(this)
    }
    goDetail(e) {
        console.log(e.target);

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
    componentDidMount() {
        axios.get('/attract/get')
            .then((res) => {
                console.log(res.data)
                this.setState({ allData: res.data })
            })
            .catch(
                (err) => {
                    console.log(err);
                }
            )
        axios.get('/attract/gettravels')
            .then((res) => {

                this.setState({ travelsData: res.data })
                console.log(this.state.travelsData)
            })
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    }
    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <BackTop visibilityHeight='650' />
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
                                    {
                                        this.state.allData.map((item, index) => {
                                            if (item.Aregin == '日本') {
                                               
                                                return (<Japen key={index} aimg={item.Aimg} atitle={item.Atitle} aInfo={item.AInfo} acolor={item.Acolor} aid='0' />)
                                            }

                                        })}
                                </div>
                            </div>
                            <div className={style.xizang}>
                                <div className={style.title}>
                                    <p>当季精选  |  西藏</p>
                                    <div className={style.divi}></div>
                                </div>
                                <img src={require('../../imgs/japen.jpg')} />
                                <div className={style.japen_attrction}>
                                    {
                                        this.state.allData.map((item, index) => {
                                            if (item.Aregin == '西藏') {
                                                
                                                return (<Japen key={index} aimg={item.Aimg} atitle={item.Atitle} aInfo={item.AInfo} acolor={item.Acolor}  aid='0'/>)
                                            }

                                        })}
                                </div>
                            </div>

                            <div className={style.xizang}>
                                <div className={style.title}>
                                    <p>当季精选  |  沙巴</p>
                                    <div className={style.divi}></div>
                                </div>
                                <img src={require('../../imgs/japen.jpg')} />
                                <div className={style.japen_attrction}>
                                    {
                                        this.state.allData.map((item, index) => {
                                            if (item.Aregin == '沙巴') {
                                               
                                                return (<Japen key={index} aimg={item.Aimg} atitle={item.Atitle} aInfo={item.AInfo} acolor={item.Acolor}  aid='0'/>)
                                            }

                                        })}
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
                        <div className={style.points}>
                            <div className={style.points_left}>
                                <div className={style.points_fun}>
                                    <h3>JUNE</h3>
                                    <p>Qinghai Province</p>
                                </div>
                                <div className={style.points_fun}>
                                    <h3>JULY</h3>
                                    <p>United States of America</p>
                                </div>
                                <div className={style.points_fun}>
                                    <h3>AUGUST</h3>
                                    <p>Dunhuang</p>
                                </div>
                            </div>
                            <div className={style.points_right}>
                                <h2>旅行的意义 — 身未动 心已远  </h2>
                                <p>在每个人的青春年岁里，都曾有过一段关于旅行的憧憬，一段说走就走的旅行。可是在现实里，因为种种的原因，这个美好的希冀变成了每个午夜梦回的美好梦想</p>
                                <div className={style.right_comment}>
                                    <div className={style.comtain_1}>
                                        <div className={style.twitter}>
                                            <h6>一休的窝:</h6>
                                            <a href="#">顶</a>
                                            <p>“万物皆有裂痕，那是光进来的地方。”这是科恩写的一句诗，在旅途之初我对他还不甚了解。回来再给游记配乐的时候，一下子毫无头绪的游记就有了灵感。游吟诗，就是最适合这趟北美行的表达方式”</p>
                                        </div>
                                        <div className={style.facebook}>
                                            <h6>Yozuki毛毛酱</h6>
                                            <img src="https://b3-q.mafengwo.net/s12/M00/17/7F/wKgED1vpTYaAK6MfAAkdaR5NnKs66.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" width='30px' height='30px' />
                                            {/* <i className={style.MAvaTagfengshou}></i> */}
                                            <p>“才多少米之差，坡上妖风阵阵，把经幡吹动得作响，不过肆意飘起的一串串经幡，给单调的泸源崖增添了色彩”</p>
                                        </div>
                                    </div>
                                    <div className={style.comtain_1}>
                                        <h3>雷克雅未克 大教堂</h3>
                                        <span>管风琴的设计</span>
                                    </div>
                                    <div className={style.comtain_1}>
                                        <h3>威海 刘公岛</h3>
                                        <span>感受历史的厚重感</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.show}>
                            {this.state.travelsData.map((item, index) => {
                                return <Japen key={index} aimg={item.img} atitle={item.publisher} aInfo={item.info} acolor='#f3a647'  aid='1'/>
                            })}
                        </div>
                    </Col>
                </Row>

            </div>



        );
    }
}

export default Home;