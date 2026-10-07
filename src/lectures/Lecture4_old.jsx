import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  GitBranch,
  Target,
  AlertTriangle,
  BookOpen, Triangle, Ruler, PieChart, ShieldAlert,
  Lock, MessageSquare, Users, Timer, Dice5, Tag,
  HelpCircle, Cpu, Grid3x3, Database, KeyRound, EyeOff, FolderTree,
  Construction, Layers, Play, Server, Clock, Package, Bug, Zap, ArrowRight, CheckCircle2, XCircle,
} from 'lucide-react';

// ============================================
// SLIDES ARRAY
// ============================================

const slides = [
  { id: 1,  title: 'Титульний слайд',                  component: TitleSlide },
  { id: 2,  title: 'Мета лекції',                      component: ObjectivesSlide, selfStudy: true },
  { id: '2_1', title: 'Системи CI і вибір курсу',      component: CiSystemsSlide },
  { id: 3,  title: 'Навіщо потрібна CI',               component: WhyCiSlide },
  { id: 4,  title: 'Що CI ловить, а що ні',            component: WhatCiCatchesSlide },
  { id: 5,  title: 'Анатомія конвеєра',                component: PipelineAnatomySlide },
  { id: 6,  title: 'Тригери: push, PR, розклад',       component: TriggersSlide },
  { id: 7,  title: 'Завдання, кроки, артефакти',       component: JobsStepsArtifactsSlide },
  { id: 8,  title: 'Runner: де це виконується',        component: RunnersSlide },
  { id: 9,  title: 'Матрична стратегія',               component: MatrixSlide },
  { id: 10, title: 'Кешування залежностей',            component: CachingSlide },
  { id: 11, title: 'Фільтри за шляхами',               component: PathFiltersSlide },
  { id: 12, title: 'Секрети в конвеєрі',               component: SecretsSlide },
  { id: 13, title: 'Піраміда тестів',                  component: TestPyramidSlide },
  { id: 14, title: 'Який рівень тестів де запускати',  component: TestPlacementSlide },
  { id: 15, title: 'Лінтери й форматери',              component: LintersSlide },
  { id: 16, title: 'Покриття коду',                    component: CoverageSlide },
  { id: 17, title: 'Аудит залежностей',                component: DependencyAuditSlide },
  { id: 18, title: 'Обов\'язкові перевірки',           component: RequiredChecksSlide },
  { id: 19, title: 'Code review як частина процесу',   component: CodeReviewSlide },
  { id: 20, title: 'CODEOWNERS і захист гілок',        component: BranchProtectionSlide },
  { id: 21, title: 'Швидкість зворотного зв\'язку',    component: FeedbackSpeedSlide },
  { id: 22, title: 'Нестабільні тести',                component: FlakyTestsSlide },
  { id: 23, title: 'Версії дій і безпека ланцюга',     component: ActionVersionsSlide },
  { id: 24, title: 'Типові помилки',                   component: CommonMistakesSlide },
  { id: 25, title: 'Підсумки',                         component: SummarySlide },
  { id: 26, title: 'Питання?',                         component: QuestionsSlide },
];

export default function Lecture4() {
  return <LectureLayout slides={slides} />;
}

// ---------- 1. TITLE ----------

function TitleSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
      <div className="title-slide__icon-wrapper">
        <GitBranch />
      </div>
      <h1 className="title-slide__title">
        Безперервна інтеграція
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 4 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Continuous Integration
      </p>
      <div className="title-slide__badge">
        <p>🔁 Кожна зміна перевіряється автоматично</p>
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

// ---------- 2. OBJECTIVES ----------

function ObjectivesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Target} title="Мета лекції" subtitle="Learning Objectives" />

        <div className="step-list">
          <div className="step-list__item step-list__item--blue fade-in-delay-1">
            <div className="step-list__number step-list__number--blue">1</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--cyan">
                Зрозуміти, що таке конвеєр
                <span className="step-list__subtitle"> — Pipeline Anatomy</span>
              </h3>
              <p className="step-list__description">
                Тригери, завдання, кроки, артефакти — модель, однакова в усіх системах CI
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--purple fade-in-delay-2">
            <div className="step-list__number step-list__number--purple">2</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--purple">
                Навчитися будувати швидкий конвеєр
                <span className="step-list__subtitle"> — Matrix, Cache, Filters</span>
              </h3>
              <p className="step-list__description">
                Матриця замість копіювання, кешування, збірка лише зміненого
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--green fade-in-delay-3">
            <div className="step-list__number step-list__number--green">3</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--green">
                Розібратися, що саме перевіряти
                <span className="step-list__subtitle"> — Tests, Linters, Audit</span>
              </h3>
              <p className="step-list__description">
                Рівні тестів, покриття, перевірка залежностей на вразливості
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--orange fade-in-delay-4">
            <div className="step-list__number step-list__number--orange">4</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--orange">
                Зробити перевірки обов'язковими
                <span className="step-list__subtitle"> — Required Checks</span>
              </h3>
              <p className="step-list__description">
                Конвеєр, який блокує злиття, а не просто малює червоний хрестик
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 3. CI SYSTEMS AND WHY THIS ONE ----------

function CiSystemsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Layers}
          title="Системи CI і вибір курсу"
          subtitle="Same Model, Different Syntax"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Систем багато, модель у них <strong>одна</strong>. Змінюються назви й
            синтаксис, не змінюється суть: подія запускає набір кроків на чистій
            машині, результат — успіх або відмова.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">GitHub Actions</p>
            <p className="definition__description">
              Конфігурація в репозиторії, поруч із кодом. Безкоштовно для публічних
              репозиторіїв, нічого не треба піднімати. Терміни: workflow → job → step
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-2">
            <p className="definition__term definition__term--orange">GitLab CI</p>
            <p className="definition__description">
              Та сама ідея, один файл у корені. Терміни: pipeline → stage → job.
              Часто зустрічається там, де вся розробка живе в GitLab
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-3">
            <p className="definition__term definition__term--purple">Jenkins</p>
            <p className="definition__description">
              Старший за решту, встановлюється на власний сервер. Гнучкий і вимогливий
              до обслуговування. Досі поширений у великих компаніях
            </p>
          </div>
          <div className="definition definition--green fade-in-delay-3">
            <p className="definition__term definition__term--green">Решта</p>
            <p className="definition__description">
              CircleCI, Buildkite, TeamCity, Drone. Відрізняються моделлю виконавців,
              ціною та інтеграціями — не поняттями
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--blue mb-base fade-in-delay-4">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-blue">Чому в курсі GitHub Actions:</strong>{' '}
            безкоштовно й без обмежень для публічних репозиторіїв, конфігурація лежить
            у тому ж репозиторії, що й код, і нічого не треба розгортати заздалегідь.
            Це найкоротший шлях від «немає нічого» до «конвеєр працює».
          </p>
        </div>

        <HighlightBox color="cyan">
          Ви вчите <strong>CI</strong>, а не Actions. Коли на роботі побачите GitLab
          або Jenkins — доведеться подивитися синтаксис, але думати будете тими самими
          поняттями: подія, завдання, кроки, артефакт, обов'язкова перевірка.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 4. WHY CI ----------

function WhyCiSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Zap}
          title="Навіщо потрібна CI"
          subtitle="Integrate Often, Break Less"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--red fade-in-delay-1">
            <div className="flex items-center gap-sm mb-base">
              <XCircle className="icon-lg text-red" />
              <h3 className="font-heading fs-section font-bold text-red">
                Без CI
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Гілка живе два тижні</p>
              <p className="fs-body text-secondary">Тести запускає той, хто пам'ятає</p>
              <p className="fs-body text-secondary">«У мене працює» — і це правда</p>
              <p className="fs-body text-secondary">Злиття перетворюється на подію</p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Помилку знаходять через тижні після того, як її внесли
            </p>
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <CheckCircle2 className="icon-lg text-green" />
              <h3 className="font-heading fs-section font-bold text-green">
                З CI
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Кожна зміна перевіряється одразу</p>
              <p className="fs-body text-secondary">Перевірка однакова для всіх</p>
              <p className="fs-body text-secondary">Середовище чисте щоразу</p>
              <p className="fs-body text-secondary">Злиття — рутина, а не подія</p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Помилку видно через хвилини, поки контекст ще в голові
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--gradient-green-blue mb-base fade-in-delay-3">
          <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
            Головна цінність не в автоматизації, а в{' '}
            <strong>швидкості зворотного зв'язку</strong>
          </p>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="definition definition--cyan fade-in-delay-4">
            <p className="definition__term definition__term--cyan">Continuous Integration</p>
            <p className="definition__description">
              Дослівно — «безперервне вливання»: кожен вливає свої зміни в спільну
              гілку часто, а не накопичує тижнями. Автоматичні перевірки роблять це
              безпечним
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-5">
            <p className="definition__term definition__term--orange">Ціна затримки</p>
            <p className="definition__description">
              Помилка, знайдена через хвилину, коштує хвилин. Та сама помилка на
              продакшені — годин роботи кількох людей і довіри користувачів
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 5. WHAT CI CATCHES ----------

function WhatCiCatchesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Bug}
          title="Що CI ловить, а що ні"
          subtitle="Realistic Expectations"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <div className="flex items-center gap-sm mb-base">
              <CheckCircle2 className="icon-lg text-green" />
              <h3 className="font-heading fs-section font-bold text-green">
                Ловить
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Код не збирається</p>
              <p className="fs-body text-secondary">Тести не проходять</p>
              <p className="fs-body text-secondary">Забутий файл, який є лише локально</p>
              <p className="fs-body text-secondary">Залежність із відомою вразливістю</p>
              <p className="fs-body text-secondary">Порушення стилю й очевидні дефекти</p>
              <p className="fs-body text-secondary">Конфлікт зі змінами колеги</p>
            </div>
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <XCircle className="icon-lg text-orange" />
              <h3 className="font-heading fs-section font-bold text-orange">
                Не ловить
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Неправильно зрозумілу вимогу</p>
              <p className="fs-body text-secondary">Погану архітектуру</p>
              <p className="fs-body text-secondary">Те, на що немає тесту</p>
              <p className="fs-body text-secondary">Проблеми під навантаженням</p>
              <p className="fs-body text-secondary">Помилки конфігурації середовища</p>
              <p className="fs-body text-secondary">Незручний інтерфейс</p>
            </div>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Зелений конвеєр означає рівно одне: <strong>перевірки, які ви написали,
          пройшли</strong>. Не «код правильний» і не «можна випускати». Якість
          конвеєра дорівнює якості перевірок у ньому.
        </HighlightBox>

        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text fs-body-sm">
            Звідси практичний висновок: коли на продакшені знайшли помилку, першим
            питанням має бути не «хто винен», а <strong>«яка перевірка мала її
            спіймати і чому її немає»</strong>. Кожен інцидент — привід дописати тест.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 6. PIPELINE ANATOMY ----------

function PipelineAnatomySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={GitBranch}
          title="Анатомія конвеєра"
          subtitle="Trigger, Job, Step, Artifact"
        />

        <div className="flow-diagram mb-xl fade-in-delay-1">
          <div className="icon-box icon-box--blue">
            <Zap className="icon-box__icon icon-box__icon--blue" />
            <p className="icon-box__title">Подія</p>
            <p className="icon-box__subtitle">push, PR, розклад</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--purple">
            <Server className="icon-box__icon icon-box__icon--purple" />
            <p className="icon-box__title">Завдання</p>
            <p className="icon-box__subtitle">чиста машина</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--green">
            <Play className="icon-box__icon icon-box__icon--green" />
            <p className="icon-box__title">Кроки</p>
            <p className="icon-box__subtitle">по черзі, згори вниз</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--orange">
            <Package className="icon-box__icon" />
            <p className="icon-box__title">Артефакт</p>
            <p className="icon-box__subtitle">що лишилося після</p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">Завдання виконуються паралельно</p>
            <p className="definition__description">
              Якщо між ними не вказано залежності. Два сервіси перевіряються одночасно
              й не чекають один одного
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-3">
            <p className="definition__term definition__term--purple">Кроки — послідовно</p>
            <p className="definition__description">
              Усередині одного завдання, згори вниз. Перший невдалий крок зупиняє решту
            </p>
          </div>
          <div className="definition definition--green fade-in-delay-4">
            <p className="definition__term definition__term--green">Машина чиста щоразу</p>
            <p className="definition__description">
              Нічого не лишається від попереднього запуску. Це і є гарантія
              відтворюваності — і причина, чому потрібен кеш
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-5">
            <p className="definition__term definition__term--orange">Завдання ізольовані</p>
            <p className="definition__description">
              Файл, створений в одному завданні, не видно в іншому. Передати можна
              лише через артефакти
            </p>
          </div>
        </div>

        <HighlightBox color="cyan">
          Остання пара пояснює найчастіше здивування новачка: «я ж зібрав проєкт у
          попередньому завданні, чому наступне його не бачить». Тому що це{' '}
          <strong>інша машина</strong>.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 7. TRIGGERS ----------

function TriggersSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Play}
          title="Тригери"
          subtitle="What Starts the Pipeline"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={GitBranch}
            title="Push у гілку"
            subtitle="Найчастіший"
            description="Кожна відправка змін запускає перевірку. Для основної гілки зазвичай ще й розгортання"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={CheckCircle2}
            title="Pull request"
            subtitle="Головний для командної роботи"
            description="Перевіряє результат злиття, а не саму гілку. Саме ці перевірки роблять обов'язковими"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Clock}
            title="За розкладом"
            subtitle="Періодично"
            description="Нічні прогони довгих тестів, перевірка залежностей на нові вразливості"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Zap}
            title="Вручну"
            subtitle="За кнопкою"
            description="Розгортання, разові операції обслуговування. Часто з підтвердженням від відповідальної людини"
            color="orange"
            delay={4}
          />
        </div>

        <div className="outlined-card outlined-card--blue mb-base fade-in-delay-5">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-blue">Тригер за міткою версії</strong> — окремий
            випадок push, який зазвичай запускає випуск: збірку релізного артефакта й
            розгортання в робоче середовище. Так відділяють «перевірили» від «випустили».
          </p>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Найдорожча помилка з тригерами — запускати все на кожну подію. Повний прогон
          на кожен коміт у чернетку витрачає час людей і хвилини виконавців. Тригери
          обмежують гілками, шляхами й типами подій.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 8. JOBS, STEPS, ARTIFACTS ----------

function JobsStepsArtifactsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Package}
          title="Завдання, кроки, артефакти"
          subtitle="Same Pipeline, Two Syntaxes"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
            Один і той самий конвеєр у двох системах. Слова різні —{' '}
            <strong>структура однакова</strong>
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="GitHub Actions" color="blue">
{`on:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - run: npm ci
      - run: npm test`}
          </CodeBlock>

          <CodeBlock title="GitLab CI" color="orange">
{`test:
  stage: test
  image: node:24
  script:
    - npm ci
    - npm test
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"`}
          </CodeBlock>
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">Що спільного</p>
            <p className="definition__description">
              Подія-тригер, іменоване завдання, середовище виконання, послідовність
              команд. Ці чотири речі є в кожній системі CI без винятку
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-3">
            <p className="definition__term definition__term--orange">Що відрізняється</p>
            <p className="definition__description">
              Де оголошується тригер, як називається середовище, чи є поняття готових
              переиспользовуваних кроків. Отримання коду в GitLab неявне, тут — окремий крок
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--purple mb-base fade-in-delay-4">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-purple">Дві форми кроку в Actions:</strong>{' '}
            <span className="font-mono">run</span> — власна команда в оболонці, те саме,
            що ви набрали б у терміналі. <span className="font-mono">uses</span> —
            готовий чужий крок із обов'язковою явною версією. У GitLab другої форми
            немає взагалі: там усе — команди, а переиспользування йде через включення
            файлів.
          </p>
        </div>

        <div className="outlined-card outlined-card--orange mb-base fade-in-delay-5">
          <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
            Артефакти — те, що переживає завдання
          </h3>
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Зібраний застосунок, звіт про покриття, результати тестів, журнали
            невдалого прогону. Зберігаються поза машиною-виконавцем, доступні для
            завантаження й для наступних завдань. Мають строк зберігання. Поняття
            однакове в обох системах, відрізняється лише спосіб оголошення.
          </p>
        </div>

        <HighlightBox color="cyan">
          Практична порада, яка економить години: зберігайте артефакти{' '}
          <strong>невдалих</strong> прогонів — журнали, скріншоти, дампи. Інакше
          доведеться відтворювати збій наосліп, а він може й не повторитися.
        </HighlightBox>
      </div>
    </div>
  );
}

// ============================================================
// LECTURE 4 — BLOCK: FAST PIPELINE
// Slides 9-13 (after inserting CiSystemsSlide as #3).
// Replace: RunnersSlide, MatrixSlide, CachingSlide,
//          PathFiltersSlide, SecretsSlide
// Add to the lucide-react import:
//   Cpu, Grid3x3, Database, FolderTree, KeyRound, Timer, EyeOff
// ============================================================

// ---------- 9. RUNNERS ----------

function RunnersSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Cpu}
          title="Де це виконується"
          subtitle="Runners"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Кожне завдання отримує <strong>чисту віртуальну машину</strong>, живе
            кілька хвилин і зникає разом з усім, що на ній лишилося. Саме тому конвеєр
            відтворюваний — і саме тому повільний без кешу.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <CheckCircle2 className="icon-lg text-green" />
              <h3 className="font-heading fs-section font-bold text-green">
                Виконавці платформи
              </h3>
            </div>
            <p className="fs-body text-secondary mb-base">
              Надає сама система CI. Нічого не треба обслуговувати.
            </p>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Готові образи з типовим набором ПЗ</p>
              <p className="fs-body text-secondary">Безкоштовно для публічних репозиторіїв</p>
              <p className="fs-body text-secondary">Обмежені за пам'яттю й процесором</p>
            </div>
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-3">
            <div className="flex items-center gap-sm mb-base">
              <Server className="icon-lg text-purple" />
              <h3 className="font-heading fs-section font-bold text-purple">
                Власні виконавці
              </h3>
            </div>
            <p className="fs-body text-secondary mb-base">
              Ваші машини, підключені до системи CI.
            </p>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Доступ до внутрішньої мережі</p>
              <p className="fs-body text-secondary">Потужніше залізо, свій набір ПЗ</p>
              <p className="fs-body text-secondary">Обслуговування й безпека — на вас</p>
            </div>
          </div>
        </div>

        <div className="outlined-card outlined-card--orange mb-base fade-in-delay-4">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-orange">Пастка з образом виконавця:</strong>{' '}
            мітка на кшталт <span className="font-mono">ubuntu-latest</span> означає
            «остання підтримувана версія», і вона змінюється. Одного дня конвеєр падає
            без жодних змін у вашому коді — просто оновився образ. Для стабільних
            конвеєрів указують конкретну версію.
          </p>
        </div>

        <HighlightBox color="cyan">
          Хвилини виконавців — ресурс, який рахують. Для публічних репозиторіїв вони
          безкоштовні, для приватних входять у квоту плану. Тому наступні три слайди —
          про те, як не витрачати їх дарма.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 10. MATRIX ----------

function MatrixSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Grid3x3}
          title="Матрична стратегія"
          subtitle="One Definition, Many Runs"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Коли одне й те саме треба зробити для кількох сервісів, версій або
          операційних систем — не копіюйте завдання. Опишіть його один раз і
          перелічіть варіанти.
        </p>

        <CodeBlock title="Два сервіси одним описом" color="purple">
{`jobs:
  test:
    strategy:
      fail-fast: false
      matrix:
        service: [api, notifier]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - run: make test
        working-directory: ./\${{ matrix.service }}`}
        </CodeBlock>

        <div className="slide-grid slide-grid--2col mt-xl mb-base">
          <div className="definition definition--green fade-in-delay-2">
            <p className="definition__term definition__term--green">Що дає</p>
            <p className="definition__description">
              Один опис замість двох копій. Додати третій сервіс — це один рядок,
              а не ще двадцять. Усі варіанти виконуються паралельно
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-3">
            <p className="definition__term definition__term--orange">fail-fast</p>
            <p className="definition__description">
              За замовчуванням увімкнено: перший невдалий варіант зупиняє решту.
              Для перевірки коду зазвичай вимикають — краще побачити всі помилки одразу
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--red mb-base fade-in-delay-4">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-red">Комбінаторний вибух:</strong> три версії мови
            × три операційні системи × два сервіси — це вісімнадцять запусків на кожен
            коміт. Матриця множить, а не додає. Перелічуйте лише те, що справді
            потрібно перевіряти.
          </p>
        </div>

        <HighlightBox color="cyan">
          Матриця корисна лише тоді, коли варіанти <strong>справді однакові</strong>.
          Якщо для одного сервісу потрібні інші кроки — це вже не матриця, а два різні
          завдання, і не варто натягувати одне на друге умовами.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 11. CACHING ----------

function CachingSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Database}
          title="Кешування залежностей"
          subtitle="The Cheapest Speedup"
        />

        <div className="outlined-card outlined-card--gradient-green-blue mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Машина чиста щоразу — отже, залежності завантажуються з нуля на кожен
            запуск. Для середнього проєкту це <strong>більша частина часу конвеєра</strong>,
            і саме її прибирають першою.
          </p>
        </div>

        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Ключ будується з файлу блокування версій</p>
              <p className="fs-body-sm text-muted mt-sm">
                Хеш від <span className="font-mono">package-lock.json</span> чи його
                аналога. Залежності не змінилися — ключ той самий — кеш підходить
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__content">
              <p className="numbered-list__text">Змінився файл блокування — змінився ключ</p>
              <p className="fs-body-sm text-muted mt-sm">
                Кеш не знайдено, залежності ставляться заново, і зберігається новий
                кеш. Далі знову швидко
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__content">
              <p className="numbered-list__text">Кешують сховище пакетів, а не папку залежностей</p>
              <p className="fs-body-sm text-muted mt-sm">
                Так надійніше: встановлення все одно виконується, але без завантаження
                з мережі
              </p>
            </div>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Кеш із неправильним ключем гірший за його відсутність: конвеєр підтягує
            старі залежності й падає незрозуміло. Ключ має однозначно описувати вміст
          </HighlightBox>
          <HighlightBox color="red" icon={XCircle}>
            Ніколи не кешуйте результати збірки як спосіб «пришвидшити тести» —
            саме так у конвеєр потрапляє код, якого вже немає в репозиторії
          </HighlightBox>
        </div>

        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text fs-body-sm">
            Готові дії налаштування середовища зазвичай уміють кешувати самі — часто
            достатньо одного параметра замість окремого кроку. У лабораторній роботі
            варто заміряти час конвеєра до й після: різниця буде наочною.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 12. PATH FILTERS ----------

function PathFiltersSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={FolderTree}
          title="Фільтри за шляхами"
          subtitle="Do Not Rebuild What Did Not Change"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          У репозиторії з кількома сервісами зміна в одному не має запускати перевірку
          решти. Інакше правка тексту в документації прогонить увесь набір тестів.
        </p>

        <CodeBlock title="Запуск лише за змінами в потрібних теках" color="blue">
{`on:
  pull_request:
    paths:
      - 'api/**'
      - '.github/workflows/api.yml'

  # окремий файл для другого сервісу
  # з власним переліком шляхів`}
        </CodeBlock>

        <div className="slide-grid slide-grid--2col mt-xl mb-base">
          <div className="definition definition--green fade-in-delay-2">
            <p className="definition__term definition__term--green">Що виграємо</p>
            <p className="definition__description">
              Коротший час очікування, менше витрачених хвилин, чистіший список
              перевірок у pull request
            </p>
          </div>
          <div className="definition definition--red fade-in-delay-3">
            <p className="definition__term definition__term--red">Чим ризикуємо</p>
            <p className="definition__description">
              Зміна в спільному коді зачіпає обидва сервіси, а фільтр запустив лише
              один. Спільні теки треба вписувати в обидва переліки
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--orange mb-base fade-in-delay-4">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-orange">Неочевидна взаємодія з обов'язковими
            перевірками:</strong> якщо перевірка позначена обов'язковою, але не
            запустилася через фільтр, злиття може заблокуватися назавжди —
            система чекає результату, якого не буде. Це вирішується окремим
            завданням-заглушкою, і про це варто знати заздалегідь.
          </p>
        </div>

        <HighlightBox color="cyan">
          Не забудьте додати сам файл конвеєра до переліку шляхів. Інакше зміна в
          ньому не запустить перевірку, і ви не побачите, що щойно його зламали.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 13. SECRETS ----------

function SecretsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={KeyRound}
          title="Секрети в конвеєрі"
          subtitle="Values You Must Not Commit"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Токени, ключі доступу, паролі до реєстру. Вони потрібні конвеєру — і не
            повинні лежати в репозиторії. Ніколи, навіть у приватному:{' '}
            <strong>історію не стирають</strong>.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">Де зберігаються</p>
            <p className="definition__description">
              У сховищі секретів репозиторію або організації. Записати можна,
              прочитати назад — ні: значення доступне лише конвеєру під час виконання
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-3">
            <p className="definition__term definition__term--purple">Маскування в журналах</p>
            <p className="definition__description">
              Система замінює значення секрету зірочками у виводі. Захист корисний,
              але не абсолютний: перекодоване значення вона вже не впізнає
            </p>
          </div>
        </div>

        <div className="numbered-list mb-base">
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">1</div>
            <p className="numbered-list__text">
              Мінімальні права: токен лише на те, що конвеєру справді потрібно
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">2</div>
            <p className="numbered-list__text">
              Секрети недоступні конвеєрам із чужих відгалужень — інакше будь-хто
              відкрив би pull request і забрав їх
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">3</div>
            <p className="numbered-list__text">
              Скомпрометований секрет не «виправляють» — його відкликають і видають новий
            </p>
          </div>
        </div>

        <HighlightBox color="orange" icon={EyeOff}>
          Найчастіший витік — не в коді, а <strong>у виводі команди</strong>: хтось
          додав докладний режим, і токен опинився в журналі публічного конвеєра, який
          видно всім. Перевіряйте, що саме друкують ваші кроки.
        </HighlightBox>
      </div>
    </div>
  );
}

