import React, { Component } from 'react';
import style from './Shopping.module.css'

class Shopping extends Component {
    render() {
        return (
            <div >
                <div className={style.mian}>
                    <div className={style.select}>
                        <input type="checkbox" name="" id="" />
                        <img src={this.props.imgs} />
                    </div>
                    <div className={style.detail}>
                      {this.props.details}
                    </div>
                    <div className={style.price}>
                        {this.props.siglePrice}
                    </div>
                    <div className={style.discount}>

                    </div>
                    <div className={style.count}>1</div>
                    <div className={style.total}> {this.props.siglePrice}</div>
                    <div className={style.del}><a href='javascript:void(0)'>收藏/删除</a></div>
                </div>

            </div>
        );
    }
}

export default Shopping;