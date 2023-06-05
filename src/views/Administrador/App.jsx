import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Headers/Headers";
import Homeadmin from "./Pages/HomeAD/Homeadmin";
import Register from "./Pages/Register/Register";
import Edit from "./Pages/Edit/Edit";
import Tables from "./components/Tables/Tables";
import Profile from "./Pages/Profile/Profile";
import RegisterColegio from './Pages/Register/RegisterColegio';



function App () {
  return (
    <>
    <Header/>
    <Register/> 
    <RegisterColegio/>
    <Edit/> 
    <Profile/>
    <Homeadmin/>

    </>
  );
}

export default App
