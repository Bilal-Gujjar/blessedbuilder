import './App.css';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Portfolio from './component/portfolio';
import Navbar from './component/Navbar';
import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";



function App() {
  return (
    <div className='background'>
      <h1 className='title'>Blessed Builder</h1>
      <div  className='route'>

        <Router   >
          <Navbar  />
          <Routes  >
            <Route path='/' exact element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>

      </div>
      {/* <din>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
    </din> */}
    </div>
  );
}

export default App;
