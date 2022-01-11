import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './services/data';
import ToDo from './views/ToDo';
import Auth from './views/Auth';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do list</h1>
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <div className="main">
                <ToDo />
              </div>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
