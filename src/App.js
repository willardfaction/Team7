import React from 'react';
import Routing from './Routing';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvider from './components/contexts/authContext';

const App = () => {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routing />
      </AuthContextProvider>
    </>
  )
}

export default App