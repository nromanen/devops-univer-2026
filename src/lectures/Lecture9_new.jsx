// Lecture9.jsx — E2E: Auth, Fixtures, SQL (refactored with shared components)
import React from 'react';
import {
  Monitor, Target, Layers, MousePointerClick, Search, Code2, FileCode,
  CheckCircle2, XCircle, ArrowRight, Zap, Globe, Eye, Play, Settings,
  FolderTree, BookOpen, AlertTriangle, Lightbulb, LayoutTemplate, Box,
  Terminal, Puzzle, Timer, RefreshCw, ChevronRight, Smartphone, Database,
  Braces, Hash, CircleDot, TestTube, Workflow, Shield, Cpu, Network,
  KeyRound, Upload, Download, Table2, FileText, GitBranch, ToggleLeft,
  UserCheck, LogIn, ShoppingCart, CreditCard, Mail, Filter, Trash2,
  RotateCcw, ClipboardList, ServerCrash, Lock, Unlock, Bug, Wrench,
  Plus, Minus, Edit, Users, Calendar, List, BarChart3, KeySquare,
  MailCheck, ShieldCheck, Repeat, Fingerprint, FileJson, Rocket, Stethoscope,
  Cookie, Info
} from 'lucide-react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';

const slides = [
  { id: 1, title: 'Титульний слайд', component: TitleSlide },
  { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
  { id: 3, title: 'Recap: Playwright основи', component: RecapSlide },
  { id: 4, title: 'Складні сценарії — огляд', component: AdvancedScenariosOverviewSlide },
  { id: '4_1', title: 'UI vs API Login', component: UiVsApiLoginSlide },
  { id: '4_2', title: 'API Login в деталях', component: ApiLoginDetailsSlide },
  { id: '4_3', title: 'Де зберігається сесія', component: SessionStorageOptionsSlide },
  { id: '4_31', title: 'Що потрібно з localStorage', component: CaptureReferenceStateSlide },
  { id: '4_4', title: 'JWT → localStorage', component: JwtLocalStorageSlide },
  { id: '4_5', title: 'Діагностика auth', component: DebuggingAuthSlide },
  { id: '4_6', title: 'Multi-step Workflows', component: MultiStepSlide },
  { id: '4_7', title: 'File Upload/Download', component: FileUploadSlide },
  { id: '4_8', title: 'API Mocking', component: ApiMockingSlide },
  { id: '4_9', title: 'Multi-tab / Popup', component: MultiTabSlide },
  { id: 5, title: 'Fixtures та Hooks', component: FixturesSlide },
  { id: '5_1', title: 'Від beforeEach до fixtures', component: SharedStateVsFixturesSlide },
  { id: '5_2', title: 'Custom Fixtures — повний приклад', component: CustomFixturesSlide },
  { id: 6, title: 'Навіщо SQL для тестувальника', component: WhySqlSlide },
  { id: '6_1', title: 'Users: token & password', component: UsersLogicSlide },
  { id: '6_2', title: 'SQL-перевірки для QA', component: SqlVerificationSlide },
  { id: '6_3', title: 'SQL в E2E тестах', component: SqlInTestsSlide },
  { id: 7, title: 'Повний приклад: реєстрація + email', component: RegistrationFlowSlide },
  { id: '7_1', title: 'Playwright + DB setup', component: PlaywrightDbSetupSlide },
  { id: 8, title: 'Data-Driven Tests', component: DataDrivenTestsSlide },
  { id: 9, title: 'Best Practices', component: BestPracticesSlide },
  { id: 10, title: 'Типові помилки', component: CommonMistakesSlide },
  { id: 11, title: 'Підсумки', component: SummarySlide },
  { id: 12, title: 'Питання?', component: QuestionsSlide },
];

export default function Lecture9() {
  return <LectureLayout slides={slides} />;
}

// ============================================
// 1. TITLE
// ============================================

function TitleSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
      <div className="title-slide__icon-wrapper">
        <KeyRound />
      </div>
      <h1 className="title-slide__title">
        E2E: авторизація, fixtures і БД
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 9 — Тестування програмного забезпечення
      </h2>
      <p className="title-slide__english">
        Authentication, Custom Fixtures, and Database-Driven Testing
      </p>
      <div className="title-slide__badge">
        <p>🎭 Те, як реально пишуть тести — з усіма граблями та лайфхаками</p>
      </div>
    </div>
  );
}

// ============================================
// 2. OBJECTIVES
// ============================================

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
                Авторизація в тестах — як насправді
                <span className="step-list__subtitle"> — UI vs API login, storageState</span>
              </h3>
              <p className="step-list__description">
                Два підходи до логіну, коли який обрати, і як збирати localStorage руками
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--green fade-in-delay-2">
            <div className="step-list__number step-list__number--green">2</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--green">
                Складні сценарії
                <span className="step-list__subtitle"> — Advanced E2E Patterns</span>
              </h3>
              <p className="step-list__description">
                Multi-step flows, file upload, API mocking, кілька вкладок
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--orange fade-in-delay-3">
            <div className="step-list__number step-list__number--orange">3</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--orange">
                Custom Fixtures та data-driven тести
                <span className="step-list__subtitle"> — Test Infrastructure</span>
              </h3>
              <p className="step-list__description">
                base.extend() замість beforeEach, параметризовані тести через масив даних
              </p>
            </div>
          </div>

          <div className="step-list__item step-list__item--purple fade-in-delay-4">
            <div className="step-list__number step-list__number--purple">4</div>
            <div className="step-list__content">
              <h3 className="step-list__title step-list__title--purple">
                SQL для QA + повний приклад з БД
                <span className="step-list__subtitle"> — Database-driven Testing</span>
              </h3>
              <p className="step-list__description">
                Навіщо тестувальнику SQL, як підключати БД до тестів, реальний приклад з email confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 3. RECAP
// ============================================

function RecapSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={RotateCcw} title="Що ми вже знаємо" subtitle="Recap: Previous Lectures" />

        <div className="slide-grid slide-grid--3col">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="font-heading text-blue fs-section mb-sm">🎭 Playwright</h3>
            <p className="text-secondary fs-body-sm">
              Встановлення, конфігурація, запуск тестів на різних браузерах
            </p>
          </div>
          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="font-heading text-green fs-section mb-sm">🔍 Селектори</h3>
            <p className="text-secondary fs-body-sm">
              getByRole, getByText, getByTestId — як вибирати стабільно
            </p>
          </div>
          <div className="outlined-card outlined-card--purple fade-in-delay-3">
            <h3 className="font-heading text-purple fs-section mb-sm">📦 POM</h3>
            <p className="text-secondary fs-body-sm">
              Page Object Model — ізоляція селекторів та дій від тестів
            </p>
          </div>
        </div>

        <div className="mt-xl fade-in-delay-4">
          <HighlightBox color="blue" icon={Lightbulb}>
            Сьогодні — те, про що <strong>не часто пишуть в туторіалах</strong>: реальні проблеми й рішення,
            які виникають при написанні тестів у проєкті.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4. ADVANCED SCENARIOS OVERVIEW
// ============================================

function AdvancedScenariosOverviewSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Layers} title="Складні сценарії" subtitle="What We'll Cover Today" />

        <p className="text-secondary fs-body-lg mb-xl fade-in-delay-1">
          У реальних проєктах E2E-тести виходять далеко за межі «клікнув → перевірив».
          Сьогодні розберемо найтиповіші сценарії та покажемо, як вони виглядають в робочому проєкті.
        </p>

        <div className="slide-grid slide-grid--3col">
          <InfoCardFeatured
            icon={KeyRound}
            title="Авторизація"
            description="Два підходи: UI login і API login. Коли який обирати."
            color="blue"
            delay={2}
          />
          <InfoCardFeatured
            icon={Fingerprint}
            title="JWT + localStorage"
            description="Як фронт зберігає сесію і як це відтворити в тестах"
            color="cyan"
            delay={3}
          />
          <InfoCardFeatured
            icon={Stethoscope}
            title="Діагностика auth"
            description="Що робити, коли storageState 'не працює' — типові пастки"
            color="red"
            delay={4}
          />
          <InfoCardFeatured
            icon={Puzzle}
            title="Custom Fixtures"
            description="base.extend() — канонічний Playwright-патерн для тестових утиліт"
            color="purple"
            delay={5}
          />
          <InfoCardFeatured
            icon={Repeat}
            title="Data-Driven Tests"
            description="Один шаблон + масив даних = N автоматично згенерованих тестів"
            color="orange"
            delay={6}
          />
          <InfoCardFeatured
            icon={Database}
            title="SQL + Playwright"
            description="Перевірка даних у БД, seed, cleanup, повний інтеграційний тест"
            color="green"
            delay={7}
          />
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4.1 — UI vs API LOGIN
// ============================================

function UiVsApiLoginSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={KeyRound} title="Авторизація: два підходи" subtitle="UI Login vs API Login" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Перед тим як писати тести, треба вирішити <strong>як залогінити юзера</strong>.
          Є два принципово різні підходи — обидва робочі, але для різних задач.
        </p>

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-2">
            <h3 className="font-heading text-blue fs-section mb-base">🖱️ UI Login</h3>
            <CodeBlock title="auth-ui.setup.ts" color="blue">{`// Відкриваємо сторінку, заповнюємо форму
setup('login via UI', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', 'manager@gmail.com');
  await page.fill('#password', 'Qwerty!123');
  await page.click('button[type="submit"]');

  // Чекаємо, щоб фронт закінчив логін
  await page.waitForURL('/dashboard');

  // Playwright сам збирає cookies + localStorage
  await page.context().storageState({
    path: 'auth/user.json'
  });
});`}</CodeBlock>

            <div className="mt-base">
              <InfoCard
                icon={CheckCircle2}
                title="Плюси"
                description="Тестує реальний флоу логіну. Автоматично збирає все — cookies, localStorage, sessionStorage. Не залежить від бекенд-контракту."
                color="blue"
                delay={0}
              />
            </div>
            <div className="mt-sm">
              <InfoCard
                icon={XCircle}
                title="Мінуси"
                description="Повільно (3–5 секунд). Залежить від UI — якщо форма зміниться, setup упаде. Навантажує auth-сервіс."
                color="red"
                delay={0}
              />
            </div>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading text-green fs-section mb-base">⚡ API Login</h3>
            <CodeBlock title="auth-api.setup.ts" color="green">{`// Логін напряму через HTTP-запит
setup('login via API', async () => {
  const ctx = await request.newContext({
    baseURL: process.env.API_BASE_URL
  });

  const response = await ctx.post('/auth/sign-in', {
    data: {
      email: 'manager@gmail.com',
      password: 'Qwerty!123'
    }
  });

  const { token } = await response.json();
  // ... далі зберігаємо в localStorage руками
});`}</CodeBlock>

            <div className="mt-base">
              <InfoCard
                icon={CheckCircle2}
                title="Плюси"
                description="Швидко (~100мс). Без браузера. Не ламається від змін UI. Легко параметризувати (різні юзери, різні ролі)."
                color="green"
                delay={0}
              />
            </div>
            <div className="mt-sm">
              <InfoCard
                icon={XCircle}
                title="Мінуси"
                description="Не тестує сам флоу логіну. Треба знати контракт API. Доведеться вручну збирати localStorage (наступні слайди)."
                color="red"
                delay={0}
              />
            </div>
          </div>
        </div>

        <div className="mt-base fade-in-delay-4">
          <HighlightBox color="purple" icon={Lightbulb}>
            <strong>Практика:</strong> один <em>окремий</em> тест через UI (щоб покрити флоу логіну),
            а всі інші — через API для швидкості. Логін не має бути overhead'ом у кожному тесті.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4.2 — API LOGIN + storageState
// ============================================

function ApiLoginDetailsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Rocket} title="API Login в деталях" subtitle="Швидкий логін через request.newContext()" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Повна схема: окремий <code className="font-mono text-cyan">setup</code>-проєкт робить API-login
          і зберігає <code className="font-mono text-cyan">storageState</code>, решта тестів стартують залогіненими.
        </p>

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-2">
            <CodeBlock title="tests/helpers/auth.ts" color="blue">{`import { request } from '@playwright/test';

export interface AuthResponse {
  email: string;
  token: string;
}

export async function signInViaApi(
  credentials: { email: string; password: string }
): Promise<AuthResponse> {
  const apiBaseURL = process.env.API_BASE_URL;
  if (!apiBaseURL) {
    throw new Error('API_BASE_URL is not set');
  }

  const context = await request.newContext({
    baseURL: apiBaseURL
  });

  try {
    const response = await context.post('/auth/sign-in', {
      data: credentials,
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok()) {
      const body = await response.text();
      throw new Error(
        \`Sign-in failed: \${response.status()}\\n\${body}\`
      );
    }

    return await response.json();
  } finally {
    await context.dispose();
  }
}`}</CodeBlock>
          </div>

          <div className="fade-in-delay-3">
            <CodeBlock title="playwright.config.ts" color="green">{`export default defineConfig({
  projects: [
    {
      name: 'setup',
      testMatch: /.*\\.setup\\.ts/,
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        storageState: 'tests/.auth/manager.json',
      },
      dependencies: ['setup'],
      testMatch: /.*\\.spec\\.ts/,
    },
  ],
});`}</CodeBlock>

            <div className="mt-base">
              <HighlightBox color="yellow" icon={Lightbulb}>
                <strong>dependencies: ['setup']</strong> гарантує, що setup виконається
                <em> перед</em> браузерними тестами. Якщо setup падає — тести навіть не стартують.
              </HighlightBox>
            </div>

            <div className="mt-base">
              <HighlightBox color="red" icon={AlertTriangle}>
                <strong>API_BASE_URL ≠ baseURL.</strong> UI-запити йдуть на <code className="font-mono">baseURL</code>,
                API — на <code className="font-mono">API_BASE_URL</code>. Може бути один і той самий домен,
                але архітектурно це різні речі.
              </HighlightBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4.3 — DECODING JWT → LOCALSTORAGE
// ============================================

function SessionStorageOptionsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Lock} title="Де зберігається сесія" subtitle="Cookies vs localStorage vs sessionStorage" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Перед тим як відтворювати auth-стан у тестах, треба зрозуміти <strong>де</strong> саме фронт зберігає
          сесію. Від цього залежить, що саме треба розташувати в <code className="font-mono text-cyan">storageState</code>.
        </p>

        <div className="slide-grid slide-grid--3col mb-base">
          <InfoCardFeatured
            icon={Cookie}
            title="Cookies (HttpOnly)"
            subtitle="Класичний web, найбезпечніше"
            description="Сервер ставить Set-Cookie у відповідь на логін. Браузер автоматично додає cookie до кожного запиту."
            color="blue"
            delay={2}
          >
            <p className="info-card__text mt-sm">
              <strong>JS не має доступу</strong> до HttpOnly-куки — захист від XSS.
              Playwright підхоплює автоматично через <code className="font-mono">storageState</code>.
            </p>
          </InfoCardFeatured>

          <InfoCardFeatured
            icon={Database}
            title="localStorage"
            subtitle="SPA, мобільні додатки"
            description="JS-код сам зберігає токен (JWT) у localStorage і додає Authorization-заголовок до API-запитів."
            color="green"
            delay={3}
          >
            <p className="info-card__text mt-sm">
              Зручно для SPA, але <strong>вразливо до XSS</strong> — будь-який JS на сторінці може прочитати токен.
            </p>
          </InfoCardFeatured>

          <InfoCardFeatured
            icon={Timer}
            title="sessionStorage"
            subtitle="Тимчасова сесія"
            description="Те саме, що localStorage, але зникає при закритті вкладки. Рідше використовується."
            color="purple"
            delay={4}
          >
            <p className="info-card__text mt-sm">
              Для "швидких" сесій без <em>remember me</em>. Також підтримується у <code className="font-mono">storageState</code>.
            </p>
          </InfoCardFeatured>
        </div>

        <h3 className="font-heading text-orange fs-section mb-base fade-in-delay-5">
          Як зрозуміти, де зберігає ВАШ проєкт?
        </h3>

        <div className="slide-grid slide-grid--2col fade-in-delay-5">
          <CodeBlock title="DevTools checklist" color="orange">{`// 1. Відкрий застосунок у браузері
// 2. Залогінься вручну
// 3. F12 → вкладка Application (Storage у FF)
//
// Дивись по черзі:
//   ☐ Cookies        → JSESSIONID, session,
//                      auth_token?
//   ☐ Local Storage  → token, accessToken, jwt?
//   ☐ Session Storage → рідко, але перевір
//
// 4. Network → перший API-запит після логіну:
//   ☐ Authorization: Bearer ... → localStorage
//   ☐ Cookie: ...               → cookies
//   ☐ І те, і те                → комбінація`}</CodeBlock>

          <div className="flex flex-col gap-base">
            <HighlightBox color="blue" icon={Info}>
              <strong>Cookies — найпростіше для тестів.</strong> Playwright збирає автоматично через
              <code className="font-mono"> context.storageState()</code> після UI-логіну.
            </HighlightBox>
            <HighlightBox color="yellow" icon={Lightbulb}>
              <strong>localStorage — складніше.</strong> Треба знати, які ключі використовує фронт,
              і класти їх вручну.
            </HighlightBox>
            <HighlightBox color="red" icon={AlertTriangle}>
              <strong>Комбінація — найчастіше в реальності.</strong> CSRF-token у cookie + JWT у localStorage.
              Треба збирати обидва.
            </HighlightBox>
          </div>
        </div>

        <div className="mt-base fade-in-delay-6">
          <HighlightBox color="purple" icon={Lightbulb}>
            <strong>В нашому прикладі</strong> застосунок зберігає JWT у localStorage — тому далі
            розглянемо саме цей випадок. Той самий принцип (<em>подивитись → відтворити</em>)
            працює для cookies і sessionStorage.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4.31 — CAPTURE REFERENCE STATE
// ============================================

function CaptureReferenceStateSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Fingerprint} title="Як дізнатись, що повинно бути в localStorage?" subtitle="Capture Reference State" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Перед тим як писати API-login руками, зроби <strong>одноразовий UI-login</strong> і дай Playwright
          зібрати state автоматично. Відкриєш файл — побачиш, який саме формат потрібен.
        </p>

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-2">
            <h3 className="font-heading text-blue fs-section mb-base">Крок 1. Одноразовий UI-login</h3>
            <CodeBlock title="tests/capture-state.setup.ts" color="blue">{`// ЗАПУСТИТИ ОДИН РАЗ — отримати reference
setup('capture state', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', 'manager@gmail.com');
  await page.fill('#password', 'Qwerty!123');
  await page.click('button[type="submit"]');

  // ВАЖЛИВО: дочекатись, щоб фронт
  // закінчив ініціалізацію
  await page.waitForURL(/\\/schedule/);
  await page.getByRole('button',
    { name: /@/ }).waitFor();

  // Playwright сам збере cookies + localStorage
  await page.context().storageState({
    path: 'tests/.auth/reference.json'
  });
});`}</CodeBlock>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading text-green fs-section mb-base">Крок 2. Відкрити файл — побачити формат</h3>
            <CodeBlock title="tests/.auth/reference.json" color="green">{`{
  "cookies": [],
  "origins": [{
    "origin": "https://app.example.com",
    "localStorage": [
      { "name": "token",
        "value": "Bearer_eyJ..." },
      { "name": "email",
        "value": "manager@gmail.com" },
      { "name": "userRole",
        "value": "ROLE_MANAGER" },
      { "name": "expirationDate",
        "value": "Mon Apr 20 2026 20:54:02..." }
    ]
  }]
}

// → Тепер точно знаємо:
//   які ключі, які значення, які формати`}</CodeBlock>
          </div>
        </div>

        <div className="mt-base fade-in-delay-4">
          <HighlightBox color="purple" icon={Lightbulb}>
            <strong>Практика:</strong> робимо reference.json руками, копіюємо структуру в auth.setup.ts,
            замінюємо значення на динамічні (email з fixture, token з API).
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4.4 — JWT → LOCALSTORAGE
// ============================================

function JwtLocalStorageSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Fingerprint} title="JWT → localStorage" subtitle="Що насправді зберігає фронт" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          API повертає тільки <code className="font-mono text-cyan">{'{ email, token }'}</code>, але фронт
          записує в localStorage <strong>кілька ключів</strong>. Якщо записати тільки <code className="font-mono">token</code> —
          застосунок на старті виявить "неповну сесію" і зробить logout.
        </p>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="fade-in-delay-2">
            <h3 className="font-heading text-blue fs-section mb-base">Що бачимо в DevTools після ручного логіну</h3>
            <CodeBlock title="F12 → Application → Local Storage" color="blue">{`{
  token:          "Bearer_eyJhbGci...",
  email:          "manager@gmail.com",
  userRole:       "ROLE_MANAGER",
  expirationDate: "Mon Apr 20 2026 20:54:02...",
  i18nextLng:     "en"          // locale
  roomTableColumnSize: "..."    // UI prefs
}

// Auth-поля: token, email, userRole, expirationDate
// Решта — UI preferences, не стосуються auth`}</CodeBlock>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading text-purple fs-section mb-base">Звідки ці значення беруться</h3>
            <CodeBlock title="JWT payload (декодований)" color="purple">{`// декодуємо base64url, частина між крапками
{
  "sub":   "manager@gmail.com",  // → email
  "roles": "ROLE_MANAGER",       // → userRole
  "iat":   1776622432,
  "exp":   1776708832            // → expirationDate
}

// Фронт декодує токен один раз при логіні
// і розкладає поля в localStorage — щоб не парсити
// JWT при кожному рендері`}</CodeBlock>
          </div>
        </div>

        <h3 className="font-heading text-green fs-section mb-base fade-in-delay-4">
          auth.setup.ts — збираємо localStorage вручну
        </h3>
        <div className="fade-in-delay-4">
          <CodeBlock title="tests/auth.setup.ts" color="green">{`import { test as setup } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { signInViaApi } from './helpers/auth';

function decodeJwtPayload(token: string) {
  const payload = token.split('.')[1];
  const json = Buffer.from(payload, 'base64url').toString('utf-8');
  return JSON.parse(json);
}

setup('authenticate as manager', async () => {
  const baseURL = process.env.BASE_URL!;

  // 1. Логін через API → отримуємо JWT
  const auth = await signInViaApi({
    email: 'manager@gmail.com',
    password: 'Qwerty!123'
  });

  // 2. Декодуємо payload — дістаємо ті самі поля, що й фронт
  const payload = decodeJwtPayload(auth.token);

  // 3. Формуємо storageState у форматі, який очікує Playwright
  const storageState = {
    cookies: [],
    origins: [{
      origin: baseURL,
      localStorage: [
        { name: 'token',          value: \`Bearer_\${auth.token}\` },
        { name: 'email',          value: auth.email },
        { name: 'userRole',       value: payload.roles },
        { name: 'expirationDate', value: new Date(payload.exp * 1000).toString() },
      ],
    }],
  };

  fs.mkdirSync('tests/.auth', { recursive: true });
  fs.writeFileSync('tests/.auth/manager.json', JSON.stringify(storageState, null, 2));
});`}</CodeBlock>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4.5 — DEBUGGING STORAGESTATE
// ============================================

function DebuggingAuthSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Stethoscope} title="Діагностика auth" subtitle="Коли storageState 'не працює'" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Типовий симптом: тест заходить на сторінку, але бачить кнопку «Login» замість залогіненого UI.
          Можливих причин кілька — ось як системно знайти.
        </p>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="fade-in-delay-2">
            <h3 className="font-heading text-orange fs-section mb-base">🔍 Debug-тест</h3>
            <CodeBlock title="debug-auth.spec.ts" color="orange">{`test('debug auth state', async ({ page, context }) => {
  // 1. Що Playwright ЗАВАНТАЖИВ з файлу?
  const before = await context.storageState();
  console.log('STATE LOADED:',
    JSON.stringify(before, null, 2));

  // 2. Чи є токен ДО переходу?
  await page.goto('/schedule');

  // 3. Що залишилось в localStorage ПІСЛЯ?
  const storage = await page.evaluate(() => {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      items[key] = localStorage.getItem(key);
    }
    return items;
  });
  console.log('STORAGE AFTER GOTO:', storage);
});`}</CodeBlock>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading text-red fs-section mb-base">🐛 Типові причини</h3>
            <div className="flex flex-col gap-sm">
              <DefBadge
                term="State LOADED порожній"
                description="storageState шлях неправильний, або файл не згенеровано. Перевір конфіг, перезапусти setup."
                color="red"
              />
              <DefBadge
                term="State є, origin не той"
                description="BASE_URL в .env ≠ хосту, куди йде тест. Playwright застосовує localStorage тільки для збіжних origin."
                color="orange"
              />
              <DefBadge
                term="State є, localStorage чиститься"
                description="Фронт при старті бачить «неповну сесію» і робить logout. Треба додати відсутні ключі."
                color="yellow"
              />
              <DefBadge
                term="Все є, але API повертає 401"
                description="Токен прострочений (exp) або формат префіксу не той (Bearer vs Bearer_). Перегенеруй state."
                color="purple"
              />
            </div>
          </div>
        </div>

        <div className="fade-in-delay-4">
          <HighlightBox color="blue" icon={Lightbulb}>
            <strong>Золоте правило діагностики:</strong> подивись, що зберігає фронт у localStorage при <em>ручному</em> логіні
            (F12 → Application → Local Storage), і точно те саме поклади у <code className="font-mono">auth.setup.ts</code>.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4.6 — MULTI-STEP WORKFLOWS
// ============================================

function MultiStepSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Workflow} title="Multi-step Workflows" subtitle="Ланцюжки дій через test.step" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Реальні сценарії часто складаються з кількох кроків: checkout, wizard-форми, реєстрація.
          <code className="font-mono text-cyan"> test.step()</code> розбиває довгий тест на логічні блоки — їх окремо видно у trace та звіті.
        </p>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="fade-in-delay-2">
            <h3 className="font-heading text-green fs-section mb-base">Структурований через POM і steps</h3>
            <CodeBlock title="checkout.spec.ts" color="green">{`test('checkout flow', async ({ page }) => {
  const cart = new CartPage(page);
  const shipping = new ShippingPage(page);
  const payment = new PaymentPage(page);

  await test.step('Add item to cart', async () => {
    await cart.open();
    await cart.addFirstProduct();
    await expect(cart.badge).toHaveText('1');
  });

  await test.step('Fill shipping info', async () => {
    await cart.proceedToCheckout();
    await shipping.fillAddress('вул. Тестова, 42', 'Київ');
    await shipping.selectDelivery('nova-poshta');
  });

  await test.step('Pay and confirm', async () => {
    await payment.enterCard('4242424242424242', '12/28', '123');
    await payment.submit();
    await expect(payment.successMsg)
      .toContainText('Замовлення оформлено');
  });
});`}</CodeBlock>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading text-blue fs-section mb-base">Що дає test.step</h3>
            <div className="flex flex-col gap-base">
              <InfoCard
                icon={Eye}
                title="Читабельний trace"
                description="У Trace Viewer кожен step — окрема секція. Видно, на якому саме кроці впав тест."
                color="blue"
                delay={0}
              />
              <InfoCard
                icon={FileText}
                title="Чистіший звіт"
                description="У HTML-звіті тест розбитий на named-sections замість «стіни» з дій підряд."
                color="green"
                delay={0}
              />
              <InfoCard
                icon={BookOpen}
                title="Тест читається як сценарій"
                description="Add item → Fill shipping → Pay — зрозуміло навіть не-тестувальнику."
                color="purple"
                delay={0}
              />
            </div>
          </div>
        </div>

        <div className="fade-in-delay-4">
          <HighlightBox color="yellow" icon={AlertTriangle}>
            <strong>Довгі тести все одно крихкі.</strong> <code className="font-mono">test.step</code> покращує читабельність,
            але не розв'язує проблему нестабільності. Якщо flow часто змінюється — розбивай на менші тести зі спільним setup через fixture.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4.7 — FILE UPLOAD / DOWNLOAD
