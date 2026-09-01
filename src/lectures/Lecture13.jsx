import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Activity,
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
  { id: 3,  title: 'Моніторинг проти спостережуваності',  component: MonitoringVsObservabilitySlide },
  { id: 4,  title: 'Три джерела даних',                   component: ThreePillarsSlide },
  { id: 5,  title: 'Типи метрик',                         component: MetricTypesSlide },
  { id: 6,  title: 'Чому середнє обманює',                component: AveragesLieSlide },
  { id: 7,  title: 'Перцентилі',                          component: PercentilesSlide },
  { id: 8,  title: 'Модель даних Prometheus',             component: DataModelSlide },
  { id: 9,  title: 'Збір метрик',                         component: ScrapingSlide },
  { id: 10, title: 'Автоматичне виявлення цілей',         component: ServiceDiscoverySlide },
  { id: 11, title: 'Мова запитів',                        component: PromqlSlide },
  { id: 12, title: 'Інструментування застосунку',         component: InstrumentationSlide },
  { id: 13, title: 'Золоті сигнали',                      component: GoldenSignalsSlide },
  { id: 14, title: 'Дашборд, що читається за 5 секунд',   component: DashboardSlide },
  { id: 15, title: 'Алерти: симптоми проти причин',       component: SymptomsVsCausesSlide },
  { id: 16, title: 'Пороги й тривалість',                 component: ThresholdsSlide },
  { id: 17, title: 'Втома від сповіщень',                 component: AlertFatigueSlide },
  { id: 18, title: 'Інструкція реагування',               component: RunbookSlide },
  { id: 19, title: 'Централізовані журнали',              component: LogsSlide },
  { id: 20, title: 'Трасування',                          component: TracingSlide },
  { id: 21, title: 'Типові помилки',                      component: CommonMistakesSlide },
  { id: 22, title: 'Підсумки',                            component: SummarySlide },
  { id: 23, title: 'Питання?',                            component: QuestionsSlide },
];

export default function Lecture13() {
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
        <Activity />
      </div>
      <h1 className="title-slide__title">
        Моніторинг і спостережуваність
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 13 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Monitoring and Observability
      </p>
      <div className="title-slide__badge">
        <p>📊 Побачити збій раніше за користувача</p>
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
function MonitoringVsObservabilitySlide() { return <TodoSlide title="Моніторинг проти спостережуваності" />; }
function ThreePillarsSlide() { return <TodoSlide title="Три джерела даних" />; }
function MetricTypesSlide() { return <TodoSlide title="Типи метрик" />; }
function AveragesLieSlide() { return <TodoSlide title="Чому середнє обманює" />; }
function PercentilesSlide() { return <TodoSlide title="Перцентилі" />; }
function DataModelSlide() { return <TodoSlide title="Модель даних Prometheus" />; }
function ScrapingSlide() { return <TodoSlide title="Збір метрик" />; }
function ServiceDiscoverySlide() { return <TodoSlide title="Автоматичне виявлення цілей" />; }
function PromqlSlide() { return <TodoSlide title="Мова запитів" />; }
function InstrumentationSlide() { return <TodoSlide title="Інструментування застосунку" />; }
function GoldenSignalsSlide() { return <TodoSlide title="Золоті сигнали" />; }
function DashboardSlide() { return <TodoSlide title="Дашборд, що читається за 5 секунд" />; }
function SymptomsVsCausesSlide() { return <TodoSlide title="Алерти: симптоми проти причин" />; }
function ThresholdsSlide() { return <TodoSlide title="Пороги й тривалість" />; }
function AlertFatigueSlide() { return <TodoSlide title="Втома від сповіщень" />; }
function RunbookSlide() { return <TodoSlide title="Інструкція реагування" />; }
function LogsSlide() { return <TodoSlide title="Централізовані журнали" />; }
function TracingSlide() { return <TodoSlide title="Трасування" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
