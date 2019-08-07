import React from 'react';
import style from './Myreview.module.css';
import { Icon } from 'antd';
export default function Myreview() {
    return (
        <div className={style.myreview}>
            <div className={style.writereview}>
                <div>
                    <h1>0</h1>
                    <div>笔记点评</div>
                    <span></span>
                </div>
                <div>
                    <h1>0</h1>
                    <div>点评</div>
                    <span></span>
                </div>
                <div>
                    <h1>0</h1>
                    <div>点赞</div>
                    <span></span>
                </div>
                <div>
                    <h1>0</h1>
                    <div>未点评</div>
                    <span></span>
                </div>
                <div title="写点评"><a href="#"><Icon type="edit" />写点评</a></div>
            </div>

            <div className={style.earth}>
                <img src={require('../../../imgs/bc_1.jpg')} alt=""/>

                <img src="http://css.mafengwo.net/images/home_new2015/no_num.png" alt=""/>
                <div>这里的世界静悄悄~~</div>
            </div>
        </div>
    )
}