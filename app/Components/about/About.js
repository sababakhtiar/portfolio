
"use client"
import React from 'react';
import './About.css';
import AboutBox from './AboutBox';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiMongodb, SiPrisma, SiGraphql, SiTypescript, SiFirebase, SiPostgresql, SiTailwindcss, SiAxios, SiReact } from 'react-icons/si';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>About Me</h2>

      <div className='about__container grid'>
        <img src="images/saba.webp" height={200} width={200} alt='' className='about__img' />

        <div className='about__data grid'>
          <div className='about__info'>
          <p className='about__description'>
  I am eager to build a dynamic career in IT, leveraging my full stack development skills to contribute to innovative and impactful projects. During my bootcamp, I worked on various projects using different tech stacks, and now I am seeking an opportunity to further develop and refine my skills.
</p>
            <a href='https://drive.google.com/file/d/1F4gKWBQYJFzvWl2-sMplH8kDZrO25Uyi/view?usp=sharing' className='btn' download={"Chetan's Resume"}>Download Resume</a>
          </div>

          <div className='about__skills grid'>
            {/* Skill Icons with Names */}
            <div className='skills__icons'>

              <div className='skill'>
                <FaHtml5 className='skill__icon' title="HTML" />
                <span className='skill__name'>HTML</span>
              </div>
              <div className='skill'>
                <FaCss3Alt className='skill__icon' title="CSS" />
                <span className='skill__name'>CSS</span>
              </div>
              
            <div className='skill'>
                <FaJs className='skill__icon' title="JavaScript" />
                <span className='skill__name'>JavaScript</span>
              </div>
              <div className='skill'>
                <SiTypescript className='skill__icon' title="TypeScript" />
                <span className='skill__name'>TypeScript</span>
              </div>
              <div className='skill'>
                <FaReact className='skill__icon' title="React" />
                <span className='skill__name'>React.Js</span>
              </div>
              <div className='skill'>
                <SiReact className='skill__icon' title="React Native" />
                <span className='skill__name'>React Native</span>
              </div>
            
              <div className='skill'>
                <SiTailwindcss className='skill__icon' title="Tailwind CSS" />
                <span className='skill__name'>Tailwind CSS</span>
              </div>
              <div className='skill'>
                <SiRedux className='skill__icon' title="Redux Toolkit" />
                <span className='skill__name'>Redux Toolkit</span>
              </div>
             
              <div className='skill'>
                <SiNextdotjs className='skill__icon' title="Next.js" />
                <span className='skill__name'>Next.js</span>
              </div>
              <div className='skill'>
                <FaNodeJs className='skill__icon' title="Node.js" />
                <span className='skill__name'>Node.js</span>
              </div>
              <div className='skill'>
                <SiMongodb className='skill__icon' title="MongoDB" />
                <span className='skill__name'>MongoDB</span>
              </div>
              <div className='skill'>
                <SiPrisma className='skill__icon' title="Prisma ORM" />
                <span className='skill__name'>Prisma ORM</span>
              </div>
              <div className='skill'>
                <SiPostgresql className='skill__icon' title="PostgreSQL" />
                <span className='skill__name'>PostgreSQL</span>
              </div>
              <div className='skill'>
                <SiGraphql className='skill__icon' title="GraphQL" />
                <span className='skill__name'>GraphQL</span>
              </div>
              <div className='skill'>
                <SiFirebase className='skill__icon' title="Firebase" />
                <span className='skill__name'>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
