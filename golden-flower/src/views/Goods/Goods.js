import React, { Component } from 'react';
import { Row, Col } from 'antd';
import style from './Goods.module.css';
import Product from '../../components/Product/Product'
import { Dropdown } from 'antd';
import LinkageFrame from "../../components/LinkageFrame/LinkageFrame"
import axios from '../../Axios/Axios'
import menu from './menu'
class Goods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            list: [],
            remaiList: [],
            restList: [],
            seaList: [],
            boutList: [],
            city:'全国'
        }
    }
    componentDidMount() {
        axios.get('/goods/getitems')
            .then((res) => {
                this.setState({
                    productList: res.data
                })
            })
            .catch(err => { console.log(err) })
    }   
    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className={style.seach}>
                            <div className={style.inp}>
                                <div className={style.departure}>
                                    <Dropdown overlay={menu} trigger={['click']}  >
                                        <a className="ant-dropdown-link" href="#">
                                            <span id='city'>全国</span> <span>出发</span>
                                        </a>
                                    </Dropdown>
                                </div>
                                <img src={require('../../imgs/right.png')} />
                                <input type="text" placeholder='请输入目的地/产品名称' />
                                <div className={style.inp_search}>
                                    <img src={require('../../imgs/sousuo.png')} />
                                </div>
                            </div>
                        </div>
                        <div className={style.rousel}>
                            <LinkageFrame></LinkageFrame>
                        </div>
                        <div className={style.main}>
                          
                        </div>
                        <div className={style.adver}>
                            <img src={require('../../imgs/adver.jpg')} />
                        </div>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Goods;