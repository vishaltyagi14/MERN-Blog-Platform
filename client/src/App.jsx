import React from 'react'
import Login from './components/accounts/login'
import {Box} from '@mui/material';




const App = () => {
  return (
    <>
    <ContextProvider>
      <Login/>
    </ContextProvider>
    </>
  )
}

export default App