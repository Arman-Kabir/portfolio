import { SectionHeader } from '../SectionHeader/SectionHeader';
import './Skills.css';

const Skills = () => {
    return (
        <section className='section_container'>

            <SectionHeader title={'Skills I Have'} />

            <div className='container skills_container'>

                <div className='front_end'>

                    <div className='stack_name'>
                        <h2>Front end</h2>
                        <div className='box2' />
                    </div>

                    <div className='stack_details'>
                        <div className='first_row'>
                            <p>React</p>
                            <p>NextJs</p>
                            <p>Redux-Toolkit</p>
                            <p>GraphQL</p>
                            <p>React-Native</p>
                        </div>
                        <div className='second_row'>
                            <p>React Query</p>
                            <p>RTK Query</p>
                            <p>React Router</p>
                            <p>Axios</p>
                        </div>
                        <div className='third_row'>
                            <p>HTML/CSS</p>
                            <p>Tailwind CSS</p>
                            <p>Bootstrap</p>
                            <p>Ant Design</p>
                        </div>
                    </div>
                </div>

                <div className='back_end'>

                    <div className='stack_name'>
                        <h2>Back end</h2>
                        <div className='box2' />
                    </div>

                    <div className='stack_details'>
                        <div className='first_row'>
                            <p>Node.js</p>
                            <p>Express.js</p>
                            <p>MongoDB</p>
                            <p>Mongoose</p>
                            <p>Prisma</p>
                        </div>
                        <div className='second_row'>
                            <p>SQL</p>
                            <p>PostGreSQL</p>
                        </div>
                        <div className='third_row'>

                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Skills