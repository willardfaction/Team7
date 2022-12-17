import React from 'react';
import '../../styles/Navbar.css'
import logo from "../../img/logo.png"
import search from "../../img/search.png"
import home from "../../img/home.png"
import vector2 from "../../img/vector2.png"
import vector3 from "../../img/vector3.png"
import BookCard from '../BookCard';
import { useNavigate } from "react-router-dom";

const pages = ['/', 'register', 'login'];

const Navbar = () => {
    const navigate = useNavigate();


  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="logo-title" />
        <input
            className="search-inp"
            type="text"
            placeholder="Search..."
            label="Search"
          />
          {/* <button className='search-btn'>{search}</button> */}
          <img src={home} alt="home" className="home-icon" />
          <img src={vector2} alt="vector2" className="vector2-icon" />
          <img src={vector3} alt="vector3" className="vector3-icon" />
          <ul className="navbar-menu">
            <li className="navbar-item" >
              Главная
            </li>
            <li className="navbar-item" >
              Личный кабинет
            </li>
            <li className="navbar-item" >
              Библиотека
            </li>
          </ul>
          <button className='btn-voiti' onClick={() => navigate("/login")}>Войти</button>
      </div>
      <BookCard />
    </div>
  )
}

export default Navbar