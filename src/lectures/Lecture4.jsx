import React, { useState } from 'react'
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import SlideLink from '../components/SlideLink';
import {
  Package, FileCode2, ShieldCheck, ChevronDown, ChevronUp,
  Target,
  AlertTriangle,
  BookOpen,
  HelpCircle,
  Laptop,
  Server,
  Cpu,
  Layers,
  Play,
  Tag,
  FileCode,
  Zap,
  FolderX,
  GitMerge,
  Box,
  Minimize2,
  UserX,
  HeartPulse,
  Settings,
  HardDrive,
  Workflow,
  ScrollText,
  Power,
  ScanSearch,
  Bug,
  FileCheck,
  CheckCircle2,
  XCircle,
  Lock,
  Eye,
  Gauge,
  Database,
  Wrench,
} from 'lucide-react';

const slides = [
  { id: 1, title: 'Титульний слайд', component: TitleSlide },
  { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
  { id: 3, title: 'Проблема «на моїй машині працює»', component: WorksOnMyMachineSlide },
  { id: 4, title: 'Віртуалізація проти контейнеризації', component: VmVsContainerSlide },
  { id: 5, title: 'На чому тримаються контейнери', component: NamespacesCgroupsSlide, selfStudy: true },
  { id: 6, title: 'Образ, шар, контейнер', component: ImageLayerContainerSlide },
  { id: 7, title: 'Життєвий цикл контейнера', component: ContainerLifecycleSlide },
  { id: 8, title: 'Реєстр: тег проти дайджесту', component: RegistryTagsSlide },
  { id: 9, title: 'Dockerfile: основні інструкції', component: DockerfileBasicsSlide },
  { id: '9_1', title: 'Що ще буває в Dockerfile', component: DockerfileMoreSlide, selfStudy: true },
  { id: 10, title: 'Порядок інструкцій і кеш збірки', component: BuildCacheSlide },
  { id: 11, title: 'Контекст збірки і .dockerignore', component: BuildContextSlide },
  { id: 12, title: 'Багатоетапна збірка', component: MultiStageSlide },
  { id: '12_1', title: 'Маршрутизація SPA в nginx', component: SpaRoutingSlide, selfStudy: true },
  { id: 13, title: 'Вибір базового образу', component: BaseImageSlide },
  { id: 14, title: 'Розмір образу: до і після', component: ImageSizeSlide },
  { id: 15, title: 'Непривілейований користувач', component: NonRootSlide },
  { id: 16, title: 'Конфігурація через середовище', component: ConfigEnvSlide },
  { id: 17, title: 'Дані: том проти шару', component: VolumesSlide },
  { id: 18, title: 'Один процес на контейнер', component: SingleProcessSlide },
  { id: 19, title: 'Сигнали й коректна зупинка', component: SignalsSlide },
  { id: 20, title: 'Журнали у стандартний вивід', component: LoggingSlide },
  { id: 21, title: 'Перевірка стану контейнера', component: HealthcheckSlide },
  { id: 22, title: 'Сканування образу', component: ScanningSlide, selfStudy: true },
  { id: 23, title: 'Типові помилки', component: CommonMistakesSlide },
  { id: 24, title: 'Зведений Dockerfile', component: FinalDockerfileSlide },
  { id: 25, title: 'Підсумки', component: SummarySlide },
  { id: 26, title: 'Питання?', component: QuestionsSlide },
];

export default function Lecture4() {
  return <LectureLayout slides={slides} />;
}

// ============================================
// HELPERS
// ============================================

// Plain text line inside an outlined card
function Point({ children }) {
  return <p className="fs-body text-secondary mb-sm">{children}</p>;
}

function CollapsibleCodeBlock({ children, title, buttonLabel = "Показати", color = "orange" }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <div className="mt-sm">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="btn btn--secondary"
        >
          🔍 {buttonLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="mt-sm">
      <CodeBlock title={title} color={color}>
        {children}
      </CodeBlock>
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="btn btn--link text-muted mt-xs"
      >
        ▲ Сховати
      </button>
    </div>
  );
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
        Лекція 4 — Основи DevOps
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

// ---------- 2. OBJECTIVES ----------

function ObjectivesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Target} title="Мета лекції" subtitle="Learning Objectives" />

        <div className="slide-grid slide-grid--2col mb-xl">
          <BadgeCard
            letter="1"
            title="Зрозуміти, що таке контейнер"
            subtitle="What a container really is"
            description="Не маленька віртуальна машина, а звичайний процес хоста з обмеженнями. Звідси і переваги, і межі ізоляції"
            color="blue"
            delay={1}
          />
          <BadgeCard
            letter="2"
            title="Зібрати хороший образ"
            subtitle="Build a good image"
            description="Такий, що швидко перезбирається, мало важить і не тягне всередину зайвого: секретів, .git, node_modules"
            color="purple"
            delay={2}
          />
          <BadgeCard
            letter="3"
            title="Запускати коректно"
            subtitle="Run it properly"
            description="Не від root, конфігурація ззовні, журнали в stdout, дані в томі, коректна зупинка за сигналом"
            color="green"
            delay={3}
          />
          <BadgeCard
            letter="4"
            title="Перевірити результат"
            subtitle="Verify the result"
            description="Розмір, шари, стан контейнера, вразливості й типові помилки, на яких спотикаються всі"
            color="orange"
            delay={4}
          />
        </div>

        <HighlightBox color="blue" icon={Package}>
          Наскрізний приклад лекції — <strong>wishlist-api</strong> (FastAPI) і{' '}
          <strong>wishlist-ui</strong> (Vue + Vite). Ті два образи, що збиратимете
          в лабораторній роботі.

          <div>

          <ExtLink href="https://www.youtube.com/watch?v=3c-iBn73dDE&t=10s" color="blue">
            Docker Tutorial for Beginners
          </ExtLink>
          </div>

          <ExtLink href="https://www.youtube.com/watch?v=pg19Z8LL06w&t=5s" color="green">
            Docker Crash Course for Absolute Beginners
          </ExtLink>

        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 3. WORKS ON MY MACHINE ----------

function WorksOnMyMachineSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Laptop}
          title="Проблема «на моїй машині працює»"
          subtitle="It Works on My Machine"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--red fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Що відрізняється між машинами</h3>
            <Point>Версія мови: у вас Python 3.12, на сервері 3.10</Point>
            <Point>Системні бібліотеки: <code>libpq</code>, OpenSSL, локаль</Point>
            <Point>Операційна система: macOS, Windows, різні дистрибутиви Linux</Point>
            <Point>Глобально встановлені пакети, яких немає в <code>requirements.txt</code></Point>
            <Point>Змінні середовища, про які ніхто не пам'ятає</Point>
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Що дає контейнер</h3>
            <Point>Застосунок, залежності й системні бібліотеки — в одному артефакті</Point>
            <Point>Той самий образ запускається на ноутбуці, в CI і в продакшені</Point>
            <Point>Нове середовище піднімається однією командою, а не інструкцією на дві сторінки</Point>
            <Point>Збірка описана кодом і лежить у репозиторії поруч із застосунком</Point>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Контейнер не прибирає <strong>всіх</strong> відмінностей. Адреса бази даних, ключі
          й режим роботи різні для кожного середовища — все це виносимо за межі
          образу.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 4. VM VS CONTAINER ----------

function VmVsContainerSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Server}
          title="Віртуалізація проти контейнеризації"
          subtitle="Virtual Machines vs Containers"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--purple fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Віртуальна машина</h3>

            <div className="flex gap-sm mb-sm">
              <div className="flex flex-col gap-sm" style={{ flex: 1 }}>
                <span className="badge badge--solid-purple">Застосунок</span>
                <span className="badge badge--solid-purple">Бібліотеки</span>
                <span className="badge badge--solid-purple">Гостьова ОС</span>
                <p className="fs-body-sm text-muted" style={{ margin: 0, textAlign: 'center' }}>ВМ A</p>
              </div>
              <div className="flex flex-col gap-sm" style={{ flex: 1 }}>
                <span className="badge badge--solid-purple">Застосунок</span>
                <span className="badge badge--solid-purple">Бібліотеки</span>
                <span className="badge badge--solid-purple">Гостьова ОС</span>
                <p className="fs-body-sm text-muted" style={{ margin: 0, textAlign: 'center' }}>ВМ B</p>
              </div>
            </div>

            <DefBadge term="Гіпервізор" description="KVM, Hyper-V, VirtualBox" color="purple" />
            <DefBadge term="Залізо" description="сервер або ноутбук" color="purple" />
          </div>

          <div className="outlined-card outlined-card--blue fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Контейнер</h3>

            <div className="flex gap-sm mb-sm">
              <div className="flex flex-col gap-sm" style={{ flex: 1 }}>
                <span className="badge badge--solid-blue">Застосунок</span>
                <span className="badge badge--solid-blue">Бібліотеки</span>
                <p className="fs-body-sm text-muted" style={{ margin: 0, textAlign: 'center' }}>Контейнер A</p>
              </div>
              <div className="flex flex-col gap-sm" style={{ flex: 1 }}>
                <span className="badge badge--solid-blue">Застосунок</span>
                <span className="badge badge--solid-blue">Бібліотеки</span>
                <p className="fs-body-sm text-muted" style={{ margin: 0, textAlign: 'center' }}>Контейнер B</p>
              </div>
              <div className="flex flex-col gap-sm" style={{ flex: 1, justifyContent: 'flex-end' }}>
                <span className="badge badge--solid-cyan">Engine</span>
                <p className="fs-body-sm text-muted" style={{ margin: 0, textAlign: 'center' }}>звичайний процес</p>
              </div>
            </div>

            <DefBadge term="Ядро хоста" description="одне, спільне для контейнерів і менеджера контейнерів" color="blue" />
            <DefBadge term="Залізо" description="сервер або ноутбук" color="blue" />
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Менеджер контейнерів (container engine) — сусід контейнерів, а не шар під ними: він просить ядро створити
              процес з обмеженнями, а далі той працює з ядром напряму
            </p>
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-base">
          <InfoCard
            icon={Zap}
            title="Старт"
            subtitle="Startup"
            description="ВМ завантажує ОС хвилину. Контейнер стартує як звичайний процес — за долі секунди"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={HardDrive}
            title="Розмір"
            subtitle="Footprint"
            description="Образ ВМ важить гігабайти. Образ контейнера — від десятків до сотень мегабайт"
            color="purple"
            delay={4}
          />
          <InfoCard
            icon={Lock}
            title="Ізоляція"
            subtitle="Isolation"
            description="У ВМ окреме ядро, тож вона ізольована сильніше. Контейнери ділять ядро хоста"
            color="orange"
            delay={5}
          />
        </div>

        <HighlightBox color="blue" icon={Laptop}>
          Контейнер використовує ядро хоста, тож образ і ядро мають бути однієї родини.
          Linux-контейнерам потрібне ядро Linux, а в macOS і Windows його немає. Тому
          Docker Desktop і подібні застосунки (Podman Desktop, Colima) тихо запускають
          легку Linux-ВМ, а менеджер контейнерів і самі контейнери живуть у ній. Образ, зібраний у ній, — це
          образ для Linux під архітектуру процесора вашого комп'ютера. Windows-контейнери
          теж існують, але потребують ядра Windows і запускаються лише на Windows.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 5. NAMESPACES & CGROUPS ----------

function NamespacesCgroupsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Cpu}
          title="На чому тримаються контейнери"
          subtitle="Namespaces and cgroups"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCardFeatured
            icon={Eye}
            title="Простори імен"
            subtitle="Namespaces — що процес бачить"
            description="Ядро показує процесу власну картину світу: свої процеси, мережу, файлову систему й ім'я хоста"
            color="blue"
            delay={1}
          >
            <div className="mt-xl">
              <DefBadge term="pid" description="власна нумерація процесів: головний процес контейнера — PID 1" color="blue" />
              <DefBadge term="net" description="власні інтерфейси, IP і порти" color="blue" />
              <DefBadge term="mnt" description="власна коренева файлова система" color="blue" />
              <DefBadge term="uts" description="власне ім'я хоста" color="blue" />
              <DefBadge term="user" description="відображення UID контейнера на UID хоста" color="blue" />
            </div>
          </InfoCardFeatured>

          <InfoCardFeatured
            icon={Gauge}
            title="Контрольні групи"
            subtitle="cgroups — скільки процес може взяти"
            description="Ядро обмежує ресурси: пам'ять, процесор, кількість процесів. Перевищив ліміт пам'яті — процес вбиває OOM killer"
            color="purple"
            delay={2}
          >
            <div className="mt-xl">
              <CodeBlock title="обмеження ресурсів">{`
docker run --rm --memory=256m --cpus=0.5 \\
  wishlist-api:0.1
`}</CodeBlock>
            </div>
          </InfoCardFeatured>
        </div>

        <CodeBlock title="контейнер бачить лише себе">{`
$ docker run --rm alpine ps
PID   USER     TIME  COMMAND
    1 root      0:00 ps
`}</CodeBlock>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Контейнер — це звичайний процес хоста: <code>ps aux</code> на хості його покаже.
          Звідси і слабша ізоляція: вразливість ядра одна на всі контейнери.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 6. IMAGE, LAYER, CONTAINER ----------

function ImageLayerContainerSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Layers} title="Образ, шар, контейнер" subtitle="Image, Layer, Container" />

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Package}
            title="Образ"
            subtitle="Image"
            description="Незмінний шаблон: стос шарів лише для читання плюс метадані — яку команду запускати, які змінні задати"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={Layers}
            title="Шар"
            subtitle="Layer"
            description="Результат однієї інструкції RUN, COPY чи ADD. Однакові шари зберігаються й завантажуються один раз для всіх образів"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Box}
            title="Контейнер"
            subtitle="Container"
            description="Запущений екземпляр образу: його шари, спільні для всіх контейнерів з цього образу, плюс власний шар для запису, порожній на старті. Процес бачить усе це як одну файлову систему. docker rm прибирає лише шар для запису"
            color="green"
            delay={3}
          />
        </div>

        <CodeBlock title="з яких шарів складається образ">{`
$ docker history wishlist-api:0.1
IMAGE          CREATED BY                                      SIZE
a1b2c3d4e5f6   CMD ["uvicorn" "app.main:app" ...]              0B
<missing>      COPY . .                                        412kB
<missing>      RUN pip install -r requirements.txt             61MB
<missing>      COPY requirements.txt .                         312B
...            (шари базового образу python:3.12-slim)
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Шари лише <strong>додаються</strong>. Файл, видалений наступною інструкцією,
            фізично лишається в попередньому шарі — і в образі, і в реєстрі.
          </HighlightBox>
          <HighlightBox color="blue" icon={FileCheck}>
            Формат образу — відкритий стандарт <strong>OCI</strong>. Образ, зібраний Docker,
            запустить і Podman, і containerd, і будь-яка хмарна платформа.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 7. CONTAINER LIFECYCLE ----------

function ContainerLifecycleSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Play}
          title="Життєвий цикл контейнера"
          subtitle="Container Lifecycle"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="команди, які знадобляться щодня">{`
# build an image from the Dockerfile in the current directory
docker build -t wishlist-api:0.1 .

# start in background, publish port host:container
docker run -d --name api -p 8000:8000 wishlist-api:0.1

docker ps              # running containers
docker ps -a           # including stopped ones
docker logs -f api     # follow the output
docker exec -it api sh # shell inside a running container

docker stop api        # graceful stop
docker rm api          # remove container and its writable layer
`}</CodeBlock>

          <div className="fade-in-delay-1">
            <div className="outlined-card outlined-card--blue mb-base">
              <h3 className="info-card__title mb-sm">Стани</h3>
              <DefBadge term="created" description="створений, але ще не запущений" color="cyan" />
              <DefBadge term="running" description="процес працює" color="green" />
              <DefBadge term="exited" description="процес завершився, файли контейнера ще на місці" color="orange" />
              <DefBadge term="removed" description="контейнера й шару для запису більше немає" color="purple" />
            </div>

            <div className="outlined-card outlined-card--green">
              <Point>
                <strong className="text-green">docker run --rm</strong> — контейнер видалиться
                сам після завершення. Зручно для разових команд і експериментів.
              </Point>
            </div>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          <code>-p 8000:8000</code> читається як <strong>«хост:контейнер»</strong>: Docker
          пересилає з'єднання з порту хоста на мережевий інтерфейс контейнера. Тому
          застосунок усередині має слухати <code>0.0.0.0</code>. Його <code>127.0.0.1</code> —
          це loopback самого контейнера, і пересланий трафік туди не потрапляє: порт
          опубліковано, а відповіді немає. Детально — у наступній лекції.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 8. REGISTRY: TAG VS DIGEST ----------

function RegistryTagsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Tag}
          title="Реєстр: тег проти дайджесту"
          subtitle="Registry, Tags and Digests"
        />

        <CodeBlock title="анатомія посилання на образ">{`
ghcr.io/nromanen/wishlist-api:1.4.2
└──┬──┘ └──────┬───────────┘ └─┬─┘
 реєстр    репозиторій        тег

ghcr.io/nromanen/wishlist-api@sha256:9f86d081884c7d65...
                              └──────────┬──────────┘
                                     дайджест
`}</CodeBlock>

        <div className="mt-xl mb-xl">
          <DefBadge term="Реєстр" description="сервер, що зберігає образи: Docker Hub, GitHub Container Registry, Amazon ECR" color="blue" />
          <DefBadge term="Тег" description="рухома мітка: сьогодні вказує на один образ, завтра її можна перевісити на інший" color="orange" />
          <DefBadge term="Дайджест" description="хеш вмісту образу. Змінився хоч байт — змінився дайджест. Підробити неможливо" color="green" />
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="outlined-card outlined-card--red fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Чому latest небезпечний</h3>
            <Point>Це просто тег за замовчуванням. Найновішим він буває лише тоді, коли автор не забув його перевісити</Point>
            <Point>Автор перевісив тег — і той самий <code>FROM python:latest</code> через місяць дасть інший образ</Point>
            <Point>Локально latest — це те, що ви завантажили востаннє: у вас і в колеги це можуть бути різні образи</Point>
            <Point>Після збою неможливо сказати, яка саме версія працювала і на що відкочуватися</Point>
          </div>
          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Як правильно</h3>
            <Point>У <code>FROM</code> — конкретна версія: <code>python:3.12-slim</code>, не <code>python</code></Point>
            <Point>Для розгортання — версія застосунку, а де важлива відтворюваність — дайджест</Point>
            <Point>Опублікований тег версії не перезаписують</Point>
          </div>
        </div>

        <HighlightBox color="blue" icon={BookOpen}>
          Як тегувати власні образи (версія, хеш коміту, гілка) і як публікувати їх із
          конвеєра — тема наступної лекції.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 9. DOCKERFILE BASICS ----------

function DockerfileBasicsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={FileCode}
          title="Dockerfile: основні інструкції"
          subtitle="Dockerfile Basics"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <CodeBlock title="Dockerfile — перша, наївна версія">{`
FROM python:3.12
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD uvicorn app.main:app --host 0.0.0.0 --port 8000
`}</CodeBlock>
            <HighlightBox color="orange" icon={AlertTriangle}>
              Цей Dockerfile <strong>працює</strong>. І має щонайменше п'ять проблем —
              до кінця лекції знайдемо й виправимо кожну.
            </HighlightBox>

            <CollapsibleCodeBlock color='red' buttonLabel='який порт відкривати в браузері на PC]'> 
            {`
docker run -d -p 8080:8000 wishlist-api:0.1
docker run -d -p 8000:8080 wishlist-api:0.1`}
             </CollapsibleCodeBlock>
          </div>

          <div className="outlined-card outlined-card--blue fade-in-delay-2">
            <DefBadge term="FROM" description="базовий образ, від якого починаємо: його готові шари стають фундаментом нашого" color="blue" />
            <DefBadge term="WORKDIR" description="робочий каталог для наступних інструкцій" color="blue" />
            <DefBadge term="COPY" description="файли з контексту збірки в образ, результат — новий шар" color="blue" />
            <DefBadge term="ADD" description="як COPY, але ще розпаковує архіви й завантажує за URL чи з git-репозиторіїв — без потреби не використовують" color="blue" />
            <DefBadge term="RUN" description="команда під час збірки, результат — новий шар" color="blue" />
            <DefBadge term="ENV" description="змінна середовища, зашита в образ" color="purple" />
            <DefBadge term="ARG" description="параметр лише на час збірки" color="purple" />
            <DefBadge term="USER" description="від імені якого користувача виконувати далі" color="purple" />
            <DefBadge term="EXPOSE" description="лише документація: порт сам не відкривається" color="cyan" />
            <DefBadge term="CMD" description="що запустити під час старту контейнера" color="green" />
            <DefBadge term="ENTRYPOINT" description="незмінна частина команди старту" color="green" />
            <DefBadge term="HEALTHCHECK" description="команда, якою Docker періодично перевіряє, чи застосунок справді відповідає" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="outlined-card outlined-card--purple fade-in-delay-3">
            <h3 className="info-card__title mb-sm">CMD чи ENTRYPOINT</h3>
            <Point>
              <code>ENTRYPOINT</code> — <strong>що</strong> запускається. <code>CMD</code> — аргументи
              за замовчуванням, які легко замінити: <code>docker run образ інша-команда</code>.
              Для звичайного вебсервісу достатньо одного <code>CMD</code>.
            </Point>
            <CodeBlock title="що замінюється при docker run">{`
# only CMD: the whole command is replaceable
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0"]

docker run img              # → uvicorn app.main:app --host 0.0.0.0
docker run img sh           # → sh  (shell instead of the app)

# ENTRYPOINT + CMD: fixed program, default arguments
ENTRYPOINT ["uvicorn", "app.main:app", "--host", "0.0.0.0"]
CMD ["--port", "8000"]

docker run img              # → ... --port 8000
docker run img --port 9000  # → ... --port 9000
`}</CodeBlock>
            <Point>
              Замінити й <code>ENTRYPOINT</code> можна, але лише явно:{' '}
              <code>docker run --entrypoint sh образ</code>.
            </Point>
          </div>
          <div className="outlined-card outlined-card--orange fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Exec-форма проти shell-форми</h3>
            <CodeBlock title="що реально запускає Docker">{`
# exec form
CMD ["uvicorn", "app.main:app"]
# → uvicorn app.main:app
#   PID 1: uvicorn

# shell form
CMD uvicorn app.main:app
# → /bin/sh -c "uvicorn app.main:app"
#   PID 1: sh, uvicorn is its child process
`}</CodeBlock>
            <Point>Різниця здається косметичною, але ламає зупинку контейнера</Point>
            <Point>
              Для <code>CMD</code> і <code>ENTRYPOINT</code> — завжди exec-форма.
              У <code>RUN</code> звичайна shell-форма нормальна: це команда збірки, її не зупиняють сигналом.
            </Point>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 9_1. MORE DOCKERFILE SYNTAX (self-study) ----------

function DockerfileMoreSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={FileCode}
          title="Що ще буває в Dockerfile"
          subtitle="Variables, Metadata and Less Common Instructions"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="Dockerfile">{`
# syntax=docker/dockerfile:1

ARG PYTHON_VERSION=3.12
FROM python:\${PYTHON_VERSION}-slim

LABEL org.opencontainers.image.source="https://github.com/nromanen/wishlist-api"

ARG APP_VERSION=dev
ENV APP_VERSION=\${APP_VERSION} \\
    APP_HOME=/app

WORKDIR \${APP_HOME}

RUN <<EOF
set -e
apt-get update
apt-get install -y --no-install-recommends libpq5
rm -rf /var/lib/apt/lists/*
EOF

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
`}</CodeBlock>

          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <DefBadge term="# syntax" description="директива в першому рядку: яку версію синтаксису Dockerfile використати" color="blue" />
            <DefBadge term="ARG" description="параметр збірки зі значенням за замовчуванням, у запущеному контейнері його немає" color="blue" />
            <DefBadge term="--build-arg" description="перевизначає ARG під час збірки: docker build --build-arg APP_VERSION=1.4.2 ." color="blue" />
            <DefBadge term="ENV" description="змінна, яка лишається в образі й видна застосунку під час роботи" color="purple" />
            <DefBadge term="${VAR}" description="підстановка змінних у FROM, WORKDIR, ENV, COPY та інших інструкціях" color="purple" />
            <DefBadge term="LABEL" description="метадані образу: джерело, версія, автор — видно в docker inspect" color="green" />
            <DefBadge term="<<EOF" description="heredoc: кілька рядків shell в одному RUN без \ і && у кожному рядку — як звичайний скрипт" color="green" />
          </div>
        </div>

        <div className="outlined-card outlined-card--purple mb-base fade-in-delay-2">
          <h3 className="info-card__title mb-sm">Рідше, але трапляється</h3>
          <DefBadge term="VOLUME" description="позначає каталог для даних; кожен запуск без -v створює новий анонімний том, тож краще задавати томи під час запуску" color="purple" />
          <DefBadge term="STOPSIGNAL" description="який сигнал надсилає docker stop, якщо застосунок чекає не SIGTERM" color="purple" />
          <DefBadge term="SHELL" description="замінює /bin/sh -c для shell-форми; потрібно здебільшого в Windows-образах" color="purple" />
          <DefBadge term="ONBUILD" description="інструкція, що спрацює під час збірки образу, який візьме цей як базовий" color="purple" />
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          <code>ARG</code> перед <code>FROM</code> видно лише в самому <code>FROM</code>.
          Щоб використати його нижче, оголосіть ще раз без значення: <code>ARG PYTHON_VERSION</code>.
          А в heredoc без <code>set -e</code> помилка в середньому рядку не зупинить збірку.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 10. BUILD CACHE ----------

function BuildCacheSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Zap}
          title="Порядок інструкцій і кеш збірки"
          subtitle="Instruction Order and Build Cache"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Docker перевикористовує збережений результат інструкції, якщо ні вона сама,
            ні файли, які вона копіює, не змінились. Щойно одна інструкція змінилася,{' '}
            <strong>вона і всі наступні</strong> виконуються заново.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-2">
            <CodeBlock title="❌ будь-яка правка коду → pip install заново" color="orange">{`
FROM python:3.12-slim
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
`}</CodeBlock>
            <Point>Змінили один рядок у <code>main.py</code> — і чекаємо хвилину, поки встановляться ті самі залежності.</Point>
          </div>
          <div className="fade-in-delay-3">
            <CodeBlock title="✅ залежності кешуються окремо" color="green">{`
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
#RUN --mount=type=cache,target=/root/.cache/pip pip install -r requirements.txt
COPY . .
`}</CodeBlock>
            <Point>Шар із залежностями перезбирається лише тоді, коли змінився сам <code>requirements.txt</code>.</Point>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="green" icon={CheckCircle2}>
            Правило порядку інструкцій: <strong>від того, що змінюється рідко, до того,
              що змінюється часто</strong>. Системні пакети → залежності → код. Для Node те
            саме: спершу копіюємо <code>package.json</code> і <code>package-lock.json</code>,
            потім <code>npm ci</code>, і лише після цього решту коду.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            <code>apt-get update</code> і <code>apt-get install</code> пишуть в одному{' '}
            <code>RUN</code>. Якщо вони окремі, то, коли згодом додадуть пакет у рядок{' '}
            <code>install</code>, <code>update</code> візьметься з кешу, і пакети ставитимуться
            за застарілим списком — або збірка просто впаде.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 11. BUILD CONTEXT & .dockerignore ----------

function BuildContextSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={FolderX}
          title="Контекст збірки і .dockerignore"
          subtitle="Build Context and .dockerignore"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Крапка в <code>docker build .</code> — це <strong>контекст</strong>: каталог, увесь
            вміст якого передається збирачу. <code>COPY . .</code> скопіює в образ усе, що
            в контексті, — разом із <code>.git</code>, <code>.venv</code> і <code>.env</code>.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title=".dockerignore">{`
.git
.github
.venv
__pycache__/
*.pyc
.pytest_cache/
node_modules/
dist/
.env
.env.*
Dockerfile
docker-compose*.yml
`}</CodeBlock>

          <div>
            <InfoCard
              icon={Zap}
              title="Швидкість"
              subtitle="Speed"
              description="Менший контекст — швидша передача. node_modules легко важить сотні мегабайт"
              color="blue"
              delay={2}
            />
            <InfoCard
              icon={Layers}
              title="Кеш"
              subtitle="Cache"
              description="Без .dockerignore кожен коміт змінює .git — і COPY . . щоразу інвалідує кеш"
              color="purple"
              delay={3}
            />
            <InfoCard
              icon={Lock}
              title="Безпека"
              subtitle="Security"
              description="Файли, що не потрапили в контекст, не можуть випадково потрапити в образ"
              color="green"
              delay={4}
            />
          </div>
        </div>

        <HighlightBox color="red" icon={AlertTriangle}>
          <code>.env</code> в образі — це секрет у реєстрі <strong>назавжди</strong>. Навіть якщо
          наступна інструкція його видалить, він лишиться в попередньому шарі, і будь-хто з
          доступом до образу його дістане.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 12. MULTI-STAGE BUILD ----------

function MultiStageSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={GitMerge}
          title="Багатоетапна збірка"
          subtitle="Multi-Stage Build"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="wishlist-ui/Dockerfile">{`
# stage 1: build tools, node_modules, sources
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# stage 2: only the built static files
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
`}</CodeBlock>

          <div>
            <InfoCard
              icon={Wrench}
              title="Етап збірки"
              subtitle="Build stage"
              description="Node, компілятор TypeScript, сотні мегабайт node_modules. Потрібні лише для того, щоб отримати dist/"
              color="orange"
              delay={1}
            />
            <InfoCard
              icon={Package}
              title="Фінальний етап"
              subtitle="Runtime stage"
              description="nginx і кілька мегабайт статики. Все, що було на етапі збірки, у фінальний образ не потрапляє"
              color="green"
              delay={2}
            />
            <InfoCard
              icon={Server}
              title="А для Python?"
              subtitle="And for Python?"
              description="Виграш менший, але корисний, коли залежності треба компілювати: gcc і заголовки лишаються на етапі збірки"
              color="blue"
              delay={3}
            />
          </div>
        </div>

        <HighlightBox color="blue" icon={Server}>
          На фінальному етапі використовуємо nginx: після <code>npm run build</code> фронтенд —
          це лише статичні файли, і Node для них уже не потрібен. Віддавати їх може будь-який
          вебсервер, а nginx робить це швидко й важить кілька десятків мегабайтів.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 12_1. SPA ROUTING IN NGINX (self-study) ----------

function SpaRoutingSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Server}
          title="Маршрутизація SPA в nginx"
          subtitle="Single-Page App Fallback"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            В односторінковому застосунку (Vue, React, Angular) маршрути обробляє код у
            браузері. Поки користувач клікає по посиланнях, сервер про це навіть не знає.
            Але при оновленні сторінки чи переході за прямим посиланням (<code>/wishlists/42</code>) браузер просить у
            сервера файл за цією адресою — а такого файлу на диску немає. Результат: 404.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="nginx.conf">{`
server {
    listen 80;
    root /usr/share/nginx/html;

    location / {
        # file → directory → fall back to the SPA entry point
        try_files $uri $uri/ /index.html;
    }
}
`}</CodeBlock>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Що робить try_files</h3>
            <DefBadge term="$uri" description="шукає файл за адресою: /assets/app.js віддається як є" color="purple" />
            <DefBadge term="$uri/" description="шукає каталог з такою назвою" color="purple" />
            <DefBadge term="/index.html" description="нічого не знайшлося — віддає точку входу, а сторінку показує вже застосунок" color="purple" />
          </div>
        </div>

        <CodeBlock title="фінальний етап Dockerfile">{`
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col mt-xl mb-base">
          <div className="outlined-card outlined-card--green fade-in-delay-3">
            <h3 className="info-card__title mb-sm">
              <CheckCircle2 className="icon-md text-green" /> Потрібно
            </h3>
            <Point>
              Маршрутизатор у режимі history: адреси без решітки, як-от{' '}
              <code>/wishlists/42</code>. Це режим за замовчуванням у React Router
              та Angular, у Vue — <code>createWebHistory()</code>
            </Point>
          </div>
          <div className="outlined-card outlined-card--orange fade-in-delay-4">
            <h3 className="info-card__title mb-sm">
              <XCircle className="icon-md text-orange" /> Не потрібно
            </h3>
            <Point>
              Режим hash: адреси виду <code>/#/wishlists/42</code>. Усе після{' '}
              <code>#</code> браузер серверу не надсилає, тож сервер завжди віддає{' '}
              <code>index.html</code>
            </Point>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Це правило потрібне будь-якому серверу статики, не лише nginx. На хостингах і
          PaaS воно зазвичай зветься <strong>SPA fallback</strong> або перенаправленням усіх
          адрес на <code>/index.html</code> — шукайте його в налаштуваннях, щойно після
          деплою внутрішні сторінки почнуть віддавати 404.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 13. BASE IMAGE ----------

function BaseImageSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Box}
          title="Вибір базового образу"
          subtitle="Choosing a Base Image"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={Package}
            title="Повний"
            subtitle="python:3.12, node:22 · сотні МБ – 1 ГБ"
            description="Повний дистрибутив із компіляторами й утилітами. Зручно відлагоджувати, але більшість цього в продакшені не потрібна"
            color="orange"
            delay={1}
          />
          <InfoCard
            icon={CheckCircle2}
            title="slim"
            subtitle="python:3.12-slim, node:22-slim · у рази менший"
            description="Мінімальний Debian: glibc і звичні інструменти без зайвого. Розумний старт за замовчуванням там, де такий варіант є"
            color="green"
            delay={2}
          />
          <InfoCard
            icon={Minimize2}
            title="alpine"
            subtitle="python:3.12-alpine, nginx:alpine · десятки МБ"
            description="Найменший дистрибутив, але замість glibc — musl. Пакети з нативним кодом під нього бувають не зібрані, і тоді їх доводиться компілювати"
            color="purple"
            delay={3}
          />
          <InfoCard
            icon={Lock}
            title="distroless і scratch"
            subtitle="лише середовище виконання або взагалі нічого"
            description="Без shell і менеджера пакетів. scratch — порожній образ для статично зібраних програм, наприклад на Go. Найменша поверхня атаки, найважче відлагоджувати"
            color="blue"
            delay={4}
          />
        </div>

        <HighlightBox color="green" icon={CheckCircle2}>
          Для компільованих мов головний вибір — не дистрибутив, а <strong>SDK чи
            середовище виконання</strong>: збирають у <code>eclipse-temurin:21-jdk</code>,
          запускають у <code>eclipse-temurin:21-jre</code>. Компілятор у фінальному образі не потрібен.
        </HighlightBox>

        <div className="outlined-card outlined-card--red mb-base fade-in-delay-5">
          <h3 className="info-card__title mb-sm">Архітектура процесора</h3>
          <Point>
            Образ збирається під архітектуру машини, на якій ви його збираєте. Mac на Apple
            Silicon дає <code>arm64</code>, а хмарна платформа найчастіше працює на{' '}
            <code>amd64</code>. Результат — <code>exec format error</code> одразу після
            розгортання.
          </Point>
        </div>

        <CodeBlock title="зібрати під цільову платформу">{`
docker buildx build --platform linux/amd64 -t wishlist-api:0.1 .
`}</CodeBlock>
      </div>
    </div>
  );
}

// ---------- 14. IMAGE SIZE: BEFORE & AFTER ----------

function ImageSizeSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Minimize2}
          title="Розмір образу: до і після"
          subtitle="Image Size: What Matters Most"
        />

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCardFeatured
            icon={XCircle}
            title="≈1,1 ГБ"
            subtitle="wishlist-api, наївна версія"
            description="python:3.12, COPY . . разом із .git і .venv, кеш pip усередині"
            color="orange"
            delay={1}
          />
          <InfoCardFeatured
            icon={CheckCircle2}
            title="≈200 МБ"
            subtitle="wishlist-api, slim"
            description="python:3.12-slim, .dockerignore, pip --no-cache-dir"
            color="green"
            delay={2}
          />
          <InfoCardFeatured
            icon={CheckCircle2}
            title="≈1 ГБ → ≈50 МБ"
            subtitle="wishlist-ui"
            description="Багатоетапна збірка: node залишився на етапі збірки, у фінальному образі — nginx і статика"
            color="blue"
            delay={3}
          />
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="outlined-card outlined-card--purple fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Що дає найбільше — за спаданням</h3>
            <DefBadge term="1" description="базовий образ: slim замість повного" color="purple" />
            <DefBadge term="2" description="багатоетапна збірка: інструменти збірки не їдуть у фінал" color="purple" />
            <DefBadge term="3" description=".dockerignore: у контекст не потрапляє сміття" color="purple" />
            <DefBadge term="4" description="прибирання кешів у тому самому RUN, що їх створив" color="purple" />
          </div>
          <CodeBlock title="де шукати зайве">{`
docker images wishlist-api
docker history wishlist-api:0.1

# interactive layer explorer
dive wishlist-api:0.1
`}</CodeBlock>
        </div>

        <HighlightBox color="blue" icon={Gauge}>
          Цифри орієнтовні — заміряйте свої. Розмір не самоціль: менший образ швидше
          завантажується під час кожного розгортання і містить менше пакетів, у яких
          можуть знайти вразливість.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 15. NON-ROOT USER ----------

function NonRootSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={UserX}
          title="Непривілейований користувач"
          subtitle="Running as Non-Root"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            За замовчуванням процес у контейнері працює від <strong>root</strong> — і це той
            самий UID 0, що й на хості. Вразливість у застосунку плюс помилка ізоляції — і
            зловмисник отримує root уже на сервері.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="wishlist-api/Dockerfile">{`
FROM python:3.12-slim
WORKDIR /app

# fixed UID: predictable file ownership on volumes
RUN useradd --create-home --uid 10001 app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# code stays root-owned: app can read it, but not change it
COPY . .

USER app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
`}</CodeBlock>

          <div>
            <InfoCard
              icon={CheckCircle2}
              title="Перевірка"
              subtitle="Verify"
              description="docker exec api id — має бути uid=10001(app), а не uid=0(root)"
              color="green"
              delay={2}
            />
            <InfoCard
              icon={Server}
              title="Порти вище 1024"
              subtitle="Unprivileged ports"
              description="Слухайте 8000 чи 8080, а не 80: на частині платформ непривілейований процес низький порт не відкриє"
              color="blue"
              delay={3}
            />
            <InfoCard
              icon={Package}
              title="nginx без root"
              subtitle="Unprivileged nginx"
              description="Для wishlist-ui є готовий nginxinc/nginx-unprivileged — він слухає 8080 і не потребує root"
              color="purple"
              delay={4}
            />
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Якщо застосунку треба писати у свій каталог — завантажені файли, локальна база, —
          права видають <strong>лише на цей каталог</strong>:{' '}
          <code>RUN mkdir /app/uploads && chown app:app /app/uploads</code>. Сам код краще
          лишити власністю root: так його не змінити навіть від імені застосунку.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 16. CONFIGURATION VIA ENVIRONMENT ----------

function ConfigEnvSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Settings}
          title="Конфігурація через середовище"
          subtitle="Configuration via Environment"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong>Один образ — усі середовища.</strong> Те, що відрізняється між dev,
            staging і продакшеном, у образ не зашивається, а передається під час запуску
            через змінні середовища.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="передати конфігурацію під час запуску">{`
docker run -d -p 8000:8000 \\
  -e DATABASE_URL=postgresql://wish:secret@db:5432/wishlist \\
  -e REDIS_URL=redis://cache:6379/0 \\
  wishlist-api:0.1

# or load all variables from a file
docker run -d --env-file .env.staging wishlist-api:0.1
`}</CodeBlock>

          <div className="outlined-card outlined-card--red fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Секрети — не в Dockerfile</h3>
            <Point>
              <code>ENV DB_PASSWORD=...</code> і <code>ARG TOKEN=...</code> видно через{' '}
              <code>docker history</code> та <code>docker inspect</code> будь-кому, хто має образ.
            </Point>
            <Point>
              Секрет, потрібний під час збірки, передають через{' '}
              <code>RUN --mount=type=secret,id=token</code> і{' '}
              <code>docker build --secret id=token,src=...</code> — він доступний лише цій
              інструкції як файл <code>/run/secrets/token</code> і не потрапляє в жоден шар.
            </Point>
          </div>
        </div>

        <HighlightBox color="blue" icon={Settings}>
          <strong>Змінні середовища у фронтенді.</strong> На відміну від бекенду, код
          фронтенду виконується в браузері, а не в контейнері, і змінних контейнера не бачить.
          Тому збирач — Vite, webpack чи Angular CLI — підставляє значення прямо в JS під час
          збірки: у wishlist-ui це <code>VITE_API_BASE</code>. Адресу API задають на етапі
          збірки, і для кожного середовища збирають свій образ.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 17. VOLUMES ----------

function VolumesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={HardDrive}
          title="Дані: том проти шару"
          subtitle="Volumes vs Container Layer"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Усе, що процес записав у файлову систему контейнера, лежить у його шарі для
            запису. <code>docker rm</code> — і даних немає. Postgres без тому втратить базу
            при першому ж оновленні образу.
          </p>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Database}
            title="Іменований том"
            subtitle="Named volume"
            description="Docker сам керує місцем на диску. Для даних, що мають пережити контейнер: бази, завантажені файли"
            color="green"
            delay={2}
          />
          <InfoCard
            icon={Laptop}
            title="Прив'язаний каталог"
            subtitle="Bind mount"
            description="Каталог хоста всередині контейнера. Для розробки: правите код у редакторі — контейнер бачить зміни одразу. На Mac і Windows помітно повільніший за том"
            color="blue"
            delay={3}
          />
          <InfoCard
            icon={Zap}
            title="tmpfs"
            subtitle="In-memory mount"
            description="Файли в оперативній пам'яті, зникають із зупинкою. Для тимчасових даних, які не варто писати на диск"
            color="purple"
            delay={4}
          />
        </div>

        <CodeBlock title="база переживає видалення контейнера">{`
docker volume create pgdata
docker run -d --name db \\
  -e POSTGRES_PASSWORD=secret \\
  -v pgdata:/var/lib/postgresql/data \\
  postgres:16

# careful: a leading ./ turns it into a bind mount
#   -v ./pgdata:/var/lib/postgresql/data
# unambiguous long form:
#   --mount type=volume,src=pgdata,dst=/var/lib/postgresql/data
`}</CodeBlock>
        <HighlightBox color="blue" icon={Gauge}>
          На Linux різниці у швидкості немає. На Mac і Windows контейнери працюють у ВМ, і
          прив'язаний каталог ходить через спільний доступ до файлів — особливо повільно на
          тисячах дрібних файлів на кшталт <code>node_modules</code>. На Windows тримайте
          проєкт у файловій системі WSL, а не на диску <code>C:\</code>.
        </HighlightBox>

        <HighlightBox color="green" icon={CheckCircle2}>
          Контейнер має бути <strong>одноразовим</strong>: видалили, запустили новий з
          оновленого образу — і нічого не втратили.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 18. SINGLE PROCESS ----------

function SingleProcessSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Workflow}
          title="Один процес на контейнер"
          subtitle="One Concern per Container"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--red fade-in-delay-1">
            <h3 className="info-card__title mb-sm">❌ Усе в одному</h3>
            <Point>API, Postgres, Redis і nginx в одному контейнері під  під менеджером процесів типу supervisord</Point>
            <Point>Упав Redis — Docker цього не бачить: головний процес живий</Point>
            <Point>Журнали чотирьох сервісів змішані в одному потоці</Point>
            <Point>Оновити API — означає перезапустити й базу</Point>
            <Point>Масштабувати API окремо від бази неможливо</Point>
          </div>
          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="info-card__title mb-sm">✅ Окремі контейнери</h3>
            <Point>Кожен сервіс — свій образ, свій життєвий цикл, свої журнали</Point>
            <Point>Docker стежить за головним процесом і бачить, коли той завершився</Point>
            <Point>Postgres і Redis — готові офіційні образи, збирати їх не потрібно</Point>
            <Point>Сервіси знаходять одне одного через мережу Docker — наступна лекція</Point>
          </div>
        </div>

        <HighlightBox color="blue" icon={BookOpen}>
          «Один процес» точніше читати як <strong>«одна відповідальність»</strong>. uvicorn
          із кількома воркерами — це нормально: формально процесів кілька, але сервіс один.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 19. SIGNALS & GRACEFUL SHUTDOWN ----------

function SignalsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Power}
          title="Сигнали й коректна зупинка"
          subtitle="Signals and Graceful Shutdown"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <code>docker stop</code> надсилає процесу з <strong>PID 1</strong> сигнал{' '}
            <code>SIGTERM</code> і чекає 10 секунд. Не завершився — отримує{' '}
            <code>SIGKILL</code>: незавершені запити обриваються, з'єднання з базою не
            закриваються.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-2">
            <CodeBlock title="❌ shell-форма" color="orange">{`
CMD uvicorn app.main:app --host 0.0.0.0

# PID 1: /bin/sh -c "uvicorn ..."
# sh does not forward SIGTERM to uvicorn
# → 10 s of waiting, then SIGKILL
`}</CodeBlock>
          </div>
          <div className="fade-in-delay-3">
            <CodeBlock title="✅ exec-форма" color="green">{`
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0"]

# PID 1: uvicorn itself
# receives SIGTERM, finishes requests, exits
# → stops in under a second
`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="outlined-card outlined-card--purple fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Код завершення підкаже причину</h3>
            <DefBadge term="0" description="процес завершився сам або коректно обробив SIGTERM" color="green" />
            <DefBadge term="143" description="128 + 15: завершений сигналом SIGTERM без власного обробника (типова дія або так виходить сам застосунок, наприклад JVM)" color="blue" />
            <DefBadge term="137" description="128 + 9: вбитий SIGKILL — не встиг зупинитися або перевищив ліміт пам'яті" color="orange" nowrap />
          </div>
          <div>
            <HighlightBox color="orange" icon={AlertTriangle}>
              Іноді перед стартом застосунку треба щось зробити: перевірити конфігурацію,
              дочекатися бази, згенерувати файл налаштувань. Для цього пишуть скрипт-обгортку{' '}
              <code>entrypoint.sh</code>, і останнім рядком у ньому має бути <code>exec "$@"</code> —
              тоді застосунок замінить shell і стане PID 1. Для процесів, які взагалі не
              обробляють сигнали, є <code>docker run --init</code>.
            </HighlightBox>

            <CodeBlock title="entrypoint.sh">{`
#!/bin/sh
set -e

# fail fast if configuration is missing
if [ -z "$DATABASE_URL" ]; then
  echo "DATABASE_URL is not set" >&2
  exit 1
fi

# replace the shell with CMD: the app becomes PID 1
exec "$@"
`}</CodeBlock>

            <CodeBlock title="Dockerfile">{`
COPY --chmod=755 entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0"]
`}</CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 20. LOGGING TO STDOUT ----------

function LoggingSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={ScrollText}
          title="Журнали у стандартний вивід"
          subtitle="Logs to stdout and stderr"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--red fade-in-delay-1">
            <h3 className="info-card__title mb-sm">❌ Журнал у файл усередині контейнера</h3>
            <Point>Щоб його прочитати, треба заходити в контейнер</Point>
            <Point>Ротацію доводиться налаштовувати в кожному образі окремо</Point>
            <Point>Платформа про цей файл не знає і забрати його не може</Point>
          </div>
          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="info-card__title mb-sm">✅ stdout і stderr</h3>
            <Point>Docker збирає вивід сам: <code>docker logs</code> працює одразу</Point>
            <Point>Ротацію й збір налаштовують один раз для всіх контейнерів</Point>
            <Point>Будь-яка платформа вміє забирати цей потік і зберігати централізовано</Point>
            <Point>Офіційний образ nginx уже перенаправляє свої журнали в stdout</Point>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <CodeBlock title="Dockerfile">{`
# print output immediately, without buffering
ENV PYTHONUNBUFFERED=1
`}</CodeBlock>
          <CodeBlock title="читання журналів">{`
docker logs -f --tail 100 api
docker logs --since 10m api
`}</CodeBlock>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Без <code>PYTHONUNBUFFERED=1</code> Python накопичує вивід у буфері: журнали
          з'являються із запізненням, а останні рядки перед падінням — найцінніші — можуть
          не з'явитися взагалі.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 21. HEALTHCHECK ----------

function HealthcheckSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={HeartPulse}
          title="Перевірка стану контейнера"
          subtitle="Container Healthcheck"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong>running ≠ працює.</strong> Процес може бути живим, але зависнути або
            втратити з'єднання з базою. Перевірка стану регулярно запитує сам застосунок,
            чи він здатен відповідати.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="Dockerfile">{`
# probe every 30 s; fail if no answer within 3 s;
# ignore failures during the first 10 s after start;
# mark unhealthy after 3 failures in a row
HEALTHCHECK --interval=30s --timeout=3s \\
            --start-period=10s --retries=3 \\
  CMD ["python", "-c", "import urllib.request; urllib.request.urlopen('http://localhost:8000/health', timeout=2)"]
`}</CodeBlock>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Стани в docker ps</h3>
            <DefBadge term="starting" description="перевірка ще не пройшла жодного разу, триває start-period" color="blue" />
            <DefBadge term="healthy" description="остання перевірка успішна" color="green" />
            <DefBadge term="unhealthy" description="перевірка не пройшла кілька разів поспіль" color="orange" />
            <CodeBlock>{`
$ docker ps
IMAGE             STATUS
wishlist-api:0.1  Up 5 seconds (health: starting)
wishlist-api:0.1  Up 2 minutes (healthy)
`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Docker сам по собі <strong>не перезапускає</strong> контейнер у стані unhealthy —
            лише показує статус. Використовують його інструменти рівнем вище: наприклад,
            Compose чекає healthy від бази, перш ніж стартувати API (наступна лекція).
          </HighlightBox>
          <HighlightBox color="blue" icon={Wrench}>
            У <code>slim</code>-образі немає <code>curl</code>, тому перевіряємо самим Python.
            Ендпоїнт <code>/health</code> має бути дешевим: без важких запитів до бази на
            кожен виклик.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 22. IMAGE SCANNING ----------

function ScanningSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={ScanSearch}
          title="Сканування образу"
          subtitle="Image Vulnerability Scanning"
        />

        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-1">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Сканер розбирає шари образу, складає перелік встановлених пакетів — системних і
            мовних — і звіряє їх із базами відомих вразливостей (CVE).
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={ScanSearch}
            title="Trivy"
            subtitle="Aqua Security"
            description="Відкритий, працює локально й у конвеєрі. Можна не встановлювати — запустити як контейнер aquasec/trivy"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={Package}
            title="Docker Scout"
            subtitle="Docker"
            description="Вбудований у Docker Desktop, підказує, на який базовий образ оновитися. Потребує входу в обліковий запис Docker"
            color="purple"
            delay={3}
          />
        </div>

        <CodeBlock title="перевірка локально й у конвеєрі">{`
trivy image --severity HIGH,CRITICAL wishlist-api:0.1

# the same without installing Trivy (pin the version in CI)
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\
  aquasec/trivy image --severity HIGH,CRITICAL wishlist-api:0.1

# non-zero exit code fails the CI job
trivy image --severity CRITICAL --exit-code 1 wishlist-api:0.1

docker scout cves wishlist-api:0.1
`}</CodeBlock>

        <HighlightBox color="green" icon={CheckCircle2}>
          Більшість знахідок — у базовому образі, а не у вашому коді. Найдієвіші ліки:
          slim або distroless і регулярне перезбирання з оновленою базою. Як вбудувати це
          в конвеєр — у лекції про DevSecOps.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 23. COMMON MISTAKES ----------

function CommonMistakesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={AlertTriangle} title="Типові помилки" subtitle="Common Mistakes" />

        <div className="slide-grid slide-grid--2col">
          <InfoCard
            icon={Tag}
            title="latest у FROM"
            subtitle={<SlideLink to={8} />}
            description="Збірка невідтворювана: той самий Dockerfile через місяць дає інший образ"
            color="orange"
            delay={1}
          />
          <InfoCard
            icon={Zap}
            title="COPY . . до залежностей"
            subtitle={<SlideLink to={10} />}
            description="Будь-яка правка коду заново встановлює всі пакети"
            color="orange"
            delay={1}
          />
          <InfoCard
            icon={Lock}
            title="Секрет у шарі"
            subtitle={<>Слайди <SlideLink to={11} short />, <SlideLink to={16} short /></>}
            description=".env у контексті, пароль в ENV чи ARG — і він назавжди в реєстрі"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={UserX}
            title="Root за замовчуванням"
            subtitle={<SlideLink to={15} />}
            description="Ніхто не додав USER, тож застосунок працює з повними правами"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={Server}
            title="Слухає 127.0.0.1"
            subtitle={<SlideLink to={7} />}
            description="Порт опубліковано, контейнер працює, а запити ззовні не доходять"
            color="orange"
            delay={3}
          />
          <InfoCard
            icon={Cpu}
            title="Образ під arm64"
            subtitle={<SlideLink to={13} />}
            description="Зібрали на Mac, розгорнули на amd64 — exec format error"
            color="orange"
            delay={3}
          />
          <InfoCard
            icon={HardDrive}
            title="Дані в шарі контейнера"
            subtitle={<SlideLink to={17} />}
            description="Оновили образ бази без тому — і почали з порожньої бази"
            color="orange"
            delay={4}
          />
          <InfoCard
            icon={Power}
            title="Shell-форма CMD"
            subtitle={<SlideLink to={19} />}
            description="Кожна зупинка триває 10 секунд і закінчується SIGKILL, код 137"
            color="orange"
            delay={4}
          />
        </div>
      </div>
    </div>
  );
}

// ---------- 24. FINAL DOCKERFILE ----------

function FinalDockerfileSlide() {
  const [stepMap, setStepMap] = useState({});
  const [showFinalCode, setShowFinalCode] = useState(false);

  const challenges = [
    {
      id: 1,
      title: '1. Контекст збірки (.dockerignore)',
      icon: AlertTriangle,
      question: 'У проєкті є .git, .env та venv. Якщо зробити COPY . ., що потрапить в образ і як це вилікувати?',
      solution: 'Створити файл .dockerignore поруч із Dockerfile:',
      code: `.git\n.venv\n.env\n__pycache__\n*.pyc`,
    },
    {
      id: 2,
      title: '2. Базовий образ і теги',
      icon: ShieldCheck,
      question: 'Рядок "FROM python:3.12" має проблему. Яку?',
      solution: 'Використати slim-версію (зменшує вагу з 1GB до 150MB):',
      code: `FROM python:3.12-slim`,
    },
    {
      id: 3,
      title: '3. Кешування шарів',
      icon: Zap,
      question: 'Як змінити порядок COPY та RUN, щоб не чекати завантаження залежностей при кожній зміні коду?',
      solution: 'Спочатку копіюємо лише файл залежностей, інсталюємо їх, і лише потім копіюємо решту коду:',
      code: `WORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .`,
    },
    {
      id: 4,
      title: '4. Непривілейований користувач',
      icon: Lock,
      question: 'Зараз застосунок працює від root. Як захистити продакшен у разі злому контейнера?',
      solution: 'Створити окремого користувача та переключитися на нього перед запуском:',
      code: `RUN useradd -m appuser\nUSER appuser`,
    },
    {
      id: 5,
      title: '5. Graceful Shutdown (Сигнали)',
      icon: Power,
      question: 'Чому "CMD uvicorn..." у shell-формі чекає 10 секунд і падає по SIGKILL при docker stop?',
      solution: 'Перевести команду в exec-форму (масив рядків), щоб uvicorn отримав PID 1 і прийняв SIGTERM:',
      code: `CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`,
    }
  ];

  const toggleChallenge = (id) => {
    setStepMap(prev => {
      const currentStep = prev[id] || 0;
      if (currentStep === 0) return { ...prev, [id]: 1 };
      if (currentStep === 1) return { ...prev, [id]: 2 };
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const isAllOpened = Object.keys(stepMap).length === challenges.length &&
    Object.values(stepMap).every(step => step === 2);

  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={FileCheck}
          title="Зведений Dockerfile: Code Review"
          subtitle="Виправляємо 5 пасток з початкового слайда"
        />

        <div className="outlined-card outlined-card--purple mb-md" style={{ padding: '12px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>
              ⚠️ Початковий "наївний" варіант (Слайд <SlideLink to={9} short />):
            </span>
            <span >
              Файли проєкту: .git/, .env, venv/, main.py, requirements.txt
            </span>
          </div>
          <CodeBlock title="Dockerfile — перша, наївна версія">{`
FROM python:3.12
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD uvicorn app.main:app --host 0.0.0.0 --port 8000
`}</CodeBlock>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="mb-md">
          {challenges.map((item) => {
            const step = stepMap[item.id] || 0;
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => toggleChallenge(item.id)}
                style={{
                  border: `1px solid ${step > 0 ? '#4299e1' : '#e2e8f0'}`,
                  borderRadius: '8px',
                  background: step > 0 ? '#f7fafc' : '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: step > 0 ? '#ebf8ff' : 'transparent'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {step === 2 ? (
                      <CheckCircle2 size={18} color="#3182ce" />
                    ) : (
                      <IconComponent size={18} color={step === 1 ? '#e53e3e' : '#718096'} />
                    )}
                    <span>{item.title}</span>
                  </div>
                  <span style={{ color: '#4a5568' }}>
                    {step === 0 && '▼ Показати питання'}
                    {step === 1 && '▶ Показати рішення'}
                    {step === 2 && '▲ Сховати'}
                  </span>
                </div>

                {step >= 1 && (
                  <div style={{ padding: '12px 16px', borderTop: '1px solid #e2e8f0' }}>
                    <p style={{ margin: '0 0 8px 0', color: '#e53e3e' }}>
                      ❓ Питання: {item.question}
                    </p>

                    {step === 2 && (
                      <div style={{ marginTop: '8px' }}>
                        <p style={{ margin: '0 0 6px 0', color: '#2f855a' }}>
                          ✅ Рішення: {item.solution}
                        </p>
                        <CodeBlock>{item.code}</CodeBlock>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          {!showFinalCode ? (
            <button
              onClick={() => setShowFinalCode(true)}
              className={`header__toggle  header__toggle--active`}
            >
              {isAllOpened ? '🎉 Покажи підсумковий Production-Ready Dockerfile' : 'Зібрати фінальний Dockerfile'}
            </button>
          ) : (
            <div style={{ textAlign: 'left' }}>
              <CodeBlock title="✅ Фінальний Production-Ready Dockerfile">{`# syntax=docker/dockerfile:1
FROM python:3.12-slim

WORKDIR /app

# 1. Кешування залежностей
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 2. Копіюємо код (без файлів з .dockerignore)
COPY . .

# 3. Безпека: Non-root користувач
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

# 4. Graceful Shutdown (Exec-форма)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}</CodeBlock>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

function FinalDockerfileSlide_old() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={FileCheck}
          title="Зведений Dockerfile"
          subtitle="Putting It All Together: wishlist-api"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="wishlist-api/Dockerfile" color="green">{`
# pinned slim base image
FROM python:3.12-slim

# unbuffered logs, no .pyc files, no pip cache
ENV PYTHONUNBUFFERED=1 \\
    PYTHONDONTWRITEBYTECODE=1 \\
    PIP_NO_CACHE_DIR=1

WORKDIR /app

# dedicated unprivileged user with a fixed UID
RUN useradd --create-home --uid 10001 app

# dependencies first, code last: build cache survives code edits
COPY requirements.txt .
RUN pip install -r requirements.txt

# code stays root-owned and read-only for the app
COPY . .

USER app
EXPOSE 8000

# real health signal, not just "process is alive"
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \\
  CMD ["python", "-c", "import urllib.request; urllib.request.urlopen('http://localhost:8000/health', timeout=2)"]

# exec form: uvicorn is PID 1 and receives SIGTERM
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
`}</CodeBlock>

          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">
              П'ять проблем зі слайда <SlideLink to={9} short /> — закрито
            </h3>
            <DefBadge term="FROM" description="python:3.12 → python:3.12-slim: мінус ≈850 МБ" color="green" />
            <DefBadge term="COPY" description="залежності окремим шаром, кеш працює" color="green" />
            <DefBadge term="контекст" description=".dockerignore: без .git, .venv і .env" color="green" />
            <DefBadge term="USER" description="процес більше не працює від root і не може змінити свій код" color="green" />
            <DefBadge term="CMD" description="exec-форма: зупинка за секунду, а не за десять" color="green" />
            <p className="fs-body text-secondary mt-xl" style={{ margin: 0 }}>
              Конфігурації в образі немає взагалі: <code>DATABASE_URL</code> і{' '}
              <code>REDIS_URL</code> приходять через змінні середовища під час запуску.
            </p>
          </div>
        </div>

        <HighlightBox color="purple" icon={Package}>
          Це і є стартова точка лабораторної про контейнеризацію. Для wishlist-ui ви зробите те саме з
          багатоетапною збіркою — і порівняєте розміри до й після.
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
              <strong>Контейнер — це процес,</strong> а не віртуальна машина: простори імен
              обмежують, що він бачить, контрольні групи — скільки бере
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-2">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Образ незмінний і складається з шарів.</strong> Що потрапило в шар —
              лишається там назавжди, навіть якщо пізніше його видалити
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-3">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Порядок інструкцій вирішує швидкість збірки:</strong> від того, що
              змінюється рідко, до того, що змінюється часто
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-4">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Розмір дають базовий образ і багатоетапна збірка,</strong> а
              .dockerignore захищає і кеш, і секрети
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-5">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Коректний контейнер:</strong> не root, конфігурація ззовні, дані в
              томі, журнали в stdout, exec-форма CMD
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-5">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Фіксуйте версії.</strong> latest — не версія, а спосіб дізнатися про
              зміни в найменш зручний момент
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--gradient-green-blue mt-xl fade-in-delay-5">
          <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
            Хороший контейнер можна видалити будь-якої миті —{' '}
            <strong>і нічого не втратити</strong>
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
          Далі — лекція 5: кілька контейнерів разом, мережі, томи й публікація образів
        </p>

        <div className="flex gap-sm" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <ExtLink href="https://docs.docker.com/build/building/best-practices/" color="blue">
            Docker — найкращі практики збірки
          </ExtLink>
          <ExtLink href="https://docs.docker.com/reference/dockerfile/" color="purple">
            Довідник Dockerfile
          </ExtLink>
          <ExtLink href="https://docs.docker.com/build/building/multi-stage/" color="green">
            Багатоетапна збірка
          </ExtLink>
          <ExtLink href="https://12factor.net/config" color="orange">
            The Twelve-Factor App — конфігурація
          </ExtLink>
          <ExtLink href="https://trivy.dev/" color="blue">
            Trivy
          </ExtLink>
        </div>
      </div>
    </div>
  );
}