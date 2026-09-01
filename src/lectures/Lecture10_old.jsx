import React from 'react';
import {
  BarChart3, Gauge, Target, Zap, TrendingUp, Clock, Activity,
  Server, Cpu, MemoryStick, HardDrive, AlertTriangle, CheckCircle2,
  Code, Terminal, FileJson, LineChart, ArrowUp, ArrowDown,
  Users, Timer, Flame, Apple, Monitor, Eye, MonitorCheck, Globe,
  Layers, PlayCircle, Settings, GitBranch, Box, Search,
  Workflow, ChevronRight, MessageSquare, Lightbulb, XCircle,
  Database, BarChart2, Thermometer, Network, ShieldCheck, PackageX, Download
} from 'lucide-react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import HighlightBox from '../components/HighlightBox';

const slides = [
  { id: 1, title: 'Титульний слайд', component: TitleSlide },
  { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
  { id: 3, title: 'Навіщо Performance Testing?', component: WhyPerformanceSlide },
  { id: 4, title: 'Типи Performance Testing', component: TypesSlide },
  { id: 5, title: 'Ключові метрики', component: MetricsSlide },
  { id: '5_1', title: 'Percentiles — чому Average неінформативний', component: PercentilesSlide },
  { id: 6, title: 'JMeter — огляд', component: JmeterOverviewSlide },
  { id: '6_1', title: 'JMeter — основні компоненти', component: JmeterComponentsSlide },
  { id: '6_2', title: 'JMeter — приклад тесту', component: JmeterExampleSlide },
  { id: 7, title: 'Grafana k6', component: K6OverviewSlide },
  { id: '7_1', title: 'k6 — встановлення', component: K6InstallSlide },
  { id: '7_2', title: 'k6 — перший тест', component: K6FirstTestSlide },
  { id: '7_3', title: 'k6 — результати та thresholds', component: K6ResultsSlide },
  { id: 8, title: 'JMeter vs k6', component: ComparisonSlide },
  { id: 9, title: 'Практика: тестуємо fmi-schedule', component: PracticeScheduleSlide },
  { id: '9_1', title: 'Практика: сценарій навантаження', component: PracticeScenarioSlide },
  { id: '9_2', title: 'Практика: інтерпретація результатів', component: PracticeResultsSlide },
  { id: 10, title: 'Моніторинг ресурсів під час тесту', component: MonitoringSlide },
  { id: 11, title: 'Frontend Performance', component: FrontendPerfSlide },
  { id: '11_1', title: 'PageSpeed Insights Demo: fmi-schedule', component: LighthouseDemoSlide },
  { id: 12, title: 'Best Practices', component: BestPracticesSlide },
  { id: 13, title: 'Типові помилки', component: CommonMistakesSlide },
  { id: 14, title: 'Підсумки', component: SummarySlide },
  { id: 15, title: 'Питання?', component: QuestionsSlide },
];

export default function Lecture10() {
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
        <Gauge />
      </div>
      <h1 className="title-slide__title">
        Performance Testing
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 10 — Тестування програмного забезпечення
      </h2>
      <p className="title-slide__english">
        Навантажувальне тестування: від метрик до автоматизації
      </p>
      <div className="title-slide__badge">
        <p>📊 Від метрик до автоматизації — як перевірити що система витримає</p>
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
                Types of Performance Testing
              </h3>
              <p className="step-list__description">
                Розуміти що таке Performance Testing та його типи: Load, Stress, Spike, Soak
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--green fade-in-delay-2">
            <div className="step-list__number step-list__number--green">2</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--green">
                Performance Metrics
              </h3>
              <p className="step-list__description">
                Знати ключові метрики: Response Time, Throughput, Error Rate, Percentiles
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--orange fade-in-delay-3">
            <div className="step-list__number step-list__number--orange">3</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--orange">
                Load Testing Tools: JMeter & k6
              </h3>
              <p className="step-list__description">
                Писати навантажувальні тести в Apache JMeter та Grafana k6
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--purple fade-in-delay-4">
            <div className="step-list__number step-list__number--purple">4</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--purple">
                Практика на реальному API
              </h3>
              <p className="step-list__description">
                Протестувати fmi-schedule.chnu.edu.ua під навантаженням, проаналізувати результати
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 3. WHY PERFORMANCE TESTING ----------

function WhyPerformanceSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Zap} title="Навіщо Performance Testing?" subtitle="Why Performance Testing?" />

        <div className="outlined-card outlined-card--gradient-purple-pink mb-lg fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Функціональне тестування перевіряє <strong>«чи працює?»</strong>.{' '}
            Performance testing перевіряє <strong>«чи витримає під навантаженням?»</strong>
          </p>
        </div>

        <p className="fs-base text-secondary mb-lg fade-in-delay-1">
          Реальні приклади: Black Friday, запуск нового продукту, вірусний контент у соцмережах —
          коли тисячі користувачів приходять одночасно і сайт не витримує.
        </p>

        <div className="slide-grid slide-grid--3col">
          <InfoCardFeatured
            icon={TrendingUp}
            title="Бізнес-втрати"
            description="Amazon: кожна секунда затримки = -1% продажів. Google: +0.5с завантаження = -20% трафіку"
            color="red"
            delay={1}
          />
          <InfoCardFeatured
            icon={Users}
            title="Користувачі йдуть"
            description="53% мобільних користувачів закривають сторінку, якщо вона вантажиться довше 3 секунд"
            color="orange"
            delay={2}
          />
          <InfoCardFeatured
            icon={Search}
            title="Знайти bottleneck"
            description="Повільний SQL-запит, витік пам'яті, неоптимізований API — все це знаходиться під навантаженням"
            color="green"
            delay={3}
          />
        </div>

        <div className="highlight-box highlight-box--blue mt-lg fade-in-delay-4">
          <p className="highlight-box__text">
            Performance testing — це не «чи працює?», а <strong>«чи витримає під навантаженням?»</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 4. TYPES ----------

function TypesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Layers} title="Типи Performance Testing" subtitle="Types of Performance Testing" />

        <div className="slide-grid slide-grid--3col">
          <InfoCardFeatured
            icon={Users}
            title="Load Testing"
            description="Очікуване навантаження. Чи витримає система 100 одночасних користувачів? Перевірка нормальних умов роботи"
            color="blue"
            delay={1}
          />
          <InfoCardFeatured
            icon={Flame}
            title="Stress Testing"
            description="Навантаження понад норму. Де точка зламу системи? Що станеться при перевантаженні? Як система відновлюється?"
            color="red"
            delay={2}
          />
          <InfoCardFeatured
            icon={Zap}
            title="Spike Testing"
            description="Різкий стрибок: з 10 до 1000 користувачів за секунду. Імітація вірусного контенту або розпродажу"
            color="orange"
            delay={3}
          />
          <InfoCardFeatured
            icon={Timer}
            title="Soak / Endurance Testing"
            description="Тривале навантаження (8+ годин). Пошук витоків пам'яті (memory leaks) та деградації під час тривалої роботи"
            color="green"
            delay={4}
          />
          <InfoCardFeatured
            icon={ArrowUp}
            title="Scalability Testing"
            description="Як система масштабується при збільшенні ресурсів? Чи допоможе додатковий сервер?"
            color="purple"
            delay={5}
          />
          <InfoCardFeatured
            icon={Database}
            title="Volume Testing"
            description="Великий обсяг даних: мільйони записів у БД. Чи працює система так само швидко з великими даними?"
            color="cyan"
            delay={6}
          />
        </div>
      </div>
    </div>
  );
}

// ---------- 5. KEY METRICS ----------
function MetricsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={BarChart3} title="Ключові метрики" subtitle="Key Performance Metrics" />

        <div className="slide-grid slide-grid--2col">
          <div>
            <InfoCard
              icon={Clock}
              title="Response Time"
              description="Час від відправки запиту до отримання відповіді. Включає серверну обробку + передачу мережею. Зазвичай вимірюється в мілісекундах (ms)"
              color="blue"
              delay={1}
            />
            <InfoCard
              icon={Activity}
              title="Throughput (RPS)"
              description="Requests Per Second — кількість запитів, які сервер обробляє за секунду. Зростає з навантаженням до точки saturation, після чого падає"
              color="green"
              delay={2}
            />
            <InfoCard
              icon={XCircle}
              title="Error Rate"
              description="Відсоток помилкових відповідей (HTTP 5xx, таймаути). Залежить від SLA сервісу — типово < 0.1–1%"
              color="red"
              delay={3}
            />
          </div>

          <div>
            <InfoCard
              icon={Users}
              title="Concurrency"
              description="Кількість одночасних з'єднань / virtual users. Чим більше — тим більше навантаження на сервер"
              color="purple"
              delay={4}
            />
            <InfoCard
              icon={Network}
              title="Network Latency"
              description="Затримка мережі — час на доставку пакету від клієнта до сервера. На відміну від Response Time, не включає серверну обробку"
              color="orange"
              delay={5}
            />
            <InfoCard
              icon={ShieldCheck}
              title="Availability (Uptime)"
              description="Відсоток часу, коли сервіс доступний і відповідає клієнтам. SLA зазвичай вимагає 99.9%+ — це не більше 8.7 годин даунтайму на рік"
              color="cyan"
              delay={6}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 5.1. PERCENTILES ----------
function PercentilesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={BarChart2} title="Percentiles — чому Average неінформативний" subtitle="Why Average Lies" />

        <div className="outlined-card outlined-card--gradient-purple-pink mb-lg fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Response Time — корисна метрика, але один average-показник часто <strong>вводить в оману</strong>.
            Performance-інженери завжди дивляться на <strong>percentiles</strong> — розподіл часу
            відповіді по всій вибірці запитів
          </p>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-2">
            <h3 className="font-heading fs-section font-bold text-orange mb-base">Приклад: 10 запитів</h3>
            <div className="code-block">
              <pre style={{ margin: 0, lineHeight: 1.8 }}>
                <code>
                  <span className="code-block__comment">{'// Впорядкований час відповіді 10 запитів (ms):'}</span>{'\n'}
                  {'95, 97, 98, 99, 100, 101, 102, 103, 105, '}
                  <span className="code-block__string">10000</span>{'\n'}
                  {'\n'}
                  <span className="code-block__comment">{'// Статистика:'}</span>{'\n'}
                  <span className="code-block__keyword">Average</span>:  <span className="code-block__string">1090 ms</span>  <span className="code-block__comment">{'← виглядає жахливо!'}</span>{'\n'}
                  <span className="code-block__keyword">Median</span> (p50): <span className="code-block__string">100 ms</span>  <span className="code-block__comment">{'← реальність для більшості'}</span>{'\n'}
                  <span className="code-block__keyword">p95</span>:    <span className="code-block__string">~5000 ms</span> <span className="code-block__comment">{'← 5% найгірших'}</span>{'\n'}
                  <span className="code-block__keyword">p99</span>:    <span className="code-block__string">10000 ms</span> <span className="code-block__comment">{'← 1% найгірших'}</span>{'\n'}
                  <span className="code-block__keyword">Min</span>:    <span className="code-block__string">95 ms</span>{'\n'}
                  <span className="code-block__keyword">Max</span>:    <span className="code-block__string">10000 ms</span>
                </code>
              </pre>
            </div>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading fs-section font-bold text-blue mb-base">Що це означає?</h3>

            <InfoCard
              icon={AlertTriangle}
              title="Average — ненадійний"
              description="Один повільний запит (outlier) різко спотворює середнє. Average 1090ms — але 9 із 10 запитів були ~100ms!"
              color="orange"
              delay={3}
            />
            <InfoCard
              icon={BarChart3}
              title="Як читати percentile"
              description="p95 = 500ms означає: 95% запитів виконуються швидше за 500ms, а 5% найповільніших — повільніше"
              color="cyan"
              delay={4}
            />
            <InfoCard
              icon={Target}
              title="Percentiles — точна картина"
              description="p50 показує типовий досвід користувача. p95 показує досвід найгірших 5%. p99 — найгірший 1%"
              color="green"
              delay={5}
            />
          </div>
        </div>

        <div className="highlight-box highlight-box--green mt-lg fade-in-delay-6">
          <p className="highlight-box__text">
            <strong>SLA (Service Level Agreement)</strong> — угода про рівень якості сервісу.
            <br />
            Зазвичай визначається через percentiles: <strong>p95 {'<'} 500ms, error rate {'<'} 1%</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 6. JMETER OVERVIEW ----------

function JmeterOverviewSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Settings} title="Apache JMeter" subtitle="GUI-based Load Testing Tool" />

        <div className="outlined-card outlined-card--gradient-purple-pink mb-lg fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Open-source інструмент від Apache. Java-based, з GUI. Де-факто стандарт у enterprise-середовищі
            для навантажувального тестування з 1998 року.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div>
            <h3 className="font-heading fs-section font-bold text-green mb-base fade-in-delay-1">Переваги ✅</h3>
            <InfoCard
              icon={Eye}
              title="GUI"
              description="Візуальне створення тестів без коду — drag & drop компонентів"
              color="green"
              delay={1}
            />
            <InfoCard
              icon={Box}
              title="Плагіни"
              description="Величезна екосистема плагінів — від графіків до спеціальних протоколів"
              color="green"
              delay={2}
            />
            <InfoCard
              icon={Globe}
              title="Протоколи"
              description="HTTP, HTTPS, JDBC, JMS, SOAP, FTP, LDAP — підтримка майже всього"
              color="green"
              delay={3}
            />
            <InfoCard
              icon={LineChart}
              title="Звіти"
              description="Вбудовані графіки, Summary Report, Aggregate Report, HTML Dashboard"
              color="green"
              delay={4}
            />
          </div>

          <div>
            <h3 className="font-heading fs-section font-bold text-orange mb-base fade-in-delay-1">Недоліки ⚠️</h3>
            <InfoCard
              icon={Server}
              title="Важкий"
              description="Java — споживає багато RAM. Для серйозних тестів потрібен потужний сервер"
              color="orange"
              delay={1}
            />
            <InfoCard
              icon={FileJson}
              title="XML-конфіги"
              description=".jmx файли — це XML. Їх складно ревʼювити і відстежувати зміни в Git"
              color="orange"
              delay={2}
            />
            <InfoCard
              icon={MonitorCheck}
              title="GUI на Java Swing"
              description="Функціональний, але виглядає old-school порівняно з сучасними інструментами. Є теми (Darcula), але відчувається вік"
              color="orange"
              delay={3}
            />
            <InfoCard
              icon={Code}
              title="Scripting"
              description="Groovy / BeanShell — додаткова мова, яку треба вивчати. На відміну від k6, де пишеш на знайомому JavaScript"
              color="orange"
              delay={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 6.1. JMETER COMPONENTS ----------
function JmeterComponentsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Workflow} title="JMeter — компоненти" subtitle="Test Plan Structure" />

        <div className="step-list mb-lg">
          <div className="step-list__item step-list__item--blue fade-in-delay-1">
            <div className="step-list__number step-list__number--blue">1</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--cyan">Test Plan</h3>
              <p className="step-list__description">
                Кореневий елемент. Контейнер для всіх компонентів тесту. Один файл .jmx = один Test Plan
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--green fade-in-delay-2">
            <div className="step-list__number step-list__number--green">2</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--green">Thread Group</h3>
              <p className="step-list__description">
                Група віртуальних користувачів. Налаштовується: кількість threads (users),
                ramp-up period (за скільки секунд запустити всіх), loop count (скільки ітерацій)
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--orange fade-in-delay-3">
            <div className="step-list__number step-list__number--orange">3</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--orange">Sampler (HTTP Request)</h3>
              <p className="step-list__description">
                Власне запит: URL, HTTP method (GET/POST), body, headers.
                Це те, що кожен «користувач» буде виконувати
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--purple fade-in-delay-4">
            <div className="step-list__number step-list__number--purple">4</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--purple">Assertions + Listeners</h3>
              <p className="step-list__description">
                <strong>Listeners</strong> — збір та відображення результатів: View Results Tree,
                Summary Report, Aggregate Report.
                <br />
                <strong>Assertions</strong> — додаткові перевірки відповіді (status code, body, headers).
                За замовчуванням JMeter <em>і так</em> рахує 2xx як success, 4xx/5xx як failure —
                тож explicit assertion на статус 200 здебільшого зайвий
              </p>
            </div>
          </div>
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          <strong>Обережно з assertions під навантаженням:</strong> кожен assertion виконується для
          кожного запиту і додає overhead до самого JMeter. На 1000+ RPS regex-assertion на тіло
          відповіді може перетворити навантажувальний агент на bottleneck — і ви будете міряти
          швидкість JMeter, а не вашого API
        </HighlightBox>

        <h3 className="fs-h4 text-primary mt-md mb-sm fade-in-delay-5">
          Коли assertion реально потрібен:
        </h3>

        <div className="grid-3 fade-in-delay-5">
          <BadgeCard
            letter="1"
            title="200 ≠ success"
            description="GraphQL завжди повертає 200, помилки — у полі errors. Без assertion на тіло тест буде «зеленим», хоча всі запити фейляться"
            color="purple"
          />
          <BadgeCard
            letter="2"
            title="Auth/session flows"
            description="Після логіну сервер може віддати 200 зі сторінкою «Session expired». Assertion на substring (user_id, csrf_token) ловить тихі редіректи"
            color="blue"
          />
          <BadgeCard
            letter="3"
            title="Деградація під load"
            description="API під 50 RPS може повертати порожні дані через race condition чи cache miss. Assertion на наявність ключового поля ловить таке"
            color="cyan"
          />
        </div>
      </div>
    </div>
  );
}

