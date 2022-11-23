import react from 'react';
import Navigation from './components/nav/Navigation';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className='output'>
            <div className='output1'>
                <Navigation></Navigation>
                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
}

export default App;
