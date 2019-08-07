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
        label: '�㽭',
        children: [
            {
                value: 'hangzhou',
                label: '����',
                children: [
                    {
                        value: 'xihu',
                        label: '����',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: '�Ĵ�',
        children: [
            {
                value: 'nanjing',
                label: '�ɶ�',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: '��ţ��',
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
                            alert("�޸ĳɹ�")
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
                    <h1>�޸���Ϣ</h1>
                    <Form.Item
                        label={
                            <span>
                                �û��ǳ�&nbsp;
                <Tooltip title="What do you want others to call you?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        }
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="����" hasFeedback>
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
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="ȷ������" hasFeedback>
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
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
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
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="��ס��">
                        {getFieldDecorator('residence', {
                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                            rules: [
                                { type: 'array', required: true, message: 'Please select your habitual residence!' },
                            ],
                        })(<Cascader options={residences} />)}
                    </Form.Item>
                    <Form.Item label="��ϵ��ʽ">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                    </Form.Item>


                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            �޸�
            </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create()(AdminInfo);