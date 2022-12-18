import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBook from "./Components/Book/AddBook/AddBook";
import BookList from "./Components/BookList/BookList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/addBook" element={<AddBook />} />
    </Routes>
  );
};

export default MainRoutes;
