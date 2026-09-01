import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Cloud,
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
  { id: 1,  title: 'Титульний слайд',                           component: TitleSlide },
  { id: 2,  title: 'Мета лекції',                               component: ObjectivesSlide },
  { id: 3,  title: 'Чому ручне налаштування не відтворюється',  component: WhyIacSlide },
  { id: 4,  title: 'Декларативний підхід',                      component: DeclarativeSlide },
  { id: 5,  title: 'Terraform і OpenTofu',                      component: TerraformOpenTofuSlide },
  { id: 6,  title: 'Провайдери',                                component: ProvidersSlide },
  { id: 7,  title: 'Ресурси й джерела даних',                   component: ResourcesDataSlide },
  { id: 8,  title: 'Змінні й виводи',                           component: VariablesOutputsSlide },
  { id: 9,  title: 'Файл стану',                                component: StateSlide },
  { id: 10, title: 'Віддалене зберігання стану',                component: RemoteStateSlide },
  { id: 11, title: 'Блокування стану',                          component: StateLockingSlide },
  { id: 12, title: 'План і застосування',                       component: PlanApplySlide },
  { id: 13, title: 'Модулі',                                    component: ModulesSlide },
  { id: 14, title: 'Дрейф конфігурації',                        component: DriftSlide },
  { id: 15, title: 'Знищення ресурсів',                         component: DestroySlide },
  { id: 16, title: 'Перевірка плану в конвеєрі',                component: PlanInCiSlide },
  { id: 17, title: 'Секрети в описі інфраструктури',            component: SecretsSlide },
  { id: 18, title: 'Безкоштовні рівні та їх строки',            component: FreeTierSlide },
  { id: 19, title: 'Типові помилки',                            component: CommonMistakesSlide },
  { id: 20, title: 'Підсумки',                                  component: SummarySlide },
  { id: 21, title: 'Питання?',                                  component: QuestionsSlide },
];

export default function Lecture11() {
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
        <Cloud />
      </div>
      <h1 className="title-slide__title">
        Інфраструктура як код
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 11 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Infrastructure as Code
      </p>
      <div className="title-slide__badge">
        <p>📐 Інфраструктура, яка відтворюється з нуля</p>
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
function WhyIacSlide() { return <TodoSlide title="Чому ручне налаштування не відтворюється" />; }
function DeclarativeSlide() { return <TodoSlide title="Декларативний підхід" />; }
function TerraformOpenTofuSlide() { return <TodoSlide title="Terraform і OpenTofu" />; }
function ProvidersSlide() { return <TodoSlide title="Провайдери" />; }
function ResourcesDataSlide() { return <TodoSlide title="Ресурси й джерела даних" />; }
function VariablesOutputsSlide() { return <TodoSlide title="Змінні й виводи" />; }
function StateSlide() { return <TodoSlide title="Файл стану" />; }
function RemoteStateSlide() { return <TodoSlide title="Віддалене зберігання стану" />; }
function StateLockingSlide() { return <TodoSlide title="Блокування стану" />; }
function PlanApplySlide() { return <TodoSlide title="План і застосування" />; }
function ModulesSlide() { return <TodoSlide title="Модулі" />; }
function DriftSlide() { return <TodoSlide title="Дрейф конфігурації" />; }
function DestroySlide() { return <TodoSlide title="Знищення ресурсів" />; }
function PlanInCiSlide() { return <TodoSlide title="Перевірка плану в конвеєрі" />; }
function SecretsSlide() { return <TodoSlide title="Секрети в описі інфраструктури" />; }
function FreeTierSlide() { return <TodoSlide title="Безкоштовні рівні та їх строки" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
