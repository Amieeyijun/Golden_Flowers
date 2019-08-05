import React, { Component } from 'react';
import Rousel from '../../components/Rousel/Rousel'
import Search from '../../components/Search/Search'
import Japen from '../../components/Japen/Japen'
import Attract from '../../components/Attract/Attract'
import style from './Home.module.css'
import axios from '../../Axios/Axios'
import { Carousel } from 'antd'
import { Row, Col } from 'antd';
import { BackTop } from 'antd';
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
                this.setState(
                    { allData: res.data }
                )
            })
            .catch(
                (err) => {
                    console.log(err);
                }
            )
        axios.get('/attract/gettravels')
            .then((res) => {
                console.log(res.data)
                this.setState(
                    { travelsData: res.data }
                )
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
                                    <p>������ѡ  |  �ձ�</p>
                                    <div className={style.divi}></div>
                                </div>
                                <img src={require('../../imgs/japen.jpg')} />
                                <div className={style.japen_attrction}>
                                    {
                                        this.state.allData.map((item, index) => {
                                            if (item.Aregin == '�ձ�') {
                                                console.log(item.Aregin)
                                                return (<Japen key={index} aimg={item.Aimg} atitle={item.Atitle} aInfo={item.AInfo} acolor={item.Acolor}  />)
                                            }

                                        })}
                                </div>
                            </div>
                            <div className={style.xizang}>
                                <div className={style.title}>
                                    <p>������ѡ  |  ����</p>
                                    <div className={style.divi}></div>
                                </div>
                                <img src={require('../../imgs/japen.jpg')} />
                                <div className={style.japen_attrction}>
                                    {
                                        this.state.allData.map((item, index) => {
                                            if (item.Aregin == '����') {
                                                console.log(item.Aregin)
                                                return (<Japen key={index} aimg={item.Aimg} atitle={item.Atitle} aInfo={item.AInfo} acolor={item.Acolor} />)
                                            }

                                        })}
                                </div>
                            </div>

                            <div className={style.xizang}>
                                <div className={style.title}>
                                    <p>������ѡ  |  ɳ��</p>
                                    <div className={style.divi}></div>
                                </div>
                                <img src={require('../../imgs/japen.jpg')} />
                                <div className={style.japen_attrction}>
                                    {
                                        this.state.allData.map((item, index) => {
                                            if (item.Aregin == 'ɳ��') {
                                                console.log(item.Aregin)
                                                return (<Japen key={index} aimg={item.Aimg} atitle={item.Atitle} aInfo={item.AInfo} acolor={item.Acolor} />)
                                            }

                                        })}
                                </div>
                            </div>
                        </div>
                        <div className={style.comments}>
                            <span className={style.start}></span>
                            <h2>���ι���</h2>
                            <div>
                                <Carousel dots='false' autoplay ref={el => { this.choose = el }}>
                                    <div>
                                        <div className={style.comments_rousel}>
                                            <div >
                                                <img src={require('../../imgs/rousel1.jpeg')} />
                                                <span>�ش�ʿ</span>
                                                <p>���й�Ҳ��27��</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Ӫҵʱ�䣺11��00��22:00</span>

                                            </div>
                                            <div>
                                                <img src={require('../../imgs/rousel2.jpeg')} />
                                                <span>Ī���</span>
                                                <p>���оɳ�����Ҳ��9��A��</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Ӫҵʱ�䣺11:00-21:00</span>
                                            </div>
                                            <div>
                                                <img src={require('../../imgs/rousel3.jpeg')} />
                                                <span>С�����Ϲ�����</span>
                                                <p>���Ś��еر���ϲ���ǹ㳡2¥</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Ӫҵʱ�䣺12:00��23:30</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.comments_rousel}>

                                            <div >
                                                <img src='https://n1-q.mafengwo.net/s10/M00/5C/50/wKgBZ1ouoM-ABC0uAAUJngE3vB455.jpeg' />
                                                <span>��ʲ�����</span>
                                                <p>�ƻ�ĺ�̲������С�Ĳ���ѡ��</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>TIPS.��ѻ�� ˹������ ������</span>
                                            </div>


                                            <div >
                                                <img src='https://p3-q.mafengwo.net/s10/M00/F9/B0/wKgBZ1oykSqAUh5QAAxauCoJD1U77.jpeg' />
                                                <span>ʨ����</span>
                                                <p>�����ĸ����ûʻû���һ��ǳǳ��ʯש</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Tips:�ڻ����Ĺ涨��������</span>

                                            </div>


                                            <div >
                                                <img src='https://b4-q.mafengwo.net/s10/M00/E0/82/wKgBZ1o30YWABFTmAAPPpUZPqog71.jpeg' />
                                                <span>������</span>
                                                <p>�����ҳ�������ʫ</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Tips:�����ϸ�</span>

                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.comments_rousel}>

                                            <div >
                                                <img src='https://p2-q.mafengwo.net/s13/M00/81/99/wKgEaVyuppKAHz0OAADQUPBMXHE69.jpeg' />
                                                <span>�����к���</span>
                                                <p>�����ͯ��ƵĿɰ�ר��</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>����ʱ�䣺1������2��</span>

                                            </div>
                                            <div >
                                                <img src='https://b3-q.mafengwo.net/s13/M00/81/CC/wKgEaVyuppmAR5r4AAKfk8_ubvw05.jpeg' />
                                                <span>SL�˼������г�</span>
                                                <p>�ձ�����ϵ�������������</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>����ʱ�䣺1������1�� </span>

                                            </div>


                                            <div >
                                                <img src='https://n2-q.mafengwo.net/s13/M00/81/E8/wKgEaVyuppyAeDutAAGUHAdNOhs63.jpeg' />
                                                <span>������ɽ�ҡ�</span>
                                                <p>���������Ķȼٴ�ʽ�г�</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>����ʱ�䣺1������1��</span>

                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.comments_rousel}>
                                            <div >
                                                <img src='https://p2-q.mafengwo.net/s13/M00/1F/34/wKgEaVx0O6KATuXrAAdX_a0njSA88.jpeg' />
                                                <span>����ɽ</span>
                                                <p>��������������ĳǱ���</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>��������ʱ����1day</span>

                                            </div>
                                            <div >
                                                <img src='https://n1-q.mafengwo.net/s13/M00/1F/63/wKgEaVx0O7iARKPdAAgIQ2e7A1091.jpeg' />
                                                <span>���ƹ� �����</span>
                                                <p>������ȥ��50���ط�֮һ</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Tips:��ǰһ���ȥ</span>

                                            </div>
                                            <div >
                                                <img src='https://n2-q.mafengwo.net/s13/M00/1F/75/wKgEaVx0O8CAOUwsAAzt556UJPo80.jpeg' />
                                                <span>ѿׯ</span>
                                                <p>�򿨡����ˡ�����������</p>
                                                <span className={style.sep}></span>
                                                <span className={style.add}>Tips:����һ������SPA</span>

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
                                <h2>���е����� �� ��δ�� ����Զ  </h2>
                                <p>��ÿ���˵��ഺ����������й�һ�ι������е��㽣�һ��˵�߾��ߵ����С���������ʵ���Ϊ���ֵ�ԭ��������õ�ϣ�������ÿ����ҹ�λص���������</p>
                                <div className={style.right_comment}>
                                    <div className={style.comtain_1}>
                                        <div className={style.twitter}>
                                            <h6>һ�ݵ���:</h6>
                                            <a href="#">��</a>
                                            <p>����������Ѻۣ����ǹ�����ĵط��������ǿƶ�д��һ��ʫ������;֮���Ҷ����������˽⡣�����ٸ��μ����ֵ�ʱ��һ���Ӻ���ͷ�����μǾ�������С�����ʫ���������ʺ����˱����еı�﷽ʽ��</p>
                                        </div>
                                        <div className={style.facebook}>
                                            <h6>Yozukiëë��</h6>
                                            <img src="https://b3-q.mafengwo.net/s12/M00/17/7F/wKgED1vpTYaAK6MfAAkdaR5NnKs66.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90" width='30px' height='30px' />
                                            {/* <i className={style.MAvaTagfengshou}></i> */}
                                            <p>���Ŷ�����֮������������󣬰Ѿ�ᦴ��������죬��������Ʈ���һ������ᦣ�����������Դ��������ɫ�ʡ�</p>
                                        </div>
                                    </div>
                                    <div className={style.comtain_1}>
                                        <h3>�׿���δ�� �����</h3>
                                        <span>�ܷ��ٵ����</span>
                                    </div>
                                    <div className={style.comtain_1}>
                                        <h3>���� ������</h3>
                                        <span>������ʷ�ĺ��ظ�</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.show}>
                            {this.state.travelsData.map((item, index) => {
                                return <Japen key={index} aimg={item.img} atitle={item.publisher} aInfo={item.info} acolor='#f3a647' />
                            })}
                        </div>
                    </Col>
                </Row>

            </div>



        );
    }
}

export default Home;