import { useState } from 'react';
import { HomePage } from './Components/HomePage';
import Login from './Components/LoginPage';

function App() {
  const username = "jai"
  const password = "jai"
  const [login,setLogin] = useState(false)
  const handleLogin = (loginData) =>{
    if(username === loginData.username && password === loginData.password){
      setLogin(true)      
    } else{
      alert("username and password are wrong")
    }
  }
  if(login){
    return <HomePage/>
  }
  return <Login handleLogin = {handleLogin}/>
}

export default App;
