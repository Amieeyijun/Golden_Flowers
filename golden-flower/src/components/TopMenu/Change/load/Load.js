import React from 'react';
import {Link} from "react-router-dom"
import style from './Load.module.css'
function Load(props) {
    console.log(props)
    return (
        <div className={style.login}>
            <Link to='/login'>登录/</Link>
            <Link to='/registered'>注册</Link>
        </div>
    );
}

export default Load;