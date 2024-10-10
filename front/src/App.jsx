import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [ms, setMs] = useState('init')
  useEffect(()=>{
    const init=async()=>{
      const {data} = await axios.post('api') ;
      console.log(data)
    }
    // init();
  },[])
  return (
    <>
      {ms}
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
