import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Headers/Headers";
import Homeadmin from "./Pages/HomeAD/Homeadmin";
import RegisterWorker from "./Pages/Register/RegisterWorker";
import EditWorker from "./Pages/Edit/EditWorker";
import Tables from "./components/Tables/Tables";
import Profile from "./Pages/Profile/Profile";
import RegisterSchool from './Pages/Register/RegisterSchool';



function App () {
  return (
    <>
    <Header/>
    <RegisterWorker/> 
    <RegisterSchool/>
    <EditWorker/> 
    <Profile/>
    <Homeadmin/>

    </>
  );
}

export default App
