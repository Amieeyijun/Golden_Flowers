import React, { Component } from 'react';
import style from './Search.module.css';
import { Menu, Dropdown, Button, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            景点
      </Menu.Item>
        <Menu.Item key="2">
            游记
      </Menu.Item>
    </Menu>
);
function handleMenuClick(e) {
    window.mykey = e.key
    document.getElementById('alls').innerHTML = e.item.props.children

}

class Search extends Component {
    constructor(props) {
        super(props);
        this.serachs = this.serachs.bind(this);
        this.handel = this.handel.bind(this);
        this.change = this.change.bind(this);
        this.state = {
            keywords: '',
            alls: '全部'
        }

    }
    // 双向绑定
    change(e) {
        this.setState({
            keywords: e.target.value
        })
    }
    // 搜索
    serachs() {
        
        this.setState({
            keywords: ''
        })
        if (window.mykey == 1) {
            this.props.history.push(`/goodsDetail?${this.refs.myinput.value}`)
        }
        if (window.mykey == 2) {
            this.props.history.push(`/travelsdetail?${this.refs.myinput.value}`)
        }

    }
    //回车搜索
    handel(e) {
        if (e.nativeEvent.keyCode === 13) {
            this.setState({
                keywords: ''
            })
            if (window.mykey == 1) {
                this.props.history.push(`/goodsDetail?${this.refs.myinput.value}`)
            }
            if (window.mykey == 2) {
                this.props.history.push(`/travelsdetail?${this.refs.myinput.value}`)
            }
        }
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
                                <Dropdown overlay={menu}>
                                    <Button>
                                        <span id='alls'>全部</span> <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </div>
                            <input type="text" placeholder='来日本邂逅浪漫花海' value={this.state.keywords} onChange={this.change} onKeyDown={this.handel}
                                ref='myinput' />

                            <img src={require('../../imgs/search.png')} onClick={this.serachs} />

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(Search);