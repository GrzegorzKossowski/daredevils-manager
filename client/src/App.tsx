import React from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/HomePage'));

function App() {
    return (
        <Routes>
            test
            <Route path='/' element={<HomePage />} />
        </Routes>
    );
}

export default App;
