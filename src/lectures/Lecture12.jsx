import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Terminal,
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
  { id: 3,  title: 'Створення проти налаштування',           component: ProvisioningVsConfigSlide },
  { id: 4,  title: 'Робота без агента',                      component: AgentlessSlide },
  { id: 5,  title: 'Інвентар',                               component: InventorySlide },
  { id: 6,  title: 'Модулі',                                 component: ModulesSlide },
  { id: 7,  title: 'Playbook',                               component: PlaybookSlide },
  { id: 8,  title: 'Ідемпотентність',                        component: IdempotencySlide },
  { id: 9,  title: 'Змінні',                                 component: VariablesSlide },
  { id: 10, title: 'Шаблони',                                component: TemplatesSlide },
  { id: 11, title: 'Ролі',                                   component: RolesSlide },
  { id: 12, title: 'Обробники подій',                        component: HandlersSlide },
  { id: 13, title: 'Сховище секретів',                       component: VaultSlide },
  { id: 14, title: 'Зв\'язка інфраструктури й конфігурації', component: IacPlusConfigSlide },
  { id: 15, title: 'Коли конфігурація не потрібна',          component: ImmutableSlide },
  { id: 16, title: 'Типові помилки',                         component: CommonMistakesSlide },
  { id: 17, title: 'Підсумки',                               component: SummarySlide },
  { id: 18, title: 'Питання?',                               component: QuestionsSlide },
];

export default function Lecture12() {
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
        <Terminal />
      </div>
      <h1 className="title-slide__title">
        Управління конфігурацією
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 12 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Configuration Management
      </p>
      <div className="title-slide__badge">
        <p>🔧 Сервер у потрібному стані — щоразу однаково</p>
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
function ProvisioningVsConfigSlide() { return <TodoSlide title="Створення проти налаштування" />; }
function AgentlessSlide() { return <TodoSlide title="Робота без агента" />; }
function InventorySlide() { return <TodoSlide title="Інвентар" />; }
function ModulesSlide() { return <TodoSlide title="Модулі" />; }
function PlaybookSlide() { return <TodoSlide title="Playbook" />; }
function IdempotencySlide() { return <TodoSlide title="Ідемпотентність" />; }
function VariablesSlide() { return <TodoSlide title="Змінні" />; }
function TemplatesSlide() { return <TodoSlide title="Шаблони" />; }
function RolesSlide() { return <TodoSlide title="Ролі" />; }
function HandlersSlide() { return <TodoSlide title="Обробники подій" />; }
function VaultSlide() { return <TodoSlide title="Сховище секретів" />; }
function IacPlusConfigSlide() { return <TodoSlide title="Зв'язка інфраструктури й конфігурації" />; }
function ImmutableSlide() { return <TodoSlide title="Коли конфігурація не потрібна" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
