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

    function createUser() {
      if(!regEmailInpValue.trim() || !regPasswordInpValue.trim() ){
        alert('Some inputs are empty!');
        return;
      };
      let formData = new FormData();
      formData.append('username',regLogInpValue )
      formData.append('email', regEmailInpValue);
      formData.append('password', regPasswordInpValue);
      handleRegister(formData, navigate);
      navigate('/login')
      alert('Проверьте почту и активируйте аккаунт!');
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
 </div>
  )
}

export default RegisterPage