import './App.css';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Portfolio from './component/portfolio';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className='main' >
      <h1>Blessed Builders </h1>
      <div >
      
      
        <Router>
        <Navbar/>
          <Routes  >
            <Route path='/' exact element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
        </div>
      </div>
    
  );
}

export default App;
