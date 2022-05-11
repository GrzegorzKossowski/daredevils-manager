import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    Avatar,
    Button,
    Divider,
    Image,
    Layout,
    Menu,
    MenuProps,
    Result,
    Space,
    Typography,
} from 'antd';
import {
    BankOutlined,
    CoffeeOutlined,
    HomeOutlined,
    PieChartOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoffee,
    faSackDollar,
    faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
import DashboardHeader from './DashboardHeader/DashboardHeader';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

interface IDashboardProps {}
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    access?: number,
    children?: MenuItem[]
): MenuItem {
    const funds = 1500;
    if (access && access > funds) return null;
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Town', 'town', <HomeOutlined />, 1),
    getItem('Tavern', 'tavern', <CoffeeOutlined />),
    getItem('Bank', 'sub1', <BankOutlined />, 2, [
        getItem('Usual client', '3', null, 1),
        getItem('Vip client', '4', null, 2),
        getItem('Owner', '5', null, 3),
    ]),
    getItem('Teams', 'sub2', <TeamOutlined />, 1, [
        getItem('Team 1', '6'),
        getItem('Team 2', '8'),
    ]),
    getItem('Shop', '9', <ShopOutlined />),
    getItem('Stats', '10', <PieChartOutlined />),
    getItem('User', '11', <UserOutlined />),
];

export const Dashboard = ({ ...restProps }: IDashboardProps) => {
    // const [collapsed, setCollapsed] = React.useState(false);
    // const toggleCollapsed = () => {
    //     setCollapsed(!collapsed);
    // };
    const onClick: MenuProps['onClick'] = e => {
        console.log(e.key);
        // setCurrent(e.key);
    };
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                // collapsible
                // collapsed={collapsed}
                // onCollapse={toggleCollapsed}
                >
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
                        <Result
                            status='success'
                            title='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                            subTitle='Quae, consectetur! Voluptatibus nisi vitae repellendus officia deserunt quo totam omnis dolorum obcaecati sapiente, quia et eaque veniam, aperiam vel quisquam ipsam.'
                            extra={
                                <Link to={'/'}>
                                    <Button type='primary'>Back Home</Button>
                                </Link>
                            }
                        />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </>
    );
};