// ---------- 6.2. JMETER EXAMPLE ----------
function JmeterExampleSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={PlayCircle} title="JMeter — приклад тесту" subtitle="Running a Load Test" />

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-1">
            <h3 className="font-heading fs-section font-bold text-blue mb-base">Налаштування тесту</h3>
            <div className="code-block">
              <pre style={{ margin: 0, lineHeight: 1.8 }}>
                <code>
                  <span className="code-block__comment">{'// Thread Group:'}</span>{'\n'}
                  <span className="code-block__keyword">Threads</span>:    <span className="code-block__string">50 users</span>{'\n'}
                  <span className="code-block__keyword">Ramp-up</span>:   <span className="code-block__string">10 seconds</span>{'\n'}
                  <span className="code-block__keyword">Loop</span>:      <span className="code-block__string">5 iterations</span>{'\n'}
                  {'\n'}
                  <span className="code-block__comment">{'// HTTP Request:'}</span>{'\n'}
                  <span className="code-block__keyword">Method</span>:  <span className="code-block__string">GET</span>{'\n'}
                  <span className="code-block__keyword">URL</span>:     <span className="code-block__string">http://fmi-schedule.chnu.edu.ua</span>{'\n'}
                  <span className="code-block__keyword">Path</span>:    <span className="code-block__string">/api/schedule</span>{'\n'}
                  {'\n'}
                  <span className="code-block__comment">{'// Response Assertion:'}</span>{'\n'}
                  <span className="code-block__keyword">Status Code</span> = <span className="code-block__string">200</span>{'\n'}
                  {'\n'}
                  <span className="code-block__comment">{'// Summary Report:'}</span>{'\n'}
                  <span className="code-block__keyword">Avg</span>, <span className="code-block__keyword">p95</span>, <span className="code-block__keyword">Throughput</span>, <span className="code-block__keyword">Error%</span>
                </code>
              </pre>
            </div>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading fs-section font-bold text-green mb-base">Запуск з CLI (для CI/CD)</h3>
            <div className="code-block mb-lg">
              <pre style={{ margin: 0, lineHeight: 1.8 }}>
                <code>
                  <span className="code-block__comment"># Запуск тесту в headless режимі</span>{'\n'}
                  jmeter <span className="code-block__string">-n</span> \{'\n'}
                  {'  '}<span className="code-block__string">-t</span> test-plan.jmx \{'\n'}
                  {'  '}<span className="code-block__string">-l</span> results.jtl \{'\n'}
                  {'  '}<span className="code-block__string">-e</span> <span className="code-block__string">-o</span> report/{'\n'}
                  {'\n'}
                  <span className="code-block__comment"># Параметри:</span>{'\n'}
                  <span className="code-block__keyword">-n</span>  headless mode (без GUI){'\n'}
                  <span className="code-block__keyword">-t</span>  тест-план (.jmx){'\n'}
                  <span className="code-block__keyword">-l</span>  файл результатів{'\n'}
                  <span className="code-block__keyword">-e -o</span>  HTML-звіт автоматично
                </code>
              </pre>
            </div>

            <div className="highlight-box highlight-box--blue">
              <p className="highlight-box__text">
                <strong>-n</strong> — headless mode, <strong>-e -o</strong> — HTML-звіт автоматично.
                В GUI запускати тести <strong>не рекомендовано</strong> — він споживає ресурси
              </p>
            </div>
          </div>
        </div>

        <div className="fade-in-delay-3">
          <InfoCardFeatured
            icon={Network}
            title=""
            subtitle=""
            description=""
            color="purple"
          >
            <pre className="code-block__pre" style={{ margin: 0, lineHeight: 1.6 }}>
              <code className="code-block__code">
                {'📁 Test Plan\n'}
                {'  └── 👥 Thread Group\n'}
                {'       ├── Number of Threads: 50\n'}
                {'       ├── Ramp-Up Period: 10s\n'}
                {'       ├── Loop Count: 5\n'}
                {'       │\n'}
                {'       ├── 🌐 HTTP Request Sampler\n'}
                {'       │    ├── Method: GET\n'}
                {'       │    └── Path: /api/schedule\n'}
                {'       │\n'}
                {'       ├── ✅ Response Assertion\n'}
                {'       │    └── Status Code = 200\n'}
                {'       │\n'}
                {'       └── 📊 Summary Report (Listener)'}
              </code>
            </pre>
          </InfoCardFeatured>
        </div>
      </div>
    </div>
  );
}

// ---------- 7. K6 OVERVIEW ----------
function K6OverviewSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Terminal} title="Grafana k6" subtitle="Modern Load Testing in JavaScript" />

        <div className="outlined-card outlined-card--gradient-purple-pink mb-lg fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Open-source, JavaScript-based, CLI-first інструмент для навантажувального тестування.
            Написаний на Go — легкий та швидкий. Ідеально вписується в CI/CD.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div>
            <h3 className="font-heading fs-section font-bold text-green mb-base fade-in-delay-1">Переваги ✅</h3>
            <InfoCard
              icon={Code}
              title="JavaScript"
              description="Проста і зрозуміла мова для написання тестів. Низький поріг входу — навіть якщо ваша основна мова інша"
              color="green"
              delay={1}
            />
            <InfoCard
              icon={Zap}
              title="Легкий"
              description="Написаний на Go. Мінімальне споживання RAM/CPU. Один бінарник — нічого встановлювати"
              color="green"
              delay={2}
            />
            <InfoCard
              icon={PackageX}
              title="Без npm install"
              description="Власний JS runtime (goja). Не потрібні node_modules, package.json чи Node.js. Просто .js файл — і запуск"
              color="green"
              delay={3}
            />
            <InfoCard
              icon={GitBranch}
              title="CLI-first"
              description="Код у .js файлах → Git → CI/CD. Ідеально для автоматизації та code review"
              color="green"
              delay={4}
            />
            <InfoCard
              icon={CheckCircle2}
              title="Checks & Thresholds"
              description="Вбудовані перевірки (checks) та пороги (thresholds). Автоматичний PASS/FAIL"
              color="green"
              delay={5}
            />
          </div>

          <div>
            <h3 className="font-heading fs-section font-bold text-orange mb-base fade-in-delay-1">Недоліки ⚠️</h3>
            <InfoCard
              icon={Terminal}
              title="Без GUI"
              description="Тільки код і командний рядок. Немає візуального редактора як у JMeter"
              color="orange"
              delay={1}
            />
            <InfoCard
              icon={Globe}
              title="Не браузерний"
              description="Тестує HTTP-запити, не рендеринг сторінки. Для фронтенд-перформансу — Lighthouse"
              color="orange"
              delay={2}
            />
            <InfoCard
              icon={Layers}
              title="Менше протоколів"
              description="HTTP, WebSocket, gRPC. Немає JDBC, JMS, SOAP — менше ніж у JMeter"
              color="orange"
              delay={3}
            />
            <InfoCard
              icon={PackageX}
              title="npm-пакети не працюють"
              description="Зворотна сторона goja runtime — більшість npm-бібліотек залежать від Node.js API. Для складних випадків потрібен webpack-бандл"
              color="orange"
              delay={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function K6InstallSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Download} title="k6 — встановлення" subtitle="One Command Setup" />

        <div className="slide-grid slide-grid--3col mb-lg">
          <InfoCardFeatured
            icon={Apple}
            title="macOS"
            subtitle="через Homebrew"
            description=""
            color="blue"
            delay={1}
          >
            <pre className="code-block__pre" style={{ margin: 0, fontSize: '0.95em' }}>
              <code className="code-block__code">brew install k6</code>
            </pre>
          </InfoCardFeatured>

          <InfoCardFeatured
            icon={Terminal}
            title="Ubuntu"
            subtitle="snap (передвстановлений)"
            description=""
            color="orange"
            delay={2}
          >
            <pre className="code-block__pre" style={{ margin: 0, fontSize: '0.95em' }}>
              <code className="code-block__code">sudo snap install k6</code>
            </pre>
          </InfoCardFeatured>

          <InfoCardFeatured
            icon={Monitor}
            title="Windows"
            subtitle="через winget"
            description=""
            color="purple"
            delay={3}
          >
            <pre className="code-block__pre" style={{ margin: 0, fontSize: '0.95em' }}>
              <code className="code-block__code">winget install k6</code>
            </pre>
          </InfoCardFeatured>
        </div>

        <div className="highlight-box highlight-box--green fade-in-delay-4 mb-lg">
          <p className="highlight-box__text">
            <strong>Перевірка:</strong> <code>k6 version</code> — має показати версію та платформу.
            Java чи Node.js <strong>не потрібні</strong> — k6 написаний на Go, поставляється як standalone бінарник
          </p>
        </div>

        <h3 className="font-heading fs-section font-bold text-cyan mb-base fade-in-delay-5">
          Альтернатива — без локальної установки
        </h3>

        <div className="code-block fade-in-delay-5">
          <pre style={{ margin: 0, lineHeight: 1.7 }}>
            <code>
              <span className="code-block__comment"># Через Docker — монтуємо локальну папку в контейнер:</span>{'\n'}
              docker run --rm -i \{'\n'}
              {'  '}-v $(pwd):/scripts \{'\n'}
              {'  '}grafana/k6 run /scripts/script.js{'\n'}
              {'\n'}
              <span className="code-block__comment"># Windows PowerShell — замість $(pwd) використовуйте {'${PWD}'}</span>
            </code>
          </pre>
        </div>

        <div className="highlight-box highlight-box--blue fade-in-delay-6 mt-base">
          <p className="highlight-box__text">
            <strong>Коли Docker:</strong> CI/CD без додаткової установки на runner, ізольоване середовище,
            однакова версія k6 локально й на сервері.
            <br />
            <strong>Мінус:</strong> overhead контейнера —
            для high-throughput тестів краще запускати k6 нативно
          </p>
        </div>
      </div>
    </div>
  );
}

