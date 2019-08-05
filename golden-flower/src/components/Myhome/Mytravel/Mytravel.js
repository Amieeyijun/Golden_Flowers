import React from 'react';
import style from './Mytravel.module.css'
import {Icon} from 'antd';
export default function Mytravel(){
    return(
        <div className={style.mytravelAll}>
            <div className={style.mytravel}>
                <div>
                    <img src={require("../../../imgs/mytravel.png")} alt=""/>
                    <div><Icon type="edit" />写游记</div>
                </div>
                <img src="http://css.mafengwo.net/images/home_new2015/noyj_v2.jpg" alt=""/>
                <div className={style.del}>
                <Icon type="delete" /><h4><a href="#">已删除游记</a> </h4>
                </div>
            </div>
        </div>
    )
}