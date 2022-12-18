import React from "react";
import BookContextProvider from "./Context/BookContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <BookContextProvider>
        <MainRoutes />
      </BookContextProvider>
    </>
  );
};

export default App;
