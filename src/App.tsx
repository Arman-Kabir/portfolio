import './App.css'
import HeroSection from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Page from './pages/page';


function App() {
  return (
    <div className='container'>
      <Navbar></Navbar>

      <HeroSection></HeroSection>




      {/* <div className='layout'>
        {/* <Sidebar></Sidebar> */}
      {/* <Page></Page> */}
      {/* </div> * /} */}


    </div >
  )
}

export default App
