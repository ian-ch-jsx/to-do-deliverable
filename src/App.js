import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/data';
import ToDo from './views/ToDo';
import Auth from './views/Auth';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <>
      <header className="header">
        <h1>To-do list</h1>
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <div className="main">
                <ToDo />
                <button onClick={logoutUser}>Log Out</button>
              </div>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
