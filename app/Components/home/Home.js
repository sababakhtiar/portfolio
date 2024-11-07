
import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Image from 'next/image';
const Home = () => {
  return (
   <section className='home container' id='home'>
   <div className='intro'>
   <Image src="/images/saba.webp" alt="description" width={200} height={200} className='home__img' />
    <h1 className='home__name'>Saba</h1>
    <span className='home__education'>
    I am a Full-Stack Developer
    </span>

    <HeaderSocials/>

    <a href='#contact' className='btn'>Hire Me</a>
    <ScrollDown/>
   </div>

   <Shapes/>

   </section> 
  )
}

export default Home

