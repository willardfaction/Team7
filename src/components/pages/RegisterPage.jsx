import React from 'react';
import "../../styles/Register.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../Navbar/Navbar';

const RegisterPage = () => {
    const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className='fon'>
    <div className="register-form">
    <CloseIcon className='close' style={{left: '368px', top: '8px'}} onClick={() => navigate("/")}/>
    <h2 className='title-vhod'>Регистрация</h2>
    <p className='title-email'>Ваша электронная почта:</p>
    <input type="text" className='inp-email' placeholder='Введите'/>
    <p className='title-password'>Придумайте пароль, пожалуйста:</p>
    <input type="text" className='inp-password' placeholder='Введите'/>
    <button className='voiti-btn'>Регистрация</button>
    <button className='login-btn' onClick={() => navigate("/login")}>Войти</button>
 </div>
 </div>
 </>
  )
}

export default RegisterPage