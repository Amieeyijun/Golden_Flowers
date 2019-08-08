import React, { Component } from 'react';
import style from './Product.module.css';
import axios from '../../Axios/Axios';
import store from '../../store'

class Product extends Component {
    constructor(props) {
        super(props)
        this.addCart = this.addCart.bind(this)
        this.state = {
            goodsCart: [],
            goods: {
                imgs: ''
            }
        }
    }
    addCart(e) {
        console.log(e.target.id);
        axios.get('/goods/addCart',{params:{id:e.target.id}})
        .then(res=>{
            // 定义动作，加入购物车
            let action ={
                type: 'add_cart',
               value: res.data
            }
            // 派遣任务
            store.dispatch(action)

        })
        .catch(err=>{
            console.log(err)
        }
        )
    }
    render() {
        return (
            <div>
                <div className={style.item} ref='goods'>
                    <div className={style.image}>
                        <img src={this.props.Gimg} alt="" />
                    </div>
                    <div className={style.caption}>
                        <div className={style.caption_title}>
                            <h3>{this.props.Gtitle}</h3>
                        </div>
                        <div className={style.caption_price}>
                            <span><b>{this.props.Gprice}</b>起</span>
                            <span className={style.cart}>店铺:亲亲假期</span>
                            <div className={style.shoping} onClick={this.addCart} >
                                <img src={require('../../imgs/shoppingCart.png')} id={this.props.Gid} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Product;