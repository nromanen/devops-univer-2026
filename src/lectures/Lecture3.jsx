import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Network, Clock,
  Target, FileText, Tags, ShieldAlert,
  Plug, Split, Timer,
  Globe, ListChecks,
  Search, Hash, Route, MapPin, Lock, Server, ArrowRight, Wrench,
  Terminal, KeyRound, ShieldCheck, Link2, RefreshCw, Stamp, CalendarClock,
  AlertTriangle, Fingerprint, MonitorSmartphone, Unlock, ShieldOff, Send,
  XCircle, HelpCircle, BookOpen, MessageSquare, ThumbsDown, Flag, Stethoscope,
  Construction,
  DoorOpen, Share2, Scale, Heart, Users, Eye, Shuffle, CheckCircle2
} from 'lucide-react';

// ============================================
// SLIDES ARRAY
// ============================================

const slides = [
  // --- Intro ---
  { id: 1, title: 'Титульний слайд', component: TitleSlide },
  { id: 2, title: 'Мета лекції', component: ObjectivesSlide },

  // --- Request path ---
  { id: 3, title: 'Шлях запиту', component: RequestPathSlide },
  { id: 4, title: 'Де що ламається', component: WhereItBreaksSlide },

  // --- Addressing ---
  { id: 5, title: 'Адреса, порт, сокет', component: AddressPortSocketSlide },
  { id: 6, title: 'Хто зайняв порт', component: PortInUseSlide },
  { id: 7, title: 'Чому ping — не діагностика', component: PingIsNotDiagnosticsSlide },

  // --- DNS ---
  { id: 8, title: 'TTL і переїзд сервісу', component: DnsTtlSlide },
  { id: 9, title: 'dig на практиці', component: DigSlide },

  // --- Entry point ---
  { id: 10, title: 'Одна точка входу', component: EntryPointSlide },
  { id: 11, title: 'Що робить зворотний проксі', component: ReverseProxySlide },
  { id: 12, title: 'Балансування і health checks', component: LoadBalancingSlide },
  { id: 13, title: 'X-Forwarded-For', component: ForwardedForSlide },

  // --- HTTP ---
  { id: 14, title: 'Запит і відповідь', component: HttpAnatomySlide },
  { id: 15, title: 'Коди відповіді за класами', component: StatusClassesSlide },
  { id: 16, title: 'Коди, які треба знати', component: StatusCodesSlide },
  { id: 17, title: '502 проти 504', component: BadGatewayVsTimeoutSlide },
  { id: 18, title: 'Заголовки та інфраструктура', component: HeadersSlide },

  // --- TLS ---
  { id: 19, title: 'Що дає TLS', component: TlsBasicsSlide },
  { id: 20, title: 'Ланцюг довіри', component: TrustChainSlide },
  { id: 21, title: 'ACME і протермінування', component: AcmeSlide },
  { id: 22, title: 'Діагностика TLS', component: TlsDiagnosticsSlide },

  // --- CORS ---
  { id: 23, title: 'Що таке origin', component: OriginSlide },
  { id: 24, title: 'curl працює, браузер — ні', component: CorsBrowserOnlySlide },
  { id: 25, title: 'Preflight-запит', component: PreflightSlide },
  { id: 26, title: 'Чому «*» не рішення', component: CorsWildcardSlide },

  // --- Troubleshooting ---
  { id: 27, title: 'Алгоритм звуження', component: NarrowingAlgorithmSlide },
  { id: 28, title: 'Інструменти діагностики', component: DiagnosticToolsSlide },
  { id: 29, title: 'Довести, що справа не в коді', component: ProveItSlide },

  // --- Outro ---
  { id: 30, title: 'Типові помилки', component: CommonMistakesSlide },
  { id: 31, title: 'Підсумки', component: SummarySlide },
  // { id: 32, title: 'Питання?', component: QuestionsSlide },
];

export default function Lecture3() {
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
        <Network />
      </div>
      <h1 className="title-slide__title">
        Мережа очима DevOps
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 3 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Networking for Operations
      </p>
      <div className="title-slide__badge">
        <p>🌐 Від «у мене не відкривається» до «знаю, який компонент упав»</p>
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
                Пройти шлях запиту від імені до відповіді
                <span className="step-list__subtitle"> — Addressing &amp; DNS</span>
              </h3>
              <p className="step-list__description">
                Адреси, порти, імена: як запит знаходить потрібний сервіс
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--purple fade-in-delay-2">
            <div className="step-list__number step-list__number--purple">2</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--purple">
                Зрозуміти роль точки входу
                <span className="step-list__subtitle"> — Reverse Proxy &amp; Load Balancing</span>
              </h3>
              <p className="step-list__description">
                Хто стоїть між клієнтом і вашим сервісом і навіщо він там
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--green fade-in-delay-3">
            <div className="step-list__number step-list__number--green">3</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--green">
                Читати HTTP і TLS як сигнал
                <span className="step-list__subtitle"> — Status Codes &amp; Certificates</span>
              </h3>
              <p className="step-list__description">
                Що саме зламалося: сервіс, проксі чи з'єднання між ними
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--orange fade-in-delay-4">
            <div className="step-list__number step-list__number--orange">4</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--orange">
                Навчитися звужувати проблему
                <span className="step-list__subtitle"> — Troubleshooting</span>
              </h3>
              <p className="step-list__description">
                CORS, покроковий алгоритм пошуку причини, набір інструментів
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// BLOCK: REQUEST PATH — slides 3-4
// Replace the matching stub functions in Lecture3.jsx with these.
// Add to the lucide-react import:
//   Route, MapPin, Lock, Send, Server, ArrowRight, Wrench
// ============================================================

// ---------- 3. REQUEST PATH ----------

function RequestPathSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Route}
          title="Шлях запиту"
          subtitle="What Happens Before You See the Page"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Між натисканням Enter і появою відповіді запит проходить чотири етапи.
            Кожен може завершитися невдало — і кожен дає{' '}
            <strong>свій характерний симптом</strong>.
          </p>
        </div>

        <div className="flow-diagram mb-xl fade-in-delay-2">
          <div className="icon-box icon-box--blue">
            <MapPin className="icon-box__icon icon-box__icon--blue" />
            <p className="icon-box__title">Ім'я → адреса</p>
            <p className="icon-box__subtitle">DNS</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--purple">
            <Plug className="icon-box__icon icon-box__icon--purple" />
            <p className="icon-box__title">З'єднання</p>
            <p className="icon-box__subtitle">TCP: адреса + порт</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--green">
            <Lock className="icon-box__icon icon-box__icon--green" />
            <p className="icon-box__title">Захист</p>
            <p className="icon-box__subtitle">TLS: сертифікат</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--orange">
            <Send className="icon-box__icon" />
            <p className="icon-box__title">Запит</p>
            <p className="icon-box__subtitle">HTTP: метод і шлях</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--blue">
            <Server className="icon-box__icon icon-box__icon--blue" />
            <p className="icon-box__title">Відповідь</p>
            <p className="icon-box__subtitle">код і тіло</p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="definition definition--blue fade-in-delay-3">
            <p className="definition__term definition__term--blue">
              Ланцюжок односторонній
            </p>
            <p className="definition__description">
              Кожен наступний етап починається лише після успішного попереднього.
              Якщо ім'я не резолвиться — до з'єднання справа взагалі не дійде
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-4">
            <p className="definition__term definition__term--purple">
              Звідси й порядок діагностики
            </p>
            <p className="definition__description">
              Перевіряти з початку ланцюжка, а не з кінця. Інакше ви шукаєте помилку
              в HTTP, коли насправді не встановилося з'єднання
            </p>
          </div>
        </div>

        <HighlightBox color="cyan">
          Між вами і сервісом майже завжди стоїть ще хтось: точка входу, балансувальник,
          кеш. Це не додає етапів — це означає, що на кожному етапі відповідати може{' '}
          <strong>не той, про кого ви думаєте</strong>.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 4. WHERE IT BREAKS ----------

function WhereItBreaksSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Wrench}
          title="Де що ламається"
          subtitle="Symptom → Stage"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Найкорисніша навичка в мережевій діагностиці — за текстом помилки одразу
          розуміти, на якому етапі все зупинилося. Це звужує пошук у рази.
        </p>

        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">
                <span className="font-mono text-red">could not resolve host</span>
              </p>
              <p className="fs-body-sm text-muted mt-sm">
                Етап DNS. Імені не існує, воно ще не поширилося або ви дивитеся не в
                той резолвер. Сервіс може бути живий — до нього просто не дійшли
              </p>
            </div>
          </div>

          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">2</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">
                <span className="font-mono text-red">connection refused</span>
              </p>
              <p className="fs-body-sm text-muted mt-sm">
                Адресу знайдено, сервер відповів — але на цьому порту ніхто не слухає.
                Процес не запустився, впав або слухає інший порт
              </p>
            </div>
          </div>

          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">3</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">
                <span className="font-mono text-orange">connection timed out</span>
              </p>
              <p className="fs-body-sm text-muted mt-sm">
                Відповіді немає взагалі. Зазвичай пакети мовчки відкидає мережевий
                екран або правило доступу. Головна відмінність від попереднього:
                тут ніхто не відмовив — просто тиша
              </p>
            </div>
          </div>

          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">4</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">
                <span className="font-mono text-orange">certificate has expired</span>
              </p>
              <p className="fs-body-sm text-muted mt-sm">
                Етап TLS. З'єднання встановилося, сервіс живий і відповідає — але
                клієнт відмовляється з ним говорити
              </p>
            </div>
          </div>

          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">5</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">
                <span className="font-mono text-yellow">502 / 504</span>
              </p>
              <p className="fs-body-sm text-muted mt-sm">
                Етап HTTP, і відповідає вже не ваш сервіс, а точка входу перед ним.
                Про різницю між цими двома кодами буде окремий слайд
              </p>
            </div>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="red" icon={XCircle}>
            <strong>refused</strong> — хтось відповів «ні». Сервер доступний, порт
            закритий або процес не працює
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            <strong>timeout</strong> — ніхто не відповів. Між вами і сервером стоїть
            те, про що ви не знаєте
          </HighlightBox>
        </div>

        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text fs-body-sm">
            Ця пара — <span className="font-mono">refused</span> проти{' '}
            <span className="font-mono">timeout</span> — найчастіше відрізняє «мій
            сервіс упав» від «до мого сервісу не пускають». Плутати їх дорого.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 5. ADDRESS, PORT, SOCKET ----------

function AddressPortSocketSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Plug}
          title="Адреса, порт, сокет"
          subtitle="Address, Port, Socket"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Щоб один процес відповів іншому, потрібні три речі:{' '}
            <strong>куди йти</strong>, <strong>до кого саме на цьому сервері</strong> і{' '}
            <strong>яким протоколом</strong>. Проблеми зі зв'язком майже завжди —
            помилка в одному з цих трьох.
          </p>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCardFeatured
            icon={Globe}
            title="IP-адреса"
            subtitle="Куди"
            description="Ідентифікує сервер або мережевий інтерфейс. Один сервер може мати кілька адрес одночасно"
            color="blue"
            delay={2}
          />
          <InfoCardFeatured
            icon={Plug}
            title="Порт"
            subtitle="До кого"
            description="Число 1–65535, що вказує на конкретний процес. Порти нижче 1024 потребують прав адміністратора"
            color="purple"
            delay={3}
          />
          <InfoCardFeatured
            icon={Network}
            title="Сокет"
            subtitle="Зв'язка"
            description="Пара «адреса + порт» разом із протоколом. Саме сокет слухає ваш сервіс"
            color="green"
            delay={4}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="definition definition--cyan fade-in-delay-5">
            <p className="definition__term definition__term--cyan">Bind / Прив'язка</p>
            <p className="definition__description">
              Сервіс каже операційній системі: «повідомлення на цю адресу і цей порт —
              мені». Один сокет має одного власника, звідси помилка «address already in use»
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-5">
            <p className="definition__term definition__term--orange">Listen / Прослуховування</p>
            <p className="definition__description">
              Після прив'язки сервіс чекає на з'єднання. Якщо порт вільний, але ніхто
              не слухає — з'єднання відхиляється одразу, без очікування
            </p>
          </div>
        </div>

        <HighlightBox color="blue">
          Сервіс слухає <strong>не порт</strong>, а <strong>пару адреса:порт</strong> —
          і лише на тому сервері, де запущений. Тому «працює у мене» і «доступно ззовні» —
          різні твердження.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 6. PORT ALREADY IN USE ----------

function PortInUseSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Search}
          title="Хто зайняв порт"
          subtitle="Address Already in Use"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-body font-mono text-red" style={{ margin: 0 }}>
            Error: listen EADDRINUSE: address already in use :::3000
          </p>
        </div>

        <p className="fs-body text-secondary mb-base fade-in-delay-2">
          Порт на сервері може слухати лише один процес. Найчастіше це попередній
          запуск, який не завершився: окреме вікно терміналу, зупинений налагоджувач
          або сервіс, що лишився працювати у фоні.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="Хто слухає порт" color="blue">
            {`lsof -i :3000
ss -tlnp | grep 3000

# зупинити процес за його PID
kill <PID> (kill -9 <PID>)`}
          </CodeBlock>

          <CodeBlock title="Усі відкриті порти сервера" color="cyan">
            {`ss -tlnp
# t — TCP, l — listening,
# n — числа замість імен, p — процес

netstat -tlnp   # старіший аналог`}
          </CodeBlock>
        </div>

        <div className="numbered-list">
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">1</div>
            <p className="numbered-list__text">
              Знайти процес, а не перезавантажувати сервер навмання
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">2</div>
            <p className="numbered-list__text">
              Переконатися, що це ваш процес, а не системний сервіс, що зайняв цей порт
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">3</div>
            <p className="numbered-list__text">
              Зупинити коректно: примусове завершення лишає відкриті з'єднання
            </p>
          </div>
        </div>

        <HighlightBox color="purple">
          У команді про це домовляються заздалегідь: номер порту тримають у змінній
          середовища, щоб два проєкти на одному сервері не воювали за 3000 і 8080.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 7. PING IS NOT DIAGNOSTICS ----------

function PingIsNotDiagnosticsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Terminal}
          title="Чому ping — не діагностика"
          subtitle="Check the Port, Not the Host"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--red fade-in-delay-1">
            <div className="flex items-center gap-sm mb-base">
              <XCircle className="icon-lg text-red" />
              <h3 className="font-heading fs-section font-bold text-red">
                Пінг пройшов
              </h3>
            </div>
            <p className="fs-body text-secondary">
              Сервер увімкнений і відповідає на ICMP. Про ваш сервіс це не говорить{' '}
              <strong>нічого</strong>: процес міг не запуститися, слухати інший порт
              або віддавати помилку на кожен запит
            </p>
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <AlertTriangle className="icon-lg text-orange" />
              <h3 className="font-heading fs-section font-bold text-orange">
                Пінг не пройшов
              </h3>
            </div>
            <p className="fs-body text-secondary">
              Теж нічого не доводить. ICMP заблокований за замовчуванням у більшості хмарних провайдерів часто ріжеться на периметрі мережі
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--gradient-green-blue mb-xl fade-in-delay-3">
          <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
            Перевіряйте <strong>конкретний порт і конкретну відповідь</strong>,
            а не доступність сервера
          </p>
        </div>

        <div className="slide-grid slide-grid--3col">
          <div className="definition definition--green fade-in-delay-4">
            <p className="definition__term definition__term--green">Порт відкритий?</p>
            <p className="definition__description font-mono fs-body-sm">
              nc -zv host 8000
            </p>
          </div>
          <div className="definition definition--blue fade-in-delay-4">
            <p className="definition__term definition__term--blue">Сервіс відповідає?</p>
            <p className="definition__description font-mono fs-body-sm">
              curl -v http://host:8000/health
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-5">
            <p className="definition__term definition__term--purple">Хто слухає локально?</p>
            <p className="definition__description font-mono fs-body-sm">
              ss -tlnp
            </p>
          </div>
        </div>

        <HighlightBox color="cyan">
          Тому перевірка стану сервісу — це завжди запит до конкретного endpoint'а,
          а не пінг сервера. У лабораторній з моніторингу ви робитимете саме так.
        </HighlightBox>
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

// ---------- 8. TTL AND MOVING A SERVICE ----------

function DnsTtlSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Clock}
          title="TTL і переїзд сервісу"
          subtitle="Why the Change Did Not Apply"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">TTL — Time To Live</p>
            <p className="definition__description">
              Число в секундах, яке власник домену задає для кожного DNS-запису. Кеш зберігає відповідь не довше, ніж указано, і лише потім питає ще раз. Типові значення:
              300 (5 хвилин) для того, що може змінитися, 86400 (доба) для стабільного
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-2">
            <p className="definition__term definition__term--purple">Зворотний відлік</p>
            <p className="definition__description">
              У відповіді <span className="font-mono">dig</span> TTL показує не вихідне
              значення, а <strong>скільки лишилося</strong>. Те саме ім'я через хвилину
              покаже менше число — за цим видно, що відповідь із кешу, а не свіжа
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Відповідь на запит про ім'я кешується на кожному кроці — у резолвері
            провайдера, в операційній системі, у браузері. <strong>TTL</strong> каже,
            скільки секунд цю відповідь дозволено вважати актуальною.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--red fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <XCircle className="icon-lg text-red" />
              <h3 className="font-heading fs-section font-bold text-red">
                Як роблять зазвичай
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">1. Настав день переїзду</p>
              <p className="fs-body text-secondary">2. Змінили запис на нову адресу</p>
              <p className="fs-body text-secondary">3. У себе перевірили — працює</p>
              <p className="fs-body text-secondary">4. Частина користувачів ще добу
                ходить на старий сервер</p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Старий сервер вимкнули — і для них сервіс просто зник
            </p>
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-3">
            <div className="flex items-center gap-sm mb-base">
              <CheckCircle2 className="icon-lg text-green" />
              <h3 className="font-heading fs-section font-bold text-green">
                Як треба
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">1. За добу до переїзду знизили TTL
                до кількох хвилин</p>
              <p className="fs-body text-secondary">2. Дочекалися, поки старий TTL
                вичерпається</p>
              <p className="fs-body text-secondary">3. Змінили адресу — розходиться
                за хвилини</p>
              <p className="fs-body text-secondary">4. Переконалися, що трафіку на
                старому немає</p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Тільки після цього повернули TTL і вимкнули старий сервер
            </p>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Ключове правило: TTL знижують <strong>до</strong> зміни, а не після.
          Після зміни знижувати вже пізно — стара відповідь із довгим TTL уже
          розійшлася по кешах, і вплинути на неї ви не можете.
        </HighlightBox>

        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text fs-body-sm">
            Звідси й фраза «зміни DNS поширюються до 48 годин». Це не про повільність
            протоколу — це про те, що хтось лишив TTL у 24 години й не знизив його
            заздалегідь.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 9. DIG IN PRACTICE ----------

function DigSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Search}
          title="dig на практиці"
          subtitle="Reading the Answer, Not Guessing"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Перше питання будь-якої мережевої проблеми: ім'я взагалі перетворюється на
          адресу, і чи на ту, яку ви очікуєте? Для відповіді достатньо однієї команди.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="Швидка перевірка" color="blue">
            {`dig +short api.example.com
# лише адреси, без службового виводу

dig +noall +answer api.example.com
# те саме плюс TTL, клас і тип запису`}
          </CodeBlock>

          <CodeBlock title="Порівняти різні резолвери" color="purple">
            {`dig @8.8.8.8 api.example.com
# запит до конкретного резолвера (Google)

dig @1.1.1.1 api.example.com
# запит до іншого резолвера (Cloudflare)`}
          </CodeBlock>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <div className="definition definition--green fade-in-delay-2">
            <p className="definition__term definition__term--green">Порожня відповідь</p>
            <p className="definition__description">
              Запису в DNS-зоні немає або він ще не створений. До сервісу навіть не намагалися
              достукатися
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-3">
            <p className="definition__term definition__term--orange">Стара адреса</p>
            <p className="definition__description">
              Запис змінено, але кеш ще живий. Подивіться на TTL у відповіді — це
              час, що лишився
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-4">
            <p className="definition__term definition__term--purple">Різні резолвери — різні адреси</p>
            <p className="definition__description">
              Зміна саме зараз розходиться. Частина користувачів уже на новому
              сервері, частина ще ні
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--blue mb-base fade-in-delay-5">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-blue">Записи, які трапляються найчастіше:</strong>{' '}
            <span className="font-mono">A</span> — ім'я на адресу IPv4,{' '}
            <span className="font-mono">AAAA</span> — на IPv6,{' '}
            <span className="font-mono">CNAME</span> — псевдонім іншого імені (так
            підключають керовані платформи),{' '}
            <span className="font-mono">TXT</span> — довільний текст, ним підтверджують
            володіння доменом при випуску сертифіката.
          </p>
        </div>

        <HighlightBox color="cyan">
          Порядок дій при «сайт не відкривається»: спершу <span className="font-mono">dig</span>,
          і лише якщо адреса правильна — переходимо до порту й HTTP. Інакше є ризик
          годину налагоджувати сервіс, який працює бездоганно.
        </HighlightBox>
      </div>
    </div>
  );
}
// ---------- 10. SINGLE ENTRY POINT ----------

function EntryPointSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={DoorOpen}
          title="Одна точка входу"
          subtitle="Who Answers Before Your Service Does"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            У навчальному прикладі клієнт стукає прямо в сервіс. У будь-якій робочій
            системі між ними стоїть <strong>точка входу</strong> — окремий компонент,
            який приймає всі запити ззовні й вирішує, кому їх передати.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <XCircle className="icon-lg text-orange" />
              <h3 className="font-heading fs-section font-bold text-orange">
                Клієнт → сервіс напряму
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Кожен сервіс сам робить TLS</p>
              <p className="fs-body text-secondary">Кожен відкритий у мережу окремим портом</p>
              <p className="fs-body text-secondary">Клієнт має знати адресу кожного</p>
              <p className="fs-body text-secondary">Один сервіс — один екземпляр</p>
            </div>
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-3">
            <div className="flex items-center gap-sm mb-base">
              <CheckCircle2 className="icon-lg text-green" />
              <h3 className="font-heading fs-section font-bold text-green">
                Клієнт → точка входу → сервіси
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">TLS в одному місці</p>
              <p className="fs-body text-secondary">Назовні відкритий один порт</p>
              <p className="fs-body text-secondary">Одна адреса, маршрути всередині</p>
              <p className="fs-body text-secondary">Сервіс можна множити непомітно</p>
            </div>
          </div>
        </div>

        <div className="flow-diagram mb-xl fade-in-delay-4">
          <div className="icon-box icon-box--blue">
            <Users className="icon-box__icon icon-box__icon--blue" />
            <p className="icon-box__title">Клієнт</p>
            <p className="icon-box__subtitle">браузер, застосунок</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--purple">
            <DoorOpen className="icon-box__icon icon-box__icon--purple" />
            <p className="icon-box__title">Точка входу</p>
            <p className="icon-box__subtitle">одна адреса, порт 443</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--green">
            <Server className="icon-box__icon icon-box__icon--green" />
            <p className="icon-box__title">Сервіси</p>
            <p className="icon-box__subtitle">внутрішня мережа</p>
          </div>
        </div>

        <HighlightBox color="cyan">
          Ця точка входу має різні імена залежно від технології — зворотний проксі, шлюз,
          контролер вхідного трафіку, балансувальник. Суть однакова: приймає ззовні,
          розподіляє всередину.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 11. WHAT A REVERSE PROXY DOES ----------

function ReverseProxySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Share2}
          title="Що робить зворотний проксі"
          subtitle="Reverse Proxy Responsibilities"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={Share2}
            title="Маршрутизація"
            subtitle="Routing"
            description="За шляхом або доменом вирішує, якому сервісу передати запит: /api — бекенду, решта — фронтенду"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={Lock}
            title="Термінація TLS"
            subtitle="TLS Termination"
            description="Розшифровує з'єднання і далі говорить із сервісами звичайним HTTP. Сертифікат живе в одному місці"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Globe}
            title="Роздача статики"
            subtitle="Static Content"
            description="Файли фронтенду віддає сам, не турбуючи застосунок. Швидше і дешевше"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Scale}
            title="Обмеження частоти"
            subtitle="Rate Limiting"
            description="Відсікає надмірний потік запитів до того, як він дійде до сервісу й покладе його"
            color="orange"
            delay={4}
          />
        </div>

        <div className="outlined-card outlined-card--blue mb-base fade-in-delay-5">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-blue">Прямий проксі</strong> захищає й ховає{' '}
            <strong>клієнта</strong>: через нього виходять у зовнішній світ.{' '}
            <strong className="text-purple">Зворотний</strong> захищає й ховає{' '}
            <strong>сервер</strong>: через нього входять ззовні. Різниця тільки в тому,
            з якого боку він стоїть.
          </p>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Наслідок для діагностики: помилку може повернути{' '}
          <strong>сам проксі</strong>, навіть не звернувшись до вашого сервісу.
          У журналах застосунку такого запиту не буде взагалі — і це типова причина хибної діагностики.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 12. LOAD BALANCING AND HEALTH CHECKS ----------

function LoadBalancingSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Shuffle}
          title="Балансування і перевірки стану"
          subtitle="Load Balancing &amp; Health Checks"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Коли екземплярів сервісу більше одного, точка входу має вирішувати, кому
          віддати наступний запит. Алгоритм — це половина справи; друга половина
          важливіша.
        </p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">По черзі</p>
            <p className="definition__description">
              Round robin. Кожному екземпляру по запиту за колом. Просто й передбачувано,
              якщо запити приблизно однакові за вагою
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-3">
            <p className="definition__term definition__term--purple">За завантаженням</p>
            <p className="definition__description">
              Least connections. Наступний запит іде туди, де зараз найменше активних
              з'єднань. Краще для нерівномірних запитів
            </p>
          </div>
          <div className="definition definition--green fade-in-delay-4">
            <p className="definition__term definition__term--green">За ознакою клієнта</p>
            <p className="definition__description">
              Sticky sessions. Один клієнт завжди потрапляє на той самий екземпляр.
              Потрібно, коли сервіс тримає стан у пам'яті
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--red mb-base fade-in-delay-5">
          <div className="flex items-center gap-sm mb-base">
            <Heart className="icon-lg text-red" />
            <h3 className="font-heading fs-section font-bold text-red">
              Балансувальник без перевірок стану
            </h3>
          </div>
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Якщо один із екземплярів упав, а перевірок немає — точка входу продовжує надсилати йому свою частку запитів.
            Користувачі бачать помилку в частині випадків, і це найгірший вид збою: система «начебто працює», а скарги плавають.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="definition definition--cyan fade-in-delay-5">
            <p className="definition__term definition__term--cyan">Що перевіряти</p>
            <p className="definition__description">
              Окремий endpoint, який відповідає лише тоді, коли сервіс справді готовий:
              підключення до бази живе, конфігурація завантажена
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-5">
            <p className="definition__term definition__term--orange">Чого не робити</p>
            <p className="definition__description">
              Перевірка, що завжди повертає 200 незалежно від стану, гірша за її
              відсутність: вона створює хибну впевненість
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 13. X-FORWARDED-FOR ----------

function ForwardedForSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Eye}
          title="Хто прийшов насправді"
          subtitle="X-Forwarded-For"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Симптом: у журналах сервісу <strong>всі запити з однієї адреси</strong>.
            Здається, що на вас іде атака з одного джерела — насправді ви бачите
            адресу власної точки входу.
          </p>
        </div>

        <p className="fs-body text-secondary mb-base fade-in-delay-2">
          З погляду сервісу клієнт — це той, хто відкрив з'єднання. А з'єднання
          відкрив проксі, не користувач. Оригінальну адресу проксі передає окремим
          заголовком, і сервіс має її звідти прочитати.
        </p>

        <CodeBlock title="Заголовки, що додає точка входу" color="purple">
          {`X-Forwarded-For: 203.0.113.45, 10.0.0.8
# ланцюжок адрес: клієнт, далі кожен проксі на шляху

X-Forwarded-Proto: https
# яким протоколом прийшов запит ЗЗОВНІ

X-Forwarded-Host: api.example.com
# який домен запитував клієнт`}
        </CodeBlock>

        <div className="slide-grid slide-grid--2col mt-xl">
          <HighlightBox color="orange" icon={AlertTriangle}>
            <strong>Наслідок для обмеження частоти:</strong> якщо рахувати за адресою
            з'єднання, ви заблокуєте всіх користувачів одразу, бо адреса в них спільна
          </HighlightBox>
          <HighlightBox color="red" icon={XCircle}>
            <strong>Наслідок для безпеки:</strong> заголовок надсилає клієнт, і його
            легко підробити. Довіряти можна лише тому, що додав <em>ваш</em> проксі
          </HighlightBox>
        </div>

        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text fs-body-sm">
            Ще один класичний баг: якщо сервіс не читає{' '}
            <span className="font-mono">X-Forwarded-Proto</span>, він бачить звичайний
            HTTP і вважає з'єднання незахищеним. Далі він будує посилання з{' '}
            <span className="font-mono">http://</span>, не ставить cookie з прапорцем{' '}
            <span className="font-mono">Secure</span>, а браузер блокує мішаний вміст.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 14. REQUEST AND RESPONSE ----------

function HttpAnatomySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={FileText}
          title="Запит і відповідь"
          subtitle="Anatomy of an HTTP Exchange"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          HTTP — це текст. Усе, що подорожує між клієнтом і сервісом, можна прочитати
          очима, і саме тому діагностика тут така зручна: ви бачите буквально те, що
          відправили й отримали.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="Запит" color="blue">
            {`POST /api/items HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer <token>

{"title": "Нова річ"}`}
          </CodeBlock>

          <CodeBlock title="Відповідь" color="green">
            {`HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/items/42

{"id": 42, "title": "Нова річ"}`}
          </CodeBlock>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">Стартовий рядок</p>
            <p className="definition__description">
              Перший рядок запиту містить метод і шлях, перший рядок відповіді — код стану. В обох випадках це найінформативніша частина повідомлення
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-3">
            <p className="definition__term definition__term--purple">Заголовки</p>
            <p className="definition__description">
              Метадані: формат, автентифікація, кешування, оригінальний клієнт.
              Саме тут живе більшість інфраструктурних рішень
            </p>
          </div>
          <div className="definition definition--green fade-in-delay-4">
            <p className="definition__term definition__term--green">Тіло</p>
            <p className="definition__description">
              Необов'язкове. Відокремлене від заголовків порожнім рядком — це єдиний роздільник у повідомленні
            </p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <CodeBlock title="Подивитися обмін" color="cyan">
            {`curl -v https://api.example.com/health
# > — те, що надіслали, < — те, що отримали

curl -i https://api.example.com/health
# лише відповідь: заголовки разом із тілом`}
          </CodeBlock>

          <CodeBlock title="Надіслати той самий запит" color="purple">
            {`curl -X POST https://api.example.com/api/items \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer <token>' \\
  -d '{"title": "Нова річ"}'`}
          </CodeBlock>
        </div>

      </div>
    </div>
  );
}

// ---------- 15. STATUS CODE CLASSES ----------

function StatusClassesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Hash}
          title="Коди відповіді за класами"
          subtitle="First Digit Tells You Who Is at Fault"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
            Перша цифра відповідає на головне питання інциденту:{' '}
            <strong>чия це проблема</strong>
          </p>
        </div>

        <div className="flex flex-col gap-base">
          <BadgeCard
            letter="2xx"
            title="Успіх"
            subtitle="Success"
            description="Запит прийнято й оброблено. Найчастіші: 200 OK, 201 Created, 204 No Content"
            color="green"
            delay={1}
          />
          <BadgeCard
            letter="3xx"
            title="Перенаправлення"
            subtitle="Redirection"
            description="Ресурс в іншому місці. Клієнт має піти за адресою із заголовка Location"
            color="blue"
            delay={2}
          />
          <BadgeCard
            letter="4xx"
            title="Помилка на боці клієнта"
            subtitle="Client Error"
            description="Запит некоректний: не той формат, немає прав, ресурсу не існує. Повторювати без змін немає сенсу"
            color="orange"
            delay={3}
          />
          <BadgeCard
            letter="5xx"
            title="Помилка на боці сервера"
            subtitle="Server Error"
            description="Запит був нормальний — не впорався сервіс або те, що стоїть перед ним. Повторна спроба може допомогти"
            color="red"
            delay={4}
          />
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Практичний висновок: <strong>4xx</strong> — ідіть до того, хто робить запит.{' '}
          <strong>5xx</strong> — ідіть до того, хто тримає сервіс. Одна цифра економить
          пів години з'ясувань, хто винен.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 16. CODES WORTH KNOWING ----------

function StatusCodesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={ListChecks}
          title="Коди, які треба знати"
          subtitle="The Short List"
        />

        <div className="slide-grid slide-grid--2col">
          <div className="flex flex-col gap-sm fade-in-delay-1">
            <DefBadge term="200" description="OK — стандартна успішна відповідь" color="green" />
            <DefBadge term="201" description="Created — ресурс створено, адреса в Location" color="green" />
            <DefBadge term="204" description="No Content — успіх, тіла немає. Типово для видалення" color="green" />
            <DefBadge term="301" description="Moved Permanently — ресурс переїхав назавжди. Браузер запам'ятає нову адресу й кешуватиме" color="blue" nowrap />
            <DefBadge term="302" description="Found — ресурс тимчасово за іншою адресою. Не кешується, можна відкотити" color="blue" />
            <DefBadge term="304" description="Not Modified — ресурс не змінився, беріть із кешу. Генерує фреймворк за вашим ETag" color="blue" />
          </div>

          <div className="flex flex-col gap-sm fade-in-delay-2">
            <DefBadge term="400" description="Bad Request — сервіс не зміг розібрати запит" color="orange" />
            <DefBadge term="401" description="Unauthorized — ви не представилися" color="orange" />
            <DefBadge term="403" description="Forbidden — представилися, але прав немає" color="orange" />
            <DefBadge term="404" description="Not Found — такого шляху немає" color="orange" />
            <DefBadge term="415" description="Unsupported Media Type — сервіс не приймає такий Content-Type" color="orange" />
            <DefBadge term="429" description="Too Many Requests — спрацювало обмеження частоти" color="orange" nowrap />
            <DefBadge term="500" description="Internal Server Error — сервіс упав на обробці" color="red" nowrap />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mt-xl">
          <HighlightBox color="purple">
            <strong>401 проти 403</strong> — «я вас не знаю» проти «я вас знаю, вам не
            можна». Перше лікується токеном, друге — правами. Плутають постійно
          </HighlightBox>
          <HighlightBox color="blue">
            <strong>301 проти 302</strong> — 302 ви повертатимете самі, 301 частіше
            налаштовується в проксі. Різниця в кешуванні: помилково поставили 301 —
            користувачі йтимуть за старою адресою навіть після виправлення
          </HighlightBox>
        </div>

        <div className="highlight-box highlight-box--orange mt-base">
          <p className="highlight-box__text fs-body-sm">
            <span className="font-mono">429</span> варто знати окремо: він означає,
            що ваш сервіс живий і здоровий, а обмеження наклала точка входу. Часто з'являється саме під час налагодження, коли ви повторюєте той самий запит десятки разів поспіль.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 17. 502 VS 504 ----------

function BadGatewayVsTimeoutSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Split}
          title="502 проти 504"
          subtitle="Both Come From the Entry Point, Not Your Service"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Обидва коди повертає <strong>точка входу</strong>. Вашого сервісу в цей
            момент або немає, або він мовчить — тому в його журналах цього запиту
            може не бути взагалі.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <XCircle className="icon-lg text-orange" />
              <h3 className="font-heading fs-section font-bold text-orange">
                502 Bad Gateway
              </h3>
            </div>
            <p className="fs-body text-secondary mb-base">
              Проксі спробував звернутися до сервісу і <strong>отримав відмову</strong>
              {' '}або незрозумілу відповідь.
            </p>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Сервіс не запустився або впав</p>
              <p className="fs-body text-secondary">Слухає не той порт, що вказано в проксі</p>
              <p className="fs-body text-secondary">Щойно перезапускається</p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Відповідь приходить швидко — за частки секунди
            </p>
          </div>

          <div className="outlined-card outlined-card--red fade-in-delay-3">
            <div className="flex items-center gap-sm mb-base">
              <Timer className="icon-lg text-red" />
              <h3 className="font-heading fs-section font-bold text-red">
                504 Gateway Timeout
              </h3>
            </div>
            <p className="fs-body text-secondary mb-base">
              Проксі дозвонився до сервісу, але <strong>не дочекався відповіді</strong>{' '}
              у відведений час.
            </p>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Повільний запит до бази</p>
              <p className="fs-body text-secondary">Сервіс чекає на іншу зовнішню систему</p>
              <p className="fs-body text-secondary">Вичерпано пул з'єднань, запит у черзі</p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Відповідь приходить рівно через тайм-аут проксі — 30 або 60 секунд
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--gradient-green-blue mb-base fade-in-delay-4">
          <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
            Найпростіший спосіб відрізнити — <strong>подивитися на час</strong>.
            Миттєво — 502. Рівно через 30 секунд — 504
          </p>
        </div>

        <HighlightBox color="cyan">
          І куди йти далі: при <strong>502</strong> перевіряйте, чи сервіс узагалі
          працює і на тому порту. При <strong>504</strong> сервіс живий — шукайте,
          що саме в ньому виконується довго.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 18. HEADERS THAT AFFECT INFRASTRUCTURE ----------

function HeadersSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Tags}
          title="Заголовки та інфраструктура"
          subtitle="Headers You Will Actually Touch"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Заголовків десятки, але в роботі інженера регулярно трапляється невелика
          група — та, що впливає на поведінку не застосунку, а всього, що навколо нього.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={FileText}
            title="Content-Type"
            subtitle="Формат тіла"
            description="Каже, як читати тіло. Найчастіші: application/json, text/html, application/x-www-form-urlencoded, multipart/form-data. Не той тип — 415"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={ShieldAlert}
            title="Authorization"
            subtitle="Хто ви"
            description="Токен або ключ. Ніколи не потрапляє в журнали й у сховище системи контролю версій"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Clock}
            title="Cache-Control"
            subtitle="Кому і скільки кешувати"
            description="max-age=31536000 для статики з хешем в імені, no-cache для HTML — кешувати, але щоразу перепитувати. Переплутали — після деплою користувачі бачать старе"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Eye}
            title="X-Forwarded-For"
            subtitle="Оригінальний клієнт"
            description="Додає точка входу. Без нього в журналах усі запити виглядають як такі, що прийшли з однієї адреси"
            color="orange"
            delay={4}
          />
        </div>

        <div className="outlined-card outlined-card--blue mb-base fade-in-delay-5">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-blue">Заголовки з префіксом X-</strong> — історично
            «нестандартні», додані кимось на шляху. Сьогодні частина з них фактично
            стала стандартом де-факто, але правило лишається: якщо бачите{' '}
            <span className="font-mono">X-</span>, з'ясуйте, <em>хто саме</em> його
            додав — клієнт чи ваша ж інфраструктура.
          </p>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Заголовку, який надіслав клієнт, довіряти не можна — підробити його
          тривіально. Довіряти можна лише тому, що дописала ваша точка входу.
          Тому граничний проксі <strong>налаштовують</strong> так, щоб він
          перезаписував ці заголовки, а не доповнював чужі.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 19. WHAT TLS GIVES YOU ----------

function TlsBasicsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Lock}
          title="Що дає TLS"
          subtitle="Transport Layer Security - Three Guarantees, Not One"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            HTTPS — це не тільки шифрування. TLS дає три гарантії, і без двох інших шифрування нічого не варте: ви б надійно шифрували канал{' '}
            <strong>невідомо з ким</strong>.
          </p>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCardFeatured
            icon={KeyRound}
            title="Конфіденційність"
            subtitle="Encryption"
            description="Ніхто на шляху не прочитає вміст: ні провайдер, ні власник мережі Wi-Fi, ні проміжні вузли"
            color="blue"
            delay={2}
          />
          <InfoCardFeatured
            icon={ShieldCheck}
            title="Цілісність"
            subtitle="Integrity"
            description="Дані не змінилися дорогою. Підміна вмісту буде помічена, а з'єднання розірване"
            color="purple"
            delay={3}
          />
          <InfoCardFeatured
            icon={Stamp}
            title="Автентифікація"
            subtitle="Authentication"
            description="Ви говорите саме з тим сервером, чиє ім'я набрали. Це і є головна робота сертифіката"
            color="green"
            delay={4}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="definition definition--cyan fade-in-delay-5">
            <p className="definition__term definition__term--cyan">Що НЕ дає TLS</p>
            <p className="definition__description">
              Не робить сервіс безпечним. Вразливий застосунок за HTTPS лишається
              вразливим — просто атака теж іде шифрованим каналом
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-5">
            <p className="definition__term definition__term--orange">Чого не видно ззовні</p>
            <p className="definition__description">
              Шлях, заголовки й тіло приховані. А от <strong>ім'я домену</strong>{' '}
              і обсяг трафіку спостерігач бачить
            </p>
          </div>
        </div>

        <HighlightBox color="blue">
          У схемі з точкою входу TLS зазвичай завершується саме на ній: далі
          всередині мережі сервіси спілкуються звичайним HTTP. Тому сертифікат —
          це предмет турботи інфраструктури, а не кожного застосунку окремо.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 20. CHAIN OF TRUST ----------

function TrustChainSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Link2}
          title="Ланцюг довіри"
          subtitle="Why the Browser Believes the Certificate"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Сертифікат — це заява «цей ключ належить цьому імені», підписана тим, кому браузер уже довіряє. Перевірка йде вгору по ланцюжку до кореневого сертифіката зі сховища операційної системи.
        </p>

        <div className="flow-diagram mb-xl fade-in-delay-2">
          <div className="icon-box icon-box--green">
            <ShieldCheck className="icon-box__icon icon-box__icon--green" />
            <p className="icon-box__title">Кореневий</p>
            <p className="icon-box__subtitle">у сховищі ОС і браузера</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--purple">
            <Stamp className="icon-box__icon icon-box__icon--purple" />
            <p className="icon-box__title">Проміжний</p>
            <p className="icon-box__subtitle">видає центр сертифікації</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--blue">
            <Lock className="icon-box__icon icon-box__icon--blue" />
            <p className="icon-box__title">Ваш сертифікат</p>
            <p className="icon-box__subtitle">на конкретне ім'я</p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="outlined-card outlined-card--red fade-in-delay-3">
            <div className="flex items-center gap-sm mb-base">
              <XCircle className="icon-lg text-red" />
              <h3 className="font-heading fs-section font-bold text-red">
                Самопідписаний
              </h3>
            </div>
            <p className="fs-body text-secondary">
              Ланцюжок обривається на першому кроці: підписав сам себе, довіряти немає підстав. Браузер показує попередження замість сторінки. Для локальної розробки нормально, назовні — ні
            </p>
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-4">
            <div className="flex items-center gap-sm mb-base">
              <AlertTriangle className="icon-lg text-orange" />
              <h3 className="font-heading fs-section font-bold text-orange">
                Неповний ланцюжок
              </h3>
            </div>
            <p className="fs-body text-secondary">
              Сервер віддав свій сертифікат, але забув проміжний. Підступність у тому,
              що в браузері працює, а з командного рядка й з мобільних застосунків — ні
            </p>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          «У браузері відкривається, а <span className="font-mono">curl</span> повертає помилку»
          — майже завжди неповний ланцюжок. Браузери вміють дотягувати проміжний
          сертифікат самі, інші клієнти — ні.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 21. ACME AND EXPIRY ----------

function AcmeSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={RefreshCw}
          title="Автовидача і протермінування"
          subtitle="ACME &amp; Certificate Expiry"
        />

        <div className="outlined-card outlined-card--gradient-green-blue mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Сучасні сертифікати видаються автоматично і живуть недовго — близько
            трьох місяців. Короткий строк <strong>навмисний</strong>: він змушує
            зробити продовження автоматичним, а не ручним.
          </p>
        </div>

        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">1</div>
            <p className="numbered-list__text">
              Клієнт просить сертифікат на ім'я і доводить, що домен його: розміщує файл на сервері або створює тимчасовий DNS-запис. Це протокол ACME, і на практиці все робить за вас certbot або cert-manager
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">2</div>
            <p className="numbered-list__text">
              Центр сертифікації перевіряє доказ і видає сертифікат
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">3</div>
            <p className="numbered-list__text">
              Задовго до кінця строку той самий клієнт мовчки повторює процедуру.
              Людина в цьому не бере участі
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--red mb-base fade-in-delay-5">
          <div className="flex items-center gap-sm mb-base">
            <CalendarClock className="icon-lg text-red" />
            <h3 className="font-heading fs-section font-bold text-red">
              Класичний нічний інцидент
            </h3>
          </div>
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Сервіс не змінювався місяцями й раптом перестав працювати для всіх одразу,
            без жодного розгортання. Перше, що перевіряють у такій ситуації, — строк
            дії сертифіката. Автопродовження могло тихо ламатися три місяці, і ніхто
            цього не бачив.
          </p>
        </div>

        <HighlightBox color="purple">
          Тому строк дії сертифіката — <strong>метрика</strong>, а не разова перевірка.
          Алерт має спрацьовувати за два тижні до кінця, а не в день закінчення.
          Це саме той випадок, коли моніторинг рятує вихідні.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 22. TLS DIAGNOSTICS ----------

function TlsDiagnosticsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Search}
          title="Діагностика TLS"
          subtitle="Reading the Certificate Yourself"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="Строк дії і власник" color="blue">
            {`echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null \\
  | openssl x509 -noout -dates -subject

# notBefore, notAfter — межі строку
# subject — на яке ім'я виданий`}
          </CodeBlock>

          <CodeBlock title="Повний ланцюжок" color="purple">
            {`echo | openssl s_client -connect example.com:443 \\
  -servername example.com -showcerts 2>/dev/null \\
  | grep -E 's:|i:'

# s: — кому видано, i: — хто підписав
# одна пара рядків замість двох — немає проміжного`}
          </CodeBlock>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <div className="definition definition--red fade-in-delay-2">
            <p className="definition__term definition__term--red">certificate has expired</p>
            <p className="definition__description">
              Строк вийшов. Дивіться, чому не спрацювало автопродовження — воно
              зазвичай ламається задовго до цього дня
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-3">
            <p className="definition__term definition__term--orange">hostname mismatch</p>
            <p className="definition__description">
              Сертифікат виданий на інше ім'я. Часто буває при зверненні за IP-адресою
              замість домену
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-4">
            <p className="definition__term definition__term--purple">unable to verify</p>
            <p className="definition__description">
              Ланцюжок не сходиться: немає проміжного сертифіката або корінь
              невідомий цьому клієнту
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--blue mb-base fade-in-delay-5">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-blue">Швидка перевірка без openssl:</strong>{' '}
            <span className="font-mono">curl -v -o /dev/null https://example.com</span> — у виводі
            видно основні поля сертифіката й результат перевірки. А{' '}
            <span className="font-mono">curl -k</span> вимикає перевірку взагалі:
            зручно, щоб підтвердити «справа саме в сертифікаті», але{' '}
            <strong>у скрипті, що пішов у продакшн, це перетворює HTTPS на HTTP
              із зайвими витратами</strong>.
          </p>
        </div>

        <HighlightBox color="cyan">
          Пам'ятайте про різницю клієнтів: браузер прощає неповний ланцюжок,{' '}
          <span className="font-mono">curl</span> і мобільні застосунки — ні.
          Перевіряти треба тим клієнтом, яким ходять ваші користувачі.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 23. WHAT AN ORIGIN IS ----------

function OriginSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Fingerprint}
          title="Що таке origin"
          subtitle="Same-Origin Policy"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary text-center font-mono" style={{ margin: 0 }}>
            <span className="text-blue">https</span>
            <span className="text-muted">://</span>
            <span className="text-purple">app.example.com</span>
            <span className="text-muted">:</span>
            <span className="text-green">443</span>
            <span className="text-muted">/users/42</span>
          </p>
          <p className="fs-body text-center mt-sm" style={{ marginBottom: 0 }}>
            <span className="text-blue">схема</span>
            <span className="text-muted"> + </span>
            <span className="text-purple">хост</span>
            <span className="text-muted"> + </span>
            <span className="text-green">порт</span>
            <span className="text-secondary"> — це і є origin. Шлях у нього не входить</span>
          </p>
        </div>

        <p className="fs-body text-secondary mb-base fade-in-delay-2">
          Браузер за замовчуванням не дозволяє коду з однієї сторінки читати відповіді
          з іншого origin. Це захист користувача: інакше будь-який відкритий сайт міг
          би тихо читати вашу пошту у сусідній вкладці, використовуючи ваші ж куки.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-3">
            <div className="flex items-center gap-sm mb-base">
              <CheckCircle2 className="icon-lg text-green" />
              <h3 className="font-heading fs-section font-bold text-green">
                Той самий origin
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body-sm font-mono text-secondary">
                https://app.com/page → https://app.com/api
              </p>
              <p className="fs-body-sm font-mono text-secondary">
                https://app.com → https://app.com:443
              </p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Порт зазвичай не пишуть: для https це 443, для http — 80
            </p>
          </div>

          <div className="outlined-card outlined-card--red fade-in-delay-4">
            <div className="flex items-center gap-sm mb-base">
              <XCircle className="icon-lg text-red" />
              <h3 className="font-heading fs-section font-bold text-red">
                Різні origin
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body-sm font-mono text-secondary">
                http://app.com → https://app.com
              </p>
              <p className="fs-body-sm font-mono text-secondary">
                https://app.com → https://api.app.com
              </p>
              <p className="fs-body-sm font-mono text-secondary">
                localhost:5173 → localhost:8000
              </p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Різна схема, піддомен або порт — уже інший origin
            </p>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Третій приклад справа — це ваша щоденна розробка: фронтенд на одному порту,
          API на іншому. Формально це <strong>різні origin</strong>, і браузер
          поводиться з ними так само суворо, як із чужими сайтами.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 24. WHY CURL WORKS AND THE BROWSER DOES NOT ----------

function CorsBrowserOnlySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={MonitorSmartphone}
          title="curl працює, браузер — ні"
          subtitle="The Restriction Lives in the Browser"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          <strong>CORS</strong> (Cross-Origin Resource Sharing) — механізм, яким сервіс 
          дозволяє обраним origin читати свої відповіді. Тобто це не заборона, а спосіб 
          зняти заборону на читання через межу origin.
        </p>
        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Найважливіше речення про CORS: обмеження накладає{' '}
            <strong>браузер</strong>, а не сервер. Сервіс відповів нормально — просто
            браузер не віддав відповідь коду сторінки.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <Terminal className="icon-lg text-green" />
              <h3 className="font-heading fs-section font-bold text-green">
                З командного рядка
              </h3>
            </div>
            <p className="fs-body text-secondary">
              <span className="font-mono">curl</span> не має поняття origin і не
              зберігає ваших куків для чужих сайтів. Захищати нема кого — запит
              проходить, відповідь приходить
            </p>
          </div>

          <div className="outlined-card outlined-card--red fade-in-delay-3">
            <div className="flex items-center gap-sm mb-base">
              <XCircle className="icon-lg text-red" />
              <h3 className="font-heading fs-section font-bold text-red">
                З браузера
              </h3>
            </div>
            <p className="fs-body text-secondary">
              Запит теж пішов, сервіс теж відповів — але без дозвільного заголовка
              браузер відповідь <strong>відкидає</strong> і пише помилку в консоль
            </p>
          </div>
        </div>

        <CodeBlock title="Дозвіл видає сервіс — у заголовку відповіді" color="purple">
          {`Access-Control-Allow-Origin: https://app.example.com
# кому саме дозволено читати цю відповідь

Access-Control-Allow-Credentials: true
# чи можна надсилати куки й заголовок Authorization

Access-Control-Allow-Origin: *
# зірочка не працює разом із Allow-Credentials: true —
# при куках origin треба вказати явно`}
        </CodeBlock>

        <div className="slide-grid slide-grid--2col mt-xl">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Наслідок для діагностики: у журналах сервісу запит{' '}
            <strong>є</strong> і код у нього 200. Шукати причину в застосунку марно —
            дивіться заголовки відповіді
          </HighlightBox>
          <HighlightBox color="blue">
            CORS не захищає ваш API — ті самі дані дістане будь-хто через{' '}
            <span className="font-mono">curl</span>. Він захищає{' '}
            <strong>сеанс користувача</strong>: без нього чужа вкладка читала б ваші
            дані вашими ж куками. Захист API — це автентифікація
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 25. PREFLIGHT ----------

function PreflightSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Shuffle}
          title="Preflight-запит"
          subtitle="The Request You Did Not Send"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Для «непростих» запитів браузер спершу питає дозволу окремим запитом методом{' '}
          <span className="font-mono">OPTIONS</span> — і лише отримавши згоду, надсилає
          справжній. Цього запиту немає у вашому коді, його додає браузер.
        </p>

        <div className="flow-diagram mb-xl fade-in-delay-2">
          <div className="icon-box icon-box--blue">
            <MonitorSmartphone className="icon-box__icon icon-box__icon--blue" />
            <p className="icon-box__title">OPTIONS</p>
            <p className="icon-box__subtitle">«чи можна мені?»</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--purple">
            <Server className="icon-box__icon icon-box__icon--purple" />
            <p className="icon-box__title">Дозволи</p>
            <p className="icon-box__subtitle">методи, заголовки</p>
          </div>

          <ArrowRight className="arrow" />

          <div className="icon-box icon-box--green">
            <Send className="icon-box__icon icon-box__icon--green" />
            <p className="icon-box__title">Справжній запит</p>
            <p className="icon-box__subtitle">POST, PUT, DELETE…</p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="definition definition--green fade-in-delay-3">
            <p className="definition__term definition__term--green">Без preflight</p>
            <p className="definition__description">
              GET і POST зі звичайною формою, без нестандартних заголовків. Браузер
              надсилає одразу й перевіряє дозвіл уже у відповіді
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-4">
            <p className="definition__term definition__term--orange">З preflight</p>
            <p className="definition__description">
              PUT, PATCH, DELETE, або{' '}
              <span className="font-mono">Content-Type: application/json</span>, або
              заголовок типу{' '}
              <span className="font-mono">Authorization</span>, якого немає в дозволеному списку
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--red mb-base fade-in-delay-5">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-red">Типовий провал:</strong> сервіс налаштований
            відповідати на <span className="font-mono">POST /api/items</span>, але не
            обробляє <span className="font-mono">OPTIONS</span> на той самий шлях —
            і повертає 404 або 405. Справжній запит тоді не надсилається взагалі, а в
            консолі видно помилку CORS, хоча сам POST налаштований бездоганно.
          </p>
        </div>

        <HighlightBox color="cyan">
          Тому в браузері дивіться вкладку мережі й шукайте{' '}
          <span className="font-mono">OPTIONS</span> перед вашим запитом. Якщо він
          червоний — проблема саме тут, і до основного запиту справа не дійшла.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 26. WHY WILDCARD IS NOT A FIX ----------

function CorsWildcardSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={ShieldOff}
          title="Чому «*» не рішення"
          subtitle="The First Answer From the Internet"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-body font-mono text-red" style={{ margin: 0 }}>
            Access-Control-Allow-Origin: *
          </p>
          <p className="fs-body-sm text-muted mt-sm" style={{ marginBottom: 0 }}>
            Перше, що радять у відповідях на форумах. Помилка зникає — разом із
            захистом, який її спричинив
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <AlertTriangle className="icon-lg text-orange" />
              <h3 className="font-heading fs-section font-bold text-orange">
                Що ви щойно дозволили
              </h3>
            </div>
            <p className="fs-body text-secondary">
              Будь-яка сторінка в інтернеті може викликати ваш API з браузера
              користувача й прочитати відповідь. Якщо API віддає щось приватне —
              ви це щойно відкрили
            </p>
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-3">
            <div className="flex items-center gap-sm mb-base">
              <Unlock className="icon-lg text-purple" />
              <h3 className="font-heading fs-section font-bold text-purple">
                І воно все одно не спрацює
              </h3>
            </div>
            <p className="fs-body text-secondary">
              Зірочка несумісна з{' '}
              <span className="font-mono">Allow-Credentials: true</span>. Щойно
              знадобляться куки або токен — браузер відхилить відповідь, і ви
              повернетесь до цієї ж проблеми
            </p>
          </div>
        </div>

        <div className="numbered-list mb-base">
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">1</div>
            <p className="numbered-list__text">
              Перелічити конкретні origin, з яких дозволено звертатися — окремо для
              розробки, окремо для робочого середовища
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">2</div>
            <p className="numbered-list__text">
              Дозволити лише ті методи й заголовки, які справді потрібні
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">3</div>
            <p className="numbered-list__text">
              Або прибрати проблему взагалі: віддавати фронтенд і API з одного origin
              через точку входу — тоді CORS не виникає
            </p>
          </div>
        </div>

        <HighlightBox color="green" icon={CheckCircle2}>
          Третій варіант найчистіший: <span className="font-mono">/api</span> веде на
          бекенд, решта — на фронтенд, origin один. Саме так зазвичай і роблять у
          робочих системах, а CORS лишається темою етапу розробки.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 27. NARROWING DOWN ----------

function NarrowingAlgorithmSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Stethoscope}
          title="Алгоритм звуження"
          subtitle="Follow the Chain, Do Not Guess"
        />

        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Запит проходить кілька шарів — ім'я, з'єднання, TLS, HTTP. Перевіряйте їх по черзі знизу вгору, а не там, куди тягне інтуїція: кожен крок або відсікає половину варіантів, або називає винного.
          </p>
        </div>

        <div className="numbered-list">
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Ім'я перетворюється на адресу?</p>
              <p className="fs-body-sm text-muted mt-sm font-mono">dig +short host</p>
              <p className="fs-body-sm text-muted">
                Порожньо або не та адреса — далі не йдемо, проблема тут
              </p>
            </div>
          </div>

          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">2</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Порт приймає з'єднання?</p>
              <p className="fs-body-sm text-muted mt-sm font-mono">nc -zv host 443</p>
              <p className="fs-body-sm text-muted">
                Відмова — процес не працює. Тиша до тайм-ауту — блокує мережевий екран
              </p>
            </div>
          </div>

          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">3</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Сертифікат приймається?</p>
              <p className="fs-body-sm text-muted mt-sm font-mono">curl -v -o /dev/null https://host</p>
              <p className="fs-body-sm text-muted">
                Перевірити з <span className="font-mono">-k</span>: якщо так запрацювало —
                справа саме в сертифікаті, далі{' '}
  <span className="font-mono">openssl s_client</span>
              </p>
            </div>
          </div>

          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">4</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Що каже HTTP?</p>
              <p className="fs-body-sm text-muted mt-sm font-mono">curl -v https://host/health</p>
              <p className="fs-body-sm text-muted">
                4xx — питання до запиту. 5xx — до сервісу або точки входу перед ним
              </p>
            </div>
          </div>

          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">5</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Хто саме відповів?</p>
              <p className="fs-body-sm text-muted mt-sm">
                Знайти цей запит у журналах сервісу
              </p>
              <p className="fs-body-sm text-muted">
                Запиту немає — відповіла точка входу, до сервісу він не дійшов
              </p>
            </div>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          І окремо: <strong>перевірте з іншої мережі</strong> або з телефона по
          мобільному інтернету. Це відсікає цілий клас проблем, які існують тільки
          у вас — кеш, корпоративний проксі, локальні правила.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 28. TOOLS ----------

function DiagnosticToolsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Wrench}
          title="Інструменти діагностики"
          subtitle="A Small Toolbox Covers Almost Everything"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="flex flex-col gap-sm fade-in-delay-1">
            <DefBadge term="dig" description="Ім'я → адреса. Показує TTL і дозволяє питати конкретний резолвер" color="blue" />
            <DefBadge term="nc -zv" description="Чи приймає порт з'єднання. Відрізняє відмову від тиші" color="purple" nowrap />
            <DefBadge term="curl -v" description="Весь обмін: з'єднання, сертифікат, заголовки, відповідь" color="green" nowrap />
            <DefBadge term="ss -tlnp" description="Хто слухає порти на цьому сервері" color="cyan" nowrap />
          </div>

          <div className="flex flex-col gap-sm fade-in-delay-2">
            <DefBadge term="openssl s_client" description="Сертифікат, строк дії, повнота ланцюжка" color="orange" nowrap />
            <DefBadge term="traceroute" description="Шлях до хоста. Потрібен рідко, але коли потрібен — незамінний" color="yellow" />
            <DefBadge term="Вкладка Network" description="Єдине місце, де видно preflight і причину помилки CORS" color="red" nowrap />
            <DefBadge term="Журнали точки входу" description="Показують запити, яких немає в журналах сервісу" color="purple" nowrap />
          </div>
        </div>

        <div className="outlined-card outlined-card--blue mb-base fade-in-delay-3">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-blue">Що з чим плутають:</strong>{' '}
            <span className="font-mono">ping</span> перевіряє хост, а не сервіс —
            користі майже нема. <span className="font-mono">telnet</span> досі
            зустрічається в інструкціях, але <span className="font-mono">nc</span>{' '}
            зручніший і є майже скрізь. <span className="font-mono">wget</span> добрий
            для завантаження, а для діагностики беріть{' '}
            <span className="font-mono">curl</span> — у нього кращий детальний вивід.
          </p>
        </div>

        <HighlightBox color="cyan">
          Із цього набору 80% випадків закриваються трьома командами:{' '}
          <span className="font-mono">dig</span>,{' '}
          <span className="font-mono">nc -zv</span> і{' '}
          <span className="font-mono">curl -v</span>. Решта — для рідших ситуацій.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 29. PROVING IT IS NOT YOUR CODE ----------

function ProveItSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={MessageSquare}
          title="Довести, що справа не в коді"
          subtitle="Reporting an Incident So People Act"
        />

        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Половина роботи інженера — не знайти причину, а{' '}
          <strong>переконливо показати її іншим</strong>. «У мене не працює» запускає
          суперечку. Факти запускають виправлення.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--red fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <ThumbsDown className="icon-lg text-red" />
              <h3 className="font-heading fs-section font-bold text-red">
                Так не працює
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">«Сайт лежить»</p>
              <p className="fs-body text-secondary">«API не відповідає»</p>
              <p className="fs-body text-secondary">«Здається, щось із мережею»</p>
              <p className="fs-body text-secondary">«У мене нічого не працює»</p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Отримувач має почати діагностику з нуля — і почне не з того кінця
            </p>
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-3">
            <div className="flex items-center gap-sm mb-base">
              <Flag className="icon-lg text-green" />
              <h3 className="font-heading fs-section font-bold text-green">
                Так працює
              </h3>
            </div>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Точна адреса, за якою зверталися</p>
              <p className="fs-body text-secondary">Код відповіді й час до неї</p>
              <p className="fs-body text-secondary">Команда, якою це відтворюється</p>
              <p className="fs-body text-secondary">Коли почалося і з яких мереж видно</p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Отримувач одразу знає, де шукати — або відтворює однією командою
            </p>
          </div>
        </div>

        <CodeBlock title="Повідомлення, на яке реагують" color="green">
          {`GET https://api.example.com/v1/items → 504, стабільно через 30 с
Відтворюється: curl -v -o /dev/null -w '%{http_code} %{time_total}\\n' ...

- почалося близько 14:20, до того 200 за 120 мс
- видно з трьох різних мереж, не локальне
- 504 через рівно 30 с → тайм-аут точки входу,
  сервіс живий, але не встигає відповісти`}
        </CodeBlock>

        <HighlightBox color="purple">
          Зверніть увагу на останній рядок: там не тільки симптом, а й{' '}
          <strong>висновок із нього</strong>. Саме він переводить розмову з «хто
          винен» на «що дивимося далі».
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 30. COMMON MISTAKES ----------

function CommonMistakesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={AlertTriangle}
          title="Типові помилки"
          subtitle="What Costs the Most Time"
        />

        <div className="slide-grid slide-grid--2col">
          <div className="flex flex-col gap-base">
            <div className="outlined-card outlined-card--red fade-in-delay-1">
              <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
                Діагностувати з кінця
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Година налагодження застосунку, тоді як ім'я резолвиться на стару
                адресу. Перевіряйте ланцюжок від початку
              </p>
            </div>

            <div className="outlined-card outlined-card--red fade-in-delay-2">
              <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
                Вважати ping доказом
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Ні успіх, ні невдача пінгу нічого не кажуть про сервіс. Перевіряйте
                порт і відповідь
              </p>
            </div>

            <div className="outlined-card outlined-card--red fade-in-delay-3">
              <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
                Шукати 502 у журналах сервісу
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Цього запиту там може не бути взагалі — відповіла точка входу
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-base">
            <div className="outlined-card outlined-card--orange fade-in-delay-2">
              <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                Знижувати TTL після зміни
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Пізно: стара відповідь уже розійшлася по кешах. Знижують заздалегідь
              </p>
            </div>

            <div className="outlined-card outlined-card--orange fade-in-delay-3">
              <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                Лікувати CORS зірочкою
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Помилка зникає, захист теж. І з куками все одно не запрацює
              </p>
            </div>

            <div className="outlined-card outlined-card--orange fade-in-delay-4">
              <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                Перевіряти лише зі свого ноутбука
              </h3>
              <p className="fs-body text-secondary" style={{ margin: 0 }}>
                Кеш, корпоративна мережа й локальні правила створюють проблеми,
                яких більше ні в кого немає
              </p>
            </div>
          </div>
        </div>

        <HighlightBox color="blue">
          Спільне в усіх шести: висновок зроблено раніше, ніж зібрано факти.
          Ланцюжок і три команди рятують від кожної з них.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 31. SUMMARY ----------

function SummarySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={BookOpen} title="Підсумки" subtitle="Key Takeaways" />

        <div className="summary-list">
          <div className="summary-list__item fade-in-delay-1">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Запит іде ланцюжком:</strong> ім'я → з'єднання → захист → HTTP.
              Діагностика йде тим самим порядком, з початку
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-2">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>refused проти timeout:</strong> хтось відмовив проти ніхто не
              відповів. Це різні причини й різні дії
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-3">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Між клієнтом і сервісом є точка входу.</strong> Вона може
              відповісти сама — 502 і 504 приходять саме від неї
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-4">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Перша цифра коду каже, чия проблема:</strong> 4xx — до автора
              запиту, 5xx — до власника сервісу
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-5">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>Сертифікат — це метрика,</strong> а не разова справа. Строк дії
              має бути під алертом
            </p>
          </div>

          <div className="summary-list__item fade-in-delay-5">
            <CheckCircle2 className="icon-md text-green" />
            <p className="summary-list__text">
              <strong>CORS живе в браузері.</strong> У журналах сервісу запит буде
              успішним — шукайте в заголовках відповіді
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--gradient-green-blue mt-xl fade-in-delay-5">
          <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
            Три команди на кожен день:{' '}
            <span className="font-mono">dig</span> ·{' '}
            <span className="font-mono">nc -zv</span> ·{' '}
            <span className="font-mono">curl -v</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 32. QUESTIONS ----------

function QuestionsSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
      <div className="questions-slide">
        <HelpCircle className="questions-slide__icon" />
        <h2 className="questions-slide__title">Питання?</h2>
        <p className="questions-slide__subtitle">
          Далі — лабораторна робота 3: монітор доступності, який розрізняє типи збою
        </p>

        <div className="questions-slide__links">
          <ExtLink href="https://developer.mozilla.org/en-US/docs/Web/HTTP" color="blue">
            MDN — HTTP
          </ExtLink>
          <ExtLink href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" color="purple">
            MDN — CORS
          </ExtLink>
          <ExtLink href="https://letsencrypt.org/docs/" color="green">
            Let's Encrypt — документація
          </ExtLink>
          <ExtLink href="https://everything.curl.dev/" color="orange">
            Everything curl
          </ExtLink>
        </div>
      </div>
    </div>
  );
}