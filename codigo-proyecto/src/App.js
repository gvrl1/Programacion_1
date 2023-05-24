import React from 'react'
import { Navbar } from './components/Navbar';
// import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Cards from './components/Cards';
import './App.css';
import Hero from './components/Hero';


function App () {
  return (
    <div className='App'>
      <Navbar />
      {/* <Header /> */}
      <Hero />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;