
import './Sidebar.css';
import arman2 from '../../assets/images/arman2.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar__container'>
                <div className='image-box'>
                    <img className='myImage2' src={arman2} alt="" />
                    <h4>Arman Kabir</h4>
                    <hr />
                </div>
                <div className='intro'>
                    <h3>Full-Stack</h3>
                    <h3> Web Developer </h3>
                    <p>Javascript Programmer</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Sidebar