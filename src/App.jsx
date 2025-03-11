import { useState } from 'react'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'


function App() {

  return (
    <div className='content-wrapper'>
      <Header/>
      <Main/>
      <Footer/>
  </div>
  )
}

export default App
