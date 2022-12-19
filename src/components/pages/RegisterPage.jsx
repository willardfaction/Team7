import React, { useState, useContext, useEffect } from 'react';
import "../../styles/Register.css";
import { useNavigate } from "react-router-dom";
import { authContext, useAuth } from '../contexts/authContext';


const RegisterPage = () => {
    const navigate = useNavigate();

    const { handleRegister} = useContext(authContext);
    const [regLogInpValue, setRegLogInpValue] = useState("");
    const [regPasswordInpValue, setRegPasswordInpValue] = useState("");
    const [regEmailInpValue, setRegEmailInpValue] = useState("");

    function snackbar_error() {
      var x = document.getElementById("snackbar_error");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    function createUser() {
      if(!regEmailInpValue.trim() || !regPasswordInpValue.trim() ){
        snackbar_error()
        return;
      };
      let formData = new FormData();
      formData.append('username',regLogInpValue )
      formData.append('email', regEmailInpValue);
      formData.append('password', regPasswordInpValue);
      setRegEmailInpValue('')
      setRegLogInpValue("");
      setRegPasswordInpValue("");
      handleRegister(formData, navigate);
      // navigate('/login')
    
    };


  return (
    <div className="register-form">
    <h2 className='title-vhod'>Регистрация</h2>
    <p className='title-email'>Ваше имя аккаунта:</p>
    <input type="text" className='inp-email' placeholder='Введите имя аккаунта' value={regLogInpValue}  onChange={e => setRegLogInpValue(e.target.value)}/>
    <p className='title-email'>Ваша электронная почта:</p>
    <input type="text" className='inp-email' placeholder='Введите почту' value={regEmailInpValue}  onChange={e => setRegEmailInpValue(e.target.value)}/>
    <p className='title-password'>Придумайте пароль, пожалуйста:</p>
    <input type="text" className='inp-password' placeholder='Введите пароль' value={regPasswordInpValue}  onChange={e => setRegPasswordInpValue(e.target.value)}/>
    <a className='forgot-pass' href="/rest">Забыли пароль?</a>
    <button className='voiti-btn' onClick={createUser}>Регистрация</button>
    <button className='login-btn' onClick={() => navigate("/login")}>Уже есть аккаунт?</button>
    <div id="snackbar">Успешная регистрация! Подождите немного теперь...</div>
    <div id="snackbar_error">Неправильные данные!</div>
 </div>
 
  )
}

export default RegisterPage