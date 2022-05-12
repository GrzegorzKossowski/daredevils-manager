import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Button } from 'antd';
import LazySuspense from 'components/LazySuspense';
// import NewGame from 'pages/NewGame';
import Dashboard from 'pages/Dashboard';
import Tavern from 'components/Tavern';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const NewGame = React.lazy(() => import('./pages/NewGame'));
// const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
// const Tavern = React.lazy(() => import('components/Tavern/Tavern'));

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
                    path='tavern'
                    element={<LazySuspense component={<Tavern />} />}
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
