import React, { Component } from 'react';
import { Row, Col } from 'antd';
import style from './Goods.module.css';
import { Dropdown } from 'antd';
import LinkageFrame from "../../components/LinkageFrame/LinkageFrame"
import axios from '../../Axios/Axios'
import menu from './menu'
import Product from '../../components/Product/Product'
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
            city: '全国'
        }
    }
    componentDidMount() {
        axios.get('/goods/getitems')
            .then((res) => {
                this.setState({
                    productList: res.data
                })
                console.log(this.state.productList);

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
                            <div className={style.mode}>
                                <div className={style.mod_hd}>
                                    <h3>本周热卖榜</h3>
                                    <span>大家都在买</span>
                                    <p>
                                        <img src={require('../../imgs/change.png')} />
                                        <a href="#">换一换</a>
                                    </p>
                                </div>
                                <div className={style.mod_promo_item}>
                                    {this.state.productList.map((item, index) => {
                                        if (index < 4) {
                                            return <Product Gimg={item.src1} key={index} Gtitle={item.package} Gprice={item.price} Gid={item.id}/>
                                        }
                                    })}
                                </div>
                            </div>
                            <div className={style.mode}>
                                <div className={style.mod_hd}>
                                    <h3>休闲去哪儿</h3>
                                    <p>
                                        <img src={require('../../imgs/change.png')} />
                                        <a href="#">换一换</a>
                                    </p>
                                </div>
                                <div className={style.mod_promo_item}>
                                    {this.state.productList.map((item, index) => {
                                        if (index >=4 && index <8) {
                                            return <Product Gimg={item.src1} key={index} Gtitle={item.package} Gprice={item.price}  Gid={item.id} />
                                        }
                                    })}
                                </div>
                            </div>

                            <div className={style.mode}>
                                <div className={style.mod_hd}>
                                    <h3>游轮度假</h3>
                                    <p>
                                        <img src={require('../../imgs/change.png')} />
                                        <a href="#">换一换</a>
                                    </p>
                                </div>
                                <div className={style.mod_promo_item}>
                                    {this.state.productList.map((item, index) => {
                                        if (index >=8 && index <12) {
                                            return <Product Gimg={item.src1} key={index} Gtitle={item.package} Gprice={item.price}  Gid={item.id} />
                                        }
                                    })}
                                </div>
                            </div>
                            <div className={style.mode}>
                                <div className={style.mod_hd}>
                                    <h3>和你去看海</h3>
                                    <p>
                                        <img src={require('../../imgs/change.png')} />
                                        <a href="#">换一换</a>
                                    </p>
                                </div>
                                <div className={style.mod_promo_item}>
                                    {this.state.productList.map((item, index) => {
                                        if (index >=12 && index <16) {
                                            return <Product Gimg={item.src1} key={index} Gtitle={item.package} Gprice={item.price}  Gid={item.id} />
                                        }
                                    })}
                                </div>
                            </div>
                            <div className={style.mode}>
                                <div className={style.mod_hd}>
                                    <h3>度假胜地</h3>
                                    <p>
                                        <img src={require('../../imgs/change.png')} />
                                        <a href="#">换一换</a>
                                    </p>
                                </div>
                                <div className={style.mod_promo_item}>
                                    {this.state.productList.map((item, index) => {
                                        if (index >=16 && index <20) {
                                            return <Product Gimg={item.src1} key={index} Gtitle={item.package} Gprice={item.price}  Gid={item.id} />
                                        }
                                    })}
                                </div>
                            </div>
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