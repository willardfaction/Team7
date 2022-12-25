import React from 'react';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import '../styles/EditProfil.css'
import Avatar from "@mui/material/Avatar";

const EditProfil = () => {
    const navigate = useNavigate();

  return (
    <>
    <div className="edit-profil-form">
      <h3 className='edit-prof-title'>Редактировать профиль</h3>
      <CloseIcon className='close2' style={{position: 'relative', left: '950px', top: '155px'}} onClick={() => navigate("/person")}/>
      <div className='edit-fon-2'>
      <Avatar className='avatar-foto'/>
      <button className='edited-btn'>Изменить фото</button>
      <button className='deleted-btn'>Удалить</button>
      </div>
      <div className='inputs'>
      <div className='div_1'>
        <h2 className='title_name'>Логин</h2>
        <input type="text" placeholder='введите логин' className='inp_1'/>
      </div>
      <div className='div_2'>
        <h2 className='title_name'>Почта</h2>
        <input type="text" placeholder='введите почту' className='inp_1' />
      </div>
      <div className='div_3'>
        <h2 className='title_name'>Пароль</h2>
        <input type="text" placeholder='введите пароль' className='inp_1' />
      </div>
      <a className='change-pass' href="">Поменять пароль</a>
      </div>
        <button className='btn_save'>Сохранить</button>
        <button className='btn_delete_account'>Удалить аккаунт</button>
     </div>
    </>
  )
}

export default EditProfil