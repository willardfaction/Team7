import React from 'react'
import { useNavigate } from "react-router-dom";
import "../../styles/Restore.css"

const RestorePage = () => {
    const navigate = useNavigate();

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