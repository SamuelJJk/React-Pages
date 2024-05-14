import React from 'react'
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='recent'>
        <h1>Recent projects</h1>
      <div className='cardDisplay'>
        <Cards />
        <Cards />
        <Cards />
      </div>
      </div>
     
    </div>
  )
}

export default Index
