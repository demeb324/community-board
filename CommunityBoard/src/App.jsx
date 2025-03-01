import './App.css';
import React from 'react';
import Card from './components/card';
import Board from './components/board';

const App = () => {

  return (
    <div className="App">
      <img class="main_img" src="https://st2.depositphotos.com/47577860/48176/v/600/depositphotos_481760482-stock-illustration-cat-computer-laptop-icon.jpg" alt="logo" className="App-logo" />
      <br />
      <header className="App-header">
        <h1>Tech Career Resources!</h1>
        <p>
          A curated list of tech resources for developers.
        </p>
      </header>
      <Board title="Web Development!"/>
    </div>
  );
};

export default App;