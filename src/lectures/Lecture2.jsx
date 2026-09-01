import React from 'react';
import {
  FileText,
  Target,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  BookOpen,
  Users,
  Layers,
  ListChecks,
  MessageSquare,
  Search,
  Shield,
  Zap,
  Globe,
  Eye,
  Lock,
  Gauge,
  Smartphone,
  HelpCircle,
  Lightbulb,
  PenTool,
  GitBranch,
  ChevronRight,
  Check,
  X,
  Star,
  UserCheck,
  Settings,
  Bug,
  FileQuestion,
  Brain,
  Puzzle,
  CircleDot,
  Scale, CheckCircle, Briefcase, Monitor
} from 'lucide-react';
import LectureLayout from '../components/LectureLayout';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import SlideHeader from '../components/SlideHeader'

// ============================================
// SLIDE DEFINITIONS
// ============================================

const slides = [
  { id: 1, title: 'Титульний слайд', component: TitleSlide },
  { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
  { id: 3, title: 'Що таке вимоги?', component: WhatAreRequirementsSlide },
  { id: '3_1', title: 'Навіщо потрібні вимоги?', component: WhyRequirementsSlide },
  { id: 4, title: 'Типи вимог', component: RequirementTypesSlide },
  { id: '4_1', title: 'Нефункціональні вимоги: деталі', component: NFRDetailsSlide },
  { id: 5, title: 'Джерела вимог', component: RequirementSourcesSlide },
  { id: 6, title: 'Характеристики якісних вимог', component: QualityRequirementsSlide },
  { id: '6_1', title: 'Погані vs Хороші вимоги', component: BadVsGoodRequirementsSlide },
  { id: 7, title: 'Що таке User Story?', component: WhatIsUserStorySlide },
  { id: '7_1', title: 'Формат User Story', component: UserStoryFormatSlide },
  { id: 8, title: 'INVEST-критерії', component: InvestCriteriaSlide },
  { id: 9, title: 'Epics → Stories → Tasks', component: EpicsStoriesTasksSlide },
  { id: 10, title: 'Що таке Acceptance Criteria?', component: WhatIsACSlide },
  { id: '10_1', title: 'Формати AC', component: ACFormatsSlide },
  { id: 11, title: 'Повний приклад User Story + AC', component: FullExampleSlide },
  { id: '11_1', title: 'User Story для розкладу', component: ScheduleExampleSlide },
  { id: '11_2', title: 'Ще один приклад: e-commerce', component: FullExampleEcommerceSlide },
  { id: 12, title: 'Роль QA у роботі з вимогами', component: QARoleInRequirementsSlide },
  { id: 13, title: 'Типові проблеми з вимогами', component: CommonProblemsSlide },
  { id: 14, title: 'Підсумки', component: SummarySlide },
  { id: 15, title: 'Питання?', component: QuestionsSlide },
];

export default function Lecture2() {
  return <LectureLayout slides={slides} />;
}

// ============================================
// SLIDE COMPONENTS
// ============================================

function TitleSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
      <div className="title-slide__icon-wrapper">
        <FileText />
      </div>
      <h1 className="title-slide__title">
        Вимоги. User Stories.<br />Acceptance Criteria
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 2 — Тестування програмного забезпечення
      </h2>
      <p className="title-slide__english">
        Requirements. User Stories. Acceptance Criteria
      </p>
      <div className="title-slide__badge">
        <p>📋 Основа якісного продукту — правильні вимоги</p>
      </div>
    </div>
  );
}

function ObjectivesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <div className="slide-header">
          <div className="slide-header__wrapper">
            <Target className="slide-header__icon" />
            <div className="slide-header__content">
              <h2 className="slide-header__title">Мета лекції</h2>
              <p className="slide-header__subtitle">Learning Objectives</p>
            </div>
          </div>
        </div>

        <div className="step-list">
          <div className="step-list__item step-list__item--blue fade-in-delay-1">
            <div className="step-list__number step-list__number--blue">1</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--cyan">
                Зрозуміти, що таке вимоги
                <span className="step-list__subtitle"> — Requirements</span>
              </h3>
              <p className="step-list__description">
                Типи вимог, їх джерела та характеристики якісних вимог
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--purple fade-in-delay-2">
            <div className="step-list__number step-list__number--purple">2</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--purple">
                Навчитися писати User Stories
                <span className="step-list__subtitle"> — User Stories</span>
              </h3>
              <p className="step-list__description">
                Формат «As a… I want… So that…», INVEST-критерії, декомпозиція
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--green fade-in-delay-3">
            <div className="step-list__number step-list__number--green">3</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--green">
                Освоїти Acceptance Criteria
                <span className="step-list__subtitle"> — Acceptance Criteria</span>
              </h3>
              <p className="step-list__description">
                Given/When/Then, чеклісти та зв'язок з тестуванням
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--orange fade-in-delay-4">
            <div className="step-list__number step-list__number--orange">4</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--orange">
                Зрозуміти роль QA у роботі з вимогами
                <span className="step-list__subtitle"> — QA & Requirements</span>
              </h3>
              <p className="step-list__description">
                Як QA бере участь у requirements review та чому це важливо
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatAreRequirementsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <div className="slide-header">
          <div className="slide-header__wrapper">
            <FileText className="slide-header__icon" />
            <div className="slide-header__content">
              <h2 className="slide-header__title">Що таке вимоги?</h2>
              <p className="slide-header__subtitle">What are Requirements?</p>
            </div>
          </div>
        </div>

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            <strong>Вимога (Requirement)</strong> — це документований опис того, що система
            повинна робити, якою вона має бути, або які умови повинна задовольняти, щоб
            вирішити реальну проблему користувача або бізнесу.
          </p>
        </div>

        <div className="slide-grid slide-grid--3col">
          <div className="info-card info-card--blue fade-in-delay-2">
            <div className="info-card__icon-wrapper info-card__icon-wrapper--blue">
              <BookOpen className="info-card__icon info-card__icon--blue" />
            </div>
            <h3 className="info-card__title">Документ</h3>
            <p className="info-card__text">
              Вимоги фіксуються у SRS, user stories, use cases — щоб уся команда мала єдине розуміння
            </p>
          </div>

          <div className="info-card info-card--purple fade-in-delay-3">
            <div className="info-card__icon-wrapper info-card__icon-wrapper--purple">
              <Users className="info-card__icon info-card__icon--purple" />
            </div>
            <h3 className="info-card__title">Комунікація</h3>
            <p className="info-card__text">
              Вимоги — міст між замовником (що хоче) і командою (що буде будувати)
            </p>
          </div>

          <div className="info-card info-card--green fade-in-delay-4">
            <div className="info-card__icon-wrapper info-card__icon-wrapper--green">
              <Target className="info-card__icon info-card__icon--green" />
            </div>
            <h3 className="info-card__title">Критерій успіху</h3>
            <p className="info-card__text">
              Без чітких вимог неможливо визначити, чи працює продукт правильно
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--orange mt-xl fade-in-delay-5">
          <p className="fs-body text-muted" style={{ margin: 0 }}>
            💡 <strong>IEEE 830:</strong> «Requirement — умова або можливість, яку повинна
            задовольняти або мати система, щоб виконати контракт, стандарт, специфікацію чи
            інший формально визначений документ»
          </p>
        </div>
        <p className="fs-caption text-disabled mt-sm" style={{ margin: 0 }}>
          * IEEE 830 (IEEE Std 830) — міжнародний стандарт специфікації вимог до ПЗ
          (Software Requirements Specification). Описує структуру та критерії якості SRS-документа.
        </p>
        <div className="outlined-card outlined-card--blue mt-base fade-in-delay-6">
          <p className="fs-body text-muted" style={{ margin: 0 }}>
            📘 <strong>ISTQB:</strong> «Requirement — умова або можливість, необхідна
            користувачу для вирішення проблеми або досягнення мети, яку система або її
            компонент повинні задовольняти або мати»
            <br /><br />
            <em className="text-disabled">"A condition or capability needed by a user to solve
            a problem or achieve an objective that must be met or possessed by a system or
            system component to satisfy a contract, standard, specification, or other formally
            imposed document."</em>
          </p>
        </div>
      </div>
    </div>
  );
}

function WhyRequirementsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <div className="slide-header">
          <div className="slide-header__wrapper">
            <AlertTriangle className="slide-header__icon" />
            <div className="slide-header__content">
              <h2 className="slide-header__title">Навіщо потрібні вимоги?</h2>
              <p className="slide-header__subtitle">Why do Requirements matter?</p>
            </div>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <div className="outlined-card outlined-card--red mb-base">
              <h3 className="font-heading text-red mb-sm">❌ Без чітких вимог</h3>
              <div className="flex flex-col gap-sm">
                <p className="fs-body text-secondary" style={{ margin: 0 }}>• Команда будує «не те»</p>
                <p className="fs-body text-secondary" style={{ margin: 0 }}>• Баги знаходять на продакшені</p>
                <p className="fs-body text-secondary" style={{ margin: 0 }}>• Постійні переробки → зрив дедлайнів</p>
                <p className="fs-body text-secondary" style={{ margin: 0 }}>• QA не знає, що тестувати</p>
                <p className="fs-body text-secondary" style={{ margin: 0 }}>• Конфлікти між замовником та командою</p>
              </div>
            </div>
          </div>

          <div className="fade-in-delay-2">
            <div className="outlined-card outlined-card--green mb-base">
              <h3 className="font-heading text-green mb-sm">✅ З чіткими вимогами</h3>
              <div className="flex flex-col gap-sm">
                <p className="fs-body text-secondary" style={{ margin: 0 }}>• Єдине бачення продукту</p>
                <p className="fs-body text-secondary" style={{ margin: 0 }}>• Ефективне планування та оцінка</p>
                <p className="fs-body text-secondary" style={{ margin: 0 }}>• Чіткі критерії для тестування</p>
                <p className="fs-body text-secondary" style={{ margin: 0 }}>• Менше переробок → економія бюджету</p>
                <p className="fs-body text-secondary" style={{ margin: 0 }}>• Довіра клієнта до команди</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-card info-card--orange fade-in-delay-3">
          <h3 className="info-card__title">📊 Статистика</h3>
          <p className="info-card__text">
            За дослідженнями, <strong>~50% усіх дефектів у ПЗ</strong> виникають саме через
            неповні, неточні або суперечливі вимоги. Вартість виправлення такого дефекту на
            етапі продакшену <strong>до 100× дорожча</strong>, ніж на етапі збору вимог.
          </p>
        </div>
      </div>
    </div>
  );
}

function RequirementTypesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        {/* ── Header ── */}
        <div className="slide-header">
          <div className="slide-header__wrapper">
            <Layers className="slide-header__icon" />
            <div className="slide-header__content">
              <h2 className="slide-header__title">Типи вимог</h2>
              <p className="slide-header__subtitle">Types of Requirements</p>
            </div>
          </div>
        </div>

        {/* ── 1. Requirement Levels: Business → User → System ── */}
        <div className="fade-in-delay-1">
          <div className="flex items-center justify-center gap-sm mb-base">
            <h3 className="font-heading font-bold fs-section text-primary">
              Рівні вимог
            </h3>
            <span className="badge badge--orange">Requirement Levels</span>
          </div>

          <div className="slide-grid slide-grid--3col">
            <div className="info-card info-card--top-orange">
              <div className="info-card__icon-wrapper info-card__icon-wrapper--orange">
                <Briefcase className="info-card__icon info-card__icon--orange" />
              </div>
              <h3 className="info-card__title">Business Requirements</h3>
              <p className="info-card__subtitle">Бізнес-вимоги</p>
              <p className="info-card__text mb-sm">
                <strong>Чому</strong> потрібен продукт? Цілі та потреби бізнесу.
              </p>
              <div className="tag tag--orange">
                "Збільшити онлайн-продажі на 20% за квартал"
              </div>
            </div>

            <div className="info-card info-card--top-green">
              <div className="info-card__icon-wrapper info-card__icon-wrapper--green">
                <Users className="info-card__icon info-card__icon--green" />
              </div>
              <h3 className="info-card__title">User Requirements</h3>
              <p className="info-card__subtitle">Вимоги користувачів</p>
              <p className="info-card__text mb-sm">
                <strong>Що</strong> користувач хоче робити? Сценарії та задачі.
              </p>
              <div className="tag tag--green">
                "Як покупець, я хочу оплатити замовлення карткою"
              </div>
            </div>

            <div className="info-card info-card--top-cyan">
              <div className="info-card__icon-wrapper info-card__icon-wrapper--cyan">
                <Monitor className="info-card__icon info-card__icon--cyan" />
              </div>
              <h3 className="info-card__title">System Requirements</h3>
              <p className="info-card__subtitle">Системні вимоги</p>
              <p className="info-card__text mb-sm">
                <strong>Як</strong> система реалізує? Технічні деталі (FR + NFR).
              </p>
              <div className="tag tag--blue" style={{ marginBottom: '0.25rem' }}>
                FR: "Інтеграція з Stripe API для оплати"
              </div>
              <div className="tag tag--purple">
                NFR: "Оплата проходить за &lt;5 сек"
              </div>
            </div>
          </div>

          <div className="outlined-card outlined-card--orange mt-base">
            <p className="fs-body-sm text-muted" style={{ margin: 0 }}>
              🔗 Кожен рівень деталізує попередній: <strong>Business</strong> → визначає <strong>User</strong> → деталізується в <strong>System</strong> вимоги. На системному рівні вимоги розділяються на FR та NFR.
            </p>
          </div>
        </div>

        {/* ── 2. Two main cards: FR vs NFR ── */}
        <div className="slide-grid slide-grid--2col mt-2xl">
          {/* Functional Requirements */}
          <div className="fade-in-delay-2">
            <div className="info-card info-card--top-blue" style={{ height: '100%' }}>
              <div className="flex items-center gap-sm mb-base">
                <span className="badge badge--solid-blue">FR</span>
                <h3 className="info-card__title">Функціональні вимоги</h3>
              </div>
              <p className="info-card__subtitle">Functional Requirements</p>
              <p className="info-card__text mb-base">
                Описують, <strong>що система повинна робити</strong> — конкретну поведінку, функції, обробку даних.
              </p>
              <div className="flex flex-col gap-xs">
                <div className="tag tag--blue">🔹 Користувач може зареєструватися через email</div>
                <div className="tag tag--blue">🔹 Система надсилає підтвердження на пошту</div>
                <div className="tag tag--blue">🔹 Кошик зберігає товари між сесіями</div>
                <div className="tag tag--blue">🔹 Фільтр товарів за ціною та категорією</div>
              </div>

              <div className="definition definition--blue mt-base">
                <p className="definition__term definition__term--blue">Як розпізнати FR?</p>
                <p className="definition__description">
                  Запитайте: <em>"Чи можна це протестувати конкретним сценарієм — ввів дані → отримав результат?"</em> Якщо так — це функціональна вимога.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Functional Requirements */}
          <div className="fade-in-delay-2">
            <div className="info-card info-card--top-purple" style={{ height: '100%' }}>
              <div className="flex items-center gap-sm mb-base">
                <span className="badge badge--solid-purple">NFR</span>
                <h3 className="info-card__title">Нефункціональні вимоги</h3>
              </div>
              <p className="info-card__subtitle">Non-Functional Requirements</p>
              <p className="info-card__text mb-base">
                Описують, <strong>якою система має бути</strong> — якість, обмеження, характеристики.
              </p>
              <div className="flex flex-col gap-xs">
                <div className="tag tag--purple">🔹 Сторінка завантажується за &lt;2 секунди</div>
                <div className="tag tag--purple">🔹 Підтримка 10 000 одночасних користувачів</div>
                <div className="tag tag--purple">🔹 Доступність 99.9% (uptime)</div>
                <div className="tag tag--purple">🔹 Відповідність GDPR</div>
              </div>

              <div className="definition definition--purple mt-base">
                <p className="definition__term definition__term--purple">Як розпізнати NFR?</p>
                <p className="definition__description">
                  Запитайте: <em>"Це про ЯК система працює, а не ЩО вона робить?"</em> Якщо так — це нефункціональна вимога.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. FR vs NFR comparison ── */}
        <div className="mt-2xl fade-in-delay-3">
          <div className="flex items-center justify-center gap-sm mb-base">
            <h3 className="font-heading font-bold fs-section text-primary">
              FR vs NFR — порівняння
            </h3>
          </div>

          <div className="slide-grid slide-grid--2col">
            <div className="step-list">
              <div className="step-list__item step-list__item--blue">
                <div className="step-list__number step-list__number--blue">?</div>
                <div className="step-list__content">
                  <p className="step-list__title" style={{ color: '#60a5fa' }}>Питання</p>
                  <p className="step-list__description">Що система робить?</p>
                </div>
              </div>
              <div className="step-list__item step-list__item--blue">
                <div className="step-list__number step-list__number--blue">📄</div>
                <div className="step-list__content">
                  <p className="step-list__title" style={{ color: '#60a5fa' }}>Джерело</p>
                  <p className="step-list__description">User stories, use cases, бізнес-вимоги</p>
                </div>
              </div>
              <div className="step-list__item step-list__item--blue">
                <div className="step-list__number step-list__number--blue">🧪</div>
                <div className="step-list__content">
                  <p className="step-list__title" style={{ color: '#60a5fa' }}>Тестування</p>
                  <p className="step-list__description">Функціональні тести, acceptance tests</p>
                </div>
              </div>
            </div>

            <div className="step-list">
              <div className="step-list__item step-list__item--purple">
                <div className="step-list__number step-list__number--purple">?</div>
                <div className="step-list__content">
                  <p className="step-list__title" style={{ color: '#a78bfa' }}>Питання</p>
                  <p className="step-list__description">Як добре система це робить?</p>
                </div>
              </div>
              <div className="step-list__item step-list__item--purple">
                <div className="step-list__number step-list__number--purple">📄</div>
                <div className="step-list__content">
                  <p className="step-list__title" style={{ color: '#a78bfa' }}>Джерело</p>
                  <p className="step-list__description">SLA, стандарти безпеки, регуляторні норми</p>
                </div>
              </div>
              <div className="step-list__item step-list__item--purple">
                <div className="step-list__number step-list__number--purple">🧪</div>
                <div className="step-list__content">
                  <p className="step-list__title" style={{ color: '#a78bfa' }}>Тестування</p>
                  <p className="step-list__description">Performance, security, usability тести</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. Good vs Bad requirement formulation ── */}
        <div className="mt-2xl fade-in-delay-3">
          <div className="flex items-center justify-center gap-sm mb-base">
            <h3 className="font-heading font-bold fs-section text-primary">
              Вимога має бути тестовною
            </h3>
            <span className="badge badge--green">Testable</span>
          </div>

          <div className="slide-grid slide-grid--2col">
            <div className="info-card info-card--red" style={{ height: '100%' }}>
              <div className="flex items-center gap-sm mb-sm">
                <XCircle className="icon-md text-red" />
                <h3 className="info-card__title" style={{ marginBottom: 0 }}>Погано ❌</h3>
              </div>
              <p className="info-card__subtitle">Нечіткі, суб'єктивні</p>
              <div className="flex flex-col gap-xs mt-sm">
                <div className="tag tag--red">"Система має працювати швидко"</div>
                <div className="tag tag--red">"Інтерфейс повинен бути зручним"</div>
                <div className="tag tag--red">"Додаток має бути безпечним"</div>
              </div>
              <p className="definition__note mt-sm">
                Не можна виміряти — що таке "швидко"? Для кого "зручний"?
              </p>
            </div>

            <div className="info-card info-card--green" style={{ height: '100%' }}>
              <div className="flex items-center gap-sm mb-sm">
                <CheckCircle className="icon-md text-green" />
                <h3 className="info-card__title" style={{ marginBottom: 0 }}>Добре ✅</h3>
              </div>
              <p className="info-card__subtitle">Конкретні, вимірювані</p>
              <div className="flex flex-col gap-xs mt-sm">
                <div className="tag tag--green">"Час відповіді API &lt; 200ms при 1000 RPS"</div>
                <div className="tag tag--green">"95% користувачів завершують реєстрацію за &lt;2 хв"</div>
                <div className="tag tag--green">"Паролі хешуються bcrypt з cost factor ≥ 12"</div>
              </div>
              <p className="definition__note mt-sm">
                Можна перевірити — є метрика, є критерій проходження.
              </p>
            </div>
          </div>
        </div>

        {/* ── 5. Real-world example ── */}
        <div className="outlined-card outlined-card--gradient-green-blue mt-xl fade-in-delay-3">
          <div className="flex items-center gap-sm mb-sm">
            <span className="badge badge--solid-green">💡</span>
            <h3 className="font-heading font-bold text-primary">Приклад: інтернет-банкінг</h3>
          </div>
          <div className="flex flex-col gap-xs">
            <p className="fs-body-sm text-secondary" style={{ margin: 0 }}>
              <span className="badge badge--blue" style={{ marginRight: '0.5rem' }}>FR</span>
              Користувач може переказати гроші на інший рахунок
            </p>
            <p className="fs-body-sm text-secondary" style={{ margin: 0 }}>
              <span className="badge badge--purple" style={{ marginRight: '0.5rem' }}>NFR</span>
              Переказ обробляється за &lt;3 секунди <span className="badge badge--blue" style={{ fontSize: '0.7rem' }}>Performance</span>
            </p>
            <p className="fs-body-sm text-secondary" style={{ margin: 0 }}>
              <span className="badge badge--purple" style={{ marginRight: '0.5rem' }}>NFR</span>
              Дані шифруються за стандартом AES-256 <span className="badge badge--red" style={{ fontSize: '0.7rem' }}>Security</span>
            </p>
            <p className="fs-body-sm text-secondary" style={{ margin: 0 }}>
              <span className="badge badge--purple" style={{ marginRight: '0.5rem' }}>NFR</span>
              Система доступна 99.99% часу <span className="badge badge--green" style={{ fontSize: '0.7rem' }}>Reliability</span>
            </p>
            <p className="fs-body-sm text-secondary" style={{ margin: 0 }}>
              <span className="badge badge--purple" style={{ marginRight: '0.5rem' }}>NFR</span>
              Інтерфейс переказу проходить WCAG 2.1 AA <span className="badge badge--purple" style={{ fontSize: '0.7rem' }}>Usability</span>
            </p>
          </div>
        </div>

        {/* ── Warning card ── */}
        <div className="outlined-card outlined-card--yellow mt-xl fade-in-delay-3">
          <p className="fs-body text-muted" style={{ margin: 0 }}>
            ⚠️ <strong>Поширена помилка:</strong> команди часто фокусуються лише на FR і забувають
            про NFR. Але саме нефункціональні вимоги (швидкість, безпека, масштабованість) часто
            визначають успіх або провал продукту.
          </p>
        </div>

        {/* ── GDPR footnote ── */}
        <p className="fs-caption text-disabled mt-base" style={{ margin: '0.75rem 0 0 0' }}>
          * GDPR (General Data Protection Regulation) — регламент ЄС про захист
          персональних даних. Визначає правила збору, зберігання та обробки даних
          користувачів. Штрафи до 20 млн € або 4% річного обороту.
        </p>
      </div>
    </div>
  );
}

