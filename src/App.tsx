import './App.css'
import HeroSection from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Page from './pages/page';


function App() {
  return (
    <div className=''>
      <Navbar></Navbar>

      <div className='layout'>
        <Sidebar></Sidebar>
        <Page></Page>
        {/* <HeroSection></HeroSection> */}
      </div>
    </div>
  )
}

export default App
