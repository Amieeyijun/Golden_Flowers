import React, { Component } from 'react';
// import './WangEditor.css';
import E from 'wangeditor';
import Axios from '../../../Axios/Axios';


class WangEditor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            editorContent: '',
            myhtml: "",
            travels: {
                user: "",
                title: "",
                info: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        // 把输入框的信息设置到 username数据之上
        let v = e.target.value;
        let n = e.target.name;
        let data = this.state.travels;
        data[n] = v;
        this.setState({
            travels: data
        });
    }
    componentDidMount() {
        const elem = this.refs.editorElem
        const editor = new E(elem)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: html
            })
        }
        editor.create();
        // Axios.get('http://localhost:8080/display')  //Promise
        //     .then(res => {
        //         console.log(res.data)
        //         this.setState({
        //             myhtml: res.data[0].content
        //         });
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     })
    }
    clickHandle() {
        Axios.post('/travels/addTravels', {
            travels: this.state.travels,
            content: this.state.editorContent
        })  //Promise
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err);
            })
        this.setState({
            travels: {
                user: "",
                title: "",
                info: ""
            }
        })
    }
    dispalyData() {
        // Axios.get('/travels/display', {
        //     travels: this.state.travels,
        //     content: this.state.editorContent
        // })  //Promise
        //     .then(res => {
        //         console.log(res.data)
        //         this.setState({
        //             myhtml: res.data[0].content
        //         });
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     })
    }
    render() {
        return (
            <div style={{ width: "800px",margin:"15px auto",textAlign:"center" }}>
                发布人:   <input type="text" name="user" onChange={this.handleChange} value={this.state.travels.user} style={{ marginBottom:"15px"}} /><br />
                标题:     <input type="text" name="title" onChange={this.handleChange} value={this.state.travels.title} style={{ marginBottom:"15px"}}/> <br />
                简介:     <input type="text" name="info" onChange={this.handleChange} value={this.state.travels.info} style={{ marginBottom:"15px"}}/><br />

                <div>
                    {/* 将生成编辑器 */}
                    <div ref="editorElem" style={{ textAlign: 'left' }}>
                    </div>

                    <button onClick={this.clickHandle.bind(this)}>提交</button>
                </div>
                <hr />


                {/* <div dangerouslySetInnerHTML={{ __html: this.state.myhtml }} style={{ textAlign: "left" }}></div> */}
            </div >
        );
    }


}

export default WangEditor;
