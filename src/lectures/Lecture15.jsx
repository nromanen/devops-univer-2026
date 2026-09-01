import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Users,
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
  { id: 1,  title: 'Титульний слайд',                        component: TitleSlide },
  { id: 2,  title: 'Мета лекції',                            component: ObjectivesSlide },
  { id: 3,  title: 'DevOps як спосіб організації роботи',    component: CultureSlide },
  { id: 4,  title: 'Стіна між розробкою й експлуатацією',    component: WallOfConfusionSlide },
  { id: 5,  title: 'Спільна відповідальність за результат',  component: SharedResponsibilitySlide },
  { id: 6,  title: 'Метрики DORA',                           component: DoraSlide },
  { id: 7,  title: 'Частота розгортань',                     component: DeployFrequencySlide },
  { id: 8,  title: 'Час доставки змін',                      component: LeadTimeSlide },
  { id: 9,  title: 'Час відновлення',                        component: MttrSlide },
  { id: 10, title: 'Частка невдалих змін',                   component: ChangeFailureSlide },
  { id: 11, title: 'Рівні обслуговування',                   component: SloSlide },
  { id: 12, title: 'Бюджет помилок',                         component: ErrorBudgetSlide },
  { id: 13, title: 'Чергування',                             component: OnCallSlide },
  { id: 14, title: 'Розбір інцидентів без пошуку винних',    component: BlamelessSlide },
  { id: 15, title: 'Платформна інженерія',                   component: PlatformEngineeringSlide },
  { id: 16, title: 'Вартість володіння',                     component: FinOpsSlide },
  { id: 17, title: 'Огляд курсу',                            component: CourseRecapSlide },
  { id: 18, title: 'Підготовка до захисту',                  component: FinalProjectSlide },
  { id: 19, title: 'Куди рухатися далі',                     component: NextStepsSlide },
  { id: 20, title: 'Типові помилки',                         component: CommonMistakesSlide },
  { id: 21, title: 'Підсумки',                               component: SummarySlide },
  { id: 22, title: 'Питання?',                               component: QuestionsSlide },
];

export default function Lecture15() {
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
        <Users />
      </div>
      <h1 className="title-slide__title">
        Культура DevOps і підсумки курсу
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 15 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        DevOps Culture and Course Wrap-up
      </p>
      <div className="title-slide__badge">
        <p>🤝 Інструменти закінчуються там, де починаються люди</p>
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
function CultureSlide() { return <TodoSlide title="DevOps як спосіб організації роботи" />; }
function WallOfConfusionSlide() { return <TodoSlide title="Стіна між розробкою й експлуатацією" />; }
function SharedResponsibilitySlide() { return <TodoSlide title="Спільна відповідальність за результат" />; }
function DoraSlide() { return <TodoSlide title="Метрики DORA" />; }
function DeployFrequencySlide() { return <TodoSlide title="Частота розгортань" />; }
function LeadTimeSlide() { return <TodoSlide title="Час доставки змін" />; }
function MttrSlide() { return <TodoSlide title="Час відновлення" />; }
function ChangeFailureSlide() { return <TodoSlide title="Частка невдалих змін" />; }
function SloSlide() { return <TodoSlide title="Рівні обслуговування" />; }
function ErrorBudgetSlide() { return <TodoSlide title="Бюджет помилок" />; }
function OnCallSlide() { return <TodoSlide title="Чергування" />; }
function BlamelessSlide() { return <TodoSlide title="Розбір інцидентів без пошуку винних" />; }
function PlatformEngineeringSlide() { return <TodoSlide title="Платформна інженерія" />; }
function FinOpsSlide() { return <TodoSlide title="Вартість володіння" />; }
function CourseRecapSlide() { return <TodoSlide title="Огляд курсу" />; }
function FinalProjectSlide() { return <TodoSlide title="Підготовка до захисту" />; }
function NextStepsSlide() { return <TodoSlide title="Куди рухатися далі" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
