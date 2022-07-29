import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Contacts from 'pages/Contacts';

function App() {
  
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',
        margin: 15,
      }}
    >
         <Navigation/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/contacts " element={<Contacts/>} />
      </Routes>
    </div>
  );
}

export default App;
