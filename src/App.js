import React from "react";
import Routing from "./Routing";
import AuthContextProvider from "./components/contexts/authContext";
import BookContextProvider from "./components/contexts/bookContext";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <BookContextProvider>
          <Navbar />
          <Routing />
        </BookContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
