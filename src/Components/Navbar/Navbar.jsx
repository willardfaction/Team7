import React, { useContext, useEffect, useState } from 'react';
import '../../styles/Navbar.css'
import logo from "../../img/logo.png"
import search from "../../img/search.png"
import home from "../../img/home.png"
import vector2 from "../../img/vector2.png"
import vector3 from "../../img/vector3.png"
import BookCard from '../BookCard';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { authContext } from '../contexts/authContext';
import PersonIcon from '@mui/icons-material/Person';
import { bookContext } from '../contexts/bookContext';
import SearchCard from '../pages/SearchCard';




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(20),
      height: '40px',
      width: '300px',
      backgroundColor: '#f6f1f1',
      top: '40px',
      border: '1%'
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, user } = useContext(authContext);
  const { searchArray,searchBook } = useContext(bookContext);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    searchBook(searchValue)
  },[searchValue])




  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="logo-title" />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }} value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
        </Search>
        {/* {searchArray ? searchArray.map((item) => (
          <div className='search'>
          <SearchCard obj = {item} />
          </div>
        ))
        :null} */}

          <img src={home} alt="home" className="home-icon" onClick={() => navigate("/")}/>
          <img src={vector2} alt="vector2" className="vector2-icon" onClick={() => navigate("/person")}/>
          <img src={vector3} alt="vector3" className="vector3-icon" onClick={() => navigate("/library")}/>
          <ul className="navbar-menu">
            <li className="navbar-item" onClick={() => navigate("/")}>
              Главная
            </li>
            <li className="navbar-item" onClick={() => navigate("/person")}>
              Личный кабинет
            </li>
            <li className="navbar-item" onClick={() => navigate("/library")}>
              Библиотека
            </li>
        </ul>
        {currentUser ?
          <div className='btn-voi'><img className='btn-img'   src={user.avatar_url} />
          <span>{currentUser}</span></div>
        : <button className='btn-voiti' onClick={() => navigate("/login")}>Войти</button>}
      </div>
    </div>
  )
}

export default Navbar