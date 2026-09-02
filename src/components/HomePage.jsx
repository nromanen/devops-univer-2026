import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

// Course repository. Lab texts live in <repo>/labs/<lab-id>/README.md
// GitHub renders README.md automatically when a folder URL is opened,
// so /tree/main/labs/lab-01 is enough — no /blob/.../README.md needed.
const REPO = 'https://github.com/nromanen/devops-univer-2026';
const LABS_PATH = 'tree/main/labs';

// status: 'ready' | 'draft'
const LECTURES = [
  { num: '1',  title: 'Вступ у DevOps. Unix/Linux',
    desc: 'Життєвий цикл застосунку • Shell і файлова система • Обробка тексту • Мережеві утиліти • Логування • Bash',
    status: 'ready' },

  { num: '2',  title: 'Автоматизація рутинних задач',
    desc: 'Bash-скрипти • Резервне копіювання • Моніторинг системи • Python для DevOps • Cron • Git hooks',
    status: 'ready' },

  { num: '3',  title: 'Мережа очима DevOps',
    desc: 'Шлях запиту • Порти й сокети • DNS і TTL • Точка входу • HTTP-коди • TLS • CORS • Діагностика',
    status: 'ready' },

  { num: '4',  title: 'Безперервна інтеграція',
    desc: 'Анатомія конвеєра • Матриця й кеш • Фільтри за шляхами • Піраміда тестів • Обов\'язкові перевірки',
    status: 'ready' },

  { num: '5',  title: 'Контейнери й образи',
    desc: 'Образ, шар, контейнер • Dockerfile • Кеш збірки • Багатоетапна збірка • Непривілейований користувач',
    status: 'draft' },

  { num: '6',  title: 'Багатоконтейнерні середовища й реєстри',
    desc: 'Compose • Мережі й томи • Прив\'язка і проброс портів • Схема тегування • Публікація з конвеєра',
    status: 'draft' },

  { num: '7',  title: 'Безперервна доставка й керовані платформи',
    desc: 'Середовища • Стратегії розгортання • Відкат • PaaS • Холодний старт • Метрики розгортання',
    status: 'draft' },

  { num: '8',  title: 'Дані та стан в експлуатації',
    desc: 'Міграції в конвеєрі • Зворотна сумісність схеми • Пул з\'єднань • Перевірка відновлення • Кеш',
    status: 'draft' },

  { num: '9',  title: 'Kubernetes: архітектура й основні об\'єкти',
    desc: 'Цикл узгодження стану • Под • Deployment • Мітки й селектори • Service • Ingress • ConfigMap',
    status: 'draft' },

  { num: '10', title: 'Kubernetes: експлуатація',
    desc: 'Проби • Ресурси й ліміти • Почергове оновлення • Відкат • Автомасштабування • Helm • GitOps',
    status: 'draft' },

  { num: '11', title: 'Інфраструктура як код',
    desc: 'Terraform і OpenTofu • Провайдери • Файл стану • Модулі • Дрейф конфігурації • План у конвеєрі',
    status: 'draft' },

  { num: '12', title: 'Управління конфігурацією',
    desc: 'Ansible • Інвентар • Playbook • Ідемпотентність • Шаблони • Ролі • Сховище секретів',
    status: 'draft' },

  { num: '13', title: 'Моніторинг і спостережуваність',
    desc: 'Метрики, журнали, траси • Перцентилі • Prometheus • Золоті сигнали • Алерти • Інструкція реагування',
    status: 'draft' },

  { num: '14', title: 'DevSecOps',
    desc: 'Статичний аналіз • Аналіз залежностей • Сканування образів • Секрети й ротація • Ланцюг постачання',
    status: 'draft' },

  { num: '15', title: 'Культура DevOps і підсумки курсу',
    desc: 'Спільна відповідальність • Метрики DORA • Рівні обслуговування • Бюджет помилок • Розбір інцидентів',
    status: 'draft' },
];

