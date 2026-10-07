import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import ExtLink from '../components/ExtLink';
import {
    GitBranch, GitMerge, Target, AlertTriangle,
    BookOpen, Triangle, Ruler, PieChart, ShieldAlert,
    Lock, MessageSquare, Users, Timer, Dice5, Tag, Siren, Wrench,
    HelpCircle, Cpu, Grid3x3, Database, KeyRound, EyeOff, FolderTree,
    Layers, Play, Server, Clock, Package, Bug, Zap,
    ArrowRight, CheckCircle2, XCircle,
} from 'lucide-react';

// ============================================
// SLIDES ARRAY
// `selfStudy: true` — slide is left to the student.
// ============================================

const slides = [
    { id: 1, title: 'Титульний слайд', component: TitleSlide },
    { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
    { id: 3, title: 'Навіщо потрібна CI', component: WhyCiSlide },
    { id: 4, title: 'Що CI ловить, а що ні', component: WhatCiCatchesSlide },
    { id: '4_1', title: 'CI — це практика, не інструмент', component: TeamPracticeSlide },
    { id: '4_2', title: 'Інтеграція ≠ злиття pull request', component: IntegrationTargetSlide },
    { id: 5, title: 'Анатомія конвеєра', component: PipelineAnatomySlide },
    { id: 6, title: 'Тригери: push, PR, розклад', component: TriggersSlide },
    { id: 7, title: 'Завдання, кроки, артефакти', component: JobsStepsArtifactsSlide },
    { id: 8, title: 'Runner: де це виконується', component: RunnersSlide, selfStudy: true },
    { id: '8_1', title: 'Чим це реалізується', component: CiSystemsSlide, selfStudy: true },
    { id: 9, title: 'Матрична стратегія', component: MatrixSlide, selfStudy: true },
    { id: 10, title: 'Кешування залежностей', component: CachingSlide, selfStudy: true },
    { id: 11, title: 'Фільтри за шляхами', component: PathFiltersSlide, selfStudy: true },
    { id: 12, title: 'Секрети в конвеєрі', component: SecretsSlide },
    { id: 13, title: 'Піраміда тестів', component: TestPyramidSlide },
    { id: 14, title: 'Який рівень тестів де запускати', component: TestPlacementSlide },
    { id: 15, title: 'Лінтери й форматери', component: LintersSlide },
    { id: 16, title: 'Покриття коду', component: CoverageSlide },
    { id: 17, title: 'Аудит залежностей', component: DependencyAuditSlide },
    { id: 18, title: 'Обов\'язкові перевірки', component: RequiredChecksSlide },
    { id: 19, title: 'Code review як частина процесу', component: CodeReviewSlide },
    { id: 20, title: 'CODEOWNERS і захист гілок', component: BranchProtectionSlide },
    { id: 21, title: 'Швидкість зворотного зв\'язку', component: FeedbackSpeedSlide },
    { id: 22, title: 'Нестабільні тести', component: FlakyTestsSlide },
    { id: 23, title: 'Що ламається без ваших змін', component: MovingVersionsSlide },
    { id: '23_1', title: 'Демонстрація', component: DemoSlide },
    { id: 24, title: 'Типові помилки', component: CommonMistakesSlide },
    { id: 25, title: 'Підсумки', component: SummarySlide },
    { id: 26, title: 'Питання?', component: QuestionsSlide },
];

export default function Lecture4() {
    return <LectureLayout slides={slides} />;
}

// ---------- 1. TITLE ----------

function TitleSlide() {
    return (
        <div className="slide slide--centered slide--gradient-blue-purple">
            <div className="title-slide__icon-wrapper">
                <GitBranch />
            </div>
            <h1 className="title-slide__title">
                Безперервна інтеграція
            </h1>
            <h2 className="title-slide__subtitle">
                Лекція 3 — Основи DevOps
            </h2>
            <p className="title-slide__english">
                Continuous Integration
            </p>
            <div className="title-slide__badge">
                <p>🔁 Кожна зміна перевіряється автоматично</p>
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
                                Зрозуміти CI як домовленість команди
                                <span className="step-list__subtitle"> — Practice Before Tooling</span>
                            </h3>
                            <p className="step-list__description">
                                Короткі гілки, щоденна інтеграція, зламана основна гілка як привід
                                зупинитися
                            </p>
                        </div>
                    </div>

                    <div className="step-list__item step-list__item--purple fade-in-delay-2">
                        <div className="step-list__number step-list__number--purple">2</div>
                        <div className="step-list__content">
                            <h3 className="step-list__title step-list__title--purple">
                                Зрозуміти, що таке конвеєр
                                <span className="step-list__subtitle"> — Pipeline Anatomy</span>
                            </h3>
                            <p className="step-list__description">
                                Тригери, завдання, кроки, артефакти — модель, однакова в усіх системах CI
                            </p>
                        </div>
                    </div>

                    <div className="step-list__item step-list__item--green fade-in-delay-3">
                        <div className="step-list__number step-list__number--green">3</div>
                        <div className="step-list__content">
                            <h3 className="step-list__title step-list__title--green">
                                Розібратися, що саме перевіряти
                                <span className="step-list__subtitle"> — Tests, Linters, Audit</span>
                            </h3>
                            <p className="step-list__description">
                                Рівні тестів, покриття, перевірка залежностей на вразливості
                            </p>
                        </div>
                    </div>

                    <div className="step-list__item step-list__item--orange fade-in-delay-4">
                        <div className="step-list__number step-list__number--orange">4</div>
                        <div className="step-list__content">
                            <h3 className="step-list__title step-list__title--orange">
                                Зробити перевірки обов'язковими
                                <span className="step-list__subtitle"> — Required Checks</span>
                            </h3>
                            <p className="step-list__description">
                                Конвеєр, який блокує злиття, а не просто малює червоний хрестик
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ---------- 3. WHY CI ----------

function WhyCiSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Zap}
                    title="Навіщо потрібна CI"
                    subtitle="Integrate Often, Break Less"
                />

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="outlined-card outlined-card--red fade-in-delay-1">
                        <div className="flex items-center gap-sm mb-base">
                            <XCircle className="icon-lg text-red" />
                            <h3 className="font-heading fs-section font-bold text-red">
                                Без CI
                            </h3>
                        </div>
                        <div className="flex flex-col gap-sm">
                            <p className="fs-body text-secondary">Гілка живе два тижні</p>
                            <p className="fs-body text-secondary">Тести запускає той, хто пам'ятає</p>
                            <p className="fs-body text-secondary">«У мене працює» — і це правда</p>
                            <p className="fs-body text-secondary">Злиття перетворюється на подію</p>
                        </div>
                        <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
                            Помилку знаходять через тижні після того, як її внесли
                        </p>
                    </div>

                    <div className="outlined-card outlined-card--green fade-in-delay-2">
                        <div className="flex items-center gap-sm mb-base">
                            <CheckCircle2 className="icon-lg text-green" />
                            <h3 className="font-heading fs-section font-bold text-green">
                                З CI
                            </h3>
                        </div>
                        <div className="flex flex-col gap-sm">
                            <p className="fs-body text-secondary">Кожна зміна перевіряється одразу</p>
                            <p className="fs-body text-secondary">Перевірка однакова для всіх</p>
                            <p className="fs-body text-secondary">Середовище чисте щоразу</p>
                            <p className="fs-body text-secondary">Злиття — рутина, а не подія</p>
                        </div>
                        <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
                            Помилку видно через хвилини, поки контекст ще в голові
                        </p>
                    </div>
                </div>

                <div className="outlined-card outlined-card--gradient-green-blue mb-base fade-in-delay-3">
                    <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
                        Головна цінність не в автоматизації, а в{' '}
                        <strong>швидкості зворотного зв'язку</strong>
                    </p>
                </div>

                <div className="slide-grid slide-grid--2col">
                    <div className="definition definition--cyan fade-in-delay-4">
                        <p className="definition__term definition__term--cyan">Continuous Integration</p>
                        <p className="definition__description">
                            Дослівно — «безперервне вливання»: кожен вливає свої зміни в спільну
                            гілку часто, а не накопичує тижнями. Автоматичні перевірки роблять це
                            безпечним
                        </p>
                    </div>
                    <div className="definition definition--orange fade-in-delay-5">
                        <p className="definition__term definition__term--orange">Ціна затримки</p>
                        <p className="definition__description">
                            Помилка, знайдена через хвилину, коштує хвилин. Та сама помилка на
                            продакшені — годин роботи кількох людей і довіри користувачів
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ---------- 4. WHAT CI CATCHES ----------

function WhatCiCatchesSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Bug}
                    title="Що CI ловить, а що ні"
                    subtitle="Realistic Expectations"
                />

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="outlined-card outlined-card--green fade-in-delay-1">
                        <div className="flex items-center gap-sm mb-base">
                            <CheckCircle2 className="icon-lg text-green" />
                            <h3 className="font-heading fs-section font-bold text-green">
                                Ловить
                            </h3>
                        </div>
                        <div className="flex flex-col gap-sm">
                            <p className="fs-body text-secondary">Код не збирається</p>
                            <p className="fs-body text-secondary">Тести не проходять</p>
                            <p className="fs-body text-secondary">Забутий файл, який є лише локально</p>
                            <p className="fs-body text-secondary">Залежність із відомою вразливістю</p>
                            <p className="fs-body text-secondary">Порушення стилю й очевидні дефекти</p>
                            <p className="fs-body text-secondary">Конфлікт зі змінами колеги</p>
                        </div>
                    </div>

                    <div className="outlined-card outlined-card--orange fade-in-delay-2">
                        <div className="flex items-center gap-sm mb-base">
                            <XCircle className="icon-lg text-orange" />
                            <h3 className="font-heading fs-section font-bold text-orange">
                                Не ловить
                            </h3>
                        </div>
                        <div className="flex flex-col gap-sm">
                            <p className="fs-body text-secondary">Неправильно зрозумілу вимогу</p>
                            <p className="fs-body text-secondary">Погану архітектуру</p>
                            <p className="fs-body text-secondary">Те, на що немає тесту</p>
                            <p className="fs-body text-secondary">Проблеми під навантаженням</p>
                            <p className="fs-body text-secondary">Помилки конфігурації середовища</p>
                            <p className="fs-body text-secondary">Незручний інтерфейс</p>
                        </div>
                    </div>
                </div>

                <HighlightBox color="orange" icon={AlertTriangle}>
                    Зелений конвеєр означає рівно одне: <strong>перевірки, які ви написали,
                        пройшли</strong>. Не «код правильний» і не «можна випускати». Якість
                    конвеєра дорівнює якості перевірок у ньому.
                </HighlightBox>

                <div className="highlight-box highlight-box--blue mt-base">
                    <p className="highlight-box__text fs-body-sm">
                        Звідси практичний висновок: коли на продакшені знайшли помилку, першим
                        питанням має бути не «хто винен», а <strong>«яка перевірка мала її
                            спіймати і чому її немає»</strong>. Кожен інцидент — привід дописати тест.
                    </p>
                </div>
            </div>
        </div>
    );
}

