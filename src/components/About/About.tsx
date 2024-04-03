// import React from 'react';

import { SectionHeader } from '../SectionHeader/SectionHeader';
import './About.css';


const About = () => {
    return (
        <section id='about' className='section_container'>
            <SectionHeader title={'About Me'} />

            <div className='container about_container'>
                <p className='para'>Arman Kabir is an enthusiastic and skilled web developer with a deep passion for crafting outstanding web applications. He is a computer science and engineering graduate and participated 1 year long professional web development bootcamp in which he scored top 5%
                    performance. His expertise expands the entire web development stack from the front-end to back-end and he loves working with a diverse set of technologies to create dynamic and user-friendly web applications.
                </p>


                <p className='para'>In the front-end , my proficiency includes HTML, CSS, javaScript, TypeScript, ReactJs, NextJs and Redux. I'm well versed in component-driven development and i enjoy working with UI
                    libraries such as Tailwind CSS, Shadcn UI, Daisy UI, Ant Design, Bootstrap. I manage data and
                    tate with React Query and RTK Query. I utilize tools like Axios, React-Hook-Form and Yp
                    validation to make interaction both engaging and secure. For seamless user-authentication i
                    use Firebase, NextAuth and custom backend-based authentication if necessary. For quick
                    e-commerce solution - I use wordpress, woo-commerce and elementor.
                </p>

                <p className='para'>In the back-end, m expertise are NodeJs,ExpressJs, MongoDB, SQL, PostGreSQL, Mongoose,
                    Prisma. I use both SQL and NoSQL based databases in my projects. I write backend api i MVC
                    pattern or modular pattern. I use Zod for data validation and JWT for authorization and
                    authentication.Feel free to connect with me. I am eager to collaborate on exciting projects.
                </p>

            </div>

        </section>
    );
};

export default About; 