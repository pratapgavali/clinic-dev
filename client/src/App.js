import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './controllers/Dashboard/Dashboard';
import Login from './controllers/Auth/Login';




function App() {

const [isLogin, setIsLogin] = useState(false)


useEffect(() => {
  if(localStorage.getItem("auth")){
    setIsLogin(true)
  }
}, [])

  return (
    <>
      {isLogin ? <Dashboard /> : <Login /> }
    </>
  );
}

export default App;
