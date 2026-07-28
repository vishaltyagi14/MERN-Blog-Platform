import React from 'react'
import Login from './components/accounts/login'
import {Box} from '@mui/material';
import ContextProvider from './context/Context';
import Home from './components/home/home';



const App = () => {
  return (
    <>
    <ContextProvider>
      <Login/>
      <Home/>
    </ContextProvider>
    </>
  )
}

export default App