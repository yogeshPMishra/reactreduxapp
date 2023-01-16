import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Basic React Counter App 
        </p>
        <a className="App-link">
          React Counter
        </a>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
