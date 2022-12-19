import React from 'react';
import "../../styles/Login.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../Navbar/Navbar';

const LoginPage = () => {
    const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className='fon'>
    <div className="login-form">
      <CloseIcon className='close' style={{left: '368px', top: '8px'}} onClick={() => navigate("/")}/>
        <h2 className='title-vhod'>Вход</h2>
        <p className='title-email'>Почта или телефон:</p>
        <input type="text" className='inp-email-voiti'/>
        <p className='title-password-voiti'>Пароль:</p>
        <input type="text" className='inp-password-voiti'/>
        <a className='forgot-pass' href="/rest">Забыли пароль?</a>
        <button className='voiti-btn'>Войти</button>
        <p className='title-qu'>Еще не зарегистрированы?</p>
        <button className='register-btn' onClick={() => navigate("/register")}>Регистрация</button>
     </div>
     </div>
     </>
  )
}

export default LoginPage