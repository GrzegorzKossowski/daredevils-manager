import { Divider, Layout, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from 'hooks';
import AvatarProvider from 'components/AvatarProvider';

const { Header } = Layout;

interface IDashboardHeaderProps {}

const DashboardHeader = ({ ...restProps }: IDashboardHeaderProps) => {
    const { userName, moneyAmount, userLevel, sex } = useAppSelector(
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
                <Tooltip
                    title={`Money amount. So far you have got ${moneyAmount} coins.`}
                >
                    <FontAwesomeIcon
                        icon={faSackDollar}
                        style={{ marginRight: '10px' }}
                    />
                    {moneyAmount}
                </Tooltip>
                <Divider type='vertical' />
                <span>{userName}</span>
                <div
                    style={{
                        width: '40px',
                        height: '40px',
                        overflow: 'hidden',
                        borderRadius: '50%',
                    }}
                >
                    <AvatarProvider sex={sex} width='40' height='40' />
                </div>
            </Space>
        </Header>
    );
};

export default DashboardHeader;
