import './App.css'
import About from './components/About/About';
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
      </div >

    </div>

  )
}

export default App
