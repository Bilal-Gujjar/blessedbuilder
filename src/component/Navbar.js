import { Link } from 'react-router-dom';
// import Home from './home';
// import About from './about';
// import Portfolio from './portfolio';
// import Contact from './contact';

function Navbar() {
  return (
    <div className='vh'>
    
      <Link to="/" className='lc'>Home</Link>
    
      <Link to="portfolio" className='lc'>Portfolio</Link>
    
      <Link to="about" className='lc'>About</Link>
   
      <Link to="contact" className='lc'>Contact</Link>
    
  </div>
  );
}

export default Navbar