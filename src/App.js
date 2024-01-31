import './App.css'; // Import the CSS file
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MobileNavigation from './MobileNavigation';
import HomePage from './pages/home';
import StandingsPage from './pages/standings';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff2d55', // Bachelor red
    },
    secondary: {
      main: '#007aff', // Bachelor blue
    },
  },
});

function App() {

  const league = "dinner Crawlers"

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <MobileNavigation />
          <Routes>
            <Route
              path="/"
              element={<HomePage league={league} />}
            />
            <Route
              path="/standings"
              element={<StandingsPage league={league} />}
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
