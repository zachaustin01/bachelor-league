import './App.css';
import BasicTable  from './components/teams';

const capitalizeString = str => str.charAt(0).toUpperCase() + str.slice(1);

function validateLeague(inputString) {
  return ['chicago','synagogue'].includes(inputString.toLowerCase()) ? inputString : '';
}

const params = new URLSearchParams(window.location.search);
const league = validateLeague(params.get('league'))
console.log('LEAGUE:')
console.log(league)

const headerStyle = {
  fontSize: '100px',
  color:'pink'
}

function App() {
  return (
    <div className="App">
      <header className='App-header' style={headerStyle}> {capitalizeString(league)} Bachelor League </header>
      <header className="App-header" >
        {BasicTable(league.toLowerCase())}
      </header>
    </div>
  );
}

export default App;
