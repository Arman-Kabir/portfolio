import './Navbar.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

const Navbar = () => {
  return (
    <header>
      <div className='container'>

        <div className="navbar_container">
          <div>
            <h2>Arman's Portfolio</h2>
          </div>

          <nav className='close'>
            <span><a href="#home">Home</a></span>
            <span><a href="#about">About</a></span>
            <span><a href="#skills">Skills</a></span>
            <span><a href="#projects">Projects</a></span>
          </nav>

          <div className='close'>
            <span> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> </span>
            <span> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </span>
            <span> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </span>
          </div>
          
        </div>
      </div>

    </header>
  )
}

export default Navbar