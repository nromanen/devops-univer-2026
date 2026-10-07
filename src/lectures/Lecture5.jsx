import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Package,
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
  { id: 1,  title: 'Титульний слайд',                      component: TitleSlide },
  { id: 2,  title: 'Мета лекції',                          component: ObjectivesSlide },
  { id: 3,  title: 'Проблема «на моїй машині працює»',     component: WorksOnMyMachineSlide },
  { id: 4,  title: 'Віртуалізація проти контейнеризації',  component: VmVsContainerSlide },
  { id: 5,  title: 'На чому тримаються контейнери',        component: NamespacesCgroupsSlide },
  { id: 6,  title: 'Образ, шар, контейнер',                component: ImageLayerContainerSlide },
  { id: 7,  title: 'Реєстр і теги',                        component: RegistryTagsSlide },
  { id: 8,  title: 'Чому latest небезпечний',              component: LatestTagSlide },
  { id: 9,  title: 'Dockerfile: основні інструкції',       component: DockerfileBasicsSlide },
  { id: 10, title: 'Порядок інструкцій і кеш збірки',      component: BuildCacheSlide },
  { id: 11, title: 'Контекст збірки і .dockerignore',      component: BuildContextSlide },
  { id: 12, title: 'Багатоетапна збірка',                  component: MultiStageSlide },
  { id: 13, title: 'Вибір базового образу',                component: BaseImageSlide },
  { id: 14, title: 'Непривілейований користувач',          component: NonRootSlide },
  { id: 15, title: 'Перевірка стану контейнера',           component: HealthcheckSlide },
  { id: 16, title: 'Конфігурація через середовище',        component: ConfigEnvSlide },
  { id: 17, title: 'Дані: том проти шару',                 component: VolumesSlide },
  { id: 18, title: 'Один процес на контейнер',             component: SingleProcessSlide },
  { id: 19, title: 'Журнали у стандартний вивід',          component: LoggingSlide },
  { id: 20, title: 'Сигнали й коректна зупинка',           component: SignalsSlide },
  { id: 21, title: 'Розмір образу: що дає найбільше',      component: ImageSizeSlide },
  { id: 22, title: 'Сканування образу',                    component: ScanningSlide },
  { id: 23, title: 'Типові помилки',                       component: CommonMistakesSlide },
  { id: 24, title: 'Підсумки',                             component: SummarySlide },
  { id: 25, title: 'Питання?',                             component: QuestionsSlide },
];

export default function Lecture5() {
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
        <Package />
      </div>
      <h1 className="title-slide__title">
        Контейнери й образи
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 5 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Containers and Images
      </p>
      <div className="title-slide__badge">
        <p>📦 Один артефакт, однакова поведінка скрізь</p>
      </div>
    </div>
  );
}

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
function WorksOnMyMachineSlide() { return <TodoSlide title="Проблема «на моїй машині працює»" />; }
function VmVsContainerSlide() { return <TodoSlide title="Віртуалізація проти контейнеризації" />; }
function NamespacesCgroupsSlide() { return <TodoSlide title="На чому тримаються контейнери" />; }
function ImageLayerContainerSlide() { return <TodoSlide title="Образ, шар, контейнер" />; }
function RegistryTagsSlide() { return <TodoSlide title="Реєстр і теги" />; }
function LatestTagSlide() { return <TodoSlide title="Чому latest небезпечний" />; }
function DockerfileBasicsSlide() { return <TodoSlide title="Dockerfile: основні інструкції" />; }
function BuildCacheSlide() { return <TodoSlide title="Порядок інструкцій і кеш збірки" />; }
function BuildContextSlide() { return <TodoSlide title="Контекст збірки і .dockerignore" />; }
function MultiStageSlide() { return <TodoSlide title="Багатоетапна збірка" />; }
function BaseImageSlide() { return <TodoSlide title="Вибір базового образу" />; }
function NonRootSlide() { return <TodoSlide title="Непривілейований користувач" />; }
function HealthcheckSlide() { return <TodoSlide title="Перевірка стану контейнера" />; }
function ConfigEnvSlide() { return <TodoSlide title="Конфігурація через середовище" />; }
function VolumesSlide() { return <TodoSlide title="Дані: том проти шару" />; }
function SingleProcessSlide() { return <TodoSlide title="Один процес на контейнер" />; }
function LoggingSlide() { return <TodoSlide title="Журнали у стандартний вивід" />; }
function SignalsSlide() { return <TodoSlide title="Сигнали й коректна зупинка" />; }
function ImageSizeSlide() { return <TodoSlide title="Розмір образу: що дає найбільше" />; }
function ScanningSlide() { return <TodoSlide title="Сканування образу" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
