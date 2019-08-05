import React from 'react';
import { Link } from "react-router-dom"
import style from './People.module.css'
import { Avatar } from 'antd';
function Load() {
    console.log(JSON.parse(window.sessionStorage.getItem("user")))
    let userone = JSON.parse(window.sessionStorage.getItem("user"))
    return (
        <div className={style.login}>
            <div className={style.hello}>欢迎您~~</div>
            <Link to='/admin'>{userone.username}</Link>
            <div className={style.header}>
            <Link to='/admin'><Avatar size="large" src="https://i02piccdn.sogoucdn.com/2534159fde91fa3c" title="个人中心"/></Link>
            </div>

        </div>
    );
}

export default Load;