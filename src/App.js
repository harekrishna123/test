import logo from './logo.svg';
//import './App.css';
import './Style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useEffect } from 'react';
import About from  './About';
import Contact from  './Contact';
import Home from './Home'; 
import Header from './Components/Header';
import Login from './Pages/Login';
import React, { useState } from "react";
import Logout from './Components/Logout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem("user_name");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
   
    <><Header isAuthenticated={isAuthenticated} /><Routes>
     {isAuthenticated &&  <Route path='/' element={<Home/>}></Route>}
      {isAuthenticated && <Route path='/Home' element={<Home/>}></Route>}
      {isAuthenticated &&  <Route path='/about' element={<About />}></Route>}
      {isAuthenticated && <Route path='/contact' element={<Contact />}></Route>}
      {isAuthenticated && <Route path='/logout' element={<Logout setIsAuthenticated={setIsAuthenticated}/>}></Route>}
      <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />}></Route>
    </Routes></>

    
  );
}

export default App;
