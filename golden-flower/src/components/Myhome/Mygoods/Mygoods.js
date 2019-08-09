import React, { Component } from 'react';
import store from '../../../store';
import style from './Mygoods.module.css';
import Shopping from '../Shopping/Shopping'
class Mygoods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: []
        }
        // ����
        this.getStateData = this.getStateData.bind(this)
        store.subscribe(this.getStateData)
    }
    getStateData() {
        this.setState({ goodsList: store.getState().list })
    }
    componentDidMount(){
        this.getStateData();
    }
    render() {
        return (
            <div className={style.Mygoods}>
                <div className={style.main}>
                    <div className={style.header}>
                        <ul >
                            <li><input type="checkbox" name="" id="" /></li>
                            <li>��Ʒ��Ϣ</li>
                            <li>����</li>
                            <li>�Ż�</li>
                            <li>����</li>
                            <li>С��</li>
                            <li>����</li>
                        </ul>
                    </div>
                    <div className={style.item}>
                        {this.state.goodsList.map((item, index) => {
                            return (<Shopping key={index}  imgs={item.src2} details={item.package} siglePrice={item.price} />)
                        })}

                    </div>
                </div>
            </div>
        );
    }
}

export default Mygoods;