import React, { Component } from 'react';
import style from './Product.module.css';
import axios from '../../Axios/Axios';

class Product extends Component {
    constructor(props) {
        super(props)
        this.addCart = this.addCart.bind(this)
        this.state = {
            goodsCart: []
        }
    }
    addCart(e) {
        this.props.addCart(e)
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