import { useState } from 'react'
import LogInForm from './components/LogInForm'
import './App.css'

function App() {
  function handleLogin(data){
    //nanti
  }

  return (
    <>
      <LogInForm onAdd={handleLogin} />
    </>
  )
}

export default App
