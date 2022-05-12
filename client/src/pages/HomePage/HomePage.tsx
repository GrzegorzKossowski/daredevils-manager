import * as React from 'react';
import { Button, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import CenteredContainer from 'components/CenteredContainer';
const { Title } = Typography;

interface IHomePageProps {}

export const HomePage = ({ ...restProps }: IHomePageProps) => {
    return (
        <CenteredContainer>
            <Row justify='center'>
                <Col sm={16} md={12} xl={10}>
                    <Title style={{ textAlign: 'center' }}>
                        Daredevils Manager
                    </Title>
                    <Title level={5} style={{ textAlign: 'center' }}>
                        An app to manage groups of daredevils who penetrate
                        unexplored dungeons under the city and make money from
                        what they find there.
                    </Title>
                </Col>
            </Row>
            <Row justify='center'>
                <Col
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Link to={'/newgame'}>
                        <Button style={{ marginBottom: '10px', width: '100%' }}>
                            New Game
                        </Button>
                    </Link>
                    <Link to={'/'}>
                        <Button disabled style={{ marginBottom: '10px' }}>
                            Continue Game
                        </Button>
                    </Link>
                    <Link to={'/dashboard'}>
                        <Button disabled style={{ marginBottom: '10px', width: '100%' }}>
                            Dashboard
                        </Button>
                    </Link>
                    {/* <Link to={'/notFound'}>
                        <Button style={{ marginBottom: '10px', width: '100%' }}>
                            Not Found Page
                        </Button>
                    </Link> */}
                </Col>
            </Row>
        </CenteredContainer>
    );
};
