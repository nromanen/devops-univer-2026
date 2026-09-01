import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Database,
  Target,
  AlertTriangle,
  BookOpen,
  HelpCircle,
  Construction,
} from 'lucide-react';

// ============================================
// SLIDES ARRAY
// ============================================

const slides = [
  { id: 1,  title: 'Титульний слайд',                     component: TitleSlide },
  { id: 2,  title: 'Мета лекції',                         component: ObjectivesSlide },
  { id: 3,  title: 'Чому стан найскладніший',             component: WhyStateIsHardSlide },
  { id: 4,  title: 'Межа відповідальності',               component: ResponsibilitySlide },
  { id: 5,  title: 'Міграції: що це і хто їх пише',       component: MigrationsBasicsSlide },
  { id: 6,  title: 'Міграція в конвеєрі',                 component: MigrationsInPipelineSlide },
  { id: 7,  title: 'Зворотна сумісність схеми',           component: BackwardCompatibleSlide },
  { id: 8,  title: 'Зміна схеми без простою',             component: ExpandContractSlide },
  { id: 9,  title: 'Відкат застосунку зі старою схемою',  component: RollbackWithSchemaSlide },
  { id: 10, title: 'Пул з\'єднань',                       component: ConnectionPoolSlide },
  { id: 11, title: 'Репліки × пул = вичерпана база',      component: PoolMultiplicationSlide },
  { id: 12, title: 'Резервне копіювання',                 component: BackupSlide },
  { id: 13, title: 'Перевірка відновлення',               component: RestoreTestSlide },
  { id: 14, title: 'RPO і RTO',                           component: RpoRtoSlide },
  { id: 15, title: 'Кеш як інфраструктурний компонент',   component: CacheComponentSlide },
  { id: 16, title: 'Політика витіснення',                 component: EvictionSlide },
  { id: 17, title: 'Частка влучань як індикатор',         component: HitRateSlide },
  { id: 18, title: 'Коли кеш недоступний',                component: CacheDownSlide },
  { id: 19, title: 'Керовані бази даних',                 component: ManagedDbSlide },
  { id: 20, title: 'Типові помилки',                      component: CommonMistakesSlide },
  { id: 21, title: 'Підсумки',                            component: SummarySlide },
  { id: 22, title: 'Питання?',                            component: QuestionsSlide },
];

export default function Lecture8() {
  return <LectureLayout slides={slides} />;
}

// ============================================
// SLIDE COMPONENTS
// ============================================

// ---------- 1. TITLE ----------

function TitleSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
      <div className="title-slide__icon-wrapper">
        <Database />
      </div>
      <h1 className="title-slide__title">
        Дані та стан в експлуатації
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 8 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Data and State in Operations
      </p>
      <div className="title-slide__badge">
        <p>🗄 Найскладніша частина будь-якої системи</p>
      </div>
    </div>
  );
}

// ============================================
// STUBS — replaced block by block
// ============================================

function TodoSlide({ title }) {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Construction} title={title} subtitle="Слайд у розробці" />
        <div className="outlined-card outlined-card--orange fade-in-delay-1">
          <p className="fs-lg text-secondary" style={{ margin: 0 }}>
            Вміст цього слайда ще не написано.
          </p>
        </div>
      </div>
    </div>
  );
}

function ObjectivesSlide() { return <TodoSlide title="Мета лекції" />; }
function WhyStateIsHardSlide() { return <TodoSlide title="Чому стан найскладніший" />; }
function ResponsibilitySlide() { return <TodoSlide title="Межа відповідальності" />; }
function MigrationsBasicsSlide() { return <TodoSlide title="Міграції: що це і хто їх пише" />; }
function MigrationsInPipelineSlide() { return <TodoSlide title="Міграція в конвеєрі" />; }
function BackwardCompatibleSlide() { return <TodoSlide title="Зворотна сумісність схеми" />; }
function ExpandContractSlide() { return <TodoSlide title="Зміна схеми без простою" />; }
function RollbackWithSchemaSlide() { return <TodoSlide title="Відкат застосунку зі старою схемою" />; }
function ConnectionPoolSlide() { return <TodoSlide title="Пул з'єднань" />; }
function PoolMultiplicationSlide() { return <TodoSlide title="Репліки × пул = вичерпана база" />; }
function BackupSlide() { return <TodoSlide title="Резервне копіювання" />; }
function RestoreTestSlide() { return <TodoSlide title="Перевірка відновлення" />; }
function RpoRtoSlide() { return <TodoSlide title="RPO і RTO" />; }
function CacheComponentSlide() { return <TodoSlide title="Кеш як інфраструктурний компонент" />; }
function EvictionSlide() { return <TodoSlide title="Політика витіснення" />; }
function HitRateSlide() { return <TodoSlide title="Частка влучань як індикатор" />; }
function CacheDownSlide() { return <TodoSlide title="Коли кеш недоступний" />; }
function ManagedDbSlide() { return <TodoSlide title="Керовані бази даних" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
