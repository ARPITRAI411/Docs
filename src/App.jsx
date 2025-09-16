import React from 'react'
import Backgroumd  from './Components/Backgroumd'
import Foreground from './Components/Foreground';

const App = () => {
  return (
    <div className='relative w-full h-screen  bg-zinc-800'>
      <Backgroumd/>
      <Foreground/>
      
 
    </div>
  )
}

export default App