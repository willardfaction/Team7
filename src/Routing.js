import React from 'react';
import { Routes, Route } from "react-router-dom"
import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage';
import RestPage from './components/pages/RestPage';
import RestorePage from './components/pages/RestorePage';
import PersonPage from './components/pages/PersonPage';
import LibraryPage from './components/pages/LibraryPage';
import DetailsPage from './components/pages/DetailsPage';
import TopBookPage from './components/pages/TopBookPage';
import HomePage from './components/pages/HomePage';
import ModalkaDownBook from './components/ModalkaDownBook';
import ModalkaEditBook from './components/ModalkaEditBook';
import EditProfilPage from './components/pages/EditProfilPage';

const PAGES_ROUTES = [
    {
        link: "/",
        element: <HomePage />,
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
      {
        link: "/person",
        element: <PersonPage />,
        id: 6,
      },
      {
        link: "/library",
        element: <LibraryPage />,
        id: 7,
      },
      {
        link: "/detail",
        element: <DetailsPage />,
        id: 8,
      },
      {
        link: "/topbook",
        element: <TopBookPage />,
        id: 9,
      },
      {
        link: "/downbook",
        element: <ModalkaDownBook />,
        id: 10,
      },
      {
        link: "/editbook",
        element: <ModalkaEditBook />,
        id: 11,
      },
      {
        link: "/editprofil",
        element: <EditProfilPage />,
        id: 12,
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