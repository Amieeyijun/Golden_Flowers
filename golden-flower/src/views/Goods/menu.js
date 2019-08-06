import React from 'react';
import { Menu } from 'antd';
import style from './Goods.module.css';

function changCity(e) {
    if (e && e.preventDefault) { e.preventDefault(); }
    else {
        window.event.returnValue = false;
    }
   document.getElementById('city').innerHTML=e.target.innerHTML;
}
const menu = (
    <Menu>
        <Menu.Item key="0">
            <div className={style.menu}>
                <span>热门出发地</span>
                <ul className={style.hotCity} onClick={changCity}>
                    <li>
                        <a href="#">全国</a>
                    </li>
                    <li>
                        <a href="#">北京</a>
                    </li>
                    <li>
                        <a href="#">上海</a>
                    </li>
                    <li>
                        <a href="#">天津</a>
                    </li>
                    <li>
                        <a href="#">成都</a>
                    </li>
                    <li>
                        <a href="#">重庆</a>
                    </li>
                    <li>
                        <a href="#">杭州</a>
                    </li>
                    <li>
                        <a href="#">广州</a>
                    </li>
                    <li>
                        <a href="#">深圳</a>
                    </li>
                    <li>
                        <a href="#">广州</a>
                    </li>
                    <li>
                        <a href="#">昆明</a>
                    </li>
                    <li>
                        <a href="#">香港</a>
                    </li>
                    <li>
                        <a href="#">西安</a>
                    </li>
                    <li>
                        <a href="#">澳门</a>
                    </li>
                    <li>
                        <a href="#">武汉</a>
                    </li>
                </ul>
            </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
            <div className={style.menu} onClick={changCity}>
                <span>A</span>
                <ul>
                    <li>
                        <a href="#">澳门</a>
                    </li>
                </ul>
            </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
            <div className={style.menu} onClick={changCity}>
                <span>B</span>
                <ul>
                    <li>
                        <a href="#">北京</a>
                    </li>
                    <li>
                        <a href="#">包头</a>
                    </li>
                    <li>
                        <a href="#">北海</a>
                    </li>
                </ul>
            </div>

        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            <div className={style.menu} onClick={changCity}>
                <span>C</span>
                <ul>
                    <li>
                        <a href="#">成都</a>
                    </li>
                    <li>
                        <a href="#">长沙</a>
                    </li>
                    <li>
                        <a href="#">长春</a>
                    </li>
                    <li>
                        <a href="#">重庆</a>
                    </li>
                    <li>
                        <a href="#">常州</a>
                    </li>
                    <li>
                        <a href="#">长治</a>
                    </li>
                </ul>
            </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">
            <div className={style.menu} onClick={changCity} >
                <span>D</span>
                <ul>
                    <li>
                        <a href="#">大连</a>
                    </li>
                    <li>
                        <a href="#">东莞</a>
                    </li>
                    <li>
                        <a href="#">大理</a>
                    </li>
                    <li>
                        <a href="#">东北</a>
                    </li>
                    <li>
                        <a href="#">大同</a>
                    </li>
                </ul>
            </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="5">
            <div className={style.menu} onClick={changCity}>
                <span>F</span>
                <ul>
                    <li>
                        <a href="#">福州</a>
                    </li>
                    <li>
                        <a href="#">佛山</a>
                    </li>

                </ul>
            </div>
        </Menu.Item>
    </Menu>
);
export default menu;