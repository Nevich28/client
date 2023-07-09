import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
            <CssBaseline />
            <Navigation />
        </BrowserRouter>
    );
}

export default App;
