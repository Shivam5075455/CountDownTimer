import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountDownTimer from './components/CountDownTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CountDownTimer/>
    </>
  )
}

export default App
