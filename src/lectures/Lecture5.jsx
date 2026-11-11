import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import SlideLink from '../components/SlideLink';
import {
  Boxes,
  Target,
  Layers,
  Hammer,
  Terminal,
  Network,
  Plug,
  Stethoscope,
  Clock,
  RefreshCw,
  Settings,
  HardDrive,
  Code,
  Copy,
  FileCheck,
  Warehouse,
  Tag,
  Upload,
  Lock,
  Gauge,
  Trash2,
  Server,
  Database,
  Laptop,
  Globe,
  Package,
  KeyRound,
  AlertTriangle,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

// ============================================
// SLIDES ARRAY
// `selfStudy: true` — slide is left to the student.
// ============================================

const slides = [
  { id: 1, title: 'Титульний слайд', component: TitleSlide },
  { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
  { id: 3, title: 'Коли одного контейнера мало', component: WhyComposeSlide },
  { id: 4, title: 'Compose: сервіси, мережі, томи', component: ComposeBasicsSlide },
  { id: 5, title: 'Збірка з Compose: build і args', component: ComposeBuildSlide },
  { id: 6, title: 'Команди Compose', component: ComposeCommandsSlide },
  { id: 7, title: 'Звернення за іменем сервісу', component: ServiceDiscoverySlide },
  { id: 8, title: 'Порти: що публікувати, а що ні', component: PortsSlide },
  { id: 9, title: 'Сервіс піднявся, але недоступний', component: NotReachableSlide },
  { id: 10, title: 'Залежності: started проти healthy', component: DependsOnSlide },
  { id: 11, title: 'Політики перезапуску', component: RestartPolicySlide },
  { id: 12, title: 'Змінні: .env проти env_file', component: EnvFilesSlide },
  { id: '12_1', title: 'Змінні: .env проти env_file', component: EnvStagesSlide },
  { id: 13, title: 'Томи в Compose', component: ComposeVolumesSlide },
  { id: 14, title: 'Код у розробці: каталог і watch', component: DevModeSlide },
  { id: 15, title: 'Перевизначення й профілі', component: OverridesProfilesSlide },
  { id: 16, title: 'Зведений compose.yaml', component: FinalComposeSlide },
  { id: 17, title: 'Реєстри образів', component: RegistriesSlide },
  { id: 18, title: 'Схема тегування', component: TaggingSlide },
  { id: 19, title: 'Публікація з конвеєра', component: PublishFromCiSlide },
  { id: 20, title: 'Приватні реєстри й доступ', component: PrivateRegistrySlide, selfStudy: true },
  { id: 21, title: 'Обмеження безкоштовних реєстрів', component: RegistryLimitsSlide, selfStudy: true },
  { id: 22, title: 'Очищення: образи, томи, кеш', component: PruneSlide, selfStudy: true },
  { id: 23, title: 'Межі Compose', component: ComposeLimitsSlide },
  { id: 24, title: 'Типові помилки', component: CommonMistakesSlide },
  { id: 25, title: 'Підсумки', component: SummarySlide },
  { id: 26, title: 'Питання?', component: QuestionsSlide },
];

export default function Lecture5() {
  return <LectureLayout slides={slides} />;
}

// ============================================
// HELPERS
// ============================================

// Plain text line inside an outlined card
function Point({ children }) {
  return <p className="fs-body text-secondary mb-sm">{children}</p>;
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
        Лекція 5 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Compose and Registries
      </p>
      <div className="title-slide__badge">
        <p>🧩 Усе середовище — одним файлом</p>
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
                Описати середовище кодом
                <span className="step-list__subtitle"> — Compose</span>
              </h3>
              <p className="step-list__description">
                Сервіси, мережі й томи в одному файлі, який піднімає все однією командою
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--purple fade-in-delay-2">
            <div className="step-list__number step-list__number--purple">2</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--purple">
                Зв'язати сервіси між собою
                <span className="step-list__subtitle"> — Networking and Startup</span>
              </h3>
              <p className="step-list__description">
                Звернення за іменем, порти, порядок запуску й перезапуск після збою
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--green fade-in-delay-3">
            <div className="step-list__number step-list__number--green">3</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--green">
                Налаштувати зручну розробку
                <span className="step-list__subtitle"> — Dev Workflow</span>
              </h3>
              <p className="step-list__description">
                Змінні, томи, зміни коду без перезбирання, окремі налаштування для середовищ
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--orange fade-in-delay-4">
            <div className="step-list__number step-list__number--orange">4</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--orange">
                Опублікувати образи
                <span className="step-list__subtitle"> — Registries</span>
              </h3>
              <p className="step-list__description">
                Реєстри, схема тегування й автоматична публікація з конвеєра
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 3. WHY COMPOSE ----------

function WhyComposeSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Boxes}
          title="Коли одного контейнера мало"
          subtitle="Why Compose"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          wishlist — це вже чотири контейнери: інтерфейс, API, Postgres і Redis. Запустити
          їх вручну можна, але кожен запуск — це мережа, том, змінні й правильний порядок.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-2">
            <CodeBlock title="❌ вручну, щоразу" color="orange">{`
docker network create wishlist
docker volume create pgdata

docker run -d --name postgres --network wishlist \\
  -e POSTGRES_PASSWORD=secret \\
  -v pgdata:/var/lib/postgresql/data postgres:16

docker run -d --name redis --network wishlist redis:7

docker run -d --name api --network wishlist -p 8000:8000 \\
  -e DATABASE_URL=postgresql://postgres:secret@postgres/postgres \\
  -e REDIS_URL=redis://redis:6379/0 wishlist-api:0.1

docker run -d --name ui -p 8080:80 wishlist-ui:0.1
`}</CodeBlock>
          </div>

          <div className="fade-in-delay-3">
            <CodeBlock title="✅ з Compose" color="green">{`
docker compose up -d
`}</CodeBlock>
            <div className="outlined-card outlined-card--green mt-base">
              <Point>Усе середовище описано у файлі <code>compose.yaml</code> поруч із кодом</Point>
              <Point>Однакове для всієї команди: новий учасник піднімає його однією командою</Point>
              <Point>Мережу й томи Compose створює сам, порядок запуску бере з опису</Point>
              <Point>Зупинити й прибрати все — теж одна команда</Point>
            </div>
          </div>
        </div>

        <HighlightBox color="blue" icon={BookOpen}>
          Compose — інструмент для середовища <strong>на одній машині</strong>: ноутбук
          розробника, тестовий стенд, невеликий сервер.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 4. COMPOSE BASICS ----------

function ComposeBasicsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Layers}
          title="Compose: сервіси, мережі, томи"
          subtitle="The compose.yaml File"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="compose.yaml">{`
services:
  api:
    image: wishlist-api:0.1
    ports:
      - "8000:8000"
    environment:
      DATABASE_URL: postgresql://wish:secret@postgres:5432/wishlist
      REDIS_URL: redis://redis:6379/0

  postgres:
    image: postgres:16
    environment:
      POSTGRES_USER: wish
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: wishlist
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7

volumes:
  pgdata:
`}</CodeBlock>

          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <DefBadge term="services" description="контейнери середовища; ім'я сервісу — це й ім'я для звернення в мережі" color="blue" />
            <DefBadge term="image" description="з якого образу запускати сервіс" color="blue" />
            <DefBadge term="ports" description="які порти опублікувати на хості — те саме, що -p" color="blue" />
            <DefBadge term="environment" description="змінні середовища контейнера — те саме, що -e" color="purple" />
            <DefBadge term="volumes" description="у сервісі — що куди монтувати; на верхньому рівні — оголошення іменованих томів" color="purple" />
            <DefBadge term="networks" description="можна не писати: Compose сам створює спільну мережу для всіх сервісів проєкту" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            У багатьох туторіалах файл починається з <code>version: "3.8"</code>. Цей ключ
            застарів: сучасний Compose його ігнорує й попереджає про це. Писати його не треба.
          </HighlightBox>
          <HighlightBox color="blue" icon={Terminal}>
            <code>docker compose</code> через пробіл — сучасна версія, вбудована в Docker.{' '}
            <code>docker-compose</code> через дефіс — стара окрема програма, яку вже не
            підтримують.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 5. BUILD WITH COMPOSE ----------

function ComposeBuildSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Hammer}
          title="Збірка з Compose: build і args"
          subtitle="Building Images from compose.yaml"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Замість готового образу сервіс може збиратися прямо з Dockerfile. Тоді{' '}
          <code>docker compose up</code> сам збирає образи, яких ще немає.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="compose.yaml">{`
services:
  api:
    build: ../wishlist-api
    image: wishlist-api:dev

  ui:
    build:
      context: ../wishlist-ui
      args:
        VITE_API_BASE: http://localhost:8000
    image: wishlist-ui:dev
    ports:
      - "8080:80"
`}</CodeBlock>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <DefBadge term="build" description="каталог-контекст, у якому лежить Dockerfile" color="purple" />
            <DefBadge term="context" description="те саме в повній формі, поруч можна вказати dockerfile, target" color="purple" />
            <DefBadge term="args" description="значення для ARG у Dockerfile — саме так передають VITE_API_BASE на етапі збірки" color="purple" />
            <DefBadge term="image" description="разом із build — ім'я, під яким збережеться зібраний образ" color="purple" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <CodeBlock title="wishlist-ui/Dockerfile (фрагмент)">{`
FROM node:22-alpine AS build
# ...
ARG VITE_API_BASE        # receives value from compose args:
RUN npm run build        # Vite inlines it into the JS bundle
# ...
`}</CodeBlock>

          <CodeBlock title="збірка">{`
docker compose build          # build all services that have build:
docker compose up -d --build  # rebuild and start
`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--2col mt-xl">
          <HighlightBox color="orange" icon={AlertTriangle}>
            <code>docker compose up</code> збирає образ лише тоді, коли його ще немає. Після
            зміни коду він запустить <strong>старий</strong> образ — потрібен{' '}
            <code>--build</code>.
          </HighlightBox>
          <HighlightBox color="blue" icon={BookOpen}>
            Тут <code>compose.yaml</code> лежить в окремому каталозі на одному рівні з{' '}
            <code>wishlist-api</code> і <code>wishlist-ui</code>, тому шляхи починаються з{' '}
            <code>../</code>. Шляхи в Compose рахуються від каталогу, де лежить сам файл.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 6. COMPOSE COMMANDS ----------

function ComposeCommandsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Terminal}
          title="Команди Compose"
          subtitle="Everyday Commands"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="щоденний набір">{`
docker compose up -d          # create and start in background
docker compose ps             # services and their state
docker compose logs -f api    # follow logs of one service
docker compose exec api sh    # shell inside a running service
docker compose restart api    # restart one service

docker compose stop           # stop, keep containers
docker compose down           # remove containers and network
docker compose down -v        # ...and volumes: the database is gone

docker compose config         # final config after merging
                              # and variable substitution
`}</CodeBlock>

          <div>
            <InfoCard
              icon={Boxes}
              title="Проєкт"
              subtitle="Project"
              description="Усе, що описано в одному compose.yaml. Ім'я проєкту — це назва каталогу, і з нього починаються імена контейнерів, мережі й томів: wishlist-api-1, wishlist_default"
              color="blue"
              delay={1}
            />
            <InfoCard
              icon={FileCheck}
              title="docker compose config"
              subtitle="Debugging"
              description="Показує файл таким, яким його бачить Compose: з підставленими змінними й усіма перевизначеннями. Перше, що варто зробити, коли щось «не підхопилося»"
              color="green"
              delay={2}
            />
          </div>
        </div>

        <HighlightBox color="red" icon={AlertTriangle}>
          <code>down</code> і <code>down -v</code> відрізняються двома символами, а наслідки
          — повністю. Перша команда прибирає контейнери, і дані в томах лишаються. Друга
          видаляє ще й томи — разом з усією базою.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 7. SERVICE DISCOVERY ----------

function ServiceDiscoverySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Network}
          title="Звернення за іменем сервісу"
          subtitle="Service Discovery"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Compose підключає всі сервіси проєкту до спільної мережі. У ній кожен сервіс
          доступний за своїм <strong>іменем</strong>, а вбудований DNS Docker перетворює
          ім'я на поточну IP-адресу контейнера.
        </p>

        <div className="flow-diagram mb-xl fade-in-delay-2">
          <div className="icon-box icon-box--blue">
            <Server className="icon-box__icon icon-box__icon--blue" />
            <p className="icon-box__title">api</p>
            <p className="icon-box__subtitle">звертається до postgres:5432</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--purple">
            <Globe className="icon-box__icon icon-box__icon--purple" />
            <p className="icon-box__title">DNS Docker</p>
            <p className="icon-box__subtitle">postgres → 172.18.0.3</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--green">
            <Database className="icon-box__icon icon-box__icon--green" />
            <p className="icon-box__title">postgres</p>
            <p className="icon-box__subtitle">отримує з'єднання</p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="рядок підключення в api">{`
DATABASE_URL=postgresql://wish:secret@postgres:5432/wishlist
REDIS_URL=redis://redis:6379/0

# check name resolution from inside the api container
docker compose exec api getent hosts postgres
`}</CodeBlock>

          <div className="outlined-card outlined-card--red fade-in-delay-3">
            <h3 className="info-card__title mb-sm">❌ localhost у рядку підключення</h3>
            <Point>
              У контейнері <code>localhost</code> — це сам контейнер. API шукатиме Postgres у
              себе всередині й отримає <code>connection refused</code>.
            </Point>
            <Point>
              IP-адреси контейнерів змінюються після кожного перестворення, тому їх теж не
              пишуть. Ім'я сервісу лишається тим самим.
            </Point>
          </div>
        </div>

        <HighlightBox color="blue" icon={BookOpen}>
          Як працює DNS загалом — імена, записи, кешування — розберемо в лекції про мережі очима DevOps. Тут
          достатньо знати: <strong>у мережі Compose ім'я сервісу — це адреса</strong>.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 8. PORTS ----------

function PortsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Plug}
          title="Порти: що публікувати, а що ні"
          subtitle="Publishing Only What Is Needed"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Сервіси в мережі Compose бачать одне одного й без <code>ports</code>. Публікувати
            порт потрібно лише тоді, коли до сервісу звертаються <strong>з хоста</strong>:
            браузер, Postman, клієнт бази даних.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="compose.yaml">{`
