import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import SlideLink from '../components/SlideLink';
import ExtLink from '../components/ExtLink';
import DataTable from '../components/DataTable';
import {
  Ship, Snowflake, Building2, Gauge, Clock, Stethoscope,
  Target, Activity, RefreshCw, Split, ToggleRight,
  GitBranch, Users, HelpCircle,
  Rocket,
  UserCheck,
  Workflow,
  Package,
  Layers,
  Settings,
  RotateCcw,
  Cloud,
  AlertTriangle,
  Lightbulb,
  Laptop,
  FlaskConical,
  Globe,
  CheckCircle2,
  XCircle,
  KeyRound,
  Lock,
  Database,
  Server,
  Power,
  FileText,
  ScrollText,
  BookOpen,
  Construction,
} from 'lucide-react';

// ============================================
// SLIDES ARRAY
// `selfStudy: true` — slide is left to the student.
// ============================================

const slides = [
  { id: 1, title: 'Титульний слайд', component: TitleSlide },
  { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
  { id: 3, title: 'Delivery проти Deployment', component: DeliveryVsDeploymentSlide },
  { id: 4, title: 'Конвеєр доставки', component: PipelineSlide },
  { id: 5, title: 'Середовища: dev, staging, prod', component: EnvironmentsSlide },
  { id: 6, title: 'Один артефакт, різна конфігурація', component: OneArtifactSlide },
  { id: 7, title: 'Конфігурація й секрети', component: ConfigSlide },
  { id: 8, title: 'Дванадцять факторів', component: TwelveFactorSlide },
  { id: 9, title: 'PaaS: що платформа бере на себе', component: PaasSlide },
  { id: 10, title: 'Огляд PaaS-платформ', component: PaasProvidersSlide, selfStudy: true },
  { id: 11, title: 'Обмеження безкоштовних рівнів', component: FreeTierLimitsSlide, selfStudy: true },
  { id: 12, title: 'Холодний старт', component: ColdStartSlide, selfStudy: true },
  { id: 13, title: 'Перевірки стану', component: HealthChecksSlide },
  { id: '13_1', title: 'Стратегії розгортання', component: StrategiesSlide },
  { id: 14, title: 'Почергове оновлення', component: RollingSlide },
  { id: 15, title: 'Синьо-зелене розгортання', component: BlueGreenSlide },
  { id: 16, title: 'Канаркове розгортання', component: CanarySlide },
  { id: 17, title: 'Прапорці функцій', component: FeatureFlagsSlide },
  { id: 18, title: 'Розгортання без простою', component: ZeroDowntimeSlide },
  { id: 19, title: 'Відкат', component: RollbackSlide },
  { id: 20, title: 'Метрики розгортання', component: DeploymentMetricsSlide },
  { id: 21, title: 'Типові помилки', component: CommonMistakesSlide },
  { id: 22, title: 'Підсумки', component: SummarySlide },
  { id: 23, title: 'Питання?', component: QuestionsSlide },
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

// ---------- 2. OBJECTIVES ----------

function ObjectivesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Target} title="Мета лекції" subtitle="Learning Objectives" />

        <div className="mb-xl">
          <HighlightBox color="blue" icon={Package}>
            На лекції 3 конвеєр навчився перевіряти код, на лекції 5 — збирати образ і класти
            його в реєстр. Тепер довозимо цей образ до користувачів: у різні середовища,
            без простою і з можливістю швидко повернутися назад.
          </HighlightBox>
        </div>

        <div className="slide-grid slide-grid--3col">
          <InfoCard
            icon={GitBranch}
            title="Доставка"
            subtitle="Delivery"
            description="Розрізняти безперервну доставку й безперервне розгортання та будувати конвеєр із ручним підтвердженням"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={Settings}
            title="Конфігурація"
            subtitle="Configuration"
            description="Виносити налаштування й секрети за межі образу, щоб один артефакт працював у будь-якому середовищі"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Cloud}
            title="Платформа"
            subtitle="PaaS"
            description="Розуміти, що керована платформа робить за вас і за що ви відповідаєте самі"
            color="cyan"
            delay={3}
          />
          <InfoCard
            icon={Layers}
            title="Стратегії"
            subtitle="Deployment strategies"
            description="Обирати між почерговим, синьо-зеленим і канарковим розгортанням під конкретний ризик"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={RotateCcw}
            title="Відкат"
            subtitle="Rollback"
            description="Планувати повернення до попередньої версії як звичайну частину розгортання, а не аварійний захід"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={Target}
            title="Вимірювання"
            subtitle="Metrics"
            description="Оцінювати процес доставки за чотирма метриками DORA, а не за відчуттями"
            color="blue"
            delay={6}
          />
        </div>
      </div>
    </div>
  );
}

// ---------- 3. DELIVERY VS DEPLOYMENT ----------

function DeliveryVsDeploymentSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Rocket}
          title="Delivery проти Deployment"
          subtitle="Continuous Delivery vs Continuous Deployment"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Безперервна доставка</h3>
            <p className="text-secondary mb-base">
              Кожна зміна, що пройшла конвеєр, <strong>готова</strong> до продакшну.
              Випускати чи ні — вирішує людина.
            </p>
            <DefBadge term="Коміт" description="CI: лінтер, тести, збірка образу" color="blue" />
            <DefBadge term="Staging" description="розгортається автоматично" color="blue" />
            <DefBadge term="Підтвердження" description="людина натискає Approve" color="orange" />
            <DefBadge term="Prod" description="розгортається після рішення" color="blue" />
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Безперервне розгортання</h3>
            <p className="text-secondary mb-base">
              Кожна зміна, що пройшла конвеєр, <strong>сама</strong> потрапляє
              в продакшн. Людини між мерджем і користувачами немає.
            </p>
            <DefBadge term="Коміт" description="CI: лінтер, тести, збірка образу" color="green" />
            <DefBadge term="Staging" description="розгортається автоматично" color="green" />
            <DefBadge term="Автоперевірки" description="smoke-тести на staging" color="green" />
            <DefBadge term="Prod" description="розгортається автоматично" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Безперервне розгортання тримається на тестах. Якщо вони пропускають помилки,
            автоматичний прод означає автоматичні інциденти. Тому більшість команд
            починає з доставки.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Розгорнути (deploy) і випустити (release) — не одне й те саме. Код може вже
            працювати в проді, але бути вимкненим для користувачів
            (<SlideLink to={17} />).
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 4. DELIVERY PIPELINE ----------

function PipelineSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Workflow} title="Конвеєр доставки" subtitle="Delivery Pipeline" />

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Package}
            title="Артефакт"
            subtitle="Artifact"
            description="Образ із sha-тегом, уже опублікований у реєстрі. Конвеєр нічого не перезбирає і явно передає платформі, який саме тег розгорнути"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={Layers}
            title="Середовище"
            subtitle="GitHub Environment"
            description="Іменоване середовище у репозиторії: власні секрети, власні правила, історія розгортань"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={UserCheck}
            title="Підтвердження"
            subtitle="Approval gate"
            description="Job, що посилається на захищене середовище, чекає, доки хтось із Required reviewers не натисне Approve"
            color="orange"
            delay={3}
          />
        </div>

        <CodeBlock title=".github/workflows/delivery.yml — фрагмент">{`
deploy-staging:
  needs: publish                  # publish exposes the pushed image as an output
  environment: staging
  runs-on: ubuntu-latest
  steps:
    - name: Deploy the exact image that was built
      run: |
        IMG=$(jq -rn --arg v "$IMAGE" '$v|@uri')   # URL-encode
        curl -fsS -X POST "$DEPLOY_HOOK&imgURL=$IMG"
      env:
        DEPLOY_HOOK: \${{ secrets.DEPLOY_HOOK }}
        IMAGE: \${{ needs.publish.outputs.image }}

deploy-production:
  needs: [publish, deploy-staging]
  environment: production         # protection rules live in repo Settings → Environments
  # same steps: the same IMAGE, its own DEPLOY_HOOK
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Lightbulb}>
            Секрет <code>DEPLOY_HOOK</code> один за назвою, але в кожному середовищі має своє
            значення. Кроки однакові, різниться лише середовище — це та сама ідея, що
            й на <SlideLink to={6} />.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Required reviewers без GitHub Enterprise працюють лише в публічних
            репозиторіях.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 5. ENVIRONMENTS ----------

function EnvironmentsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Layers} title="Середовища: dev, staging, prod" subtitle="Environments" />

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Laptop}
            title="Розробка"
            subtitle="dev"
            description="Ноутбук розробника: compose.yaml з лекції 5, фейкові дані. Тут можна ламати що завгодно"
            color="green"
            delay={1}
          />
          <InfoCard
            icon={FlaskConical}
            title="Передпрод"
            subtitle="staging"
            description="Прод у мініатюрі: той самий образ, ті самі версії сервісів, тестові дані. Сюди автоматично потрапляє кожен мердж"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={Globe}
            title="Продакшн"
            subtitle="production"
            description="Реальні користувачі й реальні дані. Зміни потрапляють сюди лише через конвеєр, руками нічого не правлять"
            color="purple"
            delay={3}
          />
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Може відрізнятися</h3>
            <DefBadge term="Розмір" description="1 інстанс на staging, 3 у проді" color="green" />
            <DefBadge term="Дані" description="тестові проти реальних" color="green" />
            <DefBadge term="Адреси й секрети" description="свої в кожному середовищі" color="green" />
            <DefBadge term="Рівень логування" description="debug проти info" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-5">
            <h3 className="info-card__title mb-sm">Має збігатися</h3>
            <DefBadge term="Образ" description="той самий sha-тег" color="orange" />
            <DefBadge term="Версії сервісів" description="однаковий Postgres і Redis скрізь" color="orange" />
            <DefBadge term="Схема БД" description="ті самі міграції" color="orange" />
            <DefBadge term="Запуск" description="та сама команда, порт, health check" color="orange" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Кожна відмінність між staging і продом — місце, де помилка сховається від
            перевірки. Фраза «на staging усе працювало» зазвичай означає, що середовища
            розійшлися.
          </HighlightBox>
          <HighlightBox color="blue" icon={Database}>
            У кожного середовища своя база. Staging ніколи не підключається до прод-даних,
            навіть «лише на читання».
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 6. ONE ARTIFACT ----------

function OneArtifactSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Package}
          title="Один артефакт, різна конфігурація"
          subtitle="Build once, deploy many"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-1">
            <h3 className="info-card__title mb-sm">staging</h3>
            <DefBadge term="Образ" description="wishlist-api:sha-1a2b3c4" color="blue" />
            <DefBadge term="DB_HOST" description="адреса staging-бази" color="orange" />
            <DefBadge term="DB_PASSWORD" description="секрет середовища staging" color="orange" />
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">production</h3>
            <DefBadge term="Образ" description="wishlist-api:sha-1a2b3c4" color="blue" />
            <DefBadge term="DB_HOST" description="адреса прод-бази" color="purple" />
            <DefBadge term="DB_PASSWORD" description="секрет середовища production" color="purple" />
          </div>
        </div>

        <div className="mb-xl">
          <HighlightBox color="green" icon={CheckCircle2}>
            Те, що перевірили на staging, байт у байт поїде в прод. Перезбірка під
            кожне середовище дає новий артефакт, якого ніхто не перевіряв: могли
            оновитися базовий образ чи залежності.
          </HighlightBox>
        </div>

        <CodeBlock title="пастка: адреса API вже всередині бандла">{`
# lecture 5: VITE_API_BASE is passed as a build arg
$ docker build --build-arg VITE_API_BASE=https://wishlist-api-staging.onrender.com ...

# Vite inlines VITE_* values at build time
$ grep -o 'https://[^"]*onrender.com' dist/assets/*.js
dist/assets/index-Bx7f2k.js:https://wishlist-api-staging.onrender.com
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={XCircle}>
            Код фронтенду виконується в браузері, а не в контейнері, тож змінні середовища
            він не бачить. Із <code>ARG</code> виходить окремий образ для кожного
            середовища, і принцип ламається.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Два виходи: відносний шлях <code>/api</code> плюс проксі в nginx, адресу
            якого задають під час запуску, або <code>config.js</code>, який контейнер
            генерує при старті.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 7. CONFIG AND SECRETS ----------

function ConfigSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={KeyRound} title="Конфігурація й секрети" subtitle="Config and Secrets" />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Конфігурація</h3>
            <p className="text-secondary mb-base">
              Відрізняється між середовищами, але нічого не відкриває стороннім.
            </p>
            <DefBadge term="DB_HOST, DB_NAME" description="куди підключатися" color="blue" />
            <DefBadge term="LOG_LEVEL" description="debug на staging, info у проді" color="blue" />
            <DefBadge term="API_BASE" description="адреса бекенду для фронтенду" color="blue" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Секрети</h3>
            <p className="text-secondary mb-base">
              Дають доступ. Хто знає значення, той може діяти від імені системи.
            </p>
            <DefBadge term="DB_PASSWORD" description="доступ до даних" color="orange" />
            <DefBadge term="DEPLOY_HOOK" description="право розгортати" color="orange" />
            <DefBadge term="Токени API" description="доступ до сторонніх сервісів" color="orange" />
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Laptop}
            title="Ноутбук"
            subtitle="dev"
            description="Файл api.env поруч із compose.yaml і обов'язково в .gitignore"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Workflow}
            title="Конвеєр"
            subtitle="GitHub secrets"
            description="Лише те, що потрібно для розгортання: DEPLOY_HOOK, а якщо конвеєр запускає міграції, ще й доступ до бази свого середовища"
            color="purple"
            delay={4}
          />
          <InfoCard
            icon={Server}
            title="Середовище запуску"
            subtitle="Runtime"
            description="DB_PASSWORD та інше, що потрібно застосунку. Те, що запускає контейнер, передає це як змінні середовища"
            color="cyan"
            delay={5}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={Lock}>
            Секрету не місце в git, в образі (<code>ENV</code> і <code>ARG</code> видно
            в <code>docker history</code>) і в логах. Якщо він туди потрапив, спершу
            його змінюють, а вже потім чистять історію.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Усе, що потрапило в бандл фронтенду, бачить кожен відвідувач у DevTools.
            Тож у фронтенді не буває секретів, лише публічна конфігурація.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 8. TWELVE-FACTOR APP ----------

function TwelveFactorSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={BookOpen} title="Дванадцять факторів" subtitle="The Twelve-Factor App" />

        <p className="fs-lg text-secondary mb-xl">
          Маніфест, який у 2011 році сформулювали в Heroku (одна з перших хмарних
          платформ, де достатньо було зробити git push, щоб застосунок запрацював): як
          писати застосунок, щоб його було легко розгортати на будь-якій платформі.
          Шість факторів, що стосуються сьогоднішньої лекції:
        </p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Settings}
            title="III. Конфігурація"
            subtitle="Config"
            description="Налаштування — у змінних середовища, не в коді. Перевірка: чи можна завтра відкрити репозиторій, нічого не розкривши?"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={Database}
            title="IV. Зовнішні сервіси"
            subtitle="Backing services"
            description="Postgres і Redis — підключені ресурси за адресою. Перейти на іншу базу означає змінити DB_HOST, а не код"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Package}
            title="V. Збірка, реліз, запуск"
            subtitle="Build, release, run"
            description="Збірка дає образ, реліз — це образ плюс конфігурація середовища. Змінили лише конфігурацію — це вже новий реліз"
            color="cyan"
            delay={3}
          />
          <InfoCard
            icon={FileText}
            title="VI. Процеси без стану"
            subtitle="Processes"
            description="Сесії й завантажені файли — у Redis, Postgres чи сховищі, а не на диску інстансу. Диск зникне при перезапуску"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={Power}
            title="IX. Одноразовість"
            subtitle="Disposability"
            description="Швидкий старт і акуратна зупинка за SIGTERM. Платформа може перезапустити інстанс будь-коли"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={ScrollText}
            title="XI. Логи"
            subtitle="Logs"
            description="Застосунок пише в stdout. Куди логи підуть далі — у файли, Loki чи Elasticsearch — вирішує середовище"
            color="blue"
            delay={6}
          />
        </div>

        <HighlightBox color="blue" icon={Lightbulb}>
          Решта шість факторів — на <ExtLink href="https://12factor.net/uk/">12factor.net</ExtLink>.
          Маніфест старший за Kubernetes, але
          досі точно описує, чого будь-яка платформа чекає від застосунку: на лекціях про Kubernetes
          ви побачите ті самі вимоги.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 9. PAAS ----------

function PaasSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Cloud}
          title="PaaS: що платформа бере на себе"
          subtitle="Platform as a Service"
        />

        <p className="fs-lg text-secondary mb-xl">
          Ви даєте образ або репозиторій і конфігурацію, решту робить платформа.
          Класичний приклад — Heroku з її git push. Сучасні платформи
          розглянуто на <SlideLink to={10} />.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Відповідальність платформи</h3>
            <DefBadge term="Запуск" description="контейнер з образу, перезапуск при падінні" color="green" />
            <DefBadge term="Мережа" description="домен, HTTPS-сертифікат, балансування" color="green" />
            <DefBadge term="Розгортання" description="нова версія отримує трафік, лише коли пройшла перевірку стану" color="green" />
            <DefBadge term="Логи й метрики" description="збирає stdout, показує базові графіки" color="green" />
            <DefBadge term="Масштабування" description="ще один інстанс — це одне налаштування" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Лишається на вас</h3>
            <DefBadge term="Образ" description="залежності, вразливості, розмір" color="orange" />
            <DefBadge term="Перевірка стану" description="ендпоінт, що чесно каже, чи готовий сервіс" color="orange" />
            <DefBadge term="Поведінка процесу" description="швидкий старт, акуратна зупинка за SIGTERM" color="orange" />
            <DefBadge term="Дані" description="міграції, бекапи, сама база" color="orange" />
            <DefBadge term="Конфігурація" description="які змінні й секрети задано в якому середовищі" color="orange" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Layers}>
            Віртуальна машина, Kubernetes, PaaS: що далі в цьому ряду,
            то більше бере на себе платформа і то менше лишається контролю.
          </HighlightBox>
          <HighlightBox color="purple" icon={Lightbulb}>
            На лекціях 9–10 кожен рядок зеленої колонки стане вашою роботою:
            у Kubernetes усе це описують самі, у YAML.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 10. PAAS PROVIDERS (self-study) ----------

function PaasProvidersSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Building2}
          title="Огляд PaaS-платформ"
          subtitle="Стан на листопад 2026 — умови змінюються, перевіряйте на сайтах"
        />

        <p className="fs-lg text-secondary mb-base">
          Для API: платформи, що запускають контейнер із вебсервером.
        </p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Cloud}
            title="Render"
            subtitle="використовуємо на лабі"
            description="Безкоштовні вебсервіси засинають після 15 хвилин без запитів. Статичні сайти безкоштовні без обмеження кількості"
            color="green"
            delay={1}
          />
          <InfoCard
            icon={Cloud}
            title="Northflank"
            subtitle="безкоштовний план"
            description="Два постійно увімкнені сервіси й одна база без засинання. Для реєстрації потрібна банківська картка"
            color="cyan"
            delay={2}
          />
          <InfoCard
            icon={Cloud}
            title="Railway"
            subtitle="пробний кредит"
            description="5 доларів на перші 30 днів, далі 1 долар на місяць. Вистачить на демо, на семестр — ні"
            color="blue"
            delay={3}
          />
          <InfoCard
            icon={Cloud}
            title="Fly.io"
            subtitle="без безкоштовного рівня"
            description="Нові акаунти отримують лише короткий пробний період, далі оплата за використання"
            color="purple"
            delay={4}
          />
          <InfoCard
            icon={Cloud}
            title="Koyeb"
            subtitle="лише платні плани"
            description="Після купівлі компанією Mistral AI у лютому 2026 року нових користувачів на безкоштовний план не беруть"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={Cloud}
            title="Heroku"
            subtitle="режим підтримки"
            description="Безкоштовного плану немає з 2022 року. З лютого 2026 року Salesforce не розвиває платформу, лише підтримує"
            color="orange"
            delay={6}
          />
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-7">
            <h3 className="info-card__title mb-sm">Для фронтенду</h3>
            <DefBadge term="Статичний хостинг" description="Render, Cloudflare Pages, GitHub Pages, Vercel" color="blue" />
            <DefBadge term="Netlify" description="кредити: близько 20 деплоїв на місяць, далі сайт на паузі" color="orange" />
            <DefBadge term="Що віддаємо" description="зібраний бандл, без сервера застосунку" color="blue" />
          </div>
          <div className="outlined-card outlined-card--purple fade-in-delay-8">
            <h3 className="info-card__title mb-sm">Для даних</h3>
            <DefBadge term="Neon" description="Postgres, окремий проєкт на середовище" color="purple" />
            <DefBadge term="Upstash" description="Redis через TLS (rediss://)" color="purple" />
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Безкоштовний рівень — маркетинг, а не гарантія: Heroku, Fly.io і Koyeb
          своїх уже позбулися. Тримайте розгортання переносним: Dockerfile
          у репозиторії, конфігурація в змінних середовища, вміння зробити дамп бази.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 11. FREE TIER LIMITS (self-study) ----------

function FreeTierLimitsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Gauge}
          title="Обмеження безкоштовних рівнів"
          subtitle="Стан на листопад 2026 — для стеку нашої лаби"
        />

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Server}
            title="Render"
            subtitle="вебсервіс"
            description="512 MB RAM і 0.1 CPU, один інстанс. 750 годин на місяць на весь робочий простір. Засинає після 15 хвилин без запитів"
            color="green"
            delay={1}
          />
          <InfoCard
            icon={Database}
            title="Neon"
            subtitle="Postgres"
            description="1 GB даних і 100 CU-годин обчислень на місяць для кожного проєкту. Призупиняється після 5 хвилин без запитів"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Database}
            title="Upstash"
            subtitle="Redis"
            description="256 MB даних і 500 тисяч команд на місяць. Для кешу навчального застосунку — з запасом"
            color="cyan"
            delay={3}
          />
        </div>

        <div className="outlined-card outlined-card--orange fade-in-delay-4 mb-xl">
          <h3 className="info-card__title mb-sm">Що буде, коли щось закінчиться</h3>
          <DefBadge term="Години Render" description="усі безкоштовні сервіси робочого простору зупиняються до наступного місяця" color="orange" />
          <DefBadge term="CU-години Neon" description="база цього проєкту не відповідає до наступного розрахункового періоду" color="orange" />
          <DefBadge term="Диск сервісу Render" description="очищається при кожному передеплої, перезапуску й засинанні" color="orange" />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Lightbulb}>
            Два середовища — це два вебсервіси, і вони ділять одні 750 годин.
            Сервіси, що сплять, годин не витрачають, тому засинання тут на користь.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Render прямо пише, що безкоштовні інстанси не для продакшну. Не тримайте
            на безкоштовному рівні нічого, що шкода втратити.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 12. COLD START (self-study) ----------

function ColdStartSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Snowflake} title="Холодний старт" subtitle="Cold Start" />

        <p className="fs-lg text-secondary mb-xl">
          Щоб не тримати ресурси для сервісу, до якого ніхто не звертається, платформа
          зупиняє його. Наступний запит чекає, поки все запуститься знову.
        </p>

        <div className="outlined-card outlined-card--blue fade-in-delay-1 mb-xl">
          <h3 className="info-card__title mb-sm">Що відбувається з першим запитом після паузи</h3>
          <DefBadge term="1. Платформа" description="знаходить місце й запускає контейнер з образу" color="blue" />
          <DefBadge term="2. Застосунок" description="імпортує модулі, читає конфігурацію, відкриває порт" color="blue" />
          <DefBadge term="3. База" description="перше підключення будить призупинений Neon" color="blue" />
          <DefBadge term="4. Відповідь" description="лише тепер запит оброблено" color="blue" />
        </div>

        <CodeBlock title="той самий запит двічі поспіль (значення приблизні)">{`
$ curl -o /dev/null -s -w '%{time_total}s\n' https://wishlist-api-staging.onrender.com/health
48.91s      # first request after idle: everything starts from scratch
 
$ curl -o /dev/null -s -w '%{time_total}s\n' https://wishlist-api-staging.onrender.com/health
0.21s       # service is already warm
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={Clock}>
            Наслідки: таймаути в клієнта, впала перевірка стану, «зламане» демо.
            Перед показом розбудіть і застосунок, і базу.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Що допомагає: менший образ і швидший старт (лекція 4), повторні спроби
            підключення до бази, а для справжнього проду — платний план без засинання.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 13. HEALTH CHECKS ----------

function HealthChecksSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Stethoscope} title="Перевірки стану" subtitle="Health Checks" />

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Activity}
            title="Живий?"
            subtitle="Liveness"
            description="Чи процес узагалі відповідає. Якщо перевірка кілька разів поспіль не проходить, платформа його перезапускає"
            color="green"
            delay={1}
          />
          <InfoCard
            icon={CheckCircle2}
            title="Готовий?"
            subtitle="Readiness"
            description="Чи може обслуговувати запити: є з'єднання з базою, завантажено все потрібне. Якщо ні — трафік сюди не йде, але процес не вбивають"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={Clock}
            title="Стартував?"
            subtitle="Startup"
            description="Для повільного старту: поки ця перевірка не пройшла, інші не запускають. Окремо її виділяє Kubernetes"
            color="purple"
            delay={3}
          />
        </div>

        <CodeBlock title="app/health.py — фрагмент">{`
@app.get("/health/live")
def live():
    return {"status": "ok"}              # process is up, nothing else
 
@app.get("/health/ready")
async def ready(response: Response):
    if not await check_db():             # e.g. SELECT 1
        response.status_code = 503       # not ready: send no traffic here
        return {"db": "down"}
    return {"db": "ok"}
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Перевірка liveness не повинна залежати від бази. Інакше, коли база падає,
            платформа зазвичай перезапускає всі інстанси, хоча перезапуск нічого не виправить.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Ті самі перевірки ви вже бачили в <code>healthcheck</code> у Compose
            (лекція 5) і побачите в пробах Kubernetes (лекції 9–10). Тут від них
            залежить, коли нова версія отримає трафік.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 13_1. DEPLOYMENT STRATEGIES ----------

function StrategiesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Layers} title="Стратегії розгортання" subtitle="Deployment Strategies" />

        <p className="fs-lg text-secondary mb-xl">
          Стратегія відповідає на одне питання: як замінити v1 на v2, поки
          користувачі продовжують працювати.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={Power}
            title="Повна заміна"
            subtitle="Recreate"
            description="Зупинити всі копії v1, потім запустити v2. Найпростіше, але між ними сервіс недоступний"
            color="orange"
            delay={1}
          />
          <InfoCard
            icon={RefreshCw}
            title="Почергове оновлення"
            subtitle="Rolling update"
            description="Замінювати копії по одній, щоб сервіс увесь час працював"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={Layers}
            title="Синьо-зелене"
            subtitle="Blue-green"
            description="Підняти v2 поруч із v1 і перемкнути на неї весь трафік одразу"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Split}
            title="Канаркове"
            subtitle="Canary"
            description="Спершу дати v2 невеликій частці користувачів і поступово збільшувати її"
            color="purple"
            delay={4}
          />
        </div>

        <p className="fs-lg text-secondary mb-base">За чим їх порівнюють:</p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Clock}
            title="Простій"
            subtitle="Downtime"
            description="Чи буває момент, коли сервіс не відповідає?"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={GitBranch}
            title="Дві версії"
            subtitle="Mixed versions"
            description="Чи обслуговують запити v1 і v2 водночас?"
            color="purple"
            delay={6}
          />
          <InfoCard
            icon={Server}
            title="Ресурси"
            subtitle="Resources"
            description="Скільки копій потрібно під час оновлення?"
            color="cyan"
            delay={6}
          />
          <InfoCard
            icon={RotateCcw}
            title="Відкат"
            subtitle="Rollback"
            description="Як швидко можна повернутися до v1?"
            color="green"
            delay={6}
          />
          <InfoCard
            icon={Users}
            title="Охоплення"
            subtitle="Blast radius"
            description="Скільки користувачів побачать помилку, перш ніж її помітять?"
            color="blue"
            delay={6}
          />
        </div>

        <HighlightBox color="blue" icon={ToggleRight}>
          Прапорці функцій (<SlideLink to={17} />) — не стратегія розгортання, а спосіб
          відокремити випуск від розгортання. Їх поєднують з будь-якою стратегією.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 14. ROLLING UPDATE ----------

function RollingSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={RefreshCw} title="Почергове оновлення" subtitle="Rolling Update" />

        <p className="fs-lg text-secondary mb-xl">
          Інстанси замінюють по одному: нова копія стартує, проходить перевірку
          готовності, отримує трафік — і лише тоді зупиняють одну стару.
        </p>

        <CodeBlock title="три інстанси, по одному новому за раз">{`
step 0   [v1] [v1] [v1]
step 1   [v1] [v1] [v1] [v2…]    v2 starts and waits for readiness
step 2   [v1] [v1] [v2]          v2 is ready, one v1 stops
step 3   [v1] [v1] [v2] [v2…]
step 4   [v1] [v2] [v2]
  …
step 6   [v2] [v2] [v2]
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Переваги</h3>
            <DefBadge term="Ресурси" description="не потрібне друге повне середовище" color="green" />
            <DefBadge term="Стандарт" description="за замовчуванням у Kubernetes і більшості PaaS" color="green" />
            <DefBadge term="Безпека" description="трафік іде лише на копії, що пройшли перевірку" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Ризики</h3>
            <DefBadge term="Дві версії" description="якийсь час v1 і v2 працюють одночасно" color="orange" />
            <DefBadge term="Відкат" description="це ще одне таке саме оновлення, і так само повільне" color="orange" />
            <DefBadge term="Охоплення" description="помилка поступово доходить до всіх користувачів" color="orange" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Поки триває оновлення, частину запитів обслуговує v1, частину — v2.
            Обидві версії мають працювати з тією самою базою й тим самим API
            (<SlideLink to={18} />).
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            У Kubernetes швидкість оновлення задають два параметри: скільки нових
            копій можна додати й скільки старих можна прибрати одночасно (лекція 10).
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 15. BLUE-GREEN ----------

function BlueGreenSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Layers} title="Синьо-зелене розгортання" subtitle="Blue-Green Deployment" />

        <p className="fs-lg text-secondary mb-xl">
          Поруч із робочою версією піднімають повну копію з новою. Її перевіряють без
          користувачів, а потім перемикають на неї весь трафік одним рухом.
        </p>

        <CodeBlock title="перемикання відбувається на рівні маршрутизатора">{`
deploy   router ──▶ blue  [v1] [v1]
                    green [v2] [v2]     smoke tests, no user traffic yet
 
switch   router ──▶ green [v2] [v2]
                    blue  [v1] [v1]     idle, kept for instant rollback
`}</CodeBlock>

        <div className="outlined-card outlined-card--blue fade-in-delay-1 mb-xl">
          <h3 className="info-card__title mb-sm">За нашими критеріями</h3>
          <DefBadge term="Простій" description="немає: перемикання миттєве" color="green" />
          <DefBadge term="Дві версії" description="обидві запущені, але трафік отримує лише одна" color="green" />
          <DefBadge term="Ресурси" description="подвійні на час розгортання" color="orange" />
          <DefBadge term="Відкат" description="миттєвий: перемкнути трафік назад на синю" color="green" />
          <DefBadge term="Охоплення" description="усі користувачі одразу після перемикання" color="orange" />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            База одна на обидва кольори. Якщо v2 змінила схему, миттєво повернутися на v1
            вже не вийде: схема має підходити обом версіям (<SlideLink to={18} />).
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Перемикають балансувальником, а не записом у DNS: через кешування (TTL)
            частина клієнтів ще довго ходитиме на старий колір.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 16. CANARY ----------

function CanarySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Split} title="Канаркове розгортання" subtitle="Canary Release" />

        <p className="fs-lg text-secondary mb-xl">
          Нову версію спершу отримує невелика частка користувачів. Якщо помилок
          і затримок не більше, ніж у старої, частку поступово збільшують. Назва —
          від канарок, яких шахтарі брали під землю: птах першим реагував на газ.
        </p>

        <CodeBlock title="трафік ділиться за вагою">{`
step 1   router ──▶   95% → [v1] [v1] [v1]
                       5% → [v2]               compare errors and latency
step 2   router ──▶   75% → [v1] [v1]
                      25% → [v2] [v2]
  …
step N   router ──▶  100% → [v2] [v2] [v2]
`}</CodeBlock>

        <div className="outlined-card outlined-card--blue fade-in-delay-1 mb-xl">
          <h3 className="info-card__title mb-sm">За нашими критеріями</h3>
          <DefBadge term="Простій" description="немає" color="green" />
          <DefBadge term="Дві версії" description="так, свідомо й довго" color="orange" />
          <DefBadge term="Ресурси" description="кілька додаткових копій" color="green" />
          <DefBadge term="Відкат" description="швидкий: прибрати канарку з маршрутизації" color="green" />
          <DefBadge term="Охоплення" description="лише частка користувачів, яку ви обрали" color="green" />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Канарка без метрик — просто повільне розгортання. Треба заздалегідь знати,
            за якими показниками вирішувати, і порівнювати v2 з v1 у той самий час
            (лекція 13).
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Безкоштовні PaaS зазвичай не вміють ділити трафік за вагою. У Kubernetes
            для цього є окремі інструменти, наприклад Argo Rollouts.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 17. FEATURE FLAGS ----------

function FeatureFlagsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={ToggleRight} title="Прапорці функцій" subtitle="Feature Flags" />

        <p className="fs-lg text-secondary mb-xl">
          Код нової функції вже в проді, але вимкнений. Увімкнути її означає змінити
          значення прапорця, а не розгорнути нову версію. Так випуск відокремлюють
          від розгортання (<SlideLink to={3} />).
        </p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Users}
            title="Поступовий випуск"
            subtitle="Gradual rollout"
            description="Спершу функцію бачить команда, потім 10% користувачів, потім усі"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={Power}
            title="Вимикач"
            subtitle="Kill switch"
            description="Функція зламалася — її вимикають за секунди, не відкочуючи всю версію"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={GitBranch}
            title="Недороблений код"
            subtitle="Trunk-based development"
            description="Незавершену функцію мерджать у main вимкненою, тож гілки не живуть тижнями"
            color="purple"
            delay={3}
          />
        </div>

        <CodeBlock title="фрагмент">{`
# the flag value comes from configuration, not from code
if flags.is_enabled("shared_wishlists", user=current_user):
    return shared_view(wishlist)
return private_view(wishlist)
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col">
          <div className="outlined-card outlined-card--blue fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Де зберігати прапорці</h3>
            <DefBadge term="Змінна середовища" description="просто, але зміна — це новий реліз" color="blue" />
            <DefBadge term="База чи Redis" description="змінюються на льоту, без перезапуску" color="blue" />
            <DefBadge term="Окремий сервіс" description="Unleash, Flagsmith, LaunchDarkly; спільний стандарт — OpenFeature" color="blue" />
          </div>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Прапорець — тимчасовий борг. Після повного випуску його прибирають разом
            зі старою гілкою коду, інакше за рік ніхто не пам'ятає, які прапорці ще
            потрібні, а які можна видалити.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 18. ZERO DOWNTIME ----------

function ZeroDowntimeSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Rocket} title="Розгортання без простою" subtitle="Zero-Downtime Deployment" />

        <p className="fs-lg text-secondary mb-xl">
          Жодна стратегія сама не гарантує, що користувачі нічого не помітять.
          Для цього мають виконуватися три умови.
        </p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={CheckCircle2}
            title="Готовність"
            subtitle="Readiness"
            description="Нова копія отримує трафік лише після того, як пройшла перевірку готовності"
            color="green"
            delay={1}
          />
          <InfoCard
            icon={Power}
            title="Коректна зупинка"
            subtitle="Graceful shutdown"
            description="Отримавши SIGTERM, стара копія перестає приймати нові запити, дообробляє поточні й лише тоді завершується"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={Database}
            title="Сумісні міграції"
            subtitle="Expand / contract"
            description="Схема бази працює і з новою, і з попередньою версією коду, бо якийсь час вони живуть разом"
            color="purple"
            delay={3}
          />
        </div>

        <CodeBlock title="перейменування колонки name → title без простою">{`
release 1   ADD COLUMN title                    code writes name and title, reads name
release 2   UPDATE wishlists SET title = name   code writes name and title, reads title
              WHERE title IS NULL
release 3   —                                   code writes only title
release 4   DROP COLUMN name                    code doesn't touch name
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            SIGTERM має дійти до застосунку. З shell-формою <code>CMD</code> (лекція 4)
            сигнал отримує <code>sh</code>, а не uvicorn, і після тайм-ауту платформа
            вбиває процес посеред запитів.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Міграції (<code>alembic upgrade head</code>) запускають один раз, окремим
            кроком перед розгортанням, а не під час старту кожної копії: інакше кілька
            копій мігрують одночасно.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 19. ROLLBACK ----------

function RollbackSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={RotateCcw} title="Відкат" subtitle="Rollback" />

        <p className="fs-lg text-secondary mb-xl">
          Відкат — не аварійний захід, а звичайна частина розгортання. Перед кожним
          релізом варто знати відповідь на питання: як я поверну попередню версію?
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={Package}
            title="Розгорнути попередній образ"
            subtitle="Redeploy"
            description="Той самий конвеєр, але з тегом попередньої версії. Працює з будь-якою стратегією"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={Layers}
            title="Перемкнути назад"
            subtitle="Switch back"
            description="При синьо-зеленому розгортанні, поки стару версію не вимкнули, відкат миттєвий"
            color="green"
            delay={2}
          />
          <InfoCard
            icon={ToggleRight}
            title="Вимкнути функцію"
            subtitle="Kill switch"
            description="Якщо проблема в одній функції за прапорцем, версію можна взагалі не чіпати"
            color="purple"
            delay={3}
          />
          <InfoCard
            icon={Rocket}
            title="Виправити вперед"
            subtitle="Roll forward"
            description="Швидкий новий реліз з виправленням, коли відкат неможливий, наприклад через міграцію"
            color="orange"
            delay={4}
          />
        </div>

        <CodeBlock title=".github/workflows/rollback.yml — фрагмент">{`
on:
  workflow_dispatch:
    inputs:
      image:
        description: Image to roll back to (ghcr.io/team/wishlist-api:sha-...)
        required: true

jobs:
  rollback-production:
    environment: production          # same protection rules as a normal deploy
    runs-on: ubuntu-latest
    steps:
      - run: |
          IMG=$(jq -rn --arg v "$IMAGE" '$v|@uri')
          curl -fsS -X POST "$DEPLOY_HOOK&imgURL=$IMG"
        env:
          DEPLOY_HOOK: \${{ secrets.DEPLOY_HOOK }}
          IMAGE: \${{ inputs.image }}
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col">
          <div className="outlined-card outlined-card--orange fade-in-delay-5">
            <h3 className="info-card__title mb-sm">Відкат спрацює, лише якщо</h3>
            <DefBadge term="Образ" description="ще є в реєстрі: політика очищення не видалила старі теги" color="orange" />
            <DefBadge term="Схема БД" description="підходить попередній версії коду" color="orange" />
            <DefBadge term="Конфігурація" description="теж повернута, якщо її змінювали в цьому релізі" color="orange" />
          </div>
          <HighlightBox color="blue" icon={Lightbulb}>
            Відкат, який ніколи не пробували, — це надія, а не план. Відпрацюйте його
            на staging, поки нічого не горить.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 20. DEPLOYMENT METRICS ----------

function DeploymentMetricsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Gauge} title="Метрики розгортання" subtitle="DORA Metrics" />

        <p className="fs-lg text-secondary mb-xl">
          DORA (DevOps Research and Assessment) — дослідницька програма, що з 2014 року
          вивчає, чим відрізняються команди, які доставляють швидко й надійно. Процес
          доставки вона оцінює п'ятьма метриками.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Пропускна здатність</h3>
            <DefBadge term="Частота розгортань" description="як часто зміни потрапляють у прод" color="green" />
            <DefBadge term="Час проходження змін" description="від коміту до продакшну" color="green" />
            <DefBadge term="Час відновлення" description="скільки минає від невдалого розгортання до робочого стану" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Нестабільність</h3>
            <DefBadge term="Частка невдалих змін" description="скільки розгортань потребують відкату чи термінового виправлення" color="orange" />
            <DefBadge term="Частка вимушених розгортань" description="скільки розгортань — незаплановане виправлення проблем у проді" color="orange" />
          </div>
        </div>

        <p className="fs-lg text-secondary mb-base">Як покращити ці метрики:</p>
        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Workflow}
            title="Швидше доставляти"
            subtitle="Faster delivery"
            description="Маленькі зміни й автоматичний конвеєр скорочують шлях від коміту до проду"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={CheckCircle2}
            title="Рідше ламати"
            subtitle="Fewer failures"
            description="Перевірки стану, канарки й прапорці зменшують частку невдалих змін"
            color="orange"
            delay={4}
          />
          <InfoCard
            icon={RotateCcw}
            title="Швидше відновлюватися"
            subtitle="Faster recovery"
            description="Відпрацьований відкат перетворює інцидент на кілька хвилин"
            color="blue"
            delay={5}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Lightbulb}>
            Головний висновок DORA: швидкість і стабільність не конкурують. Найкращі
            команди розгортають на вимогу й відновлюються менш ніж за годину.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Метрики міряють процес команди, а не людей. Щойно метрика стає ціллю
            для оцінки працівників, її починають «підганяти».
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 21. COMMON MISTAKES ----------

function CommonMistakesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={AlertTriangle} title="Типові помилки" subtitle="Common Mistakes" />

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Package}
            title="Збірка під кожне середовище"
            subtitle={<SlideLink to={6} />}
            description="У прод іде не той артефакт, який перевіряли на staging"
            color="orange"
            delay={1}
          />
          <InfoCard
            icon={Workflow}
            title="Деплой без явного тегу"
            subtitle={<SlideLink to={4} />}
            description="Платформа бере тег із налаштувань, найчастіше latest, а не той, що пройшов конвеєр"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={Lock}
            title="Секрет в образі чи бандлі"
            subtitle={<SlideLink to={7} />}
            description="ARG, ENV і VITE_* видно кожному, хто має образ або відкрив сайт"
            color="orange"
            delay={3}
          />
          <InfoCard
            icon={Activity}
            title="Liveness перевіряє базу"
            subtitle={<SlideLink to={13} />}
            description="База впала — і платформа перезапускає всі копії, нічого цим не виправляючи"
            color="orange"
            delay={4}
          />
          <InfoCard
            icon={Database}
            title="Міграція за один реліз"
            subtitle={<SlideLink to={18} />}
            description="Перейменована колонка ламає копії старої версії й робить відкат неможливим"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={RotateCcw}
            title="Неперевірений відкат"
            subtitle={<SlideLink to={19} />}
            description="Про те, що старий образ видалено з реєстру, дізнаються посеред інциденту"
            color="orange"
            delay={6}
          />
        </div>

        <HighlightBox color="blue" icon={Lightbulb}>
          Спільне в усіх шести: на staging вони зазвичай непомітні й вилазять лише
          в проді, під навантаженням або під час відкату. Тому їх перевіряють
          заздалегідь, а не чекають, поки спрацюють.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 22. SUMMARY ----------

const STRATEGY_COLUMNS = [
  { label: 'Повна заміна', sub: 'Recreate' },
  { label: 'Почергове', sub: 'Rolling' },
  { label: 'Синьо-зелене', sub: 'Blue-green' },
  { label: 'Канаркове', sub: 'Canary' },
];

const STRATEGY_ROWS = [
  {
    label: 'Простій',
    cells: [
      { text: 'є', tone: 'bad' },
      { text: 'немає', tone: 'good' },
      { text: 'немає', tone: 'good' },
      { text: 'немає', tone: 'good' },
    ],
  },
  {
    label: 'Дві версії',
    cells: [
      { text: 'ні', tone: 'good' },
      { text: 'так', tone: 'warn' },
      { text: 'ні', tone: 'good' },
      { text: 'так', tone: 'warn' },
    ],
  },
  {
    label: 'Ресурси',
    cells: [
      { text: '×1', tone: 'good' },
      { text: '+1–2 копії', tone: 'good' },
      { text: '×2', tone: 'warn' },
      { text: '+кілька копій', tone: 'good' },
    ],
  },
  {
    label: 'Відкат',
    cells: [
      { text: 'повільний, з простоєм', tone: 'bad' },
      { text: 'повільний', tone: 'warn' },
      { text: 'миттєвий', tone: 'good' },
      { text: 'швидкий', tone: 'good' },
    ],
  },
  {
    label: 'Охоплення',
    cells: [
      { text: 'усі одразу', tone: 'warn' },
      { text: 'поступово всі', tone: 'warn' },
      { text: 'усі одразу', tone: 'warn' },
      { text: 'лише частка', tone: 'good' },
    ],
  },
];

function SummarySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={CheckCircle2} title="Підсумки" subtitle="Summary" />

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={UserCheck}
            title="Доставка"
            subtitle="Delivery"
            description="Delivery і deployment відрізняються одним кроком: чи підтверджує людина випуск у прод"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={Package}
            title="Один артефакт"
            subtitle="Build once"
            description="Образ збирають один раз, а середовища відрізняються лише конфігурацією й даними"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={RotateCcw}
            title="Відкат"
            subtitle="Rollback"
            description="Його планують і відпрацьовують заздалегідь, як звичайне розгортання"
            color="green"
            delay={3}
          />
        </div>

        <p className="fs-lg text-secondary mb-base">Стратегії розгортання:</p>
        <div className="mb-xl">
          <DataTable columns={STRATEGY_COLUMNS} rows={STRATEGY_ROWS} delay={4} />
        </div>

        <HighlightBox color="blue" icon={Database}>
          Наступна лекція — про дані та стан: як зберігати те, що має пережити
          будь-яке розгортання, перезапуск і відкат.
        </HighlightBox>
      </div>
    </div>
  );
}
function QuestionsSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
      <div className="questions-slide">
        <HelpCircle className="questions-slide__icon" />
        <h2 className="questions-slide__title">Питання?</h2>
        <p className="questions-slide__subtitle">
          Далі — лекція 8: дані та стан в експлуатації
        </p>

        <div className="flex gap-sm" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <ExtLink href="https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments" color="blue">
            GitHub — середовища для розгортання
          </ExtLink>
          <ExtLink href="https://render.com/docs/deploy-hooks" color="purple">
            Render — deploy hooks
          </ExtLink>
          <ExtLink href="https://12factor.net/uk/" color="green">
            The Twelve-Factor App
          </ExtLink>
          <ExtLink href="https://martinfowler.com/bliki/ParallelChange.html" color="orange">
            Martin Fowler — Parallel Change (expand/contract)
          </ExtLink>
          <ExtLink href="https://openfeature.dev/" color="blue">
            OpenFeature
          </ExtLink>
          <ExtLink href="https://dora.dev/guides/dora-metrics/" color="purple">
            DORA — метрики доставки
          </ExtLink>
        </div>
      </div>
    </div>
  );
}