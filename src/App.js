import './App.css';
import BasicTable  from './components/teams';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {BasicTable()}
      </header>
    </div>
  );
}

export default App;
