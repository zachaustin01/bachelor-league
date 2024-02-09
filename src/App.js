import './App.css'; // Import the CSS file
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MobileNavigation from './MobileNavigation';
import HomePage from './pages/home';
import StandingsPage from './pages/standings';
import TeamsPage from './pages/teams';

import { LeagueProvider } from './leagueContext';


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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <LeagueProvider>
        <div>
          <MobileNavigation />
          <Routes>
            <Route
              path="/"
              element={<HomePage/>}
            />
            <Route
              path="/standings"
              element={<StandingsPage/>}
            />
            <Route
              path="/teams"
              element={<TeamsPage/>}
            />
          </Routes>
        </div>
        </LeagueProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
