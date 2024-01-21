
import './Sidebar.css';
import arman2 from '../../assets/images/arman2.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar__container'>
                <div >
                    <img className='myImage2' src={arman2} alt="" />
                </div>
                <div className='intro'>
                    <h4>Arman Kabir</h4>
                    <hr />
                    <h3>Full-Stack <br /> Web Developer </h3>
                    <p>Javascript Programmer</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar