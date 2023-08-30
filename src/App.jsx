import React from 'react'
import Appnav from './Appnav'
import Carosuel from './Carosuel'
import Appnavtwo from './Appnavtwo'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import All from './All'
import Fullstack from './Fullstack'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'
import Footer from './FOoter'



function App() {
  return (
    <>
    <Router>
      <Appnav></Appnav>
      <Carosuel></Carosuel>
      <Appnavtwo></Appnavtwo>
      <Routes>
        <Route path='/' exact Component={All}></Route>
        <Route path='/full-stack-development' Component={Fullstack}></Route>
        <Route path='/data-science' Component={Datascience}></Route>
        <Route path='/cyber-security' Component={Cybersecurity}></Route>
        <Route path='/career' Component={Career}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
       
    </>
    
    
      

  
 
  
    
  )
}

export default App