// ---------- 4_1. CI AS A TEAM PRACTICE ----------

function TeamPracticeSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Users}
                    title="CI — це практика, не інструмент"
                    subtitle="What the Team Does, What the Machine Does"
                />

                <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
                    <p className="fs-lg text-primary" style={{ margin: 0 }}>
                        Конвеєр не робить CI. CI робить <strong>домовленість команди</strong>:
                        вливати зміни в спільну гілку щодня. Конвеєр лише робить цю домовленість
                        дешевою й безпечною.
                    </p>
                </div>

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="outlined-card outlined-card--red fade-in-delay-2">
                        <div className="flex items-center gap-sm mb-base">
                            <GitBranch className="icon-lg text-red" />
                            <h3 className="font-heading fs-section font-bold text-red">
                                Гілка на два тижні
                            </h3>
                        </div>
                        <div className="flex flex-col gap-sm">
                            <p className="fs-body text-secondary">Конфлікти ростуть швидше, ніж сама гілка</p>
                            <p className="fs-body text-secondary">Рецензія на 60 файлів не буває уважною</p>
                            <p className="fs-body text-secondary">Відкотити зміну = відкотити все одразу</p>
                            <p className="fs-body text-secondary">Автор уже не пам'ятає, навіщо той рядок</p>
                        </div>
                    </div>

                    <div className="outlined-card outlined-card--green fade-in-delay-3">
                        <div className="flex items-center gap-sm mb-base">
                            <GitMerge className="icon-lg text-green" />
                            <h3 className="font-heading fs-section font-bold text-green">
                                Гілка на день
                            </h3>
                        </div>
                        <div className="flex flex-col gap-sm">
                            <p className="fs-body text-secondary">Конфлікт — на кілька рядків, не на модуль</p>
                            <p className="fs-body text-secondary">Рецензія на 200 рядків справді читається</p>
                            <p className="fs-body text-secondary">Відкотити можна точково</p>
                            <p className="fs-body text-secondary">Контекст ще в голові в усіх учасників</p>
                        </div>
                    </div>
                </div>

                <div className="outlined-card outlined-card--purple mb-base fade-in-delay-4">
                    <h3 className="font-heading fs-card-title font-bold text-purple mb-sm">
                        Як вливати незавершене
                    </h3>
                    <p className="fs-body text-secondary mb-base">
                        Очевидне заперечення: «моя задача на тиждень, що мені вливати щодня?»
                        Відповідь — <strong>завершений шматок, а не завершену фічу</strong>.
                        Зламаний код не вливають ніколи; код, який ще не робить усього
                        задуманого, — вливають постійно.
                    </p>
                    <div className="flex flex-col gap-sm">
                        <p className="fs-body text-secondary">
                            <strong className="text-purple">Нарізати задачу.</strong> Імпорт із файлу —
                            це парсер, валідація, збереження, кнопка. Кожен шматок робочий і
                            перевірений сам по собі, хоч імпорту як функції ще немає
                        </p>
                        <p className="fs-body text-secondary">
                            <strong className="text-purple">Влити код, який ще ніхто не викликає.</strong>{' '}
                            Новий модуль лежить у спільній гілці, покритий тестами, і просто не
                            підключений. Нічого зламати не може
                        </p>
                    </div>
                    <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
                        Якщо ж готовий код треба вмикати на льоту або лише частині користувачів —
                        для цього є прапорці функціональності. Але це вже про постачання, а не
                        про інтеграцію, тож повернемось до них у відповідній лекції
                    </p>
                </div>

                <div className="outlined-card outlined-card--orange mb-base fade-in-delay-5">
                    <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                        Зламана основна гілка
                    </h3>
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>
                        Зупиняє не автора, а всю команду: кожен наступний бачить червоне й не
                        розуміє, чи це він. Тому лагодять негайно, а не «після обіду» — і це теж
                        домовленість, яку жоден інструмент не встановить за вас.
                    </p>
                </div>

                <HighlightBox color="orange" icon={AlertTriangle}>
                    Звідси висновок: можна мати бездоганний конвеєр із
                    матрицею, кешем і обов'язковими перевірками — і{' '}
                    <strong>не мати CI</strong>, якщо гілки живуть тижнями. Інструмент без
                    практики не працює; практика без інструмента працює гірше, але працює.
                </HighlightBox>
            </div>
        </div>
    );
}


// ---------- 4_2. INTEGRATION IS NOT A MERGE ----------

function IntegrationTargetSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={GitMerge}
                    title="Інтеграція ≠ злиття pull request"
                    subtitle="You Integrate Against a Moving Target"
                />

                <p className="fs-body text-secondary mb-base fade-in-delay-1">
                    Поки ви працюєте у своїй гілці, основна не стоїть на місці. Питання не в
                    тому, чи працює ваш код, а в тому, чи працює він{' '}
                    <strong>разом із тим, що з'явилося за цей час</strong>.
                </p>

                <div className="flow-diagram mb-xl fade-in-delay-2">
                    <div className="icon-box icon-box--blue">
                        <GitBranch className="icon-box__icon icon-box__icon--blue" />
                        <p className="icon-box__title">Ваша гілка</p>
                        <p className="icon-box__subtitle">зелена</p>
                    </div>

                    <ArrowRight className="arrow" />

                    <div className="icon-box icon-box--purple">
                        <GitBranch className="icon-box__icon icon-box__icon--purple" />
                        <p className="icon-box__title">Гілка колеги</p>
                        <p className="icon-box__subtitle">теж зелена</p>
                    </div>

                    <ArrowRight className="arrow" />

                    <div className="icon-box icon-box--red">
                        <Siren className="icon-box__icon" />
                        <p className="icon-box__title">Разом у main</p>
                        <p className="icon-box__subtitle">зламано</p>
                    </div>
                </div>

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="definition definition--orange fade-in-delay-3">
                        <p className="definition__term definition__term--orange">Текстовий конфлікт</p>
                        <p className="definition__description">
                            Двоє правили ті самі рядки. Система помічає це сама й не дасть злити,
                            доки не розв'яжете
                        </p>
                    </div>
                    <div className="definition definition--red fade-in-delay-3">
                        <p className="definition__term definition__term--red">Смисловий конфлікт</p>
                        <p className="definition__description">
                            Один перейменував функцію, другий у своїй гілці додав її виклик зі старою
                            назвою. Різні файли, жодного конфлікту для Git — і зламана збірка
                            після злиття
                        </p>
                    </div>
                </div>

                <div className="numbered-list mb-base">
                    <div className="numbered-list__item fade-in-delay-4">
                        <div className="numbered-list__number">1</div>
                        <div className="numbered-list__content">
                            <p className="numbered-list__text">
                                Конвеєр на pull request перевіряє результат злиття, а не вашу гілку
                            </p>
                            <p className="fs-body-sm text-muted mt-sm">
                                Саме тому перевірка на push у гілку й перевірка на pull request дають
                                різні відповіді
                            </p>
                        </div>
                    </div>
                    <div className="numbered-list__item fade-in-delay-5">
                        <div className="numbered-list__number">2</div>
                        <div className="numbered-list__content">
                            <p className="numbered-list__text">
                                Але перевірено було злиття з <strong>тим</strong> станом основної гілки
                            </p>
                            <p className="fs-body-sm text-muted mt-sm">
                                Поки йшла рецензія, туди встигли влити ще дві зміни — і результат уже
                                інший
                            </p>
                        </div>
                    </div>
                    <div className="numbered-list__item fade-in-delay-5">
                        <div className="numbered-list__number">3</div>
                        <div className="numbered-list__content">
                            <p className="numbered-list__text">
                                Звідси вимога актуальності гілки перед злиттям
                            </p>
                            <p className="fs-body-sm text-muted mt-sm">
                                Правило із захисту гілок, яке побачимо далі: щоб злити, у вашу гілку
                                має бути влитий поточний стан основної. Ціна — після кожного такого
                                підтягування конвеєр стартує заново, а основна за ці кілька хвилин
                                може зсунутися ще раз. Там, де вливають десятки разів на день, це
                                знімають чергою злиття: платформа сама по черзі зливає кожен pull
                                request з актуальною основною, проганяє перевірки й вливає, якщо зелено
                            </p>
                        </div>
                    </div>
                </div>

                <HighlightBox color="cyan">
                    Зелений конвеєр на вашому pull request означає, що зеленим був результат
                    злиття <strong>на той момент</strong>. Git уміє спіймати конфлікт у тих
                    самих рядках, але не вміє спіймати конфлікт у змісті — для цього й потрібен
                    прогін перевірок на результаті злиття, а не на вашій гілці.
                </HighlightBox>
            </div>
        </div>
    );
}


// ---------- 5. PIPELINE ANATOMY ----------

function PipelineAnatomySlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={GitBranch}
                    title="Анатомія конвеєра"
                    subtitle="Trigger, Job, Step, Artifact"
                />

                <div className="flow-diagram mb-xl fade-in-delay-1">
                    <div className="icon-box icon-box--blue">
                        <Zap className="icon-box__icon icon-box__icon--blue" />
                        <p className="icon-box__title">Подія</p>
                        <p className="icon-box__subtitle">push, PR, розклад</p>
                    </div>

                    <ArrowRight className="arrow" />

                    <div className="icon-box icon-box--purple">
                        <Server className="icon-box__icon icon-box__icon--purple" />
                        <p className="icon-box__title">Завдання</p>
                        <p className="icon-box__subtitle">чиста машина</p>
                    </div>

                    <ArrowRight className="arrow" />

                    <div className="icon-box icon-box--green">
                        <Play className="icon-box__icon icon-box__icon--green" />
                        <p className="icon-box__title">Кроки</p>
                        <p className="icon-box__subtitle">по черзі, згори вниз</p>
                    </div>

                    <ArrowRight className="arrow" />

                    <div className="icon-box icon-box--orange">
                        <Package className="icon-box__icon" />
                        <p className="icon-box__title">Артефакт</p>
                        <p className="icon-box__subtitle">що лишилося після</p>
                    </div>
                </div>

                <h3 className="font-heading fs-card-title font-bold text-primary mb-base fade-in-delay-2">
                    Як це називається
                </h3>

                <div className="slide-grid slide-grid--2col mb-base">
                    <CodeBlock title="GitHub Actions — workflow → job → step" color="blue">
                        {`# увесь файл — це workflow
name: CI
on: [pull_request]

jobs:
  test:                        # job — своя машина
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v5   # step
      - run: npm ci                 # step
      - run: npm test               # step

  lint:                        # ще один job — паралельно
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v5
      - run: npm run lint`}
                    </CodeBlock>

                    <CodeBlock title="GitLab CI — pipeline → stage → job" color="orange">
                        {`# увесь прогін файлу — це pipeline
stages: [check]                # оголошення stage

test:                          # job — своя машина
  stage: check
  image: node:24
  script:                      # просто список команд
    - npm ci
    - npm test

lint:                          # ще один job у тому ж stage
  stage: check
  image: node:24
  script:
    - npm run lint`}
                    </CodeBlock>
                </div>

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="definition definition--blue fade-in-delay-3">
                        <p className="definition__term definition__term--blue">Що тут видно</p>
                        <p className="definition__description">
                            Два job в обох системах — вони не залежать одне від одного й тому
                            запускаються паралельно, на різних машинах. Якщо вільних виконавців
                            бракує, другий просто зачекає своєї черги. У Actions кожен
                            <span className="font-mono"> step</span> має власну назву й статус, тож
                            у журналі видно, який саме впав
                        </p>
                    </div>
                    <div className="definition definition--orange fade-in-delay-3">
                        <p className="definition__term definition__term--orange">
                            Чому ланцюжок GitLab коротший
                        </p>
                        <p className="definition__description">
                            <span className="font-mono">script</span> — не окрема сутність, а ключ
                            зі списком рядків. Окремих кроків зі статусами там немає. Натомість є
                            <span className="font-mono"> stage</span>, якого немає в Actions:
                            порядок там задають залежностями між job
                        </p>
                    </div>
                </div>

                <div className="slide-grid slide-grid--2col mb-base">
                    <div className="definition definition--green fade-in-delay-4">
                        <p className="definition__term definition__term--green">Машина чиста щоразу</p>
                        <p className="definition__description">
                            Нічого не лишається від попереднього запуску. Це і є гарантія
                            відтворюваності — і причина, чому потрібен кеш
                        </p>
                    </div>
                    <div className="definition definition--orange fade-in-delay-4">
                        <p className="definition__term definition__term--orange">Завдання ізольовані</p>
                        <p className="definition__description">
                            Два job вище не бачать файлів одне одного, тому кожен окремо отримує
                            код. Передати щось між ними можна лише через артефакти
                        </p>
                    </div>
                </div>

                <HighlightBox color="cyan">
                    Остання пара пояснює найчастіше здивування новачка: «я ж зібрав проєкт у
                    попередньому завданні, чому наступне його не бачить». Тому що це{' '}
                    <strong>інша машина</strong>.
                </HighlightBox>
            </div>
        </div>
    );
}

// ---------- 6. TRIGGERS ----------

function TriggersSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Play}
                    title="Тригери"
                    subtitle="What Starts the Pipeline"
                />

                <div className="slide-grid slide-grid--2col mb-xl">
                    <InfoCard
                        icon={GitBranch}
                        title="Push у гілку"
                        subtitle="Найчастіший"
                        description="Кожна відправка змін запускає перевірку. Для основної гілки зазвичай ще й розгортання"
                        color="blue"
                        delay={1}
                    />
                    <InfoCard
                        icon={CheckCircle2}
                        title="Pull request"
                        subtitle="Головний для командної роботи"
                        description="Перевіряє результат злиття, а не саму гілку. Саме ці перевірки роблять обов'язковими"
                        color="purple"
                        delay={2}
                    />
                    <InfoCard
                        icon={Clock}
                        title="За розкладом"
                        subtitle="Періодично"
                        description="Нічні прогони довгих тестів, перевірка залежностей на нові вразливості"
                        color="green"
                        delay={3}
                    />
                    <InfoCard
                        icon={Zap}
                        title="Вручну"
                        subtitle="За кнопкою"
                        description="Розгортання, разові операції обслуговування. Часто з підтвердженням від відповідальної людини"
                        color="orange"
                        delay={4}
                    />
                </div>

                <div className="outlined-card outlined-card--blue mb-base fade-in-delay-5">
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>
                        <strong className="text-blue">Тригер за міткою версії</strong> — окремий
                        випадок push, який зазвичай запускає випуск: збірку релізного артефакта й
                        розгортання в робоче середовище. Так відділяють «перевірили» від «випустили».
                    </p>
                </div>

                <HighlightBox color="orange" icon={AlertTriangle}>
                    Найдорожча помилка з тригерами — запускати все на кожну подію. Повний прогон
                    на кожен коміт у чернетку витрачає час людей і хвилини виконавців. Тригери
                    обмежують гілками, шляхами й типами подій.
                </HighlightBox>
            </div>
        </div>
    );
}

// ---------- 7. JOBS, STEPS, ARTIFACTS ----------

function JobsStepsArtifactsSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Package}
                    title="Завдання, кроки, артефакти"
                    subtitle="Same Pipeline, Two Syntaxes"
                />

                <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
                    <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
                        Один і той самий конвеєр у двох системах. Слова різні —{' '}
                        <strong>структура однакова</strong>
                    </p>
                </div>

                <div className="slide-grid slide-grid--2col mb-base">
                    <CodeBlock title="GitHub Actions" color="blue">
                        {`on:
  pull_request:
 
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - run: npm ci
      - run: npm test`}
                    </CodeBlock>

                    <CodeBlock title="GitLab CI" color="orange">
                        {`test:
  stage: test          # *
  image: node:24
  script:
    - npm ci
    - npm test
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"`}
                    </CodeBlock>
                </div>

                <div className="outlined-card outlined-card--orange mb-xl fade-in-delay-2">
                    <p className="fs-body-sm text-secondary" style={{ margin: 0 }}>
                        <strong className="text-orange">*</strong> Блоку{' '}
                        <span className="font-mono">stages</span> тут немає, бо п'ять етапів
                        існують у GitLab за замовчуванням і саме в такому порядку:{' '}
                        <span className="font-mono">.pre → build → test → deploy → .post</span>.
                        Job без <span className="font-mono">stage</span> потрапляє в{' '}
                        <span className="font-mono">test</span>. Варто назвати етап інакше —
                        скажімо <span className="font-mono">check</span> — і його вже доведеться
                        оголосити, інакше пайплайн не пройде валідацію. На практиці{' '}
                        <span className="font-mono">stages</span> пишуть завжди: це єдине місце,
                        де видно порядок виконання.
                    </p>
                </div>

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="definition definition--blue fade-in-delay-3">
                        <p className="definition__term definition__term--blue">Що спільного</p>
                        <p className="definition__description">
                            Подія-тригер, іменоване завдання, середовище виконання, послідовність
                            команд. Ці чотири речі є в кожній системі CI без винятку
                        </p>
                    </div>
                    <div className="definition definition--orange fade-in-delay-3">
                        <p className="definition__term definition__term--orange">Що відрізняється</p>
                        <p className="definition__description">
                            Де оголошується тригер і як називається середовище. Отримання коду в
                            GitLab неявне, в Actions — окремий крок <code>actions/checkout</code>. У Actions крок буває двох форм: власна команда (<code>run</code>) або готовий чужий крок із явною версією (<code>uses</code>); у GitLab другої форми немає, там повторне використання йде через включення файлів
                        </p>
                    </div>
                </div>

                <div className="outlined-card outlined-card--orange mb-xl fade-in-delay-4">
                    <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                        Артефакти — те, що переживає завдання
                    </h3>
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>
                        Це зібраний застосунок, звіт про покриття, результати тестів, журнали
                        невдалого прогону. Зберігаються поза машиною-виконавцем, доступні для
                        завантаження й для наступних завдань. Мають строк зберігання. Поняття
                        однакове в обох системах, відрізняється лише спосіб оголошення.
                    </p>
                    <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
                        Порада, яка економить години: зберігайте артефакти невдалих прогонів —
                        журнали, скріншоти, дампи. Інакше доведеться відтворювати збій наосліп,
                        а він може й не повторитися
                    </p>
                </div>

                <HighlightBox color="cyan">
                    Далі п'ять слайдів ви опрацьовуєте самостійно: де конвеєр виконується, чим
                    його реалізують і три способи тримати його швидким — матриця, кеш, фільтри.
                    Ми ж переходимо до того, <strong>чого не можна класти в репозиторій</strong>.
                </HighlightBox>
            </div>
        </div>
    );
}


// ---------- 8. RUNNERS (self-study) ----------

function RunnersSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Cpu}
                    title="Де це виконується"
                    subtitle="Runners"
                />

                <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
                    <p className="fs-lg text-primary" style={{ margin: 0 }}>
                        Кожне завдання отримує <strong>чисту віртуальну машину</strong>, живе
                        кілька хвилин і зникає разом з усім, що на ній лишилося.
                    </p>
                </div>

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="outlined-card outlined-card--green fade-in-delay-2">
                        <div className="flex items-center gap-sm mb-base">
                            <CheckCircle2 className="icon-lg text-green" />
                            <h3 className="font-heading fs-section font-bold text-green">
                                Виконавці платформи
                            </h3>
                        </div>
                        <p className="fs-body text-secondary mb-base">
                            Надає сама система CI. Нічого не треба обслуговувати.
                        </p>
                        <div className="flex flex-col gap-sm">
                            <p className="fs-body text-secondary">Готові образи з типовим набором ПЗ</p>
                            <p className="fs-body text-secondary">Безкоштовно для публічних репозиторіїв</p>
                            <p className="fs-body text-secondary">Обмежені за пам'яттю й процесором</p>
                        </div>
                    </div>

                    <div className="outlined-card outlined-card--purple fade-in-delay-3">
                        <div className="flex items-center gap-sm mb-base">
                            <Server className="icon-lg text-purple" />
                            <h3 className="font-heading fs-section font-bold text-purple">
                                Власні виконавці
                            </h3>
                        </div>
                        <p className="fs-body text-secondary mb-base">
                            Ваші машини, підключені до системи CI.
                        </p>
                        <div className="flex flex-col gap-sm">
                            <p className="fs-body text-secondary">Доступ до внутрішньої мережі</p>
                            <p className="fs-body text-secondary">Потужніше залізо, свій набір ПЗ</p>
                            <p className="fs-body text-secondary">Обслуговування й безпека — на вас</p>
                        </div>
                    </div>
                </div>

                <HighlightBox color="cyan">
                    Хвилини виконавців — ресурс, який рахують. Для публічних репозиторіїв вони
                    безкоштовні, для приватних входять у квоту плану. Тому повільний конвеєр коштує не лише часу людей, а й грошей — і тим більше, чим більший проєкт.
                </HighlightBox>
            </div>
        </div>
    );
}

// ---------- 8_1. CI SYSTEMS (self-study) ----------

function CiSystemsSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Wrench}
                    title="Чим це реалізується"
                    subtitle="Same Model, Different Products"
                />

                <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
                    <p className="fs-lg text-primary" style={{ margin: 0 }}>
                        Систем CI багато, і всі вони роблять те саме: беруть вашу конфігурацію, виділяють машину, виконують кроки. 
                        Відрізняються вони не моделлю, а тим, <strong>хто за них відповідає</strong>.
                    </p>
                </div>

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="definition definition--blue fade-in-delay-2">
                        <p className="definition__term definition__term--blue">GitHub Actions</p>
                        <p className="definition__description">
                            Конфігурація в репозиторії, поруч із кодом. Виконавців дає платформа,
                            піднімати нічого не треба. Безкоштовно для публічних репозиторіїв,
                            для приватних — квота хвилин
                        </p>
                    </div>
                    <div className="definition definition--orange fade-in-delay-2">
                        <p className="definition__term definition__term--orange">GitLab CI</p>
                        <p className="definition__description">
                            Та сама ідея, один файл у корені репозиторію. Зустрічається скрізь, де
                            вся розробка живе в GitLab — а це чимало компаній, які свідомо тримають
                            усе в себе
                        </p>
                    </div>
                </div>

                <div className="outlined-card outlined-card--purple mb-xl fade-in-delay-3">
                    <h3 className="font-heading fs-card-title font-bold text-purple mb-sm">
                        Jenkins
                    </h3>
                    <p className="fs-body text-secondary mb-base">
                        Старший за решту й влаштований інакше: це не сервіс, а{' '}
                        <strong>програма на вашому сервері зі своїм станом</strong> — плагінами,
                        версіями, підключеними агентами, налаштуваннями в інтерфейсі.
                    </p>
                    <div className="flex flex-col gap-sm">
                        <p className="fs-body text-secondary">Може майже все — через плагіни, яких тисячі</p>
                        <p className="fs-body text-secondary">Плагіни треба оновлювати, і оновлення ламають одне одного</p>
                        <p className="fs-body text-secondary">Налаштування, зроблене мишкою, ніде не записане</p>
                        <p className="fs-body text-secondary">Впав у п'ятницю — підіймаєте ви, а не підтримка платформи</p>
                    </div>
                    <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
                        Попри це — досі всюди у великих компаніях, бо переносити сотні пайплайнів
                        нікому не хочеться. Шанс зустріти його на першій роботі цілком реальний
                    </p>
                </div>

                <div className="slide-grid slide-grid--2col mb-base">
                    <div className="definition definition--green fade-in-delay-4">
                        <p className="definition__term definition__term--green">Решта</p>
                        <p className="definition__description">
                            CircleCI, Buildkite, TeamCity, Drone, Woodpecker. Відрізняються моделлю
                            виконавців, ціною та інтеграціями — не поняттями
                        </p>
                    </div>
                    <div className="definition definition--cyan fade-in-delay-4">
                        <p className="definition__term definition__term--cyan">Чому в курсі Actions</p>
                        <p className="definition__description">
                            Безкоштовно для публічних репозиторіїв, конфігурація поруч із кодом,
                            нічого не треба розгортати заздалегідь. Найкоротший шлях від «немає
                            нічого» до «конвеєр працює»
                        </p>
                    </div>
                </div>

                <HighlightBox color="cyan">
                    Головне питання при виборі — не синтаксис, а <strong>хто обслуговує</strong>.
                    Хмарна система: чужі виконавці, чужі оновлення, ви платите за хвилини.
                    Власний сервер: повний контроль і повна відповідальність, включно з
                    інцидентами о третій ночі.
                </HighlightBox>
            </div>
        </div>
    );
}

// ---------- 9. MATRIX (self-study) ----------

function MatrixSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Grid3x3}
                    title="Матрична стратегія"
                    subtitle="One Definition, Many Runs"
                />

                <p className="fs-body text-secondary mb-base fade-in-delay-1">
                    Коли одне й те саме треба зробити для кількох сервісів, версій або
                    операційних систем — не копіюйте завдання. Опишіть його один раз і
                    перелічіть варіанти.
                </p>

                <CodeBlock title="Два сервіси одним описом" color="purple">
                    {`jobs:
  test:
    strategy:
      fail-fast: false
      matrix:
        service: [api, notifier]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - run: make test
        working-directory: ./\${{ matrix.service }}`}
                </CodeBlock>

                <div className="slide-grid slide-grid--2col mt-xl mb-base">
                    <div className="definition definition--green fade-in-delay-2">
                        <p className="definition__term definition__term--green">Що дає</p>
                        <p className="definition__description">
                            Один опис замість двох копій. Додати третій сервіс — це один рядок,
                            а не ще двадцять. Усі варіанти виконуються паралельно
                        </p>
                    </div>
                    <div className="definition definition--orange fade-in-delay-3">
                        <p className="definition__term definition__term--orange">fail-fast</p>
                        <p className="definition__description">
                            За замовчуванням увімкнено: перший невдалий варіант зупиняє решту.
                            Для перевірки коду зазвичай вимикають — краще побачити всі помилки одразу
                        </p>
                    </div>
                </div>

                <div className="outlined-card outlined-card--red mb-base fade-in-delay-4">
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>
                        <strong className="text-red">Комбінаторний вибух:</strong> три версії мови
                        × три операційні системи × два сервіси — це вісімнадцять запусків на кожен
                        коміт. Матриця множить, а не додає. Перелічуйте лише те, що справді
                        потрібно перевіряти.
                    </p>
                </div>

                <HighlightBox color="cyan">
                    Матриця корисна лише тоді, коли варіанти <strong>справді однакові</strong>.
                    Якщо для одного сервісу потрібні інші кроки — це вже не матриця, а два різні
                    завдання, і не варто натягувати одне на друге умовами.
                </HighlightBox>
            </div>
        </div>
    );
}

// ---------- 10. CACHING (self-study) ----------

function CachingSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Database}
          title="Кешування залежностей"
          subtitle="The Cheapest Speedup"
        />
 
        <div className="outlined-card outlined-card--gradient-green-blue mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Машина чиста щоразу — отже, залежності завантажуються з нуля на кожен
            запуск. Для середнього проєкту це <strong>більша частина часу конвеєра</strong>,
            і саме її прибирають першою.
          </p>
        </div>
 
        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Ключ будується з файлу блокування версій</p>
              <p className="fs-body-sm text-muted mt-sm">
                Хеш від <span className="font-mono">package-lock.json</span> чи його
                аналога. Залежності не змінилися — ключ той самий — кеш підходить
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">2</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Змінився файл блокування — змінився ключ</p>
              <p className="fs-body-sm text-muted mt-sm">
                Кеш не знайдено, залежності ставляться заново, і зберігається новий
                кеш. Далі знову швидко
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">3</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Кешують сховище пакетів, а не папку залежностей</p>
              <p className="fs-body-sm text-muted mt-sm">
                <span className="font-mono">~/.npm</span> чи{' '}
                <span className="font-mono">~/.cache/pip</span>, а не{' '}
                <span className="font-mono">node_modules</span> чи{' '}
                <span className="font-mono">venv</span>. Так надійніше: встановлення
                все одно виконується, але без завантаження з мережі
              </p>
            </div>
          </div>
        </div>
 
        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Кеш із неправильним ключем гірший за його відсутність: конвеєр підтягує
            старі залежності й падає незрозуміло. Ключ має однозначно описувати вміст
          </HighlightBox>
          <HighlightBox color="red" icon={XCircle}>
            Ніколи не кешуйте результати збірки як спосіб «пришвидшити тести» —
            саме так у конвеєр потрапляє код, якого вже немає в репозиторії
          </HighlightBox>
        </div>
 
        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text fs-body-sm">
            Окремий крок <span className="font-mono">actions/cache</span> потрібен не
            завжди: кроки налаштування середовища вміють кешувати самі — достатньо
            параметра <span className="font-mono">cache:</span> у{' '}
            <span className="font-mono">setup-node</span>,{' '}
            <span className="font-mono">setup-python</span> чи{' '}
            <span className="font-mono">setup-java</span>. Своїм ключем кешують те, що
            ці кроки не покривають.
          </p>
        </div>
      </div>
    </div>
  );
}


// ---------- 11. PATH FILTERS (self-study) ----------

function PathFiltersSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={FolderTree}
                    title="Фільтри за шляхами"
                    subtitle="Do Not Rebuild What Did Not Change"
                />

                <p className="fs-body text-secondary mb-base fade-in-delay-1">
                    У репозиторії з кількома сервісами зміна в одному не має запускати перевірку
                    решти. Інакше правка тексту в документації прогонить увесь набір тестів.
                </p>

                <CodeBlock title="Запуск лише за змінами в потрібних теках" color="blue">
                    {`on:
  pull_request:
    paths:
      - 'api/**'
      - '.github/workflows/api.yml'

  # окремий файл для другого сервісу
  # з власним переліком шляхів`}
                </CodeBlock>

                <div className="slide-grid slide-grid--2col mt-xl mb-base">
                    <div className="definition definition--green fade-in-delay-2">
                        <p className="definition__term definition__term--green">Що виграємо</p>
                        <p className="definition__description">
                            Коротший час очікування, менше витрачених хвилин, чистіший список
                            перевірок у pull request
                        </p>
                    </div>
                    <div className="definition definition--red fade-in-delay-3">
                        <p className="definition__term definition__term--red">Чим ризикуємо</p>
                        <p className="definition__description">
                            Зміна в спільному коді зачіпає обидва сервіси, а фільтр запустив лише
                            один. Спільні теки треба вписувати в обидва переліки
                        </p>
                    </div>
                </div>

                <div className="outlined-card outlined-card--orange mb-base fade-in-delay-4">
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>
                        <strong className="text-orange">Про взаємодію з обов'язковими
                            перевірками</strong> — окремо, у відповідній темі: перевірка, яка не
                        запустилася через фільтр, здатна заблокувати злиття назавжди.
                    </p>
                </div>

                <HighlightBox color="cyan">
                    Не забудьте додати сам файл конвеєра до переліку шляхів. Інакше зміна в
                    ньому не запустить перевірку, і ви не побачите, що щойно його зламали.
                </HighlightBox>
            </div>
        </div>
    );
}

// ---------- 12. SECRETS ----------

function SecretsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={KeyRound}
          title="Секрети в конвеєрі"
          subtitle="Values You Must Not Commit"
        />

        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Токени, ключі доступу, паролі до реєстру. Вони потрібні конвеєру — і не
            повинні лежати в репозиторії. Ніколи, навіть у приватному:{' '}
            <strong>історію не стирають</strong>.
          </p>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">Де зберігаються</p>
            <p className="definition__description">
              У сховищі секретів репозиторію або організації. Записати можна,
              прочитати назад — ні: значення доступне лише конвеєру під час виконання
            </p>
          </div>
          <div className="definition definition--purple fade-in-delay-3">
            <p className="definition__term definition__term--purple">Маскування в журналах</p>
            <p className="definition__description">
              Система замінює значення секрету зірочками у виводі. Захист корисний,
              але не абсолютний: перекодоване чи розрізане переносом значення вона
              вже не впізнає
            </p>
          </div>
        </div>

        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">1</div>
            <p className="numbered-list__text">
              Мінімальні права: токен лише на те, що конвеєру справді потрібно
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">2</div>
            <p className="numbered-list__text">
              Секрети недоступні конвеєрам із чужих відгалужень — інакше будь-хто
              відкрив би pull request і забрав їх
            </p>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">3</div>
            <p className="numbered-list__text">
              Скомпрометований секрет не «виправляють» — його відкликають і видають новий
            </p>
          </div>
        </div>

        <div className="outlined-card outlined-card--green mb-base fade-in-delay-5">
          <h3 className="font-heading fs-card-title font-bold text-green mb-sm">
            Найнадійніший секрет — той, якого немає
          </h3>
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            Щоб команда скористалася токеном, він має існувати у відкритому вигляді в
            пам'яті машини — тож гарантії, що він ніколи не потрапить у вивід, не існує
            в принципі. Тому сучасний підхід інший: не ховати секрет надійніше, а{' '}
            <strong>зробити витік дешевим</strong>. Замість збереженого назавжди ключа
            конвеєр отримує тимчасові облікові дані на кілька хвилин, видані під цей
            один прогін. Витік такого токена через годину нічого не вартий.
          </p>
        </div>

        <HighlightBox color="orange" icon={EyeOff}>
          Найчастіший витік — не в коді, а <strong>у виводі команди</strong>: хтось
          додав докладний режим, і токен опинився в журналі публічного конвеєра, який
          видно всім і після завершення прогону. Перевіряйте, що саме друкують ваші
          кроки — особливо <span className="font-mono">set -x</span> і{' '}
          <span className="font-mono">env</span>.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 13. TEST PYRAMID ----------

function TestPyramidSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Triangle}
          title="Піраміда тестів"
          subtitle="Many Cheap, Few Expensive"
        />
 
        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Тести відрізняються не тільки тим, що перевіряють, а й ціною: часом
          виконання, крихкістю та вартістю підтримки. Форма піраміди — це рекомендація
          щодо пропорції.
        </p>
 
        <div className="flex flex-col gap-base mb-xl">
          <div className="outlined-card outlined-card--red fade-in-delay-2">
            <div className="flex items-center gap-sm mb-sm">
              <span className="badge badge--solid-red">Мало</span>
              <h3 className="font-heading fs-card-title font-bold text-red">
                Наскрізні
                <span className="fs-body-sm text-muted font-mono"> — end-to-end, e2e</span>
              </h3>
            </div>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Уся система разом, від межі до межі, нічого не підміняється заглушками.
              Найповніша перевірка й найдорожча: хвилини на прогін, потребує піднятого
              середовища, ламається від дрібних змін інтерфейсу
            </p>
          </div>
 
          <div className="outlined-card outlined-card--orange fade-in-delay-3">
            <div className="flex items-center gap-sm mb-sm">
              <span className="badge badge--solid-orange">Помірно</span>
              <h3 className="font-heading fs-card-title font-bold text-orange">
                Інтеграційні
                <span className="fs-body-sm text-muted font-mono"> — integration</span>
              </h3>
            </div>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Кілька компонентів у зв'язці: сервіс і база, сервіс і черга. Ловлять те,
              чого не бачать модульні — неправильний запит, розбіжність у форматі даних
            </p>
          </div>
 
          <div className="outlined-card outlined-card--green fade-in-delay-4">
            <div className="flex items-center gap-sm mb-sm">
              <span className="badge badge--solid-green">Багато</span>
              <h3 className="font-heading fs-card-title font-bold text-green">
                Модульні
                <span className="fs-body-sm text-muted font-mono"> — unit</span>
              </h3>
            </div>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Окрема функція чи клас без зовнішніх залежностей. Мілісекунди на прогін,
              точно вказують місце помилки, майже не ламаються без причини
            </p>
          </div>
        </div>
 
        <div className="outlined-card outlined-card--blue mb-base fade-in-delay-5">
          <p className="fs-body-sm text-secondary" style={{ margin: 0 }}>
            <strong className="text-blue">Межа між середнім і верхнім рівнем розмита,</strong>{' '}
            і сперечатися про неї не варто. Практичне розрізнення таке: інтеграційний
            тест <strong>сам піднімає</strong> те, що йому потрібно (контейнер із базою,
            заглушку черги) і тому виконується прямо в конвеєрі; e2e нічого не піднімає —
            він ходить до вже розгорнутого середовища. Звідси й різне місце в пайплайні
          </p>
        </div>
 
        <HighlightBox color="orange" icon={AlertTriangle}>
          Перевернута піраміда — купа e2e і майже нічого нижче — виглядає солідно,
          але дає конвеєр, який іде пів години й падає через раз{' '}
          <strong>без зв'язку зі змінами</strong>. Довіру до такого конвеєра втрачають
          швидко.
        </HighlightBox>
      </div>
    </div>
  );
}
 
// ---------- 14. WHERE TO RUN WHICH LEVEL ----------
 
function TestPlacementSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Layers}
          title="Який рівень де запускати"
          subtitle="Fast Feedback First"
        />
 
        <div className="outlined-card outlined-card--gradient-green-blue mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Принцип простий: <strong>найдешевші перевірки — найраніше</strong>. Немає
            сенсу піднімати повне середовище, якщо код не проходить лінтер.
          </p>
        </div>
 
        <div className="numbered-list mb-xl">
          <div className="numbered-list__item fade-in-delay-2">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Перед комітом, локально</p>
              <p className="fs-body-sm text-muted mt-sm">
                Форматування й лінтер на змінені файли. Секунди. Хук робить це сам
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-3">
            <div className="numbered-list__number">2</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">На кожен pull request</p>
              <p className="fs-body-sm text-muted mt-sm">
                Лінтер, модульні (unit) та інтеграційні (integration) тести, аудит
                залежностей. Ціль — вкластися в кілька хвилин, поки автор ще дивиться
                на екран
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">3</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">Після злиття в основну гілку</p>
              <p className="fs-body-sm text-muted mt-sm">
                Складання артефакта, наскрізні (e2e) тести на розгорнутому середовищі —
                раніше їх запустити просто ніде
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">4</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">За розкладом, уночі</p>
              <p className="fs-body-sm text-muted mt-sm">
                Довгі прогони, навантажувальні тести, перевірка залежностей на щойно
                оприлюднені вразливості
              </p>
            </div>
          </div>
        </div>
 
        <HighlightBox color="cyan">
          Орієнтир для перевірок на pull request — <strong>до десяти хвилин</strong>.
          Довше — і людина перемикається на іншу задачу, а повертається вже без
          контексту. Тоді конвеєр перестає бути зворотним зв'язком і стає перешкодою.
        </HighlightBox>
      </div>
    </div>
  );
}


// ---------- 15. LINTERS AND FORMATTERS ----------

function LintersSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Ruler}
                    title="Лінтери й форматери"
                    subtitle="Two Different Jobs"
                />

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="outlined-card outlined-card--blue fade-in-delay-1">
                        <div className="flex items-center gap-sm mb-base">
                            <Ruler className="icon-lg text-blue" />
                            <h3 className="font-heading fs-section font-bold text-blue">
                                Форматер
                            </h3>
                        </div>
                        <p className="fs-body text-secondary mb-base">
                            Приводить код до єдиного вигляду: відступи, лапки, довжина рядка.
                            Не думає про зміст.
                        </p>
                        <p className="fs-body-sm text-muted" style={{ margin: 0 }}>
                            Головна цінність — припиняє суперечки про стиль у рецензіях
                        </p>
                    </div>

                    <div className="outlined-card outlined-card--purple fade-in-delay-2">
                        <div className="flex items-center gap-sm mb-base">
                            <ShieldAlert className="icon-lg text-purple" />
                            <h3 className="font-heading fs-section font-bold text-purple">
                                Лінтер
                            </h3>
                        </div>
                        <p className="fs-body text-secondary mb-base">
                            Шукає підозрілі конструкції: невикористана змінна, недосяжний код,
                            порівняння, яке завжди істинне.
                        </p>
                        <p className="fs-body-sm text-muted" style={{ margin: 0 }}>
                            Ловить справжні дефекти, а не лише оформлення
                        </p>
                    </div>
                </div>

                <div className="slide-grid slide-grid--2col mb-base">
                    <div className="definition definition--green fade-in-delay-3">
                        <p className="definition__term definition__term--green">Конфігурація в репозиторії</p>
                        <p className="definition__description">
                            Правила лежать поруч із кодом і однакові для всіх — для редактора, для
                            хука й для конвеєра. Інакше в кожного своє уявлення про правильне
                        </p>
                    </div>
                    <div className="definition definition--orange fade-in-delay-4">
                        <p className="definition__term definition__term--orange">Автовиправлення в CI</p>
                        <p className="definition__description">
                            У конвеєрі лінтер лише <strong>перевіряє</strong> й повертає помилку.
                            Виправляти код за автора під час збірки — погана ідея: він не побачить,
                            що саме змінилося
                        </p>
                    </div>
                </div>

                <HighlightBox color="red" icon={XCircle}>
                    Найгірший варіант — увімкнути лінтер на старому проєкті з максимальною
                    суворістю. Дві тисячі попереджень, які ніхто не читає, і команда швидко
                    навчається їх ігнорувати. Правила додають поступово.
                </HighlightBox>
            </div>
        </div>
    );
}

// ---------- 16. COVERAGE ----------

function CoverageSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={PieChart}
                    title="Покриття коду"
                    subtitle="A Useful Signal, a Terrible Target"
                />

                <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1">
                    <p className="fs-lg text-primary" style={{ margin: 0 }}>
                        Покриття показує, які рядки <strong>виконалися</strong> під час тестів.
                        Не те, що вони перевірені — лише те, що по них пройшли.
                    </p>
                </div>

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="outlined-card outlined-card--green fade-in-delay-2">
                        <div className="flex items-center gap-sm mb-base">
                            <CheckCircle2 className="icon-lg text-green" />
                            <h3 className="font-heading fs-section font-bold text-green">
                                Корисно
                            </h3>
                        </div>
                        <div className="flex flex-col gap-sm">
                            <p className="fs-body text-secondary">Знайти цілі модулі без жодного тесту</p>
                            <p className="fs-body text-secondary">Побачити, що покриття падає в новому коді</p>
                            <p className="fs-body text-secondary">Підказати, куди подивитися рецензенту</p>
                        </div>
                    </div>

                    <div className="outlined-card outlined-card--red fade-in-delay-3">
                        <div className="flex items-center gap-sm mb-base">
                            <XCircle className="icon-lg text-red" />
                            <h3 className="font-heading fs-section font-bold text-red">
                                Шкідливо
                            </h3>
                        </div>
                        <div className="flex flex-col gap-sm">
                            <p className="fs-body text-secondary">Ставити ціль «90% будь-якою ціною»</p>
                            <p className="fs-body text-secondary">Оцінювати роботу людей за цим числом</p>
                            <p className="fs-body text-secondary">Вважати високе покриття доказом якості</p>
                        </div>
                    </div>
                </div>

                <div className="outlined-card outlined-card--orange mb-base fade-in-delay-4">
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>
                        <strong className="text-orange">Тест, який нічого не перевіряє,</strong>{' '}
                        дає таке саме покриття, як і справжній: викликати функцію й не звірити
                        результат — рядки виконалися, число зросло. Коли покриття стає метою,
                        з'являється саме такий код.
                    </p>
                </div>

                <HighlightBox color="cyan">
                    Розумний спосіб використання в конвеєрі — не абсолютний поріг, а{' '}
                    <strong>покриття нового коду</strong>: змінені рядки мають бути протестовані.
                    Тоді старий проєкт поступово покращується, і ніхто не переписує тисячу
                    рядків заради числа.
                </HighlightBox>
            </div>
        </div>
    );
}

