import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import home from '../../images/icons/homeicon.png';
import user from '../../images/icons/usericon.png';
import library from '../../images/icons/libraryicon.png';
import logo from '../../images/img/StudyLab.png';
import search from '../../images/icons/searchicon.png';
import './header.scss';

function Header() {
  const pages = ['/', 'register', 'login'];
  const navigate = useNavigate();

  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} alt='logo' />
        <input type='search' />
        <img className='logo__search' src={search} alt='seacrh' />
      </div>
      <nav>
        <ul className='header__lists'>
          <NavLink to={'/'} className='list' end>
            <img src={home} alt='homeicon' />
            <span>Главная</span>
          </NavLink>
          <NavLink to={'/private'} className='list'>
            <img src={user} alt='usericon' />
            <span>Личный кабинет</span>
          </NavLink>
          <NavLink to={'/'} className='list'>
            <img src={library} alt='libraryicon' />
            <span>Библиотека</span>
          </NavLink>
        </ul>
      </nav>
      <button onClick={() => navigate('/login')} className='header__button'>
        Войти
      </button>
    </header>
  );
}

export default Header;
