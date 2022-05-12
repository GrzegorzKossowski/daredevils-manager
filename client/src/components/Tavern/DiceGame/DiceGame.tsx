import React from 'react';
import { Button, Divider, Modal, Radio, Slider, Space, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from 'hooks';
import { incrementMoney, decrementMoney } from 'redux/userSlice';

interface IDiceGameProps {
    visible: boolean;
    setVisible: Function;
}
const { Paragraph, Text, Title } = Typography;
const getRandomNumber = () => Math.floor(Math.random() * (10 - 1)) + 1;

const DiceGame = ({ visible, setVisible, ...restProps }: IDiceGameProps) => {
    const { moneyAmount } = useAppSelector(state => state.user);
    const dispach = useAppDispatch();

    const [secretNumber, setSecretNumber] = React.useState(() =>
        getRandomNumber()
    );
    const [sliderValue, setSliderValue] = React.useState(7);
    const [inGame, setInGame] = React.useState(true);
    const [step, setStep] = React.useState(3);
    const winAlghoritm = sliderValue * 10;

    // ustaw cene
    const handleSliderChange = (e: number) => {
        setSliderValue(prevValue => e);
    };
    // cancel (reset)
    const handleCancel = () => {
        handleReset();
        setVisible(false);
    };
    const handleReset = () => {
        setSliderValue(7);
        setInGame(true);
        setStep(3);
        setSecretNumber(() => getRandomNumber());
    };
    // lub wybierz numer
    const handleRadioChange = (e: any) => {
        setStep(prevValue => prevValue - 1);
        e.target.value === secretNumber
            ? handleWinGame()
            : dispach(decrementMoney(sliderValue));
    };
    // na koniec
    const handleWinGame = () => {
        setInGame(false);
        setStep(0);
        dispach(incrementMoney(winAlghoritm));
    };

    if (moneyAmount < 20) {
        return (
            <Modal
                visible={visible}
                title='You are broke!'
                footer={null}
                onCancel={handleCancel}
            >
                <Title level={3}>Not enough money!</Title>
                <Divider />
                <Button onClick={handleCancel}>Cancel</Button>
            </Modal>
        );
    }

    return (
        <>
            <Modal
                visible={visible}
                title='Guess a number'
                footer={null}
                onCancel={handleCancel}
            >
                {inGame ? (
                    <>
                        <Paragraph>
                            Are you lucky? Or maybe you can predict the future.
                            Can you predict a number? This is a simple game for
                            simple people. Guess the number, win the money. The
                            risk is small. For now...
                        </Paragraph>

                        <Slider
                            defaultValue={7}
                            min={4}
                            max={10}
                            value={sliderValue}
                            onChange={handleSliderChange}
                            disabled={step < 3}
                        />
                        <Space direction='vertical'>
                            <Text>
                                Use the slider. Bet your money. Now is: {sliderValue}
                                <FontAwesomeIcon
                                    icon={faSackDollar}
                                    style={{ marginLeft: '5px' }}
                                />
                            </Text>
                            <Text>
                                You can win: {winAlghoritm}
                                <FontAwesomeIcon
                                    icon={faSackDollar}
                                    style={{ marginLeft: '5px' }}
                                />
                            </Text>
                            <Text>You have {step} attempts.</Text>
                        </Space>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '10px 0',
                            }}
                        >
                            <Radio.Group
                                optionType='button'
                                options={Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                )}
                                value={null}
                                onChange={handleRadioChange}
                                disabled={!step}
                            />
                        </div>
                    </>
                ) : (
                    <div>
                        You have won: {winAlghoritm}{' '}
                        <FontAwesomeIcon
                            icon={faSackDollar}
                            style={{ marginLeft: '5px' }}
                        />
                    </div>
                )}
                <Divider />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '10px',
                    }}
                >
                    <Button onClick={handleCancel}>Cancel</Button>
                    {!step && (
                        <Button type='primary' onClick={handleReset}>
                            Again
                        </Button>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default DiceGame;
