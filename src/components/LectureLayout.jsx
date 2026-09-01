import React, { useState, useCallback, useEffect } from 'react';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * LectureLayout — спільний компонент навігації для всіх лекцій.
 *
 * Використання:
 *   import LectureLayout from '../components/LectureLayout';
 *
 *   const slides = [
 *     { id: 1, title: 'Титульний слайд', component: TitleSlide },
 *     { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
 *     ...
 *   ];
 *
 *   function Lecture1() {
 *     return <LectureLayout slides={slides} />;
 *   }
 */
export default function LectureLayout({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index) => {
      if (index >= 0 && index < slides.length && !isAnimating) {
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 300);
      }
    },
    [isAnimating, slides.length]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, slides.length]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="lecture-wrapper">
      {/* Slide Navigation Bar */}
      <nav className="slide-nav">
        {/* Left: Navigation buttons */}
        <div className="slide-nav__controls">
          <button
            onClick={() => goToSlide(0)}
            className="slide-nav__btn"
            title="На початок (Home)"
          >
            <Home />
          </button>

          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="slide-nav__btn"
            title="Попередній (←)"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="slide-nav__btn"
            title="Наступний (→)"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Center: Slide selector */}
        <div className="slide-nav__indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`slide-nav__indicator ${
                currentSlide === index
                  ? 'slide-nav__indicator--active'
                  : 'slide-nav__indicator--inactive'
              }`}
              title={slide.title}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Right: Slide info */}
        <div className="slide-nav__counter">
          {currentSlide + 1} / {slides.length}
        </div>
      </nav>

      {/* Slide Content */}
      <div className="slide-container">
        <div key={currentSlide} className="fade-in">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Keyboard hints */}
      <div className="keyboard-hints">
        <span>← → — навігація</span>
        <span>Home — на початок</span>
        <span>End — в кінець</span>
      </div>
    </div>
  );
}