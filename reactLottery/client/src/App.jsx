import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Games from './pages/Games';
import Landing from './pages/Landing';
import Login from './pages/Login';
import About from './pages/About';
import Learn from './pages/Learn';

function App() {
  const navigate = useNavigate();
  const nameLS = localStorage.getItem('name');
  const [userName, setUserName] = useState(nameLS);
  useEffect(() => {
    if (userName === null) {
      const lsName = localStorage.getItem('name');
      if (lsName === '' || lsName === null || !lsName) {
        navigate('/');
      } else {
        setUserName(lsName);
      }
    }
  }, [userName]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default App;
