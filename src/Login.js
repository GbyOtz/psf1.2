import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    username: '',
    password: '',
  });

  const [registerCredentials, setRegisterCredentials] = useState({
    username: '',
    password: '',
  });

  const [isRegistering, setIsRegistering] = useState(false); // Estado para controlar si se muestra el formulario de registro
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Supongamos que aquí verificas las credenciales de inicio de sesión
    if (
      loginCredentials.username === 'usuario' &&
      loginCredentials.password === 'contraseña'
    ) {
      alert('Inicio de sesión exitoso');
      setIsLoggedIn(true);
      navigate('/opcion1');
    } else {
      alert('Inicio de sesión fallido. Verifica tus credenciales.');
    }
  };

  const handleRegister = () => {
    // Supongamos que aquí registras al usuario con las credenciales proporcionadas
    if (registerCredentials.username && registerCredentials.password) {
      alert('Registro exitoso');
      // Puedes agregar lógica adicional para manejar el registro de usuario aquí
    } else {
      alert('Por favor, completa todos los campos del registro.');
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Registro' : 'Iniciar Sesión'}</h2>
      <div className="input-container">
        <label>Usuario:</label>
        <input
          type="text"
          name="username"
          value={isRegistering ? registerCredentials.username : loginCredentials.username}
          onChange={(e) =>
            isRegistering
              ? setRegisterCredentials({ ...registerCredentials, [e.target.name]: e.target.value })
              : setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="input-container">
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={isRegistering ? registerCredentials.password : loginCredentials.password}
          onChange={(e) =>
            isRegistering
              ? setRegisterCredentials({ ...registerCredentials, [e.target.name]: e.target.value })
              : setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value })
          }
        />
      </div>
      <button className={isRegistering ? "register-button" : "login-button"} onClick={isRegistering ? handleRegister : handleLogin}>
        {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
      </button>
      <p onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? '¿Ya tienes una cuenta? Inicia sesión aquí' : '¿No tienes una cuenta? Regístrate aquí'}
      </p>
    </div>
  );
};

export default Login;