// ---------- 17. DEPENDENCY AUDIT ----------

function DependencyAuditSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={ShieldAlert}
          title="Аудит залежностей"
          subtitle="Most of Your Code Is Not Yours"
        />
 
        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            У типовому проєкті власний код — це тисячі рядків, а разом із залежностями
            в продакшен їде кількасот тисяч. Решта прийшла ззовні, і{' '}
            <strong>вразливості в ній ваші</strong>, а не чужі.
          </p>
        </div>
 
        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">Прямі залежності</p>
            <p className="definition__description">
              Те, що ви свідомо додали. Їх десятки — і ви принаймні знаєте, навіщо
              кожна потрібна
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-2">
            <p className="definition__term definition__term--orange">Транзитивні</p>
            <p className="definition__description">
              Залежності ваших залежностей. Їх сотні пакетів, ви їх не обирали й
              зазвичай не знаєте про їх існування — доки не спрацює сканер
            </p>
          </div>
        </div>
 
        <div className="outlined-card outlined-card--gradient-blue-purple mb-base fade-in-delay-3">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Аудит запускають <strong>двічі й по-різному</strong> — бо він відповідає на
            два різні питання
          </p>
        </div>
 
        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--green fade-in-delay-4">
            <h3 className="font-heading fs-card-title font-bold text-green mb-sm">
              На кожен pull request
            </h3>
            <p className="fs-body text-secondary mb-base">
              «Чи не затягує <strong>ця зміна</strong> нову вразливу залежність?»
              Звичайний крок після встановлення залежностей, поруч із лінтером і тестами.
            </p>
            <p className="fs-body-sm text-muted" style={{ margin: 0 }}>
              Блокує злиття — але падає лише через те, що автор справді змінив
            </p>
          </div>
 
          <div className="outlined-card outlined-card--orange fade-in-delay-4">
            <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
              За розкладом, щодня
            </h3>
            <p className="fs-body text-secondary mb-base">
              «Чи не з'явилося вночі CVE в тому, що лежить у нас уже рік?» Окремий
              конвеєр, який нічого не збирає, а лише перевіряє стан головної гілки.
            </p>
            <p className="fs-body-sm text-muted" style={{ margin: 0 }}>
              Нікого не блокує — створює сповіщення, а не червоний чек у чужому PR
            </p>
          </div>
        </div>
 
        <CodeBlock title=".github/workflows/audit.yml — нічний прогін" color="orange">
{`on:
  schedule:
    - cron: '0 6 * * 1-5'    # щобудня о 6:00 UTC
  workflow_dispatch:         # і руками, коли треба
 
jobs:
  audit:
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v5
      - run: npm audit --audit-level=high`}
        </CodeBlock>
 
        <div className="outlined-card outlined-card--blue mt-xl mb-base fade-in-delay-5">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-blue">В інших екосистемах інструмент інший:</strong>{' '}
            <span className="font-mono">pip-audit</span> у Python, OWASP
            Dependency-Check у Gradle, <span className="font-mono">bundler-audit</span>{' '}
            у Ruby. Ідея та сама — звірити встановлені версії з базою відомих
            вразливостей. Відрізняється команда, не підхід.
          </p>
        </div>
 
        <div className="outlined-card outlined-card--red mb-base fade-in-delay-5">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-red">Якщо лишити тільки суворий аудит на PR,</strong>{' '}
            рано чи пізно станеться таке: людина виправляє один рядок у README, а
            конвеєр падає через вразливість, оприлюднену вночі в залежності, якої вона
            не торкалася. Кілька таких випадків — і аудит вимикають назовсім. Далі він
            не ловить уже нічого.
          </p>
        </div>
 
        <HighlightBox color="orange" icon={AlertTriangle}>
          І не кожна знахідка потребує негайних дій: вразливість в інструменті збірки,
          який не потрапляє в готовий образ, — не те саме, що вразливість у бібліотеці,
          що обробляє запити користувачів. Знахідки{' '}
          <strong>класифікують</strong>, а не гасять усі підряд.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 18. REQUIRED CHECKS ----------

function RequiredChecksSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Lock}
          title="Хто вирішує, чи можна злити"
          subtitle="Repository Decides"
        />
 
        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-1">
            <h3 className="font-heading fs-section font-bold text-orange mb-sm">
              Червоний хрестик
            </h3>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Тести впали — злити все одно можна. У п'ятницю під реліз хтось зіллє,
              будучи впевненим, що «там просто нестабільний тест»
            </p>
          </div>
 
          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="font-heading fs-section font-bold text-green mb-sm">
              Заблоковане злиття
            </h3>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Кнопка недоступна. Домовленість стала властивістю системи й більше не
              залежить від дедлайну та настрою
            </p>
          </div>
        </div>
 
        <div className="outlined-card outlined-card--gradient-blue-purple mb-base fade-in-delay-3">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Конвеєр лише <strong>повідомляє</strong> результат. Блокує злиття не він,
            а правило в налаштуваннях репозиторію — і зв'язані вони{' '}
            <strong>за іменем завдання</strong>
          </p>
        </div>
 
        <div className="slide-grid slide-grid--2col mb-base">
          <CodeBlock title="ci.yml — звідки беруться імена" color="blue">
{`jobs:
  lint:                    # → перевірка "lint"
    runs-on: ubuntu-24.04
    steps: [...]
 
  test:                    # → "test (api)"
    strategy:              #   і "test (notifier)"
      matrix:
        service: [api, notifier]
    runs-on: ubuntu-24.04
    steps: [...]`}
          </CodeBlock>
 
          <CodeBlock title="Settings → Branches → правило для main" color="purple">
{`Branch name pattern: main
 
[x] Require a pull request before merging
      Required approvals: 1
[x] Require status checks to pass
      [x] Require branches to be up to date
      Required checks:
          lint               ← обираються зі списку,
          test (api)            але зберігаються
          test (notifier)       як текст
[x] Do not allow bypassing the above`}
          </CodeBlock>
        </div>
 
        <div className="outlined-card outlined-card--orange mb-xl fade-in-delay-4">
          <p className="fs-body text-secondary" style={{ margin: 0 }}>
            <strong className="text-orange">Два висновки з правої колонки.</strong>{' '}
            Перший: у списку стоять імена <strong>завдань</strong>, а не воркфлоу — файл
            може називатися <span className="font-mono">CI</span>, а в правилі буде{' '}
            <span className="font-mono">lint</span>. Другий: кожен варіант матриці дає
            окрему перевірку зі своїм іменем, тож додали третій сервіс — не забудьте
            додати його й сюди.
          </p>
        </div>
 
        <div className="slide-grid slide-grid--2col mb-base">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Перейменували завдання в YAML — правило шукає стару назву, не знаходить і
            чекає вічно. Нове завдання при цьому зелене, а злиття заблоковане
          </HighlightBox>
          <HighlightBox color="red" icon={XCircle}>
            Перевірка, що не запустилася через фільтр за шляхами, теж блокує злиття
            назавжди: результату не буде, а система його чекає. Лікується
            завданням-заглушкою з тим самим іменем
          </HighlightBox>
        </div>
 
        <div className="highlight-box highlight-box--blue">
          <p className="highlight-box__text fs-body-sm">
            У GitLab те саме зветься <strong>protected branches</strong> і вимогою
            успішного пайплайна для merge request. Назви інші, механіка й пастки — ті самі.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- 19. CODE REVIEW ----------

function CodeReviewSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={MessageSquare}
                    title="Code review як частина процесу"
                    subtitle="What Machines Cannot Check"
                />

                <p className="fs-body text-secondary mb-base fade-in-delay-1">
                    Автоматика перевіряє те, що можна описати правилом. Усе інше — робота
                    рецензента, і саме тому рецензія не замінюється конвеєром, а доповнює його.
                </p>

                <div className="slide-grid slide-grid--2col mb-xl">
                    <InfoCard
                        icon={CheckCircle2}
                        title="Чи вирішує задачу"
                        subtitle="Найважливіше"
                        description="Код може бути бездоганним і робити не те, що потрібно. Машина цього не побачить ніколи"
                        color="green"
                        delay={1}
                    />
                    <InfoCard
                        icon={Layers}
                        title="Чи зрозуміло за пів року"
                        subtitle="Читабельність"
                        description="Іменування, структура, коментар там, де рішення неочевидне. Читати будуть частіше, ніж писати"
                        color="blue"
                        delay={2}
                    />
                    <InfoCard
                        icon={ShieldAlert}
                        title="Що станеться в поганому випадку"
                        subtitle="Межові ситуації"
                        description="Порожній список, недоступна база, повільна відповідь, одночасні запити"
                        color="orange"
                        delay={3}
                    />
                    <InfoCard
                        icon={Triangle}
                        title="Чи є тест на зміну"
                        subtitle="Не число покриття"
                        description="Конкретно: чи перевірено те, що змінилося, і чи впаде тест, якщо зміну відкотити"
                        color="purple"
                        delay={4}
                    />
                </div>

                <div className="slide-grid slide-grid--2col">
                    <HighlightBox color="red" icon={XCircle}>
                        «Виглядає добре» без жодного зауваження — не рецензія. Це підпис під
                        чужою роботою, за яку тепер відповідаєте й ви
                    </HighlightBox>
                    <HighlightBox color="cyan">
                        Дрібні зауваження про стиль — робота форматера, не людини. Якщо в рецензіях
                        сперечаються про лапки, у проєкті бракує форматера
                    </HighlightBox>
                </div>
            </div>
        </div>
    );
}

// ---------- 20. CODEOWNERS AND BRANCH PROTECTION ----------

function BranchProtectionSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Users}
          title="Власники коду й захист гілок"
          subtitle="Rules That Do Not Depend on Memory"
        />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <div className="flex items-center gap-sm mb-base">
              <Users className="icon-lg text-blue" />
              <h3 className="font-heading fs-section font-bold text-blue">
                Власники коду
              </h3>
            </div>
            <p className="fs-body text-secondary mb-base">
              Файл <span className="font-mono">.github/CODEOWNERS</span>, що зіставляє
              шляхи в репозиторії з людьми або командами.
            </p>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Рецензентів призначає система</p>
              <p className="fs-body text-secondary">Зміну в теці інфраструктури побачить той, хто за неї відповідає</p>
              <p className="fs-body text-secondary">Ніхто не забуває покликати потрібну людину</p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Сам по собі файл нічого не блокує — лише надсилає запит на рецензію
            </p>
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <Lock className="icon-lg text-purple" />
              <h3 className="font-heading fs-section font-bold text-purple">
                Захист гілки
              </h3>
            </div>
            <p className="fs-body text-secondary mb-base">
              Набір умов у налаштуваннях репозиторію — та сама форма, що й для
              обов'язкових перевірок.
            </p>
            <div className="flex flex-col gap-sm">
              <p className="fs-body text-secondary">Обов'язковий pull request</p>
              <p className="fs-body text-secondary">Схвалення від власників коду</p>
              <p className="fs-body text-secondary">Пройдені перевірки конвеєра</p>
              <p className="fs-body text-secondary">Гілка актуальна щодо основної</p>
              <p className="fs-body text-secondary">Заборона перезапису історії</p>
            </div>
            <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
              Блокує саме це: без галочки <span className="font-mono">Require review
              from Code Owners</span> власник лише отримує сповіщення
            </p>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-base">
          <div className="outlined-card outlined-card--orange fade-in-delay-3">
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              <strong className="text-orange">Скидання застарілих схвалень</strong>{' '}
              <span className="fs-body-sm font-mono text-muted">
                (Dismiss stale pull request approvals when new commits are pushed)
              </span>{' '}
              — без цієї опції автор отримує схвалення, а потім дописує що завгодно,
              і зміна їде вже неперевіреною. Коміти, запушені в гілку, одразу стають
              частиною pull request
            </p>
          </div>

          <div className="outlined-card outlined-card--blue fade-in-delay-4">
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              <strong className="text-blue">Актуальність гілки</strong>{' '}
              <span className="fs-body-sm font-mono text-muted">
                (Require branches to be up to date before merging)
              </span>{' '}
              — та сама вимога, з якої ми починали: перевіряється результат злиття з
              поточною основною, а не сама гілка. Інакше дві зміни, кожна зелена
              окремо, разом ламають збірку
            </p>
          </div>
        </div>

        <HighlightBox color="cyan">
          Ці налаштування — теж частина конвеєра, просто описана не в YAML (у GitLab —
          merge request approvals і code owners, назви інші). Разом вони дають
          властивість, заради якої все й будувалося:{' '}
          <strong>в основній гілці не може опинитися неперевірений код</strong>.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 21. FEEDBACK SPEED ----------

function FeedbackSpeedSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Timer}
                    title="Швидкість зворотного зв'язку"
                    subtitle="The Metric That Decides Everything"
                />

                <div className="outlined-card outlined-card--gradient-green-blue mb-xl fade-in-delay-1">
                    <p className="fs-lg text-primary" style={{ margin: 0 }}>
                        Конвеєр цінний рівно настільки, наскільки швидко він відповідає. Повільний
                        конвеєр не роблять швидшим — його <strong>обходять</strong>.
                    </p>
                </div>

                <div className="numbered-list mb-xl">
                    <div className="numbered-list__item fade-in-delay-2">
                        <div className="numbered-list__number">1</div>
                        <div className="numbered-list__content">
                            <p className="numbered-list__text">До 10 хвилин — людина чекає</p>
                            <p className="fs-body-sm text-muted mt-sm">
                                Контекст у голові, виправлення йде одразу
                            </p>
                        </div>
                    </div>
                    <div className="numbered-list__item fade-in-delay-3">
                        <div className="numbered-list__number">2</div>
                        <div className="numbered-list__content">
                            <p className="numbered-list__text">10–30 хвилин — перемикається</p>
                            <p className="fs-body-sm text-muted mt-sm">
                                Повертається вже з іншою задачею в голові, згадує заново
                            </p>
                        </div>
                    </div>
                    <div className="numbered-list__item fade-in-delay-4">
                        <div className="numbered-list__number">3</div>
                        <div className="numbered-list__content">
                            <p className="numbered-list__text">Понад 30 хвилин — перестає дивитися</p>
                            <p className="fs-body-sm text-muted mt-sm">
                                Результат подивиться завтра. Або не подивиться
                            </p>
                        </div>
                    </div>
                </div>

                <div className="slide-grid slide-grid--2col">
                    <div className="definition definition--green fade-in-delay-5">
                        <p className="definition__term definition__term--green">Що прискорює</p>
                        <p className="definition__description">
                            Кеш залежностей, паралельні завдання, фільтри за шляхами, найдешевші
                            перевірки першими
                        </p>
                    </div>
                    <div className="definition definition--orange fade-in-delay-5">
                        <p className="definition__term definition__term--orange">Що сповільнює непомітно</p>
                        <p className="definition__description">
                            Наскрізні тести на кожен коміт, послідовні завдання без потреби, повне
                            середовище там, де вистачило б заглушки
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ---------- 22. FLAKY TESTS ----------

function FlakyTestsSlide() {
    return (
        <div className="slide">
            <div className="slide__content">
                <SlideHeader
                    icon={Dice5}
                    title="Нестабільні тести"
                    subtitle="The Fastest Way to Kill Trust"
                />

                <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
                    <p className="fs-lg text-primary" style={{ margin: 0 }}>
                        Тест, який падає через раз без змін у коді, гірший за відсутність тесту.
                        Він навчає команду <strong>перезапускати конвеєр</strong> замість того,
                        щоб читати помилку.
                    </p>
                </div>

                <div className="slide-grid slide-grid--2col mb-xl">
                    <div className="definition definition--orange fade-in-delay-2">
                        <p className="definition__term definition__term--orange">Час і затримки</p>
                        <p className="definition__description">
                            Очікування фіксованої кількості секунд замість очікування події.
                            На повільній машині-виконавці не встигає
                        </p>
                    </div>
                    <div className="definition definition--purple fade-in-delay-2">
                        <p className="definition__term definition__term--purple">Порядок виконання</p>
                        <p className="definition__description">
                            Тест залежить від даних, які лишив попередній. Працює в одному порядку,
                            падає в іншому
                        </p>
                    </div>
                    <div className="definition definition--blue fade-in-delay-3">
                        <p className="definition__term definition__term--blue">Спільний стан</p>
                        <p className="definition__description">
                            Одна база на паралельні прогони, той самий файл, той самий порт.
                            Локально по черзі — добре, у конвеєрі одночасно — ні
                        </p>
                    </div>
                    <div className="definition definition--cyan fade-in-delay-3">
                        <p className="definition__term definition__term--cyan">Зовнішній світ</p>
                        <p className="definition__description">
                            Звернення до справжнього стороннього сервісу. Він недоступний — падає
                            ваш тест, хоча ваш код не змінювався
                        </p>
                    </div>
                </div>

                <div className="outlined-card outlined-card--orange mb-base fade-in-delay-4">
                    <p className="fs-body text-secondary" style={{ margin: 0 }}>
                        <strong className="text-orange">Автоматичний перезапуск</strong> здається
                        рішенням і насправді ним не є: він ховає проблему й дає їй жити роками.
                        Прийнятний лише як тимчасовий захід — із заведеною задачею на виправлення.
                    </p>
                </div>

                <HighlightBox color="cyan">
                    Робочий підхід: нестабільний тест <strong>виносять</strong> з обов'язкових
                    перевірок і одразу заводять на нього задачу. Так конвеєр лишається
                    вартим довіри, а проблема — видимою.
                </HighlightBox>
            </div>
        </div>
    );
}

// ---------- 23. MOVING VERSIONS ----------

function MovingVersionsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Tag}
          title="Що ламається без ваших змін"
          subtitle="Moving Tags and Someone Else's Code"
        />
 
        <div className="outlined-card outlined-card--red mb-xl fade-in-delay-1">
          <p className="fs-lg text-primary" style={{ margin: 0 }}>
            Конвеєр, який учора був зелений, сьогодні падає, хоча ви нічого не міняли.
            Причина майже завжди одна: щось у ньому вказане{' '}
            <strong>рухомою міткою</strong>.
          </p>
        </div>
 
        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="definition definition--orange fade-in-delay-2">
            <p className="definition__term definition__term--orange">Образ виконавця</p>
            <p className="definition__description">
              Мітка <span className="font-mono">ubuntu-latest</span> означає «остання
              підтримувана версія», і вона змінюється. Для стабільних конвеєрів
              пишуть конкретну — <span className="font-mono">ubuntu-24.04</span>
            </p>
          </div>
          <div className="definition definition--blue fade-in-delay-2">
            <p className="definition__term definition__term--blue">Готові кроки</p>
            <p className="definition__description">
              Користуватися чужими кроками нормально — без них конвеєр ніхто не пише.
              Різниця з бібліотеками в тому, що тут немає файлу блокування версій:
              мітку <span className="font-mono">@v5</span> автор переставляє на нові
              коміти, і завтра той самий рядок виконає інший код
            </p>
          </div>
        </div>
 
        <p className="fs-body text-secondary mb-base fade-in-delay-3">
          Тому питання не «чи брати чуже», а <strong>наскільки міцно це закріпити</strong>:
        </p>
 
        <div className="flex flex-col gap-base mb-base">
          <div className="outlined-card outlined-card--red fade-in-delay-3">
            <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
              Без версії або за рухомою міткою
              <span className="fs-body-sm font-mono text-muted">
                {' '}— actions/checkout@main
              </span>
            </h3>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Найгірший варіант: виконується те, що зараз у гілці автора. Якщо його
              обліковий запис зламали, ви виконуєте код зловмисника на машині, яка
              має ваші секрети
            </p>
          </div>
 
          <div className="outlined-card outlined-card--orange fade-in-delay-4">
            <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
              За мажорною версією
              <span className="fs-body-sm font-mono text-muted">
                {' '}— actions/checkout@v5
              </span>
            </h3>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Розумний дефолт, і більшість проєктів живе саме так: виправлення
              приходять самі, несумісні зміни — ні. Мітка все одно рухома, але автор
              обіцяє не ламати сумісність у межах мажорної версії
            </p>
          </div>
 
          <div className="outlined-card outlined-card--green fade-in-delay-5">
            <h3 className="font-heading fs-card-title font-bold text-green mb-sm">
              За хешем коміту
              <span className="fs-body-sm font-mono text-muted">
                {' '}— actions/checkout@08c6903 # v5.0.1
              </span>
            </h3>
            <p className="fs-body text-secondary" style={{ margin: 0 }}>
              Ви виконуєте рівно той код, який перевіряли — хеш переставити не можна.
              Оновлення стає свідомою дією, тож поруч пишуть коментар із версією, щоб
              було видно, що саме закріплено. Так роблять там, де ціна компрометації
              висока
            </p>
          </div>
        </div>
 
        <HighlightBox color="purple">
          До цієї теми повернемось у лекції про безпеку — там вона називається захистом
          ланцюга постачання й стосується не лише конвеєра, а всього, що ви тягнете
          ззовні: образів, пакетів, бібліотек.
        </HighlightBox>
      </div>
    </div>
  );
}


