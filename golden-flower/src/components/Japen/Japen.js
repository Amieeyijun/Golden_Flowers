import React, { Component } from 'react';
import style from './Japen.module.css';
import {withRouter} from 'react-router-dom'
class Japen extends Component {
    constructor(props) {
        super(props)
        this.detail = this.detail.bind(this)
    }
    detail(e) {
        this.props.history.push('/admin')
        console.log(e.target.innerHTML)
    }
    render() {  
        return (
            <div>
                <div className={style.main} onClick={this.detail}>
                    <div className={style.product_img}>
                        <img src={this.props.aimg} />
                    </div>
                    <div className={style.product_con}>
                        <div className={style.name} style={{ background: this.props.acolor }}>
                            {this.props.atitle}
                        </div>
                        <span>
                            {this.props.aInfo}
                        </span>

                    </div>

                </div>

            </div >
        );
    }
}

export default withRouter(Japen);