// ============================================

function FileUploadSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Upload} title="File Upload / Download" subtitle="Робота з файлами у тестах" />

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-1">
            <h3 className="font-heading text-blue fs-section mb-base">📤 Upload</h3>
            <CodeBlock title="upload.spec.ts" color="blue">{`// Простий upload через input[type="file"]
test('upload avatar', async ({ page }) => {
  await page.goto('/profile/settings');

  await page.setInputFiles(
    'input[type="file"]',
    'tests/fixtures/avatar.png'
  );

  await expect(page.locator('.avatar-preview'))
    .toBeVisible();
  await page.click('[data-testid="save-btn"]');
  await expect(page.getByRole('alert'))
    .toHaveText('Аватар оновлено');
});

// Кілька файлів одразу
await page.setInputFiles('input[type="file"]', [
  'tests/fixtures/doc1.pdf',
  'tests/fixtures/doc2.pdf',
]);

// Файл з буфера (без фізичного файлу)
await page.setInputFiles('input[type="file"]', {
  name: 'test.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('Hello world'),
});`}</CodeBlock>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading text-green fs-section mb-base">📥 Download</h3>
            <CodeBlock title="download.spec.ts" color="green">{`test('download report', async ({ page }) => {
  await page.goto('/reports');

  // Чекаємо на подію download
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('[data-testid="export-csv"]'),
  ]);

  // Перевіряємо запропоноване ім'я файлу
  expect(download.suggestedFilename())
    .toBe('report-2025.csv');

  // Зберігаємо і читаємо вміст
  const path = await download.path();
  const content = fs.readFileSync(path, 'utf-8');

  // Асерти на вміст
  expect(content).toContain('Student Name');
  expect(content).toContain('Grade');

  // Або зберегти в зручне місце
  await download.saveAs('./downloads/report.csv');
});`}</CodeBlock>
          </div>
        </div>

        <div className="mt-base fade-in-delay-3">
          <HighlightBox color="blue" icon={Lightbulb}>
            Drag &amp; drop файлів через <code className="font-mono">page.setInputFiles()</code> не працює —
            треба руками диспатчити <code className="font-mono">DataTransfer</code> подію.
            Рідкісний кейс, детально — у документації Playwright.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4.8 — API MOCKING
// ============================================

function ApiMockingSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Network} title="API Mocking &amp; Intercept" subtitle="page.route() — перехоплення запитів" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          <code className="font-mono text-cyan">page.route()</code> дозволяє перехоплювати HTTP-запити та повертати
          фіктивні відповіді — для тестування edge cases, помилок, повільних відповідей без зміни реального бекенду.
        </p>

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-2">
            <h3 className="font-heading text-purple fs-section mb-base">Mock цілої відповіді</h3>
            <CodeBlock title="mock-error.spec.ts" color="purple">{`test('show error when API fails', async ({ page }) => {
  // Перехоплюємо запит до API
  await page.route('**/api/students', (route) => {
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({
        error: 'Internal Server Error'
      }),
    });
  });

  await page.goto('/students');

  // Перевіряємо, що UI показує помилку
  await expect(page.getByRole('alert'))
    .toContainText('Помилка завантаження');
});

// Повільна відповідь (для тестування loader-ів)
await page.route('**/api/data', async (route) => {
  await new Promise(r => setTimeout(r, 3000));
  await route.continue();
});`}</CodeBlock>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading text-orange fs-section mb-base">Модифікація реальної відповіді</h3>
            <CodeBlock title="mock-modify.spec.ts" color="orange">{`test('modify API response', async ({ page }) => {
  await page.route('**/api/schedule', async (route) => {
    // Виконуємо справжній запит
    const response = await route.fetch();
    const json = await response.json();

    // Модифікуємо дані
    json.lessons[0].teacher = 'Тестовий Т. Т.';

    // Повертаємо модифіковану відповідь
    route.fulfill({ response, json });
  });

  await page.goto('/schedule');
  await expect(page.locator('.lesson-card').first())
    .toContainText('Тестовий Т. Т.');
});

// Дочекатись, що бекенд РЕАЛЬНО зберіг дані
// (не тільки що UI показав "Saved!")
test('department saved in DB', async ({ page }) => {
  const responsePromise = 
    page.waitForResponse('**/api/departments');

  await page.fill('#name', 'Math');
  await page.click('#create-btn');
  await responsePromise;  // ← бекенд завершив обробку

  // Тепер безпечно читати з БД — race з асинхронним
  // запитом гарантовано уникнений
  const { rows } = await pool.query(
    'SELECT name FROM departments WHERE name = $1',
    ['Math']
  );
  expect(rows).toHaveLength(1);
});`}</CodeBlock>
          </div>
        </div>

        <div className="mt-base fade-in-delay-4">
          <HighlightBox color="red" icon={AlertTriangle}>
            <strong>Mocking — потужний, але небезпечний інструмент.</strong> Якщо мокати все підряд,
            тест перестає бути E2E — він тестує UI на вигаданих даних. Використовуй для edge cases,
            які важко відтворити через реальну БД (5xx помилки, timeout-и, rate limit).
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4.9 — MULTI-TAB / POPUP
// ============================================

function MultiTabSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Layers} title="Кілька вкладок і вікон" subtitle="Multi-tab &amp; Popup testing" />

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-1">
            <h3 className="font-heading text-blue fs-section mb-base">Нова вкладка</h3>
            <CodeBlock title="new-tab.spec.ts" color="blue">{`test('link opens in new tab', async ({
  context, page
}) => {
  await page.goto('/dashboard');

  // Чекаємо на нову сторінку в контексті
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[target="_blank"]'),
  ]);

  await newPage.waitForLoadState();

  // Працюємо з новою вкладкою
  await expect(newPage).toHaveURL(/\\/reports/);
  await expect(newPage.getByRole('heading'))
    .toHaveText('Звіт');

  // Можна закрити, повернутись до старої
  await newPage.close();
});`}</CodeBlock>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading text-green fs-section mb-base">Popup / діалог</h3>
            <CodeBlock title="popup.spec.ts" color="green">{`test('handle payment popup', async ({
  context, page
}) => {
  await page.goto('/payment');

  // Чекаємо popup (нове вікно)
  const [popup] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#pay-with-bank'),
  ]);

  // Заповнюємо форму в popup
  await popup.fill('#code', '123456');
  await popup.click('#confirm');

  // Popup закрився — перевіряємо основну сторінку
  await expect(page.locator('.payment-status'))
    .toHaveText('Оплачено');
});

// JavaScript dialog (alert, confirm, prompt)
test('handle confirm dialog', async ({ page }) => {
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe('confirm');
    await dialog.accept();
  });

  await page.click('#delete-btn');
});`}</CodeBlock>
          </div>
        </div>

        <div className="mt-base fade-in-delay-3">
          <HighlightBox color="blue" icon={Lightbulb}>
            <strong>Context vs Page.</strong> Один <code className="font-mono">context</code> — це "один користувач"
            (спільні cookies, localStorage). Нові вкладки в одному context-і бачать сесію. Якщо потрібна ізоляція
            (два різних юзери одночасно) — створюй окремі contexts через <code className="font-mono">browser.newContext()</code>.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 5 — FIXTURES & HOOKS (огляд)
// ============================================

function FixturesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Puzzle} title="Fixtures та Hooks" subtitle="Test Setup & Teardown" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Playwright має два механізми для налаштування тестів:{' '}
          <strong>hooks</strong> (<code className="font-mono text-cyan">beforeEach</code>,{' '}
          <code className="font-mono text-cyan">afterEach</code>) та{' '}
          <strong>fixtures</strong> — dependency injection для тестів.
        </p>

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-2">
            <h3 className="font-heading text-blue fs-section mb-base">Hooks — простіше</h3>
            <CodeBlock title="hooks.spec.ts" color="blue">{`import { test, expect } from '@playwright/test';

test.describe('Student management', () => {
  // Виконується ОДИН раз перед усіма тестами
  test.beforeAll(async () => {
    // seed database, глобальний setup
  });

  // Виконується перед КОЖНИМ тестом
  test.beforeEach(async ({ page }) => {
    await page.goto('/students');
  });

  test('shows student list', async ({ page }) => {
    await expect(page.locator('.student-row'))
      .toHaveCount(10);
  });

  test.afterEach(async ({ page }) => {
    // cleanup після кожного тесту
  });
});`}</CodeBlock>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading text-green fs-section mb-base">Built-in Fixtures</h3>
            <p className="text-secondary fs-body-sm mb-base">
              Playwright автоматично створює fixtures для кожного тесту:
            </p>
            <div className="flex flex-col gap-sm">
              <DefBadge
                term="page"
                description="Ізольована сторінка для кожного тесту"
                color="blue"
              />
              <DefBadge
                term="context"
                description="Browser context — ізольовані cookies, storage"
                color="green"
              />
              <DefBadge
                term="browser"
                description="Інстанс браузера (Chromium/Firefox/WebKit)"
                color="purple"
              />
              <DefBadge
                term="request"
                description="API context для прямих HTTP-запитів"
                color="orange"
              />
            </div>

            <div className="mt-base">
              <HighlightBox color="blue" icon={Info}>
                Fixtures автоматично створюються перед тестом і знищуються після — ручний cleanup не потрібен.
                Саме так працюють <code className="font-mono">page</code>, <code className="font-mono">context</code> etc.
              </HighlightBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 5.1 — SHARED STATE vs FIXTURES (еволюція)
// ============================================

function SharedStateVsFixturesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={GitBranch} title="Від beforeEach до fixtures" subtitle="Еволюція test setup" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Типова ситуація: кілька тестів потребують одного й того ж setup (POM створений, сторінка відкрита, юзер залогінений).
          Три варіанти — від простого до канонічного.
        </p>

        <div className="slide-grid slide-grid--3col mb-base">
          <div className="fade-in-delay-2">
            <h3 className="font-heading text-red fs-section mb-base">1. Shared let</h3>
            <CodeBlock title="❌ shared state" color="red">{`test.describe('Admin', () => {
  let admin: AdminPage;

  test.beforeEach(async ({ page }) => {
    admin = new AdminPage(page);
    await admin.open();
  });

  test('test 1', async () => {
    await admin.switchTo('Users');
  });
});`}</CodeBlock>
            <p className="text-secondary fs-caption mt-sm">
              Shared mutable state. Працює, але ламається при паралелізмі.
            </p>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading text-yellow fs-section mb-base">2. Дубль у тесті</h3>
            <CodeBlock title="⚠️ duplicate creation" color="yellow">{`test.beforeEach(async ({ page }) => {
  const admin = new AdminPage(page);
  await admin.open();
});

test('test 1', async ({ page }) => {
  const admin = new AdminPage(page);
  await admin.switchTo('Users');
});`}</CodeBlock>
            <p className="text-secondary fs-caption mt-sm">
              Нема shared state, але POM створюється двічі.
            </p>
          </div>

          <div className="fade-in-delay-4">
            <h3 className="font-heading text-green fs-section mb-base">3. Custom fixture</h3>
            <CodeBlock title="✅ canonical" color="green">{`const test = base.extend<{admin: AdminPage}>({
  admin: async ({ page }, use) => {
    const admin = new AdminPage(page);
    await admin.open();
    await use(admin);
  },
});

test('test 1', async ({ admin }) => {
  await admin.switchTo('Users');
});`}</CodeBlock>
            <p className="text-secondary fs-caption mt-sm">
              Один інстанс, нема shared state. Тест чистий.
            </p>
          </div>
        </div>

        <div className="fade-in-delay-5">
          <HighlightBox color="purple" icon={Lightbulb}>
            <strong>Правило:</strong> якщо setup потрібен у &gt; 2 тестах — виноси у fixture.
            Якщо setup специфічний для одного тесту — залишай inline.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 5.2 — CUSTOM FIXTURES (повний приклад)
// ============================================

function CustomFixturesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Wrench} title="Custom Fixtures — повний приклад" subtitle="base.extend() у проєкті" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Fixtures зручно складати у окремий файл — щоб тести імпортували готовий{' '}
          <code className="font-mono text-cyan">test</code> з ін'єкцією всього необхідного.
        </p>

        <div className="fade-in-delay-2 mb-base">
          <CodeBlock title="tests/fixtures/pages.ts" color="purple">{`// Визначаємо власні fixtures
import { test as base } from '@playwright/test';
import { AdminPage } from '../pages/AdminPage';
import { LoginPage } from '../pages/LoginPage';
import { testUsers } from './testUsers';

// Типи для TypeScript — які fixtures ми додаємо
type Fixtures = {
  adminPage: AdminPage;
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  // Просто POM без setup — для тестів логіну
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  // POM + автоматичний setup — admin panel вже відкрита
  adminPage: async ({ page }, use) => {
    await page.goto('/schedule?semester=2');
    const admin = new AdminPage(page);
    await admin.openAdminPanel(testUsers.manager.email);
    await use(admin);
    // Після use — автоматичний cleanup, якщо потрібно
  },
});

export { expect } from '@playwright/test';`}</CodeBlock>
        </div>

        <div className="fade-in-delay-3">
          <CodeBlock title="tests/specs/admin-sections.spec.ts" color="green">{`import { test, expect } from '../fixtures/pages';

test('can switch to Departments', async ({ adminPage }) => {
  await adminPage.switchTo('Departments');
  await expect(adminPage.page.getByRole('heading', { name: 'Create Department' }))
    .toBeVisible();
});

test('login page works', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login('user@test.com', 'pass123');
  await expect(page).toHaveURL('/dashboard');
});`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--2col mt-base fade-in-delay-4">
          <InfoCard
            icon={CheckCircle2}
            title="Коли робити fixture"
            description="Setup повторюється у 2+ тестах. POM потребує попередньої навігації. Потрібен cleanup після тесту."
            color="green"
            delay={0}
          />
          <InfoCard
            icon={AlertTriangle}
            title="Коли НЕ робити"
            description="Setup унікальний для одного тесту. Fixture ховає важливу для розуміння деталь. Ускладнює навчання новачків."
            color="orange"
            delay={0}
          />
        </div>
      </div>
    </div>
  );
}

// ============================================
// 6 — WHY SQL FOR QA
// ============================================

function WhySqlSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Database} title="Навіщо SQL тестувальнику?" subtitle="SQL for QA Engineers" />

        <p className="text-secondary fs-body-lg mb-xl fade-in-delay-1">
          Тестувальник працює не тільки з UI. Часто потрібно перевірити, що дані правильно записалися в БД,
          підготувати тестове середовище або знайти причину бага.
        </p>

        <div className="slide-grid slide-grid--2col">
          <div className="flex flex-col gap-base fade-in-delay-2">
            <InfoCard
              icon={Search}
              title="Верифікація даних"
              description="Перевірити, що після дії в UI дані коректно записались у БД — а не тільки показались на екрані."
              color="blue"
              delay={0}
            />
            <InfoCard
              icon={Wrench}
              title="Підготовка тестових даних"
              description="Створити потрібні записи перед тестом (seed data) замість клікати сотню форм вручну."
              color="green"
              delay={0}
            />
            <InfoCard
              icon={Trash2}
              title="Очищення після тестів"
              description="Видалити тестові дані, щоб не забруднювати БД і не впливати на наступні тестові прогони."
              color="red"
              delay={0}
            />
          </div>
          <div className="flex flex-col gap-base fade-in-delay-3">
            <InfoCard
              icon={Bug}
              title="Діагностика багів"
              description="Знайти причину бага: проблема в UI чи в даних? SQL-запит відповідає за секунди."
              color="orange"
              delay={0}
            />
            <InfoCard
              icon={KeyRound}
              title="Обхід обмежень UI"
              description="Реєстрація вимагає email-підтвердження? Занулюємо token напряму в БД замість справжньої пошти."
              color="purple"
              delay={0}
            />
            <InfoCard
              icon={BarChart3}
              title="Аналіз тестового покриття"
              description="Скільки записів, які стани, чи є edge cases в даних — саме ті, про які забули на рев'ю."
              color="cyan"
              delay={0}
            />
          </div>
        </div>

        <div className="mt-base fade-in-delay-4">
          <HighlightBox color="blue" icon={Lightbulb}>
            <strong>Головна ідея:</strong> SQL — не для того, щоб замінити UI-тести.
            А для того, щоб <em>доповнити</em> їх там, де UI недостатньо або занадто повільний.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 6.1 — USERS: TOKEN & PASSWORD
// ============================================

function UsersLogicSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={KeySquare} title="Реальна логіка: users" subtitle="Token, Password, Email Confirmation" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Перед тим як писати SQL-перевірки, треба розуміти, <strong>як</strong> насправді зберігається
          інформація про юзера. Два типові поля — <code className="font-mono text-cyan">password</code> і{' '}
          <code className="font-mono text-cyan">token</code> — мають важливі нюанси.
        </p>

        <div className="slide-grid slide-grid--2col fade-in-delay-2">
          <div>
            <h3 className="font-heading text-purple fs-section mb-base">🔐 password — хешований</h3>
            <CodeBlock title="SELECT password FROM users" color="purple">{`-- Пароль НІКОЛИ не зберігається у відкритому вигляді!
-- Замість "myPassword123" в БД лежить bcrypt hash:

SELECT email, password FROM users
WHERE email = 'student@example.com';

-- Результат:
-- email               | password
-- student@example.com | $2a$10$JY/bzDg4cY6Am
--                     | 1R1RPkk2.JieH0DRKSjQ
--                     | 1FwAUt9BMSnIp/H4bNzC

-- $2a$10$ — bcrypt алгоритм, 10 раундів
-- Навіть адміністратор БД не бачить пароль!`}</CodeBlock>
          </div>

          <div>
            <h3 className="font-heading text-orange fs-section mb-base">📧 token — email verification</h3>
            <CodeBlock title="SELECT token FROM users" color="orange">{`-- При реєстрації генерується UUID-токен:
SELECT email, token FROM users
WHERE email = 'new@example.com';

-- До підтвердження:
-- email           | token
-- new@example.com | 33dd9cb6-75db-4222-
--                 | b036-66f235a787c1

-- Цей токен відправляється на email як
-- посилання: /confirm?token=33dd9cb6-...
-- Користувач натискає → token стає NULL:

-- Після підтвердження:
-- email           | token
-- new@example.com | NULL`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--3col fade-in-delay-3 mt-base">
          <HighlightBox color="purple" icon={Lock}>
            <strong>password</strong> — bcrypt hash. Порівнюється через спец-функцію, не через{' '}
            <code className="font-mono">=</code>. Перевірити в тесті можна regex-ом на префікс{' '}
            <code className="font-mono">$2a$</code>.
          </HighlightBox>
          <HighlightBox color="orange" icon={Mail}>
            <strong>token</strong> — UUID для email verification.{' '}
            <code className="font-mono">NOT NULL</code> = "пошта не підтверджена",{' '}
            <code className="font-mono">NULL</code> = "підтверджена".
          </HighlightBox>
          <HighlightBox color="green" icon={Lightbulb}>
            <strong>Практичний хак:</strong> у тестах замість справжнього email verification —
            робимо <code className="font-mono">UPDATE users SET token = NULL</code>.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 6.2 — SQL VERIFICATION FOR QA
// ============================================

function SqlVerificationSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={ShieldCheck} title="SQL-перевірки для QA" subtitle="Real-world Verification Queries" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Типові запити, які тестувальник пише для перевірки бізнес-логіки після UI-дій:
        </p>

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-2">
            <h3 className="font-heading text-green fs-section mb-base">✅ Перевірка реєстрації</h3>
            <CodeBlock title="check-registration.sql" color="green">{`-- Після реєстрації: чи створився user?
SELECT id, email, role, token
FROM users
WHERE email = 'test-reg@example.com';

-- Очікуємо:
-- ✅ запис існує
-- ✅ role = 'STUDENT' (або інша)
-- ✅ token IS NOT NULL (ще не підтверджений)
-- ✅ password != 'plaintext'
--    (має бути hash з $2a$)`}</CodeBlock>

            <h3 className="font-heading text-blue fs-section mb-base mt-base">📧 Після підтвердження email</h3>
            <CodeBlock title="check-confirmation.sql" color="blue">{`-- Тест: користувач перейшов за посиланням
-- /confirm?token=33dd9cb6-...
-- Що має статися в БД:

SELECT token FROM users
WHERE email = 'test-reg@example.com';

-- Очікуємо:
-- ✅ token IS NULL — email підтверджений!

-- Якщо token досі NOT NULL — баг 🐛
-- Email confirmation не спрацювало`}</CodeBlock>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading text-orange fs-section mb-base">🔍 Data quality checks</h3>
            <CodeBlock title="data-quality.sql" color="orange">{`-- Користувачі без підтвердженого email
SELECT email, created_at, token
FROM users
WHERE token IS NOT NULL
ORDER BY created_at DESC;

-- Чи немає дублікатів email?
SELECT email, COUNT(*) as cnt
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- Користувачі з підозрілим паролем
-- (не bcrypt — можливий баг у реєстрації)
SELECT email, password
FROM users
WHERE password NOT LIKE '$2a$%'
  AND password NOT LIKE '$2b$%';`}</CodeBlock>

            <h3 className="font-heading text-red fs-section mb-base mt-base">🧹 Cleanup тестових users</h3>
            <CodeBlock title="cleanup.sql" color="red">{`-- Видалити тестових користувачів
DELETE FROM users
WHERE email LIKE 'test-%@example.com';

-- Або за конкретним тестом
DELETE FROM users
WHERE email = $1;  -- параметризовано!`}</CodeBlock>
          </div>
        </div>

        <div className="mt-base fade-in-delay-4">
          <HighlightBox color="red" icon={AlertTriangle}>
            <strong>Завжди WHERE!</strong> <code className="font-mono">DELETE FROM users;</code> без WHERE —
            це кінець тестової БД. Перевіряй через <code className="font-mono">SELECT</code> перед{' '}
            <code className="font-mono">DELETE</code> або <code className="font-mono">UPDATE</code>.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 6.3 — SQL IN E2E TESTS
// ============================================

function SqlInTestsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={TestTube} title="SQL в E2E тестах" subtitle="Database-driven Test Setup" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Типовий патерн інтеграції БД в тести: <strong>Seed → Test → Cleanup</strong>.
          Кожен тест отримує свіжі дані, після завершення — прибирає за собою.
        </p>

        <div className="slide-grid slide-grid--3col mb-base fade-in-delay-2">
          <BadgeCard
            letter="1"
            title="Seed — підготувати"
            description="INSERT тестових даних перед тестом: користувач, група, розклад. Робимо швидко через SQL, а не клацаннями в UI."
            color="green"
            delay={0}
          />
          <BadgeCard
            letter="2"
            title="Test — перевірити"
            description="Виконати E2E-сценарій у браузері. Перевірити і UI, і те, що дані в БД теж змінились як очікувалось."
            color="blue"
            delay={0}
          />
          <BadgeCard
            letter="3"
            title="Cleanup — очистити"
            description="DELETE тестових даних. Без цього БД поступово забруднюється, тести починають впливати одні на одні."
            color="red"
            delay={0}
          />
        </div>

        <div className="fade-in-delay-3">
          <CodeBlock title="schedule-management.spec.ts" color="cyan">{`// Приклад: Seed → Test → Cleanup з помічниками
import { test, expect } from '@playwright/test';
import { pool } from '../helpers/db';
import { userRepository } from '../helpers/userRepository';

test.describe('Schedule management', () => {
  let testGroupId: number;

  test.beforeAll(async () => {
    // SEED: створюємо тестову групу
    const result = await pool.query(
      \`INSERT INTO groups (title, disable, sort_order)
       VALUES ('E2E-TEST', false, 999) RETURNING id\`
    );
    testGroupId = result.rows[0].id;
  });

  test('new group appears in schedule', async ({ page }) => {
    await page.goto('/schedule');
    await page.selectOption('#group-select', { label: 'E2E-TEST' });
    await expect(page.locator('.schedule-grid')).toBeVisible();

    // Перевірка в БД — група збереглась коректно
    const row = await pool.query(
      'SELECT title FROM groups WHERE id = $1', [testGroupId]
    );
    expect(row.rows[0].title).toBe('E2E-TEST');
  });

  test.afterAll(async () => {
    // CLEANUP: видаляємо тестові дані
    await pool.query('DELETE FROM groups WHERE id = $1', [testGroupId]);
    await pool.end();  // закриваємо connection pool
  });
});`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--2col mt-base fade-in-delay-4">
          <InfoCard
            icon={ShieldCheck}
            title="Параметризовані запити"
            description="Завжди $1, $2 замість `${email}` — захист від SQL injection і підтримка правильного типу."
            color="green"
            delay={0}
          />
          <InfoCard
            icon={AlertTriangle}
            title="Окрема тестова БД"
            description="Ніколи не тестуй на продакшн-даних. Окремий DATABASE_URL, окрема БД, окремі юзери."
            color="red"
            delay={0}
          />
        </div>
      </div>
    </div>
  );
}

// ============================================
// 7 — REGISTRATION FLOW WITH DB
// ============================================

function RegistrationFlowSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={MailCheck} title="Повний приклад: реєстрація + email" subtitle="Registration & Email Confirmation E2E Test" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Реальний тест, де Playwright працює з UI, а SQL — з базою даних.
          Справжню пошту через Playwright не відкриєш — тому витягуємо token напряму з БД і підставляємо в URL.
        </p>

        <div className="fade-in-delay-2">
          <CodeBlock title="registration-flow.spec.ts" color="purple">{`import { test, expect } from '@playwright/test';
import { randomBytes } from 'crypto';
import { userRepository } from '../helpers/userRepository';
import { closeDbPool } from '../helpers/db';

test.describe('Registration + Email Confirmation', () => {
  let testEmail: string;

  test.beforeEach(() => {
    // Унікальний email на кожен тест — уникаємо конфліктів
    const suffix = randomBytes(4).toString('hex');
    testEmail = \`e2e-\${Date.now()}-\${suffix}@test.local\`;
  });

  test.afterEach(async () => {
    // CLEANUP: видаляємо створеного юзера, навіть якщо тест впав
    await userRepository.deleteByEmail(testEmail).catch(() => {});
  });

  test.afterAll(async () => {
    await closeDbPool();
  });

  test('full registration flow', async ({ page }) => {

    // ═══════════════════════════════════════════
    // КРОК 1: Реєстрація через UI
    // ═══════════════════════════════════════════
    await test.step('Register new user via UI', async () => {
      await page.goto('/register');
      await page.getByRole('textbox', { name: 'Email' }).fill(testEmail);
      await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Qwerty!1234');
      await page.getByRole('textbox', { name: 'Retype password' }).fill('Qwerty!1234');
      await page.getByRole('button', { name: 'Create account' }).click();

      // UI показує повідомлення про email
      await expect(page.getByRole('alert'))
        .toContainText('Перевірте вашу пошту');
    });

    // ═══════════════════════════════════════════
    // КРОК 2: Перевірка в БД — юзер створений, token є
    // ═══════════════════════════════════════════
    await test.step('Verify user exists in DB with token', async () => {
      const user = await userRepository.findByEmail(testEmail);
      expect(user).not.toBeNull();
      expect(user.token).not.toBeNull();  // ще не підтверджений
      expect(user.password).toMatch(/^\\$2[ab]\\$/);  // bcrypt hash
    });

    // ═══════════════════════════════════════════
    // КРОК 3: Логін з непідтвердженим email — має впасти
    // ═══════════════════════════════════════════
    await test.step('Login before confirmation fails', async () => {
      await page.goto('/login');
      await page.getByRole('textbox', { name: 'Email' }).fill(testEmail);
      await page.getByRole('textbox', { name: 'Password' }).fill('Qwerty!1234');
      await page.getByRole('button', { name: 'Login' }).click();

      await expect(page.getByRole('alert'))
        .toContainText(/confirm.*email|not.*confirmed/i);
    });

    // ═══════════════════════════════════════════
    // КРОК 4: Симулюємо підтвердження email через БД
    // ═══════════════════════════════════════════
    await test.step('Confirm email by nullifying token in DB', async () => {
      await userRepository.nullifyToken(testEmail);
    });

    // ═══════════════════════════════════════════
    // КРОК 5: Логін після підтвердження — успіх
    // ═══════════════════════════════════════════
    await test.step('Login after confirmation succeeds', async () => {
      await page.goto('/login');
      await page.getByRole('textbox', { name: 'Email' }).fill(testEmail);
      await page.getByRole('textbox', { name: 'Password' }).fill('Qwerty!1234');
      await page.getByRole('button', { name: 'Login' }).click();

      await expect(page.getByRole('alert'))
        .toContainText('You have logged in successfully');
    });
  });
});`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--3col mt-base fade-in-delay-3">
          <HighlightBox color="blue" icon={LogIn}>
            <strong>UI → DB</strong><br />
            Реєструємось, перевіряємо в БД, що юзер створений з token.
          </HighlightBox>
          <HighlightBox color="orange" icon={Wrench}>
            <strong>DB hack</strong><br />
            Замість email-посилання — занулюємо token напряму SQL-запитом.
          </HighlightBox>
          <HighlightBox color="green" icon={CheckCircle2}>
            <strong>End-to-end</strong><br />
            Логін спрацював — підтвердили, що флоу працює цілком.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 7.1 — PLAYWRIGHT + DB SETUP
// ============================================

function PlaywrightDbSetupSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Database} title="Playwright + Database" subtitle="Підключення до БД з тестів" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Для роботи з БД з тестів потрібні три частини: connection pool, repository з query-методами, і безпечне зберігання credentials.
        </p>

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-2">
            <CodeBlock title="tests/helpers/db.ts" color="blue">{`import { Pool } from 'pg';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error(
    'DATABASE_URL is not set. Check .env file.'
  );
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // для Neon
  max: 5,
});

export async function closeDbPool() {
  await pool.end();
}`}</CodeBlock>

            <div className="mt-base">
              <CodeBlock title="tests/helpers/userRepository.ts" color="green">{`import { pool } from './db';

export const userRepository = {
  async findByEmail(email: string) {
    const { rows } = await pool.query(
      'SELECT id, email, token, password FROM users WHERE email = $1',
      [email]
    );
    return rows[0] ?? null;
  },

  async nullifyToken(email: string) {
    const result = await pool.query(
      \`UPDATE users SET token = NULL
       WHERE email = $1\`,
      [email]
    );
    if (result.rowCount === 0) {
      throw new Error(\`User \${email} not found\`);
    }
  },

  async deleteByEmail(email: string) {
    await pool.query(
      'DELETE FROM users WHERE email = $1',
      [email]
    );
  },
};`}</CodeBlock>
            </div>
          </div>

          <div className="fade-in-delay-3">
            <CodeBlock title=".env" color="purple">{`# App config — інфраструктура
BASE_URL=https://schedule-latest-pz3d.onrender.com
API_BASE_URL=https://schedule-latest-pz3d.onrender.com
DATABASE_URL=postgresql://user:pass@host/dbname`}</CodeBlock>

            <div className="mt-base">
              <CodeBlock title=".gitignore" color="orange">{`node_modules/
.env                    # ← секрети
tests/.auth/            # ← storageState з токенами
playwright-report/
test-results/`}</CodeBlock>
            </div>

            <div className="flex flex-col gap-base mt-base">
              <InfoCard
                icon={ShieldCheck}
                title="Fail-fast на старті"
                description="Якщо DATABASE_URL не задано — викидаємо помилку одразу, а не ганяємо тести з undefined."
                color="green"
                delay={0}
              />
              <InfoCard
                icon={AlertTriangle}
                title="Тестова БД ≠ прод"
                description="Окрема БД для тестів. Окремий DATABASE_URL. Ніколи не тестуй на продакшн-даних."
                color="red"
                delay={0}
              />
            </div>
          </div>
        </div>

        <div className="mt-base fade-in-delay-4">
          <HighlightBox color="blue" icon={Lightbulb}>
            <strong>Чому connection pool, а не новий клієнт на кожен запит?</strong> Pool перевикористовує з'єднання —
            швидше, менше навантаження на БД. <code className="font-mono">max: 5</code> — достатньо для тестів
            з <code className="font-mono">workers: 1</code> чи <code className="font-mono">workers: 2</code>.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 8 — DATA-DRIVEN TESTS
// ============================================

function DataDrivenTestsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Repeat} title="Data-Driven Tests" subtitle="Один шаблон + масив даних = N тестів" />

        <p className="text-secondary fs-body-lg mb-base fade-in-delay-1">
          Коли треба перевірити кілька схожих випадків (різні ролі, різні розділи, різні вхідні дані),
          не пиши 7 однакових тестів — пиши один шаблон і масив даних. Playwright зареєструє кожен випадок як окремий тест.
        </p>

        <div className="slide-grid slide-grid--2col">
          <div className="fade-in-delay-2">
            <h3 className="font-heading text-red fs-section mb-base">❌ Погано — 7 тестів-близнюків</h3>
            <CodeBlock title="copy-paste.spec.ts" color="red">{`test('Departments form is visible', async ({ admin }) => {
  await admin.switchTo('Departments');
  await expect(page.getByText('Create Department'))
    .toBeVisible();
});

test('Groups form is visible', async ({ admin }) => {
  await admin.switchTo('Groups');
  await expect(page.getByText('Create group'))
    .toBeVisible();
});

test('Rooms form is visible', async ({ admin }) => {
  await admin.switchTo('Rooms');
  await expect(page.getByText('Create room'))
    .toBeVisible();
});

// ... і так ще 4 тести`}</CodeBlock>

            <div className="mt-base">
              <HighlightBox color="red" icon={AlertTriangle}>
                <strong>Проблема:</strong> якщо логіка зміниться — правити 7 місць. Додати новий розділ —
                скопіювати і забути щось оновити. Копіпаст-баги.
              </HighlightBox>
            </div>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading text-green fs-section mb-base">✅ Добре — data-driven</h3>
            <CodeBlock title="data-driven.spec.ts" color="green">{`interface SectionCheck {
  section: AdminSection;
  expectedForm: (page: Page) => Locator;
}

const sectionsToCheck: SectionCheck[] = [
  { section: 'Departments',
    expectedForm: (p) => p.getByText('Create Department') },
  { section: 'Groups',
    expectedForm: (p) => p.getByText('Create group') },
  { section: 'Rooms',
    expectedForm: (p) => p.getByText('Create room') },
  // ... 4 інші
];

for (const { section, expectedForm } of sectionsToCheck) {
  test(\`"\${section}" form is visible\`, async ({ admin, page }) => {
    await admin.switchTo(section);
    await expect(expectedForm(page)).toBeVisible();
  });
}`}</CodeBlock>

            <div className="mt-base">
              <HighlightBox color="green" icon={CheckCircle2}>
                <strong>Бонус:</strong> Playwright реєструє 7 окремих тестів. У звіті видно кожен
                окремо — якщо впав тільки "Rooms", це одразу видно.
              </HighlightBox>
            </div>
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mt-base fade-in-delay-4">
          <InfoCard
            icon={CheckCircle2}
            title="Коли використовувати"
            description="Схожі сценарії з однаковою логікою та різними даними: ролі користувачів, варіанти форм, edge cases у валідації."
            color="green"
            delay={0}
          />
          <InfoCard
            icon={AlertTriangle}
            title="Коли НЕ використовувати"
            description="Якщо всередині test-тіла з'являється if/switch за даними — це вже не data-driven, це різні тести з різною логікою."
            color="orange"
            delay={0}
          />
          <InfoCard
            icon={Eye}
            title="Цикл виконується один раз"
            description="for крутиться при завантаженні файлу — реєструє тести. Самі тести запускаються незалежно, як звичайно."
            color="blue"
            delay={0}
          />
        </div>
      </div>
    </div>
  );
}

