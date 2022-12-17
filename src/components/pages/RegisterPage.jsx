import React from 'react';
import "../../styles/Register.css";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
    const navigate = useNavigate();

  return (
    <div className="login-form">
    <h2 className='title-vhod'>Регистрация</h2>
    <p className='title-email'>Ваша электронная почта:</p>
    <input type="text" className='inp-email' placeholder='Введите'/>
    <p className='title-password'>Придумайте пароль, пожалуйста:</p>
    <input type="text" className='inp-password' placeholder='Введите'/>
    <a className='forgot-pass' href="/rest">Забыли пароль?</a>
    <button className='voiti-btn'>Регистрация</button>
    <button className='login-btn' onClick={() => navigate("/login")}>Войти</button>
 </div>
  )
}

export default RegisterPage