function K6FirstTestSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Code} title="k6 — перший тест" subtitle="Writing Your First Load Test" />

        <div className="code-block fade-in-delay-1">
          <pre style={{ margin: 0, lineHeight: 1.7 }}>
            <code>
              <span className="code-block__keyword">import</span> http <span className="code-block__keyword">from</span> <span className="code-block__string">'k6/http'</span>;{'\n'}
              <span className="code-block__keyword">import</span> {'{ check, sleep }'} <span className="code-block__keyword">from</span> <span className="code-block__string">'k6'</span>;{'\n'}
              {'\n'}
              <span className="code-block__keyword">export const</span> options = {'{'}{'\n'}
              {'  '}stages: [{'\n'}
              {'    '}{'{ '}duration: <span className="code-block__string">'30s'</span>, target: <span className="code-block__string">20</span>{' }'},  <span className="code-block__comment">// ramp up до 20 users</span>{'\n'}
              {'    '}{'{ '}duration: <span className="code-block__string">'1m'</span>,  target: <span className="code-block__string">20</span>{' }'},  <span className="code-block__comment">// тримаємо 20 users</span>{'\n'}
              {'    '}{'{ '}duration: <span className="code-block__string">'10s'</span>, target: <span className="code-block__string">0</span>{' }'},   <span className="code-block__comment">// ramp down</span>{'\n'}
              {'  '}],{'\n'}
              {'  '}thresholds: {'{'}{'\n'}
              {'    '}http_req_duration: [<span className="code-block__string">'p(95){'<'}500'</span>], <span className="code-block__comment">// 95% запитів {'<'} 500ms</span>{'\n'}
              {'    '}http_req_failed:   [<span className="code-block__string">'rate{'<'}0.01'</span>],  <span className="code-block__comment">// менше 1% помилок</span>{'\n'}
              {'  '}{'}'},{'\n'}
              {'}'};{'\n'}
              {'\n'}
              <span className="code-block__keyword">export default function</span> () {'{'}{'\n'}
              {'  '}<span className="code-block__keyword">const</span> res = http.get(<span className="code-block__string">'http://fmi-schedule.chnu.edu.ua/schedules/full/semester?semesterId=57'</span>);{'\n'}
              {'\n'}
              {'  '}check(res, {'{'}{'\n'}
              {'    '}<span className="code-block__string">'status is 200'</span>:        (r) ={'>'} r.status === <span className="code-block__string">200</span>,{'\n'}
              {'    '}<span className="code-block__string">'response time {'<'} 500ms'</span>: (r) ={'>'} r.timings.duration {'<'} <span className="code-block__string">500</span>,{'\n'}
              {'  }'});{'\n'}
              {'\n'}
              {'  '}sleep(<span className="code-block__string">1</span>); <span className="code-block__comment">// think time — пауза між запитами</span>{'\n'}
              {'}'}
            </code>
          </pre>
        </div>

        <div className="slide-grid slide-grid--2col mt-lg">
          <InfoCard
            icon={ArrowUp}
            title="stages — профіль навантаження"
            description="Ramp up → тримати навантаження → Ramp down. Імітує реальний потік користувачів"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={CheckCircle2}
            title="thresholds — SLA автоматично"
            description="Якщо p95 > 500ms або error rate > 1% — тест FAIL. Ідеально для CI/CD gate"
            color="green"
            delay={3}
          />
        </div>

        <div className="code-block mt-lg fade-in-delay-4">
          <pre style={{ margin: 0, lineHeight: 1.8 }}>
            <code>
              <span className="code-block__comment"># Запуск тесту:</span>{'\n'}
              <span className="code-block__keyword">k6 run</span> load-test.js
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

// ---------- 7.2. K6 RESULTS ----------

