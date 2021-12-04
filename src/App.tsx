import  { useContext } from 'react';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import { AuthContext } from './context/authContext';
import Login from './pages/Login';

function App() {
  const {token} = useContext(AuthContext);
  return (
    <Router>
    {
      !token ? (
        <Login/>
      ) : (
        
      <Routes>
        <Route path="/"  element={<Dashboard/>} />
        <Route path="/signup"  element={<Signup/>} />
      </Routes>
      )
    }
    </Router>
  );
}

export default App;
