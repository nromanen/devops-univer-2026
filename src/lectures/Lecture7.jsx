import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Ship,
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
  { id: 1,  title: 'Титульний слайд',                    component: TitleSlide },
  { id: 2,  title: 'Мета лекції',                        component: ObjectivesSlide },
  { id: 3,  title: 'Delivery проти Deployment',          component: DeliveryVsDeploymentSlide },
  { id: 4,  title: 'Середовища: dev, staging, prod',     component: EnvironmentsSlide },
  { id: 5,  title: 'Один артефакт, різна конфігурація',  component: OneArtifactSlide },
  { id: 6,  title: 'Конфігурація через середовище',      component: ConfigSlide },
  { id: 7,  title: 'Дванадцять факторів',                component: TwelveFactorSlide },
  { id: 8,  title: 'Почергове оновлення',                component: RollingSlide },
  { id: 9,  title: 'Синьо-зелене розгортання',           component: BlueGreenSlide },
  { id: 10, title: 'Канаркове розгортання',              component: CanarySlide },
  { id: 11, title: 'Ознаки функціональності',            component: FeatureFlagsSlide },
  { id: 12, title: 'Відкат як частина розгортання',      component: RollbackSlide },
  { id: 13, title: 'Ручне підтвердження',                component: ManualApprovalSlide },
  { id: 14, title: 'PaaS: що платформа бере на себе',    component: PaasSlide },
  { id: 15, title: 'Обмеження безкоштовних рівнів',      component: FreeTierLimitsSlide },
  { id: 16, title: 'Холодний старт',                     component: ColdStartSlide },
  { id: 17, title: 'Перевірки стану при розгортанні',    component: HealthChecksSlide },
  { id: 18, title: 'Розгортання без простою',            component: ZeroDowntimeSlide },
  { id: 19, title: 'Метрики розгортання',                component: DeploymentMetricsSlide },
  { id: 20, title: 'Типові помилки',                     component: CommonMistakesSlide },
  { id: 21, title: 'Підсумки',                           component: SummarySlide },
  { id: 22, title: 'Питання?',                           component: QuestionsSlide },
];

export default function Lecture7() {
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
        <Ship />
      </div>
      <h1 className="title-slide__title">
        Безперервна доставка й керовані платформи
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 7 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Continuous Delivery and PaaS
      </p>
      <div className="title-slide__badge">
        <p>🚀 Від зібраного артефакта до живого сервісу</p>
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
function DeliveryVsDeploymentSlide() { return <TodoSlide title="Delivery проти Deployment" />; }
function EnvironmentsSlide() { return <TodoSlide title="Середовища: dev, staging, prod" />; }
function OneArtifactSlide() { return <TodoSlide title="Один артефакт, різна конфігурація" />; }
function ConfigSlide() { return <TodoSlide title="Конфігурація через середовище" />; }
function TwelveFactorSlide() { return <TodoSlide title="Дванадцять факторів" />; }
function RollingSlide() { return <TodoSlide title="Почергове оновлення" />; }
function BlueGreenSlide() { return <TodoSlide title="Синьо-зелене розгортання" />; }
function CanarySlide() { return <TodoSlide title="Канаркове розгортання" />; }
function FeatureFlagsSlide() { return <TodoSlide title="Ознаки функціональності" />; }
function RollbackSlide() { return <TodoSlide title="Відкат як частина розгортання" />; }
function ManualApprovalSlide() { return <TodoSlide title="Ручне підтвердження" />; }
function PaasSlide() { return <TodoSlide title="PaaS: що платформа бере на себе" />; }
function FreeTierLimitsSlide() { return <TodoSlide title="Обмеження безкоштовних рівнів" />; }
function ColdStartSlide() { return <TodoSlide title="Холодний старт" />; }
function HealthChecksSlide() { return <TodoSlide title="Перевірки стану при розгортанні" />; }
function ZeroDowntimeSlide() { return <TodoSlide title="Розгортання без простою" />; }
function DeploymentMetricsSlide() { return <TodoSlide title="Метрики розгортання" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