function NFRDetailsSlide() {
  const NFR_ITEMS = [
    {
      title: "Performance",
      subtitle: "Продуктивність",
      description: "Час відповіді, пропускна здатність, використання ресурсів",
      example: "API відповідає за < 200ms при 1000 запитах/сек",
      icon: Gauge,
      color: "blue",
    },
    {
      title: "Security",
      subtitle: "Безпека",
      description: "Автентифікація, авторизація, шифрування, захист даних",
      example: "Паролі зберігаються з bcrypt, мін. 10 раундів хешування",
      icon: Lock,
      color: "red",
    },
    {
      title: "Reliability",
      subtitle: "Надійність",
      description: "Uptime, відновлення після збоїв, відмовостійкість",
      example: "Uptime 99.95%, відновлення після збою < 5 хв",
      icon: Zap,
      color: "green",
    },
    {
      title: "Usability",
      subtitle: "Зручність використання",
      description: "Інтуїтивність інтерфейсу, доступність (a11y), навчуваність",
      example: "90% нових користувачів завершують онбординг без підказок",
      icon: Eye,
      color: "purple",
    },
    {
      title: "Compatibility",
      subtitle: "Сумісність",
      description: "Браузери, ОС, пристрої, інтеграції з іншими системами",
      example: "Підтримка Chrome, Firefox, Safari останніх 2 версій",
      icon: Smartphone,
      color: "orange",
    },
    {
      title: "Scalability",
      subtitle: "Масштабованість",
      description: "Горизонтальне/вертикальне масштабування під зростання навантаження",
      example: "Система витримує зростання з 10K до 100K користувачів",
      icon: Globe,
      color: "cyan",
    },
  ];

  return (
    <div className="slide slide--compact">
      <div className="slide__content">
        <div className="slide-header">
          <div className="slide-header__wrapper">
            <Shield className="slide-header__icon" />
            <div className="slide-header__content">
              <h2 className="slide-header__title">
                Нефункціональні вимоги: деталі
              </h2>
              <p className="slide-header__subtitle">
                Non-Functional Requirements in depth
              </p>
            </div>
          </div>
        </div>

        <div className="slide-grid slide-grid--3col">
          {NFR_ITEMS.map((item, index) => (
            <InfoCardFeatured
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              color={item.color}
              icon={item.icon}
              delay={index + 1}
            >
              <div className={`tag tag--${item.color} mt-sm`}>
                📌 {item.example}
              </div>
            </InfoCardFeatured>
          ))}
        </div>
      </div>
    </div>
  );
}

  function RequirementSourcesSlide() {
    const REQUIREMENT_SOURCES = [
        {
          title: "👤 Стейкхолдери",
          subtitle: "Stakeholders",
          description:
            "Замовники, користувачі, менеджери, юристи — усі, хто зацікавлений у продукті. " +
            "Інтерв'ю, воркшопи, опитування.",
          color: "blue",
        },
        {
          title: "📄 Документація",
          subtitle: "Existing Documentation",
          description:
            "Бізнес-план, контракти, регуляторні стандарти, документація існуючої системи, " +
            "API-специфікації.",
          color: "purple",
        },
        {
          title: "🔍 Аналіз",
          subtitle: "Analysis",
          description:
            "Аналіз конкурентів, ринку, користувацького досвіду (UX research), " +
            "A/B тестування, аналітика поведінки.",
          color: "green",
        },
        {
          title: "🐛 Зворотний зв'язок",
          subtitle: "Feedback",
          description:
            "Баг-репорти, запити на фічі, відгуки користувачів, тікети підтримки, " +
            "результати тестування.",
          color: "orange",
        },
        {
          title: "⚖️ Регуляторні вимоги",
          subtitle: "Regulatory / Compliance",
          description: "GDPR, PCI DSS, HIPAA, стандарти доступності (WCAG), галузеві норми.",
          color: "cyan",
          tooltip: (
            <>
              <strong>GDPR</strong> — захист персональних даних у ЄС<br />
              <strong>PCI DSS</strong> — безпека платіжних карток<br />
              <strong>HIPAA</strong> — захист медичних даних (США)<br />
              <strong>WCAG</strong> — доступність для людей з інвалідністю<br />
              <strong>Галузеві норми</strong> — вимоги домену (фінанси, освіта, держсектор)
            </>
          ),
        },
        {
          title: "🧩 Технічні обмеження",
          subtitle: "Technical Constraints",
          description:
            "Платформа, мова програмування, інфраструктура, legacy-системи, бюджет та терміни.",
          color: "pink",
        },
      ];
    return (
      <div className="slide">
        <div className="slide__content">

        <div className="slide-header">
          <div className="slide-header__wrapper">
            <Search className="slide-header__icon" />
            <div className="slide-header__content">
              <h2 className="slide-header__title">Джерела вимог</h2>
              <p className="slide-header__subtitle">Sources of Requirements</p>
            </div>
          </div>
        </div>
  
          <div className="slide-grid slide-grid--2col">
            {[0, 1].map(col => (
              <div key={col} className="flex flex-col gap-base">
                {REQUIREMENT_SOURCES.slice(col * 3, col * 3 + 3).map((item, i) => (
                  <InfoCard
                    key={item.title}
                    {...item}
                    delay={col * 3 + i + 1}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
 
  function QualityRequirementsSlide() {
    const QUALITY_CHARACTERISTICS = [
        { letter: 'C', title: 'Clear', subtitle: 'Зрозумілі', description: 'Однозначне тлумачення, без жаргону', color: 'blue' },
        { letter: 'C', title: 'Complete', subtitle: 'Повні', description: 'Вся необхідна інформація присутня', color: 'purple' },
        { letter: 'C', title: 'Consistent', subtitle: 'Несуперечливі', description: 'Не конфліктують одна з одною', color: 'green' },
        { letter: 'T', title: 'Testable', subtitle: 'Тестовні', description: 'Можна перевірити — пройшов / не пройшов', color: 'orange' },
        { letter: 'T', title: 'Traceable', subtitle: 'Відстежувані', description: "Зв'язок з бізнес-ціллю та тест-кейсами", color: 'red' },
        { letter: 'F', title: 'Feasible', subtitle: 'Здійсненні', description: 'Реалістичні в рамках бюджету і термінів', color: 'cyan' },
      ];
    return (
      <div className="slide">
        <div className="slide__content">
          <div className="slide-header">
            <div className="slide-header__wrapper">
              <Star className="slide-header__icon" />
              <div className="slide-header__content">
                <h2 className="slide-header__title">Характеристики якісних вимог</h2>
                <p className="slide-header__subtitle">Characteristics of Good Requirements</p>
              </div>
            </div>
          </div>
  
          <div className="slide-grid slide-grid--auto">
            {QUALITY_CHARACTERISTICS.map((item, i) => (
              <BadgeCard key={item.title} {...item} delay={i + 1} />
            ))}
          </div>
  
          <div className="outlined-card outlined-card--yellow mt-xl fade-in-delay-7">
            <p className="fs-body text-muted" style={{ margin: 0 }}>
              🎯 <strong>Ключовий тест для QA:</strong> якщо ви прочитали вимогу і не можете
              одразу уявити, як її протестувати — вимога, ймовірно, недостатньо якісна.
            </p>
          </div>
        </div>
      </div>
    );
  }

function BadVsGoodRequirementsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <div className="slide-header">
          <div className="slide-header__wrapper">
            <Lightbulb className="slide-header__icon" />
            <div className="slide-header__content">
              <h2 className="slide-header__title">Погані vs Хороші вимоги</h2>
              <p className="slide-header__subtitle">Bad vs Good Requirements</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-base">
          {[
            {
              bad: 'Система повинна бути швидкою',
              why: 'Не вимірюється — що означає «швидко»?',
              good: "Головна сторінка завантажується за ≤ 2 секунди при з'єднанні 3G",
            },
            {
              bad: 'Потрібна зручна авторизація',
              why: '«Зручна» — суб\'єктивне поняття',
              good: 'Користувач може увійти через email/пароль, Google або Apple ID за ≤ 3 кроки',
            },
            {
              bad: 'Система повинна підтримувати багато користувачів',
              why: '«Багато» — невизначена кількість',
              good: 'Система підтримує 10 000 одночасних користувачів із часом відповіді ≤ 500ms',
            },
            {
              bad: 'Дані повинні бути захищені',
              why: 'Яким чином? Від чого?',
              good: 'Паролі зберігаються з bcrypt-хешуванням, API-запити вимагають JWT-токен з TTL 1 год',
            },
          ].map((item, i) => (
            <div key={i} className={`fade-in-delay-${i + 1}`}>
              <div className="info-card" style={{ borderLeft: 'none' }}>
                <div className="slide-grid slide-grid--2col" style={{ gap: '1rem' }}>
                  <div className="outlined-card outlined-card--red">
                    <div className="flex items-center gap-sm mb-sm">
                      <X className="icon-sm text-red" />
                      <span className="badge badge--red">Погано</span>
                    </div>
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>{item.bad}</p>
                    <p className="fs-caption text-muted italic mt-sm" style={{ margin: 0 }}>
                      ↳ {item.why}
                    </p>
                  </div>
                  <div className="outlined-card outlined-card--green">
                    <div className="flex items-center gap-sm mb-sm">
                      <Check className="icon-sm text-green" />
                      <span className="badge badge--green">Добре</span>
                    </div>
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>{item.good}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  
  function WhatIsUserStorySlide() {
    const USER_STORY_CONCEPTS = [
        { title: 'Фокус на користувача', description: 'Пишеться мовою бізнесу, не технічною. Описує цінність для кінцевого користувача.', icon: Users, color: 'blue' },
        { title: 'Запрошення до діалогу', description: 'User story — не вичерпна специфікація, а стартова точка для обговорення деталей у команді.', icon: MessageSquare, color: 'purple' },
        { title: 'Інкрементальність', description: 'Кожна story — невеликий шматок цінності, який можна реалізувати за один спринт.', icon: Puzzle, color: 'green' },
      ];
    return (
      <div className="slide">
        <div className="slide__content">
          <div className="slide-header">
            <div className="slide-header__wrapper">
              <MessageSquare className="slide-header__icon" />
              <div className="slide-header__content">
                <h2 className="slide-header__title">Що таке User Story?</h2>
                <p className="slide-header__subtitle">What is a User Story?</p>
              </div>
            </div>
          </div>
  
          <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
            <p className="fs-lg text-primary" style={{ margin: 0 }}>
              <strong>User Story</strong> — це короткий опис функціональності з точки зору
              кінцевого користувача. Це не технічна специфікація, а <em>обіцянка розмови</em>{' '}
              між командою та стейкхолдерами.
            </p>
          </div>
  
          <div className="slide-grid slide-grid--3col">
            {USER_STORY_CONCEPTS.map((item, i) => (
              <InfoCardFeatured key={item.title} {...item} delay={i + 2} />
            ))}
          </div>
  
          <div className="outlined-card outlined-card--cyan mt-xl fade-in-delay-5">
            <p className="fs-body text-muted" style={{ margin: 0 }}>
              📖 <strong>Три C від Рона Джеффріса:</strong> Card (коротко записана),
              Conversation (обговорення деталей), Confirmation (критерії приймання — AC).
            </p>
          </div>
        </div>
      </div>
    );
  }

function UserStoryFormatSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <div className="slide-header">
          <div className="slide-header__wrapper">
            <PenTool className="slide-header__icon" />
            <div className="slide-header__content">
              <h2 className="slide-header__title">Формат User Story</h2>
              <p className="slide-header__subtitle">User Story Format</p>
            </div>
          </div>
        </div>

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <div className="text-center">
            <p className="fs-section font-heading font-bold text-primary mb-sm" style={{ margin: 0 }}>
              As a <span className="text-blue">[роль]</span>,
            </p>
            <p className="fs-section font-heading font-bold text-primary mb-sm">
              I want <span className="text-purple">[дія/функція]</span>,
            </p>
            <p className="fs-section font-heading font-bold text-primary">
              So that <span className="text-green">[цінність/мета]</span>.
            </p>
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <div className="highlight-box highlight-box--blue fade-in-delay-2">
            <Users className="highlight-box__icon" />
            <p className="highlight-box__text">
              <strong>Хто?</strong><br />
              Роль користувача
            </p>
          </div>
          <div className="highlight-box highlight-box--purple fade-in-delay-3">
            <Target className="highlight-box__icon" />
            <p className="highlight-box__text">
              <strong>Що?</strong><br />
              Бажана дія або функція
            </p>
          </div>
          <div className="highlight-box highlight-box--green fade-in-delay-4">
            <Star className="highlight-box__icon" />
            <p className="highlight-box__text">
              <strong>Навіщо?</strong><br />
              Бізнес-цінність
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-base">
          <div className="code-block fade-in-delay-5">
            <p>
              <span className="code-block__keyword">As a</span>{' '}
              <span className="code-block__string">зареєстрований покупець</span>,
            </p>
            <p>
              <span className="code-block__keyword">I want</span>{' '}
              <span className="code-block__string">зберігати товари у список бажань</span>,
            </p>
            <p>
              <span className="code-block__keyword">So that</span>{' '}
              <span className="code-block__string">я зможу повернутися до них пізніше і купити</span>.
            </p>
          </div>

          <div className="code-block fade-in-delay-6">
            <p>
              <span className="code-block__keyword">As a</span>{' '}
              <span className="code-block__string">менеджер підтримки</span>,
            </p>
            <p>
              <span className="code-block__keyword">I want</span>{' '}
              <span className="code-block__string">бачити історію звернень клієнта</span>,
            </p>
            <p>
              <span className="code-block__keyword">So that</span>{' '}
              <span className="code-block__string">я зможу швидше вирішити його проблему</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvestCriteriaSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <div className="slide-header">
          <div className="slide-header__wrapper">
            <CheckCircle2 className="slide-header__icon" />
            <div className="slide-header__content">
              <h2 className="slide-header__title">INVEST-критерії</h2>
              <p className="slide-header__subtitle">INVEST Criteria for User Stories</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-sm">
          {[
            {
              letter: 'I',
              word: 'Independent',
              ua: 'Незалежна',
              desc: 'Не залежить від інших stories — можна реалізувати окремо',
              color: 'blue',
            },
            {
              letter: 'N',
              word: 'Negotiable',
              ua: 'Обговорювана',
              desc: 'Деталі можна обговорити і змінити — story не контракт, а запрошення до розмови',
              color: 'purple',
            },
            {
              letter: 'V',
              word: 'Valuable',
              ua: 'Цінна',
              desc: 'Приносить конкретну цінність користувачу або бізнесу',
              color: 'green',
            },
            {
              letter: 'E',
              word: 'Estimable',
              ua: 'Оцінювана',
              desc: 'Команда може оцінити обсяг роботи (story points, години)',
              color: 'orange',
            },
            {
              letter: 'S',
              word: 'Small',
              ua: 'Невелика',
              desc: 'Реалізується за один спринт — якщо ні, потрібна декомпозиція',
              color: 'red',
            },
            {
              letter: 'T',
              word: 'Testable',
              ua: 'Тестовна',
              desc: 'Має чіткі acceptance criteria — можна перевірити «зроблено / не зроблено»',
              color: 'cyan',
            },
          ].map((item, i) => (
            <div
              key={item.letter + item.word}
              className={`step-list__item step-list__item--${item.color} fade-in-delay-${i + 1}`}
            >
              <div className={`step-list__number step-list__number--${item.color}`} style={{ fontSize: '1rem' }}>
                {item.letter}
              </div>
              <div className="step-list__content">
                <h3 className={`step-list__title step-list__title--${item.color}`}>
                  {item.word}
                  <span className="step-list__subtitle"> — {item.ua}</span>
                </h3>
                <p className="step-list__description">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EpicsStoriesTasksSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
      <SlideHeader
          icon={GitBranch}
          title="Epics → User Stories → Tasks"
          subtitle="Decomposition hierarchy"
        />

        {/* Visual hierarchy */}
        <div className="flex flex-col items-center gap-base mb-xl">
          {/* Epic */}
          <div
            className="outlined-card outlined-card--blue fade-in-delay-1"
            style={{ width: '80%', textAlign: 'center' }}
          >
            <div className="flex items-center justify-center gap-sm mb-sm">
              <span className="badge badge--solid-blue">Epic</span>
            </div>
            <h3 className="font-heading fs-section font-bold text-primary mb-sm">
              🏔️ Система оплати замовлень
            </h3>
            <p className="fs-body text-muted" style={{ margin: 0 }}>
              Великий обсяг роботи, розрахований на кілька спринтів.
              Об'єднує кілька пов'язаних user stories.
            </p>
          </div>

          <ChevronRight className="icon-md text-muted" style={{ transform: 'rotate(90deg)' }} />

          {/* User Stories */}
          <div className="slide-grid slide-grid--3col fade-in-delay-2" style={{ width: '100%' }}>
            <div className="outlined-card outlined-card--purple text-center">
              <span className="badge badge--solid-purple mb-sm">User Story</span>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Як покупець, я хочу оплатити карткою
              </p>
            </div>
            <div className="outlined-card outlined-card--purple text-center">
              <span className="badge badge--solid-purple mb-sm">User Story</span>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Як покупець, я хочу застосувати промокод
              </p>
            </div>
            <div className="outlined-card outlined-card--purple text-center">
              <span className="badge badge--solid-purple mb-sm">User Story</span>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Як покупець, я хочу отримати чек на email
              </p>
            </div>
          </div>

          <ChevronRight className="icon-md text-muted" style={{ transform: 'rotate(90deg)' }} />

          {/* Tasks */}
          <div className="slide-grid slide-grid--4col fade-in-delay-3" style={{ width: '100%' }}>
            {[
              'UI форми оплати',
              'Інтеграція Stripe API',
              'Валідація картки',
              'Unit-тести',
              'E2E тест оплати',
              'Логіка промокодів',
              'Шаблон email-чеку',
              'QA тестування',
            ].map((task) => (
              <div key={task} className="outlined-card outlined-card--green text-center">
                <span className="badge badge--green mb-sm">Task</span>
                <p className="fs-body-sm text-secondary" style={{ margin: 0 }}>{task}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="outlined-card outlined-card--yellow fade-in-delay-4">
          <p className="fs-body text-muted" style={{ margin: 0 }}>
            💡 <strong>Правило:</strong> Epic = тижні/місяці роботи. User Story = реалізується
            за один спринт. Task = конкретне завдання для одного розробника (години/дні).
          </p>
        </div>
      </div>
    </div>
  );
}

function WhatIsACSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
      <SlideHeader
          icon={ListChecks}
          title="Що таке Acceptance Criteria? Формати Acceptance Criteria"
          subtitle="What are Acceptance Criteria?"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            <strong>Acceptance Criteria (AC)</strong> — це набір умов, які визначають, коли
            user story вважається завершеною. AC — це «контракт» між командою, PO та QA:
            якщо всі критерії виконані — story done.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="flex flex-col gap-base">
            <div className="info-card info-card--green fade-in-delay-2">
              <h3 className="info-card__title">✅ Навіщо потрібні AC</h3>
              <div className="flex flex-col gap-xs mt-sm">
                <p className="info-card__text">• Визначають scope роботи</p>
                <p className="info-card__text">• Основа для тест-кейсів</p>
                <p className="info-card__text">• Критерій Done для розробника</p>
                <p className="info-card__text">• Зменшують неоднозначність</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-base">
            <div className="info-card info-card--blue fade-in-delay-3">
              <h3 className="info-card__title">👥 Хто пише AC</h3>
              <div className="flex flex-col gap-xs mt-sm">
                <p className="info-card__text">• <strong>Product Owner</strong> — бізнес-логіка</p>
                <p className="info-card__text">• <strong>QA</strong> — edge cases та негативні сценарії</p>
                <p className="info-card__text">• <strong>Dev</strong> — технічні обмеження</p>
                <p className="info-card__text">• Найкраще — <strong>спільно</strong> (Three Amigos)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="outlined-card outlined-card--orange mt-xl fade-in-delay-4">
          <p className="fs-body text-muted" style={{ margin: 0 }}>
            🤝 <strong>Three Amigos:</strong> практика, коли PO, Dev і QA разом обговорюють story
            та формулюють AC перед початком розробки. Це одна з найефективніших практик у Agile.
          </p>
        </div>
      </div>
    </div>
  );
}

function ACFormatsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
      <SlideHeader
          icon={ClipboardList}
          title="Формати Acceptance Criteria"
          subtitle="AC Formats: Given/When/Then & Checklists"
        />

        <div className="slide-grid slide-grid--2col">
          {/* Given/When/Then */}
          <div className="fade-in-delay-1">
            <div className="info-card info-card--top-blue" style={{ height: '100%' }}>
              <div className="flex items-center gap-sm mb-base">
                <span className="badge badge--solid-blue">Gherkin</span>
                <h3 className="info-card__title">Given / When / Then</h3>
              </div>
              <p className="info-card__subtitle mb-base">Сценарійний формат (BDD-стиль)</p>

              <div className="code-block mb-base">
                <p><span className="code-block__keyword">Scenario:</span> Успішний логін</p>
                <p> </p>
                <p><span className="code-block__keyword">Given</span> <span className="code-block__string">користувач на сторінці логіну</span></p>
                <p><span className="code-block__keyword">When</span> <span className="code-block__string">вводить валідний email і пароль</span></p>
                <p><span className="code-block__keyword">And</span> <span className="code-block__string">натискає кнопку «Увійти»</span></p>
                <p><span className="code-block__keyword">Then</span> <span className="code-block__string">потрапляє на головну сторінку</span></p>
                <p><span className="code-block__keyword">And</span> <span className="code-block__string">бачить своє ім'я у хедері</span></p>
              </div>

              <div className="outlined-card outlined-card--blue">
                <p className="fs-body-sm text-muted" style={{ margin: 0 }}>
                  <strong>Given</strong> — передумова (контекст)<br />
                  <strong>When</strong> — дія (тригер)<br />
                  <strong>Then</strong> — очікуваний результат
                </p>
              </div>
            </div>
          </div>

          {/* Checklist format */}
          <div className="fade-in-delay-2">
            <div className="info-card info-card--top-purple" style={{ height: '100%' }}>
              <div className="flex items-center gap-sm mb-base">
                <span className="badge badge--solid-purple">Checklist</span>
                <h3 className="info-card__title">Чеклістовий формат</h3>
              </div>
              <p className="info-card__subtitle mb-base">Список критеріїв приймання</p>

              <div className="flex flex-col gap-sm mb-base">
                <div className="outlined-card outlined-card--green">
                  <div className="flex items-center gap-sm">
                    <Check className="icon-sm text-green" />
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>Email валідується за форматом (RFC 5322)</p>
                  </div>
                </div>
                <div className="outlined-card outlined-card--green">
                  <div className="flex items-center gap-sm">
                    <Check className="icon-sm text-green" />
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>Пароль мінімум 8 символів, 1 цифра, 1 велика</p>
                  </div>
                </div>
                <div className="outlined-card outlined-card--green">
                  <div className="flex items-center gap-sm">
                    <Check className="icon-sm text-green" />
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>При невірному паролі — повідомлення про помилку</p>
                  </div>
                </div>
                <div className="outlined-card outlined-card--green">
                  <div className="flex items-center gap-sm">
                    <Check className="icon-sm text-green" />
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>Після 5 невдалих спроб — блокування на 15 хв</p>
                  </div>
                </div>
                <div className="outlined-card outlined-card--green">
                  <div className="flex items-center gap-sm">
                    <Check className="icon-sm text-green" />
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>Сесія діє 24 години, потім — автоматичний логаут</p>
                  </div>
                </div>
              </div>

              <div className="outlined-card outlined-card--purple">
                <p className="fs-body-sm text-muted" style={{ margin: 0 }}>
                  Простіший формат, добре підходить для нескладних stories та швидкого review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FullExampleSlide() {
  return (
    <div className="slide slide--compact">
      <div className="slide__content">
      <SlideHeader
          icon={FileText}
          title="Повний приклад: User Story + AC"
          subtitle="Complete Example: Login Feature"
        />

        {/* User Story */}
        <div className="outlined-card outlined-card--gradient-blue-purple mb-base fade-in-delay-1">
          <div className="flex items-center gap-sm mb-sm">
            <span className="badge badge--solid-blue">User Story</span>
            <span className="badge badge--purple">Пріоритет: High</span>
            <span className="badge badge--orange">5 SP</span>
          </div>
          <div className="code-block">
            <p><span className="code-block__keyword">As a</span> <span className="code-block__string">зареєстрований користувач</span>,</p>
            <p><span className="code-block__keyword">I want</span> <span className="code-block__string">увійти в систему за допомогою email та пароля</span>,</p>
            <p><span className="code-block__keyword">So that</span> <span className="code-block__string">я отримаю доступ до свого особистого кабінету</span>.</p>
          </div>
        </div>

        {/* AC */}
        <div className="slide-grid slide-grid--2col">
          <div className="flex flex-col gap-sm fade-in-delay-2">
            <h3 className="font-heading text-green fs-section">✅ Happy path</h3>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">я на сторінці логіну</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">вводжу валідний email і пароль</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">перенаправлений на дашборд</span></p>
              <p><span className="code-block__keyword">And</span> <span className="code-block__string">бачу вітальне повідомлення</span></p>
            </div>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">я авторизований</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">закриваю браузер і повертаюсь</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">залишаюсь авторизованим (24 год)</span></p>
            </div>
          </div>

          <div className="flex flex-col gap-sm fade-in-delay-3">
            <h3 className="font-heading text-red fs-section">❌ Negative scenarios</h3>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">я на сторінці логіну</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">вводжу невірний пароль</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">бачу «Невірний email або пароль»</span></p>
              <p><span className="code-block__keyword">And</span> <span className="code-block__string">поле пароля очищується</span></p>
            </div>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">5 невдалих спроб входу</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">спробую ще раз</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">акаунт заблоковано на 15 хв</span></p>
              <p><span className="code-block__keyword">And</span> <span className="code-block__string">отримую email-сповіщення</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScheduleExampleSlide() {
  return (
    <div className="slide slide--compact">
      <div className="slide__content">
        <SlideHeader
          icon={FileText}
          title="Повний приклад: User Story + AC"
          subtitle="Complete Example: Schedule Class Periods"
        />

        {/* User Story */}
        <div className="outlined-card outlined-card--gradient-blue-purple mb-base fade-in-delay-1">
          <div className="flex items-center gap-sm mb-sm">
            <span className="badge badge--solid-blue">User Story</span>
            <span className="badge badge--purple">Пріоритет: Medium</span>
            <span className="badge badge--orange">3 SP</span>
          </div>
          <div className="code-block">
            <p><span className="code-block__keyword">As a</span> <span className="code-block__string">адміністратор розкладу</span>,</p>
            <p><span className="code-block__keyword">I want</span> <span className="code-block__string">створювати дзвінки (пари) із зазначенням назви та часового інтервалу</span>,</p>
            <p><span className="code-block__keyword">So that</span> <span className="code-block__string">визначити часову сітку, за якою формуватиметься розклад занять</span>.</p>
          </div>
        </div>

        {/* AC */}
        <div className="slide-grid slide-grid--2col">
          {/* Left column */}
          <div className="flex flex-col gap-sm fade-in-delay-2">
            <h3 className="font-heading text-green fs-section">✅ Створення дзвінка</h3>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">я на сторінці «Створення Пари»</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">вводжу назву, час початку та закінчення</span></p>
              <p><span className="code-block__keyword">And</span> <span className="code-block__string">натискаю «Зберегти»</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">дзвінок з'являється у списку</span></p>
              <p><span className="code-block__keyword">And</span> <span className="code-block__string">список відсортований за часом початку</span></p>
            </div>

            <h3 className="font-heading text-purple fs-section">📝 Валідація назви</h3>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">поле назви порожнє</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">натискаю «Зберегти»</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">бачу помилку — назва обов'язкова</span></p>
            </div>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">назва довша за 20 символів</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">натискаю «Зберегти»</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">бачу помилку про ліміт символів</span></p>
            </div>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">назва містить пробіли на початку/в кінці</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">натискаю «Зберегти»</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">пробіли автоматично обрізаються</span></p>
            </div>

            <h3 className="font-heading text-blue fs-section">🔘 Стан форми</h3>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">форма порожня (жодне поле не змінено)</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">кнопка «Зберегти» неактивна</span></p>
            </div>
            <div className="code-block">
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">вводжу або змінюю хоча б одне поле</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">кнопка «Зберегти» стає активною</span></p>
            </div>
            <div className="code-block">
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">натискаю «Очистити»</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">всі поля скидаються до початкового стану</span></p>
              <p><span className="code-block__keyword">And</span> <span className="code-block__string">кнопка «Зберегти» стає неактивною</span></p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-sm fade-in-delay-3">
            <h3 className="font-heading text-red fs-section">❌ Валідація часу</h3>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">час початку ≥ час закінчення</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">натискаю «Зберегти»</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">бачу помилку про невірний інтервал</span></p>
              <p><span className="code-block__keyword">And</span> <span className="code-block__string">дзвінок не зберігається</span></p>
            </div>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">інтервал перетинається з існуючим дзвінком</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">натискаю «Зберегти»</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">бачу повідомлення про конфлікт</span></p>
              <p><span className="code-block__keyword">And</span> <span className="code-block__string">дзвінок не зберігається</span></p>
            </div>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">інтервал вкладається в існуючий дзвінок</span></p>
              <p><span className="code-block__keyword">When</span> <span className="code-block__string">натискаю «Зберегти»</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">бачу повідомлення про конфлікт</span></p>
              <p><span className="code-block__keyword">And</span> <span className="code-block__string">дзвінок не зберігається</span></p>
            </div>

            <h3 className="font-heading text-orange fs-section">⚠️ Обмеження кількості</h3>
            <div className="code-block">
              <p><span className="code-block__keyword">Given</span> <span className="code-block__string">вже існує 10 дзвінків (максимум)</span></p>
              <p><span className="code-block__keyword">Then</span> <span className="code-block__string">форма створення недоступна</span></p>
              <p><span className="code-block__keyword">And</span> <span className="code-block__string">бачу повідомлення про досягнення ліміту</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FullExampleEcommerceSlide() {
  return (
    <div className="slide slide--compact">
      <div className="slide__content">
      <SlideHeader
          icon={FileText}
          title="Ще один приклад: e-commerce"
          subtitle="Complete Example: Add to Cart"
        />

        <div className="outlined-card outlined-card--gradient-purple-pink mb-base fade-in-delay-1">
          <div className="flex items-center gap-sm mb-sm">
            <span className="badge badge--solid-purple">User Story</span>
            <span className="badge badge--blue">Пріоритет: High</span>
            <span className="badge badge--orange">8 SP</span>
          </div>
          <div className="code-block">
            <p><span className="code-block__keyword">As a</span> <span className="code-block__string">покупець інтернет-магазину</span>,</p>
            <p><span className="code-block__keyword">I want</span> <span className="code-block__string">додавати товари до кошика</span>,</p>
            <p><span className="code-block__keyword">So that</span> <span className="code-block__string">я зможу зібрати замовлення та оплатити одразу все</span>.</p>
          </div>
        </div>

        <h3 className="font-heading text-primary fs-section mb-sm fade-in-delay-2">
          Acceptance Criteria (чеклістовий формат):
        </h3>

        <div className="slide-grid slide-grid--2col">
          <div className="flex flex-col gap-xs fade-in-delay-2">
            {[
              'Кнопка «Додати в кошик» є на картці товару та на сторінці товару',
              'При натисканні товар додається в кошик, лічильник оновлюється',
              'Якщо товар вже у кошику — збільшується кількість',
              'Максимальна кількість одного товару — 99 одиниць',
              'Якщо товару немає в наявності — кнопка неактивна, текст «Немає в наявності»',
            ].map((text, i) => (
              <div key={i} className="outlined-card outlined-card--green">
                <div className="flex items-start gap-sm">
                  <Check className="icon-sm text-green" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p className="fs-body-sm text-secondary" style={{ margin: 0 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-xs fade-in-delay-3">
            {[
              'Неавторизований користувач бачить пропозицію залогінитися або продовжити як гість',
              'Кошик зберігається в localStorage для гостей (7 днів)',
              'Після логіну гостьовий кошик мерджиться з серверним',
              'Анімація підтвердження (toast notification) тривалістю 3 сек',
              'Кошик коректно працює на mobile, tablet, desktop',
            ].map((text, i) => (
              <div key={i} className="outlined-card outlined-card--green">
                <div className="flex items-start gap-sm">
                  <Check className="icon-sm text-green" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p className="fs-body-sm text-secondary" style={{ margin: 0 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QARoleInRequirementsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
      <SlideHeader
          icon={UserCheck}
          title="Роль QA у роботі з вимогами"
          subtitle="QA's Role in Requirements"
        />

        <div className="step-list">
          <div className="step-list__item step-list__item--blue fade-in-delay-1">
            <div className="step-list__number step-list__number--blue">1</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--cyan">
                Requirements Review
                <span className="step-list__subtitle"> — Ревю вимог</span>
              </h3>
              <p className="step-list__description">
                QA перевіряє вимоги на повноту, однозначність, тестовність ще до початку розробки.
                Знаходить gaps та суперечності.
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--purple fade-in-delay-2">
            <div className="step-list__number step-list__number--purple">2</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--purple">
                Уточнюючі запитання
                <span className="step-list__subtitle"> — Clarification Questions</span>
              </h3>
              <p className="step-list__description">
                «Що буде, якщо…?», «А якщо поле порожнє?», «Як поводиться на мобільному?» —
                QA думає про edge cases, які інші можуть пропустити.
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--green fade-in-delay-3">
            <div className="step-list__number step-list__number--green">3</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--green">
                Написання / доповнення AC
                <span className="step-list__subtitle"> — Writing Acceptance Criteria</span>
              </h3>
              <p className="step-list__description">
                QA допомагає PO сформулювати чіткі AC, додає негативні сценарії та граничні умови.
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--orange fade-in-delay-4">
            <div className="step-list__number step-list__number--orange">4</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--orange">
                Трасування: вимоги → тести
                <span className="step-list__subtitle"> — Requirements Traceability</span>
              </h3>
              <p className="step-list__description">
              QA перевіряє, що кожна вимога має AC і нічого не пропущено. 
              У регульованих галузях (медицина, фінанси) додатково ведуть traceability matrix,
                щоб нічого не загубилося.
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--cyan fade-in-delay-5">
            <div className="step-list__number step-list__number--cyan">5</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--cyan">
                Three Amigos session
                <span className="step-list__subtitle"> — Спільне обговорення</span>
              </h3>
              <p className="step-list__description">
                QA бере участь у сесіях з PO та Dev, щоб усі мали єдине розуміння story
                до початку спринту.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommonProblemsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
      <SlideHeader
          icon={Bug}
          title="Типові проблеми з вимогами"
          subtitle="Common Requirements Problems"
        />

        <div className="slide-grid slide-grid--2col">
          {[
            {
              icon: <FileQuestion className="icon-md text-red" />,
              title: 'Неоднозначність',
              en: 'Ambiguity',
              desc: '«Система повинна швидко обробляти дані» — що означає «швидко»?',
              fix: 'Використовуйте конкретні числа та метрики',
              color: 'red',
              delay: 1,
            },
            {
              icon: <HelpCircle className="icon-md text-orange" />,
              title: 'Неповнота',
              en: 'Incompleteness',
              desc: 'Описано happy path, але не описано, що буде при помилці або edge case',
              fix: 'QA задає питання: «Що буде, якщо…?»',
              color: 'orange',
              delay: 2,
            },
            {
              icon: <XCircle className="icon-md text-purple" />,
              title: 'Суперечливість',
              en: 'Inconsistency',
              desc: 'В одному місці «email обов\'язковий», в іншому — «можна без email»',
              fix: 'Єдине джерело правди (single source of truth)',
              color: 'purple',
              delay: 3,
            },
            {
              icon: <Settings className="icon-md text-blue" />,
              title: 'Over-specification',
              en: 'Надмірна деталізація',
              desc: 'Вимоги описують HOW замість WHAT — нав\'язують конкретну реалізацію',
              fix: 'Фокус на поведінці, а не на реалізації',
              color: 'blue',
              delay: 4,
            },
            {
              icon: <CircleDot className="icon-md text-cyan" />,
              title: 'Gold plating',
              en: 'Зайві фічі',
              desc: 'Команда додає функціонал, який не був запитаний замовником',
              fix: 'Суворо дотримуватися scope user story',
              color: 'cyan',
              delay: 5,
            },
            {
              icon: <Brain className="icon-md text-pink" />,
              title: 'Невисловлені очікування',
              en: 'Unstated assumptions',
              desc: 'Замовник «мав на увазі» щось, але не написав у вимогах',
              fix: 'Явно документувати все, що обговорюється',
              color: 'pink',
              delay: 6,
            },
          ].map((item) => (
            <div key={item.title} className={`info-card info-card--${item.color} fade-in-delay-${item.delay}`}>
              <div className="flex items-center gap-sm mb-sm">
                {item.icon}
                <div>
                  <h3 className="info-card__title">{item.title}</h3>
                  <p className="info-card__subtitle">{item.en}</p>
                </div>
              </div>
              <p className="info-card__text mb-sm">{item.desc}</p>
              <div className="outlined-card outlined-card--green">
                <p className="fs-body-sm text-green" style={{ margin: 0 }}>
                  💡 <strong>Рішення:</strong> {item.fix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SummarySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
      <SlideHeader
          icon={CheckCircle2}
          title="Підсумки"
          subtitle="Summary"
        />

        <div className="summary-list">
          {[
            {
              icon: <FileText />,
              text: 'Вимоги — основа всього: розробки, тестування, планування',
            },
            {
              icon: <Layers />,
              text: 'Функціональні (що робить) та нефункціональні (якою є) — обидва типи критично важливі',
            },
            {
              icon: <Star />,
              text: 'Якісні вимоги — Clear, Complete, Consistent, Testable, Traceable, Feasible',
            },
            {
              icon: <MessageSquare />,
              text: 'User Story — «As a… I want… So that…» — фокус на цінності для користувача',
            },
            {
              icon: <CheckCircle2 />,
              text: 'INVEST-критерії допомагають писати якісні user stories',
            },
            {
              icon: <ListChecks />,
              text: 'Acceptance Criteria — «контракт» для Done: Given/When/Then або чеклісти',
            },
            {
              icon: <UserCheck />,
              text: 'QA бере активну участь у requirements review, написанні AC, Three Amigos',
            },
            {
              icon: <AlertTriangle />,
              text: '~50% дефектів — через погані вимоги. Інвестуйте час у їх якість!',
            },
          ].map((item, i) => (
            <div key={i} className={`summary-list__item fade-in-delay-${i + 1}`}>
              <div className="summary-list__icon">{item.icon}</div>
              <p className="summary-list__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuestionsSlide() {
  return (
    <div className="slide slide--centered slide--gradient-purple-pink">
      <div className="questions-slide__emoji">🤔</div>
      <h2 className="questions-slide__title">Питання?</h2>
      <p className="questions-slide__subtitle">
        Час для обговорення та запитань
      </p>
      <div className="questions-slide__next">
        <p>
          <strong>Наступна лекція:</strong> Тест-дизайн. Техніки тестування
        </p>
      </div>
    </div>
  );
}

  