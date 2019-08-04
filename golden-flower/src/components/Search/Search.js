import React, { Component } from 'react';
import style from './Search.module.css';
import { Menu, Dropdown, Icon } from 'antd';
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="###">景点</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="###">游记</a>
        </Menu.Item>
        <Menu.Divider />
    </Menu>
);


class Search extends Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            keywords: ''
        }

    }
    // 双向绑定
    change(e) {
        this.setState({
            keywords:e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className={style.subscribe}>
                    <span className={style.start}></span>
                    <div className={style.search}>
                        <p>生命是场修行。短的是旅途，长的是人生。旅行，能让你遇到那个更好的自己</p>
                        <div className={style.inp}>
                            <div className={style.all}>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link" href="#">
                                        全部 <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </div>
                            <input type="text" placeholder='来日本邂逅浪漫花海' value={this.state.keywords} onChange={this.change} />
                            <img src={require('../../imgs/search.png')} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Search;