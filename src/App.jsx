import React, { useState, useEffect, useCallback } from 'react';
import {
  Terminal,
  Code,
  Network,
  Database,
  GitBranch,
  Package,
  Boxes,
  Ship,
  Server,
  Settings,
  Cloud,
  Activity,
  Shield,
  Users,
  Rocket,
  Sun,
  Moon,
  Minus,
  Plus,
} from 'lucide-react';
import PdfLecture from './components/PdfLecture.jsx';
import HomePage from './components/HomePage.jsx';
import Lecture3 from './lectures/Lecture3.jsx';
import Lecture4 from './lectures/Lecture4.jsx';
import Lecture5 from './lectures/Lecture5.jsx';
import Lecture6 from './lectures/Lecture6.jsx';
import Lecture7 from './lectures/Lecture7.jsx';
import Lecture8 from './lectures/Lecture8.jsx';
import Lecture9 from './lectures/Lecture9.jsx';
import Lecture10 from './lectures/Lecture10.jsx';
import Lecture11 from './lectures/Lecture11.jsx';
import Lecture12 from './lectures/Lecture12.jsx';
import Lecture13 from './lectures/Lecture13.jsx';
import Lecture14 from './lectures/Lecture14.jsx';
import Lecture15 from './lectures/Lecture15.jsx';
import './styles/index.scss';

const lectures = [
  { id: '1',  title: 'Вступ у DevOps. Unix/Linux',                 icon: Terminal,  pdf: '/lectures/pdf/devops_lec1.pdf' },
  { id: '2',  title: 'Автоматизація рутинних задач',               icon: Code,      pdf: '/lectures/pdf/devops_lec2.pdf' },
  { id: '3',  title: 'Мережа очима DevOps',                        icon: Network,   component: Lecture3 },
  { id: '4',  title: 'Безперервна інтеграція',                     icon: GitBranch, component: Lecture4 },
  { id: '5',  title: 'Контейнери й образи',                        icon: Package,   component: Lecture5 },
  { id: '6',  title: 'Багатоконтейнерні середовища й реєстри',     icon: Boxes,     component: Lecture6 },
  { id: '7',  title: 'Безперервна доставка й керовані платформи',  icon: Ship,      component: Lecture7 },
  { id: '8',  title: 'Дані та стан в експлуатації',                icon: Database,  component: Lecture8 },
  { id: '9',  title: 'Kubernetes: архітектура й основні об’єкти',  icon: Server,    component: Lecture9 },
  { id: '10', title: 'Kubernetes: експлуатація',                   icon: Settings,  component: Lecture10 },
  { id: '11', title: 'Інфраструктура як код',                      icon: Cloud,     component: Lecture11 },
  { id: '12', title: 'Управління конфігурацією',                   icon: Terminal,  component: Lecture12 },
  { id: '13', title: 'Моніторинг і спостережуваність',             icon: Activity,  component: Lecture13 },
  { id: '14', title: 'DevSecOps',                                  icon: Shield,    component: Lecture14 },
  { id: '15', title: 'Культура DevOps і підсумки курсу',           icon: Users,     component: Lecture15 },
];

const totalNumberedLectures = lectures.filter(l => !l.selfStudy).length;

function isLectureReady(lecture) {
  return lecture.pdf != null || lecture.component != null;
}

function readHash() {
  return window.location.hash.replace('#/', '').replace('#', '');
}

function getIndexFromHash() {
  const hash = readHash();
  if (!hash) return 0;
  const index = lectures.findIndex(l => l.id === hash);
  return index >= 0 ? index : 0;
}

function setHash(id) {
  window.location.hash = `#/${id}`;
}

function clearHash() {
  // Removes the hash without reloading and without leaving '#' in the URL
  window.history.pushState('', document.title, window.location.pathname + window.location.search);
}

// ===== Theme helpers =====

function getInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// ===== Font size helpers =====

const FONT_SIZES = [14, 15, 16, 17, 18, 20];
const DEFAULT_FONT_SIZE = 16;

function getInitialFontSize() {
  const stored = parseInt(localStorage.getItem('fontSize'), 10);
  return FONT_SIZES.includes(stored) ? stored : DEFAULT_FONT_SIZE;
}

function applyFontSize(size) {
  document.documentElement.style.setProperty('--base-font-size', `${size}px`);
  localStorage.setItem('fontSize', size);
}

