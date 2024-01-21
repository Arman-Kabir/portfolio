// import { Link } from 'react-router-dom';
import './Navbar.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

const Navbar = () => {
  return (
    <header className='flex-base navbar'>
        <div>
            <h3>Arman's Portfolio</h3>
        </div>
        <nav>
          <span><a href="#home">Home</a></span>
          <span><a href="#about">About</a></span>
          <span><a href="#skills">Skills</a></span>
          <span><a href="#projects">Projects</a></span>
        </nav>

        <div>
          <span> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> </span>
          <span> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </span>
          <span> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </span>       
        </div>

    </header>
  )
}

export default Navbar