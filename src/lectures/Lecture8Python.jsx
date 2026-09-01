// Lecture8_Python.jsx — Playwright для Python: встановлення, конфігурація, sync/async, POM
import React from 'react';
import {
  Settings, Terminal, Code2, FolderTree, Play, Zap,
  RefreshCw, LayoutTemplate, FileCode, Lightbulb,
  ArrowRight, CheckCircle2, Workflow, Eye, Box,
  Layers, Timer, Cpu, BookOpen
} from 'lucide-react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';

// ============================================
// SLIDES
// ============================================

const slides = [
  { id: 1, title: 'Встановлення Playwright (Python)', component: SetupSlide },
  { id: 2, title: 'CLI — запуск тестів', component: CLISlide },
  { id: 3, title: 'Codegen', component: CodegenSlide },
  { id: 4, title: 'Конфігурація — conftest.py', component: ConfigSlide },
  { id: '4_1', title: 'Конфігурація — pytest.ini', component: PytestIniSlide },
  { id: 5, title: 'Sync vs Async', component: SyncAsyncSlide },
  { id: '5_1', title: 'Sync vs Async — коли що', component: SyncAsyncWhenSlide },
  { id: 6, title: 'POM — Page Object (Python)', component: PomPythonSlide },
  { id: '6_1', title: 'POM — тести', component: PomTestsSlide },
  { id: '6_2', title: 'POM — структура проєкту', component: PomStructureSlide },
  { id: 7, title: 'Повний приклад — Login Flow', component: FullExampleSlide },
];

// ---------- 1. SETUP ----------

function SetupSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Settings} title="Встановлення Playwright" subtitle="Python — Installation & Setup" />

        <div className="flex flex-col gap-lg">
          <div className="fade-in-delay-1">
            <h3 className="font-heading font-semibold text-green mb-sm">1. Встановлення пакету</h3>
            <pre className="code-block">
              <code>
{`# Встановити Playwright + pytest plugin
pip install pytest-playwright

# Завантажити браузери (Chromium, Firefox, WebKit)
playwright install`}
              </code>
            </pre>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-blue mb-sm">2. Додати до існуючого проєкту</h3>
            <pre className="code-block">
              <code>
{`# requirements.txt
pytest==8.*
pytest-playwright==0.6.*

# Або через poetry / pipenv
poetry add --group dev pytest-playwright
pipenv install --dev pytest-playwright

# Потім встановити браузери
playwright install`}
              </code>
            </pre>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading font-semibold text-purple mb-sm">3. Структура проєкту</h3>
            <pre className="code-block">
              <code>
{`my-project/
├── tests/
│   ├── conftest.py            # Фікстури, конфігурація
│   └── test_example.py        # Тести (prefix test_)
├── requirements.txt
└── pytest.ini                 # Налаштування pytest`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--green fade-in-delay-4">
            <p className="highlight-box__text">
              💡 <code>pytest-playwright</code> надає готові фікстури: <code>page</code>, <code>browser</code>, <code>context</code> — не треба нічого ініціалізувати вручну
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 2. CLI ----------

function CLISlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Terminal} title="Запуск тестів — CLI" subtitle="Command Line Interface" />

        <div className="flex flex-col gap-lg">
          <div className="fade-in-delay-1">
            <h3 className="font-heading font-semibold text-green mb-sm">Основні команди</h3>
            <pre className="code-block">
              <code>
{`# Запуск всіх тестів
pytest

# Конкретний файл або тест
pytest tests/test_login.py
pytest tests/test_login.py::test_valid_login

# З відкритим браузером (headed mode)
pytest --headed

# Вибір браузера
pytest --browser chromium
pytest --browser firefox
pytest --browser webkit

# Декілька браузерів одночасно
pytest --browser chromium --browser firefox`}
              </code>
            </pre>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-blue mb-sm">Корисні ключі pytest</h3>
            <pre className="code-block">
              <code>
{`# Verbose output
pytest -v

# Зупинитись на першому fail
pytest -x

# Показати print() у консолі
pytest -s

# Паралельний запуск (потрібен pytest-xdist)
pytest -n 4

# Запуск за маркером
pytest -m smoke

# Slowmo — сповільнити для демонстрації (мс)
pytest --headed --slowmo 500`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--orange fade-in-delay-3">
            <p className="highlight-box__text">
              ⚠️ <strong>Tracing:</strong> <code>pytest --tracing on</code> — зберігає trace для кожного тесту. 
              Переглянути: <code>playwright show-trace test-results/trace.zip</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 3. CODEGEN ----------

function CodegenSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Code2} title="Codegen" subtitle="Генерація коду тестів" />

        <div className="flex flex-col gap-lg">
          <div className="fade-in-delay-1">
            <h3 className="font-heading font-semibold text-green mb-sm">Запуск Codegen</h3>
            <pre className="code-block">
              <code>
{`# Відкриває браузер + інспектор — записує дії як Python-код
playwright codegen https://example.com

# Вибрати target-мову (за замовч. — Python pytest)
playwright codegen --target python-pytest https://example.com

# Інші варіанти target
playwright codegen --target python           # sync API
playwright codegen --target python-async     # async API

# Емуляція мобільного пристрою
playwright codegen --device "iPhone 13" https://example.com

# Зберегти у файл
playwright codegen --target python-pytest -o tests/test_gen.py https://example.com`}
              </code>
            </pre>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-blue mb-sm">Що генерує Codegen (приклад)</h3>
            <pre className="code-block">
              <code>
{`import re
from playwright.sync_api import Page, expect

def test_example(page: Page) -> None:
    page.goto("https://example.com/login")
    page.get_by_label("Email").fill("user@mail.com")
    page.get_by_label("Password").fill("secret123")
    page.get_by_role("button", name="Sign in").click()
    expect(page.get_by_text("Welcome")).to_be_visible()`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--purple fade-in-delay-3">
            <p className="highlight-box__text">
              🎯 Codegen — ідеальний старт: записуєте сценарій, потім рефакторите в POM. Не використовуйте згенерований код "as is" у production-тестах.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 4. CONFIG — conftest.py ----------

function ConfigSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Settings} title="Конфігурація" subtitle="conftest.py — фікстури та налаштування" />

        <div className="flex flex-col gap-lg">
          <div className="fade-in-delay-1">
            <h3 className="font-heading font-semibold text-green mb-sm">conftest.py — базова конфігурація</h3>
            <pre className="code-block">
              <code>
{`import pytest
from playwright.sync_api import Page

# Base URL — не дублюємо в кожному тесті
@pytest.fixture(scope="session")
def base_url():
    return "https://staging.example.com"

# Кастомна фікстура: авторизований page
@pytest.fixture
def authenticated_page(page: Page, base_url: str) -> Page:
    page.goto(f"{base_url}/login")
    page.get_by_label("Email").fill("admin@test.com")
    page.get_by_label("Password").fill("password")
    page.get_by_role("button", name="Login").click()
    page.wait_for_url("**/dashboard")
    return page`}
              </code>
            </pre>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-blue mb-sm">Browser context — viewport, locale</h3>
            <pre className="code-block">
              <code>
{`@pytest.fixture(scope="session")
def browser_context_args(browser_context_args):
    return {
        **browser_context_args,
        "viewport": {"width": 1920, "height": 1080},
        "locale": "uk-UA",
        "timezone_id": "Europe/Kyiv",
        "ignore_https_errors": True,
    }`}
              </code>
            </pre>
          </div>

          <div className="highlighted-card highlighted-card--orange fade-in-delay-3">
            <p className="text-center text-secondary fs-body-sm">
              💡 <code>pytest-playwright</code> автоматично шукає <code>conftest.py</code> у папці тестів.
              Фікстура <code>page</code> — вже створена, просто вказуєте її як параметр тесту.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 4.1. CONFIG — pytest.ini ----------

function PytestIniSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={FileCode} title="Конфігурація" subtitle="pytest.ini / pyproject.toml" />

        <div className="flex flex-col gap-lg">
          <div className="grid grid-cols-2 gap-base fade-in-delay-1">
            <div>
              <h3 className="font-heading font-semibold text-green mb-sm">pytest.ini</h3>
              <pre className="code-block">
                <code>
{`[pytest]
base_url = https://staging.example.com

# Маркери для фільтрації
markers =
    smoke: critical path tests
    regression: full regression
    slow: long-running tests

# Playwright-специфічні
addopts = --headed --slowmo 100`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-blue mb-sm">pyproject.toml</h3>
              <pre className="code-block">
                <code>
{`[tool.pytest.ini_options]
base_url = "https://staging.example.com"

markers = [
    "smoke: critical path tests",
    "regression: full regression",
    "slow: long-running tests",
]

addopts = "--headed --slowmo 100"`}
                </code>
              </pre>
            </div>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-purple mb-sm">Використання маркерів у тестах</h3>
            <pre className="code-block">
              <code>
{`import pytest

@pytest.mark.smoke
def test_login_valid(page):
    """Цей тест запуститься з pytest -m smoke"""
    page.goto("/login")
    # ...

@pytest.mark.regression
def test_login_special_chars(page):
    """Цей тест запуститься з pytest -m regression"""
    page.goto("/login")
    # ...`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--cyan fade-in-delay-3">
            <p className="highlight-box__text">
              🔧 <code>base_url</code> у конфігу дозволяє в тестах писати <code>page.goto("/login")</code> замість повного URL. Переключення середовищ — зміна одного рядка.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 5. SYNC vs ASYNC ----------

function SyncAsyncSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={RefreshCw} title="Sync vs Async API" subtitle="Два підходи до Playwright у Python" />

        <div className="flex flex-col gap-lg">
          <div className="grid grid-cols-2 gap-base fade-in-delay-1">
            <div>
              <h3 className="font-heading font-semibold text-green mb-sm">🟢 Sync API</h3>
              <pre className="code-block">
                <code>
{`from playwright.sync_api import (
    sync_playwright
)

def test_search(page):
    page.goto("https://example.com")
    page.get_by_role(
        "textbox", name="Search"
    ).fill("playwright")
    page.get_by_role(
        "button", name="Go"
    ).click()

    # Assertions
    expect(
        page.get_by_text("Results")
    ).to_be_visible()`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-blue mb-sm">🔵 Async API</h3>
              <pre className="code-block">
                <code>
{`from playwright.async_api import (
    async_playwright
)
import pytest

@pytest.mark.asyncio
async def test_search(page):
    await page.goto("https://example.com")
    await page.get_by_role(
        "textbox", name="Search"
    ).fill("playwright")
    await page.get_by_role(
        "button", name="Go"
    ).click()

    # Assertions
    await expect(
        page.get_by_text("Results")
    ).to_be_visible()`}
                </code>
              </pre>
            </div>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-orange mb-sm">Standalone скрипт (без pytest)</h3>
            <div className="grid grid-cols-2 gap-base">
              <div>
                <pre className="code-block">
                  <code>
{`# sync_script.py
from playwright.sync_api import (
    sync_playwright
)

with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=False
    )
    page = browser.new_page()
    page.goto("https://example.com")
    print(page.title())
    browser.close()`}
                  </code>
                </pre>
              </div>
              <div>
                <pre className="code-block">
                  <code>
{`# async_script.py
import asyncio
from playwright.async_api import (
    async_playwright
)

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=False
        )
        page = await browser.new_page()
        await page.goto("https://example.com")
        print(await page.title())
        await browser.close()

asyncio.run(main())`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 5.1. SYNC vs ASYNC — КОЛИ ЩО ----------

function SyncAsyncWhenSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Workflow} title="Sync vs Async — коли що обирати" subtitle="Рекомендації" />

        <div className="flex flex-col gap-lg">
          <div className="grid grid-cols-2 gap-base fade-in-delay-1">
            <div className="outlined-card outlined-card--green">
              <h3 className="font-heading font-bold text-green mb-sm">Sync API ✅</h3>
              <div className="flex flex-col gap-sm">
                <div className="definition definition--green">
                  <p className="definition__description fs-body-sm">
                    <strong>pytest-playwright</strong> — plugin працює з sync за замовчуванням
                  </p>
                </div>
                <div className="definition definition--green">
                  <p className="definition__description fs-body-sm">
                    <strong>Простота</strong> — немає await/async, легше читати і дебажити
                  </p>
                </div>
                <div className="definition definition--green">
                  <p className="definition__description fs-body-sm">
                    <strong>Більшість E2E тестів</strong> — послідовні за природою, async не дає переваг
                  </p>
                </div>
                <div className="definition definition--green">
                  <p className="definition__description fs-body-sm">
                    <strong>Команда не знає asyncio</strong> — нижчий поріг входу
                  </p>
                </div>
              </div>
            </div>

            <div className="outlined-card outlined-card--blue">
              <h3 className="font-heading font-bold text-blue mb-sm">Async API 🔵</h3>
              <div className="flex flex-col gap-sm">
                <div className="definition definition--blue">
                  <p className="definition__description fs-body-sm">
                    <strong>Паралельна робота з кількома page/tab</strong> — одночасні дії в різних вкладках
                  </p>
                </div>
                <div className="definition definition--blue">
                  <p className="definition__description fs-body-sm">
                    <strong>Інтеграція з async-кодом</strong> — FastAPI, aiohttp, async DB
                  </p>
                </div>
                <div className="definition definition--blue">
                  <p className="definition__description fs-body-sm">
                    <strong>Скрипти (не тести)</strong> — scraping, моніторинг, автоматизація задач
                  </p>
                </div>
                <div className="definition definition--blue">
                  <p className="definition__description fs-body-sm">
                    <strong>Потрібен <code>pytest-asyncio</code></strong> — додатковий plugin
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="highlight-box highlight-box--green fade-in-delay-2">
            <p className="highlight-box__text">
              🎯 <strong>Рекомендація:</strong> починайте з <strong>Sync API</strong> + <code>pytest-playwright</code>. 
              Це стандарт індустрії для E2E тестів на Python. Async — тільки якщо є конкретна причина.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 6. POM — Python ----------

function PomPythonSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={LayoutTemplate} title="Page Object Model" subtitle="Python-реалізація" />

        <div className="flex flex-col gap-lg">
          <div className="fade-in-delay-1">
            <h3 className="font-heading font-semibold text-green mb-sm">LoginPage — Page Object</h3>
            <pre className="code-block">
              <code>
{`# pages/login_page.py
from playwright.sync_api import Page, expect

class LoginPage:
    URL = "/login"

    def __init__(self, page: Page) -> None:
        self.page = page
        # Локатори як властивості
        self.email_input = page.get_by_label("Email")
        self.password_input = page.get_by_label("Password")
        self.submit_button = page.get_by_role("button", name="Sign in")
        self.error_message = page.get_by_role("alert")

    def navigate(self) -> None:
        self.page.goto(self.URL)

    def login(self, email: str, password: str) -> None:
        self.email_input.fill(email)
        self.password_input.fill(password)
        self.submit_button.click()

    # Assertions в Page Object — один з підходів.
    # Альтернатива: тримати assertions у тестах (див. наступний слайд).
    def expect_error(self, text: str) -> None:
        expect(self.error_message).to_contain_text(text)`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--blue fade-in-delay-2">
            <p className="highlight-box__text">
              🐍 <strong>Python-стиль:</strong> type hints (<code>page: Page</code>), snake_case, <code>__init__</code> замість constructor.
              Локатори зберігаємо як атрибути екземпляра — lazy evaluation, Playwright знаходить елемент при використанні, не при створенні.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 6.1. POM — ТЕСТИ ----------

function PomTestsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Play} title="POM — використання в тестах" subtitle="Два підходи до assertions" />

        <div className="flex flex-col gap-lg">
          <div className="grid grid-cols-2 gap-base fade-in-delay-1">
            <div>
              <h3 className="font-heading font-semibold text-green mb-sm">Assertions у Page Object</h3>
              <pre className="code-block">
                <code>
{`# tests/test_login.py
from pages.login_page import LoginPage

def test_invalid_login(page):
    login = LoginPage(page)
    login.navigate()
    login.login(
        "wrong@mail.com",
        "wrong"
    )
    # Assertion всередині PO
    login.expect_error(
        "Invalid credentials"
    )

def test_empty_email(page):
    login = LoginPage(page)
    login.navigate()
    login.login("", "pass")
    login.expect_error(
        "Email is required"
    )`}
                </code>
              </pre>
              <div className="definition definition--green mt-sm">
                <p className="definition__description fs-body-sm">
                  ✅ DRY — перевірка в одному місці<br />
                  ⚠️ PO має дві відповідальності
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-blue mb-sm">Assertions у тестах</h3>
              <pre className="code-block">
                <code>
{`# tests/test_login.py
from playwright.sync_api import expect
from pages.login_page import LoginPage

def test_invalid_login(page):
    login = LoginPage(page)
    login.navigate()
    login.login(
        "wrong@mail.com",
        "wrong"
    )
    # Assertion безпосередньо в тесті
    expect(
        login.error_message
    ).to_contain_text(
        "Invalid credentials"
    )

def test_empty_email(page):
    login = LoginPage(page)
    login.navigate()
    login.login("", "pass")
    expect(
        login.error_message
    ).to_contain_text(
        "Email is required"
    )`}
                </code>
              </pre>
              <div className="definition definition--blue mt-sm">
                <p className="definition__description fs-body-sm">
                  ✅ Чіткий SRP — PO = дії, тест = перевірки<br />
                  ⚠️ Дублювання assertion-логіки
                </p>
              </div>
            </div>
          </div>

          <div className="highlight-box highlight-box--purple fade-in-delay-2">
            <p className="highlight-box__text">
              💡 Обидва підходи валідні. На практиці часто комбінують: прості перевірки — у тесті, 
              складні (кілька елементів, стан сторінки) — як метод Page Object.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 6.2. POM — СТРУКТУРА ----------

function PomStructureSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={FolderTree} title="POM — структура проєкту" subtitle="Project Structure" />

        <div className="flex flex-col gap-lg">
          <div className="fade-in-delay-1">
            <pre className="code-block">
              <code>
{`e2e-tests/
├── pages/                         # Page Objects
│   ├── __init__.py
│   ├── base_page.py               # Спільна логіка (navigate, wait)
│   ├── login_page.py
│   ├── dashboard_page.py
│   └── profile_page.py
│
├── tests/                         # Тести
│   ├── conftest.py                # Фікстури (authenticated_page, base_url)
│   ├── test_login.py
│   ├── test_dashboard.py
│   └── test_profile.py
│
├── utils/                         # Допоміжні функції
│   ├── test_data.py               # Тестові дані, фабрики
│   └── helpers.py                 # Утиліти (screenshot, random data)
│
├── pytest.ini                     # Конфігурація pytest
└── requirements.txt               # Залежності`}
              </code>
            </pre>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-blue mb-sm">BasePage — спільна логіка</h3>
            <pre className="code-block">
              <code>
{`# pages/base_page.py
from playwright.sync_api import Page

class BasePage:
    def __init__(self, page: Page) -> None:
        self.page = page

    def navigate(self, path: str = "/") -> None:
        self.page.goto(path)

    def get_title(self) -> str:
        return self.page.title()

    def screenshot(self, name: str) -> None:
        self.page.screenshot(path=f"screenshots/{name}.png")`}
              </code>
            </pre>
          </div>

          <div className="fade-in-delay-3">
            <h3 className="font-heading font-semibold text-purple mb-sm">Наслідування від BasePage</h3>
            <pre className="code-block">
              <code>
{`# pages/dashboard_page.py
from pages.base_page import BasePage

class DashboardPage(BasePage):
    URL = "/dashboard"

    def __init__(self, page):
        super().__init__(page)
        self.welcome_text = page.get_by_test_id("welcome")
        self.stats_section = page.locator(".stats-grid")

    def navigate(self) -> None:
        super().navigate(self.URL)

    def get_welcome_message(self) -> str:
        return self.welcome_text.text_content()`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 7. FULL EXAMPLE — LOGIN FLOW ----------

function FullExampleSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Workflow} title="Повний приклад — Login Flow" subtitle="Complete E2E Test Example" />

        <div className="flex flex-col gap-lg">
          <div className="grid grid-cols-2 gap-base fade-in-delay-1">
            <div>
              <h3 className="font-heading font-semibold text-green mb-sm">LoginPage</h3>
              <pre className="code-block">
                <code>
{`# pages/login_page.py
from pages.base_page import BasePage
from playwright.sync_api import Page

class LoginPage(BasePage):
    URL = "/login"

    def __init__(self, page: Page) -> None:
        super().__init__(page)
        self.email = page.get_by_label("Email")
        self.password = page.get_by_label(
            "Password"
        )
        self.submit = page.get_by_role(
            "button", name="Sign in"
        )
        self.error = page.get_by_role("alert")

    def navigate(self) -> None:
        super().navigate(self.URL)

    def login(
        self, email: str, password: str
    ) -> None:
        self.email.fill(email)
        self.password.fill(password)
        self.submit.click()`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-blue mb-sm">DashboardPage</h3>
              <pre className="code-block">
                <code>
{`# pages/dashboard_page.py
from pages.base_page import BasePage
from playwright.sync_api import Page

class DashboardPage(BasePage):
    URL = "/dashboard"

    def __init__(self, page: Page) -> None:
        super().__init__(page)
        self.welcome = page.get_by_test_id(
            "welcome"
        )
        self.logout_btn = page.get_by_role(
            "button", name="Logout"
        )
        self.nav_menu = page.get_by_role(
            "navigation"
        )

    def navigate(self) -> None:
        super().navigate(self.URL)

    def get_welcome_text(self) -> str:
        return self.welcome.text_content()

    def logout(self) -> None:
        self.logout_btn.click()`}
                </code>
              </pre>
            </div>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-purple mb-sm">Тести — повний Login Flow</h3>
            <pre className="code-block">
              <code>
{`# tests/test_login_flow.py
import pytest
from playwright.sync_api import Page, expect
from pages.login_page import LoginPage
from pages.dashboard_page import DashboardPage

class TestLoginFlow:
    """Login Flow — happy path та edge cases."""

    def test_successful_login(self, page: Page) -> None:
        login = LoginPage(page)
        dashboard = DashboardPage(page)

        login.navigate()
        login.login("user@example.com", "secure123")

        # Перевіряємо redirect на dashboard
        expect(page).to_have_url("**/dashboard")
        expect(dashboard.welcome).to_contain_text("Welcome")
        expect(dashboard.nav_menu).to_be_visible()

    def test_invalid_credentials(self, page: Page) -> None:
        login = LoginPage(page)

        login.navigate()
        login.login("wrong@mail.com", "wrong")

        expect(login.error).to_be_visible()
        expect(login.error).to_contain_text("Invalid credentials")
        # Залишаємось на сторінці логіну
        expect(page).to_have_url("**/login")

    def test_logout_redirects_to_login(self, page: Page) -> None:
        login = LoginPage(page)
        dashboard = DashboardPage(page)

        # Login
        login.navigate()
        login.login("user@example.com", "secure123")
        expect(page).to_have_url("**/dashboard")

        # Logout
        dashboard.logout()
        expect(page).to_have_url("**/login")
        expect(login.email).to_be_visible()`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--orange fade-in-delay-3">
            <p className="highlight-box__text">
              🔗 <strong>Зверніть увагу:</strong> тест працює з двома Page Objects одночасно — <code>LoginPage</code> → дія → <code>DashboardPage</code> → перевірка.
              Кожен PO відповідає за свою сторінку, тест оркеструє flow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// EXPORT
// ============================================

export default function Lecture8Python() {
  return <LectureLayout slides={slides} />;
}