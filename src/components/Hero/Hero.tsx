import './Hero.css';
import hero_image from '../../assets/images/arman2.png';

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div>
            <h3>Hi, I'm</h3>
            <h2>Arman Kabir</h2>
            <h1>Full-Stack <br /> Web Developer</h1>
          </div>
        </div>
        <div className='hero_image'>
          <img src={hero_image} alt="Arman's Img" className='rounded__image' />
        </div>
      </div>

    </section>
  )
}

export default HeroSection