import React, { Component } from 'react';
// import WangEditor from "../../components/travels/WangEditor"
import { Row, Col } from 'antd';
import style from "./Travel.module.css"
import TravelsItem from '../../components/travels/travelsItem/TravelsItem';
import { Carousel } from 'antd';
import Axios from "../../Axios/Axios"

class Travel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ItemData: [
                [], [], []
            ]
        }

    }
    componentDidMount() {
        Axios.get('/travels/getTravels')
            .then(res => {
                console.log(res.data)
                this.setState({
                    ItemData: res.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
    render() {
        return (
            <div>
                {/* ÂÖ²¥Í¼ */}
                < div className={style.carousel} >
                    <Carousel autoplay>
                        <div>
                            <img src="https://b2-q.mafengwo.net/s11/M00/70/EA/wKgBEFrommeAPGRWAAx5znWzWOc78.jpeg?imageMogr2%2Fstrip" />
                        </div>
                        <div>
                            <img src="https://n1-q.mafengwo.net/s12/M00/74/41/wKgED1wtqzmAUX2zAApenEBMVnA95.jpeg?imageMogr2%2Fstrip" />
                        </div>
                        <div>
                            <img src="http://p2-q.mafengwo.net/s13/M00/97/F2/wKgEaVx4loGAWPYMAAdmk43kjfs45.jpeg?imageMogr2%2Fstrip" />
                        </div>
                        <div>
                            <img src="http://n4-q.mafengwo.net/s13/M00/B9/87/wKgEaVxr_QCAP-b4AA-FKV6HHd476.jpeg?imageMogr2%2Fstrip" />
                        </div>
                    </Carousel>
                </div >


                <div className={style.backimg}>
                    <div className={style.box}>
                        <div className={style.gutter_example}>
                            <Row gutter={16}>
                                <Col className={style.gutter_row} span={8}>
                                    <div className={style.gutter_box}>
                                        {this.state.ItemData[0].map((item, ind) => {
                                            return <TravelsItem ItemData={item} key={ind}></TravelsItem>
                                        })}
                                    </div>
                                </Col>
                                <Col className={style.gutter_row} span={8}>
                                    <div className={style.gutter_box}>
                                        {this.state.ItemData[1].map((item, ind) => {
                                            return <TravelsItem ItemData={item} key={ind}></TravelsItem>
                                        })}
                                    </div>
                                </Col>
                                <Col className={style.gutter_row} span={8}>
                                    <div className={style.gutter_box}>
                                        {this.state.ItemData[2].map((item, ind) => {
                                            return <TravelsItem ItemData={item} key={ind}></TravelsItem>
                                        })}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Travel;