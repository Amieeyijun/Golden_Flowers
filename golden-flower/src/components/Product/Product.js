import React, { Component } from 'react';
import style from './Product.module.css'

class Product extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className={style.item}>
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
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Product;