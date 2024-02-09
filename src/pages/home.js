// HomePage.js

import React, { useState } from 'react';
import { useLeague } from '../leagueContext';

import { allowedLeagues } from '../data/allowed_leagues';

const RULES ={
  "Crawlers":[
    '🌹 Rose received: (1)',
    '✨ First / Last rose in ceremony: (1)',
    '👥 Group date rose',
    '😏 Starts a rumor and receives rose in same episode: (1)',
    '😞 Starts a  rumor and goes home in same episode: (-1)',
    '💪 Starts a rumor about another girl and that girl goes home same episode (1)',
    '💰 "Steals" Joey from another girl and gets a rose (1)',
    '🚨 "Steals" Joey from another girl and goes home same episode (-1)',
    '💍 Receives proposal (3)',
    '👗 Accepts proposal (2)',
    '😢 Rejects proposal (4)'
  ],
  "Jobby":[
    '🌹 Rose received: (1)',
    '✨ First / Last rose in ceremony: (1)',
    '👥 Group date rose',
    '😏 Starts a rumor and receives rose in same episode: (1)',
    '😞 Starts a  rumor and goes home in same episode: (-1)',
    '💪 Starts a rumor about another girl and that girl goes home same episode (1)',
    '💰 "Steals" Joey from another girl and gets a rose (1)',
    '🚨 "Steals" Joey from another girl and goes home same episode (-1)',
    '💍 Receives proposal (3)',
    '👗 Accepts proposal (2)',
    '😢 Rejects proposal (4)',
    "😭 Makes Joey Cry (1)",
    "🍑 Invited to fantasy suite (1)",
    "🔚 Leaves show voluntarily (-3)"
  ]
}


class ContestRules extends React.Component {
    render() {
      const { rules } = this.props;
      return (
        <div>
          <ul className="no-bullets">
            {rules.map((rule, index) => (
              <li key={index} className="glow-on-hover">{rule}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

function HomePage() {
  const { leagueName, setLeagueName } = useLeague();
  const [inputLeagueName, setInputLeagueName] = useState('');
  const [error, setError] = useState('');


  const handleLeagueNameSubmit = () => {
    if (allowedLeagues.includes(inputLeagueName)) {
      setLeagueName(inputLeagueName);
      setInputLeagueName('');
      setError('');
    } else {
      setError('Please enter a valid league name.');
    }
  };

  if (!leagueName) {
    return (
      <div>
        <h1>Welcome to the Bachelor App</h1>
        <input
          type="text"
          value={inputLeagueName}
          onChange={(e) => setInputLeagueName(e.target.value)}
          placeholder="Enter League Name"
        />
        <button onClick={handleLeagueNameSubmit}>Submit</button>
        {error && <p>{error}</p>}
      </div>
    );
  }

  return (
      <div>
      <h1>Contest Rules</h1>
      <ContestRules rules={RULES[leagueName]}/>
      </div>
  );
}

export default HomePage;
