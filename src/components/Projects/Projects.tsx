import { useEffect, useState } from 'react';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import './Projects.css';
import Project from '../Project/Project';

const Projects = () => {
    let [data, setData] = useState([]);
    let [click, setClick] = useState('');
    // let [filteredData, setFilteredData] = useState([]);

    // console.log(click);
    function handleButton(arg: any) {
        setClick(arg);
        // const filtered = data.filter((item) => {
        //     return item.tags.includes(arg) || arg === 'all'
        // })
        // console.log(arg);

        // console.log(filtered);

        // setFilteredData(filtered);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('data.json');
                const jsonData = await response.json();
                setData(jsonData);
                // setFilteredData(jsonData);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])


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

                <div className="project_lists">
                    {data &&
                        data.filter((item) => {
                            return click === ('' || 'all') ? item :
                                item.tags.includes(click)
                        }).map((project) => (
                            <Project project={project} key={project.id}></Project>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Projects