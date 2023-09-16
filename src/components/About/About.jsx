import React from 'react';
import './About.scss';
import profilePic from '../../assets/yellow-hat.png';
import detail from '../../assets/detail.png';
import Chevron from '../../assets/Vector.png';

export default function About() {
  return (
    <div className='about'>
      <div className='about__header'>
        <ul>
          <li>About this course</li>
          <li>
            {' '}
            <img src={Chevron} />{' '}
          </li>
        </ul>
      </div>

      <div className='about__info'>
        <div>
          <img src={detail} /> <label> Easy </label>
        </div>
        <div>
          <img src={detail} /> <label> Medium </label>
        </div>
        <div>
          <img src={detail} /> <label> Hard </label>
        </div>
      </div>

      <div className='about__category'>
        <button>Category 1</button>
        <button>Category 2</button>
        <button>Category 3</button>
      </div>

      <p className='about__summary'>
        {' '}
        This Course includes learning about cats in yellow hats and why they are
        more superior than cats with blue and purple hats. As you can see from
        our teacher in the picture below, he is a cat himself with a yellow hat
        and green eyes which makes him a senior developer cat. He even invented
        Facebook, Snapchat, Instagram, React and JustEat for cats.{''}
      </p>

      <div className='about__teacherInfo'>
        <img src={profilePic} />
        <ul>
          <li> Mr. Kat Meow</li>
          <li>
            Skills : a senior hacker of the national security instution for cats
            around the world.
          </li>
        </ul>
      </div>
    </div>
  );
}
