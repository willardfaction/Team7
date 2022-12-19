import React from 'react'
import { useNavigate } from "react-router-dom";
import "../../styles/Restore.css"
import Navbar from '../Navbar/Navbar';
import CloseIcon from '@mui/icons-material/Close';

const RestorePage = () => {
    const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className='fon'>
    <div className="restore-form">
    <CloseIcon className='close' style={{left: '368px', top: '8px'}} onClick={() => navigate("/")}/>
    <h2 className='title-restore'>Сброс пароля</h2>
    <p className='title-email2'>Придумайте новый пароль, пожалуйста:</p>
    <input type="text" className='inp-email' placeholder='Введите'/>
    <p className='title-password2'>Подвердите пароль:</p>
    <input type="text" className='inp-password' placeholder='Введите'/>
    <button className='restore-btn' onClick={() => navigate("/")}>Сохранить</button>
 </div>
 </div>
 </>
  )
}

export default RestorePage