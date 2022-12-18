import React from 'react'
import { useNavigate } from "react-router-dom";
import "../../styles/Restore.css"
import { authContext } from '../contexts/authContext';
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

const RestorePage = () => {
  const { passwordRecovery } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  console.log(email, code, password, repeatPassword);
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  
  function sendCode() {
    let passwordRecoveryObj = new FormData();
    passwordRecoveryObj.append("email", email);
    passwordRecoveryObj.append("new_password", password);
    passwordRecoveryObj.append("new_pass_confirm", repeatPassword);
    passwordRecoveryObj.append("code", code);
    passwordRecovery(passwordRecoveryObj, navigate);
    localStorage.removeItem("email");

  }
  return (
    <div className="restore-form">
    <h2 className='title-restore'>Сброс пароля</h2>
    <p className='title-email'>Придумайте новый пароль, пожалуйста:</p>
    <input type="text" className='inp-email' placeholder='Введите'/>
    <p className='title-password'>Подвердите пароль:</p>
    <input type="text" className='inp-password' placeholder='Введите'/>
    <button className='restore-btn' onClick={() => navigate("/")}>Сохранить</button>
 </div>
  )
}

export default RestorePage