services:
  api:
    ports:
      - "8000:8000"   # the browser on the host calls the API

  postgres:
    # no ports: only api talks to it, inside the network

  redis:
    # no ports either

# need a local database client on your machine?
# publish to this machine only:
#   ports:
#     - "127.0.0.1:5432:5432"
`}</CodeBlock>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Три різні localhost</h3>
            <DefBadge term="у контейнері" description="сам контейнер — інші сервіси тут шукають за іменем" color="purple" />
            <DefBadge term="на хості" description="ваша машина — тут доступні опубліковані порти" color="purple" />
            <DefBadge term="у браузері" description="машина користувача — тому VITE_API_BASE=http://localhost:8000 працює лише локально" color="purple" />
          </div>
        </div>

        <HighlightBox color="red" icon={AlertTriangle}>
          <code>"5432:5432"</code> публікує базу на <strong>всіх</strong> мережевих
          інтерфейсах хоста. На сервері її побачить будь-хто в мережі — до того ж Docker
          додає власні правила мережевого фільтра, які обходять налаштування на кшталт{' '}
          <code>ufw</code>. Для локального доступу пишіть <code>127.0.0.1:</code> перед номером порту.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 9. NOT REACHABLE ----------

function NotReachableSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Stethoscope}
          title="Сервіс піднявся, але недоступний"
          subtitle="A Container-Level Checklist"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Перевіряємо по черзі: від «чи живий процес» до «чи доходить запит». Кожен крок —
          одна перевірка.
        </p>

        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Сервіс справді працює?</p>
              <p className="fs-body-sm text-muted mt-sm">
                <span className="font-mono"><strong>docker compose ps</strong></span> — стан, кількість
                перезапусків, статус перевірки стану
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">2</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Що він пише в журнал?</p>
              <p className="fs-body-sm text-muted mt-sm">
                <span className="font-mono"><strong>docker compose logs api</strong></span> — помилку
                підключення до бази чи відсутню змінну зазвичай видно одразу
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">3</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Слухає 0.0.0.0?</p>
              <p className="fs-body-sm text-muted mt-sm">
                У тому ж журналі під час старту має бути{' '}
                <span className="font-mono">Uvicorn running on http://0.0.0.0:8000</span>. Якщо там{' '}
                <span className="font-mono">127.0.0.1</span>, застосунок приймає запити лише
                зсередини свого контейнера — потрібен{' '}
                <span className="font-mono">--host 0.0.0.0</span>
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">4</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Порт опубліковано, і саме той?</p>
              <p className="fs-body-sm text-muted mt-sm">
                Колонка PORTS у <span className="font-mono"><strong>docker compose ps</strong></span> або{' '}
                <span className="font-mono"><strong>docker compose port api 8000</strong></span>
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">5</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Запит доходить зсередини мережі?</p>
              <p className="fs-body-sm text-muted mt-sm">
                <span className="font-mono"><strong>docker compose exec ui wget -qO- http://api:8000/health</strong></span>{' '}
                — якщо зсередини працює, а з хоста ні, проблема в публікації порту
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ---------- 10. DEPENDS_ON ----------

function DependsOnSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Clock}
          title="Залежності: started проти healthy"
          subtitle="Startup Order"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Контейнер Postgres стартує за секунду, а приймати з'єднання база починає за
            кілька. Якщо API підключається в цей проміжок — <code>connection refused</code>,
            і API падає ще до того, як база готова.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-2">
            <CodeBlock title="❌ чекає лише старту контейнера" color="orange">{`
services:
  api:
    depends_on:
      - postgres
`}</CodeBlock>
            <Point>Порядок запуску є, але «контейнер запущено» ще не означає «база готова».</Point>
          </div>
          <div className="fade-in-delay-3">
            <CodeBlock title="✅ чекає успішної перевірки стану" color="green">{`
services:
  api:
    depends_on:
      postgres:
        condition: service_healthy

  postgres:
    image: postgres:16
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U wish -d wishlist"]
      interval: 5s
      timeout: 3s
      retries: 5
      start_period: 30s
`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="outlined-card outlined-card--purple fade-in-delay-4">
            <DefBadge term="service_started" description="за замовчуванням: контейнер запущено" color="purple" />
            <DefBadge term="service_healthy" description="перевірка стану пройшла" color="purple" />
            <DefBadge term="service_completed_successfully" description="разовий сервіс завершився з кодом 0 — наприклад, підготовка даних" color="purple" />
          </div>
          <div className="outlined-card outlined-card--blue fade-in-delay-4">
            <DefBadge term="CMD" description="команда напряму, як exec-форма в Dockerfile" color="blue" />
            <DefBadge term="CMD-SHELL" description="команда через оболонку, як shell-форма" color="blue" />
            <Point>Для Redis перевірка — <code>["CMD", "redis-cli", "ping"]</code></Point>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          <code>depends_on</code> працює лише під час <code>docker compose up</code>. Якщо база
          впаде пізніше, Compose API не зупинить і не почекає — застосунок має сам уміти
          перепідключатися.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 11. RESTART POLICIES ----------

function RestartPolicySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={RefreshCw}
          title="Політики перезапуску"
          subtitle="Restart Policies"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            За замовчуванням контейнер, чий головний процес завершився, так і лишається
            зупиненим. Політика перезапуску каже Docker, що робити в такому разі.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <DefBadge term="no" description="за замовчуванням: не перезапускати" color="purple" />
            <DefBadge term="on-failure" description="лише якщо процес завершився з помилкою, тобто з ненульовим кодом" color="purple" />
            <DefBadge term="always" description="завжди, зокрема після перезапуску самого Docker чи сервера" color="purple" />
            <DefBadge term="unless-stopped" description="як always, але не піднімає те, що ви зупинили вручну" color="purple" />
          </div>

          <CodeBlock title="compose.yaml">{`
services:
  api:
    restart: unless-stopped
  postgres:
    restart: unless-stopped
