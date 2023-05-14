import React from 'react';
import './CourseContent.scss';

export default function CourseContent() {
  return (
    <div className='content'>
      <p className='content__header'>Course Content</p>

      <div className='content__box'>
        <div className='content__box-header'>
          <ul>
            <li>Part 1</li>
            <li> ^ </li>
          </ul>
          <p>1/3 | 4 Min Left</p>
        </div>

        <div className='content__box-body'>
          <input type='checkbox' className='checked' />{' '}
          <label> Coding with Meow </label>
          <p>17 min</p>
        </div>

        <div className='content__box-body'>
          <input type='checkbox' className='checked' />{' '}
          <label> Green eyes are cool </label>
          <p>26 min</p>
        </div>

        <div className='content__box-body'>
          <input type='checkbox' className='checked' />{' '}
          <label> A year, full of free hats</label>
          <p>39 min</p>
        </div>
      </div>

      <div className='content__box-two'>
        <ul>
          <li>Part 2</li>
          <li> ^ </li>
        </ul>
        <p>2/3 | 15 Min Left</p>
      </div>

      <div className='content__box-three'>
        <ul>
          <li>Part 3</li>
          <li> ^ </li>
        </ul>
        <p>3/3 | 28 Min Left</p>
      </div>
    </div>
  );
}
