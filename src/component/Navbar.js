import { Link } from 'react-router-dom';

import ilogo from '../asset/logo.svg';

 function Navbar() {

  return (
    <div className='tab'>
      <img src={ilogo} alt="logo" className="logo" />
      <div className='linker'>
      <Link className='btn' to="/">Home</Link>
      <Link className='btn' to="portfolio">Portfolio</Link>
      <Link className='btn' to="about" >About</Link>
      <Link className='btn' to="contact">Contact</Link>
      </div>
      </div>
  
  );
}

export default Navbar