`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Перезапуск спрацьовує, коли процес <strong>завершився</strong>. Контейнер, який
            працює, але не проходить перевірку стану, Docker сам не перезапускає — лише
            показує <code>unhealthy</code>.
          </HighlightBox>
          <HighlightBox color="blue" icon={Clock}>
            Якщо сервіс падає одразу після старту, Docker збільшує паузу між спробами. У{' '}
            <code>docker compose ps</code> це видно як постійний стан{' '}
            <code>Restarting</code> — привід читати журнал, а не чекати.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 12. .env VS env_file ----------

function EnvFilesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Settings}
          title="Змінні: .env проти env_file"
          subtitle="Two Mechanisms, Similar Names"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">.env — для самого Compose</h3>
            <Point>
              Файл <code>.env</code> поруч із <code>compose.yaml</code> Compose читає
              автоматично й підставляє значення у файл:{' '}
              <code>{'${POSTGRES_PASSWORD}'}</code>.
            </Point>
            <Point>
              <strong>У контейнери він сам не потрапляє.</strong> Змінна дійде до застосунку,
              лише якщо її явно передати через <code>environment</code>.
            </Point>
          </div>
          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">env_file — для контейнера</h3>
            <Point>
              <code>env_file: api.env</code> передає всі змінні з файлу в середовище
              контейнера, як набір <code>-e</code>. Застосунок читає їх як звичайні змінні
              середовища (<code>os.environ</code>).
            </Point>
            <Point>
              Якщо змінна задана і там, і в <code>environment</code>, перемагає{' '}
              <code>environment</code>.
            </Point>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div>
            <div className="mb-base">
              <CodeBlock title=".env">{`
POSTGRES_PASSWORD=secret
API_TAG=0.1
`}</CodeBlock>
            </div>
            <CodeBlock title="api.env">{`
DATABASE_URL=postgresql://postgres:secret@postgres:5432/wishlist
REDIS_URL=redis://redis:6379/0
`}</CodeBlock>
          </div>
          <CodeBlock title="compose.yaml">{`
services:
  postgres:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD:?set it in .env}

  api:
    image: wishlist-api:\${API_TAG:-dev}
    env_file: api.env    # app reads these via os.environ
`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="red" icon={Lock}>
            <code>.env</code> і <code>api.env</code> з паролями — у <code>.gitignore</code>. У
            репозиторій кладуть <code>.env.example</code> з назвами змінних і безпечними
            значеннями.
          </HighlightBox>
          <HighlightBox color="blue" icon={BookOpen}>
            Жоден із цих файлів не потрапляє в Dockerfile: на етапі збірки значення передають
            лише через <code>build.args</code>. А <code>.env</code> у каталозі wishlist-ui —
            третій, окремий випадок: його читає Vite під час збірки, а не Compose.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

function EnvStagesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Layers}
          title="Куди потрапляє змінна"
          subtitle="Compose Time, Build Time, Run Time"
        />

        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-1">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Розбір compose.yaml</p>
              <p className="fs-body-sm text-muted mt-sm">
                <code>.env</code> → підстановка <code>{'${VAR}'}</code>. Бачить лише сам Compose.
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">2</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Збірка образу</p>
              <p className="fs-body-sm text-muted mt-sm">
                <code>build.args</code> → <code>ARG</code> у Dockerfile. Значення доступне інструкціям{' '}
                <code>RUN</code>, але в запущеному контейнері його вже немає.
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">3</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Робота контейнера</p>
              <p className="fs-body-sm text-muted mt-sm">
                <code>environment</code> / <code>env_file</code> → змінні середовища головного процесу
                (того, що з <code>CMD</code>). Вони перекривають <code>ENV</code> з Dockerfile. Працює лише для коду, що виконується в контейнері: api так,
                ui на nginx — ні.
              </p>
            </div>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <CodeBlock title="весь ланцюжок для ui">{`
# .env
VITE_API_BASE=http://localhost:8000

# compose.yaml
ui:
  build:
    context: ../wishlist-ui
    args:
      VITE_API_BASE: \${VITE_API_BASE}   # 1 → 2

# wishlist-ui/Dockerfile
ARG VITE_API_BASE                     # 2
RUN npm run build
`}</CodeBlock>
          <HighlightBox color="blue" icon={BookOpen}>
            Питання одне: <strong>коли</strong> потрібне значення? Адресу API Vite вшиває в
            бандл під час збірки — тому <code>args</code>. Рядок підключення до бази
            застосунок читає під час роботи — тому <code>env_file</code>. Пароль у{' '}
            <code>ARG</code> не передають: він лишається в історії образу.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 13. VOLUMES IN COMPOSE ----------

function ComposeVolumesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={HardDrive}
          title="Томи в Compose"
          subtitle="Named and Anonymous Volumes"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="compose.yaml">{`
services:
  postgres:
    image: postgres:16
    volumes:
      - pgdata:/var/lib/postgresql/data   # named volume

  ui-dev:
    volumes:
      - ../wishlist-ui:/app               # bind mount: the code
      - /app/node_modules                 # anonymous volume

volumes:
  pgdata:                                 # declared once, at the top level
`}</CodeBlock>

          <div>
            <InfoCard
              icon={Database}
              title="Іменований том"
              subtitle="Named volume"
              description="Оголошується на верхньому рівні файлу. Справжнє ім'я — з префіксом проєкту: wishlist_pgdata. Переживає docker compose down"
              color="green"
              delay={1}
            />
            <InfoCard
              icon={Copy}
              title="Анонімний том"
              subtitle="Anonymous volume"
              description="Лише шлях, без імені. Типовий прийом: зберегти node_modules з образу, щоб прив'язаний каталог коду не перекрив його вмістом свого node_modules"
              color="purple"
              delay={2}
            />
          </div>
        </div>

        <CodeBlock title="де лежать дані">{`
docker volume ls                       # wishlist_pgdata
docker compose down                    # containers removed, volumes kept
docker compose down -v                 # volumes removed: the database starts empty
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col mt-xl">
          <HighlightBox color="red" icon={AlertTriangle}>
            <code>down -v</code> видаляє <strong>всі томи проєкту</strong>, зокрема
            іменовані. Зручно, щоб почати з чистої бази, і катастрофічно, якщо ввести
            механічно на сервері.
          </HighlightBox>
          <HighlightBox color="orange" icon={Database}>
            Зміна мажорної версії бази на тому самому томі не спрацює:{' '}
            <code>postgres:16</code> → <code>postgres:17</code> відмовиться стартувати з даними
            попередньої версії. Оновлення бази — окрема процедура.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 14. DEV MODE ----------

function DevModeSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Code}
          title="Код у розробці: каталог і watch"
          subtitle="Changing Code Without Rebuilding"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Перезбирати образ після кожної правки — довго. У розробці код підключають у
          контейнер, а застосунок перезапускається сам, коли файли змінюються.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-2">
            <CodeBlock title="варіант 1: прив'язаний каталог">{`
services:
  api:
    build: ../wishlist-api
    command: ["uvicorn", "app.main:app",
              "--host", "0.0.0.0", "--reload"]
    volumes:
      - ../wishlist-api/app:/app/app
`}</CodeBlock>
            <Point>
              Контейнер бачить файли хоста напряму, <code>--reload</code> підхоплює зміни.
              Просто, але на Mac і Windows повільно.
            </Point>
          </div>

          <div className="fade-in-delay-3">
            <CodeBlock title="варіант 2: docker compose watch">{`
services:
  api:
    build: ../wishlist-api
    command: ["uvicorn", "app.main:app",
              "--host", "0.0.0.0", "--reload"]
    develop:
      watch:
        - action: sync
          path: ../wishlist-api/app
          target: /app/app
        - action: rebuild
          path: ../wishlist-api/requirements.txt
`}</CodeBlock>
            <Point>
              Compose сам копіює змінені файли в контейнер, а при зміні залежностей
              перезбирає образ. Запуск — <code>docker compose watch</code>.
            </Point>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="outlined-card outlined-card--purple fade-in-delay-4">
            <DefBadge term="sync" description="скопіювати змінені файли в контейнер" color="purple" />
            <DefBadge term="rebuild" description="перезібрати образ і перестворити сервіс" color="purple" />
            <DefBadge term="sync+restart" description="скопіювати й перезапустити, якщо застосунок сам зміни не підхоплює" color="purple" />
          </div>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Прив'язаний каталог підключає файли з правами користувача хоста. Якщо в образі
            застосунок працює від <code>app</code> з UID 10001, йому може не вистачити прав
            на запис. <code>watch</code> цієї проблеми не має: файли копіюються в контейнер.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 15. OVERRIDES & PROFILES ----------

function OverridesProfilesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Layers}
          title="Перевизначення й профілі"
          subtitle="Override Files and Profiles"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Файли перевизначення — різні середовища</h3>
            <Point>
              <code>compose.override.yaml</code> поруч з основним файлом Compose підхоплює
              автоматично й накладає поверх. Туди кладуть те, що потрібно лише в розробці.
            </Point>
            <Point>
              Для інших середовищ файли вказують явно: <code>-f compose.yaml -f compose.prod.yaml</code>.
              З <code>-f</code> override-файл автоматично вже не підхоплюється.
            </Point>
          </div>
          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Профілі — необов'язкові сервіси</h3>
            <Point>
              Сервіс із <code>profiles</code> не стартує за замовчуванням — лише тоді, коли
              профіль увімкнено явно.
            </Point>
            <Point>
              Типові приклади: веб-клієнт бази даних, тестовий раннер, генератор тестових
              даних.
            </Point>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="compose.override.yaml — лише для розробки">{`
services:
  api:
    command: ["uvicorn", "app.main:app",
              "--host", "0.0.0.0", "--reload"]
  postgres:
    ports:
      - "127.0.0.1:5432:5432"
`}</CodeBlock>
          <CodeBlock title="compose.yaml — сервіс за профілем">{`
services:
  adminer:
    image: adminer:4
    profiles: [tools]
    ports:
      - "127.0.0.1:8081:8080"

# docker compose --profile tools up -d
`}</CodeBlock>
        </div>

        <HighlightBox color="green" icon={FileCheck}>
          Коли файлів кілька, легко заплутатися, що звідки прийшло.{' '}
          <code>docker compose config</code> показує остаточний результат після всіх
          накладань — перевіряйте ним, а не здогадами.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 16. FINAL COMPOSE ----------

function FinalComposeSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={FileCheck}
          title="Зведений compose.yaml"
          subtitle="Putting It All Together: wishlist"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="compose.yaml" color="green">{`
services:
  ui:
    build:
      context: ../wishlist-ui
      args:
        VITE_API_BASE: http://localhost:8000
    ports:
      - "8080:80"
    restart: unless-stopped

  api:
    build: ../wishlist-api
    environment:
      DATABASE_URL: postgresql://wish:\${POSTGRES_PASSWORD}@postgres:5432/wishlist
      REDIS_URL: redis://redis:6379/0
    ports:
      - "8000:8000"
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    restart: unless-stopped

  postgres:
    image: postgres:16
    environment:
      POSTGRES_USER: wish
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD:?set it in .env}
      POSTGRES_DB: wishlist
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U wish -d wishlist"]
      interval: 5s
      timeout: 3s
      retries: 5
    restart: unless-stopped

  redis:
    image: redis:7
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 3s
      retries: 5
    restart: unless-stopped

volumes:
  pgdata:
`}</CodeBlock>

          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Що тут зібрано</h3>
            <DefBadge term="build" description="обидва образи збираються з Dockerfile, адреса API для UI — через args" color="green" />
            <DefBadge term="імена" description="api звертається до postgres і redis за іменами сервісів" color="green" />
            <DefBadge term="ports" description="опубліковано лише UI та API, база й кеш — тільки всередині мережі" color="green" />
            <DefBadge term="healthy" description="API стартує, коли база й Redis справді готові" color="green" />
            <DefBadge term="restart" description="сервіси піднімаються після падіння процесу" color="green" />
            <DefBadge term="томи" description="дані Postgres переживають перестворення контейнера" color="green" />
            <DefBadge term=".env" description="пароль не в репозиторії, а в локальному файлі" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="purple" icon={Package}>
            Це стартова точка «локального середовища» в лабораторній:{' '}
            <code>docker compose up -d --build</code> — і UI доступний на{' '}
            <code>http://localhost:8080</code>.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            UI на порту 8080 звертається до API на 8000 — для браузера це різні джерела. API
            має дозволяти запити з <code>http://localhost:8080</code> (CORS) — детально в
            лекції про мережі.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 17. REGISTRIES ----------

function RegistriesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Warehouse}
          title="Реєстри образів"
          subtitle="Where Images Live"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Поки образ лежить лише на вашому ноутбуці, його не може запустити ні колега, ні
            сервер. Реєстр зберігає образи й роздає їх за іменем: зібрали один раз —
            завантажують усі.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={Globe}
            title="Docker Hub"
            subtitle="docker.io"
            description="Реєстр за замовчуванням: тут офіційні образи python, postgres, nginx. Якщо адресу реєстру не вказано — образ шукається тут"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={Package}
            title="GitHub Container Registry"
            subtitle="ghcr.io"
            description="Прив'язаний до репозиторіїв і прав GitHub. З GitHub Actions публікує без окремих паролів — саме його використовуємо в курсі"
            color="purple"
            delay={3}
          />
          <InfoCard
            icon={Server}
            title="Хмарні реєстри"
            subtitle="ECR, Artifact Registry, ACR"
            description="Реєстри AWS, Google Cloud та Azure — поруч із серверами, де образи запускаються, з доступом через права хмари"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={Warehouse}
            title="Власний реєстр"
            subtitle="Harbor, GitLab"
            description="Розгортається на власній інфраструктурі: повний контроль, сканування, правила зберігання — і повна відповідальність"
            color="orange"
            delay={5}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <CodeBlock title="повне ім'я образу">{`
python:3.12-slim
# → docker.io/library/python:3.12-slim

nromanen/wishlist-api:1.4.2
# → docker.io/nromanen/wishlist-api:1.4.2

ghcr.io/nromanen/wishlist-api:1.4.2
# registry is explicit
`}</CodeBlock>
          <CodeBlock title="опублікувати вручну">{`
docker tag wishlist-api:dev \\
  ghcr.io/nromanen/wishlist-api:1.4.2
docker push ghcr.io/nromanen/wishlist-api:1.4.2
`}</CodeBlock>
        </div>
      </div>
    </div>
  );
}

// ---------- 18. TAGGING ----------

function TaggingSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Tag}
          title="Схема тегування"
          subtitle="Tags With a Meaning"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Тег має відповідати на питання <strong>«що саме це за образ»</strong>: яка
            версія, з якого коміту. Тоді завжди зрозуміло, що працює в середовищі і на що
            відкочуватися.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl" style={{ alignItems: 'start' }}>
          <CodeBlock title="подія → теги">{`
push to main      → sha-a1b2c3d, main
git tag v1.4.2    → 1.4.2, 1.4, 1, latest, sha-a1b2c3d
pull request      → (build only, nothing pushed)
`}</CodeBlock>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <DefBadge term="1.4.2" description="точна версія: за домовленістю публікується один раз і не перезаписується" color="purple" />
            <DefBadge term="1.4" description="рухомий: найновіший випуск лінійки 1.4.x" color="purple" />
            <DefBadge term="1" description="рухомий: найновіший випуск лінійки 1.x" color="purple" />
            <DefBadge term="latest" description="останній реліз, а не останній зібраний образ" color="purple" />
            <DefBadge term="sha-a1b2c3d" description="хеш коміту: будь-який образ можна простежити до коду" color="purple" />
            <DefBadge term="main" description="рухомий тег гілки — останній зібраний образ для тестового середовища" color="purple" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="green" icon={CheckCircle2}>
            Розгортають <strong>точну версію</strong> або дайджест, а не рухомий тег. Тоді
            той самий опис розгортання сьогодні й через місяць запускає той самий образ.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Перезаписати тег версії технічно можна, і це найгірше, що можна з ним зробити.
            Деякі реєстри вміють це забороняти — правило незмінних тегів.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}
// ---------- 19. PUBLISH FROM CI ----------

function PublishFromCiSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Upload}
          title="Публікація з конвеєра"
          subtitle="Build and Push in GitHub Actions"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title=".github/workflows/publish.yml" color="blue">{`
name: Publish image

on:
  push:
    branches: [main]
    tags: ['v*']

jobs:
  publish:
    runs-on: ubuntu-24.04
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v5
      - uses: docker/setup-qemu-action@v3
      - uses: docker/setup-buildx-action@v3

      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}

      - id: meta
        uses: docker/metadata-action@v5
        with:
          images: ghcr.io/\${{ github.repository }}
          tags: |
            type=sha
            type=ref,event=branch
            type=semver,pattern={{version}}
            type=semver,pattern={{major}}.{{minor}}
            type=semver,pattern={{major}}

      - uses: docker/build-push-action@v6
        with:
          context: .
          platforms: linux/amd64,linux/arm64
          push: true
          tags: \${{ steps.meta.outputs.tags }}
          labels: \${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
`}</CodeBlock>

          <div className="outlined-card outlined-card--purple fade-in-delay-1">
            <DefBadge term="packages: write" description="дозвіл на публікацію в ghcr.io для цього прогону" color="purple" />
            <DefBadge term="GITHUB_TOKEN" description="тимчасовий токен прогону — окремий секрет із паролем не потрібен" color="purple" />
            <DefBadge term="metadata-action" description="обчислює теги за схемою з попереднього слайда; для тегу версії сам додає latest" color="purple" />
            <DefBadge term="platforms" description="один образ для amd64 і arm64 — exec format error більше не загрожує" color="purple" />
            <DefBadge term="setup-qemu" description="емуляція іншої архітектури, щоб зібрати arm64 на amd64-машині" color="purple" />
            <DefBadge term="cache: gha" description="кеш шарів між прогонами — та сама ідея, що кеш залежностей у CI" color="purple" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={CheckCircle2}>
            На pull request образ варто лише <strong>збирати</strong>, щоб перевірити
            Dockerfile, але не публікувати: <code>push: false</code> або окремий конвеєр.
            Публікується лише те, що потрапило в основну гілку чи отримало тег версії.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Імена образів у реєстрах — лише в нижньому регістрі. Якщо збираєте ім'я вручну з{' '}
            <code>github.repository</code>, а у власника є великі літери (<code>MyOrg</code>), —
            приведіть його до нижнього регістру.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 20. PRIVATE REGISTRIES (self-study) ----------

function PrivateRegistrySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={KeyRound}
          title="Приватні реєстри й доступ"
          subtitle="Logging In Without Leaking Credentials"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Публічний образ завантажить будь-хто. Приватний — лише той, хто увійшов у реєстр
            з потрібними правами: розробник, конвеєр CI, сервер, на якому образ запускається.
            Нижче — як отримати доступ, як увійти і як не залишити токен там, де його можна
            прочитати.
          </p>
        </div>

        {/* 1. Token */}
        <h3 className="info-card__title mb-base">1. Токен замість пароля</h3>
        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue">
            <Point>
              Створюється в Settings → Developer settings → Personal access tokens →{' '}
              <strong>Tokens (classic)</strong>: ghcr.io працює саме з класичними токенами.
            </Point>
            <Point>
              Мінімум прав і обмежений термін дії. Токен показують один раз, і це той самий
              пароль: не комітьте його й не надсилайте в чат.
            </Point>
          </div>

          <div className="outlined-card outlined-card--purple">
            <h3 className="info-card__title mb-sm">Які права дати</h3>
            <DefBadge term="read:packages" description="лише завантаження образів — для сервера, який їх запускає" color="purple" />
            <DefBadge term="write:packages" description="публікація образів (читання вмикається разом із ним) — для розробника, який пушить вручну" color="purple" />
            <Point>
              Пароль від акаунта GitHub для <code>docker login</code> не підходить — лише токен.
            </Point>
            <Point>
              Різним машинам — різні токени. Якщо сервер скомпрометують, токен з{' '}
              <code>read:packages</code> не дасть запушити підмінений образ.
            </Point>
          </div>
        </div>

        {/* 2. Login */}
        <h3 className="info-card__title mb-base">2. Вхід у реєстр</h3>
        <div className="slide-grid slide-grid--2col mb-base">
          <CodeBlock title="вручну, у терміналі">{`
# Docker prompts for the token: hidden, not in shell history
docker login ghcr.io -u <your-github-username>
# Login Succeeded

docker pull ghcr.io/nromanen/wishlist-api:1.4.2
`}</CodeBlock>
          <CodeBlock title="у скрипті чи CI">{`
# no one to type the token: it comes from a secret variable
echo "$CR_PAT" | docker login ghcr.io \\
  -u <user> --password-stdin
`}</CodeBlock>
        </div>
        <div className="outlined-card outlined-card--blue mb-xl">
          <Point>
            Ім'я користувача — <strong>ваше</strong> на GitHub, а не власника репозиторію.
            Доступ до чужого пакета ви маєте, якщо він публічний або власник його надав.
          </Point>
          <Point>
            Ніколи не передавайте токен як <code>-p &lt;token&gt;</code>: він потрапить в історію
            shell і буде видний іншим користувачам через <code>ps</code>.
          </Point>
          <Point>
            Вхід окремий для кожного реєстру: логін у Docker Hub не дає доступу до ghcr.io.
          </Point>
          <Point>
            Ім'я образу — повне, з <code>ghcr.io/</code>. Без префікса Docker шукає образ на
            Docker Hub, і <code>nromanen/wishlist-api</code> там — зовсім інший образ.
          </Point>
        </div>

        {/* 3. Where credentials live */}
        <h3 className="info-card__title mb-base">3. Де зберігається вхід</h3>
        <div className="slide-grid slide-grid--2col mb-base">
          <CodeBlock title="~/.docker/config.json — з помічником">{`
{
  "auths": {
    "ghcr.io": {}
  },
  "credsStore": "desktop"
}
`}</CodeBlock>
          <CodeBlock title="~/.docker/config.json — без помічника">{`
{
  "auths": {
    "ghcr.io": { "auth": "dXNlcjpnaHBfeHh4" }
  }
}

$ echo "dXNlcjpnaHBfeHh4" | base64 -d
user:ghp_xxx
`}</CodeBlock>
        </div>
        <div className="outlined-card outlined-card--blue mb-xl">
          <Point>
            <code>credsStore</code> каже Docker віддавати облікові дані <strong>помічнику</strong> —
            окремій програмі, яка кладе їх у сховище паролів ОС: Keychain (macOS), Credential
            Manager (Windows), GNOME Keyring (Linux з графічним середовищем). Порожній{' '}
            <code>{'{}'}</code> у <code>auths</code> — лише позначка, що вхід є.
          </Point>
          <Point>
            Docker Desktop налаштовує помічника сам. На Linux-сервері зі звичайним Docker Engine
            його за замовчуванням <strong>немає</strong> — токен лежить у файлі в base64, а
            base64 не шифрування.
          </Point>
          <Point>
            Перевірити: <code>cat ~/.docker/config.json</code>. Видалити вхід:{' '}
            <code>docker logout ghcr.io</code> — обов'язково на спільних і тимчасових машинах.
          </Point>
        </div>

        {/* 4. Compose */}
        <h3 className="info-card__title mb-base">4. Вхід і Docker Compose</h3>
        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="порядок команд">{`
docker login ghcr.io -u <user>   # once per machine
docker compose pull              # uses the saved login
docker compose up -d
`}</CodeBlock>
          <div className="outlined-card outlined-card--purple">
            <Point>
              У <code>compose.yaml</code> облікових даних немає й бути не може. Compose бере
              вхід тієї машини, на якій його запущено.
            </Point>
            <Point>
              Без входу <code>docker compose pull</code> чи <code>up</code> впаде з{' '}
              <code>denied</code> для сервісу з приватним образом. Сервіси з <code>build:</code>{' '}
              вхід не потребують, якщо базовий образ публічний.
            </Point>
          </div>
        </div>

        {/* 5. GitHub Actions */}
        <h3 className="info-card__title mb-base">5. Вхід у GitHub Actions</h3>
        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title=".github/workflows/image.yml (фрагмент)">{`
permissions:
  contents: read      # actions/checkout needs it
  packages: write     # push to ghcr.io

steps:
  - uses: docker/login-action@v3
    with:
      registry: ghcr.io
      username: \${{ github.actor }}
      password: \${{ secrets.GITHUB_TOKEN }}
`}</CodeBlock>
          <div className="outlined-card outlined-card--purple">
            <Point>
              <code>GITHUB_TOKEN</code> створюється автоматично на кожен прогін і перестає діяти,
              щойно завершується job. Власний токен чи секрет створювати не треба.
            </Point>
            <Point>
              Щойно у workflow з'являється блок <code>permissions</code>, усе, чого в ньому
              немає, стає <code>none</code>. Тому потрібен і <code>contents: read</code> —
              інакше впаде checkout.
            </Point>
            <Point>
              Якщо пакет спершу запушили вручну з ноутбука, дайте репозиторію доступ до нього:
              налаштування пакета → Manage Actions access. Інакше push з workflow отримає{' '}
              <code>denied</code>.
            </Point>
          </div>
        </div>

        {/* 6. Server scenario */}
        <h3 className="info-card__title mb-base">6. Сценарій: оновити api на сервері</h3>
        <div className="numbered-list mb-xl">
          <div className="numbered-list__item">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">CI публікує реліз</p>
              <p className="fs-body-sm text-muted mt-sm">
                Git-тег <code>v1.4.2</code> → образ <code>ghcr.io/nromanen/wishlist-api:1.4.2</code>
              </p>
            </div>
          </div>
          <div className="numbered-list__item">
            <div className="numbered-list__number">2</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Для сервера — окремий токен</p>
              <p className="fs-body-sm text-muted mt-sm">
                Лише <code>read:packages</code>: сервер має тягнути образи, а не публікувати їх.
              </p>
            </div>
          </div>
          <div className="numbered-list__item">
            <div className="numbered-list__number">3</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Вхід один раз</p>
              <p className="fs-body-sm text-muted mt-sm">
                <code>docker login ghcr.io -u &lt;user&gt;</code> на сервері. Сервер лишається
                залогіненим, щоб наступні оновлення не вимагали токена.
              </p>
            </div>
          </div>
          <div className="numbered-list__item">
            <div className="numbered-list__number">4</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Оновлення версії</p>
              <p className="fs-body-sm text-muted mt-sm">
                У <code>compose.yaml</code> — <code>image: ghcr.io/nromanen/wishlist-api:1.4.2</code>,
                далі <code>docker compose pull api</code> і <code>docker compose up -d api</code>.
              </p>
            </div>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Package}>
            Видимість пакета в ghcr.io налаштовується окремо від репозиторію: новий образ
            за замовчуванням приватний, навіть якщо репозиторій публічний. Щоб образ тягнули
            без входу, змініть видимість у налаштуваннях пакета.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            <strong>Отримали denied чи unauthorized?</strong> Перевірте по черзі: 1) ім'я образу
            починається з <code>ghcr.io/</code>; 2) є вхід саме в ghcr.io —{' '}
            <code>cat ~/.docker/config.json</code>; 3) у токена є <code>read:packages</code> і
            він не прострочений; 4) пакет публічний або вам надано доступ.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 21. REGISTRY LIMITS (self-study) ----------

function RegistryLimitsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Gauge}
          title="Обмеження безкоштовних реєстрів"
          subtitle="Rate Limits and Storage"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Docker Hub обмежує кількість завантажень за певний час: для анонімних запитів —
            за IP-адресою, для автентифікованих ліміт вищий. Раннери CI ділять IP між багатьма
            користувачами, тож конвеєр може впасти з <code>toomanyrequests</code>, хоча ви
            самі завантажили лише кілька образів.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Що допомагає</h3>
            <Point>Входити в Docker Hub навіть для публічних образів — ліміт стає вищим</Point>
            <Point>Брати офіційні образи з дзеркал, наприклад <code>public.ecr.aws/docker/library/python</code></Point>
            <Point>Кешувати завантажені образи у власному реєстрі (pull-through cache)</Point>
          </div>
          <div className="outlined-card outlined-card--orange fade-in-delay-3">
            <h3 className="info-card__title mb-sm">Місце теж обмежене</h3>
            <Point>Кожен push у main — новий образ, і за місяць їх накопичуються сотні</Point>
            <Point>Для приватних образів безкоштовне сховище має квоту</Point>
            <Point>Старі версії прибирають правилами зберігання: лишати теги версій, видаляти старі <code>sha-*</code></Point>
          </div>
        </div>

        <HighlightBox color="blue" icon={BookOpen}>
          Конкретні ліміти й квоти реєстри час від часу змінюють. Перед тим як будувати на
          них конвеєр, перевірте актуальні умови на сайті реєстру.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 22. PRUNE (self-study) ----------

function PruneSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Trash2}
          title="Очищення: образи, томи, кеш"
          subtitle="Getting Disk Space Back"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Кожна збірка лишає старі шари, кожен експеримент — зупинені контейнери й томи.
          Через кілька тижнів роботи Docker легко займає десятки гігабайтів.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="що займає місце">{`
docker system df          # images, containers, volumes, build cache

docker container prune    # remove all stopped containers
docker image prune        # remove dangling images (untagged, <none>)
docker image prune -a     # remove all images not used by any container
docker builder prune      # remove build cache — often the biggest part
docker volume prune       # remove anonymous volumes not in use
                          # -a also removes named ones: database data included
`}</CodeBlock>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <DefBadge term="dangling" description="образ без тегу: попередня версія, яку перекрила нова збірка з тим самим тегом" color="purple" />
            <DefBadge term="build cache" description="кеш шарів збірки; після очищення наступна збірка буде повільнішою" color="purple" />
            <DefBadge term="system prune" description="контейнери, мережі, образи без тегу й кеш разом; томи — лише з --volumes" color="purple" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="red" icon={AlertTriangle}>
            <code>docker volume prune -a</code> видаляє й <strong>іменовані</strong> томи,
            які зараз не підключені, — тобто базу зупиненого проєкту. Без <code>-a</code>{' '}
            сучасний Docker прибирає лише анонімні.
          </HighlightBox>
          <HighlightBox color="blue" icon={Laptop}>
            На Mac і Windows образи живуть на віртуальному диску ВМ Docker Desktop. Його
            розмір обмежують у налаштуваннях Docker Desktop, а очищення вивільняє місце
            всередині.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 23. COMPOSE LIMITS ----------

function ComposeLimitsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Server}
          title="Межі Compose"
          subtitle="What Compose Does Not Do"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm">✅ Для чого Compose чудовий</h3>
            <Point>Локальне середовище розробника</Point>
            <Point>Інтеграційні тести в конвеєрі: підняти базу, прогнати тести, прибрати</Point>
            <Point>Демо- й тестові стенди</Point>
            <Point>Невеликий продакшен на одному сервері — цілком робочий варіант</Point>
          </div>
          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm">⚠️ Чого він не робить</h3>
            <Point>Працює на одному хості: зупинився сервер — зупинилося все</Point>
            <Point>Не переносить сервіси на іншу машину, коли ця перевантажена чи впала</Point>
            <Point>Не перезапускає контейнери, що не проходять перевірку стану</Point>
            <Point>Оновлення перестворює контейнери, тобто з коротким простоєм</Point>
            <Point>Масштабування — лише на тій самій машині</Point>
          </div>
        </div>

        <HighlightBox color="blue" icon={BookOpen}>
          Ці задачі розв'язують керовані платформи та оркестратори контейнерів. Переходять до них не тому, що Compose «поганий», а тоді, коли
          одного сервера стає мало.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 24. COMMON MISTAKES ----------

function CommonMistakesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={AlertTriangle} title="Типові помилки" subtitle="Common Mistakes" />

        <div className="slide-grid slide-grid--2col">
          <InfoCard
            icon={Network}
            title="localhost у рядку підключення"
            subtitle={<SlideLink to={7} />}
            description="У контейнері localhost — це він сам. До бази звертаються за іменем сервісу"
            color="orange"
            delay={1}
          />
          <InfoCard
            icon={Plug}
            title="База опублікована назовні"
            subtitle={<SlideLink to={8} />}
            description='"5432:5432" відкриває базу всій мережі. Не публікувати зовсім або лише на 127.0.0.1'
            color="orange"
            delay={1}
          />
          <InfoCard
            icon={Hammer}
            title="up без --build"
            subtitle={<SlideLink to={5} />}
            description="Код змінили, а запустився старий образ. Після змін — docker compose up --build"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={Clock}
            title="depends_on без перевірки стану"
            subtitle={<SlideLink to={10} />}
            description="Контейнер бази запущено, але база ще не готова — API падає на старті"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={Settings}
            title="Очікування .env у контейнері"
            subtitle={<SlideLink to={12} />}
            description=".env потрапляє лише в compose.yaml. У контейнер — через environment або env_file"
            color="orange"
            delay={3}
          />
          <InfoCard
            icon={Trash2}
            title="down -v механічно"
            subtitle={<SlideLink to={13} />}
            description="Разом з контейнерами зникли томи, а з ними — уся база"
            color="orange"
            delay={3}
          />
          <InfoCard
            icon={Database}
            title="Нова версія бази на старому томі"
            subtitle={<SlideLink to={13} />}
            description="postgres:16 → 17 з тими самими даними не стартує. Оновлення бази — окрема процедура"
            color="orange"
            delay={4}
          />
          <InfoCard
            icon={Tag}
            title="Перезаписаний тег версії"
            subtitle={<SlideLink to={18} />}
            description="Під тим самим 1.4.2 тепер інший образ — і вже незрозуміло, що де працює"
            color="orange"
            delay={4}
          />
        </div>
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
              <strong>Compose описує середовище кодом:</strong> сервіси, мережу й томи
              піднімає одна команда, однаково для всієї команди
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-2">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>У мережі Compose ім'я сервісу — це адреса.</strong> Публікують лише ті
              порти, до яких звертаються з хоста
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-3">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>«Запущено» ≠ «готово»:</strong> порядок старту — через перевірку стану,
              відновлення після падіння — через політику перезапуску
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-4">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>.env налаштовує Compose, env_file — контейнер.</strong> Паролі — поза
              репозиторієм, дані — в томах, і <code>down -v</code> їх видаляє
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-5">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Тег має значення:</strong> точна версія не перезаписується, хеш коміту
              пов'язує образ із кодом, розгортають точну версію
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-5">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Публікує конвеєр, а не людина:</strong> теги за схемою, обидві
              архітектури, тимчасовий токен замість пароля
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--gradient-green-blue mt-xl fade-in-delay-5">
          <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
            Новий учасник команди має запустити все середовище{' '}
            <strong>однією командою</strong>
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
          Далі — лабораторна робота 5: два образи, локальне середовище й публікація з конвеєра
        </p>

        <div className="questions-slide__links">
          <ExtLink href="https://docs.docker.com/compose/" color="blue">
            Docker Compose — документація
          </ExtLink>
          <ExtLink href="https://docs.docker.com/reference/compose-file/" color="purple">
            Довідник compose.yaml
          </ExtLink>
          <ExtLink href="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry" color="green">
            GitHub Container Registry
          </ExtLink>
          <ExtLink href="https://docs.docker.com/build/ci/github-actions/" color="orange">
            Docker у GitHub Actions
          </ExtLink>
        </div>
      </div>
    </div>
  );
}