function K6ResultsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={LineChart} title="k6 — результати та thresholds" subtitle="Reading k6 Output" />

        <div className="code-block fade-in-delay-1 mb-lg">
          <pre style={{ margin: 0, lineHeight: 1.6 }}>
            <code>
              {'     '}execution: local{'\n'}
              {'        '}script: test1.js{'\n'}
              {'        '}output: -{'\n'}
              {'\n'}
              {'     '}scenarios: (100.00%) 1 scenario, 20 max VUs, 2m10s max duration{'\n'}
              {'              '}* default: Up to 20 looping VUs for 1m40s over 3 stages{'\n'}
              {'\n'}
              {'  '}<span className="code-block__keyword">█ THRESHOLDS</span>{'\n'}
              {'    '}http_req_duration{'\n'}
              {'    '}<span className="code-block__string">✓</span> <span className="code-block__string">'p(95){'<'}500'</span> p(95)=<span className="code-block__string">162.75ms</span>{'\n'}
              {'    '}http_req_failed{'\n'}
              {'    '}<span className="code-block__string">✓</span> <span className="code-block__string">'rate{'<'}0.01'</span> rate=<span className="code-block__string">0.00%</span>{'\n'}
              {'\n'}
              {'  '}<span className="code-block__keyword">█ TOTAL RESULTS</span>{'\n'}
              {'    '}checks_succeeded...: <span className="code-block__string">100.00%</span> 2918 out of 2918{'\n'}
              {'    '}<span className="code-block__string">✓</span> status is 200{'\n'}
              {'    '}<span className="code-block__string">✓</span> response time {'<'} 500ms{'\n'}
              {'\n'}
              {'  '}<span className="code-block__keyword">HTTP</span>{'\n'}
              {'    '}http_req_duration..: avg=<span className="code-block__string">103.04ms</span> min=<span className="code-block__string">84.21ms</span> med=<span className="code-block__string">90.33ms</span>{'\n'}
              {'                         '}max=<span className="code-block__string">284.12ms</span> p(90)=<span className="code-block__string">143.48ms</span> p(95)=<span className="code-block__string">162.75ms</span>{'\n'}
              {'    '}http_req_failed....: <span className="code-block__string">0.00%</span>  0 out of 1459{'\n'}
              {'    '}http_reqs..........: <span className="code-block__string">1459</span>   14.5/s{'\n'}
              {'\n'}
              {'  '}<span className="code-block__keyword">EXECUTION</span>{'\n'}
              {'    '}iterations.........: <span className="code-block__string">1459</span>   14.5/s{'\n'}
              {'    '}vus................: <span className="code-block__string">1</span>      min=1  max=<span className="code-block__string">20</span>{'\n'}
              {'\n'}
              {'  '}<span className="code-block__keyword">NETWORK</span>{'\n'}
              {'    '}data_received......: <span className="code-block__string">676 kB</span> 6.7 kB/s{'\n'}
              {'    '}data_sent..........: <span className="code-block__string">171 kB</span> 1.7 kB/s{'\n'}
              {'\n'}
              {'  '}running (1m40.6s), 00/20 VUs, 1459 complete and 0 interrupted iterations{'\n'}
              {'  '}default <span className="code-block__string">✓</span> [======================================] 00/20 VUs  1m40s
            </code>
          </pre>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div>
            <h3 className="font-heading fs-section font-bold text-blue mb-base fade-in-delay-2">How to read the results</h3>
            <InfoCard
              icon={Clock}
              title="http_req_duration"
              description="avg=103ms, p95=162ms — the server handles 20 VUs easily. Well within the 500ms threshold"
              color="blue"
              delay={2}
            />
            <InfoCard
              icon={Activity}
              title="http_reqs: 1459, 14.5/s"
              description="Total 1459 requests, throughput 14.5 RPS. Each VU does ~1 req/s (because of sleep(1))"
              color="green"
              delay={3}
            />
            <InfoCard
              icon={XCircle}
              title="http_req_failed: 0.00%"
              description="Zero errors — all responses successful. Error rate = 0% — excellent!"
              color="purple"
              delay={4}
            />
          </div>

          <div>
            <h3 className="font-heading fs-section font-bold text-green mb-base fade-in-delay-2">PASS / FAIL</h3>

            <div className="code-block mb-base fade-in-delay-3">
              <pre style={{ margin: 0, lineHeight: 1.8 }}>
                <code>
                  <span className="code-block__comment">{'// Thresholds determine the result:'}</span>{'\n'}
                  {'\n'}
                  <span className="code-block__string">✓</span> http_req_duration p(95) {'<'} 500ms{'\n'}
                  {'  '}p(95) = 162ms {'<'} 500ms → <span className="code-block__string">PASS ✅</span>{'\n'}
                  {'\n'}
                  <span className="code-block__string">✓</span> http_req_failed {'<'} 1%{'\n'}
                  {'  '}0.00% {'<'} 1% → <span className="code-block__string">PASS ✅</span>{'\n'}
                  {'\n'}
                  <span className="code-block__comment">{'// What if p(95) were 650ms?'}</span>{'\n'}
                  <span className="code-block__keyword">✗</span> http_req_duration p(95) {'<'} 500ms{'\n'}
                  {'  '}p(95) = 650ms {'>'} 500ms → <span className="code-block__keyword">FAIL ❌</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="highlight-box highlight-box--green mt-base fade-in-delay-4">
          <p className="highlight-box__text">
            Thresholds — automatic pass/fail. If <strong>p95 {'>'} 500ms</strong> — the test is red. In a CI/CD pipeline this blocks deployment
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 8. COMPARISON ----------

function ComparisonSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Layers} title="JMeter vs k6" subtitle="Порівняння інструментів" />

        <div className="slide-grid slide-grid--2col">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="font-heading fs-section font-bold text-blue mb-base" style={{ textAlign: 'center' }}>
              🏢 Apache JMeter
            </h3>
            <div className="flex flex-col gap-sm">
              <div className="info-card info-card--blue">
                <p className="info-card__text"><strong>Мова:</strong> Java / Groovy</p>
              </div>
              <div className="info-card info-card--blue">
                <p className="info-card__text"><strong>Інтерфейс:</strong> GUI + CLI</p>
              </div>
              <div className="info-card info-card--blue">
                <p className="info-card__text"><strong>Ресурси:</strong> важкий (JVM, багато RAM)</p>
              </div>
              <div className="info-card info-card--blue">
                <p className="info-card__text"><strong>Протоколи:</strong> HTTP, JDBC, JMS, SOAP, FTP, LDAP</p>
              </div>
              <div className="info-card info-card--blue">
                <p className="info-card__text"><strong>CI/CD:</strong> повна підтримка, плагіни для Jenkins, GitLab, GitHub Actions</p>
              </div>
              <div className="info-card info-card--blue">
                <p className="info-card__text"><strong>Спільнота:</strong> величезна, зріла (з 1998)</p>
              </div>
              <div className="info-card info-card--blue">
                <p className="info-card__text"><strong>Коли:</strong> enterprise, складні протоколи, GUI-підхід <br /> &nbsp; </p>
              </div>
            </div>
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="font-heading fs-section font-bold text-green mb-base" style={{ textAlign: 'center' }}>
              ⚡ Grafana k6
            </h3>
            <div className="flex flex-col gap-sm">
              <div className="info-card info-card--green">
                <p className="info-card__text"><strong>Мова:</strong> JavaScript</p>
              </div>
              <div className="info-card info-card--green">
                <p className="info-card__text"><strong>Інтерфейс:</strong> CLI + код</p>
              </div>
              <div className="info-card info-card--green">
                <p className="info-card__text"><strong>Ресурси:</strong> легкий (Go, мінімум RAM)</p>
              </div>
              <div className="info-card info-card--green">
                <p className="info-card__text"><strong>Протоколи:</strong> HTTP, WebSocket, gRPC</p>
              </div>
              <div className="info-card info-card--green">
                <p className="info-card__text"><strong>CI/CD:</strong> нативно, один бінарник <br /> &nbsp; </p>
              </div>
              <div className="info-card info-card--green">
                <p className="info-card__text"><strong>Спільнота:</strong> росте швидко (Grafana Labs)</p>
              </div>
              <div className="info-card info-card--green">
                <p className="info-card__text"><strong>Коли:</strong> невеликі команди, швидкий старт, code-first підхід</p>
              </div>
            </div>
          </div>
        </div>

        <div className="highlight-box highlight-box--purple mt-lg fade-in-delay-3">
          <p className="highlight-box__text">
            Обидва інструменти — production-ready і використовуються в реальних проєктах.
            <br />
            Вибір залежить від контексту: стек команди, протоколи, існуюча інфраструктура
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 9. PRACTICE: FMI-SCHEDULE ----------

function PracticeScheduleSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Globe} title="Практика: тестуємо fmi-schedule" subtitle="Real-World Load Testing Scenario" />

        <div className="outlined-card outlined-card--gradient-purple-pink mb-lg fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            <strong>Сценарій:</strong> Початок семестру. Дуже багато студентів одночасно заходять на
            <code > fmi-schedule.com.ua </code>{' '}
            щоб перевірити розклад. Чи витримає сервер?
          </p>
        </div>

        <h3 className="font-heading fs-section font-bold text-blue mb-base fade-in-delay-2">
          Які endpoints викликаються при завантаженні сторінки?
        </h3>

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-2">
            <InfoCard
              icon={Globe}
              title="GET / — головна сторінка"
              description="HTML/JS/CSS бандл. Статика, зазвичай кешується CDN"
              color="blue"
              delay={2}
            />
            <InfoCard
              icon={Database}
              title="GET /api/schedule"
              description="Список занять. Найважчий запит — звертається до БД, може включати JOIN"
              color="green"
              delay={3}
            />
            <InfoCard
              icon={Users}
              title="GET /api/teachers"
              description="Список викладачів. Відносно легкий, але теж потребує БД"
              color="purple"
              delay={4}
            />
          </div>

          <div className="fade-in-delay-3">
            <InfoCard
              icon={Layers}
              title="GET /api/groups"
              description="Список груп та спеціальностей. Відносно стабільні дані"
              color="orange"
              delay={3}
            />
            <InfoCard
              icon={Box}
              title="GET /api/rooms"
              description="Список аудиторій. Легкий запит, мало даних"
              color="cyan"
              delay={4}
            />
            <InfoCard
              icon={Settings}
              title="GET /api/semesters"
              description="Поточний семестр, тижні. Використовується для фільтрації розкладу"
              color="red"
              delay={5}
            />
          </div>
        </div>

        <div className="highlight-box highlight-box--orange mt-base fade-in-delay-4">
          <p className="highlight-box__text">
            Один користувач = <strong>5-6 HTTP-запитів</strong>. 200 користувачів одночасно = <strong>~1000+ запитів</strong> до серверу
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 9.1. PRACTICE: SCENARIO ----------

function PracticeScenarioSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Code} title="Практика: сценарій навантаження" subtitle="k6 Test for fmi-schedule" />

        <div className="code-block fade-in-delay-1">
          <pre style={{ margin: 0, lineHeight: 1.6 }}>
            <code>
              <span className="code-block__keyword">import</span> http <span className="code-block__keyword">from</span> <span className="code-block__string">'k6/http'</span>;{'\n'}
              <span className="code-block__keyword">import</span> {'{ check, sleep, group }'} <span className="code-block__keyword">from</span> <span className="code-block__string">'k6'</span>;{'\n'}
              {'\n'}
              <span className="code-block__keyword">const</span> BASE = <span className="code-block__string">'http://fmi-schedule.com.ua'</span>;{'\n'}
              {'\n'}
              <span className="code-block__keyword">export const</span> options = {'{'}{'\n'}
              {'  '}stages: [{'\n'}
              {'    '}{'{ '}duration: <span className="code-block__string">'30s'</span>, target: <span className="code-block__string">50</span>{' }'},   <span className="code-block__comment">// поступово до 50</span>{'\n'}
              {'    '}{'{ '}duration: <span className="code-block__string">'1m'</span>,  target: <span className="code-block__string">100</span>{' }'},  <span className="code-block__comment">// збільшуємо до 100</span>{'\n'}
              {'    '}{'{ '}duration: <span className="code-block__string">'2m'</span>,  target: <span className="code-block__string">200</span>{' }'},  <span className="code-block__comment">// пік — 200 студентів</span>{'\n'}
              {'    '}{'{ '}duration: <span className="code-block__string">'1m'</span>,  target: <span className="code-block__string">200</span>{' }'},  <span className="code-block__comment">// тримаємо пік</span>{'\n'}
              {'    '}{'{ '}duration: <span className="code-block__string">'30s'</span>, target: <span className="code-block__string">0</span>{' }'},    <span className="code-block__comment">// ramp down</span>{'\n'}
              {'  '}],{'\n'}
              {'  '}thresholds: {'{'}{'\n'}
              {'    '}http_req_duration: [<span className="code-block__string">'p(95){'<'}1000'</span>],{'\n'}
              {'    '}http_req_failed:   [<span className="code-block__string">'rate{'<'}0.05'</span>],{'\n'}
              {'  '}{'}'},{'\n'}
              {'}'};{'\n'}
              {'\n'}
              <span className="code-block__keyword">export default function</span> () {'{'}{'\n'}
              {'  '}<span className="code-block__comment">// Імітуємо реальну поведінку: юзер відкриває сторінку</span>{'\n'}
              {'  '}group(<span className="code-block__string">'Open schedule page'</span>, () ={'>'} {'{'}{'\n'}
              {'    '}<span className="code-block__keyword">const</span> responses = http.batch([{'\n'}
              {'      '}[<span className="code-block__string">'GET'</span>, <span className="code-block__string">`${'{'}<span className="code-block__keyword">BASE</span>{'}'}/api/schedule`</span>],{'\n'}
              {'      '}[<span className="code-block__string">'GET'</span>, <span className="code-block__string">`${'{'}<span className="code-block__keyword">BASE</span>{'}'}/api/teachers`</span>],{'\n'}
              {'      '}[<span className="code-block__string">'GET'</span>, <span className="code-block__string">`${'{'}<span className="code-block__keyword">BASE</span>{'}'}/api/groups`</span>],{'\n'}
              {'      '}[<span className="code-block__string">'GET'</span>, <span className="code-block__string">`${'{'}<span className="code-block__keyword">BASE</span>{'}'}/api/rooms`</span>],{'\n'}
              {'      '}[<span className="code-block__string">'GET'</span>, <span className="code-block__string">`${'{'}<span className="code-block__keyword">BASE</span>{'}'}/api/semesters`</span>],{'\n'}
              {'    '}]);{'\n'}
              {'\n'}
              {'    '}responses.forEach((res, i) ={'>'} {'{'}{'\n'}
              {'      '}check(res, {'{'} <span className="code-block__string">'status 200'</span>: (r) ={'>'} r.status === <span className="code-block__string">200</span> {'}'});{'\n'}
              {'    }'});{'\n'}
              {'  }'});{'\n'}
              {'\n'}
              {'  '}sleep(Math.random() * <span className="code-block__string">3</span> + <span className="code-block__string">1</span>); <span className="code-block__comment">// 1-4 сек think time</span>{'\n'}
              {'}'}
            </code>
          </pre>
        </div>

        <div className="slide-grid slide-grid--2col mt-base">
          <InfoCard
            icon={Layers}
            title="http.batch() — паралельні запити"
            description="Браузер робить кілька запитів одночасно. batch() імітує це реалістично"
            color="blue"
            delay={2}
          />
          <InfoCard
            icon={Timer}
            title="Random sleep — реалістичний think time"
            description="Реальні юзери не клікають як роботи. Рандомна пауза 1-4 сек між діями"
            color="green"
            delay={3}
          />
        </div>
      </div>
    </div>
  );
}

// ---------- 9.2. PRACTICE: RESULTS ----------

function PracticeResultsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={BarChart3} title="Практика: інтерпретація результатів" subtitle="What Do These Numbers Mean?" />

        <p className="fs-base text-secondary mb-base fade-in-delay-1">
          Уявімо, ваш тест показав такі результати. Які висновки можна зробити?
        </p>

        <div className="code-block fade-in-delay-1 mb-lg">
          <pre style={{ margin: 0, lineHeight: 1.8 }}>
            <code>
              <span className="code-block__comment">{'// Результати тесту fmi-schedule (200 VUs, 5 хвилин):'}</span>{'\n'}
              {'\n'}
              <span className="code-block__keyword">http_req_duration</span>:{'\n'}
              {'  '}avg = <span className="code-block__string">340ms</span>   min = <span className="code-block__string">89ms</span>   max = <span className="code-block__string">12400ms</span>{'\n'}
              {'  '}p(50) = <span className="code-block__string">180ms</span>  p(90) = <span className="code-block__string">650ms</span>  p(95) = <span className="code-block__string">1850ms</span>  p(99) = <span className="code-block__string">8200ms</span>{'\n'}
              {'\n'}
              <span className="code-block__keyword">http_req_failed</span>: <span className="code-block__string">3.2%</span>{'\n'}
              <span className="code-block__keyword">http_reqs</span>: <span className="code-block__string">24500</span>  throughput: <span className="code-block__string">81.6/s</span>{'\n'}
              {'\n'}
              <span className="code-block__keyword">✗</span> http_req_duration p(95) {'<'} 1000ms → <span className="code-block__keyword">FAIL</span>{'\n'}
              <span className="code-block__keyword">✗</span> http_req_failed {'<'} 5% → <span className="code-block__string">PASS</span> <span className="code-block__comment">(але на межі!)</span>
            </code>
          </pre>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div>
            <h3 className="font-heading fs-section font-bold text-red mb-base fade-in-delay-2">🔴 Проблеми</h3>
            <InfoCard
              icon={AlertTriangle}
              title="p95 = 1850ms — FAIL"
              description="5% користувачів чекають майже 2 секунди. Це неприйнятно — SLA порушено"
              color="red"
              delay={2}
            />
            <InfoCard
              icon={AlertTriangle}
              title="max = 12.4s — є bottleneck"
              description="Деякі запити виконуються 12+ секунд. Ймовірно, конкретний endpoint під навантаженням деградує"
              color="red"
              delay={3}
            />
            <InfoCard
              icon={AlertTriangle}
              title="Error rate 3.2% — на межі"
              description="3.2% помилок під навантаженням. Ще трохи більше юзерів — і буде > 5%"
              color="orange"
              delay={4}
            />
          </div>

          <div>
            <h3 className="font-heading fs-section font-bold text-green mb-base fade-in-delay-2">✅ Що добре / Що робити</h3>
            <InfoCard
              icon={CheckCircle2}
              title="p50 = 180ms — для більшості ОК"
              description="Медіана 180ms — половина юзерів отримує відповідь швидко. Базова продуктивність непогана"
              color="green"
              delay={2}
            />
            <InfoCard
              icon={Lightbulb}
              title="Знайти повільний endpoint"
              description="Додати per-endpoint thresholds. Ймовірно /api/schedule — найповільніший (JOIN, великий payload)"
              color="blue"
              delay={3}
            />
            <InfoCard
              icon={Lightbulb}
              title="Оптимізувати або масштабувати"
              description="Кешування, оптимізація SQL, індекси БД. Або горизонтальне масштабування (більше серверів)"
              color="purple"
              delay={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 10. MONITORING ----------

function MonitoringSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Cpu} title="Моніторинг ресурсів під час тесту" subtitle="Server Resource Monitoring" />

        <div className="outlined-card outlined-card--gradient-purple-pink mb-lg fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Performance тест показує <strong>симптоми</strong> (повільні відповіді, помилки).
            Моніторинг ресурсів показує <strong>причини</strong> (CPU 100%, RAM закінчилася).
          </p>
        </div>

        <div className="slide-grid slide-grid--2col">
          <div>
            <h3 className="font-heading fs-section font-bold text-blue mb-base fade-in-delay-1">Що моніторити</h3>
            <InfoCardFeatured
              icon={Cpu}
              title="CPU"
              description="< 70% — ОК, 70-90% — увага, > 90% — bottleneck. Може означати неоптимізований код або мало ядер"
              color="blue"
              delay={1}
            />
            <InfoCardFeatured
              icon={MemoryStick}
              title="RAM"
              description="Стабільне споживання — ОК. Постійне зростання — memory leak! Після Soak-тесту це видно найкраще"
              color="green"
              delay={2}
            />
            <InfoCardFeatured
              icon={HardDrive}
              title="Disk I/O"
              description="Високий disk I/O — БД читає з диска замість RAM. Може означати нестачу RAM для кешу БД"
              color="orange"
              delay={3}
            />
          </div>

          <div>
            <h3 className="font-heading fs-section font-bold text-green mb-base fade-in-delay-1">Інструменти</h3>
            <div className="code-block mb-base fade-in-delay-2">
              <pre style={{ margin: 0, lineHeight: 1.8 }}>
                <code>
                  <span className="code-block__comment"># Командний рядок (SSH на сервер):</span>{'\n'}
                  {'\n'}
                  <span className="code-block__keyword">htop</span>        <span className="code-block__comment"># CPU, RAM в реальному часі</span>{'\n'}
                  <span className="code-block__keyword">top</span>         <span className="code-block__comment"># класика, є скрізь</span>{'\n'}
                  <span className="code-block__keyword">vmstat 1</span>    <span className="code-block__comment"># CPU, memory, swap кожну секунду</span>{'\n'}
                  <span className="code-block__keyword">iostat 1</span>    <span className="code-block__comment"># disk I/O кожну секунду</span>{'\n'}
                  <span className="code-block__keyword">free -h</span>     <span className="code-block__comment"># вільна оперативна пам'ять</span>{'\n'}
                  {'\n'}
                  <span className="code-block__comment"># Для красивих дашбордів:</span>{'\n'}
                  <span className="code-block__keyword">Grafana</span> + <span className="code-block__keyword">Prometheus</span>{'\n'}
                  <span className="code-block__comment"># k6 → Prometheus → Grafana = повна картина</span>
                </code>
              </pre>
            </div>

            <div className="highlight-box highlight-box--blue fade-in-delay-3">
              <p className="highlight-box__text">
                Ідеально: запускайте <strong>k6</strong> з одного боку і <strong>htop</strong> на сервері з іншого.
                Бачите, як зростає CPU/RAM під навантаженням
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 11. FRONTEND PERFORMANCE ----------
function FrontendPerfSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={MonitorCheck} title="Frontend Performance" subtitle="Core Web Vitals & Lighthouse" />

        <div className="outlined-card outlined-card--gradient-purple-pink mb-lg fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Бекенд може відповідати за 50ms, але сторінка все одно вантажиться 5 секунд.
            Frontend performance — <strong>як швидко сторінка рендериться</strong> для користувача.
          </p>
        </div>

        <h3 className="font-heading fs-section font-bold text-blue mb-base fade-in-delay-1">Core Web Vitals (Google)</h3>

        <div className="slide-grid slide-grid--3col">
          <InfoCardFeatured
            icon={Eye}
            title="LCP"
            subtitle="Largest Contentful Paint"
            description="Як швидко рендериться найбільший видимий елемент (зазвичай hero-зображення або заголовок). 
            ✅ Good: <2.5s · ⚠️ Needs improvement: 2.5–4.0s · ❌ Poor: >4.0s"
            color="green"
            delay={1}
          />
          <InfoCardFeatured
            icon={Zap}
            title="INP"
            subtitle="Interaction to Next Paint"
            description="Затримка між дією користувача та оновленням UI. 
            ✅Good: <200ms · ⚠️Needs improvement: 200–500ms · ❌Poor: >500ms"
            color="blue"
            delay={2}
          />
          <InfoCardFeatured
            icon={Layers}
            title="CLS"
            subtitle="Cumulative Layout Shift"
            description={
              <>
                Візуальна стабільність — елементи не «стрибають».
                <br />
                ✅ Good: &lt;0.1
                <br />
                ⚠️ Needs improvement: 0.1–0.25
                <br /> ❌ Poor: &gt;0.25
              </>
            }
            color="purple"
            delay={3}
          />
        </div>

        <div className="slide-grid slide-grid--2col mt-lg">
          <div className="fade-in-delay-4">
            <h3 className="font-heading fs-section font-bold text-green mb-base">Як тестувати</h3>
            <div className="step-list">
              <div className="step-list__item">
                <span className="step-list__number">1</span>
                <div>
                  <strong>Відкрити сторінку в Incognito</strong>
                  <p style={{ margin: '4px 0 0 0', opacity: 0.85 }}>Розширення та кеш впливають на результати</p>
                </div>
              </div>
              <div className="step-list__item">
                <span className="step-list__number">2</span>
                <div>
                  <strong>Запустити аналіз</strong>
                  <p style={{ margin: '4px 0 0 0', opacity: 0.85 }}>Chrome: F12 → Lighthouse → Analyze page</p>
                  <p style={{ margin: '4px 0 0 0', opacity: 0.85 }}>Будь-який браузер: pagespeed.web.dev</p>
                </div>
              </div>
              <div className="step-list__item">
                <span className="step-list__number">3</span>
                <div>
                  <strong>Отримати звіт 0-100</strong>
                  <p style={{ margin: '4px 0 0 0', opacity: 0.85 }}>Performance, Accessibility, Best Practices, SEO</p>
                </div>
              </div>
              <div className="step-list__item">
                <span className="step-list__number">4</span>
                <div>
                  <strong>Переглянути рекомендації</strong>
                  <p style={{ margin: '4px 0 0 0', opacity: 0.85 }}>Конкретні поради: стиснути зображення, прибрати render-blocking JS тощо</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-delay-5">
            <h3 className="font-heading fs-section font-bold text-green mb-base">Інструменти</h3>
            <InfoCard
              icon={Search}
              title="Lighthouse (Chrome DevTools)"
              description="F12 → Lighthouse → Analyze. Тестує локально, включаючи localhost. Найточніші результати"
              color="green"
              delay={4}
            />
            <InfoCard
              icon={Globe}
              title="PageSpeed Insights"
              description="pagespeed.web.dev — працює з будь-якого браузера (Firefox, Safari). Вводите URL — отримуєте звіт"
              color="blue"
              delay={5}
            />
            <InfoCard
              icon={Flame}
              title="Firefox Profiler"
              description="F12 → Performance. Детальний профіль рендерингу та JS. Також є profiler.firefox.com для глибшого аналізу"
              color="orange"
              delay={6}
            />
            <InfoCard
              icon={Activity}
              title="Chrome DevTools → Performance"
              description="Детальний профіль: що блокує рендеринг, повільні скрипти, мережеві запити"
              color="purple"
              delay={7}
            />

            <div className="highlight-box highlight-box--purple mt-base">
              <p className="highlight-box__text">
                Як QA, мінімум: знати <strong>Core Web Vitals</strong>, вміти запустити
                <strong> Lighthouse</strong> або <strong>PageSpeed Insights</strong> та прочитати звіт
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 11.1. LIGHTHOUSE DEMO ----------

