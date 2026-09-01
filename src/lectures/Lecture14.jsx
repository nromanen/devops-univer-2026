import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Shield,
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
  { id: 1,  title: 'Титульний слайд',               component: TitleSlide },
  { id: 2,  title: 'Мета лекції',                   component: ObjectivesSlide },
  { id: 3,  title: 'Безпека як частина конвеєра',   component: SecurityInPipelineSlide },
  { id: 4,  title: 'Зсув вліво',                    component: ShiftLeftSlide },
  { id: 5,  title: 'Статичний аналіз коду',         component: SastSlide },
  { id: 6,  title: 'Пороги якості',                 component: QualityGatesSlide },
  { id: 7,  title: 'Аналіз складу залежностей',     component: ScaSlide },
  { id: 8,  title: 'Відомі вразливості',            component: CveSlide },
  { id: 9,  title: 'Сканування образів',            component: ImageScanningSlide },
  { id: 10, title: 'Мінімізація поверхні атаки',    component: AttackSurfaceSlide },
  { id: 11, title: 'Динамічне сканування',          component: DastSlide },
  { id: 12, title: 'Секрети: сховища',              component: SecretsStorageSlide },
  { id: 13, title: 'Ротація секретів',              component: RotationSlide },
  { id: 14, title: 'Витоки в історії репозиторію',  component: LeaksSlide },
  { id: 15, title: 'Ланцюг постачання',             component: SupplyChainSlide },
  { id: 16, title: 'Перелік складників',            component: SbomSlide },
  { id: 17, title: 'Підписи артефактів',            component: SigningSlide },
  { id: 18, title: 'Політики як код',               component: PolicyAsCodeSlide },
  { id: 19, title: 'Правові межі тестування',       component: LegalSlide },
  { id: 20, title: 'Типові помилки',                component: CommonMistakesSlide },
  { id: 21, title: 'Підсумки',                      component: SummarySlide },
  { id: 22, title: 'Питання?',                      component: QuestionsSlide },
];

export default function Lecture14() {
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
        <Shield />
      </div>
      <h1 className="title-slide__title">
        DevSecOps
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 14 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Security in the Pipeline
      </p>
      <div className="title-slide__badge">
        <p>🛡 Безпека як крок конвеєра, а не етап перед випуском</p>
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
function SecurityInPipelineSlide() { return <TodoSlide title="Безпека як частина конвеєра" />; }
function ShiftLeftSlide() { return <TodoSlide title="Зсув вліво" />; }
function SastSlide() { return <TodoSlide title="Статичний аналіз коду" />; }
function QualityGatesSlide() { return <TodoSlide title="Пороги якості" />; }
function ScaSlide() { return <TodoSlide title="Аналіз складу залежностей" />; }
function CveSlide() { return <TodoSlide title="Відомі вразливості" />; }
function ImageScanningSlide() { return <TodoSlide title="Сканування образів" />; }
function AttackSurfaceSlide() { return <TodoSlide title="Мінімізація поверхні атаки" />; }
function DastSlide() { return <TodoSlide title="Динамічне сканування" />; }
function SecretsStorageSlide() { return <TodoSlide title="Секрети: сховища" />; }
function RotationSlide() { return <TodoSlide title="Ротація секретів" />; }
function LeaksSlide() { return <TodoSlide title="Витоки в історії репозиторію" />; }
function SupplyChainSlide() { return <TodoSlide title="Ланцюг постачання" />; }
function SbomSlide() { return <TodoSlide title="Перелік складників" />; }
function SigningSlide() { return <TodoSlide title="Підписи артефактів" />; }
function PolicyAsCodeSlide() { return <TodoSlide title="Політики як код" />; }
function LegalSlide() { return <TodoSlide title="Правові межі тестування" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
