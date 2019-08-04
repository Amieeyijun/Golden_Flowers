import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Axios from '../../Axios/Axios'

import style from './Attract.module.css'

class Attract extends Component {
    constructor(props) {
        super(props)
        this.detail = this.detail.bind(this)
    }
    detail() {
        this.props.history.push('/goods')
    }
    componentDidMount() {
        Axios.get('/gettravel')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (
            <div className={style.attract}>
                <div className={style.mainBox}>
                    <img src="https://n3-q.mafengwo.net/s6/M00/98/EB/wKgB4lJeXT2ASQt1AAposujzcSM43.jpeg" />
                    <div className={style.mainBox_constr}>
                        <h3>斯里兰卡</h3>
                        <p>尽的海滩，好客的人民，成群的大象，迷人的海浪，有趣的火车之旅，著名的红茶，僧伽罗王朝的古迹中，看风韵犹存的古城与蓝色海滩相互交映，穿梭于花香清幽一尘不染的佛塔庙宇，看虔诚幸福的人们祈福......这就是说不尽的斯里兰卡</p>
                        <div onClick={this.detail}>查看更多</div>
                    </div>
                </div>
                <div className={style.little}>
                    <div>
                        <img src={require('../../imgs/japen.jpeg')} />
                        <div className={style.title}>
                            日本
                        </div>
                    </div>
                    <div>
                        <img src={require('../../imgs/nrimenggu.jpeg')} />
                        <div className={style.title}>
                            内蒙古
                        </div>
                    </div>
                    <div>
                        <img src={require('../../imgs/xizang.png')} />
                        <div className={style.title}>
                            西藏
                        </div>
                    </div>
                    <div>
                        <img src={require('../../imgs/shaba.jpeg')} />
                        <div className={style.title}>
                            沙巴
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Attract);