import React, { useState } from "react";
import './login.css'
import Logo from '../img/Nuevos Horizontes.png'
import bcrypt from 'bcryptjs';

const Login = () => {
    const handleRegistro=()=>{
        window.location.href="/registro"
    }

    const [datos, setDatos] = useState({
        Correo: '',
        Contraseña: ''
    })
    const baseUrl="http://localhost:3001/estudiantes";

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
 
    const handleLogin = async () => {
        try {
          const response = await fetch(`${baseUrl}?Correo=${datos.Correo}`);
          if (response.ok) {
            const users = await response.json();
      
            if (users.length > 0) {
              const user = users[0];
              const isPasswordMatch = await bcrypt.compare(datos.Contraseña, user.Contraseña);
      
              if (isPasswordMatch) {
                // Passwords match, user is authenticated
                alert('Login successful');
                sessionStorage.setItem('user', JSON.stringify(user));
                window.location.href="./home"
                
                // Proceed with further actions, such as storing user data in session storage or redirecting to a new page
              } else {
                // Passwords do not match
                alert('Invalid email or password');
              }
            } else {
              // User with the provided email does not exist
              alert('Invalid email or password');
            }
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred during login');
        }
      };
      
      

    return (
        <div className="Background" style={{ paddingTop: '13%' }} >
            <div className="offset-4 col-4 card">
                <img className="offset-3" style={{ width: '50%' }} src={Logo} alt="logo" />
                <div className="card-body">
                    <div className="mb-3 row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" onChange={handleInputChange} name='Correo' id="inputCorreo" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" name="Contraseña" onChange={handleInputChange} className="form-control" id="inputContraseña" />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary offset-7" onClick={handleLogin} style={{ marginBottom: '2%', marginRight: '3%' }}>Iniciar Sesion </button>
                <button variant="outline-light" className="btn btn-tertiary offset-7" onClick={handleRegistro} style={{ marginBottom: '2%', marginRight: '3%' }}>¿No tienes una cuenta? </button>
            </div>
        </div>
    )
}

export default Login;
