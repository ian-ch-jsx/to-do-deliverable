import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do list</h1>
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
