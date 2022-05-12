import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import LazySuspense from 'components/molecules/LazySuspense';
// import NewGame from 'pages/NewGame';
import Dashboard from 'pages/Dashboard';
import { Button } from 'antd';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const NewGame = React.lazy(() => import('./pages/NewGame'));
// const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
    return (
        <Routes>
            test
            <Route
                path='/'
                element={<LazySuspense component={<HomePage />} />}
            />
            <Route
                path='newgame'
                element={<LazySuspense component={<NewGame />} />}
            />
            <Route
                path='dashboard'
                element={<LazySuspense component={<Dashboard />} />}
            >
                <Route
                    path='town'
                    element={
                        <>
                            Town
                            <Link to={'/'}>
                                <Button type='primary'>Back Home</Button>
                            </Link>
                        </>
                    }
                />
                <Route
                    path='guessNumber'
                    element={
                        <>
                            guessNumber
                            <Link to={'/'}>
                                <Button type='primary'>Back Home</Button>
                            </Link>
                        </>
                    }
                />
                <Route
                    path='diceGame'
                    element={
                        <>
                            diceGame
                            <Link to={'/'}>
                                <Button type='primary'>Back Home</Button>
                            </Link>
                        </>
                    }
                />
                <Route
                    path='sponsorDrinks'
                    element={
                        <>
                            sponsorDrinks
                            <Link to={'/'}>
                                <Button type='primary'>Back Home</Button>
                            </Link>
                        </>
                    }
                />
                <Route
                    path='hireDardevil'
                    element={
                        <div>
                            hireDardevil
                            <Link to={'/'}>
                                <Button type='primary'>Back Home</Button>
                            </Link>
                        </div>
                    }
                />
            </Route>
            <Route
                path='*'
                element={<LazySuspense component={<NotFound />} />}
            />
        </Routes>
    );
}

export default App;
