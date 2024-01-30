import './App.css';
import BasicTable  from './components/teams';
import MobileNavigation from './Nav';

const capitalizeString = str => str.charAt(0).toUpperCase() + str.slice(1);

function validateLeague(inputString) {
  return ['crawlers','synagogue'].includes(inputString.toLowerCase()) ? inputString : '';
}

const params = new URLSearchParams(window.location.search);
let league = ''
if(params.size === 0){
  league = prompt('Please enter the name of your league:  ')
  window.location.href = window.location.href + "?league=" + league;
} else{
  league = params.get('league')
}
league = validateLeague(league)
console.log('LEAGUE:')
console.log(league)

const headerStyle = {
  fontSize: '100px',
  color:'pink'
}

function App() {
  return (
    <div className="App">
      {MobileNavigation()}
      <header className='App-header' style={headerStyle}> {capitalizeString(league)} Bachelor League </header>
      <header className="App-header" >
        {BasicTable(league.toLowerCase())}
      </header>
    </div>
  );
}

export default App;
