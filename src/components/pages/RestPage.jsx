import React from 'react';
import { useNavigate } from "react-router-dom";
import "../../styles/Rest.css"

const RestPage = () => {
    const navigate = useNavigate();

  return (
    <div className="restore-form">
    <h2 className='title-rest'>Сброс пароля</h2>
    <p className='title-email'>Укажите почту:</p>
    <input type="text" className='inp-emaile' placeholder='Введите'/>
    <button className='rest-btn' onClick={() => navigate("/restore")}>Отправить сообщение</button>
 </div>
  )
}

export default RestPage