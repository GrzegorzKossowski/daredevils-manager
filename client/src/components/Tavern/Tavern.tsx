import { Button, Card, Col, Image, Row, Typography } from 'antd';
import * as React from 'react';
import styled from 'styled-components';
import DiceGame from './DiceGame/DiceGame';
import dices from '../../assets/diceGame.jpg';
import dummyPic from '../../assets/dummy-400x400-Stopwatch.jpg'

interface ITavernProps {}

const { Title, Paragraph } = Typography;
const TavernStyled = styled.div`
    padding: 2rem;
`;

export const Tavern = ({ ...restProps }: ITavernProps) => {
    const [isDiceModalVisible, setIsDiceModalVisible] = React.useState(false);
    const showDiceModal = () => {
        setIsDiceModalVisible(true);
    };

    return (
        <>
            <TavernStyled>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card bordered={true} cover={<Image src={dices} />}>
                            <Title level={3}>Guess a number</Title>
                            <Paragraph>
                                Are you lucky? Or maybe you can predict the
                                future. Can you predict a number? This is a
                                simple game for simple people. Guess the number,
                                win the money. The risk is small. For now...
                            </Paragraph>
                            <Button block onClick={showDiceModal} type='primary'>
                                Play!
                            </Button>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card bordered={true} cover={<Image src={dummyPic} />}>
                            <Title level={3}>Dice game</Title>
                            <Paragraph>
                                'Alea iacta est' said wise man once. Time to
                                roll the dice. A quick way to make easy money.
                                Provided you're lucky. Dice in hand and roll. No
                                time to waste when the dice are rolling.
                            </Paragraph>
                            <Button block disabled>
                                Roll some dice!
                            </Button>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            // title='Buy some drinks'
                            bordered={true}
                            cover={<Image src={dummyPic} />}
                        >
                            <Title level={3}>Buy some drinks</Title>
                            <Paragraph>
                                You want to screw with the company. You want to
                                earn points so that you are respected. You want
                                to be known in the area. It will cost you. Time
                                to call out 'I'm buying everyone a drink'!
                            </Paragraph>
                            <Button block disabled>
                                Socjalize!
                            </Button>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card bordered={true} cover={<Image src={dummyPic} />}>
                            <Title level={3}>The fight!</Title>
                            <Paragraph>
                                It's time for some rough play for real men. Only
                                the rich have fun like this. You can finally
                                afford it too. Bet on the fight between two
                                heroes. Or maybe you want to take part and kick
                                some ass yourself?
                            </Paragraph>
                            <Button
                                block
                                disabled
                                style={{ marginBottom: '10px' }}
                            >
                                Bet on a fight!
                            </Button>
                            <Button block disabled>
                                Kick some ass!
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </TavernStyled>
            <DiceGame
                visible={isDiceModalVisible}
                setVisible={setIsDiceModalVisible}
            />
        </>
    );
};
