import React,{Fragment, useEffect, useState} from "react";
import './login.css'
import Logo from '../img/Logo.png'

const Login = () =>{

    const [datos,setDatos]= useState({
        Email:'',
        Password:''
    })

    const url ='http://localhost:3000/';


    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const fetchTest = async()=>{
        console.log(JSON.stringify(datos));
        try {
            const response = await fetch(url,{
                method:'POST',
                body:JSON.stringify(datos),
                mode: 'cors' ,
                headers: {
                    'Content-Type': 'application/json'
                },});
            console.log(response);
            const json = await response.json();
            console.log(json);
            alert('Felicidades iniciaste sesion')
        } catch (error) {
            console.log('error',error);
            alert('Lo siento no hubo un error en el usuario o la contraseña')
        }
    }

    return(
        <Fragment>
            <div className="Background" style={{paddingTop:'13%'}} >
                

            <div class="offset-7 col-4 card" >
                <img className="offset-3" style={{width:'50%'}} src={Logo}/>
                <div class="card-body">
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" onChange={handleInputChange} name='Email' id="inputEmail"/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                    <input type="password" name="Password" onChange={handleInputChange} class="form-control" id="inputPassword"/>
                    </div>
                </div>
                </div>
                <button className="btn btn-primary offset-7" onClick={fetchTest} style={{marginBottom:'2%', marginRight:'3%'}} >Iniciar Sesion </button>
            </div>
                
            </div>

            
        </Fragment>
    )
}

export default Login