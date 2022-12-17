import React from 'react';
import "../../styles/Login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

  return (
    <div className="register-form">
        <h2 className='title-vhod'>Вход</h2>
        <p className='title-email'>Почта или телефон:</p>
        <input type="text" className='inp-email'/>
        <p className='title-password'>Пароль:</p>
        <input type="text" className='inp-password'/>
        <a className='forgot-pass' href="/rest">Забыли пароль?</a>
        <button className='voiti-btn'>Войти</button>
        <p className='title-qu'>Еще не зарегистрированы?</p>
        <button className='register-btn' onClick={() => navigate("/register")}>Регистрация</button>
     </div>
  )
}

export default LoginPage