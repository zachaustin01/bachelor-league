// HomePage.js

import React from 'react';

class ContestRules extends React.Component {
    render() {
      const rules = [
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
    ];

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

function HomePage(league) {
    console.log(league)
    return (
        <div>
        <h1>Contest Rules</h1>
        <ContestRules/>
        </div>
    );
}

export default HomePage;
