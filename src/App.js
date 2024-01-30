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
  const [league, setLeague] = useState('');

  useEffect(() => {
    const storedLeague = localStorage.getItem('league');
    if (storedLeague) {
      setLeague(storedLeague);
    } else {
      const leaguePrompt = prompt('Please enter the name of your league:');
      setLeague(leaguePrompt);
      localStorage.setItem('league', leaguePrompt);
    }
  }, []); // Empty dependency array to run only once when component mounts

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
