import './App.css';
import { Route, Routes } from 'react-router-dom';
import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Film } from './pages/Film/Film';
import { Header } from './pages/Header/Header';
import { Main } from './pages/Main/Main';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Routes>
                <Route index element={<Main />} />
                <Route path={`film/:id`} element={<Film />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
