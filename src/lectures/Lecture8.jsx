import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import SlideLink from '../components/SlideLink';
import {
  Database, Upload, KeyRound, Cpu, Search,
  Target, Workflow, Package, Lock, Code,
  AlertTriangle, ArrowLeftRight, CheckCircle2, XCircle,
  Layers, PlusCircle, Copy, MinusCircle, Clock,
  TrendingUp, RefreshCw, Network,
  Construction, ShieldCheck, Timer, Bell, History,
  Handshake, Filter, ZapOff,
  GitCommit, GitBranch, Gauge,
  Plug, BookOpen, HelpCircle,
  HardDrive,
  Zap,
  Cloud,
  Server,
  RotateCcw,
  Lightbulb,
} from 'lucide-react';

// ============================================
// SLIDES ARRAY
// ============================================

const slides = [
  { id: 1, title: 'Титульний слайд', component: TitleSlide },
  { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
  { id: 3, title: 'Чому стан найскладніший', component: WhyStateIsHardSlide },
  { id: 4, title: 'Де ще ховається стан', component: HiddenStateSlide },
  { id: 5, title: 'Межа відповідальності', component: ResponsibilitySlide },
  { id: 6, title: 'Міграції: що це і хто їх пише', component: MigrationsBasicsSlide },
  { id: 7, title: 'Міграція в конвеєрі', component: MigrationsInPipelineSlide },
  { id: 8, title: 'Зворотна сумісність схеми', component: BackwardCompatibleSlide },
  { id: 9, title: 'Зміна схеми без простою', component: ExpandContractSlide },
  { id: 10, title: 'Блокування при зміні схеми', component: SchemaLocksSlide, selfStudy: true },
  { id: 11, title: 'Відкат застосунку зі старою схемою', component: RollbackWithSchemaSlide },
  { id: 12, title: 'Пул з\'єднань', component: ConnectionPoolSlide },
  { id: 13, title: 'Репліки × пул = вичерпана база', component: PoolMultiplicationSlide },
  { id: 14, title: 'Пулер з\'єднань', component: ConnectionPoolerSlide, selfStudy: true },
  { id: 15, title: 'Резервне копіювання', component: BackupSlide },
  { id: 16, title: 'Перевірка відновлення', component: RestoreTestSlide },
  { id: 17, title: 'RPO і RTO', component: RpoRtoSlide },
  { id: 18, title: 'Відновлення на момент часу', component: PointInTimeRecoverySlide, selfStudy: true },
  { id: 19, title: 'Кеш як інфраструктурний компонент', component: CacheComponentSlide },
  { id: 20, title: 'Політика витіснення', component: EvictionSlide, selfStudy: true },
  { id: 21, title: 'Частка влучань як індикатор', component: HitRateSlide },
  { id: 22, title: 'Коли кеш недоступний', component: CacheDownSlide },
  { id: 23, title: 'Керовані бази даних', component: ManagedDbSlide },
  { id: 24, title: 'Типові помилки', component: CommonMistakesSlide },
  { id: 25, title: 'Підсумки', component: SummarySlide },
  { id: 26, title: 'Питання?', component: QuestionsSlide },
];

export default function Lecture8() {
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
        <Database />
      </div>
      <h1 className="title-slide__title">
        Дані та стан в експлуатації
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 8 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Data and State in Operations
      </p>
      <div className="title-slide__badge">
        <p>🗄 Найскладніша частина будь-якої системи</p>
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

        <HighlightBox color="blue" icon={Server}>
          На лекції 7 ми розгортали застосунок без простою, бо його копії взаємозамінні:
          будь-яку можна зупинити й підняти нову. З базою так не вийде, бо дані не
          перезапускаються. Сьогодні про те, як експлуатувати частину системи, яку не
          можна просто замінити.
        </HighlightBox>

        <div className="slide-grid slide-grid--3col mt-xl">
          <InfoCard
            icon={Handshake}
            title="Межа відповідальності"
            subtitle="Ownership"
            description="Розуміти, що в роботі з даними вирішує розробник, що інфраструктура і де їм треба домовитися"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={GitCommit}
            title="Міграції"
            subtitle="Schema migrations"
            description="Вбудовувати зміну схеми в конвеєр так, щоб розгортання і відкат не ламали базу"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Plug}
            title="З'єднання"
            subtitle="Connection pool"
            description="Рахувати, скільки з'єднань отримає база від усіх реплік разом, до того як вона відмовить"
            color="cyan"
            delay={3}
          />
          <InfoCard
            icon={HardDrive}
            title="Резервні копії"
            subtitle="Backup & restore"
            description="Перевіряти відновлення регулярно й задавати допустимі втрати через RPO і RTO"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={Zap}
            title="Кеш"
            subtitle="Cache"
            description="Налаштовувати пам'ять і витіснення, стежити, яку частку запитів кеш обслуговує сам, і планувати роботу без нього"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={Cloud}
            title="Керовані бази"
            subtitle="Managed databases"
            description="Знати, що провайдер бере на себе, а що лишається вашою відповідальністю"
            color="pink"
            delay={6}
          />
        </div>
      </div>
    </div>
  );
}

// ---------- 3. WHY STATE IS HARD ----------

function WhyStateIsHardSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={AlertTriangle} title="Чому стан найскладніший" subtitle="Stateless vs Stateful" />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Застосунок без стану</h3>
            <p className="text-secondary mb-base">
              Усе, що йому потрібно, є в образі й конфігурації. Копія нічого не пам'ятає між запитами.
            </p>
            <DefBadge term="Заміна" description="зупинили, підняли нову, нічого не втрачено" color="green" />
            <DefBadge term="Масштабування" description="додати копію за секунди" color="green" />
            <DefBadge term="Відкат" description="запустити попередній образ" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Сховище стану</h3>
            <p className="text-secondary mb-base">
              Тримає те, чого більше ніде немає: база, файли користувачів, сесії. Кожна зміна в ньому лишається після перезапуску.
            </p>
            <DefBadge term="Заміна" description="спершу перенести дані" color="orange" />
            <DefBadge term="Масштабування" description="репліки треба синхронізувати" color="orange" />
            <DefBadge term="Відкат" description="видалені чи змінені дані назад не повертаються" color="orange" />
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Server}
            title="wishlist-api"
            subtitle="Без стану"
            description="Кілька однакових копій. Будь-яку можна вбити в будь-який момент"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Database}
            title="Postgres"
            subtitle="Джерело правди"
            description="Списки бажань користувачів. Втрачене тут не відновити з git"
            color="orange"
            delay={4}
          />
          <InfoCard
            icon={Zap}
            title="Redis"
            subtitle="Стан, який можна втратити"
            description="Якщо це лише кеш, після втрати його заповнять заново з бази. Ціна — навантаження на Postgres"
            color="purple"
            delay={5}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={RotateCcw}>
            Образ можна зібрати знову з git, і він буде таким самим. Дані — ні: якщо їх
            втрачено або зіпсовано, повернути їх можна лише з резервної копії.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Під час почергового оновлення v1 і v2 одночасно працюють з однією базою.
            Тому схема має підходити обом версіям — до цього повернемося в міграціях.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 4. HIDDEN STATE ----------

function HiddenStateSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Search} title="Де ще ховається стан" subtitle="Hidden State" />

        <p className="fs-lg text-secondary mb-xl">
          Застосунок без стану (фактор VI з дванадцяти) — це вимога, а не властивість за
          замовчуванням. Стан легко пронести в процес непомітно, і тоді копії перестають
          бути взаємозамінними.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-1">
            <h3 className="info-card__title mb-sm"><HardDrive size={18} /> Файли на диску контейнера</h3>
            <DefBadge term="Проблема" description="зникають при перезапуску, у кожної копії свої" color="orange" />
            <DefBadge term="Рішення" description="логи у stdout, на диск лише справді тимчасове" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm"><Upload size={18} /> Завантаження користувачів</h3>
            <DefBadge term="Проблема" description="файл лежить на копії A, запит прийшов на копію B" color="orange" />
            <DefBadge term="Рішення" description="об'єктне сховище (S3, R2), у базі лише ключ файлу" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-3">
            <h3 className="info-card__title mb-sm"><KeyRound size={18} /> Сесії в пам'яті процесу</h3>
            <DefBadge term="Проблема" description="користувач увійшов через копію A, копія B його не знає" color="orange" />
            <DefBadge term="Рішення" description="сесії в базі чи Redis, або токен на боці клієнта" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-4">
            <h3 className="info-card__title mb-sm"><Cpu size={18} /> Кеш у пам'яті процесу</h3>
            <DefBadge term="Проблема" description="після оновлення даних копії віддають різне" color="orange" />
            <DefBadge term="Рішення" description="спільний кеш або короткий час життя записів" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Lightbulb}>
            Два прості тести. Перезапустіть копію: щось зникло? Запустіть дві копії: вони
            відповідають по-різному? Якщо так, у застосунку є прихований стан.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Стан варто виносити туди, де вже є резервні копії. Сесії в Postgres — ще одна
            таблиця з тими самими бекапами. Сесії в Redis — і Redis уже не кеш, який можна
            втратити: перезапуститься порожнім, і всі користувачі вийдуть із системи.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 5. RESPONSIBILITY ----------

function ResponsibilitySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Handshake} title="Межа відповідальності" subtitle="Who owns what" />

        <p className="fs-lg text-secondary mb-xl">
          З даними працюють дві сторони, і кожна бачить лише свою половину картини.
        </p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Розробник</h3>
            <p className="text-secondary mb-base">Знає, що застосунок робить з даними.</p>
            <DefBadge term="Міграції" description="пише їх і робить зворотно сумісними" color="blue" />
            <DefBadge term="Пул" description="як довго код тримає з'єднання і чи завжди його повертає" color="blue" />
            <DefBadge term="Кеш" description="що кешувати, на скільки і що робити без нього" color="blue" />
            <DefBadge term="Дані" description="знає, які з них критичні" color="blue" />
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Інфраструктура</h3>
            <p className="text-secondary mb-base">Знає, де й на чому ці дані живуть.</p>
            <DefBadge term="Міграції" description="коли й з якими правами виконуються в конвеєрі" color="purple" />
            <DefBadge term="Пул" description="ліміт бази й скільки з'єднань дати кожній копії" color="purple" />
            <DefBadge term="Кеш" description="пам'ять, витіснення, персистентність" color="purple" />
            <DefBadge term="Дані" description="резервні копії й перевірка відновлення" color="purple" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-3">
            <h3 className="info-card__title mb-sm">Треба домовитися</h3>
            <p className="text-secondary mb-base">Жодна сторона окремо цього не вирішить.</p>
            <DefBadge term="Порядок" description="міграція до розгортання чи після" color="orange" />
            <DefBadge term="З'єднання" description="скільки потрібно застосунку і скільки може дати база" color="orange" />
            <DefBadge term="Без кешу" description="чи витримає база весь трафік сама" color="orange" />
            <DefBadge term="Втрати" description="скільки даних і часу бізнес готовий втратити" color="orange" />
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Найнеприємніші збої з даними — не помилка однієї сторони. Кожен налаштував своє
          правильно, але разом це не працює. Далі розберемо кожен такий стик окремо.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 6. MIGRATIONS BASICS ----------

function MigrationsBasicsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={GitCommit} title="Міграції: що це і хто їх пише" subtitle="Schema Migrations" />

        <p className="fs-lg text-secondary mb-xl">
          Міграція — це скрипт, який переводить схему бази з однієї версії в наступну.
          Він лежить у git поруч із кодом і змінюється разом із ним.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--purple fade-in-delay-1">
            <h3 className="info-card__title mb-sm">З чого складається</h3>
            <DefBadge term="Версія" description="номер, що задає порядок застосування" color="purple" />
            <DefBadge term="Вперед" description="як перейти на нову версію схеми" color="purple" />
            <DefBadge term="Назад" description="як повернутися, якщо інструмент це підтримує" color="purple" />
            <DefBadge term="Таблиця версій" description="база сама пам'ятає, що вже застосовано" color="purple" />
          </div>

          <CodeBlock title="migrations/V2__add_is_public.sql">{`
ALTER TABLE wishlists
  ADD COLUMN is_public boolean NOT NULL DEFAULT false;
`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Code}
            title="Розробник пише"
            subtitle="Разом зі зміною коду"
            description="Модель і міграція йдуть в одному пул-реквесті. Згенеровану автоматично міграцію завжди перечитують"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={Server}
            title="Інфраструктура запускає"
            subtitle="Один раз на розгортання"
            description="Окремим кроком і з правами, яких у самого застосунку немає"
            color="purple"
            delay={3}
          />
          <InfoCard
            icon={Database}
            title="База пам'ятає"
            subtitle="Таблиця версій"
            description="Інструмент порівнює її з міграціями в коді й застосовує лише ті, яких бракує"
            color="cyan"
            delay={4}
          />
        </div>

        <div className="outlined-card outlined-card--blue fade-in-delay-5 mb-xl">
          <h3 className="info-card__title mb-sm">Інструменти</h3>
          <DefBadge term="SQL-файли" description="Flyway, Liquibase, golang-migrate — не залежать від мови" color="blue" />
          <DefBadge term="Поруч з ORM" description="Alembic (SQLAlchemy), Django, Prisma Migrate, EF Core" color="blue" />
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Автоматичне створення схеми при старті, яке пропонують багато ORM, — не міграції.
          Воно не має історії версій і не вміє перетворювати дані: у кращому разі не змінить
          існуючу таблицю, у гіршому видалить колонку разом із даними.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 7. MIGRATIONS IN PIPELINE ----------

function MigrationsInPipelineSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Workflow} title="Міграція в конвеєрі" subtitle="Where and When to Migrate" />

        <p className="fs-lg text-secondary mb-xl">
          Де й коли виконувати міграцію, вирішує інфраструктура. І від цього рішення
          залежить, що побачать користувачі під час розгортання.
        </p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-1">
            <h3 className="info-card__title mb-sm"><Server size={18} /> При старті застосунку</h3>
            <p className="text-secondary mb-base">
              <strong>Найпростіше.</strong> Мігрувати намагається кожна копія під час запуску.
            </p>
            <DefBadge term="Недолік" description="без блокування це гонка, а якщо міграція впала, не стартує жодна копія" color="orange" />
          </div>

          <div className="outlined-card outlined-card--blue fade-in-delay-2">
            <h3 className="info-card__title mb-sm"><Workflow size={18} /> Крок конвеєра</h3>
            <p className="text-secondary mb-base">
              Виконується один раз перед розгортанням. Якщо міграція впала, розгортання
              не почнеться.
            </p>
            <DefBadge term="Недолік" description="конвеєр мусить знати пароль від бази й мати до неї мережевий доступ" color="orange" />
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-3">
            <h3 className="info-card__title mb-sm"><Package size={18} /> Окреме завдання</h3>
            <p className="text-secondary mb-base">
              <strong>Рекомендовано.</strong> Той самий образ, інша команда: pre-deploy крок у PaaS, Job
              у Kubernetes. Доступ до бази має платформа, а не конвеєр.
            </p>
            <DefBadge term="Недолік" description="потрібна підтримка платформи, а розгортання має дочекатися завершення завдання" color="orange" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="порядок розгортання">{`
1. build    one image: new code + its migrations
2. migrate  run the image from step 1 with the migration command
3. deploy   rolling update; v1 and v2 run side by side,
            both already on the new schema
`}</CodeBlock>

          <div className="outlined-card outlined-card--purple fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Що вирішити заздалегідь</h3>
            <DefBadge term="Права" description="міграції потрібен ALTER, застосунку — лише читання й запис" color="purple" />
            <DefBadge term="Блокування" description="деякі ALTER блокують таблицю, поки виконуються" color="purple" />
            <DefBadge term="Збій посередині" description="Postgres відкотить DDL у транзакції, MySQL — ні" color="purple" />
          </div>
        </div>

        <HighlightBox color="blue" icon={Lock}>
          Міграція йде до розгортання. Тож поки нова версія розкочується, стара вже працює
          з новою схемою, і нова схема має підходити їй так само, як новій.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 8. BACKWARD COMPATIBLE SCHEMA ----------

function BackwardCompatibleSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={ArrowLeftRight} title="Зворотна сумісність схеми" subtitle="Backward-Compatible Changes" />

        <p className="fs-lg text-secondary mb-xl">
          Міграція вже виконалась, а почергове оновлення ще йде. Якийсь час стара й нова
          версії застосунку працюють з однією, вже новою схемою.
        </p>

        <CodeBlock title="почергове оновлення після міграції">{`
schema   v2 ──────────────────────────────────────────►
app      v1 v1 v1  →  v1 v1 v2  →  v1 v2 v2  →  v2 v2 v2
                      └── v1 and v2 both work with schema v2 ──┘
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col mt-xl mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm"><CheckCircle2 size={18} /> Стара версія не помітить</h3>
            <DefBadge term="Нова таблиця" description="старий код про неї не знає" color="green" />
            <DefBadge term="Нова колонка" description="яка допускає NULL або має DEFAULT" color="green" />
            <DefBadge term="Новий індекс" description="у Postgres — CREATE INDEX CONCURRENTLY" color="green" />
            <DefBadge term="Ширший тип" description="наприклад, довший varchar" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm"><XCircle size={18} /> Стара версія зламається</h3>
            <DefBadge term="Видалити колонку" description="старий код досі її читає" color="orange" />
            <DefBadge term="Перейменувати" description="старий код шукає стару назву" color="orange" />
            <DefBadge term="NOT NULL без DEFAULT" description="старий код не передає поле, вставка падає" color="orange" />
            <DefBadge term="Змінити зміст" description="те саме поле, але значення означають інше" color="orange" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            «Ми цю колонку вже не використовуємо» — не аргумент. Поки вона є в моделі старої
            версії, ORM згадує її в запитах, і вони впадуть, навіть якщо в логіці колонка
            давно не потрібна.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Правило: схема N+1 мусить працювати з кодом версії N. Небезпечні зміни не
            заборонені — їх розбивають на кілька безпечних кроків.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 9. EXPAND / CONTRACT ----------

function ExpandContractSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Layers} title="Зміна схеми без простою" subtitle="Expand / Contract" />

        <p className="fs-lg text-secondary mb-xl">
          Перейменувати <code>name</code> на <code>title</code> одним кроком не можна:
          стара версія одразу зламається. Тому одну небезпечну зміну розбивають на кілька
          безпечних, і кожну розгортають окремо.
        </p>

        <CodeBlock title="перейменування колонки в п'ять кроків">{`
step                 schema                     app reads   app writes
1  expand            + title (nullable)         name        name + title
2  backfill          title := name, old rows    name        name + title
3  switch reads      —                          title       name + title
4  stop old writes   —                          title       title
5  contract          − name, title NOT NULL     title       title
`}</CodeBlock>

        <div className="slide-grid slide-grid--3col mt-xl mb-xl">
          <InfoCard
            icon={PlusCircle}
            title="Розширити"
            subtitle="Expand"
            description="Додати нове поруч зі старим. Застосунок пише в обидва місця, а читає ще зі старого"
            color="green"
            delay={1}
          />
          <InfoCard
            icon={Copy}
            title="Перенести"
            subtitle="Migrate"
            description="Заповнити нове поле для старих рядків і перемкнути читання на нього"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={MinusCircle}
            title="Звузити"
            subtitle="Contract"
            description="Коли старе поле ніхто не читає й не пише, видалити його окремою міграцією"
            color="purple"
            delay={3}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Lightbulb}>
            Будь-які два сусідні кроки сумісні між собою. Тож у будь-який момент можна
            відкотити застосунок на одну версію назад, і він працюватиме.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Ціна — кілька розгортань замість одного, інколи розтягнутих на тижні. А backfill
            великої таблиці роблять порціями: один UPDATE на мільйони рядків надовго тримає
            блокування.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 10. SCHEMA LOCKS (self-study) ----------

function SchemaLocksSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Lock} title="Блокування при зміні схеми" subtitle="Schema Changes and Locks in Postgres" />

        <p className="fs-lg text-secondary mb-xl">
          Зворотно сумісна міграція ще не гарантує відсутності простою. Поки вона
          виконується або чекає своєї черги, таблиця може бути заблокована для всіх
          інших запитів.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Змінює лише опис таблиці — миттєво</h3>
            <DefBadge term="ADD COLUMN" description="без DEFAULT або з константним DEFAULT (Postgres 11+)" color="green" />
            <DefBadge term="DROP COLUMN" description="колонку лише позначено видаленою" color="green" />
            <DefBadge term="RENAME" description="миттєво, але ламає стару версію (слайд 8)" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Переписує або сканує таблицю</h3>
            <DefBadge term="CREATE INDEX" description="блокує запис на весь час побудови → CONCURRENTLY (нижче)" color="orange" />
            <DefBadge term="ALTER COLUMN TYPE" description="більшість змін переписує таблицю → нова колонка й expand/contract" color="orange" />
            <DefBadge term="SET NOT NULL" description="сканує всі рядки → спершу CHECK … NOT VALID, потім VALIDATE" color="orange" />
            <DefBadge term="ADD FOREIGN KEY" description="перевіряє всі рядки → NOT VALID, потім VALIDATE CONSTRAINT" color="orange" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="черга блокувань">{`
report     SELECT ...        runs for 10 minutes
migration  ALTER TABLE ...   waits for the report
app        SELECT ...        waits behind the ALTER
app        SELECT ...        waits behind the ALTER
           pool exhausted, users get errors
`}</CodeBlock>

          <div className="outlined-card outlined-card--orange fade-in-delay-3">
            <h3 className="info-card__title mb-sm">Миттєва міграція, яка зупиняє таблицю</h3>
            <p className="text-secondary mb-base">
              Будь-який ALTER TABLE бере найсильніше блокування: несумісне навіть зі
              звичайним SELECT. Щоб його отримати, міграція чекає, поки завершаться всі
              запити, які вже працюють з таблицею, наприклад довгий звіт.
            </p>
            <p className="text-secondary" style={{ margin: 0 }}>
              А всі нові запити застосунку стають у чергу вже за міграцією. Тож таблиця
              недоступна весь час, поки йде звіт, хоча сама міграція триває мілісекунди.
            </p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="рішення: обмежити очікування">{`
SET lock_timeout = '5s';

ALTER TABLE wishlists
  ADD COLUMN is_public boolean NOT NULL DEFAULT false;
`}</CodeBlock>

          <div className="outlined-card outlined-card--green fade-in-delay-4">
            <h3 className="info-card__title mb-sm">lock_timeout</h3>
            <p className="text-secondary mb-base">
              Якщо за 5 секунд блокування не отримано, міграція відмовляється з помилкою й
              звільняє чергу. Застосунок працює далі, а міграцію просто запускають ще раз
              пізніше. Невдала міграція краща за простій.
            </p>
            <DefBadge term="Лише очікування" description="час виконання обмежує інший параметр, statement_timeout" color="green" />
            <DefBadge term="Діє на сесію" description="через пулер у режимі transaction загубиться (слайд 14)" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <CodeBlock title="індекс без блокування запису">{`
CREATE INDEX CONCURRENTLY wishlists_title_idx
  ON wishlists (title);

-- if it failed halfway: remove and try again
DROP INDEX CONCURRENTLY wishlists_title_idx;
`}</CodeBlock>

          <div className="outlined-card outlined-card--blue fade-in-delay-5">
            <h3 className="info-card__title mb-sm">CREATE INDEX CONCURRENTLY</h3>
            <p className="text-secondary mb-base">
              Звичайний CREATE INDEX дозволяє читати таблицю, але блокує всі записи, поки
              індекс будується, а на великій таблиці це хвилини. З CONCURRENTLY запис
              теж працює, але є своя ціна.
            </p>
            <DefBadge term="Повільніше" description="таблиця проходиться двічі" color="blue" />
            <DefBadge term="Не в транзакції" description="інструменту міграцій треба сказати не загортати цей крок" color="blue" />
            <DefBadge term="Невдача" description="лишає непрацюючий індекс INVALID — його видаляють і будують знову" color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 11. ROLLBACK WITH SCHEMA ----------

function RollbackWithSchemaSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={RotateCcw} title="Відкат застосунку зі старою схемою" subtitle="Rollback Without Downgrade" />

        <p className="fs-lg text-secondary mb-xl">
          Звичайний відкат — розгорнути попередній образ. Схему він не чіпає: стара версія
          застосунку запрацює з новою схемою. Якщо міграція була зворотно сумісною, цього
          достатньо.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm"><CheckCircle2 size={18} /> Відкотити застосунок</h3>
            <DefBadge term="Швидко" description="той самий механізм, що й звичайне розгортання" color="green" />
            <DefBadge term="Безпечно" description="дані в новій колонці лишаються на місці" color="green" />
            <DefBadge
              term="Умова"
              description={<>схема сумісна з попередньою версією (<SlideLink to={8} />)</>}
              color="green"
            />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm"><XCircle size={18} /> Відкотити схему</h3>
            <DefBadge term="Втрата даних" description="downgrade для ADD COLUMN — це DROP COLUMN" color="orange" />
            <DefBadge term="Не завжди можливо" description="видалену колонку downgrade не поверне" color="orange" />
            <DefBadge term="Вручну" description="рідкісна операція, а не частина конвеєра" color="orange" />
          </div>
        </div>

        <CodeBlock title="що буде з is_public">{`
10:00  migrate   + is_public              schema v2
10:05  deploy    app v2                   users mark wishlists as public
11:30  bug       roll back app → v1       v1 ignores is_public, keeps working

  ✗  then downgrade                       DROP is_public: user choices are gone
  ✓  keep schema v2, ship fix as v2.1     user choices are still there
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col mt-xl">
          <HighlightBox color="blue" icon={Lightbulb}>
            Застосунок відкочують, а схему — ні: помилку в міграції виправляє нова міграція,
            а не downgrade. Відновлення з резервної копії — крайній захід, якщо міграція вже
            зіпсувала дані.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Крок «звузити» з expand/contract виконують лише тоді, коли відкат на версію, якій
            потрібне старе поле, вже точно не знадобиться.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 12. CONNECTION POOL ----------

function ConnectionPoolSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Plug} title="Пул з'єднань" subtitle="Connection Pool" />

        <p className="fs-lg text-secondary mb-xl">
          Відкрити з'єднання з Postgres дорого: TCP, TLS, автентифікація, а сервер на
          кожне з'єднання запускає окремий процес. Тому застосунок відкриває кілька
          з'єднань наперед і використовує їх повторно.
        </p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Plug}
            title="Позичити"
            subtitle="Acquire"
            description="Запит бере вільне з'єднання з пулу, а не відкриває нове"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={RotateCcw}
            title="Повернути"
            subtitle="Release"
            description="Після запиту з'єднання не закривається, а повертається в пул для наступного"
            color="green"
            delay={2}
          />
          <InfoCard
            icon={Clock}
            title="Чекати"
            subtitle="Pool exhausted"
            description="Якщо вільних немає, запит чекає. Не дочекався — помилка, хоча база при цьому може бути майже без навантаження"
            color="orange"
            delay={3}
          />
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--purple fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Що налаштовують</h3>
            <p className="text-secondary mb-base">
              У Java це HikariCP, у Node.js — пул у драйвері pg: назви різні, питання ті самі.
            </p>
            <DefBadge term="Розмір" description="скільки з'єднань тримати відкритими" color="purple" />
            <DefBadge term="Межа" description="скільки можна додати під навантаженням" color="purple" />
            <DefBadge term="Очікування" description="скільки чекати вільного, перш ніж здатися" color="purple" />
            <DefBadge term="Перевірка" description="чи живе з'єднання, перш ніж його видати" color="purple" />
          </div>

          <CodeBlock title="SQLAlchemy, для прикладу">{`
engine = create_engine(
    DATABASE_URL,
    pool_size=5,         # kept open
    max_overflow=5,      # extra under load: up to 10 total
    pool_timeout=10,     # seconds to wait for a free one
    pool_pre_ping=True,  # idle connections get dropped by
    pool_recycle=1800,   # networks and managed databases
)
`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={Code}>
            Пул вичерпується не лише навантаженням. З'єднання, яке не повернули після
            помилки, або транзакція, що чекає на відповідь стороннього сервісу, займають
            місце так само, як справжній запит. Це питання коду, а не налаштувань.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Більший пул — не швидша база. У бази обмежена кількість ядер, і сотні
            одночасних запитів лише заважають один одному. Зазвичай вистачає кількох
            з'єднань на ядро бази.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 13. POOL MULTIPLICATION ----------

function PoolMultiplicationSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Database} title="Репліки × пул = вичерпана база" subtitle="Connection Math" />

        <p className="fs-lg text-secondary mb-xl">
          Пул налаштовують в одному процесі, а база бачить суму всіх пулів. Розробник
          думає про 10 з'єднань, база отримує в рази більше.
        </p>

        <CodeBlock title="скільки з'єднань насправді">{`
per process           pool_size 5 + max_overflow 5    =  10
per container         × 4 uvicorn workers             =  40
per service           × 3 replicas                    = 120
during rolling update + extra replicas, e.g. 1        = 160

Postgres default   max_connections                  = 100
`}</CodeBlock>

        <div className="slide-grid slide-grid--3col mt-xl mb-xl">
          <InfoCard
            icon={Cpu}
            title="Воркери"
            subtitle="Processes"
            description="Пул не ділиться між процесами: кожен воркер у контейнері має власний"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={TrendingUp}
            title="Масштабування"
            subtitle="Autoscaling"
            description="Нові копії додають з'єднань саме тоді, коли база й так під навантаженням"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={RefreshCw}
            title="Розгортання"
            subtitle="Rolling update"
            description="Поки старі копії ще працюють, а нові вже стартували, з'єднань більше, ніж зазвичай"
            color="cyan"
            delay={3}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="outlined-card outlined-card--green fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Що з цим робити</h3>
            <DefBadge term="Бюджет" description="поділити ліміт бази між усіма копіями й сервісами" color="green" />
            <DefBadge term="Менший пул" description="на процес — часто достатньо 2–5" color="green" />
            <DefBadge term="Межа копій" description="обмежити максимум для автомасштабування" color="green" />
            <DefBadge
              term="Пулер"
              description={<>окремий проксі зі спільним пулом для всіх копій (<SlideLink to={14} />)</>}
              color="green"
            />
          </div>

          <HighlightBox color="orange" icon={AlertTriangle}>
            Коли ліміт вичерпано, Postgres відповідає{' '}
            <code>FATAL: sorry, too many clients already</code> усім підряд: іншим
            сервісам, міграції, навіть вам, коли ви прийдете розбиратися. Тому частину
            з'єднань завжди лишають у резерві.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 14. CONNECTION POOLER (self-study) ----------

function ConnectionPoolerSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Network} title="Пулер з'єднань" subtitle="PgBouncer and Friends" />

        <p className="fs-lg text-secondary mb-xl">
          Пулер — окремий проксі між застосунками й базою. Застосунки відкривають до нього
          скільки завгодно дешевих з'єднань, а він тримає до Postgres лише невеликий
          спільний пул.
        </p>

        <CodeBlock title="замість суми пулів — один спільний">{`
3 replicas × 4 workers × 10  =  120 client connections
            │
            ▼
        PgBouncer             reuses a few server connections
            │
            ▼
        Postgres              sees ~20 connections
`}</CodeBlock>

        <div className="slide-grid slide-grid--3col mt-xl mb-xl">
          <InfoCard
            icon={Plug}
            title="session"
            subtitle="На все з'єднання"
            description="Клієнт отримує серверне з'єднання, доки не від'єднається. Сумісно з усім, але майже не економить"
            color="orange"
            delay={1}
          />
          <InfoCard
            icon={RefreshCw}
            title="transaction"
            subtitle="На транзакцію"
            description="Серверне з'єднання видається лише на час транзакції. Найпоширеніший режим і найбільша економія"
            color="green"
            delay={2}
          />
          <InfoCard
            icon={Zap}
            title="statement"
            subtitle="На один запит"
            description="Транзакції з кількох запитів неможливі. Використовують рідко"
            color="blue"
            delay={3}
          />
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Що ламається в режимі transaction</h3>
            <p className="text-secondary mb-base">
              Усе, що прив'язане до сесії: наступна транзакція може потрапити на інше
              серверне з'єднання.
            </p>
            <DefBadge term="SET" description="налаштування сесії «губляться»" color="orange" />
            <DefBadge term="Тимчасові таблиці" description="зникають між транзакціями" color="orange" />
            <DefBadge term="LISTEN / NOTIFY" description="підписка живе на іншому з'єднанні" color="orange" />
            <DefBadge term="Підготовлені запити" description="лише з новими версіями PgBouncer і окремим налаштуванням" color="orange" />
          </div>

          <HighlightBox color="blue" icon={Cloud}>
            Керовані бази дають пулер із коробки: RDS Proxy в AWS, Supavisor у Supabase.
            У Neon це просто інший рядок підключення — хост із суфіксом{' '}
            <code>-pooler</code>, за яким працює PgBouncer у режимі transaction.
          </HighlightBox>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Міграції підключають до бази напряму, в обхід пулера. Їм потрібні саме ті
          речі, які пулер ламає: <code>SET lock_timeout</code>, блокування на рівні сесії,
          <code> CREATE INDEX CONCURRENTLY</code> поза транзакцією.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 15. BACKUP ----------

function BackupSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={HardDrive} title="Резервне копіювання" subtitle="Backups" />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--purple fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Від чого захищає</h3>
            <DefBadge term="Людська помилка" description="DELETE без WHERE, не та база" color="purple" />
            <DefBadge term="Невдала міграція" description="зіпсувала або видалила дані" color="purple" />
            <DefBadge term="Помилка в коді" description="тижнями тихо писала неправильні значення" color="purple" />
            <DefBadge term="Злам" description="хтось отримав доступ і видалив усе" color="purple" />
          </div>

          <HighlightBox color="orange" icon={AlertTriangle}>
            Репліка — не резервна копія. Вона захищає від відмови сервера, але миттєво
            повторює і DELETE, і невдалу міграцію. Від усього, що зліва, вона не рятує.
          </HighlightBox>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Code}
            title="Логічна копія"
            subtitle="pg_dump"
            description="Дамп даних і схеми. Переноситься між версіями Postgres, але на великій базі довго створюється й відновлюється"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={Database}
            title="Фізична копія"
            subtitle="Base backup + WAL"
            description={<>Копія файлів бази плюс журнал змін. Дозволяє відновитися на будь-який момент (<SlideLink to={18} />)</>}
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Layers}
            title="Знімок диска"
            subtitle="Snapshot"
            description="Швидкий знімок тому в хмарі. Зручно, але копія живе в тому самому обліковому записі"
            color="cyan"
            delay={4}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <CodeBlock title="найпростіша логічна копія">{`
# consistent snapshot, does not block the app
pg_dump --format=custom \\
  --file="wishlist-$(date +%F).dump" \\
  "$DATABASE_URL"
`}</CodeBlock>

          <div className="outlined-card outlined-card--green fade-in-delay-5">
            <h3 className="info-card__title mb-sm">Де й скільки зберігати</h3>
            <DefBadge term="3-2-1" description="три копії, два різні носії, одна — в іншому місці" color="green" />
            <DefBadge term="Окремий доступ" description="ключі від проду не дозволяють видалити копії" color="green" />
            <DefBadge term="Ротація" description="щоденні за тиждень, щотижневі за місяць…" color="green" />
            <DefBadge term="Шифрування" description="у копії ті самі дані, тож захищають її так само, як прод" color="green" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 16. RESTORE TEST ----------

function RestoreTestSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={ShieldCheck} title="Перевірка відновлення" subtitle="Restore Testing" />

        <p className="fs-lg text-secondary mb-xl">
          Мета — не мати копію, а вміти відновитися. Більшість проблем з резервними
          копіями з'ясовується саме в момент відновлення, тобто тоді, коли вже пізно.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Що з'ясовується лише при відновленні</h3>
            <DefBadge term="Порожній файл" description="завдання тихо падало кілька тижнів" color="orange" />
            <DefBadge term="Не та база" description="копіювали staging замість проду" color="orange" />
            <DefBadge term="Бракує ролей" description="pg_dump не зберігає користувачів і їхні права" color="orange" />
            <DefBadge term="Немає ключа" description="копія зашифрована, ключ загубили" color="orange" />
            <DefBadge term="Занадто довго" description="відновлення триває години, а не хвилини" color="orange" />
          </div>

          <CodeBlock title="перевірка в окремій базі">{`
createdb wishlist_restore_test

pg_restore --no-owner \\
  --dbname=wishlist_restore_test \\
  wishlist-2026-11-10.dump

# not just "it finished": is the data there and fresh?
psql wishlist_restore_test -c \\
  "SELECT count(*), max(created_at) FROM wishlists;"
`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Clock}
            title="Регулярно"
            subtitle="Автоматично"
            description="За розкладом, в окреме середовище, а не раз на рік вручну"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={Search}
            title="Перевірити дані"
            subtitle="Не лише код виходу"
            description="Кількість рядків і час останнього запису показують, скільки даних насправді втрачено б"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Timer}
            title="Заміряти час"
            subtitle="Фактичний час відновлення"
            description="Скільки триває відновлення від початку до працюючого застосунку"
            color="purple"
            delay={4}
          />
        </div>

        <HighlightBox color="orange" icon={Bell}>
          Сповіщення треба не лише про помилку, а й про відсутність успіху. Завдання, яке
          взагалі не запустилося, помилки не повідомить: тривогу має піднімати те, що
          свіжої копії немає вже понад добу.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 17. RPO AND RTO ----------

function RpoRtoSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Clock} title="RPO і RTO" subtitle="Recovery Point & Recovery Time Objectives" />

        <p className="fs-lg text-secondary mb-xl">
          Два числа, які перетворюють «треба робити бекапи» на конкретні вимоги: скільки
          даних можна втратити і скільки може тривати простій.
        </p>

        <CodeBlock title="два відрізки навколо збою">{`
last good copy        incident             service is back
      │◄──── RPO ────►│◄────── RTO ───────►│
        data written      users see an error
        here is lost
`}</CodeBlock>

        <div className="slide-grid slide-grid--2col mt-xl mb-xl">
          <InfoCard
            icon={Database}
            title="RPO"
            subtitle="Recovery Point Objective"
            description="Максимальна допустима втрата даних, виміряна в часі. Щоденна копія означає до 24 годин втрачених змін"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={Timer}
            title="RTO"
            subtitle="Recovery Time Objective"
            description="Максимальний допустимий простій: від збою до працюючого сервісу, разом із часом, щоб збій помітити"
            color="purple"
            delay={2}
          />
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-3">
            <h3 className="info-card__title mb-sm">Що зменшує RPO</h3>
            <DefBadge term="Частіші копії" description="щогодини замість щодня" color="blue" />
            <DefBadge term="Журнал змін" description={<>безперервне архівування WAL (<SlideLink to={18} />)</>} color="blue" />
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Що зменшує RTO</h3>
            <DefBadge term="Моніторинг" description="RTO рахують від збою, а не від моменту, коли його помітили" color="purple" />
            <DefBadge term="Відпрацьовані кроки" description="інструкція, яку вже виконували на перевірці" color="purple" />
            <DefBadge term="Готова заміна" description="резервний сервер, на який можна перемкнутися" color="purple" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Lightbulb}>
            Для wishlist RPO 24 години й RTO кілька годин — цілком прийнятно. Для платіжної
            системи RPO близький до нуля, а RTO — хвилини. Обидва варіанти правильні для
            своєї системи.
          </HighlightBox>
          <HighlightBox color="orange" icon={Handshake}>
            Цілі задає бізнес, а не інженери: скільки втрат він готовий прийняти. Інженери кажуть, що потрібно для цих цілей і скільки це коштує: частіші копії,
            архів WAL, резервний сервер.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 18. POINT-IN-TIME RECOVERY (self-study) ----------

function PointInTimeRecoverySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={History} title="Відновлення на момент часу" subtitle="Point-in-Time Recovery (PITR)" />

        <p className="fs-lg text-secondary mb-xl">
          Postgres записує кожну зміну спершу в журнал WAL (write-ahead log). Якщо цей
          журнал безперервно архівувати, базу можна відновити не лише на момент копії, а
          на будь-яку мить після неї.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="як це працює">{`
Sun 02:00     base backup (copy of data files)
Sun → Tue     WAL segments archived every few minutes
Tue 11:30     DELETE FROM wishlists;   -- the mistake

restore       base backup
              + replay WAL up to Tue 11:29
`}</CodeBlock>

          <CodeBlock title="postgresql.conf на сервері, що відновлюється">{`
# Postgres 12+, plus an empty recovery.signal
# file in the data directory
restore_command      = 'cp /archive/%f %p'
recovery_target_time = '2026-11-10 11:29:00+00'
`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Порівняно з pg_dump</h3>
            <DefBadge term="RPO" description="хвилини замість доби" color="green" />
            <DefBadge term="Точка" description="будь-яка мить у межах вікна зберігання" color="green" />
            <DefBadge term="Версія" description="лише та сама основна версія Postgres" color="orange" />
            <DefBadge term="Місце" description="обсяг WAL росте разом з кількістю записів" color="orange" />
          </div>

          <div className="outlined-card outlined-card--blue fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Хто це робить</h3>
            <DefBadge term="Самостійно" description="pgBackRest, WAL-G, Barman" color="blue" />
            <DefBadge term="Керовані бази" description="RDS, Cloud SQL, Neon — вбудовано, вікно залежить від тарифу" color="blue" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={Timer}>
            Чим далі потрібна мить від базової копії, тим більше WAL треба програти і тим
            довше відновлення. Тому базові копії все одно роблять регулярно: вони
            скорочують RTO.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            PITR не скасовує логічні копії. Дамп в іншому обліковому записі рятує, коли
            втрачено доступ до всього проєкту разом із його вбудованими бекапами.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 19. CACHE AS INFRASTRUCTURE ----------

function CacheComponentSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Zap} title="Кеш як інфраструктурний компонент" subtitle="Operating Redis" />

        <p className="fs-lg text-secondary mb-xl">
          Для розробника кеш — два виклики: get і set. Для інфраструктури це окремий
          сервіс, який тримає все в оперативній пам'яті, ходить мережею і може
          закінчитися, зависнути чи перезапуститися.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--purple fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Що треба вирішити</h3>
            <DefBadge term="Пам'ять" description="скільки дати і що буде, коли вона закінчиться" color="purple" />
            <DefBadge term="Персистентність" description="не потрібна, якщо в Redis лише копії даних з бази" color="purple" />
            <DefBadge term="Таймаути" description="короткі: кеш, повільніший за базу, не потрібен" color="purple" />
            <DefBadge term="Доступ" description="пароль, TLS, порт не відкритий в інтернет" color="purple" />
          </div>

          <CodeBlock title="redis.conf, коли Redis лише кеш">{`
maxmemory 256mb
maxmemory-policy allkeys-lru   # without it: noeviction

# no snapshots: after a restart the cache
# is simply empty and fills up again
save ""
appendonly no
`}</CodeBlock>
        </div>

        <div className="outlined-card outlined-card--blue fade-in-delay-2 mb-xl">
          <h3 className="info-card__title mb-sm">За чим стежити</h3>
          <p className="text-secondary mb-base">
            Redis сам рахує статистику про себе, її показує команда <code>INFO</code>
            {' '}(наприклад, <code>redis-cli INFO stats</code>). Три числа з неї кажуть, чи
            вистачає кешу пам'яті і чи він узагалі допомагає.
          </p>
          <DefBadge term="used_memory" description="скільки пам'яті зайнято відносно maxmemory" color="blue" />
          <DefBadge term="evicted_keys" description="скільки ключів видалено, бо закінчилась пам'ять" color="blue" />
          <DefBadge term="keyspace_hits / misses" description="скільки разів запитаний ключ знайшовся в кеші, а скільки — ні" color="blue" />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Без явного налаштування Redis не витісняє нічого. Коли пам'ять закінчиться, він
            почне відхиляти записи з помилкою OOM, і кожен set у застосунку впаде.
          </HighlightBox>
          <HighlightBox color="blue" icon={Handshake}>
            Час життя ключа (TTL) задає розробник, розмір пам'яті — інфраструктура. Якщо
            ключі живуть вічно, жодної пам'яті не вистачить, тож ці рішення приймають разом.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 20. EVICTION POLICY ----------

function EvictionSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Filter} title="Політика витіснення" subtitle="Eviction Policy" />

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={Clock}
            title="Закінчення терміну"
            subtitle="Expiration"
            description="Ключ зникає, бо минув його TTL. Це рішення розробника, і воно не залежить від пам'яті"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={MinusCircle}
            title="Витіснення"
            subtitle="Eviction"
            description="Ключ видаляється, бо пам'ять закінчилась. Що саме видалити, вирішує політика"
            color="orange"
            delay={2}
          />
        </div>

        <div className="outlined-card outlined-card--purple fade-in-delay-3 mb-xl">
          <h3 className="info-card__title mb-sm">Політики Redis</h3>
          <DefBadge term="noeviction" description="нічого не видаляти, відхиляти записи (за замовчуванням)" color="purple" />
          <DefBadge term="allkeys-lru" description="серед усіх ключів — той, до якого найдовше не зверталися (least recently used)" color="purple" />
          <DefBadge term="allkeys-lfu" description="серед усіх ключів — той, до якого зверталися найрідше (least frequently used)" color="purple" />
          <DefBadge term="volatile-*" description="те саме, але лише серед ключів, які мають TTL" color="purple" />
          <DefBadge term="*-random" description="випадковий ключ — рідко має сенс" color="purple" />
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Zap}
            title="Чистий кеш"
            subtitle="allkeys-lru"
            description="Типовий вибір: давно не потрібне викидається першим"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={TrendingUp}
            title="Стабільно популярні ключі"
            subtitle="allkeys-lfu"
            description="Коли одні й ті самі дані потрібні постійно, а разові запити не мають їх витісняти"
            color="cyan"
            delay={5}
          />
          <InfoCard
            icon={Database}
            title="Redis як сховище"
            subtitle="noeviction"
            description="Сесії, черги: краще помилка запису, ніж тиха втрата даних"
            color="purple"
            delay={6}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            <code>volatile-*</code> витісняє лише ключі з TTL. Якщо пам'ять зайняли ключі
            без TTL, видаляти нічого, і Redis поводиться як <code>noeviction</code>: записи
            падають.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Кеш і сесії в одному Redis вимагають компромісної політики, яка не підходить
            нікому. Простіше два окремі екземпляри, кожен зі своєю (слайд 4).
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 21. HIT RATE ----------

function HitRateSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Target} title="Частка влучань як індикатор" subtitle="Cache Hit Rate" />

        <p className="fs-lg text-secondary mb-xl">
          Частка влучань — яку частину запитів кеш обслужив сам, без бази:{' '}
          <code>hits / (hits + misses)</code>. Для експлуатації важливе не саме число,
          а його зміна.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="чому падіння відчутне">{`
100 requests, hit rate 90%   →  10 go to Postgres
100 requests, hit rate 70%   →  30 go to Postgres

hit rate −20 points  =  database load ×3
`}</CodeBlock>

          <CodeBlock title="Prometheus: частка за останні 5 хвилин">{`
rate(redis_keyspace_hits_total[5m])
/
( rate(redis_keyspace_hits_total[5m])
+ rate(redis_keyspace_misses_total[5m]) )
`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={RefreshCw}
            title="Холодний старт"
            subtitle="Очікувано"
            description="Після перезапуску кеш порожній, частка майже нуль і поступово росте, поки кеш наповнюється"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={MinusCircle}
            title="Витіснення"
            subtitle="Кешу замало"
            description="Пам'ять закінчилась, і потрібні ключі викидаються раніше, ніж їх знову запитають"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={GitCommit}
            title="Розгортання"
            subtitle="Новий формат ключів"
            description="Нова версія шукає ключі під іншою назвою — для неї весь кеш раптом порожній"
            color="purple"
            delay={3}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            <code>keyspace_hits</code> і <code>keyspace_misses</code> накопичуються від
            старту Redis. Частка, порахована просто з них, через кілька днів майже не
            реагує на зміни. Рахувати треба за вікно.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Універсального «доброго» значення немає. Дивіться на падіння в усталеному
            режимі й порівнюйте з навантаженням на базу: саме там його наслідки стане
            видно першими.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 22. CACHE DOWN ----------

function CacheDownSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={ZapOff} title="Коли кеш недоступний" subtitle="Graceful Degradation" />

        <p className="fs-lg text-secondary mb-xl">
          Якщо Redis — лише кеш, його падіння має зробити застосунок повільнішим, але не
          зламати. Це не відбувається само собою: таку поведінку треба закласти в код і
          налаштування.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <CodeBlock title="помилка кешу = промах">{`
redis = Redis.from_url(
    REDIS_URL,
    socket_timeout=0.1,          # 100 ms, then give up
    socket_connect_timeout=0.1,
)

def get_wishlist(wishlist_id):
    try:
        cached = redis.get(f"wishlist:{wishlist_id}")
        if cached:
            return json.loads(cached)
    except RedisError:
        log.warning("cache unavailable, using database")
    return load_from_db(wishlist_id)
`}</CodeBlock>

          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Три правила</h3>
            <DefBadge term="Помилка кешу = промах" description="Redis не відповів — застосунок іде в базу, а не повертає користувачу 500" color="green" />
            <DefBadge term="Короткий таймаут" description="чекати Redis мілісекунди, а не секунди, і потім іти в базу" color="green" />
            <DefBadge term="Readiness не залежить від кешу" description="інакше падіння Redis виключить з балансування всі копії одночасно" color="green" />
          </div>
        </div>

        <div className="outlined-card outlined-card--orange fade-in-delay-2 mb-xl">
          <h3 className="info-card__title mb-sm">Що може піти не так</h3>
          <DefBadge term="Повільний кеш" description="завислий Redis гірший за недоступний: кожен запит чекає до таймауту" color="orange" />
          <DefBadge term="Увесь трафік у базу" description="базу підбирали за навантаженням з кешем, а без нього запитів у рази більше" color="orange" />
          <DefBadge term="Cache stampede" description="популярний ключ зник, і сотні запитів одночасно йдуть по нього в базу" color="orange" />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Lightbulb}>
            Від cache stampede захищають дві речі: невеликий випадковий розкид TTL, щоб
            багато ключів не зникали в одну мить, і блокування на ключ — коли його немає в
            кеші, у базу йде лише один запит, а решта чекають, поки він покладе результат у
            кеш.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Перевірте заздалегідь, чи застосунок справді переживе втрату кешу: зупиніть
            Redis на staging і подивіться, чи немає помилок 500, наскільки зросли затримки
            і чи витримує база. Це дешевше, ніж дізнатися на проді.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 23. MANAGED DATABASES ----------

function ManagedDbSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Cloud} title="Керовані бази даних" subtitle="Managed Databases" />

        <p className="fs-lg text-secondary mb-xl">
          Керована база знімає з вас роботу із сервером, але не відповідальність за дані.
          Межа проходить приблизно там само, де на <SlideLink to={5}></SlideLink> проходила межа між
          розробником та інфраструктурою.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Бере на себе провайдер</h3>
            <DefBadge term="Сервер" description="залізо, ОС, встановлення й оновлення Postgres" color="green" />
            <DefBadge term="Копії" description="автоматичні бекапи й відновлення на момент часу" color="green" />
            <DefBadge term="Пулер" description="готовий проксі для з'єднань (у Postgres зазвичай PgBouncer)" color="green" />
            <DefBadge term="Відмова сервера" description="автоматичне перемикання на репліку, зазвичай за окрему плату" color="green" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Лишається за вами</h3>
            <DefBadge term="Схема" description="міграції, сумісність, блокування" color="orange" />
            <DefBadge term="З'єднання" description="бюджет під ліміт свого тарифу" color="orange" />
            <DefBadge term="RPO і RTO" description="чи підходить вікно зберігання тарифу" color="orange" />
            <DefBadge term="Перевірка відновлення" description="копію робить провайдер, перевіряєте ви" color="orange" />
            <DefBadge term="Доступ" description="користувачі, мережа, секрети" color="orange" />
          </div>
        </div>

        <div className="outlined-card outlined-card--blue fade-in-delay-3 mb-xl">
          <h3 className="info-card__title mb-sm">Що легко пропустити</h3>
          <DefBadge term="Ліміти тарифу" description="з'єднання, обсяг, вікно історії — знати до збою, а не після" color="blue" />
          <DefBadge term="Засинання" description="serverless-бази на зразок Neon зупиняються без запитів: перший запит після паузи повільний, а з'єднання в пулі вже мертві" color="blue" />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="green" icon={GitBranch}>
            Serverless-бази дають і корисну можливість — гілки: миттєву копію бази, як
            гілку в git. На ній можна прогнати міграцію чи перевірити відновлення, не
            чіпаючи прод.
          </HighlightBox>

          <HighlightBox color="blue" icon={Lightbulb}>
            З усього, що ми сьогодні розібрали, провайдер бере на себе створення резервних
            копій і пулер. Міграції, бюджет з'єднань, перевірка відновлення й поведінка без
            кешу лишаються вашими на будь-якій платформі.
          </HighlightBox>
        </div>


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

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={KeyRound}
            title="Сесії в пам'яті процесу"
            subtitle={<SlideLink to={4} />}
            description="Користувач «вилітає», щойно потрапляє на іншу копію → сесії в базі чи Redis або токен на клієнті"
            color="orange"
            delay={1}
          />
          <InfoCard
            icon={Workflow}
            title="Міграція при старті"
            subtitle={<SlideLink to={7} />}
            description="Копії змагаються за міграцію, а якщо вона впала, не стартує жодна → окреме завдання перед розгортанням"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={Layers}
            title="Перейменування за один реліз"
            subtitle={<SlideLink to={9} />}
            description="Копії старої версії падають, щойно міграція виконалась → expand/contract у кілька релізів"
            color="orange"
            delay={3}
          />
          <InfoCard
            icon={RotateCcw}
            title="Downgrade при відкаті"
            subtitle={<SlideLink to={11} />}
            description="Разом зі схемою зникають дані, які користувачі встигли записати → відкотити застосунок, схему виправити новою міграцією"
            color="orange"
            delay={4}
          />
          <InfoCard
            icon={Plug}
            title="Пул без урахування копій"
            subtitle={<SlideLink to={13} />}
            description="Кожна копія налаштована правильно, а разом вони вичерпують ліміт бази → бюджет з'єднань на всі копії або пулер"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={Copy}
            title="Репліка замість резервної копії"
            subtitle={<SlideLink to={15} />}
            description="Помилковий DELETE за мить потрапляє і на репліку → окремі резервні копії поза основною базою"
            color="orange"
            delay={6}
          />
          <InfoCard
            icon={ShieldCheck}
            title="Неперевірена копія"
            subtitle={<SlideLink to={16} />}
            description="Про те, що вона порожня, дізнаються, коли вона потрібна → регулярне відновлення в окреме середовище"
            color="orange"
            delay={7}
          />
          <InfoCard
            icon={Zap}
            title="Redis без maxmemory"
            subtitle={<SlideLink to={19} />}
            description="Пам'ять закінчилась — і кожен запис у кеш падає з помилкою → межа пам'яті, політика витіснення й TTL для ключів"
            color="orange"
            delay={8}
          />
          <InfoCard
            icon={ZapOff}
            title="Readiness перевіряє кеш"
            subtitle={<SlideLink to={22} />}
            description="Redis упав — і платформа виключає з балансування всі копії → у readiness перевіряти лише базу"
            color="orange"
            delay={9}
          />
        </div>

        <HighlightBox color="blue" icon={Lightbulb}>
          Спільне в усіх дев'яти: на ноутбуці їх не видно. Там одна копія, порожня база й
          Redis, який ніколи не падає. Вони з'являються, коли копій кілька, даних багато,
          а залежності відмовляють.
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

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Database}
            title="Стан не перезапускається"
            subtitle="Stateless vs stateful"
            description="Копії застосунку взаємозамінні, лише поки весь стан винесено в окремі сховища"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={ArrowLeftRight}
            title="Схема N+1 працює з кодом N"
            subtitle="Backward compatibility"
            description="Небезпечну зміну розбивають на кілька безпечних кроків"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={RotateCcw}
            title="Відкат без downgrade"
            subtitle="Roll back the app"
            description="Застосунок відкочують, а схему виправляють новою міграцією"
            color="cyan"
            delay={3}
          />
          <InfoCard
            icon={Plug}
            title="База бачить суму пулів"
            subtitle="Connection budget"
            description="Пул × воркери × копії не має перевищувати ліміт бази"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={ShieldCheck}
            title="Копія без перевірки — припущення"
            subtitle="Backup & restore"
            description="Скільки втрат допустимо, задають RPO і RTO, а погоджує їх бізнес"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={ZapOff}
            title="Без кешу — повільніше, а не недоступно"
            subtitle="Graceful degradation"
            description="Помилка кешу — це промах, а база має витримати трафік без нього"
            color="pink"
            delay={6}
          />
        </div>

        <HighlightBox color="blue" icon={Handshake}>
          Головне питання лекції — не «як працює база», а «хто за що відповідає». Більшість
          збоїв з даними виникає на стику розробника й інфраструктури, тож домовлятися
          про це треба до розгортання, а не під час інциденту.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 26. QUESTIONS ----------

function QuestionsSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
      <div className="title-slide__icon-wrapper">
        <HelpCircle />
      </div>
      <h1 className="title-slide__title">Питання?</h1>
      <h2 className="title-slide__subtitle">
        Лекція 8 — Дані та стан в експлуатації
      </h2>
      <div className="title-slide__badge">
        <p>☸️ Далі: Kubernetes — міграції як Job, репліки й перевірки готовності знову з нами</p>
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

