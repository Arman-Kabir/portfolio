import { SectionHeader } from '../SectionHeader/SectionHeader';
import './Projects.css';

const Projects = () => {
    function handleButton(arg) {
        console.log(arg);
    }

    
    return (
        <section className='section_container'>
            <SectionHeader title="My Projects"></SectionHeader>
            <div className="  container projects_container">
                <div className='project_categories'>
                    <button onClick={() => handleButton('all')} className='btn btn_dark'>All</button>
                    <button onClick={() => handleButton('react')} className='btn btn_dark'>ReactJs</button>
                    <button onClick={() => handleButton('next')} className='btn btn_dark'>NextJs</button>
                    <button onClick={() => handleButton('node')} className='btn btn_dark'>Node</button>
                    <button onClick={() => handleButton('landing')} className='btn btn_dark'>Landing Page</button>

                </div>

            </div>
        </section>
    )
}

export default Projects