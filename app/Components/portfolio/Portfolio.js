"use client";

import React from 'react';
import Image from 'next/image'; // Correct import for the Image component
import "./Portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  return (
    <section className='work container section' id='work'>
      <h2 className='section__title'>Recent Works</h2>

      <div className='work__container grid'>
        {Menu.map((elem) => {
          const { id, Image: imageSrc, title, category, link } = elem;
          return (
            <div className='work__card' key={id}>
              <div className='work__thumbnail'>
                <Image src={imageSrc} alt={title} className='work__img' width={500} height={300} />
                <div className='work__mask'></div>
              </div>
              <span className='work__category'>{category}</span>
              <h3 className='work__title'>{title}</h3>
              <a href={link} className='work__button' target="_blank" rel="noopener noreferrer">
                <i className='icon-link work__button-icon'></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
