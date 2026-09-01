import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Settings,
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
  { id: 1,  title: 'Титульний слайд',                  component: TitleSlide },
  { id: 2,  title: 'Мета лекції',                      component: ObjectivesSlide },
  { id: 3,  title: 'Життєвий цикл поду',               component: PodLifecycleSlide },
  { id: 4,  title: 'Проба готовності',                 component: ReadinessSlide },
  { id: 5,  title: 'Проба живучості',                  component: LivenessSlide },
  { id: 6,  title: 'Проба запуску',                    component: StartupProbeSlide },
  { id: 7,  title: 'Помилки в налаштуванні проб',      component: ProbeMistakesSlide },
  { id: 8,  title: 'Запити й ліміти ресурсів',         component: ResourcesSlide },
  { id: 9,  title: 'Класи якості обслуговування',      component: QosSlide },
  { id: 10, title: 'Витіснення й вичерпання пам\'яті', component: EvictionOomSlide },
  { id: 11, title: 'Почергове оновлення',              component: RollingUpdateSlide },
  { id: 12, title: 'Контроль недоступності',           component: MaxUnavailableSlide },
  { id: 13, title: 'Відкат',                           component: RollbackSlide },
  { id: 14, title: 'Масштабування вручну',             component: ScalingSlide },
  { id: 15, title: 'Автомасштабування',                component: AutoscalingSlide },
  { id: 16, title: 'Діагностика: под не стартує',      component: TroubleshootPodSlide },
  { id: 17, title: 'Читання подій кластера',           component: EventsSlide },
  { id: 18, title: 'Helm: навіщо потрібен',            component: WhyHelmSlide },
  { id: 19, title: 'Чарт і значення',                  component: ChartValuesSlide },
  { id: 20, title: 'Середовища через values',          component: EnvValuesSlide },
  { id: 21, title: 'GitOps оглядово',                  component: GitOpsSlide },
  { id: 22, title: 'Типові помилки',                   component: CommonMistakesSlide },
  { id: 23, title: 'Підсумки',                         component: SummarySlide },
  { id: 24, title: 'Питання?',                         component: QuestionsSlide },
];

export default function Lecture10() {
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
        <Settings />
      </div>
      <h1 className="title-slide__title">
        Kubernetes: експлуатація
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 10 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Running Workloads in Kubernetes
      </p>
      <div className="title-slide__badge">
        <p>⚙️ Проби, ресурси, оновлення, відкат</p>
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
function PodLifecycleSlide() { return <TodoSlide title="Життєвий цикл поду" />; }
function ReadinessSlide() { return <TodoSlide title="Проба готовності" />; }
function LivenessSlide() { return <TodoSlide title="Проба живучості" />; }
function StartupProbeSlide() { return <TodoSlide title="Проба запуску" />; }
function ProbeMistakesSlide() { return <TodoSlide title="Помилки в налаштуванні проб" />; }
function ResourcesSlide() { return <TodoSlide title="Запити й ліміти ресурсів" />; }
function QosSlide() { return <TodoSlide title="Класи якості обслуговування" />; }
function EvictionOomSlide() { return <TodoSlide title="Витіснення й вичерпання пам'яті" />; }
function RollingUpdateSlide() { return <TodoSlide title="Почергове оновлення" />; }
function MaxUnavailableSlide() { return <TodoSlide title="Контроль недоступності" />; }
function RollbackSlide() { return <TodoSlide title="Відкат" />; }
function ScalingSlide() { return <TodoSlide title="Масштабування вручну" />; }
function AutoscalingSlide() { return <TodoSlide title="Автомасштабування" />; }
function TroubleshootPodSlide() { return <TodoSlide title="Діагностика: под не стартує" />; }
function EventsSlide() { return <TodoSlide title="Читання подій кластера" />; }
function WhyHelmSlide() { return <TodoSlide title="Helm: навіщо потрібен" />; }
function ChartValuesSlide() { return <TodoSlide title="Чарт і значення" />; }
function EnvValuesSlide() { return <TodoSlide title="Середовища через values" />; }
function GitOpsSlide() { return <TodoSlide title="GitOps оглядово" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
