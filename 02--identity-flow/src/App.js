import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login/LoginButton';
import LogoutButton from './components/login/LogoutButton';
import { useContext } from 'react';
import { AuthContext } from './context/context/AuthContext';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </header>
    </div>
  );
}

export default App;
