import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Home, ChevronLeft, ChevronRight, BookOpenCheck } from 'lucide-react';
import SelfStudyBadge from './SelfStudyBadge';

/**
 * LectureLayout — спільний компонент навігації для всіх лекцій.
 *
 * Використання:
 *   import LectureLayout from '../components/LectureLayout';
 *
 *   const slides = [
 *     { id: 1, title: 'Титульний слайд', component: TitleSlide },
 *     { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
 *     // slides left to the student carry a flag:
 *     { id: 10, title: 'Кешування', component: CachingSlide, selfStudy: true },
 *     ...
 *   ];
 *
 *   function Lecture1() {
 *     return <LectureLayout slides={slides} />;
 *   }
 *
 * Slides without `selfStudy` behave exactly as before, so lectures that
 * do not use the flag need no changes.
 */
export default function LectureLayout({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selfStudyOnly, setSelfStudyOnly] = useState(false);

  // The filter button only appears if the lecture actually marks slides.
  const hasSelfStudy = useMemo(() => slides.some((s) => s.selfStudy), [slides]);

  // Original 1-based position of every slide, kept so that filtered mode
  // still shows the numbers of the full deck.
  const numberById = useMemo(() => {
    const map = new Map();
    slides.forEach((slide, index) => map.set(slide.id, index + 1));
    return map;
  }, [slides]);

  const visibleSlides = useMemo(
    () => (selfStudyOnly ? slides.filter((s) => s.selfStudy) : slides),
    [slides, selfStudyOnly]
  );

  const goToSlide = useCallback(
    (index) => {
      if (index >= 0 && index < visibleSlides.length && !isAnimating) {
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 300);
      }
    },
    [isAnimating, visibleSlides.length]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Toggling the filter keeps the current slide if it survives the filter,
  // otherwise falls back to the first one.
  const toggleSelfStudyOnly = useCallback(() => {
    const currentId = visibleSlides[currentSlide]?.id;
    const next = !selfStudyOnly;
    const nextSlides = next ? slides.filter((s) => s.selfStudy) : slides;

    if (nextSlides.length === 0) return;

    const index = nextSlides.findIndex((s) => s.id === currentId);
    setSelfStudyOnly(next);
    setCurrentSlide(index >= 0 ? index : 0);
  }, [currentSlide, selfStudyOnly, slides, visibleSlides]);

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
        goToSlide(visibleSlides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, visibleSlides.length]);

  const activeSlide = visibleSlides[currentSlide] ?? visibleSlides[0];
  const CurrentSlideComponent = activeSlide.component;

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
            disabled={currentSlide === visibleSlides.length - 1}
            className="slide-nav__btn"
            title="Наступний (→)"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Center: Slide selector */}
        <div className="slide-nav__indicators">
          {visibleSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={[
                'slide-nav__indicator',
                currentSlide === index
                  ? 'slide-nav__indicator--active'
                  : 'slide-nav__indicator--inactive',
                slide.selfStudy ? 'slide-nav__indicator--self-study' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              title={
                slide.selfStudy
                  ? `${slide.title} — для самостійного опрацювання`
                  : slide.title
              }
            >
              {numberById.get(slide.id) ?? index + 1}
            </button>
          ))}
        </div>

        {/* Right: Filter and slide info */}
        <div className="slide-nav__meta">
          {hasSelfStudy && (
            <button
              onClick={toggleSelfStudyOnly}
              className="self-study-filter"
              aria-pressed={selfStudyOnly}
              title="Показати лише слайди для самостійного опрацювання"
            >
              <BookOpenCheck className="self-study-badge__icon" />
              <span>Самостійно</span>
            </button>
          )}

          <div className="slide-nav__counter">
            {currentSlide + 1} / {visibleSlides.length}
          </div>
        </div>
      </nav>

      {/* Slide Content */}
      <div className="slide-container">
        <div key={activeSlide.id} className="fade-in slide-host">
          {activeSlide.selfStudy && <SelfStudyBadge />}
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