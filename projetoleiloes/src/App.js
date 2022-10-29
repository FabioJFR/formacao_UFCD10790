import logo from './logo.svg';
import './App.css';

function App() {

  const titulo = "Leilões";
  const estilo = {
    color: "white",
    backgroundColor: "grey",

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='estilo' style={estilo}>{titulo}</h1>
      </header>
    </div>
  );
}

export default App;