// ============================================================
// LECTURE 4 — BLOCK: WHAT TO CHECK
// Slides 13-17. Replace: TestPyramidSlide, TestPlacementSlide,
//   LintersSlide, CoverageSlide, DependencyAuditSlide
// Add to the lucide-react import:
//   Triangle, Layers, Ruler, PieChart, ShieldAlert, Gauge
// ============================================================

// ---------- 13. TEST PYRAMID ----------

function TestPyramidSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Triangle}
          title="Піраміда тестів"
          subtitle="Many Cheap, Few Expensive"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Тести відрізняються не тільки тим, що перевіряють, а й ціною: часом
          виконання, крихкістю та вартістю підтримки. Форма піраміди — це рекомендація
          щодо пропорції.
        </p>

        <div className="flex flex-col gap-base mb-xl">
          <div className="outlined-card outlined-card--red fade-in-delay-2">
            <div className="flex items-center gap-sm mb-sm">
              <span className="badge badge--solid-red">Мало</span>
              <h3 className="font-heading fs-card-title font-bold text-red">
                Наскрізні
              </h3>
            </div>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Уся система разом, як її бачить користувач. Найповніша перевірка й
              найдорожча: хвилини на прогін, потребує піднятого середовища, ламається
              від дрібних змін інтерфейсу
            </p>
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-3">
            <div className="flex items-center gap-sm mb-sm">
              <span className="badge badge--solid-orange">Помірно</span>
              <h3 className="font-heading fs-card-title font-bold text-orange">
                Інтеграційні
              </h3>
            </div>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Кілька компонентів у зв'язці: сервіс і база, сервіс і черга. Ловлять те,
              чого не бачать модульні — неправильний запит, розбіжність у форматі даних
            </p>
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-4">
            <div className="flex items-center gap-sm mb-sm">
              <span className="badge badge--solid-green">Багато</span>
              <h3 className="font-heading fs-card-title font-bold text-green">
                Модульні
              </h3>
            </div>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Окрема функція чи клас без зовнішніх залежностей. Мілісекунди на прогін,
              точно вказують місце помилки, майже не ламаються без причини
            </p>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Перевернута піраміда — купа наскрізних тестів і майже нічого нижче — виглядає
          солідно, але дає конвеєр, який іде пів години й падає через раз{' '}
          <strong>без зв'язку зі змінами</strong>. Довіру до такого конвеєра втрачають
          швидко.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 14. WHERE TO RUN WHICH LEVEL ----------

function TestPlacementSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Layers}
          title="Який рівень де запускати"
          subtitle="Fast Feedback First"
        />

        <div className="outlined-card outlined-card--gradient-green-blue mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Принцип простий: <strong>найдешевші перевірки — найраніше</strong>. Немає
            сенсу піднімати повне середовище, якщо код не проходить лінтер.
          </p>
        </div>

        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Перед комітом, локально</p>
              <p className="fs-body-sm text-muted mt-sm">
                Форматування й лінтер на змінені файли. Секунди. Хук робить це сам
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__content">
              <p className="numbered-list__text">На кожен pull request</p>
              <p className="fs-body-sm text-muted mt-sm">
                Лінтер, модульні та інтеграційні тести, аудит залежностей. Ціль —
                вкластися в кілька хвилин, поки автор ще дивиться на екран
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__content">
              <p className="numbered-list__text">Після злиття в основну гілку</p>
              <p className="fs-body-sm text-muted mt-sm">
                Складання артефакта, наскрізні тести на розгорнутому середовищі
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__content">
              <p className="numbered-list__text">За розкладом, уночі</p>
              <p className="fs-body-sm text-muted mt-sm">
                Довгі прогони, навантажувальні тести, перевірка залежностей на щойно
                оприлюднені вразливості
              </p>
            </div>
          </div>
        </div>

        <HighlightBox color="cyan">
          Орієнтир для перевірок на pull request — <strong>до десяти хвилин</strong>.
          Довше — і людина перемикається на іншу задачу, а повертається вже без
          контексту. Тоді конвеєр перестає бути зворотним зв'язком і стає перешкодою.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 15. LINTERS AND FORMATTERS ----------

function LintersSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Ruler}
          title="Лінтери й форматери"
          subtitle="Two Different Jobs"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <div className="flex items-center gap-sm mb-base">
              <Ruler className="icon-lg text-blue" />
              <h3 className="font-heading fs-section font-bold text-blue">
                Форматер
              </h3>
            </div>
            <p className="fs-body text-secondary mb-base">
              Приводить код до єдиного вигляду: відступи, лапки, довжина рядка.
              Не думає про зміст.
            </p>
            <p className="fs-body-sm text-muted" style={{ margin: 0 }}>
              Головна цінність — припиняє суперечки про стиль у рецензіях
            </p>
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <ShieldAlert className="icon-lg text-purple" />
              <h3 className="font-heading fs-section font-bold text-purple">
                Лінтер
              </h3>
            </div>
            <p className="fs-body text-secondary mb-base">
              Шукає підозрілі конструкції: невикористана змінна, недосяжний код,
              порівняння, яке завжди істинне.
            </p>
            <p className="fs-body-sm text-muted" style={{ margin: 0 }}>
              Ловить справжні дефекти, а не лише оформлення
            </p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="definition definition--green fade-in-delay-3">
            <p className="definition__term definition__term--green">Конфігурація в репозиторії</p>
            <p className="definition__description">
              Правила лежать поруч із кодом і однакові для всіх — для редактора, для
              хука й для конвеєра. Інакше в кожного своє уявлення про правильне
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-4">
            <p className="definition__term definition__term--orange">Автовиправлення в CI</p>
            <p className="definition__description">
              У конвеєрі лінтер лише <strong>перевіряє</strong> й повертає помилку.
              Виправляти код за автора під час збірки — погана ідея: він не побачить,
              що саме змінилося
            </p>
          </div>
        </div>

        <HighlightBox color="red" icon={XCircle}>
          Найгірший варіант — увімкнути лінтер на старому проєкті з максимальною
          суворістю. Дві тисячі попереджень, які ніхто не читає, і команда швидко
          навчається їх ігнорувати. Правила додають поступово.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 16. COVERAGE ----------

function CoverageSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={PieChart}
          title="Покриття коду"
          subtitle="A Useful Signal, a Terrible Target"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Покриття показує, які рядки <strong>виконалися</strong> під час тестів.
            Не те, що вони перевірені — лише те, що по них пройшли.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <CheckCircle2 className="icon-lg text-green" />
              <h3 className="font-heading fs-section font-bold text-green">
                Корисно
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Знайти цілі модулі без жодного тесту</p>
              <p className="fs-body text-secondary">Побачити, що покриття падає в новому коді</p>
              <p className="fs-body text-secondary">Підказати, куди подивитися рецензенту</p>
            </div>
          </div>

          <div className="outlined-card outlined-card--red fade-in-delay-3">
            <div className="flex items-center gap-sm mb-base">
              <XCircle className="icon-lg text-red" />
              <h3 className="font-heading fs-section font-bold text-red">
                Шкідливо
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Ставити ціль «90% будь-якою ціною»</p>
              <p className="fs-body text-secondary">Оцінювати роботу людей за цим числом</p>
              <p className="fs-body text-secondary">Вважати високе покриття доказом якості</p>
            </div>
          </div>
        </div>

        <div className="outlined-card outlined-card--orange mb-base fade-in-delay-4">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-orange">Тест, який нічого не перевіряє,</strong>{' '}
            дає таке саме покриття, як і справжній: викликати функцію й не звірити
            результат — рядки виконалися, число зросло. Коли покриття стає метою,
            з'являється саме такий код.
          </p>
        </div>

        <HighlightBox color="cyan">
          Розумний спосіб використання в конвеєрі — не абсолютний поріг, а{' '}
          <strong>покриття нового коду</strong>: змінені рядки мають бути протестовані.
          Тоді старий проєкт поступово покращується, і ніхто не переписує тисячу
          рядків заради числа.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 17. DEPENDENCY AUDIT ----------

function DependencyAuditSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={ShieldAlert}
          title="Аудит залежностей"
          subtitle="Most of Your Code Is Not Yours"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            У типовому проєкті власного коду — відсотки від того, що потрапляє в
            продакшен. Решта прийшла із залежностями, і{' '}
            <strong>вразливості в них ваші</strong>, а не чужі.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">Прямі залежності</p>
            <p className="definition__description">
              Те, що ви свідомо додали. Їх десятки — і ви принаймні знаєте, навіщо
              кожна потрібна
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-3">
            <p className="definition__term definition__term--orange">Транзитивні</p>
            <p className="definition__description">
              Залежності ваших залежностей. Їх сотні, ви їх не обирали й зазвичай
              не знаєте про їх існування — доки не спрацює сканер
            </p>
          </div>
        </div>

        <div className="numbered-list mb-base">
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">1</div>
            <p className="numbered-list__text">
              Перевірка на кожен pull request — щоб нова вразлива залежність не
              потрапила в проєкт непоміченою
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">2</div>
            <p className="numbered-list__text">
              Прогін за розкладом — вразливості оприлюднюють постійно, і вчора чистий
              проєкт сьогодні вже ні
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">3</div>
            <p className="numbered-list__text">
              Файл блокування версій у репозиторії — інакше збірка щоразу тягне різні
              версії, і аудит перевіряє не те, що поїде в продакшен
            </p>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Не кожна знахідка потребує негайних дій: вразливість у інструменті збірки,
          який не потрапляє в готовий образ, — не те саме, що вразливість у бібліотеці,
          що обробляє запити користувачів. Знахідки{' '}
          <strong>класифікують</strong>, а не гасять усі підряд.
        </HighlightBox>
      </div>
    </div>
  );
}

// ============================================================
// LECTURE 4 — BLOCK: MAKING IT MANDATORY
// Slides 18-23. Replace: RequiredChecksSlide, CodeReviewSlide,
//   BranchProtectionSlide, FeedbackSpeedSlide, FlakyTestsSlide,
//   ActionVersionsSlide
// Add to the lucide-react import:
//   Lock, MessageSquare, Users, Timer, Dice5, Tag
// ============================================================

// ---------- 18. REQUIRED CHECKS ----------

function RequiredChecksSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Lock}
          title="Хто вирішує, чи можна злити"
          subtitle="Repository Decides"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-1">
            <h3 className="font-heading fs-section font-bold text-orange mb-sm">
              Червоний хрестик
            </h3>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Тести впали — злити все одно можна. У п'ятницю під реліз хтось зіллє,
              будучи впевненим, що «там просто нестабільний тест»
            </p>
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="font-heading fs-section font-bold text-green mb-sm">
              Заблоковане злиття
            </h3>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Кнопка недоступна. Домовленість стала властивістю системи й більше не
              залежить від дедлайну та настрою
            </p>
          </div>
        </div>

        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">1</div>
            <p className="numbered-list__text">
              Конвеєр запускається хоча б раз — тільки після цього система знає імена його завдань
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">2</div>
            <p className="numbered-list__text">
              У правилах репозиторію в налаштуваннях захисту гілки вмикаєте вимогу успішних перевірок і обираєте потрібні імена
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">3</div>
            <p className="numbered-list__text">
              Вибір зберігається рядком — звідси обидві пастки нижче
            </p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Перейменували завдання — правило шукає стару назву, не знаходить і чекає
            вічно. Після перейменування оновлюйте налаштування гілки
          </HighlightBox>
          <HighlightBox color="red" icon={XCircle}>
            Перевірка, що не запустилася через фільтр за шляхами, теж блокує злиття
            назавжди: результату не буде, а система його чекає
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 19. CODE REVIEW ----------

function CodeReviewSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={MessageSquare}
          title="Code review як частина процесу"
          subtitle="What Machines Cannot Check"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Автоматика перевіряє те, що можна описати правилом. Усе інше — робота
          рецензента, і саме тому рецензія не замінюється конвеєром, а доповнює його.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={CheckCircle2}
            title="Чи вирішує задачу"
            subtitle="Найважливіше"
            description="Код може бути бездоганним і робити не те, що потрібно. Машина цього не побачить ніколи"
            color="green"
            delay={1}
          />
          <InfoCard
            icon={Layers}
            title="Чи зрозуміло за пів року"
            subtitle="Читабельність"
            description="Іменування, структура, коментар там, де рішення неочевидне. Читати будуть частіше, ніж писати"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={ShieldAlert}
            title="Що станеться в поганому випадку"
            subtitle="Межові ситуації"
            description="Порожній список, недоступна база, повільна відповідь, одночасні запити"
            color="orange"
            delay={3}
          />
          <InfoCard
            icon={Triangle}
            title="Чи є тест на зміну"
            subtitle="Не число покриття"
            description="Конкретно: чи перевірено те, що змінилося, і чи впаде тест, якщо зміну відкотити"
            color="purple"
            delay={4}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="red" icon={XCircle}>
            «Виглядає добре» без жодного зауваження — не рецензія. Це підпис під
            чужою роботою, за яку тепер відповідаєте й ви
          </HighlightBox>
          <HighlightBox color="cyan">
            Дрібні зауваження про стиль — робота форматера, не людини. Якщо в рецензіях
            сперечаються про лапки, у проєкті бракує форматера
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 20. CODEOWNERS AND BRANCH PROTECTION ----------

function BranchProtectionSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Users}
          title="Власники коду й захист гілок"
          subtitle="Rules That Do Not Depend on Memory"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <div className="flex items-center gap-sm mb-base">
              <Users className="icon-lg text-blue" />
              <h3 className="font-heading fs-section font-bold text-blue">
                Власники коду
              </h3>
            </div>
            <p className="fs-body text-secondary mb-base">
              Файл, що зіставляє шляхи в репозиторії з людьми або командами.
            </p>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Рецензентів призначає система</p>
              <p className="fs-body text-secondary">Зміну в теці інфраструктури побачить той, хто за неї відповідає</p>
              <p className="fs-body text-secondary">Ніхто не забуває покликати потрібну людину</p>
            </div>
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <Lock className="icon-lg text-purple" />
              <h3 className="font-heading fs-section font-bold text-purple">
                Захист гілки
              </h3>
            </div>
            <p className="fs-body text-secondary mb-base">
              Набір умов, без яких зміна не потрапить в основну гілку.
            </p>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Обов'язковий pull request</p>
              <p className="fs-body text-secondary">Схвалення від власників коду</p>
              <p className="fs-body text-secondary">Пройдені перевірки конвеєра</p>
              <p className="fs-body text-secondary">Гілка актуальна щодо основної</p>
              <p className="fs-body text-secondary">Заборона перезапису історії</p>
            </div>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="outlined-card outlined-card--orange fade-in-delay-3">
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              <strong className="text-orange">Скидання застарілих схвалень:</strong>{' '}
              без цієї опції автор отримує схвалення, а потім дописує що завгодно —
              і зміна їде вже неперевіреною
            </p>
          </div>

          <div className="outlined-card outlined-card--blue fade-in-delay-4">
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              <strong className="text-blue">Актуальність гілки:</strong> перевіряється
              не сама гілка, а результат злиття з поточною основною. Інакше дві зміни,
              кожна зелена окремо, разом ламають збірку
            </p>
          </div>
        </div>

        <HighlightBox color="cyan">
          Ці налаштування — теж частина конвеєра, просто описана не в YAML. Разом вони
          дають властивість, заради якої все й будувалося:{' '}
          <strong>в основній гілці не може опинитися неперевірений код</strong>.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 21. FEEDBACK SPEED ----------

function FeedbackSpeedSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Timer}
          title="Швидкість зворотного зв'язку"
          subtitle="The Metric That Decides Everything"
        />

        <div className="outlined-card outlined-card--gradient-green-blue mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Конвеєр цінний рівно настільки, наскільки швидко він відповідає. Повільний
            конвеєр не роблять швидшим — його <strong>обходять</strong>.
          </p>
        </div>

        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">До 10 хвилин — людина чекає</p>
              <p className="fs-body-sm text-muted mt-sm">
                Контекст у голові, виправлення йде одразу
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__content">
              <p className="numbered-list__text">10–30 хвилин — перемикається</p>
              <p className="fs-body-sm text-muted mt-sm">
                Повертається вже з іншою задачею в голові, згадує заново
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__content">
              <p className="numbered-list__text">Понад 30 хвилин — перестає дивитися</p>
              <p className="fs-body-sm text-muted mt-sm">
                Результат подивиться завтра. Або не подивиться
              </p>
            </div>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="definition definition--green fade-in-delay-5">
            <p className="definition__term definition__term--green">Що прискорює</p>
            <p className="definition__description">
              Кеш залежностей, паралельні завдання, фільтри за шляхами, найдешевші
              перевірки першими
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-5">
            <p className="definition__term definition__term--orange">Що сповільнює непомітно</p>
            <p className="definition__description">
              Наскрізні тести на кожен коміт, послідовні завдання без потреби, повне
              середовище там, де вистачило б заглушки
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 22. FLAKY TESTS ----------

function FlakyTestsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Dice5}
          title="Нестабільні тести"
          subtitle="The Fastest Way to Kill Trust"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Тест, який падає через раз без змін у коді, гірший за відсутність тесту.
            Він навчає команду <strong>перезапускати конвеєр</strong> замість того,
            щоб читати помилку.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="definition definition--orange fade-in-delay-2">
            <p className="definition__term definition__term--orange">Час і затримки</p>
            <p className="definition__description">
              Очікування фіксованої кількості секунд замість очікування події.
              На повільній машині-виконавці не встигає
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-2">
            <p className="definition__term definition__term--purple">Порядок виконання</p>
            <p className="definition__description">
              Тест залежить від даних, які лишив попередній. Працює в одному порядку,
              падає в іншому
            </p>
          </div>
          <div className="definition definition--blue fade-in-delay-3">
            <p className="definition__term definition__term--blue">Спільний стан</p>
            <p className="definition__description">
              Одна база на паралельні прогони, той самий файл, той самий порт.
              Локально по черзі — добре, у конвеєрі одночасно — ні
            </p>
          </div>
          <div className="definition definition--cyan fade-in-delay-3">
            <p className="definition__term definition__term--cyan">Зовнішній світ</p>
            <p className="definition__description">
              Звернення до справжнього стороннього сервісу. Він недоступний — падає
              ваш тест, хоча ваш код не змінювався
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--orange mb-base fade-in-delay-4">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-orange">Автоматичний перезапуск</strong> здається
            рішенням і насправді ним не є: він ховає проблему й дає їй жити роками.
            Прийнятний лише як тимчасовий захід — із заведеною задачею на виправлення.
          </p>
        </div>

        <HighlightBox color="cyan">
          Робочий підхід: нестабільний тест <strong>виносять</strong> з обов'язкових
          перевірок і одразу заводять на нього задачу. Так конвеєр лишається
          вартим довіри, а проблема — видимою.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 23. ACTION VERSIONS ----------

function ActionVersionsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Tag}
          title="Версії дій і ланцюг постачання"
          subtitle="You Are Running Someone Else's Code"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Кожен готовий крок у конвеєрі — <strong>чужий код із доступом до вашого
            репозиторію й секретів</strong>. Це зручно й це ризик, який варто розуміти.
          </p>
        </div>

        <div className="flex flex-col gap-base mb-xl">
          <div className="outlined-card outlined-card--red fade-in-delay-2">
            <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
              Без версії або за рухомою міткою
            </h3>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Автор дії оновив її — ви автоматично виконуєте новий код, якого не
              бачили. Якщо його обліковий запис зламали, ви виконуєте код зловмисника
            </p>
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-3">
            <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
              За мажорною версією
            </h3>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Компроміс, який використовують найчастіше: виправлення приходять самі,
              несумісні зміни — ні. Прийнятно для дій від перевірених авторів
            </p>
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-4">
            <h3 className="font-heading fs-card-title font-bold text-green mb-sm">
              За хешем коміту
            </h3>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Найнадійніше: ви виконуєте рівно той код, який перевіряли. Оновлення —
              свідома дія. Так роблять там, де ціна компрометації висока
            </p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Те саме стосується образу виконавця: рухома мітка на кшталт «остання
            версія» одного дня зламає конвеєр без жодних змін у вашому коді
          </HighlightBox>
          <HighlightBox color="purple">
            До цієї теми повернемось у лекції про безпеку — там вона називається
            захистом ланцюга постачання й стосується не лише конвеєра
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// LECTURE 4 — BLOCK: OUTRO
// Slides 24-26. Replace: CommonMistakesSlide, SummarySlide,
//   QuestionsSlide
// Add to the lucide-react import:
//   AlertTriangle, BookOpen, HelpCircle, CheckCircle2 (already there)
// ============================================================

// ---------- 24. COMMON MISTAKES ----------

function CommonMistakesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={AlertTriangle}
          title="Типові помилки"
          subtitle="What Kills a Pipeline"
        />

        <div className="slide-grid slide-grid--2col">
          <div className="flex flex-col gap-base">
            <div className="outlined-card outlined-card--red fade-in-delay-1">
              <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
                Перевірка, яку можна проігнорувати
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Червоний хрестик без блокування злиття — це порада. Під тиском релізу
                поради не працюють
              </p>
            </div>

            <div className="outlined-card outlined-card--red fade-in-delay-2">
              <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
                Конвеєр на пів години
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Його не роблять швидшим — його обходять. Кеш, паралельність і фільтри
                не оптимізація, а умова того, що конвеєром користуватимуться
              </p>
            </div>

            <div className="outlined-card outlined-card--red fade-in-delay-3">
              <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
                Життя з нестабільним тестом
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Команда вчиться натискати «перезапустити» замість читати помилку. Далі
                так само перезапустять справжній збій
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-base">
            <div className="outlined-card outlined-card--orange fade-in-delay-2">
              <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                Покриття як ціль
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Щойно число стає метою, з'являються тести, які нічого не перевіряють.
                Показник росте, якість — ні
              </p>
            </div>

            <div className="outlined-card outlined-card--orange fade-in-delay-3">
              <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                Рухомі версії всюди
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Образ виконавця й чужі дії без закріплення версії. Одного ранку
                конвеєр падає, хоча ви нічого не міняли
              </p>
            </div>

            <div className="outlined-card outlined-card--orange fade-in-delay-4">
              <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                Довіра до зеленого
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Зелений конвеєр означає, що пройшли ваші перевірки. Не «код
                правильний» і не «можна випускати»
              </p>
            </div>
          </div>
        </div>

        <HighlightBox color="blue">
          П'ять із шести — це не помилки в налаштуванні, а помилки в{' '}
          <strong>очікуваннях</strong>. Конвеєр не робить якість сам, він лише
          виконує ті перевірки, які ви в нього поклали, і рівно тоді, коли ви
          зробили їх обов'язковими.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 25. SUMMARY ----------

function SummarySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={BookOpen} title="Підсумки" subtitle="Key Takeaways" />

        <div className="summary-list">
          <div className="summary-list__item fade-in-delay-1">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Модель однакова скрізь:</strong> подія → завдання на чистій
              машині → кроки по черзі → артефакти. Змінюється синтаксис, не поняття
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-2">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Цінність — у швидкості відповіді.</strong> До десяти хвилин
              людина чекає, після тридцяти перестає дивитися
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-3">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Матриця, кеш і фільтри</strong> — три інструменти, якими
              конвеєр тримають швидким, коли проєкт росте
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-4">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Найдешевші перевірки — найраніше:</strong> форматер і лінтер
              перед тестами, модульні перед наскрізними
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-5">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Конвеєр повідомляє, репозиторій вирішує.</strong> Блокує злиття
              не перевірка, а правило, яке ви ввімкнули вручну
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-5">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Зелений ≠ правильний.</strong> Якість конвеєра дорівнює якості
              перевірок, які ви в нього поклали
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--gradient-green-blue mt-xl fade-in-delay-5">
          <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
            Після інциденту питаємо не «хто винен», а{' '}
            <strong>«якої перевірки бракувало»</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 26. QUESTIONS ----------

function QuestionsSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
      <div className="questions-slide">
        <HelpCircle className="questions-slide__icon" />
        <h2 className="questions-slide__title">Питання?</h2>
        <p className="questions-slide__subtitle">
          Далі — лабораторна робота 4: конвеєр, який блокує злиття зламаного коду
        </p>

        <div className="questions-slide__links">
          <ExtLink href="https://docs.github.com/en/actions" color="blue">
            GitHub Actions — документація
          </ExtLink>
          <ExtLink href="https://docs.gitlab.com/ee/ci/" color="orange">
            GitLab CI — документація
          </ExtLink>
          <ExtLink href="https://martinfowler.com/articles/continuousIntegration.html" color="purple">
            Fowler — Continuous Integration
          </ExtLink>
          <ExtLink href="https://martinfowler.com/articles/practical-test-pyramid.html" color="green">
            Практична піраміда тестів
          </ExtLink>
        </div>
      </div>
    </div>
  );
}