// ---------- 23_1. DEMO ----------

function DemoSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader
          icon={Play}
          title="Збираємо все докупи"
          subtitle="One Pipeline, Live"
        />
 
        <p className="fs-body text-secondary mb-base fade-in-delay-1">
          Увесь конвеєр, про який ми зараз говорили, — тридцять рядків.
          Кожен крок тут уже знайомий, і кожен відповідає окремому слайду.
        </p>
 
        <CodeBlock title=".github/workflows/ci.yml" color="blue">
{`name: CI
 
on:
  pull_request:
  push:
    branches: [main]
 
jobs:
  check:
    runs-on: ubuntu-24.04        # конкретна версія, не latest
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: 'npm'           # кеш без окремого actions/cache
      - run: npm ci
      - run: npm run lint        # найдешевше — найраніше
      - run: npm test
      - run: npm audit --audit-level=high
 
  build:
    needs: check                 # чекає, поки check стане зеленим
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/`}
        </CodeBlock>
 
        <div className="slide-grid slide-grid--2col mt-xl mb-base">
          <div className="definition definition--purple fade-in-delay-2">
            <p className="definition__term definition__term--purple">
              <span className="font-mono">needs</span> — єдине, що задає порядок
            </p>
            <p className="definition__description">
              Без нього обидва job стартували б одночасно. Збирати застосунок,
              доки невідомо, чи проходять тести, немає сенсу — тому build чекає
            </p>
          </div>
          <div className="definition definition--orange fade-in-delay-2">
            <p className="definition__term definition__term--orange">
              Чому checkout і npm ci повторюються
            </p>
            <p className="definition__description">
              build — інша машина, порожня. Усе, що робив check, для неї не існує.
              Передати щось між job можна лише через артефакти
            </p>
          </div>
        </div>
 
        <div className="outlined-card outlined-card--blue mb-xl fade-in-delay-3">
          <p className="fs-body text-secondary mb-base">
            <strong className="text-blue">Відносно останнього кроку:</strong> тут{' '}
            <span className="font-mono">dist</span> ніхто не використовує — build
            останній крок, і артефакт просто видалиться через якійсь час (90 днів для публічних репозиторіїв). 
            У робочому конвеєрі його забрав би наступний job, який
            розгортає — але це вже тема наступної лекції.
          </p>
          <p className="fs-body text-secondary mb-sm">
            А ось випадок, де артефакт окупається одразу:
          </p>
          <CodeBlock title="Зберегти звіт навіть тоді, коли тести впали" color="blue">
{`      - run: npm test -- --coverage
      - uses: actions/upload-artifact@v4
        if: always()           # інакше крок пропуститься після падіння
        with:
          name: coverage
          path: coverage/`}
          </CodeBlock>
          <p className="fs-body-sm text-muted mt-base" style={{ marginBottom: 0 }}>
            За замовчуванням наступні кроки після невдалого пропускаються — тому
            журнали й звіти саме невдалих прогонів зберігаються лише з{' '}
            <span className="font-mono">if: always()</span>
          </p>
        </div>
 
        <div className="numbered-list mb-base">
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">1</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">
                Відкриваємо pull request зі зламаним стилем коду
              </p>
              <p className="fs-body-sm text-muted mt-sm">
                check падає на лінтері — тести навіть не доходять, а build не
                стартує взагалі
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-4">
            <div className="numbered-list__number">2</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">
                Дивимось журнал: конкретний файл і рядок
              </p>
              <p className="fs-body-sm text-muted mt-sm">
                Не «щось зламалось», а точне місце — у цьому й сенс швидкого
                зворотного зв'язку
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">3</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">
                Кнопка злиття недоступна
              </p>
              <p className="fs-body-sm text-muted mt-sm">
                Бо перевірку позначено обов'язковою в налаштуваннях гілки. Вимкнемо
                правило — кнопка одразу активна, хоч код той самий
              </p>
            </div>
          </div>
          <div className="numbered-list__item fade-in-delay-5">
            <div className="numbered-list__number">4</div>
            <div className="numbered-list__content">
              <p className="numbered-list__text">
                Виправляємо, відправляємо — зелено, кнопка розблокована
              </p>
              <p className="fs-body-sm text-muted mt-sm">
                Другий прогін помітно швидший: залежності вже в кеші. Унизу сторінки
                з'являється артефакт dist, який можна завантажити
              </p>
            </div>
          </div>
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
                <SlideHeader
                    icon={AlertTriangle}
                    title="Типові помилки"
                    subtitle="What Kills a Pipeline"
                />

                <div className="slide-grid slide-grid--2col">
                    <div className="flex flex-col gap-base">
                        <div className="outlined-card outlined-card--red fade-in-delay-1">
                            <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
                                Перевірка, яку можна проігнорувати
                            </h3>
                            <p className="fs-body text-secondary" style={{ margin: 0 }}>
                                Червоний хрестик без блокування злиття — це порада. Під тиском релізу
                                поради не працюють
                            </p>
                        </div>

                        <div className="outlined-card outlined-card--red fade-in-delay-2">
                            <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
                                Конвеєр на пів години
                            </h3>
                            <p className="fs-body text-secondary" style={{ margin: 0 }}>
                                Його не роблять швидшим — його обходять. Кеш, паралельність і фільтри
                                не оптимізація, а умова того, що конвеєром користуватимуться
                            </p>
                        </div>

                        <div className="outlined-card outlined-card--red fade-in-delay-3">
                            <h3 className="font-heading fs-card-title font-bold text-red mb-sm">
                                Гілка, яка живе тижнями
                            </h3>
                            <p className="fs-body text-secondary" style={{ margin: 0 }}>
                                Найкращий конвеєр не врятує, якщо інтегруватися раз на два тижні.
                                Інструмент без практики не працює
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-base">
                        <div className="outlined-card outlined-card--orange fade-in-delay-2">
                            <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                                Життя з нестабільним тестом
                            </h3>
                            <p className="fs-body text-secondary" style={{ margin: 0 }}>
                                Команда вчиться натискати «перезапустити» замість читати помилку. Далі
                                так само перезапустять справжній збій
                            </p>
                        </div>

                        <div className="outlined-card outlined-card--orange fade-in-delay-3">
                            <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                                Покриття як ціль
                            </h3>
                            <p className="fs-body text-secondary" style={{ margin: 0 }}>
                                Щойно число стає метою, з'являються тести, які нічого не перевіряють.
                                Показник росте, якість — ні
                            </p>
                        </div>

                        <div className="outlined-card outlined-card--orange fade-in-delay-4">
                            <h3 className="font-heading fs-card-title font-bold text-orange mb-sm">
                                Довіра до зеленого
                            </h3>
                            <p className="fs-body text-secondary" style={{ margin: 0 }}>
                                Зелений конвеєр означає, що пройшли ваші перевірки. Не «код
                                правильний» і не «можна випускати»
                            </p>
                        </div>
                    </div>
                </div>

                <HighlightBox color="blue">
                    Більшість із них — це не помилки в налаштуванні, а помилки в{' '}
                    <strong>очікуваннях</strong>. Конвеєр не робить якість сам, він лише
                    виконує ті перевірки, які ви в нього поклали, і рівно тоді, коли ви
                    зробили їх обов'язковими.
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
                            <strong>CI — це домовленість, а не YAML:</strong> короткі гілки й
                            щоденна інтеграція. Конвеєр лише робить її дешевою
                        </p>
                    </div>

                    <div className="summary-list__item fade-in-delay-2">
                        <CheckCircle2 className="icon-md text-green" />
                        <p className="summary-list__text">
                            <strong>Модель однакова скрізь:</strong> подія → завдання на чистій
                            машині → кроки по черзі → артефакти. Змінюється синтаксис, не поняття
                        </p>
                    </div>

                    <div className="summary-list__item fade-in-delay-3">
                        <CheckCircle2 className="icon-md text-green" />
                        <p className="summary-list__text">
                            <strong>Цінність — у швидкості відповіді.</strong> До десяти хвилин
                            людина чекає, після тридцяти перестає дивитися
                        </p>
                    </div>

                    <div className="summary-list__item fade-in-delay-4">
                        <CheckCircle2 className="icon-md text-green" />
                        <p className="summary-list__text">
                            <strong>Найдешевші перевірки — найраніше:</strong> форматер і лінтер
                            перед тестами, модульні перед наскрізними
                        </p>
                    </div>

                    <div className="summary-list__item fade-in-delay-5">
                        <CheckCircle2 className="icon-md text-green" />
                        <p className="summary-list__text">
                            <strong>Конвеєр повідомляє, репозиторій вирішує.</strong> Блокує злиття
                            не перевірка, а правило, яке ви ввімкнули вручну
                        </p>
                    </div>

                    <div className="summary-list__item fade-in-delay-5">
                        <CheckCircle2 className="icon-md text-green" />
                        <p className="summary-list__text">
                            <strong>Зелений ≠ правильний.</strong> Якість конвеєра дорівнює якості
                            перевірок, які ви в нього поклали
                        </p>
                    </div>
                </div>

                <div className="outlined-card outlined-card--gradient-green-blue mt-xl fade-in-delay-5">
                    <p className="fs-lg text-primary text-center" style={{ margin: 0 }}>
                        Після інциденту питаємо не «хто винен», а{' '}
                        <strong>«якої перевірки бракувало»</strong>
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
                    Далі — лабораторна робота 4: конвеєр, який блокує злиття зламаного коду
                </p>

                <div className="questions-slide__links">
                    <ExtLink href="https://docs.github.com/en/actions" color="blue">
                        GitHub Actions — документація
                    </ExtLink>
                    <ExtLink href="https://docs.gitlab.com/ee/ci/" color="orange">
                        GitLab CI — документація
                    </ExtLink>
                    <ExtLink href="https://martinfowler.com/articles/continuousIntegration.html" color="purple">
                        Fowler — Continuous Integration
                    </ExtLink>
                    <ExtLink href="https://martinfowler.com/articles/practical-test-pyramid.html" color="green">
                        Практична піраміда тестів
                    </ExtLink>
                </div>
            </div>
        </div>
    );
}