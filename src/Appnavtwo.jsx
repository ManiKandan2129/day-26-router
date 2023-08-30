import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './navrouter.css'


function Appnavtwo() {
  return (

    <div className='nav-router'>
        <Navbar bg="light" expand="lg" className='responsive-navbar-nav'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <h5 className='nav-name'>Blog Content</h5>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto"> 
          <Link to="/" className='item'>ALL</Link>
          <Link to="/full-stack-development" className='item'>FULL STACK DEVELOPMENT</Link>
          <Link to="/data-science" className='item'>DATA SCIENCE</Link>
          <Link to="/cyber-security" className='item'>CYBER SECURITY</Link>
          <Link to="/career" className='item'>CAREER</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {/* link for the home search / */}

    
    </div>

    
  )
}

export default Appnavtwo