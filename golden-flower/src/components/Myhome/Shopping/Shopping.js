import React, { Component } from 'react';
import style from './Shopping.module.css'

class Shopping extends Component {
    render() {
        return (
            <div >
                <div className={style.mian}>
                    <div className={style.select}>
                        <input type="checkbox" name="" id="" />
                        <img src="https://n4-q.mafengwo.net/s10/M00/5A/8D/wKgBZ1uHnH6AQ43QAAUrbiurH6o57.jpeg" alt=""/>
                    </div>
                    <div className={style.detail}>
                      一价全包·重庆往返马尔代夫萨芙莉岛7天5晚自由行（水飞上岛+浮潜A级+4晚水上别墅+限时免费升级一价
                    </div>
                    <div className={style.price}>
                        ￥15199
                    </div>
                    <div className={style.discount}>

                    </div>
                    <div className={style.count}>1</div>
                    <div className={style.total}>￥15199</div>
                    <div className={style.del}><a href='javascript:void(0)'>收藏/删除</a></div>
                </div>

            </div>
        );
    }
}

export default Shopping;