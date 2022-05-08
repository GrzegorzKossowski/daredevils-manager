import React, { BaseSyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Form,
    Input,
    Row,
    Col,
    Space,
    Dropdown,
    message,
    Menu,
} from 'antd';
import { ManOutlined, WomanOutlined, DownOutlined } from '@ant-design/icons';
import CenteredContainer from 'components/molecules/CenteredContainer';
import { getFemaleName, getMaleName } from 'data/randomNames';

interface INewGameProps {}

export const NewGame = ({ ...restProps }: INewGameProps) => {
    const [userName, setUserName] = useState('');
    const [form] = Form.useForm();
    let navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        form.resetFields();
        navigate('/');
    };

    const handleMenuClick = (event: any) => {
        const { key } = event;
        let name = '';
        switch (key) {
            case 'female':
                name = getFemaleName();
                break;

            default:
                name = getMaleName();
                break;
        }
        form.setFieldsValue({
            username: name,
            sex: key,
        });
        message.info(`Generating ${key} name: ${name}.`);
    };

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Male name',
                    key: 'male',
                    icon: <ManOutlined />,
                },
                {
                    label: 'Female name',
                    key: 'female',
                    icon: <WomanOutlined />,
                },
            ]}
        />
    );

    return (
        <CenteredContainer>
            <Form
                form={form}
                onFinish={onFinish}
                initialValues={{ username: '', sex: 'male' }}
            >
                <Form.Item
                    name='username'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username',
                        },
                    ]}
                >
                    <Input
                        autoComplete='off'
                        placeholder='Username'
                        value={userName}
                    />
                </Form.Item>
                <Form.Item name='sex' hidden>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Space
                        align='center'
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Dropdown overlay={menu}>
                            <Button type='default'>
                                <Space>
                                    Generate
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </CenteredContainer>
    );
};
