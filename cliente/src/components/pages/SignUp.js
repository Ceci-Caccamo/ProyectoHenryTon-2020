import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './SignUp.css'


const Login = () => {
  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  //extraer el usuario
  const { email, password } = usuario;
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario quiere iniciar Sesion
const onSubmit=e=>{
    e.preventDefault();


}

  return (
    <div className="form-usuario">
    <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form
        onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={'/register'} className="enlace-cuenta">
            Crear Cuenta
        </Link>
      </div>
    </div>
  );
};
export default Login;
