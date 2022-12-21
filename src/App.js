import React from 'react';
import Routing from './Routing';
import AuthContextProvider from './components/contexts/authContext';

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </>
  )
}

export default App