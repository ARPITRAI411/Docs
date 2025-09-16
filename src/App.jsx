import React from 'react'
import Backgroumd  from './components/Backgroumd'
import Foreground from './components/Foreground';

const App = () => {
  return (
    <div className='relative w-full h-screen  bg-zinc-800'>
      <Backgroumd/>
      <Foreground/>
      
 
    </div>
  )
}

export default App