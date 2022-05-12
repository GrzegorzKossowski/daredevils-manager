import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, MenuProps, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    fa3,
    faDice,
    faMugHot,
    faChampagneGlasses,
    faUserPen,
} from '@fortawesome/free-solid-svg-icons';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import { useAppSelector } from 'hooks';

const { Content, Footer, Sider } = Layout;
const { Title } = Typography;

interface IDashboardProps {}
type MenuItem = Required<MenuProps>['items'][number];

export const Dashboard = ({ ...restProps }: IDashboardProps) => {
    const { userLevel, moneyAmount } = useAppSelector(store => store.user);
    let navigate = useNavigate();

    const onClick: MenuProps['onClick'] = e => {
        navigate(`/dashboard/${e.key}`);
    };

    const getItem = (
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        level?: number,
        wealth?: number,
        children?: MenuItem[]
    ): MenuItem => {
        if (wealth && wealth > moneyAmount) return null;
        if (level && level > userLevel) return null;
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    };

    const items: MenuItem[] = [
        getItem('Town', 'town', <HomeOutlined />, 0),
        getItem(
            'Tavern',
            'tavern',
            <FontAwesomeIcon icon={faMugHot} />,
            0,
            100
        ),
        // getItem('Bank', 'sub1', <BankOutlined />, 2, undefined, [
        //     getItem('Usual client', '3', undefined, 1),
        //     getItem('Vip client', '4', undefined, 2),
        //     getItem('Owner', '5', undefined, 3),
        // ]),
        // getItem('Teams', 'sub2', <TeamOutlined />, 1, 100, [
        //     getItem('Team 1', '6'),
        //     getItem('Team 2', '8'),
        // ]),
        // getItem('Shop', '9', <ShopOutlined />),
        // getItem('Stats', '10', <PieChartOutlined />),
        // getItem('User', '11', <UserOutlined />),
    ];

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <Title
                        style={{
                            textAlign: 'center',
                            margin: '10px 0',
                            width: '100%',
                        }}
                        level={4}
                    >
                        Daredevils Manager
                    </Title>
                    <Menu
                        theme='dark'
                        mode='inline'
                        defaultSelectedKeys={['1']}
                        items={items}
                        onClick={onClick}
                    />
                </Sider>
                <Layout>
                    <DashboardHeader />
                    <Content>
                        <Outlet />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </>
    );
};
