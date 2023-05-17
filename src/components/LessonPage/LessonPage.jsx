import React from 'react';
import './LessonPage.scss';
import Video from '../../assets/video-image.png';

import Dislike from '../../assets/reaction-feedback_svg/sad.svg';
import Boring from '../../assets/reaction-feedback_svg/uninterested.svg';
import Happy from '../../assets/reaction-feedback_svg/Smile.svg';

import Arrow from '../../assets/feedback-buttons/download.svg';
import Download from '../../assets/feedback-buttons/arrow.png';

export default function LessonPage() {
  return (
    <div className='lessonpage'>
      <div className='lessonpage__video'>
        <iframe
          className='iframe'
          width='100%'
          src='https://www.youtube.com/embed/iwIujeZpBAQ'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </div>

      <section className='feedback'>
        <div>
          <p className='feedback__title'>Rate this course</p>
          <div className='feedback__images'>
            <img src={Dislike} />
            <img src={Boring} />
            <img src={Happy} />
          </div>
          <div></div>
        </div>

        <section className='feedback__buttons'>
          <div className='feedback__buttons-download'>
            <a href='#'>Download File</a>
            <img src={Arrow} />
          </div>

          <div className='feedback__buttons-complete'>
            <a href='#'>Complete and Continue</a>
            <img src={Download} className='download' />
          </div>
        </section>
      </section>
    </div>
  );
}
