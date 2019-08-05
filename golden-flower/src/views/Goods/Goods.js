import React, { Component } from 'react';
import { Row, Col } from 'antd';
import style from './Goods.module.css'
import { Menu, Dropdown, Icon } from 'antd'
const menu = (
    <Menu>
        <Menu.Item key="0">
            <div>
                <span>热门出发地</span>
                <ul className={style.hotCity} >
                    <li>
                        <a href="#">全国</a>
                    </li>
                    <li>
                        <a href="#">北京</a>
                    </li>
                    <li>
                        <a href="#">上海</a>
                    </li>
                    <li>
                        <a href="#">天津</a>
                    </li>
                    <li>
                        <a href="#">成都</a>
                    </li>
                    <li>
                        <a href="#">重庆</a>
                    </li>
                    <li>
                        <a href="#">杭州</a>
                    </li>
                    <li>
                        <a href="#">广州</a>
                    </li>
                    <li>
                        <a href="#">深圳</a>
                    </li>
                    <li>
                        <a href="#">广州</a>
                    </li>
                    <li>
                        <a href="#">昆明</a>
                    </li>
                    <li>
                        <a href="#">香港</a>
                    </li>
                    <li>
                        <a href="#">西安</a>
                    </li>
                    <li>
                        <a href="#">澳门</a>
                    </li>
                    <li>
                        <a href="#">武汉</a>
                    </li>
                </ul>
            </div>
        </Menu.Item>
        <Menu.Item key="1">


        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">

        </Menu.Item>
    </Menu>
);

class Goods extends Component {
    constructor(props) {
        super(props)
        this.slectCity = this.slectCity.bind(this)
    }
    slectCity(e) {
        console.log(e.target);
    }
    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className={style.seach}>
                            <div className={style.inp}>
                                <div className={style.departure}>
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <a className="ant-dropdown-link" href="#">
                                            全国 <span>出发</span>
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
                        <div className={style.main}></div>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Goods;