import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import RestPage from "./components/pages/RestPage";
import RestorePage from "./components/pages/RestorePage";
import PersonPage from "./components/pages/PersonPage";
import LibraryPage from "./components/pages/LibraryPage";
import DetailsPage from "./components/pages/DetailsPage";
import BookCard from "./components/BookCard";
import BookList from "./components/BookList";

const PAGES_ROUTES = [
  {
    link: "/",
    element: <BookList />,
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
];

const Routing = () => {
  return (
    <Routes>
      {PAGES_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default Routing;
