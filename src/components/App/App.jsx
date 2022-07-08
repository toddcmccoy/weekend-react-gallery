import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <table>
        <tr>
        <img src="images/dumpling.jpg"/>
        <img src="images/floki-side-eye.jpg"/>
        <img src="images/freyja-sleeve.jpg"/>
        </tr>
        <tr>
        <img src="images/nils.jpg"/>
        <img src="images/freyja.jpg"/>
        <img src="images/rose.jpg"/>
        </tr>
        </table>
      </div>
    );
}

export default App;
