import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import style from './Login.module.css'
import Axios from '../../Axios/Axios';
import { withRouter } from 'react-router-dom'
class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                Axios.post('/login', values)
                    .then(res => {
                        console.log(res)
                        if (res.data.msg == "none") {
                            alert("用户不存在")
                        } else if (res.data.msg == "same") {
                            alert("登陆成功");
                            this.props.history.push('/')
                            window.sessionStorage.setItem("user", JSON.stringify(res.data.userinfo))
                            console.log(window.sessionStorage)
                        } else if (res.data.msg == 'different') {
                            alert("密码错误")
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.loginAll}>
                <video autoPlay muted loop>
                    <source src={require("../../video/190226114427554623_480.mp4")} />
                </video>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox className={style.cbox}>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
          </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
          </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}


export default  Form.create()(Login);