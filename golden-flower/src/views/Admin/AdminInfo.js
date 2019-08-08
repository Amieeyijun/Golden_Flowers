import React, { Component } from 'react';
import style from "./AdminInfo.module.css";
import Axios from '../../Axios/Axios';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Button
} from 'antd';
const { Option } = Select;
const residences = [
    {
        value: 'zhejiang',
        label: '浙江',
        children: [
            {
                value: 'hangzhou',
                label: '杭州',
                children: [
                    {
                        value: 'xihu',
                        label: '西湖',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: '四川',
        children: [
            {
                value: 'nanjing',
                label: '成都',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: '金牛区',
                    },
                ],
            },
        ],
    },
];
class AdminInfo extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        userinfo:JSON.parse(window.sessionStorage.getItem("user")),
        usernumber:JSON.parse(window.sessionStorage.getItem("user")).phonenumber.slice(3),
        userlive:JSON.parse(window.sessionStorage.getItem("user")).live.split('/')
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.id = JSON.parse(window.sessionStorage.getItem("user")).id;
                Axios.post('/login/userupdata', values)
                    .then(res => {
                        console.log(res)
                        if (res.data.msg == "updata-ok") {
<<<<<<< HEAD
                            alert("修改成功")
=======
<<<<<<< HEAD
                            alert("修改成功")
=======
                            alert("�޸ĳɹ�")
>>>>>>> d66403cb313319ed5596ac8a803eecfccc5946be
                            this.props.history.push('/login')
                            window.sessionStorage.removeItem("user")
                            window.location.reload()
>>>>>>> e5b223910cabc2ce761572b4f451b94e394ee293
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        console.log(e.target)
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        return (
            <div className={style.registered}>
                <video autoPlay muted loop>
                    <source src="https://www.matter.to/wp-content/uploads/2019/06/Matter_Reel_FA.mp4" />
                </video>
                <Form {...formItemLayout} onSubmit={this.handleSubmit} >
                    <h1>修改信息</h1>
                    <Form.Item
                        label={
                            <span>
                                用户昵称&nbsp;
                <Tooltip title="What do you want others to call you?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        }
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                            initialValue:this.state.userinfo.username
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                            initialValue:this.state.userinfo.password
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="确认密码" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                            initialValue:this.state.userinfo.password
                        })(<Input.Password onBlur={this.handleConfirmBlur}  />)}
                    </Form.Item>

                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                            initialValue:this.state.userinfo.email
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="居住地">
                        {getFieldDecorator('residence', {
                            initialValue: [this.state.userlive[0], this.state.userlive[1], this.state.userlive[2]],
                            rules: [
                                { type: 'array', required: true, message: 'Please select your habitual residence!' },
                            ],
                        })(<Cascader options={residences} />)}
                    </Form.Item>
                    <Form.Item label="联系方式">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }
    
                        ],
                        initialValue:this.state.usernumber
                        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }}  />) }
                    </Form.Item>


                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            修改
            </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create()(AdminInfo);