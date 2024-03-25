import './App.css'
import About from './components/About/About';
import HeroSection from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>

      <Navbar></Navbar>

      <div className=''>
        <HeroSection></HeroSection>
        <About></About>
      </div >

    </div>

  )
}

export default App
