import React, { useState, useContext, useEffect } from 'react';
import "../../styles/Register.css";
import { useNavigate } from "react-router-dom";
import { authContext, useAuth } from '../contexts/authContext';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../Navbar/Navbar';

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
    <>
    <Navbar/>
    <div className='fon'>
    <div className="register-form">
    <CloseIcon className='close' style={{left: '368px', top: '8px'}} onClick={() => navigate("/")}/>
    <h2 className='title-vhod'>Регистрация</h2>
    <p className='title-email-accaunt'>Ваше имя аккаунта:</p>
    <input type="text" className='inp-email-accaunt' placeholder='Введите имя аккаунта' value={regLogInpValue}  onChange={e => setRegLogInpValue(e.target.value)}/>
    <p className='title-email-pochta'>Ваша электронная почта:</p>
    <input type="text" className='inp-email-pochta' placeholder='Введите почту' value={regEmailInpValue}  onChange={e => setRegEmailInpValue(e.target.value)}/>
    <p className='title-passwords'>Придумайте пароль, пожалуйста:</p>
    <input type="text" className='inp-passwords' placeholder='Введите'/>
    <button className='registr-voiti-btn'>Регистрация</button>
    <button className='have-accaunt-btn' onClick={() => navigate("/login")}>Уже есть аккаунт?</button>
    <div id="snackbar">Успешная регистрация! Подождите немного теперь...</div>
    <div id="snackbar_error">Неправильные данные!</div>
 </div>
 </div>
 </>
  )
}

export default RegisterPage