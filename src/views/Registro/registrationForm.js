import { useState } from 'react';
import bcrypt from 'bcryptjs';

function RegistrationPage() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
 
  const [Role, setRole] = useState('');
const baseUrl="http://localhost:3001/usuarios";
const handleLogin=()=>{
  window.location.href="/login"
}
  const handleRegistration = async (e) => {
    e.preventDefault();
  
    try {
      // Check if the email already exists
      const response = await fetch(`${baseUrl}?Email=${Email}`);
      if (response.ok) {
        const users = await response.json();
  
        if (users.length > 0) {
          // Email already exists, show an error message
          alert('Email ya registrado');
          return;
        }
  
        // Proceed with creating a new user
        const hashedPassword = await bcrypt.hash(Password, 10);
  
        const userData = {
          Email,
          Password: hashedPassword,
          Name,
          Role,
        };
  
        const createUserResponse = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (createUserResponse.ok) {
          alert('Usuario registrado correctamente');
          // Reset the form fields
          setEmail('');
          setPassword('');
          setName('');
          setRole('');
          window.location.href="./login"
        } else {
          throw new Error(`HTTP error! status: ${createUserResponse.status}`);
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration');
    }
    
  };

  return (
    <div className="container mt-5">
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="Email"
            className="form-control"
            id="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Role" className="form-label">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            id="Role"
            value={Role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
        <button variant="outline-light" className="btn btn-tertiary" onClick={handleLogin} style={{marginTop: '1%' }}>Iniciar sesión </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
