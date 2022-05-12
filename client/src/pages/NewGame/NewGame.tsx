import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Form,
    Input,
    Space,
    Dropdown,
    message,
    Menu,
    Radio,
} from 'antd';
import { ManOutlined, WomanOutlined, DownOutlined } from '@ant-design/icons';
import CenteredContainer from 'components/CenteredContainer';
import { getFemaleName, getMaleName } from 'data/randomNames';
import { useAppDispatch } from 'hooks';
import { setUserData } from 'redux/userSlice';
import AvatarProvider from 'components/AvatarProvider';

interface INewGameProps {}

export const NewGame = ({ ...restProps }: INewGameProps) => {
    const [name, setName] = useState('');
    const [sex, setSex] = useState('male');
    const dispatch = useAppDispatch();

    const [form] = Form.useForm();
    let navigate = useNavigate();

    const onFinish = (values: any) => {
        dispatch(setUserData(values));
        form.resetFields();
        navigate('/dashboard');
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
        setSex(key);
        form.setFieldsValue({
            userName: name,
            sex: key,
        });
        message.info(`Generating ${key} name: ${name}.`);
    };
    const handleFormChange = () => {
        setSex(form.getFieldValue('sex'));
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
            <AvatarProvider sex={sex} width='256' height='256' />
            <Form
                form={form}
                onFinish={onFinish}
                initialValues={{ userName: '', sex: 'male' }}
                onChange={handleFormChange}
            >
                <Form.Item
                    name='userName'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username',
                        },
                        {
                            max: 20,
                            message: 'No more than 20 characters.',
                        },
                    ]}
                >
                    <Input
                        autoComplete='off'
                        placeholder='Username'
                        value={name}
                    />
                </Form.Item>
                <Form.Item name='sex' label='Sex'>
                    <Radio.Group value={sex}>
                        <Radio value='male'>
                            <ManOutlined /> male
                        </Radio>
                        <Radio value='female'>
                            <WomanOutlined /> female
                        </Radio>
                    </Radio.Group>
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
