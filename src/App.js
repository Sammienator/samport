
import './App.css';
import React from 'react';

import Navbars from './components/Navbar'
import Jum from './components/Jum'
import About from './components/About'
import Progress from './components/Progress'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      
      <Navbars/>

      <Jum/>

      <About/>
      
      <Progress/>

      <Contact/>

      <Footer/>
      

     
      
    </div>
  );
}

export default App;
