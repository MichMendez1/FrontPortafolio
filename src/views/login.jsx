import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/estudiantes/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Autenticación exitosa');
        console.log('Token:', data.token);
        setError('');

        // Guardar usuario en sessionStorage
        sessionStorage.setItem('user', JSON.stringify(data));
        console.log(data.nombres); // Acceder al atributo 'nombres' del usuario
        console.log(data.tipo);
        // Redireccionar a la página deseada
        navigate('/student');
      } else {
        console.log('Autenticación fallida');
        console.log('Mensaje de error:', data.msg);
        setError(data.msg);
      }
    } catch (error) {
      console.log('Error:', error);
      setError('Ocurrió un error en el servidor');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Iniciar sesión</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
