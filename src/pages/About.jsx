import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

function About() {
  return (
    <div>
      <Navbar/>
      <div className="section">
        <h1>Recent Projects</h1>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </div>
  )
}

export default About
