import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LazySuspense from 'components/molecules/LazySuspense';
import NewGame from 'pages/NewGame';
import Dashboard from 'pages/Dashboard';

const HomePage = React.lazy(() => import('./pages/HomePage'));
// const NewGame = React.lazy(() => import('./pages/NewGame'));
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
                // element={<LazySuspense component={<NewGame />} />}
                element={<NewGame/>}
            />
            <Route
                path='dashboard'
                element={<LazySuspense component={<Dashboard />} />}
            />
            <Route
                path='*'
                element={<LazySuspense component={<NotFound />} />}
            />
        </Routes>
    );
}

export default App;
