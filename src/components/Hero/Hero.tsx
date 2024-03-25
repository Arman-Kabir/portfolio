import './Hero.css';
import hero_image from '../../assets/images/arman2.png';

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero_container">

        <div className="hero_content">
          <h3>I'm Arman Kabir</h3>
          {/* <h2></h2> */}
          <h1>Full-Stack <br /> Web Developer</h1>

          <h4>JavaScript Programmer</h4>
        </div>

        <div className='hero_image'>
          <img src={hero_image} alt="ArmanImg" className='rounded__image' />
        </div>

      </div>

    </section>
  )
}

export default HeroSection