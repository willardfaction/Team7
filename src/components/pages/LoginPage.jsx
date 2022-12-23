import React, { useState, useContext, useEffect } from 'react';
import "../../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { authContext, useAuth } from '../contexts/authContext';

const LoginPage = () => {
    const navigate = useNavigate();

    const {handleLogin } = useContext(authContext);
    const [logInpValue, setLogInpValue] = useState("");
    const [passwordInpValue, setPasswordInpValue] = useState("");

    function loginUser() {
      if(!logInpValue.trim() || !passwordInpValue.trim()){
        alert('Some inputs are empty!');
        return;
      };
      let formData = new FormData();
      formData.append('email', logInpValue);
      formData.append('password', passwordInpValue);
      handleLogin(formData, logInpValue, navigate);
      alert('Успешный вход!')
    };

  return (
    <div className="register-form">
        <h2 className='title-vhod'>Вход</h2>
        <p className='title-email'>Почта или телефон:</p>
        <input type="text" className='inp-email' placeholder='Введите почту' value={logInpValue} onChange={e => setLogInpValue(e.target.value)}/>
        <p className='title-password'>Пароль:</p>
        <input type="text" className='inp-password' placeholder='Введите пароль' value={passwordInpValue} onChange={e => setPasswordInpValue(e.target.value)}/>
        <a className='forgot-pass' href="/rest" >Забыли пароль?</a>
        <button className='voiti-btn' onClick={loginUser}>Войти</button>
        <p className='title-qu'>Еще не зарегистрированы?</p>
        <button className='register-btn' onClick={() => navigate("/register")}>Регистрация</button>
     </div>
  )
}

export default LoginPage