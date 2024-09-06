import LoginButton from './components/auth/LoginButton';
import LogoutButton from './components/auth/LogoutButton';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { createActor } from './declarations/backend';

import logo from './logo.svg';
import './App.css';

function App() {
  const { isAuthenticated, identity } = useContext(AuthContext);
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");

  let canisterId = process.env.REACT_APP_BACKEND_CANISTER_ID;

  let backend = createActor(canisterId, {
    agentOptions: {
      identity: identity,
      host: "http://localhost:4943",
    },
  });

  useEffect(() => {
    getNames();
  }, []);

  async function addName(name) {
    try {
      const result = await backend.addName(name);
      console.log(result);
      if ("ok" in result) {
        getNames();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function getNames() {
    try {
      const result = await backend.getNames();
      console.log(result);
      if ("ok" in result) {
        setNames(result.ok);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name) {
      await addName(name);
      setName("");
    } else {
      alert("Please provide a name.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </header>
      <main>
        <h1>Names</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
          <button className="button" type="submit">
            Add Name
          </button>
        </form>

        <ul className="name-list">
          {names.map((name, index) => (
            <li className="name-item" key={index}>
              {name}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
