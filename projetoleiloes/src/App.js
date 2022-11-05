import React, {usestate} from 'react';
import './App.css';
import header from './componetes/header';

function App() {

  const titulo = "Leilões";
  
  return (
    <>
    
      <header title={titulo} bgColor='rgba(0,0,0,0.4)' textColor='#ff6a95'>
        <div className='container'>
          <h1>{titulo}</h1>
        </div>
      </header>
    

    </>
  );
}

export default App;
