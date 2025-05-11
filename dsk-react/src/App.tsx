import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import SessionPage from './pages/SessionPage';
import SeatsPage from './pages/SeatsPage';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<StartPage />} />
                <Route path={'/main'} element={<MainPage />} />
                <Route path={'/sessions'} element={<SessionPage />} />
                <Route path={'/seats'} element={<SeatsPage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
