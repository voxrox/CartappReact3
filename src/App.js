import './App.css';
import '../src/index.css'
import { useState } from 'react';
import DisplayProd from './components/DisplayProd';
import Side from './components/Side';

function App() {
  const [prodpresent,ProductFun]=useState({})
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <DisplayProd></DisplayProd> 
          <Side></Side>
        </div>
      </main>
      <footer>
        All rights are reserved
      </footer>
    </div>
  );
}

export default App;
