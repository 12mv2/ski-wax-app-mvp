// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Search from './Search';
import ShowImages from './ShowImages';
import Login from './Login';
import InputForm from './InputForm';
import ThemeSwitcher from './ThemeSwitcher';

console.log('App.jsx is running');

// Define your themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#3f51b5' },
    background: { default: '#f5f5f5' },
  },
  transitions: {
    duration: { standard: 300 },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { default: '#303030' },
  },
  transitions: {
    duration: { standard: 300 },
  },
});

const vintageTheme = createTheme({
  palette: {
    primary: { main: '#a67c00' },
    background: { default: '#f3e5ab' },
    text: { primary: '#4a3c31' },
  },
  transitions: {
    duration: { standard: 1000 }, // Slower transition
  },
});

const neonTheme = createTheme({
  palette: {
    primary: { main: '#39ff14' },
    background: { default: '#0d0d0d' },
    text: { primary: '#ff00ff' },
  },
  transitions: {
    duration: { standard: 50 }, // Very quick transition
  },
});

const themes = [
  { name: 'Light', theme: lightTheme },
  { name: 'Dark', theme: darkTheme },
  { name: 'Vintage', theme: vintageTheme },
  { name: 'Neon', theme: neonTheme },
];

function App() {
    const [currentTheme, setCurrentTheme] = useState(themes[0].theme);

    const changeTheme = (newTheme) => {
        setCurrentTheme(newTheme);
    };

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Router>
                <h1>App.jsx is running</h1>
                <ThemeSwitcher themes={themes} changeTheme={changeTheme} />
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/images" element={<ShowImages />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/input" element={<InputForm />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;