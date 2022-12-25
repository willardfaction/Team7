import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/EditProfil.css'
import Avatar from "@mui/material/Avatar";
import { authContext } from '../contexts/authContext';

const EditProfil = () => {
  const navigate = useNavigate();
  const { user, pass} = useContext(authContext);
  console.log(user);
  console.log(pass);

  return (
    <>
    <div className="edit-profil-form">
      <h3 className='edit-prof-title'>Редактировать профиль</h3>
      <CloseIcon className='close2' style={{position: 'relative', left: '950px', top: '155px'}} onClick={() => navigate("/person")}/>
      <div className='edit-fon-2'>
      <img className='avatar-foto' src={user.avatar_url} alt="jjj" />
      <button className='edited-btn' type="file">Изменить фото</button>
      <button className='deleted-btn'>Удалить</button>
      </div>
      <div className='inputs'>
      <div className='div_1'>
        <h2 className='title_name'>Логин</h2>
        <input type="text" placeholder={user.username} className='inp_1'/>
      </div>
      <div className='div_2'>
        <h2 className='title_name'>Почта</h2>
        <input type="text" placeholder={user.email} className='inp_1' />
      </div>
      <div className='div_3'>
        <h2 className='title_name'>Пароль</h2>
        <input type="text" placeholder= {pass} className='inp_1' />
          </div>
          <div className='div_3'>
        <h2 className='title_name'>Фото</h2>
        <input type="file" id='userProfileImg'  placeholder='Выберите фото'  />
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