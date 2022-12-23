import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Routing from './Routing';
import AuthContextProvider from './components/contexts/authContext';
import Header from './components/Header';
import Main from './components/Main';
import Private from './pages/Private';

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/private' element={<Private />} />
          {/* <Routing /> */}
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
