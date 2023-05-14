import './App.scss';
import LessonPage from './components/LessonPage/LessonPage';
import LessonNote from './components/LessonNote/LessonNote';
import About from './components/About/About';
import CourseContent from './components/CourseContent/CourseContent';

function App() {
  return (
    <div className='lesson'>
      <div className='lesson__left'>
        <LessonPage />
        <LessonNote />
      </div>

      <div className='lesson__right'>
        <About />
        <CourseContent />
      </div>
    </div>
  );
}

export default App;
