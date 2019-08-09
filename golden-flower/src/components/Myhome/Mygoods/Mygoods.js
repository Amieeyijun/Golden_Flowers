import React, { Component } from 'react';
import store from '../../../store';
import style from './Mygoods.module.css';
import Shopping from '../Shopping/Shopping'
class Mygoods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: []
        }
        // 订阅
        this.getStateData = this.getStateData.bind(this)
        store.subscribe(this.getStateData)
    }
    getStateData() {
        this.setState({ goodsList: store.getState().list })
    }
    componentDidMount(){
        this.getStateData();
    }
    render() {
        return (
            <div className={style.Mygoods}>
                <div className={style.main}>
                    <div className={style.header}>
                        <ul >
                            <li><input type="checkbox" name="" id="" /></li>
                            <li>商品信息</li>
                            <li>单价</li>
                            <li>优惠</li>
                            <li>数量</li>
                            <li>小计</li>
                            <li>操作</li>
                        </ul>
                    </div>
                    <div className={style.item}>
                        {this.state.goodsList.map((item, index) => {
                            return (<Shopping key={index}  imgs={item.src2} details={item.package} siglePrice={item.price} />)
                        })}

                    </div>
                </div>
            </div>
        );
    }
}

export default Mygoods;