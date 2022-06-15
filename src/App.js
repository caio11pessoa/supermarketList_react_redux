import React from 'react';
import logo from './superm.jpg';
import { SupermarketList } from './features/supermarketList/SupermarketList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="linha">
          <div className="coluna-36">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='coluna-64'><SupermarketList /></div>
        </div>

      </header>
    </div>
  );
}

export default App;
