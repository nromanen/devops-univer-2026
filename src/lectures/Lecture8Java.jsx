// Lecture8_Java.jsx — Playwright для Java: залежності, конфігурація, codegen, POM
import React from 'react';
import {
  Settings, Terminal, Code2, FolderTree, Play, Zap,
  RefreshCw, LayoutTemplate, FileCode, Lightbulb,
  ArrowRight, CheckCircle2, Workflow, Eye, Box,
  Layers, Timer, Cpu, BookOpen, Package
} from 'lucide-react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';

// ============================================
// SLIDES
// ============================================

const slides = [
  { id: 1, title: 'Залежності — Maven & Gradle', component: DependenciesSlide },
  { id: 2, title: 'Gradle — повна конфігурація', component: GradleFullSlide },
  { id: 3, title: 'CLI — запуск тестів', component: CLISlide },
  { id: 4, title: 'Codegen', component: CodegenSlide },
  { id: 5, title: 'Конфігурація — базовий setup', component: ConfigSlide },
  { id: '5_1', title: 'Конфігурація — Browser Options', component: ConfigOptionsSlide },
  { id: 6, title: 'POM — Page Object (Java)', component: PomJavaSlide },
  { id: '6_1', title: 'POM — DashboardPage', component: PomDashboardSlide },
  { id: '6_2', title: 'POM — структура проєкту', component: PomStructureSlide },
  { id: 7, title: 'Повний приклад — Login Flow', component: FullExampleSlide },
];

// ---------- 1. DEPENDENCIES ----------

function DependenciesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Package} title="Залежності" subtitle="Maven & Gradle — Dependencies" />

        <div className="flex flex-col gap-lg">
          <div className="grid grid-cols-2 gap-base fade-in-delay-1">
            <div>
              <h3 className="font-heading font-semibold text-green mb-sm">Maven — pom.xml</h3>
              <pre className="code-block">
                <code>
{`<dependency>
  <groupId>
    com.microsoft.playwright
  </groupId>
  <artifactId>playwright</artifactId>
  <version>1.57.0</version>
</dependency>

<!-- JUnit 5 -->
<dependency>
  <groupId>
    org.junit.jupiter
  </groupId>
  <artifactId>
    junit-jupiter
  </artifactId>
  <version>5.11.4</version>
  <scope>test</scope>
</dependency>`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-blue mb-sm">Gradle — build.gradle</h3>
              <pre className="code-block">
                <code>
{`dependencies {
  implementation
    'com.microsoft.playwright' +
    ':playwright:1.57.0'

  testImplementation
    'org.junit.jupiter' +
    ':junit-jupiter:5.11.4'
}

test {
  useJUnitPlatform()
}`}
                </code>
              </pre>
            </div>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-purple mb-sm">Встановлення браузерів</h3>
            <pre className="code-block">
              <code>
{`# Maven — встановити браузери через CLI
mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI \\
  -D exec.args="install"

# Gradle — потрібна спеціальна task (див. наступний слайд)
./gradlew playwright --args="install"`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--blue fade-in-delay-3">
            <p className="highlight-box__text">
              💡 <strong>Зверніть увагу:</strong> Playwright Java — <strong>не має вбудованого test runner</strong>.
              Використовуйте JUnit 5 або TestNG. На відміну від JS/Python — немає <code>playwright.config</code>,
              вся конфігурація — в коді.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 2. GRADLE FULL ----------

function GradleFullSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Settings} title="Gradle — повна конфігурація" subtitle="build.gradle (Groovy & Kotlin DSL)" />

        <div className="flex flex-col gap-lg">
          <div className="grid grid-cols-2 gap-base fade-in-delay-1">
            <div>
              <h3 className="font-heading font-semibold text-green mb-sm">Groovy DSL</h3>
              <pre className="code-block">
                <code>
{`plugins {
  id 'java'
  id 'application'
}

repositories {
  mavenCentral()
}

dependencies {
  implementation
    'com.microsoft.playwright' +
    ':playwright:1.57.0'
  testImplementation
    'org.junit.jupiter' +
    ':junit-jupiter:5.11.4'
}

// Task для CLI Playwright
// ./gradlew playwright --args="install firefox"
// ./gradlew playwright --args="codegen"
task playwright(type: JavaExec) {
  classpath sourceSets.test
    .runtimeClasspath
  mainClass =
    'com.microsoft.playwright.CLI'
}

test {
  useJUnitPlatform()
}`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-blue mb-sm">Kotlin DSL</h3>
              <pre className="code-block">
                <code>
{`plugins {
  java
  application
}

repositories {
  mavenCentral()
}

dependencies {
  implementation(
    "com.microsoft.playwright" +
    ":playwright:1.57.0"
  )
  testImplementation(
    "org.junit.jupiter" +
    ":junit-jupiter:5.11.4"
  )
}

// Task для CLI Playwright
tasks.register<JavaExec>(
  "playwright"
) {
  classpath(
    sourceSets["test"].runtimeClasspath
  )
  mainClass.set(
    "com.microsoft.playwright.CLI"
  )
}

tasks.test {
  useJUnitPlatform()
}`}
                </code>
              </pre>
            </div>
          </div>

          <div className="highlight-box highlight-box--orange fade-in-delay-2">
            <p className="highlight-box__text">
              ⚡ <strong>Ключова task:</strong> <code>playwright</code> — обгортка для CLI.
              Через неї запускаємо <code>install</code>, <code>codegen</code>,
              <code>show-trace</code> без Maven.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 3. CLI ----------

function CLISlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Terminal} title="CLI — запуск тестів" subtitle="Running Tests" />

        <div className="flex flex-col gap-lg">
          <div className="fade-in-delay-1">
            <h3 className="font-heading font-semibold text-green mb-sm">Maven — запуск тестів</h3>
            <pre className="code-block">
              <code>
{`# Всі тести
mvn test

# Один тест-клас
mvn test -Dtest=LoginTest

# Один метод
mvn test -Dtest=LoginTest#testSuccessfulLogin

# З системними параметрами (headless, browser)
mvn test -Dbrowser=firefox -Dheadless=false

# Показати деталі
mvn test -Dsurefire.useFile=false`}
              </code>
            </pre>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-blue mb-sm">Gradle — запуск тестів</h3>
            <pre className="code-block">
              <code>
{`# Всі тести
./gradlew test

# Фільтр по класу
./gradlew test --tests "LoginTest"

# Фільтр по методу
./gradlew test --tests "LoginTest.testSuccessfulLogin"

# З системними параметрами
./gradlew test -Dbrowser=firefox -Dheadless=false

# Verbose output
./gradlew test --info`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--blue fade-in-delay-3">
            <p className="highlight-box__text">
              🔑 <strong>Системні параметри:</strong> в Java немає CLI-ключів типу <code>--headed</code> як в JS/Python.
              Замість цього — <code>System.getProperty("browser")</code> + <code>-D</code> прапорці Maven/Gradle.
              Ваш код сам читає ці значення.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 4. CODEGEN ----------

function CodegenSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Code2} title="Codegen" subtitle="Генерація коду — Code Generator" />

        <div className="flex flex-col gap-lg">
          <div className="fade-in-delay-1">
            <h3 className="font-heading font-semibold text-green mb-sm">Запуск Codegen</h3>
            <pre className="code-block">
              <code>
{`# Maven
mvn exec:java -e \\
  -D exec.mainClass=com.microsoft.playwright.CLI \\
  -D exec.args="codegen demo.playwright.dev/todomvc"

# Gradle (якщо додали task playwright)
./gradlew playwright --args="codegen demo.playwright.dev/todomvc"

# З емуляцією пристрою
mvn exec:java -e \\
  -D exec.mainClass=com.microsoft.playwright.CLI \\
  -D exec.args='codegen --device="iPhone 13" playwright.dev'

# З viewport
mvn exec:java -e \\
  -D exec.mainClass=com.microsoft.playwright.CLI \\
  -D exec.args="codegen --viewport-size=800,600 playwright.dev"`}
              </code>
            </pre>
          </div>

          <div className="fade-in-delay-2">
            <h3 className="font-heading font-semibold text-blue mb-sm">Згенерований код (Java)</h3>
            <pre className="code-block">
              <code>
{`import com.microsoft.playwright.*;

public class Example {
  public static void main(String[] args) {
    try (Playwright playwright = Playwright.create()) {
      Browser browser = playwright.chromium().launch(
        new BrowserType.LaunchOptions().setHeadless(false));
      BrowserContext context = browser.newContext();
      Page page = context.newPage();

      page.navigate("https://demo.playwright.dev/todomvc");
      page.getByPlaceholder("What needs to be done?").fill("Buy milk");
      page.getByPlaceholder("What needs to be done?").press("Enter");
    }
  }
}`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--orange fade-in-delay-3">
            <p className="highlight-box__text">
              🎯 <strong>Codegen генерує Java-код</strong> автоматично. Код використовує <code>getByRole()</code>,
              <code>getByLabel()</code>, <code>getByPlaceholder()</code> — ті ж Playwright-селектори,
              які ми вже знаємо. Потім цей код треба перенести у Page Object.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 5. CONFIG ----------

function ConfigSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Settings} title="Конфігурація — базовий setup" subtitle="Base Test Class" />

        <div className="flex flex-col gap-lg">
          <div className="fade-in-delay-1">
            <pre className="code-block">
              <code>
{`// src/test/java/base/BaseTest.java
import com.microsoft.playwright.*;
import org.junit.jupiter.api.*;

public abstract class BaseTest {
    protected static Playwright playwright;
    protected static Browser browser;
    protected BrowserContext context;
    protected Page page;

    @BeforeAll
    static void launchBrowser() {
        playwright = Playwright.create();

        String browserName = System.getProperty("browser", "chromium");
        boolean headless = Boolean.parseBoolean(
            System.getProperty("headless", "true"));

        BrowserType.LaunchOptions opts = new BrowserType.LaunchOptions()
            .setHeadless(headless)
            .setSlowMo(Double.parseDouble(
                System.getProperty("slowmo", "0")));

        switch (browserName) {
            case "firefox" -> browser = playwright.firefox().launch(opts);
            case "webkit"  -> browser = playwright.webkit().launch(opts);
            default        -> browser = playwright.chromium().launch(opts);
        }
    }

    @BeforeEach
    void createContext() {
        context = browser.newContext();
        page = context.newPage();
    }

    @AfterEach
    void closeContext() {
        context.close();
    }

    @AfterAll
    static void closeBrowser() {
        browser.close();
        playwright.close();
    }
}`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--blue fade-in-delay-2">
            <p className="highlight-box__text">
              📋 <strong>Lifecycle:</strong> <code>@BeforeAll</code> — один браузер на весь клас.
              <code>@BeforeEach</code> — свіжий context + page для кожного тесту → <strong>ізольовані тести</strong>.
              Параметри (<code>browser</code>, <code>headless</code>, <code>slowmo</code>) — через <code>-D</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 5.1. CONFIG OPTIONS ----------

function ConfigOptionsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Layers} title="Конфігурація — Browser Options" subtitle="Context & Launch Options" />

        <div className="flex flex-col gap-lg">
          <div className="grid grid-cols-2 gap-base fade-in-delay-1">
            <div>
              <h3 className="font-heading font-semibold text-green mb-sm">Browser Context Options</h3>
              <pre className="code-block">
                <code>
{`// Viewport, locale, timezone
context = browser.newContext(
  new Browser.NewContextOptions()
    .setViewportSize(1280, 720)
    .setLocale("uk-UA")
    .setTimezoneId("Europe/Kyiv")
    .setBaseURL(
      "https://app.example.com"
    )
);

// Запис відео
context = browser.newContext(
  new Browser.NewContextOptions()
    .setRecordVideoDir(
      Paths.get("videos/")
    )
    .setRecordVideoSize(1280, 720)
);`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-blue mb-sm">Tracing</h3>
              <pre className="code-block">
                <code>
{`// Увімкнути трейсинг
context.tracing().start(
  new Tracing.StartOptions()
    .setScreenshots(true)
    .setSnapshots(true)
    .setSources(true)
);

// ... тести ...

// Зберегти trace
context.tracing().stop(
  new Tracing.StopOptions()
    .setPath(Paths.get(
      "traces/trace.zip"
    ))
);

// Відкрити Trace Viewer:
// mvn exec:java -e \\
//   -D exec.mainClass=
//     com.microsoft.playwright.CLI \\
//   -D exec.args=
//     "show-trace traces/trace.zip"`}
                </code>
              </pre>
            </div>
          </div>

          <div className="highlight-box highlight-box--orange fade-in-delay-2">
            <p className="highlight-box__text">
              🔍 <strong>Trace Viewer</strong> — потужний інструмент для дебагу: покроковий перегляд дій,
              скріншоти, мережеві запити, DOM snapshot. Рекомендація: завжди вмикати tracing в CI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 6. POM JAVA ----------

function PomJavaSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={LayoutTemplate} title="POM — Page Object (Java)" subtitle="BasePage & LoginPage" />

        <div className="flex flex-col gap-lg">
          <div className="grid grid-cols-2 gap-base fade-in-delay-1">
            <div>
              <h3 className="font-heading font-semibold text-green mb-sm">BasePage</h3>
              <pre className="code-block">
                <code>
{`// pages/BasePage.java
package pages;

import com.microsoft.playwright.Page;
import java.nio.file.Paths;

public abstract class BasePage {
    protected final Page page;

    public BasePage(Page page) {
        this.page = page;
    }

    public void navigate(String path) {
        page.navigate(path);
    }

    public String getTitle() {
        return page.title();
    }

    public void screenshot(String name) {
        page.screenshot(
          new Page.ScreenshotOptions()
            .setPath(Paths.get(
              "screenshots/"
                + name + ".png"
            ))
        );
    }
}`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-blue mb-sm">LoginPage</h3>
              <pre className="code-block">
                <code>
{`// pages/LoginPage.java
package pages;

import com.microsoft.playwright.*;

public class LoginPage
    extends BasePage {

  private static final String
    URL = "/login";

  private final Locator email;
  private final Locator password;
  private final Locator submitBtn;
  private final Locator errorMsg;

  public LoginPage(Page page) {
    super(page);
    this.email =
      page.getByLabel("Email");
    this.password =
      page.getByLabel("Password");
    this.submitBtn = page.getByRole(
      AriaRole.BUTTON,
      new Page.GetByRoleOptions()
        .setName("Sign in"));
    this.errorMsg =
      page.getByRole(AriaRole.ALERT);
  }

  public void navigate() {
    navigate(URL);
  }

  public void login(
      String email, String pwd) {
    this.email.fill(email);
    this.password.fill(pwd);
    this.submitBtn.click();
  }

  public Locator getError() {
    return errorMsg;
  }
}`}
                </code>
              </pre>
            </div>
          </div>

          <div className="highlight-box highlight-box--blue fade-in-delay-2">
            <p className="highlight-box__text">
              🏗️ <strong>Підхід:</strong> локатори ініціалізуються в конструкторі.
              В Java використовуємо <code>AriaRole.BUTTON</code> (enum) 
              та <code>GetByRoleOptions</code> (builder pattern) — типова Java-стилістика.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 6.1. POM DASHBOARD ----------

function PomDashboardSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={LayoutTemplate} title="POM — DashboardPage" subtitle="Наслідування від BasePage" />

        <div className="flex flex-col gap-lg">
          <div className="fade-in-delay-1">
            <pre className="code-block">
              <code>
{`// pages/DashboardPage.java
package pages;

import com.microsoft.playwright.*;

public class DashboardPage extends BasePage {
    private static final String URL = "/dashboard";

    private final Locator welcome;
    private final Locator logoutBtn;
    private final Locator navMenu;

    public DashboardPage(Page page) {
        super(page);
        this.welcome = page.getByTestId("welcome");
        this.logoutBtn = page.getByRole(
            AriaRole.BUTTON,
            new Page.GetByRoleOptions().setName("Logout"));
        this.navMenu = page.getByRole(AriaRole.NAVIGATION);
    }

    public void navigate() {
        navigate(URL);
    }

    public String getWelcomeText() {
        return welcome.textContent();
    }

    public Locator getWelcome() {
        return welcome;
    }

    public Locator getNavMenu() {
        return navMenu;
    }

    public void logout() {
        logoutBtn.click();
    }
}`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--orange fade-in-delay-2">
            <p className="highlight-box__text">
              📌 <strong>Getter для Locator:</strong> повертаємо <code>Locator</code> з Page Object,
              щоб assertions залишались у тесті: <code>assertThat(dashboard.getWelcome()).isVisible()</code>.
              Це чітко розділяє «знайти елемент» (PO) та «перевірити» (тест).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- 6.2. POM STRUCTURE ----------

function PomStructureSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={FolderTree} title="POM — структура проєкту" subtitle="Project Structure" />

        <div className="flex flex-col gap-lg">
          <div className="grid grid-cols-2 gap-base fade-in-delay-1">
            <div>
              <h3 className="font-heading font-semibold text-green mb-sm">Maven</h3>
              <pre className="code-block">
                <code>
{`my-e2e-tests/
├── pom.xml
└── src/
    └── test/
        └── java/
            ├── base/
            │   └── BaseTest.java
            ├── pages/
            │   ├── BasePage.java
            │   ├── LoginPage.java
            │   ├── DashboardPage.java
            │   └── ProfilePage.java
            ├── tests/
            │   ├── LoginTest.java
            │   ├── DashboardTest.java
            │   └── ProfileTest.java
            └── utils/
                ├── TestData.java
                └── Helpers.java`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-blue mb-sm">Gradle</h3>
              <pre className="code-block">
                <code>
{`my-e2e-tests/
├── build.gradle
├── settings.gradle
└── src/
    └── test/
        └── java/
            ├── base/
            │   └── BaseTest.java
            ├── pages/
            │   ├── BasePage.java
            │   ├── LoginPage.java
            │   ├── DashboardPage.java
            │   └── ProfilePage.java
            ├── tests/
            │   ├── LoginTest.java
            │   ├── DashboardTest.java
            │   └── ProfileTest.java
            └── utils/
                ├── TestData.java
                └── Helpers.java`}
                </code>
              </pre>
            </div>
          </div>

          <div className="highlight-box highlight-box--blue fade-in-delay-2">
            <p className="highlight-box__text">
              📁 <strong>Структура однакова</strong> для Maven і Gradle — відрізняється лише конфіг-файл
              (<code>pom.xml</code> vs <code>build.gradle</code>).
              Все тестове — в <code>src/test/java</code>. Пакети: <code>base</code> → <code>pages</code> → <code>tests</code> → <code>utils</code>.
            </p>
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
          <div className="fade-in-delay-1">
            <pre className="code-block">
              <code>
{`// tests/LoginFlowTest.java
package tests;

import base.BaseTest;
import pages.LoginPage;
import pages.DashboardPage;
import org.junit.jupiter.api.*;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

class LoginFlowTest extends BaseTest {

    @Test
    @DisplayName("Successful login redirects to dashboard")
    void testSuccessfulLogin() {
        LoginPage login = new LoginPage(page);
        DashboardPage dashboard = new DashboardPage(page);

        login.navigate();
        login.login("user@example.com", "secure123");

        // Перевіряємо redirect на dashboard
        assertThat(page).hasURL(java.util.regex.Pattern.compile(".*/dashboard"));
        assertThat(dashboard.getWelcome()).containsText("Welcome");
        assertThat(dashboard.getNavMenu()).isVisible();
    }

    @Test
    @DisplayName("Invalid credentials show error message")
    void testInvalidCredentials() {
        LoginPage login = new LoginPage(page);

        login.navigate();
        login.login("wrong@mail.com", "wrong");

        assertThat(login.getError()).isVisible();
        assertThat(login.getError()).containsText("Invalid credentials");
        // Залишаємось на сторінці логіну
        assertThat(page).hasURL(java.util.regex.Pattern.compile(".*/login"));
    }

    @Test
    @DisplayName("Logout redirects back to login page")
    void testLogoutRedirectsToLogin() {
        LoginPage login = new LoginPage(page);
        DashboardPage dashboard = new DashboardPage(page);

        // Login
        login.navigate();
        login.login("user@example.com", "secure123");
        assertThat(page).hasURL(java.util.regex.Pattern.compile(".*/dashboard"));

        // Logout
        dashboard.logout();
        assertThat(page).hasURL(java.util.regex.Pattern.compile(".*/login"));
    }
}`}
              </code>
            </pre>
          </div>

          <div className="highlight-box highlight-box--orange fade-in-delay-2">
            <p className="highlight-box__text">
              🔗 <strong>Зверніть увагу:</strong> тест працює з двома Page Objects — <code>LoginPage</code> → дія → <code>DashboardPage</code> → перевірка.
              <code>PlaywrightAssertions.assertThat()</code> — web-first assertions з auto-waiting (на відміну від JUnit <code>Assertions</code>).
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

export default function Lecture8Java() {
  return <LectureLayout slides={slides} />;
}