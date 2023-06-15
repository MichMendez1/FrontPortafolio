import React, { useState } from "react";
import './login/login.css';
import Logo from '../img/Nuevos Horizontes.png';
import bcrypt from 'bcryptjs';

const Login = () => {
  const handleRegistro = () => {
    window.location.href = "/registro";
  };

  const [datos, setDatos] = useState({
    Correo: '',
    Contraseña: ''
  });

  const baseUrl = "http://localhost:3001/estudiantes";

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

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
            window.location.href = "./";

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
    <div className="Background">
      <div className="card">
        <img className="logo" src={Logo} alt="logo" />
        <div className="card-body">
          <div className="mb-3 row">
            <label htmlFor="inputEmail" >Correo</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" onChange={handleInputChange} name='Correo' id="inputCorreo" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" >Contraseña</label>
            <div className="col-sm-10">
              <input type="password" name="Contraseña" onChange={handleInputChange} className="form-control" id="inputContraseña" />
            </div>
          </div>
        </div>
        <button className="btn-primario" onClick={handleLogin}>Iniciar Sesion</button>
        <button className="btn-tertiario" onClick={handleRegistro}>¿No tienes una cuenta?</button>
      </div>
    </div>
  );
}

export default Login;
