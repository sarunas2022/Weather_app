import react from 'react';
import Navigation from './components/nav/Navigation';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Navigation></Navigation>
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </>
    );
}

export default App;