function LighthouseDemoSlide() {
  const ScoreCircle = ({ score, label, size = 80 }) => {
    const color = score >= 90 ? '#0cce6b' : score >= 50 ? '#ffa400' : '#ff4e42';
    const bgColor = score >= 90 ? 'rgba(12,206,107,0.1)' : score >= 50 ? 'rgba(255,164,0,0.1)' : 'rgba(255,78,66,0.1)';
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: size, height: size, borderRadius: '50%',
          border: `4px solid ${color}`, backgroundColor: bgColor,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 6px'
        }}>
          <span style={{ fontSize: size * 0.35, fontWeight: 700, color }}>{score}</span>
        </div>
        <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>{label}</span>
      </div>
    );
  };

  const MetricRow = ({ name, value, status }) => {
    const color = status === 'good' ? '#0cce6b' : status === 'warn' ? '#ffa400' : '#ff4e42';
    const icon = status === 'good' ? '🟢' : status === 'warn' ? '🟡' : '🔴';
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <span style={{ fontSize: '0.85rem' }}>{icon} {name}</span>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color }}>{value}</span>
      </div>
    );
  };

  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Search} title=" PageSpeed Insights Demo" subtitle="fmi-schedule.chnu.edu.ua — Desktop vs Mobile" />

        <div className="slide-grid slide-grid--2col">
          <div className="outlined-card fade-in-delay-1" style={{ borderColor: 'rgba(12,206,107,0.3)' }}>
            <h3 className="font-heading fs-section font-bold text-green mb-base" style={{ textAlign: 'center' }}>
              💻 Desktop
            </h3>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
              <ScoreCircle score={85} label="Perf" />
              <ScoreCircle score={95} label="A11y" />
              <ScoreCircle score={78} label="BP" />
              <ScoreCircle score={100} label="SEO" />
            </div>

            <MetricRow name="First Contentful Paint" value="0.3 s" status="good" />
            <MetricRow name="Largest Contentful Paint" value="1.6 s" status="warn" />
            <MetricRow name="Total Blocking Time" value="240 ms" status="warn" />
            <MetricRow name="Cumulative Layout Shift" value="0" status="good" />
            <MetricRow name="Speed Index" value="0.7 s" status="good" />

            <div className="highlight-box highlight-box--green mt-base">
              <p className="highlight-box__text" style={{ fontSize: '0.85rem' }}>
                <strong>85/100</strong> — сайт працює добре на десктопі
              </p>
            </div>
          </div>

          <div className="outlined-card fade-in-delay-2" style={{ borderColor: 'rgba(255,78,66,0.3)' }}>
            <h3 className="font-heading fs-section font-bold text-red mb-base" style={{ textAlign: 'center' }}>
              📱 Mobile
            </h3>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
              <ScoreCircle score={46} label="Perf" />
              <ScoreCircle score={94} label="A11y" />
              <ScoreCircle score={74} label="BP" />
              <ScoreCircle score={100} label="SEO" />
            </div>

            <MetricRow name="First Contentful Paint" value="7.5 s" status="bad" />
            <MetricRow name="Largest Contentful Paint" value="9.0 s" status="bad" />
            <MetricRow name="Total Blocking Time" value="460 ms" status="warn" />
            <MetricRow name="Cumulative Layout Shift" value="0" status="good" />
            <MetricRow name="Speed Index" value="7.5 s" status="bad" />

            <div className="highlight-box highlight-box--red mt-base">
              <p className="highlight-box__text" style={{ fontSize: '0.85rem' }}>
                <strong>46/100</strong> — той самий сайт, але на мобільному
              </p>
            </div>
          </div>
        </div>

        <div className="highlight-box highlight-box--purple mt-lg fade-in-delay-3">
          <p className="highlight-box__text">
            Один сайт — два різних результати. <strong>Завжди тестуйте Desktop і Mobile</strong>.
            <br />
            PageSpeed Insights емулює повільний мобільний інтернет (throttling) — це реальність для користувачів
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 12. BEST PRACTICES ----------

function BestPracticesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={CheckCircle2} title="Best Practices" subtitle="Найкращі практики Performance Testing" />

        <div className="slide-grid slide-grid--2col">
          <InfoCard
            icon={Database}
            title="Дані наближені до production"
            description="Тестуйте з реальним розміром БД і кількістю записів. 10 записів у тесті vs 1 мільйон у production — різні результати"
            color="green"
            delay={1}
          />
          <InfoCard
            icon={Target}
            title="Визначте SLA до тестування"
            description="Домовтесь: p95 < 500ms, error rate < 1%. Без SLA неможливо сказати, чи тест пройшов"
            color="green"
            delay={2}
          />
          <InfoCard
            icon={Server}
            title="Ізолюйте середовище"
            description="Ніхто інший не має навантажувати сервер під час тесту. Інакше результати будуть неточними"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={BarChart3}
            title="Починайте з baseline"
            description="Спочатку виміряйте поточний стан без оптимізацій. Потім порівнюйте після кожної зміни"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={GitBranch}
            title="Автоматизуйте в CI/CD"
            description="Регресійні performance тести: якщо новий коміт уповільнив API — дізнайтесь одразу, а не на production"
            color="green"
            delay={5}
          />
          <InfoCard
            icon={Cpu}
            title="Моніторте ресурси серверу"
            description="CPU, RAM, Disk I/O під час тесту. Без цього ви бачите тільки симптоми, але не причини"
            color="green"
            delay={6}
          />
        </div>
      </div>
    </div>
  );
}

// ---------- 13. COMMON MISTAKES ----------

function CommonMistakesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={AlertTriangle} title="Типові помилки" subtitle="Common Mistakes in Performance Testing" />

        <div className="slide-grid slide-grid--2col">
          <InfoCard
            icon={XCircle}
            title="Тестування на локальній машині"
            description="Localhost — це не production. Немає мережевої затримки, інші ресурси. Результати будуть оптимістично неточними"
            color="red"
            delay={1}
          />
          <InfoCard
            icon={XCircle}
            title="Ігнорування ramp-up"
            description="Відразу 1000 users замість поступового збільшення — це DoS-атака, а не реалістичний тест"
            color="red"
            delay={2}
          />
          <InfoCard
            icon={XCircle}
            title="Average замість percentiles"
            description="Average приховує проблеми. Завжди дивіться на p95 та p99 — це досвід ваших найгірших користувачів"
            color="red"
            delay={3}
          />
          <InfoCard
            icon={XCircle}
            title="Без think time / sleep"
            description="Реальні юзери думають, читають, клікають. Без sleep навантаження нереалістично завищене"
            color="red"
            delay={4}
          />
          <InfoCard
            icon={XCircle}
            title="Одноразове тестування"
            description="Один раз протестували і забули. Performance може деградувати з кожним релізом — тестуйте регулярно"
            color="red"
            delay={5}
          />
          <InfoCard
            icon={XCircle}
            title="Тестування в кінці проєкту"
            description="Знайшли bottleneck перед релізом — але переписувати архітектуру вже пізно. Тестуйте рано і часто"
            color="red"
            delay={6}
          />
        </div>
      </div>
    </div>
  );
}

// ---------- 14. SUMMARY ----------

function SummarySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={CheckCircle2} title="Підсумки" subtitle="Summary" />

        <div className="summary-list">
          {[
            {
              icon: <Gauge />,
              text: 'Performance Testing перевіряє як система працює під навантаженням, а не лише «чи працює»',
            },
            {
              icon: <Layers />,
              text: 'Основні типи: Load, Stress, Spike, Soak — кожен для свого сценарію',
            },
            {
              icon: <BarChart3 />,
              text: 'Ключові метрики: Response Time, Throughput, Error Rate. Завжди дивіться на Percentiles (p95/p99), а не Average',
            },
            {
              icon: <Settings />,
              text: 'JMeter — GUI, enterprise, багато протоколів. k6 — JavaScript, CLI, легкий, CI/CD-friendly',
            },
            {
              icon: <Globe />,
              text: 'Реальний тест: один юзер на fmi-schedule = 5-6 HTTP-запитів. http.batch() імітує це в k6',
            },
            {
              icon: <Cpu />,
              text: 'Моніторинг: CPU, RAM, Disk I/O на сервері — щоб бачити причини, а не тільки симптоми',
            },
            {
              icon: <MonitorCheck />,
              text: 'Frontend: Core Web Vitals (LCP, INP, CLS) та Lighthouse — базовий мінімум для QA',
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

// ---------- 15. QUESTIONS ----------

function QuestionsSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
      <div className="title-slide__icon-wrapper">
        <MessageSquare />
      </div>
      <h1 className="title-slide__title">Питання?</h1>
      <h2 className="title-slide__subtitle">Лекція 10 — Performance Testing</h2>
      <div className="title-slide__badge">
        <p>🔐 Наступна тема: Security Testing</p>
      </div>
    </div>
  );
}