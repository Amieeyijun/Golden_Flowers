import React, { Component } from 'react';
import style from './Japen.module.css';
import { withRouter } from 'react-router-dom'
class Japen extends Component {
    constructor(props) {
        super(props)
        this.detail = this.detail.bind(this)
    }
    detail(e) {
        console.log(e.target.id)
        if (e.target.id == '0') {
            this.props.history.push('/goods')
        }
        if (e.target.id == '1') {
            this.props.history.push('/travel')
        }

    }
    render() {
        return (
            <div>
                <div className={style.main} >
                    <div className={style.product_img}>
                        <img src={this.props.aimg} />
                    </div>
                    <div className={style.product_con}>
                        <div className={style.name} style={{ background: this.props.acolor }} onClick={this.detail} id={this.props.aid}>
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