import React from 'react';
import './LessonNote.scss';

export default function LessonNote() {
  return (
    <div className='note'>
      <p> Lesson Note </p>

      <textarea placeholder='Type here...' cols={100} rows={8}></textarea>

      <div className='note__buttons'>
        <button> Reset </button>
        <button className='note__buttons--save'> Save </button>
      </div>
    </div>
  );
}
