import React from 'react';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage';
import RestPage from './components/pages/RestPage';
import RestorePage from './components/pages/RestorePage';

const PAGES_ROUTES = [
    {
        link: "/",
        element: <Navbar />,
        id: 1,
      },
      {
        link: "/login",
        element: <LoginPage />,
        id: 2,
      },
      {
        link: "/register",
        element: <RegisterPage />,
        id: 3,
      },
      {
        link: "/rest",
        element: <RestPage />,
        id: 4,
      },
      {
        link: "/restore",
        element: <RestorePage />,
        id: 5,
      },
]

const Routing = () => {
  return (
    <Routes>
      {PAGES_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  )
}

export default Routing