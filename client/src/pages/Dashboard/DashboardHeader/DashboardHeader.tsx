import { Avatar, Divider, Layout, Space, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from 'hooks';

const { Header } = Layout;

interface IDashboardHeaderProps {}

const DashboardHeader = ({ ...restProps }: IDashboardHeaderProps) => {
    const { userName, moneyAmount, userLevel } = useAppSelector(
        state => state.user
    );
    return (
        <Header style={{ display: 'flex', justifyContent: 'end' }}>
            <Space>
                <Tooltip title={`${userName}'s level.`}>
                    <FontAwesomeIcon
                        icon={faChartSimple}
                        style={{ marginRight: '10px' }}
                    />
                    {userLevel}
                </Tooltip>
                <Divider type='vertical' />
                <Tooltip title={`Money amount. So far you have got ${moneyAmount} coins.`}>
                    <FontAwesomeIcon
                        icon={faSackDollar}
                        style={{ marginRight: '10px' }}
                    />
                    {moneyAmount}
                </Tooltip>
                <Divider type='vertical' />
                <span>{userName}</span>
                <Avatar icon={<UserOutlined />} />
            </Space>
        </Header>
    );
};

export default DashboardHeader;