// status: 'ready' | 'draft'
const LABS = [
  { id: 'lab-01', num: '1',  title: 'Середовище та професійний Git workflow',
    desc: 'Git і редактор • SSH • Портфоліо-репозиторій • Ruleset • Дошка проєкту',
    score: 5,  status: 'ready' },

  { id: 'lab-02', num: '2',  title: 'Командна робота з Git',
    desc: 'Спільний довідник • CODEOWNERS • Рецензування • Конфлікт злиття • Чиста історія',
    score: 6,  status: 'ready' },

  { id: 'lab-03', num: '3',  title: 'Власний DevOps-інструментарій',
    desc: 'Резервне копіювання з ротацією • Монітор доступності API • Git-хуки',
    score: 8,  status: 'ready' },

  { id: 'lab-04', num: '4',  title: 'Застосунок і безперервна інтеграція',
    desc: 'Розбір кодової бази • Лінтери й тести • Матриця, кеш, фільтри • Обов\'язкові перевірки',
    score: 10, status: 'draft' },

  { id: 'lab-05', num: '5',  title: 'Контейнеризація',
    desc: 'Два образи • Оптимізація розміру • Локальне середовище • Публікація з конвеєра',
    score: 9,  status: 'draft' },

  { id: 'lab-06', num: '6',  title: 'Розподілений деплой на PaaS',
    desc: 'Розділення застосунку • Керовані БД і кеш • CORS • Звіт про обмеження',
    score: 9,  status: 'draft' },

  { id: 'lab-07', num: '7',  title: 'Оркестрація контейнерів',
    desc: 'Локальний кластер • Маніфести • Проби й ресурси • Оновлення й відкат • Helm',
    score: 9,  status: 'draft' },

  { id: 'lab-08', num: '8',  title: 'Інфраструктура як код',
    desc: 'Опис ресурсів • Модулі • Віддалений стан • Конфігурація сервера • Знищення ресурсів',
    score: 9,  status: 'draft' },

  { id: 'lab-09', num: '9',  title: 'Моніторинг розподіленого застосунку',
    desc: 'Стек моніторингу • Метрики застосунку • Дашборди • Алерти • Демонстрація збою',
    score: 10, status: 'draft' },

  { id: 'lab-10', num: '10', title: 'Практики DevSecOps',
    desc: 'Статичний аналіз • Сканування образів • Секрети й ротація • Динамічний аналіз',
    score: 9,  status: 'draft' },

  { id: 'final',  num: '★',  title: 'Фінальний проєкт',
    desc: 'Зведення робіт 4–10 • Документація • Жива демонстрація наскрізного сценарію',
    score: 16, status: 'draft' },
];

/**
 * HomePage — course landing shown when no lecture is selected.
 *
 * Props:
 *   onOpenLecture {(num: string) => void} — called when a ready lecture card is clicked
 */
export default function HomePage({ onOpenLecture }) {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__badge">2026 / 2027</div>
        <h1 className="home__title">
          Основи<br />DevOps
        </h1>
        <p className="home__desc">
          Матеріали курсу — від командного рядка до кластера, моніторингу й безпеки конвеєра
        </p>
        <div className="home__stats">
          <span><strong>15</strong> лекцій</span>
          <span><strong>10</strong> лабораторних</span>
          <span><strong>100</strong> балів</span>
        </div>
      </section>

      <h2 className="home__section-title">Лекції</h2>
      <div className="home__grid">
        {LECTURES.map((l, i) => {
          const style = { animationDelay: `${(i + 1) * 0.02}s` };

          if (l.status !== 'ready') {
            return (
              <div key={l.num} className="home-card home-card--disabled" style={style}>
                <div className="home-card__num">{l.num}</div>
                <div className="home-card__body">
                  <div className="home-card__title">{l.title}</div>
                  <div className="home-card__status">В розробці</div>
                </div>
              </div>
            );
          }

          return (
            <button
              key={l.num}
              type="button"
              className="home-card"
              style={style}
              onClick={() => onOpenLecture(l.num)}
            >
              <div className="home-card__num">{l.num}</div>
              <div className="home-card__body">
                <div className="home-card__title">{l.title}</div>
                {l.desc && <div className="home-card__desc">{l.desc}</div>}
              </div>
              <ArrowRight className="home-card__arrow" />
            </button>
          );
        })}
      </div>

      <h2 className="home__section-title">Лабораторні роботи</h2>
      <div className="home__grid">
        {LABS.map((lab, i) => {
          const style = { animationDelay: `${(i + 1) * 0.02}s` };

          if (lab.status !== 'ready') {
            return (
              <div key={lab.id} className="home-card home-card--disabled" style={style}>
                <div className="home-card__num">{lab.num}</div>
                <div className="home-card__body">
                  <div className="home-card__title">{lab.title}</div>
                  <div className="home-card__status">В розробці</div>
                </div>
                <div className="home-card__score" title={`${lab.score} балів`}>
                  {lab.score}
                </div>
              </div>
            );
          }

          return (
            <a
              key={lab.id}
              className="home-card"
              href={`${REPO}/${LABS_PATH}/${lab.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={style}
            >
              <div className="home-card__num">{lab.num}</div>
              <div className="home-card__body">
                <div className="home-card__title">{lab.title}</div>
                {lab.desc && <div className="home-card__desc">{lab.desc}</div>}
              </div>
              <div className="home-card__score" title={`${lab.score} балів`}>
                {lab.score}
              </div>
            </a>
          );
        })}
      </div>

      <div className="home__note">
        <Terminal />
        <p>
          Усі репозиторії курсу публічні. AI-асистенти дозволені — але на захисті
          «так порадив AI» не є відповіддю на питання «чому саме так».
        </p>
      </div>
    </div>
  );
}