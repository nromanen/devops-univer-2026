import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Boxes,
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
  { id: 3,  title: 'Коли одного контейнера мало',        component: WhyComposeSlide },
  { id: 4,  title: 'Compose: сервіси, мережі, томи',     component: ComposeBasicsSlide },
  { id: 5,  title: 'Звернення за іменем сервісу',        component: ServiceDiscoverySlide },
  { id: 6,  title: 'localhost проти 0.0.0.0',            component: LocalhostVsAnySlide },
  { id: 7,  title: 'Проброс портів',                     component: PortMappingSlide },
  { id: 8,  title: 'Сервіс піднявся, але недоступний',   component: NotReachableSlide },
  { id: 9,  title: 'Залежності: started проти healthy',  component: DependsOnSlide },
  { id: 10, title: 'Змінні середовища і файли',          component: EnvFilesSlide },
  { id: 11, title: 'Томи: іменовані й анонімні',         component: VolumeTypesSlide },
  { id: 12, title: 'Монтування коду в розробці',         component: BindMountDevSlide },
  { id: 13, title: 'Кілька середовищ з одного опису',    component: ProfilesSlide },
  { id: 14, title: 'Реєстри образів',                    component: RegistriesSlide },
  { id: 15, title: 'Схема тегування',                    component: TaggingSlide },
  { id: 16, title: 'Публікація з конвеєра',              component: PublishFromCiSlide },
  { id: 17, title: 'Приватні реєстри й доступ',          component: PrivateRegistrySlide },
  { id: 18, title: 'Обмеження безкоштовних реєстрів',    component: RegistryLimitsSlide },
  { id: 19, title: 'Очищення: образи, томи, кеш',        component: PruneSlide },
  { id: 20, title: 'Чому Compose не для продакшену',     component: ComposeLimitsSlide },
  { id: 21, title: 'Типові помилки',                     component: CommonMistakesSlide },
  { id: 22, title: 'Підсумки',                           component: SummarySlide },
  { id: 23, title: 'Питання?',                           component: QuestionsSlide },
];

export default function Lecture6() {
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
        <Boxes />
      </div>
      <h1 className="title-slide__title">
        Багатоконтейнерні середовища й реєстри
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 6 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Compose and Registries
      </p>
      <div className="title-slide__badge">
        <p>🧩 Коли сервісів більше, ніж один</p>
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
function WhyComposeSlide() { return <TodoSlide title="Коли одного контейнера мало" />; }
function ComposeBasicsSlide() { return <TodoSlide title="Compose: сервіси, мережі, томи" />; }
function ServiceDiscoverySlide() { return <TodoSlide title="Звернення за іменем сервісу" />; }
function LocalhostVsAnySlide() { return <TodoSlide title="localhost проти 0.0.0.0" />; }
function PortMappingSlide() { return <TodoSlide title="Проброс портів" />; }
function NotReachableSlide() { return <TodoSlide title="Сервіс піднявся, але недоступний" />; }
function DependsOnSlide() { return <TodoSlide title="Залежності: started проти healthy" />; }
function EnvFilesSlide() { return <TodoSlide title="Змінні середовища і файли" />; }
function VolumeTypesSlide() { return <TodoSlide title="Томи: іменовані й анонімні" />; }
function BindMountDevSlide() { return <TodoSlide title="Монтування коду в розробці" />; }
function ProfilesSlide() { return <TodoSlide title="Кілька середовищ з одного опису" />; }
function RegistriesSlide() { return <TodoSlide title="Реєстри образів" />; }
function TaggingSlide() { return <TodoSlide title="Схема тегування" />; }
function PublishFromCiSlide() { return <TodoSlide title="Публікація з конвеєра" />; }
function PrivateRegistrySlide() { return <TodoSlide title="Приватні реєстри й доступ" />; }
function RegistryLimitsSlide() { return <TodoSlide title="Обмеження безкоштовних реєстрів" />; }
function PruneSlide() { return <TodoSlide title="Очищення: образи, томи, кеш" />; }
function ComposeLimitsSlide() { return <TodoSlide title="Чому Compose не для продакшену" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
