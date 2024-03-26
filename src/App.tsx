import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div>

      <Navbar></Navbar>

      <div className=''>
        <HeroSection></HeroSection>
        <About></About>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
      </div >

    </div>

  )
}

export default App