function App() {
  const initialHash = readHash();

  const [currentLecture, setCurrentLecture] = useState(getIndexFromHash);
  const [showHome, setShowHome] = useState(!initialHash);
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [fontSize, setFontSize] = useState(getInitialFontSize);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    applyFontSize(fontSize);
  }, [fontSize]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const increaseFontSize = useCallback(() => {
    setFontSize(prev => {
      const idx = FONT_SIZES.indexOf(prev);
      return idx < FONT_SIZES.length - 1 ? FONT_SIZES[idx + 1] : prev;
    });
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize(prev => {
      const idx = FONT_SIZES.indexOf(prev);
      return idx > 0 ? FONT_SIZES[idx - 1] : prev;
    });
  }, []);

  // Sync state -> URL
  const selectLecture = useCallback((index) => {
    setShowHome(false);
    setCurrentLecture(index);
    setHash(lectures[index].id);
  }, []);

  // Called from the home page cards
  const openLectureById = useCallback((id) => {
    const index = lectures.findIndex(l => l.id === id);
    if (index >= 0) selectLecture(index);
  }, [selectLecture]);

  const goHome = useCallback(() => {
    setShowHome(true);
    setShowMenu(false);
    clearHash();
  }, []);

  // Sync URL -> state (browser back/forward)
  useEffect(() => {
    const onHashChange = () => {
      const hash = readHash();
      if (!hash) {
        setShowHome(true);
        return;
      }
      setShowHome(false);
      setCurrentLecture(getIndexFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('popstate', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('popstate', onHashChange);
    };
  }, []);

  const current = lectures[currentLecture];
  const CurrentLectureComponent = current?.component;

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header__container">
          <button
            type="button"
            className="header__brand header__brand--button"
            onClick={goHome}
            title="На головну"
          >
            <div className="header__logo">
              <Terminal />
            </div>
            <div>
              <h1 className="header__title">Основи DevOps</h1>
              <p className="header__subtitle">DevOps Fundamentals</p>
            </div>
          </button>

          <div className="header__controls">
            <div className="font-size-controls">
              <button
                onClick={decreaseFontSize}
                disabled={fontSize === FONT_SIZES[0]}
                className="font-size-controls__btn"
                title="Зменшити шрифт"
              >
                <Minus />
              </button>
              <button
                onClick={increaseFontSize}
                disabled={fontSize === FONT_SIZES[FONT_SIZES.length - 1]}
                className="font-size-controls__btn"
                title="Збільшити шрифт"
              >
                <Plus />
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="theme-toggle"
              title={theme === 'dark' ? 'Світла тема' : 'Темна тема'}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>

            {!showHome && (
              <button
                onClick={() => setShowMenu(!showMenu)}
                className={`header__toggle ${showMenu ? 'header__toggle--active' : 'header__toggle--inactive'}`}
              >
                {showMenu ? 'Сховати меню' : 'Показати меню'}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Lecture Navigation Menu — hidden on the home page */}
      {!showHome && showMenu && (
        <nav className="lecture-nav">
          <div className="lecture-nav__container">
            {lectures.map((lecture, index) => {
              const Icon = lecture.icon;
              const isActive = currentLecture === index;
              const isAvailable = isLectureReady(lecture);
              const isSelfStudy = lecture.selfStudy;

              let itemClass = 'lecture-nav__item';
              if (isActive) {
                itemClass += ' lecture-nav__item--active';
              } else if (isAvailable) {
                itemClass += ' lecture-nav__item--available';
              } else {
                itemClass += ' lecture-nav__item--unavailable';
              }
              if (isSelfStudy) {
                itemClass += ' lecture-nav__item--self-study';
              }

              return (
                <button
                  key={lecture.id}
                  onClick={() => isAvailable && selectLecture(index)}
                  disabled={!isAvailable}
                  className={itemClass}
                  title={`${isSelfStudy ? '⭐ ' : ''}${lecture.title}${isSelfStudy ? ' (самостійне вивчення)' : ''}`}
                >
                  <Icon />
                  <span>{lecture.id}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* Current Lecture Info — hidden on the home page */}
      {!showHome && (
        <div className="lecture-info">
          <div className="lecture-info__container">
            <div className="lecture-info__icon">
              {(() => {
                const Icon = current.icon;
                return <Icon />;
              })()}
            </div>
            <div>
              <p className="lecture-info__meta">
                {current.selfStudy
                  ? `Лекція ${current.id.split('-')[0]}* — самостійне вивчення`
                  : `Лекція ${current.id} з ${totalNumberedLectures}`
                }
              </p>
              <h2 className="lecture-info__title">
                {current.selfStudy && <span className="lecture-info__badge">★</span>}
                {current.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        {showHome ? (
          <HomePage onOpenLecture={openLectureById} />
        ) : current.pdf ? (
          <PdfLecture key={current.id} file={current.pdf} title={current.title} />
        ) : CurrentLectureComponent ? (
          <CurrentLectureComponent />
        ) : (
          <div className="empty-state">
            <div className="empty-state__card">
              <Rocket className="empty-state__icon" />
              <h3 className="empty-state__title">Лекція в розробці</h3>
              <p className="empty-state__text">
                Матеріали цієї лекції ще готуються. Оберіть у меню лекцію, позначену як доступна.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer__text">Курс «Основи DevOps» • 2026/2027</p>
      </footer>
    </div>
  );
}

export default App;