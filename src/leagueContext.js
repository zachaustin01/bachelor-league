// LeagueContext.js
import React, { createContext, useState, useContext } from 'react';

const LeagueContext = createContext();

export function useLeague() {
  return useContext(LeagueContext);
}

export function LeagueProvider({ children }) {
  const [leagueName, setLeagueName] = useState(null);

  return (
    <LeagueContext.Provider value={{ leagueName, setLeagueName }}>
      {children}
    </LeagueContext.Provider>
  );
}