// ============================================
// 9 — BEST PRACTICES
// ============================================

function BestPracticesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Lightbulb} title="Best Practices" subtitle="Рекомендації" />

        <div className="slide-grid slide-grid--2col">
          <div className="flex flex-col gap-base fade-in-delay-1">
            <h3 className="font-heading text-green fs-section">✅ Auth & Setup</h3>

            <InfoCard
              icon={CheckCircle2}
              title="API login замість UI"
              description="Один тест через UI (щоб покрити флоу логіну), решта — через API + storageState. Швидше у 20+ разів."
              color="green"
              delay={0}
            />

            <InfoCard
              icon={CheckCircle2}
              title="Подивись, як фронт зберігає сесію"
              description="Перед написанням auth.setup.ts — відкрий DevTools після ручного логіну. Побачиш усі ключі, які треба відтворити."
              color="green"
              delay={0}
            />

            <InfoCard
              icon={CheckCircle2}
              title="Fixtures для повторюваного setup"
              description="Якщо setup потрібен у 2+ тестах — виноси в custom fixture через base.extend(). Замість shared let у describe."
              color="green"
              delay={0}
            />

            <InfoCard
              icon={CheckCircle2}
              title="Data-driven для схожих кейсів"
              description="Цикл + масив замість копіпасту. Новий кейс — нова стрічка в масиві, а не новий тест-близнюк."
              color="green"
              delay={0}
            />
          </div>

          <div className="flex flex-col gap-base fade-in-delay-2">
            <h3 className="font-heading text-blue fs-section">✅ SQL & Database</h3>

            <InfoCard
              icon={CheckCircle2}
              title="Окрема тестова БД"
              description="Ніколи не тестуй на production-даних. Окремий DATABASE_URL у .env, окрема БД, окремі юзери."
              color="blue"
              delay={0}
            />

            <InfoCard
              icon={CheckCircle2}
              title="Cleanup у afterEach, не afterAll"
              description="Видаляй за собою після кожного тесту. Якщо тест впаде — все одно прибереться. Плюс unique email через Date.now() + random."
              color="blue"
              delay={0}
            />

            <InfoCard
              icon={CheckCircle2}
              title="Параметризовані запити"
              description="Завжди $1, $2 замість шаблонних рядків. Захист від SQL injection і правильна типізація автоматично."
              color="blue"
              delay={0}
            />

            <InfoCard
              icon={CheckCircle2}
              title="Connection pool + закриття"
              description="Один pool на весь тестовий ран (max: 5). У afterAll — await pool.end(), інакше Playwright висить на завершенні."
              color="blue"
              delay={0}
            />
          </div>
        </div>

        <div className="mt-base fade-in-delay-3">
          <HighlightBox color="purple" icon={Target}>
            <strong>Головне правило:</strong> тести мають бути <em>швидкими</em>, <em>ізольованими</em> і <em>детермінованими</em>.
            Кожне з цих правил веде до однієї з цих властивостей.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 10 — COMMON MISTAKES
// ============================================

function CommonMistakesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={AlertTriangle} title="Типові помилки" subtitle="Common Mistakes" />

        <div className="slide-grid slide-grid--2col">
          <div className="flex flex-col gap-base fade-in-delay-1">
            <InfoCard
              icon={XCircle}
              title="UI-логін у кожному тесті"
              subtitle="Slow & Fragile Auth"
              description="beforeEach заповнює форму логіну → 3–5 секунд × 50 тестів = втрачені хвилини. Використовуй storageState + API login."
              color="red"
              delay={0}
            />

            <InfoCard
              icon={XCircle}
              title="Тільки token у localStorage"
              subtitle="Incomplete Session State"
              description="Фронт часто зберігає не тільки token, а й email, role, expirationDate. Без усіх полів — застосунок робить logout на старті. Дивись у DevTools після ручного логіну."
              color="red"
              delay={0}
            />

            <InfoCard
              icon={XCircle}
              title="Shared let у describe"
              subtitle="Hidden State Between Tests"
              description="let admin: AdminPage; + присвоєння у beforeEach — працює, але ламається при паралелізмі і ховає інтенти. Роби через fixture."
              color="red"
              delay={0}
            />

            <InfoCard
              icon={XCircle}
              title="Довгий тест на 100 кроків"
              subtitle="Brittle End-to-end"
              description="Один тест 'від реєстрації до покупки' — падає часто, діагностувати важко. Розбий на менші тести зі спільним fixture."
              color="red"
              delay={0}
            />
          </div>

          <div className="flex flex-col gap-base fade-in-delay-2">
            <InfoCard
              icon={XCircle}
              title="Хардкод email у тестах"
              subtitle="Duplicate Email on Retry"
              description="testEmail = 'test@example.com' — при retry тест впаде з 'email exists'. Генеруй унікальний: `test-${Date.now()}-${random}@test.local`."
              color="red"
              delay={0}
            />

            <InfoCard
              icon={XCircle}
              title="DELETE / UPDATE без WHERE"
              subtitle="Accidental Mass Delete"
              description="Одна помилка — і вся таблиця порожня. Завжди перевіряй через SELECT спочатку. Або працюй у транзакції з rollback."
              color="red"
              delay={0}
            />

            <InfoCard
              icon={XCircle}
              title="Конкатенація в SQL"
              subtitle="SQL Injection Risk"
              description="`WHERE name = '${name}'` — SQL injection. Завжди параметризовані запити: $1, $2."
              color="red"
              delay={0}
            />

            <InfoCard
              icon={XCircle}
              title="Забутий pool.end() у afterAll"
              subtitle="Hanging Process"
              description="Тести пройшли, але процес висить 30+ секунд. Connection pool тримає живі з'єднання. У afterAll → await pool.end()."
              color="red"
              delay={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 11 — SUMMARY
// ============================================

function SummarySlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={ClipboardList} title="Підсумки" subtitle="Summary" />

        <div className="summary-list fade-in-delay-1">
          <div className="summary-list__item">
            <CheckCircle2 className="summary-list__icon" />
            <p className="summary-list__text">
              <strong>Auth-стратегія:</strong> UI-login один раз (щоб покрити флоу),
              API-login + storageState для решти тестів — швидше в рази
            </p>
          </div>
          <div className="summary-list__item">
            <CheckCircle2 className="summary-list__icon" />
            <p className="summary-list__text">
              <strong>Session state:</strong> фронт зберігає сесію в cookies, localStorage або комбінації;
              перед написанням setup — подивись у DevTools після ручного логіну
            </p>
          </div>
          <div className="summary-list__item">
            <CheckCircle2 className="summary-list__icon" />
            <p className="summary-list__text">
              <strong>JWT + localStorage:</strong> декодуй payload, розклади поля
              (email, userRole, expirationDate) в localStorage — як це робить фронт
            </p>
          </div>
          <div className="summary-list__item">
            <CheckCircle2 className="summary-list__icon" />
            <p className="summary-list__text">
              <strong>Custom fixtures (base.extend):</strong> канонічний спосіб ділитись setup між тестами —
              чистіше за shared let у describe
            </p>
          </div>
          <div className="summary-list__item">
            <CheckCircle2 className="summary-list__icon" />
            <p className="summary-list__text">
              <strong>Data-driven tests:</strong> один шаблон + масив даних = N тестів;
              замість копіпасту — масштабований код
            </p>
          </div>
          <div className="summary-list__item">
            <CheckCircle2 className="summary-list__icon" />
            <p className="summary-list__text">
              <strong>SQL для QA:</strong> верифікація даних, підготовка seed, обхід UI-обмежень
              (як "підтвердження" email через <code className="font-mono">UPDATE users SET token = NULL</code>)
            </p>
          </div>
          <div className="summary-list__item">
            <CheckCircle2 className="summary-list__icon" />
            <p className="summary-list__text">
              <strong>Playwright + DB:</strong> connection pool, repository-патерн, параметризовані запити,
              cleanup у <code className="font-mono">afterEach</code>, <code className="font-mono">pool.end()</code> у <code className="font-mono">afterAll</code>
            </p>
          </div>
        </div>

        <div className="mt-base fade-in-delay-2">
          <HighlightBox color="blue" icon={Target}>
            Швидкі, ізольовані, детерміновані тести — <em>від браузера до бази даних</em> 🎯
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 12 — QUESTIONS
// ============================================

function QuestionsSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
      <p className="questions-slide__emoji">🎭</p>
      <h2 className="questions-slide__title">Питання?</h2>
      <p className="questions-slide__subtitle">Questions &amp; Discussion</p>
      <div className="questions-slide__next">
        <p>
          <strong>Наступна тема:</strong> Performance &amp; Security тестування
        </p>
      </div>
    </div>
  );
}