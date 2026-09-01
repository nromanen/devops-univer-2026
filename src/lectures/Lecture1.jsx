import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home,
  BookOpen,
  Target,
  Users,
  Workflow,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Monitor,
  Settings,
  Code,
  ArrowRight,
  Bug,
  Clock,
  ClipboardCheck,
  TestTube,
  DollarSign,
  TrendingUp,
  Layers,
  RefreshCw,
  FileText,
  Search,
  Shield,
  Rocket
} from 'lucide-react';
import LectureLayout from '../components/LectureLayout';
import { InfoCard } from '../components/Cards';
import SlideHeader from '../components/SlideHeader'

// Slide data
const slides = [
  { id: 1, title: 'Титульний слайд', component: TitleSlide },
  { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
  { id: 3, title: 'Що таке тестування?', component: WhatIsTestingSlide },
  { id: '3_1', title: 'Верифікація, валідація, тестування', component: WhatIsTestingDetailSlide },
  { id: 4, title: 'Навіщо тестувати?', component: WhyTestSlide },
  { id: 5, title: 'Вартість дефектів', component: DefectCostSlide },
  { id: 6, title: 'Хто такий QA?', component: WhoIsQASlide },
  { id: '6_1', title: 'QA на практиці: один приклад', component: QAWorkflowExampleSlide },
  { id: 7, title: 'QA vs QC vs Testing', component: QAvsQCSlide },
  { id: '7_1', title: 'QA vs QC vs Testing: на практиці', component: QAvsQCDetailSlide },
  { id: 8, title: 'SDLC — Життєвий цикл', component: SDLCSlide },
  { id: 9, title: 'Моделі SDLC', component: SDLCModelsSlide },
  { id: 10, title: 'Waterfall', component: WaterfallSlide },
  { id: '10_1', title: 'V-Model: розробка ↔ тестування', component: VModelSlide },
  { id: '10_2', title: 'Iterative Model', component: IterativeModelSlide },
  { id: 11, title: 'Agile', component: AgileSlide },
  { id: '11_1', title: 'Scrum та Kanban', component: ScrumKanbanSlide },
  { id: '11_2', title: 'Scrum & Kanban: важливі деталі', component: ScrumKanbanDetailsSlide },
  { id: '11_3', title: 'XP та SAFe: коротко', component: XPandSAFeSlide },
  { id: 12, title: 'Роль QA в Agile', component: QAInAgileSlide },
  { id: 13, title: 'Класифікація тестування (ISTQB)', component: TestingTypesISTQBSlide },
  { id: '13_1', title: 'Типи тестування: на практиці', component: TestingTypesPracticeSlide },
  { id: 14, title: 'Піраміда тестування', component: TestPyramidSlide },
  { id: 15, title: 'Принципи тестування', component: TestingPrinciplesSlide },
  { id: 16, title: 'Підсумки', component: SummarySlide },
  { id: 17, title: 'Питання?', component: QuestionsSlide },
];

export default function Lecture1() {
  return <LectureLayout slides={slides} />;
}

// ============================================
// SLIDE COMPONENTS
// ============================================

function TitleSlide() {
  return (
    <div className="slide slide--centered slide--gradient-blue-purple">
  <div className="title-slide__icon-wrapper">
    <ClipboardCheck />
  </div>
  
  <h1 className="title-slide__title">
    Вступ до тестування
  </h1>
  
  <h2 className="title-slide__subtitle">
    Роль QA в життєвому циклі розробки
  </h2>
  
  <p className="title-slide__english">
    Introduction to Software Testing. QA Role in SDLC
  </p>
  
  <div className="title-slide__badge">
    <p>Лекція 1</p>
  </div>
</div>
  );
}

function ObjectivesSlide() {
  const objectives = [
    'Зрозуміти, що таке тестування програмного забезпечення (Software Testing)',
    'Дізнатися, хто такий QA-інженер та яка його роль',
    'Ознайомитися з життєвим циклом розробки ПЗ (SDLC)',
    'Розглянути типи та рівні тестування',
    'Вивчити основні принципи тестування'
  ];

  return (
    <div className="slide">
      <SlideHeader icon={Target} title="Мета лекції" subtitle="Learning Objectives" />
      
      <div className="slide__content slide__content--narrow mx-auto">
        <div className="numbered-list">
          {objectives.map((obj, index) => (
            <div key={index} className={`numbered-list__item fade-in-delay-${index + 1}`}>
              <div className="numbered-list__number">{index + 1}</div>
              <p className="numbered-list__text">{obj}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhatIsTestingSlide() {
  return (
    <div className="slide">
      <SlideHeader icon={Search} title="Що таке тестування?" subtitle="What is Software Testing?" />
      
      <div className="slide__content mx-auto">
        <div className="outlined-card outlined-card--gradient-blue-purple mb-xl fade-in text-center">
          <p className="text-primary fs-lg">
            <strong>Тестування</strong> <span className="text-muted italic">(Testing)</span> — 
            це процес перевірки відповідності програмного продукту встановленим вимогам
          </p>
        </div>
  
        <div className="slide-grid slide-grid--auto">
          <InfoCard
            icon={CheckCircle}
            title="Верифікація"
            subtitle="Verification"
            description="Чи правильно ми будуємо продукт? Перевірка відповідності специфікаціям."
            color="green"
            delay={1}
          />
          <InfoCard
            icon={Target}
            title="Валідація"
            subtitle="Validation"
            description="Чи правильний продукт ми будуємо? Перевірка відповідності потребам користувача."
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Bug}
            title="Пошук дефектів"
            subtitle="Defect Detection"
            description="Виявлення помилок, багів та невідповідностей до того, як їх знайдуть користувачі."
            color="red"
            delay={3}
          />
        </div>
      </div>
    </div>
  );
}

function WhatIsTestingDetailSlide() {
  return (
    <div className="slide slide--compact">
      <SlideHeader 
        icon={Search} 
        title="Як це працює на практиці?" 
        subtitle="Verification, Validation & Testing in Practice" 
      />
      
      <div className="slide__content mx-auto">
        {/* Верифікація */}
        <div className="outlined-card outlined-card--green mb-base fade-in">
          <div className="flex items-center gap-md mb-base">
            <CheckCircle className="icon-md text-green" />
            <h3 className="font-heading text-green fs-section">
              Верифікація <span className="text-muted font-normal italic">(Verification)</span>
            </h3>
          </div>
          
          <p className="text-muted mb-base">
            <strong className="text-primary">Питання:</strong> "Чи правильно ми будуємо продукт?"
            <span className="text-disabled italic"> (Are we building the product right?)</span>
          </p>
          
          <div className="flow-diagram">
            <FlowBox icon={FileText} title="Специфікація" subtitle="Specification" color="green" />
            <ArrowRight className="arrow arrow--green" />
            <FlowBox icon={Search} title="Перевірка" subtitle="Review" color="green" />
            <ArrowRight className="arrow arrow--green" />
            <FlowBox icon={Code} title="Код відповідає" subtitle="Code matches" color="green" />
          </div>
          
          <p className="text-green mt-md">
            📋 <strong>Приклад:</strong> Перевірка, що кнопка "Зберегти" дійсно зберігає дані
          </p>
        </div>
  
        {/* Валідація */}
        <div className="outlined-card outlined-card--purple mb-base fade-in-delay-2">
          <div className="flex items-center gap-md mb-base">
            <Target className="icon-md text-purple" />
            <h3 className="font-heading text-purple fs-section">
              Валідація <span className="text-muted font-normal italic">(Validation)</span>
            </h3>
          </div>
          
          <p className="text-muted mb-base">
            <strong className="text-primary">Питання:</strong> "Чи правильний продукт ми будуємо?"
            <span className="text-disabled italic"> (Are we building the right product?)</span>
          </p>
          
          <div className="flow-diagram">
            <FlowBox icon={Users} title="Потреби" subtitle="User Needs" color="purple" />
            <ArrowRight className="arrow arrow--purple" />
            <FlowBox icon={Monitor} title="Продукт" subtitle="Product" color="purple" />
            <ArrowRight className="arrow arrow--purple" />
            <FlowBox icon={CheckCircle} title="Вирішує?" subtitle="Solves?" color="purple" />
          </div>
          
          <p className="text-purple mt-md">
            🎯 <strong>Приклад:</strong> Чи справді пошук зручний для користувачів?
          </p>
        </div>
  
        {/* Дефекти */}
        <div className="outlined-card outlined-card--red fade-in-delay-3">
          <div className="flex items-center gap-md mb-base">
            <Bug className="icon-md text-red" />
            <h3 className="font-heading text-red fs-section">
              Пошук дефектів <span className="text-muted font-normal italic">(Defect Detection)</span>
            </h3>
          </div>
          
          <p className="text-muted mb-base">
            <strong className="text-primary">Мета:</strong> Знайти помилки до того, як їх знайдуть користувачі
            <span className="text-disabled italic"> (Find bugs before users do)</span>
          </p>
          
          <div className="flow-diagram">
            <FlowBox icon={TestTube} title="Тест-кейси" subtitle="Test Cases" color="red" />
            <ArrowRight className="arrow arrow--red" />
            <FlowBox icon={Rocket} title="Виконання" subtitle="Execution" color="red" />
            <ArrowRight className="arrow arrow--red" />
            <FlowBox icon={Bug} title="Баг-репорт" subtitle="Bug Report" color="red" />
            <ArrowRight className="arrow arrow--red" />
            <FlowBox icon={RefreshCw} title="Виправлення" subtitle="Fix & Retest" color="red" />
          </div>
          
          <p className="text-red mt-md">
            🐛 <strong>Приклад:</strong> Від'ємне число в полі "Кількість" — система крашиться
          </p>
        </div>
      </div>
    </div>
  );
}

function WhyTestSlide() {
  const reasons = [
    { icon: Shield, title: 'Якість', subtitle: 'Quality', desc: 'Гарантія відповідності стандартам', color: 'green' },
    { icon: DollarSign, title: 'Економія', subtitle: 'Cost Savings', desc: 'Раннє виявлення дефектів дешевше', color: 'yellow' },
    { icon: Users, title: 'Задоволеність', subtitle: 'User Satisfaction', desc: 'Користувачі отримують якісний продукт', color: 'blue' },
    { icon: TrendingUp, title: 'Репутація', subtitle: 'Reputation', desc: 'Довіра до компанії та продукту', color: 'purple' },
  ];

  return (
    <div className="slide">
      <SlideHeader icon={Lightbulb} title="Навіщо тестувати?" subtitle="Why Do We Test?" />
      
      <div className="slide__content mx-auto">
        <div className="slide-grid slide-grid--4col">
          {reasons.map((reason, index) => (
            <InfoCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              subtitle={reason.subtitle}
              description={reason.desc}
              color={reason.color}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DefectCostSlide() {
  const stages = [
    { stage: 'Вимоги', en: 'Requirements', cost: '1x', width: '15%', color: '#22c55e' },
    { stage: 'Дизайн', en: 'Design', cost: '5x', width: '32%', color: '#84cc16' },
    { stage: 'Розробка', en: 'Development', cost: '10x', width: '49%', color: '#eab308' },
    { stage: 'Тестування', en: 'Testing', cost: '20x', width: '66%', color: '#f97316' },
    { stage: 'Реліз', en: 'Release', cost: '50x', width: '83%', color: '#ef4444' },
    { stage: 'Продакшн', en: 'Production', cost: '100x+', width: '100%', color: '#dc2626' },
  ];
  
  return (
    <div className="slide">
      <SlideHeader icon={DollarSign} title="Вартість виправлення дефектів" subtitle="Cost of Fixing Defects" />
      
      <div className="slide__content slide__content--narrow mx-auto">
        <p className="text-center text-muted mb-xl fs-lg">
          Чим пізніше знайдено дефект, тим дорожче його виправити
        </p>
  
        <div className="defect-cost">
          {stages.map((item, index) => (
            <div key={index} className={`defect-cost__row fade-in-delay-${index + 1}`}>
              <div className="defect-cost__label">
                <span className="defect-cost__label-main">{item.stage}</span>
                <br />
                <span className="defect-cost__label-english">{item.en}</span>
              </div>
              <div className="defect-cost__bar">
                <div 
                  className="defect-cost__fill"
                  style={{ 
                    width: item.width,
                    background: `linear-gradient(90deg, ${item.color}aa, ${item.color})`
                  }}
                >
                  <span className="defect-cost__value">{item.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="highlight-box highlight-box--red mt-xl">
          <AlertTriangle className="highlight-box__icon" />
          <p className="highlight-box__text">
            <strong>IBM:</strong> виправлення багу на продакшні коштує в 100 разів дорожче, ніж на етапі вимог
          </p>
        </div>
      </div>
    </div>
  );
}

function WhoIsQASlide() {
  const responsibilities = [
    { icon: FileText, text: 'Аналіз вимог', en: 'Requirements Analysis' },
    { icon: Layers, text: 'Тест-дизайн', en: 'Test Design' },
    { icon: Code, text: 'Виконання тестів', en: 'Test Execution' },
    { icon: Bug, text: 'Репортинг багів', en: 'Bug Reporting' },
    { icon: RefreshCw, text: 'Регресійне тестування', en: 'Regression Testing' },
    { icon: Rocket, text: 'Автоматизація', en: 'Test Automation' },
  ];
  
  return (
    <div className="slide">
      <SlideHeader icon={Users} title="Хто такий QA-інженер?" subtitle="Who is a QA Engineer?" />
      
      <div className="slide__content mx-auto">
        <div className="outlined-card outlined-card--gradient-purple-pink mb-xl fade-in text-center">
          <p className="text-primary fs-lg">
            <strong>QA-інженер</strong> <span className="text-muted italic">(Quality Assurance Engineer)</span> — 
            спеціаліст, який забезпечує якість продукту на всіх етапах розробки
          </p>
        </div>
  
        <h3 className="font-heading text-primary text-center mb-base fs-section">
          Основні обов'язки <span className="text-muted italic">(Responsibilities)</span>
        </h3>
  
        <div className="slide-grid slide-grid--auto">
          {responsibilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={`info-card info-card--purple fade-in-delay-${index + 1}`}>
                <div className="flex items-center gap-md">
                  <Icon className="icon-md text-purple" />
                  <div>
                    <p className="text-primary font-medium mb-0">{item.text}</p>
                    <p className="text-disabled italic fs-caption mb-0">{item.en}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function QAWorkflowExampleSlide() {
  const steps = [
    { 
      num: 1, 
      color: 'orange', 
      title: 'Аналіз вимог', 
      en: 'Requirements Analysis',
      content: (
        <>
          <div className="code-block mb-sm">
            <strong className="text-primary">Вимога:</strong> "Користувач може увійти в систему"
          </div>
          <p className="text-yellow mb-0">❓ <strong>Питання QA:</strong> Які дані? Що при невірному паролі? Скільки спроб?</p>
        </>
      )
    },
    { 
      num: 2, 
      color: 'yellow', 
      title: 'Тест-дизайн', 
      en: 'Test Design',
      content: (
        <div className="flex gap-sm flex-wrap">
          <span className="tag tag--green">✅ Валідний логін → Вхід</span>
          <span className="tag tag--red">❌ Невірний пароль → Помилка</span>
          <span className="tag tag--red">❌ Порожні поля → Валідація</span>
        </div>
      )
    },
    { 
      num: 3, 
      color: 'green', 
      title: 'Виконання тестів', 
      en: 'Test Execution',
      content: <p className="text-secondary mb-0">🖱️ Тестувальник проходить кожен сценарій і фіксує результат</p>
    },
    { 
      num: 4, 
      color: 'red', 
      title: 'Репортинг багів', 
      en: 'Bug Reporting',
      content: (
        <div className="code-block">
          <p className="text-red mb-0">🐛 <strong>BUG:</strong> Пароль видно при введенні</p>
          <p className="text-muted fs-caption mb-0">Кроки: 1) Відкрити форму 2) Ввести пароль → Очікувано: ••••• | Факт: password123</p>
        </div>
      )
    },
    { 
      num: 5, 
      color: 'purple', 
      title: 'Регресійне тестування', 
      en: 'Regression Testing',
      content: (
        <p className="text-secondary mb-0">
          🔄 Баг виправлено → перевіряємо: <span className="text-purple">вхід</span> + 
          <span className="text-yellow"> реєстрація</span> + 
          <span className="text-blue"> відновлення паролю</span>
        </p>
      )
    },
    { 
      num: 6, 
      color: 'cyan', 
      title: 'Автоматизація', 
      en: 'Test Automation',
      content: (
        <div className="code-block">
          <span className="code-block__comment">// Playwright test</span><br/>
          await page.fill(<span className="code-block__string">'#email'</span>, <span className="code-block__string">'user@test.com'</span>);
        </div>
      )
    },
  ];
  
  return (
    <div className="slide slide--compact">
      <SlideHeader 
        icon={Workflow} 
        title="QA на практиці: один приклад" 
        subtitle="QA Workflow Example" 
      />
      
      <div className="highlight-box highlight-box--yellow mb-base mx-auto" style={{ maxWidth: '1100px' }}>
        <p className="highlight-box__text">
          ⚡ <strong>Спрощений огляд</strong> — детально кожен етап розглянемо в наступних лекціях
        </p>
      </div>
      
      <div className="slide__content mx-auto">
        <div className="step-list">
          {steps.map((step, index) => (
            <div key={index} className={`step-list__item step-list__item--${step.color} fade-in-delay-${index + 1}`}>
              <div className={`step-list__number step-list__number--${step.color}`}>{step.num}</div>
              <div className="step-list__content">
                <h4 className={`step-list__title step-list__title--${step.color}`}>
                  {step.title} <span className="step-list__subtitle">{step.en}</span>
                </h4>
                {step.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QAvsQCSlide() {
  const items = [
    { title: 'QA', full: 'Quality Assurance', desc: 'Забезпечення якості', focus: 'Процеси', goal: 'Запобігання дефектам', color: 'blue' },
    { title: 'QC', full: 'Quality Control', desc: 'Контроль якості', focus: 'Продукт', goal: 'Виявлення дефектів', color: 'purple' },
    { title: 'Testing', full: 'Software Testing', desc: 'Тестування', focus: 'Функціонал', goal: 'Перевірка відповідності', color: 'pink' },
  ];
  
  return (
    <div className="slide">
      <SlideHeader icon={Layers} title="QA vs QC vs Testing" subtitle="Understanding the Differences" />
      
      <div className="slide__content mx-auto">
        <div className="slide-grid slide-grid--3col">
          {items.map((item, index) => (
            <div key={index} className={`info-card info-card--top-${item.color} fade-in-delay-${index + 1}`}>
              <h3 className={`font-heading text-${item.color} mb-0`} style={{ fontSize: '2rem', fontWeight: 800 }}>
                {item.title}
              </h3>
              <p className="text-muted italic fs-caption mb-sm">{item.full}</p>
              <p className="text-primary fs-lg mb-xl">{item.desc}</p>
              
              <div style={{ borderTop: '1px solid rgba(148, 163, 184, 0.2)', paddingTop: '1rem' }}>
                <p className="text-disabled fs-caption uppercase mb-0">Фокус</p>
                <p className="text-primary font-semibold mb-md">{item.focus}</p>
                <p className="text-disabled fs-caption uppercase mb-0">Мета</p>
                <p className="text-primary font-semibold mb-0">{item.goal}</p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="highlight-box highlight-box--blue mt-xl">
          <p className="highlight-box__text">
            <strong>QA</strong> включає <strong>QC</strong>, а <strong>QC</strong> включає <strong>Testing</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

function QAvsQCDetailSlide() {
  const roles = [
    {
      abbr: 'QA',
      full: 'Quality Assurance',
      desc: 'Забезпечення якості',
      color: 'blue',
      tasks: ['Впроваджує процеси', 'Визначає стандарти', 'Проводить аудити', 'Навчає команду'],
      stages: ['Planning', 'Analysis', 'Design', 'Development', 'Testing', 'Maintenance'],
      example: '📋 Впровадили Code Review → кількість багів -40%'
    },
    {
      abbr: 'QC',
      full: 'Quality Control',
      desc: 'Контроль якості',
      color: 'purple',
      tasks: ['Перевіряє готовий продукт', 'Виявляє дефекти', 'Валідує перед релізом', 'Приймає/відхиляє білд'],
      stages: ['Testing', 'Deployment'],
      example: '🛑 Білд не пройшов → реліз відкладено'
    },
    {
      abbr: 'Testing',
      full: 'Software Testing',
      desc: 'Тестування',
      color: 'pink',
      tasks: ['Виконує тест-кейси', 'Репортує баги', 'Ретестує виправлення', 'Пише автотести'],
      stages: ['Testing'],
      example: '🐛 "Дані не зберігаються" → створено тікет'
    }
  ];
  
  return (
    <div className="slide slide--compact">
      <SlideHeader 
        icon={Layers} 
        title="QA vs QC vs Testing: на практиці" 
        subtitle="What Each Role Actually Does" 
      />
      
      <div className="slide__content mx-auto">
        <div className="flex flex-col gap-base">
          {roles.map((role, index) => (
            <div key={index} className={`outlined-card outlined-card--${role.color} fade-in-delay-${index + 1}`}>
              <div className="flex items-center gap-md mb-base">
                <span className={`badge badge--solid-${role.color}`} style={{ fontSize: '1.2rem', padding: '0.5rem 1rem' }}>
                  {role.abbr}
                </span>
                <span className={`text-${role.color} font-semibold fs-lg`}>{role.full}</span>
                <span className="text-muted">— {role.desc}</span>
              </div>
              
              <div className="slide-grid slide-grid--3col">
                <div className="definition">
                  <p className="text-disabled fs-caption uppercase mb-sm">Що робить</p>
                  <ul className="list-styled text-primary">
                    {role.tasks.map((task, i) => <li key={i}>{task}</li>)}
                  </ul>
                </div>
                
                <div className="definition">
                  <p className="text-disabled fs-caption uppercase mb-sm">Етапи SDLC</p>
                  <div className="flex flex-wrap gap-xs">
                    {role.stages.map((stage, i) => (
                      <span key={i} className={`tag tag--${role.color}`}>{stage}</span>
                    ))}
                  </div>
                </div>
                
                <div className="definition">
                  <p className="text-disabled fs-caption uppercase mb-sm">Приклад</p>
                  <p className={`text-${role.color} mb-0`}>{role.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text">
            <span className="text-blue">QA</span> запобігає • 
            <span className="text-purple"> QC</span> знаходить • 
            <span className="text-pink"> Testing</span> — інструмент
          </p>
        </div>
      </div>
    </div>
  );
}

function SDLCSlide() {
  const phases = [
    { num: 1, name: 'Планування', en: 'Planning', color: 'orange' },
    { num: 2, name: 'Аналіз', en: 'Analysis', color: 'yellow' },
    { num: 3, name: 'Дизайн', en: 'Design', color: 'green' },
    { num: 4, name: 'Розробка', en: 'Development', color: 'blue' },
    { num: 5, name: 'Тестування', en: 'Testing', color: 'purple' },
    { num: 6, name: 'Деплоймент', en: 'Deployment', color: 'pink' },
    { num: 7, name: 'Підтримка', en: 'Maintenance', color: 'indigo' },
  ];
  
  return (
    <div className="slide">
      <SlideHeader icon={Workflow} title="SDLC — Життєвий цикл розробки" subtitle="Software Development Life Cycle" />
      
      <div className="slide__content mx-auto">
        <div className="outlined-card outlined-card--gradient-green-blue mb-xl fade-in text-center">
          <p className="text-primary fs-lg">
            <strong>SDLC</strong> — це структурований процес створення ПЗ від ідеї до підтримки
          </p>
        </div>
  
        <div className="phase-list">
          {phases.map((phase, index) => (
            <React.Fragment key={index}>
              <div className={`phase-list__item phase-list__item--${index + 1} fade-in-delay-${index + 1}`}>
                <div className={`phase-list__number phase-list__number--${index + 1}`}>{phase.num}</div>
                <p className="phase-list__name">{phase.name}</p>
                <p className="phase-list__english">{phase.en}</p>
              </div>
              {index < 6 && <ArrowRight className="phase-list__arrow" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function SDLCModelsSlide() {
  const models = [
    { name: 'Waterfall', ua: 'Водоспад', desc: 'Послідовний, лінійний підхід', icon: '💧' },
    { name: 'V-Model', ua: 'V-модель', desc: 'Розширення Waterfall з тестуванням', icon: '✔️' },
    { name: 'Iterative', ua: 'Ітеративна', desc: 'Повторювані цикли розробки', icon: '🔄' },
    { name: 'Agile', ua: 'Гнучка', desc: 'Адаптивний підхід з короткими ітераціями', icon: '🚀' },
    { name: 'DevOps', ua: 'DevOps', desc: 'Інтеграція розробки та експлуатації', icon: '⚙️' },
  ];
  
  return (
    <div className="slide">
      <SlideHeader icon={Layers} title="Моделі SDLC" subtitle="SDLC Models" />
      
      <div className="slide__content mx-auto">
        <div className="slide-grid slide-grid--auto">
          {models.map((model, index) => (
            <div key={index} className={`info-card text-center fade-in-delay-${index + 1}`}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{model.icon}</div>
              <h3 className="info-card__title">{model.name}</h3>
              <p className="info-card__subtitle">{model.ua}</p>
              <p className="info-card__text">{model.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WaterfallSlide() {
  const phases = [
    { name: 'Requirements', ua: 'Вимоги', color: 'orange', docs: ['SRS', 'User Stories'], result: 'Документ вимог' },
    { name: 'Design', ua: 'Дизайн', color: 'yellow', docs: ['Technical Design', 'UI/UX Mockups'], result: 'Архітектура' },
    { name: 'Implementation', ua: 'Розробка', color: 'green', docs: ['Source Code', 'Unit Tests'], result: 'Готовий код' },
    { name: 'Testing', ua: 'Тестування', color: 'blue', docs: ['Test Plan', 'Bug Reports'], result: 'Протестований продукт' },
    { name: 'Deployment', ua: 'Розгортання', color: 'purple', docs: ['Release Notes', 'User Manual'], result: 'Продукт у продакшні' },
    { name: 'Maintenance', ua: 'Підтримка', color: 'pink', docs: ['Change Requests', 'Patch Notes'], result: 'Стабільна система' },
  ];
  
  return (
    <div className="slide slide--compact">
      <SlideHeader icon={Workflow} title="Waterfall: етапи та артефакти" subtitle="Waterfall Model: Phases & Artifacts" />
      
      <div className="slide__content mx-auto">
        <div className="step-list">
          {phases.map((phase, index) => (
            <div key={index} className={`step-list__item step-list__item--${phase.color} fade-in-delay-${index + 1}`}>
              <div className="step-list__content">
                <h4 className={`step-list__title step-list__title--${phase.color}`}>
                  {phase.ua} <span className="step-list__subtitle">{phase.name}</span>
                </h4>
                <div className="flex flex-wrap gap-sm mb-sm">
                  {phase.docs.map((doc, i) => (
                    <span key={i} className={`tag tag--${phase.color}`}>📄 {doc}</span>
                  ))}
                </div>
                <p className="text-muted fs-body-sm mb-0">
                  → <strong className="text-primary">{phase.result}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="highlight-box highlight-box--yellow mt-base">
          <p className="highlight-box__text">
            ⚠️ <strong>Особливість:</strong> перехід на наступний етап — тільки після завершення попереднього
          </p>
        </div>
      </div>
    </div>
  );
}

function VModelSlide() {
  const leftSide = [
    { name: 'Requirements', ua: 'Вимоги', color: 'orange' },
    { name: 'System Design', ua: 'Системний дизайн', color: 'yellow' },
    { name: 'Module Design', ua: 'Дизайн модулів', color: 'green' },
    { name: 'Coding', ua: 'Кодування', color: 'blue' },
  ];
  
  const rightSide = [
    { name: 'Acceptance Testing', ua: 'Приймальне', color: 'orange', question: 'Задовольняє потреби?' },
    { name: 'System Testing', ua: 'Системне', color: 'yellow', question: 'Працює в цілому?' },
    { name: 'Integration Testing', ua: 'Інтеграційне', color: 'green', question: 'Модулі працюють разом?' },
    { name: 'Unit Testing', ua: 'Модульне', color: 'blue', question: 'Кожен модуль ОК?' },
  ];
  
  return (
    <div className="slide slide--compact">
      <SlideHeader icon={Workflow} title="V-Model: розробка ↔ тестування" subtitle="V-Model: Development & Testing Phases" />
      
      <div className="slide__content mx-auto">
        <div className="v-model">
          {/* Left: Development */}
          <div>
            <p className="v-model__column-title">📝 Розробка</p>
            {leftSide.map((phase, index) => (
              <div 
                key={index} 
                className={`v-model__left-item v-model__left-item--${phase.color} fade-in-delay-${index + 1}`}
                style={{ marginLeft: `${index * 20}px` }}
              >
                <p className={`v-model__phase-title text-${phase.color}`}>{phase.ua}</p>
                <p className="v-model__phase-english">{phase.name} </p>
                <p> &nbsp; </p>
              </div>
            ))}
          </div>
  
          {/* Center: Arrows */}
          <div className="v-model__arrows">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="v-model__arrow">↔</div>
            ))}
          </div>
  
          {/* Right: Testing */}
          <div>
            <p className="v-model__column-title">🧪 Тестування</p>
            {rightSide.map((phase, index) => (
              <div 
                key={index} 
                className={`v-model__right-item v-model__right-item--${phase.color} fade-in-delay-${index + 5}`}
                style={{ marginRight: `${index * 20}px` }}
              >
                <p className={`v-model__phase-title text-${phase.color}`}>{phase.ua}</p>
                <p className="v-model__phase-english">{phase.name}</p>
                <p className="text-blue-lighter fs-body-sm">❓ {phase.question}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="highlight-box highlight-box--purple mt-base">
          <p className="highlight-box__text">
            💡 <strong>Ключова ідея:</strong> кожен етап розробки має відповідний етап тестування
          </p>
        </div>
      </div>
    </div>
  );
}

function IterativeModelSlide() {
  const iterations = [
    { num: 1, name: 'Ітерація 1', scope: 'Базовий функціонал', example: 'Авторизація', color: 'orange' },
    { num: 2, name: 'Ітерація 2', scope: 'Розширення', example: '+ Профіль', color: 'yellow' },
    { num: 3, name: 'Ітерація 3', scope: 'Додаткові фічі', example: '+ Налаштування', color: 'green' },
    { num: 'N', name: 'Ітерація N', scope: 'Фінальна версія', example: '+ Інтеграції', color: 'blue' },
  ];
  
  const cyclePhases = [
    { name: 'Planning', ua: 'Планування', icon: '📝' },
    { name: 'Design', ua: 'Дизайн', icon: '🎨' },
    { name: 'Development', ua: 'Розробка', icon: '💻' },
    { name: 'Testing', ua: 'Тестування', icon: '🧪' },
    { name: 'Review', ua: 'Огляд', icon: '🔍' },
  ];
  
  return (
    <div className="slide slide--compact">
      <SlideHeader icon={RefreshCw} title="Iterative Model" subtitle="Building Software in Repeated Cycles" />
      
      <div className="slide__content mx-auto">
        <div className="highlight-box highlight-box--green mb-xl">
          <p className="highlight-box__text">
            🔄 <strong>Ідея:</strong> Продукт будується поступово — кожна ітерація додає новий функціонал
          </p>
        </div>
  
        {/* Iterations diagram */}
        <div className="iteration-diagram mb-xl">
          {iterations.map((iter, index) => (
            <React.Fragment key={index}>
              <div className={`iteration-diagram__item iteration-diagram__item--${index + 1} fade-in-delay-${index + 1}`}>
              <div className={`iteration-diagram__number iteration-diagram__number--${index + 1}`}>
                {iter.num}
                </div>
                <p className="iteration-diagram__name">{iter.name}</p>
                <p className="iteration-diagram__scope">{iter.scope}</p>
                <p className={`iteration-diagram__example text-${iter.color}`}>{iter.example}</p>
              </div>
              {index < iterations.length - 1 && (
                <span className="iteration-diagram__arrow">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
  
        {/* Cycle phases */}
        <div className="info-card mb-xl">
          <p className="text-primary font-semibold text-center mb-base">📋 Кожна ітерація містить повний цикл:</p>
          <div className="flex justify-center gap-sm flex-wrap">
            {cyclePhases.map((phase, i) => (
              <div key={i} className="icon-box">
                <span style={{ fontSize: '1.5rem' }}>{phase.icon}</span>
                <p className="icon-box__title">{phase.ua}</p>
                <p className="icon-box__subtitle">{phase.name}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Comparison */}
        <div className="outlined-card outlined-card--yellow">
          <p className="text-yellow font-semibold text-center mb-base">⚖️ Iterative vs Agile</p>
          <div className="slide-grid slide-grid--2col">
            <div className="definition definition--orange">
              <p className="definition__term definition__term--orange">Iterative</p>
              <ul className="list-styled text-secondary">
                <li>Вимоги фіксуються на початку</li>
                <li>Ітерації можуть бути довгими</li>
                <li>Фокус на технічному вдосконаленні</li>
              </ul>
            </div>
            <div className="definition definition--green">
              <p className="definition__term definition__term--green">Agile</p>
              <ul className="list-styled text-secondary">
                <li>Вимоги можуть змінюватися</li>
                <li>Короткі спринти (1-4 тижні)</li>
                <li>Фокус на цінності для користувача</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgileSlide() {
  const values = [
    { left: 'Люди та взаємодія', right: 'процеси та інструменти', leftEn: 'Individuals and interactions', rightEn: 'processes and tools' },
    { left: 'Працюючий продукт', right: 'документація', leftEn: 'Working software', rightEn: 'documentation' },
    { left: 'Співпраця із замовником', right: 'переговори по контракту', leftEn: 'Customer collaboration', rightEn: 'contract negotiation' },
    { left: 'Реакція на зміни', right: 'дотримання плану', leftEn: 'Responding to change', rightEn: 'following a plan' },
  ];

  return (
    <div className="slide">
      <SlideHeader icon={Rocket} title="Agile (Гнучка методологія)" subtitle="Agile Manifesto Values" />
      <div className="slide__content slide__content--narrow mx-auto">
        <div className="outlined-card outlined-card--gradient-green-blue mb-xl fade-in text-center">
          <p className="text-primary fs-lg">
            <strong>Agile Manifesto</strong> <span className="text-muted">(2001)</span> — цінності гнучкої розробки
          </p>
        </div>
        <div className="agile-values">
          {values.map((value, index) => (
            <div key={index} className={`agile-values__row fade-in-delay-${index + 1}`}>
              <div className="agile-values__primary">
                <p className="agile-values__primary-text">{value.left}</p>
                <p className="text-disabled fs-caption italic mb-0">{value.leftEn}</p>
              </div>
              <span className="agile-values__arrow">→</span>
              <div className="agile-values__secondary">
                <p className="agile-values__secondary-text">{value.right}</p>
                <p className="text-disabled fs-caption italic mb-0">{value.rightEn}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="highlight-box highlight-box--green mt-xl">
          <p className="highlight-box__text">
            💡 Це не відмова від <span className="text-muted">другого</span>, а пріоритет <span className="text-green font-semibold">першого</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrumKanbanSlide() {
  return (
    <div className="slide slide--compact">
      <SlideHeader 
        icon={Rocket} 
        title="Scrum та Kanban" 
        subtitle="Most Popular Agile Frameworks" 
      />
      
      <div className="slide__content mx-auto">
        <div className="slide-grid slide-grid--2col">
          
          {/* Scrum */}
          <div className="framework-card framework-card--scrum fade-in">
            <div className="framework-card__header">
              <div className="framework-card__badge framework-card__badge--scrum">
                <span className="framework-card__title">Scrum</span>
              </div>
              <span className="badge badge--blue">87% команд</span>
            </div>
  
            <div className="framework-card__section">
              <p className="framework-card__section-title">
                Ролі <span className="italic">(Roles)</span>
              </p>
              <div className="flex flex-wrap gap-sm">
                {['Власник продукту', 'Скрам-майстер', 'Команда'].map((role, i) => (
                  <span key={i} className="tag">{role}</span>
                ))}
              </div>
            </div>
  
            <div className="framework-card__section">
              <p className="framework-card__section-title">
                Артефакти <span className="italic">(Artifacts)</span>
              </p>
              <div className="flex flex-wrap gap-sm">
                {['Product Backlog', 'Sprint Backlog', 'Increment'].map((item, i) => (
                  <span key={i} className="tag">{item}</span>
                ))}
              </div>
            </div>
  
            <div className="framework-card__section">
              <p className="framework-card__section-title">
                Церемонії <span className="italic">(Ceremonies)</span>
              </p>
              <div className="flex flex-wrap gap-sm">
                {['Sprint Planning', 'Daily Standup', 'Sprint Review', 'Retrospective'].map((item, i) => (
                  <span key={i} className="tag">{item}</span>
                ))}
              </div>
            </div>
  
            <div className="framework-card__highlight framework-card__highlight--scrum">
              <p>⏱️ <strong>Спринт:</strong> 1-4 тижні (зазвичай 2)</p>
            </div>
          </div>
  
          {/* Kanban */}
          <div className="framework-card framework-card--kanban fade-in-delay-2">
            <div className="framework-card__header">
              <div className="framework-card__badge framework-card__badge--kanban">
                <span className="framework-card__title">Kanban</span>
              </div>
              <span className="badge badge--purple">56% команд</span>
            </div>
  
            <div className="framework-card__section">
              <p className="framework-card__section-title">
                Дошка <span className="italic">(Kanban Board)</span>
              </p>
              <div className="flex gap-sm">
                <div className="kanban-column kanban-column--todo">
                  <p className="kanban-column__title">To Do</p>
                </div>
                <div className="kanban-column kanban-column--progress">
                  <p className="kanban-column__title">In Progress</p>
                </div>
                <div className="kanban-column kanban-column--testing">
                  <p className="kanban-column__title">Testing</p>
                </div>
                <div className="kanban-column kanban-column--done">
                  <p className="kanban-column__title">Done</p>
                </div>
              </div>
            </div>
  
            <div className="framework-card__section">
              <p className="framework-card__section-title">
                Ключові принципи <span className="italic">(Key Principles)</span>
              </p>
              <ul className="list-styled text-secondary">
                <li><strong>Візуалізація</strong> — всі задачі на дошці</li>
                <li><strong>WIP-ліміти</strong> — обмеження задач "в роботі"</li>
                <li><strong>Потік</strong> — безперервна доставка</li>
              </ul>
            </div>
  
            <div className="framework-card__highlight framework-card__highlight--kanban">
              <p>🔄 <strong>Без фіксованих спринтів</strong> — постійний потік</p>
            </div>
          </div>
  
        </div>
  
        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text">
            📚 Також існують: <strong className="text-primary">XP</strong> (практики для розробників), 
            <strong className="text-primary"> SAFe</strong> (для великих організацій), 
            <strong className="text-primary"> Scrumban</strong> (гібрид Scrum + Kanban)
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrumKanbanDetailsSlide() {
  return (
    <div className="slide slide--compact">
      <SlideHeader 
        icon={Settings} 
        title="Scrum & Kanban: важливі деталі" 
        subtitle="Key Concepts You'll Use Daily" 
      />
      
      <div className="slide__content mx-auto">
        <div className="slide-grid slide-grid--2col">
          
          {/* Scrum */}
          <div className="outlined-card outlined-card--blue fade-in">
            <div className="flex items-center gap-sm mb-base" style={{ paddingBottom: '0.75rem', borderBottom: '1px solid rgba(59, 130, 246, 0.3)' }}>
              <span className="badge badge--solid-blue">Scrum</span>
            </div>
  
            {/* DoR */}
            <div className="definition definition--green mb-base">
              <p className="definition__term definition__term--green">Definition of Ready (DoR)</p>
              <p className="text-muted fs-body-sm mb-sm">
                Коли задача <strong className="text-primary">готова до спринту</strong>:
              </p>
              <div className="checklist">
                {[
                  'User Story зрозуміла команді',
                  'Acceptance Criteria визначені',
                  'Задача оцінена (Story Points)',
                  'Немає блокерів'
                ].map((item, i) => (
                  <p key={i} className="checklist__item">{item}</p>
                ))}
              </div>
            </div>
  
            {/* DoD */}
            <div className="definition definition--blue mb-base">
              <p className="definition__term definition__term--blue">Definition of Done (DoD)</p>
              <p className="text-muted fs-body-sm mb-sm">
                Коли задача <strong className="text-primary">справді завершена</strong>:
              </p>
              <div className="checklist">
                {[
                  'Код написаний та Code Review пройдено',
                  'Unit-тести написані та проходять',
                  'QA протестував',
                  'Документація оновлена',
                  'Задеплоєно на staging'
                ].map((item, i) => (
                  <p key={i} className="checklist__item">{item}</p>
                ))}
              </div>
            </div>
  
            {/* Refinement */}
            <div className="definition definition--purple">
              <p className="definition__term definition__term--purple">Backlog Refinement</p>
              <p className="text-muted fs-caption italic mb-sm">(раніше називався Grooming)</p>
              <p className="text-secondary mb-0">
                Регулярна зустріч для підготовки задач: уточнення вимог, розбиття великих задач, оцінка
              </p>
            </div>
          </div>
  
          {/* Kanban */}
          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base" style={{ paddingBottom: '0.75rem', borderBottom: '1px solid rgba(139, 92, 246, 0.3)' }}>
              <span className="badge badge--solid-purple">Kanban</span>
            </div>
  
            {/* WIP Limits */}
            <div className="definition definition--orange mb-base">
              <p className="definition__term definition__term--orange">WIP Limits</p>
              <p className="text-muted fs-caption italic">Work In Progress Limits</p>
              <p className="text-secondary mb-sm">Максимальна кількість задач в колонці одночасно</p>
              <div className="flex gap-sm">
                {[
                  { name: 'To Do', wip: '∞', color: 'todo' },
                  { name: 'In Progress', wip: '3', color: 'progress' },
                  { name: 'Testing', wip: '2', color: 'testing' },
                  { name: 'Done', wip: '∞', color: 'done' }
                ].map((col, i) => (
                  <div key={i} className={`kanban-column kanban-column--${col.color}`}>
                    <p className="kanban-column__title">{col.name}</p>
                    <p className="text-primary font-bold mb-0">WIP: {col.wip}</p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Lead Time */}
            <div className="definition definition--green mb-base">
              <p className="definition__term definition__term--green">Lead Time</p>
              <p className="text-secondary mb-0">
                Час від <strong>створення</strong> задачі до <strong>завершення</strong>
              </p>
              <p className="definition__note">📊 "Скільки клієнт чекає на фічу"</p>
            </div>
  
            {/* Cycle Time */}
            <div className="definition definition--cyan mb-base">
              <p className="definition__term definition__term--cyan">Cycle Time</p>
              <p className="text-secondary mb-0">
                Час від <strong>початку роботи</strong> до <strong>завершення</strong>
              </p>
              <p className="definition__note">📊 "Скільки команда працює над задачею"</p>
            </div>
  
            {/* Swimlanes */}
            <div className="definition definition--pink">
              <p className="definition__term definition__term--pink">Swimlanes</p>
              <p className="text-secondary mb-0">
                Горизонтальні рядки для розділення: 🐛 Баги, ✨ Фічі, 🔧Техборг
              </p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
}

function XPandSAFeSlide() {
  return (
    <div className="slide slide--compact">
      <SlideHeader 
        icon={Code} 
        title="XP та SAFe: коротко" 
        subtitle="Other Agile Frameworks (For Reference)" 
      />
      
      <div className="slide__content mx-auto">
        <div className="slide-grid slide-grid--2col">
          
          {/* XP */}
          <div className="outlined-card outlined-card--green fade-in">
            <div className="flex items-center gap-md mb-base">
              <span className="badge badge--solid-green">XP</span>
              <span className="text-green">Extreme Programming</span>
            </div>
  
            <div className="highlight-box highlight-box--yellow mb-base">
              <p className="highlight-box__text fs-body-sm">
                📅 <strong>Пік популярності:</strong> 1999-2010 (~25% команд)
                <br />
                <span className="text-muted">Зараз: &lt;7% використовують окремо</span>
              </p>
            </div>
  
            <p className="text-disabled uppercase fs-body-sm mb-sm">Практики, що живуть досі:</p>
            
            <div className="flex flex-col gap-sm">
              {[
                { name: 'Pair Programming', ua: 'Парне програмування', desc: 'Двоє розробників — один комп\'ютер' },
                { name: 'TDD', ua: 'Test-Driven Development', desc: 'Спочатку тест, потім код' },
                { name: 'Code Review', ua: 'Огляд коду', desc: 'Перевірка коду колегами' },
                { name: 'Continuous Integration', ua: 'Безперервна інтеграція', desc: 'Часті коміти + автотести' },
                { name: 'Refactoring', ua: 'Рефакторинг', desc: 'Постійне покращення коду' }
              ].map((practice, i) => (
                <div key={i} className="definition">
                  <p className="text-green font-semibold mb-0">{practice.name}</p>
                  <p className="text-muted fs-body-sm mb-0">{practice.ua} — {practice.desc}</p>
                </div>
              ))}
            </div>
  
            <div className="highlight-box highlight-box--green mt-base">
              <p className="highlight-box__text">
                💡 XP "помер", але його практики стали стандартом індустрії
              </p>
            </div>
          </div>
  
          {/* SAFe */}
          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <div className="flex items-center gap-md mb-base">
              <span className="badge badge--solid-purple">SAFe</span>
              <span className="text-purple">Scaled Agile Framework</span>
            </div>
  
            <div className="highlight-box highlight-box--blue mb-base">
              <p className="highlight-box__text fs-body-sm">
                🏢 <strong>Для кого:</strong> великі компанії (100+ розробників)
                <br />
                <span className="text-muted">~26-53% enterprise організацій</span>
              </p>
            </div>
  
            <p className="text-disabled uppercase fs-body-sm mb-sm">Що це таке:</p>
  
            <div className="definition mb-base">
              <p className="text-primary mb-0">
                Спосіб масштабувати Agile на <strong>всю організацію</strong>: 
                координація між командами, синхронізація релізів, єдині цілі.
              </p>
            </div>
  
            <p className="text-disabled uppercase fs-body-sm mb-sm">Ключові концепції:</p>
  
            <div className="flex flex-col gap-sm">
              {[
                { name: 'Agile Release Train (ART)', desc: 'Поїзд з 50-125 людей, синхронізовані спринти' },
                { name: 'Program Increment (PI)', desc: '8-12 тижнів планування та розробки' },
                { name: 'PI Planning', desc: '2-денна зустріч всіх команд для планування' }
              ].map((item, i) => (
                <div key={i} className="definition">
                  <p className="text-purple font-semibold mb-0">{item.name}</p>
                  <p className="text-muted fs-body-sm mb-0">{item.desc}</p>
                </div>
              ))}
            </div>
  
            <div className="highlight-box highlight-box--red mt-base">
              <p className="highlight-box__text">
                ⚠️ Критикують за бюрократію — "Agile для менеджерів, не для команд"
              </p>
            </div>
          </div>
  
        </div>
  
        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text">
            🎯 <strong>Для QA-початківця:</strong> фокус на <span className="text-blue">Scrum</span> та <span className="text-purple">Kanban</span> — 
            решту вивчите, коли знадобиться
          </p>
        </div>
      </div>
    </div>
  );
}

function QAInAgileSlide() {
  const practices = [
    { name: 'Shift-Left Testing', desc: 'Тестування починається якомога раніше' },
    { name: 'Continuous Testing', desc: 'Постійне тестування протягом спринту' },
    { name: 'Test Automation', desc: 'Автоматизація для швидкого зворотного зв\'язку' },
    { name: 'Collaboration', desc: 'QA — частина команди, не окремий відділ' },
    { name: 'Definition of Done', desc: 'Критерії завершення включають тестування' },
  ];
  
  return (
    <div className="slide">
      <SlideHeader icon={Users} title="Роль QA в Agile" subtitle="QA in Agile Teams" />
      
      <div className="slide__content slide__content--narrow mx-auto">
        <div className="slide-grid slide-grid--auto">
          {practices.map((practice, index) => (
            <div key={index} className={`info-card info-card--purple fade-in-delay-${index + 1}`}>
              <h4 className="info-card__title text-purple">{practice.name}</h4>
              <p className="info-card__text">{practice.desc}</p>
            </div>
          ))}
        </div>
  
        <div className="highlight-box highlight-box--purple mt-xl">
          <p className="highlight-box__text">
            🎯 <strong>Головна ідея:</strong> QA — це відповідальність всієї команди, не тільки тестувальників
          </p>
        </div>
      </div>
    </div>
  );
}

function TestingTypesISTQBSlide() {
  const testLevels = [
    { name: 'Unit', ua: 'Модульне' },
    { name: 'Integration', ua: 'Інтеграційне' },
    { name: 'System', ua: 'Системне' },
    { name: 'Acceptance', ua: 'Приймальне' }
  ];
  
  const testTypes = [
    { name: 'Functional', ua: 'Функціональне', desc: 'Що робить система' },
    { name: 'Non-functional', ua: 'Нефункціональне', desc: 'Як працює система' },
    { name: 'Structural', ua: 'Структурне', desc: 'White-box, покриття коду' },
    { name: 'Change-related', ua: 'Пов\'язане зі змінами', desc: 'Confirmation, Regression' }
  ];
  
  const testTechniques = [
    { name: 'Black-box', ua: 'Чорна скринька', desc: 'Без знання коду, за специфікацією' },
    { name: 'White-box', ua: 'Біла скринька', desc: 'Зі знанням коду, структурне' },
    { name: 'Experience-based', ua: 'На основі досвіду', desc: 'Exploratory, Error guessing' }
  ];
  
  return (
    <div className="slide slide--compact">
      <SlideHeader 
        icon={Layers} 
        title="Класифікація тестування (ISTQB)" 
        subtitle="Official ISTQB Test Classification" 
      />
      
      <div className="slide__content mx-auto">
        
        {/* ISTQB badge */}
        <div className="highlight-box highlight-box--blue mb-xl">
          <p className="highlight-box__text">
            📚 <strong>ISTQB</strong> <span className="text-disabled">(International Software Testing Qualifications Board)</span> — офіційна класифікація
          </p>
        </div>
  
        <div className="flex flex-col gap-base">
          
          {/* Test Levels */}
          <div className="step-list__item step-list__item--green fade-in">
            <div className="step-list__content">
              <div className="flex items-center gap-md mb-base">
                <span className="badge badge--solid-green">Test Levels</span>
                <span className="text-muted">— За рівнем тестування</span>
              </div>
              <div className="flex gap-sm flex-wrap items-center">
                {testLevels.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="info-card info-card--green" style={{ padding: '0.5rem 1rem', flex: 'none' }}>
                      <p className="text-green font-semibold mb-0">{item.name}</p>
                      <p className="text-muted fs-caption mb-0">{item.ua}</p>
                    </div>
                    {i < 3 && <span className="arrow">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
  
          {/* Test Types */}
          <div className="step-list__item step-list__item--purple fade-in-delay-2">
            <div className="step-list__content">
              <div className="flex items-center gap-md mb-base">
                <span className="badge badge--solid-purple">Test Types</span>
                <span className="text-muted">— За метою тестування</span>
              </div>
              <div className="slide-grid slide-grid--4col">
                {testTypes.map((item, i) => (
                  <div key={i} className="info-card info-card--purple" style={{ padding: '0.75rem 1rem' }}>
                    <p className="text-purple font-semibold mb-0">{item.name}</p>
                    <p className="text-primary fs-body-sm mb-0">{item.ua}</p>
                    <p className="text-disabled fs-caption mb-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Test Techniques */}
          <div className="step-list__item step-list__item--orange fade-in-delay-3">
            <div className="step-list__content">
              <div className="flex items-center gap-md mb-base">
                <span className="badge badge--solid-orange">Test Techniques</span>
                <span className="text-muted">— За технікою проєктування тестів</span>
              </div>
              <div className="slide-grid slide-grid--3col">
                {testTechniques.map((item, i) => (
                  <div key={i} className="info-card info-card--orange" style={{ padding: '0.75rem 1rem' }}>
                    <p className="text-orange font-semibold mb-0">{item.name}</p>
                    <p className="text-primary fs-body-sm mb-0">{item.ua}</p>
                    <p className="text-disabled fs-caption mb-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
        </div>
  
        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text">
            💡 Це базова класифікація — на практиці використовують ще багато інших термінів
          </p>
        </div>
      </div>
    </div>
  );
}

function TestingTypesPracticeSlide() {
  const byCodeAccess = [
    { name: 'White-box', desc: 'Бачу код', istqb: true },
    { name: 'Black-box', desc: 'Не бачу код', istqb: true },
    { name: 'Gray-box', desc: 'Знаю структуру (API, БД)', istqb: false }
  ];
  
  const byTime = [
    { name: 'Smoke', desc: 'Базова перевірка "чи працює"', istqb: false },
    { name: 'Sanity', desc: 'Перевірка конкретної фічі', istqb: false },
    { name: 'Regression', desc: 'Чи не зламали старе', istqb: true },
    { name: 'Re-testing', desc: 'Перевірка виправленого багу', istqb: true }
  ];
  
  const byPositivity = [
    { name: 'Positive', ua: 'Позитивне', desc: 'Валідні дані → очікуваний результат', color: 'green' },
    { name: 'Negative', ua: 'Негативне', desc: 'Невалідні дані → коректна обробка', color: 'red' }
  ];
  
  const byApproach = [
    { name: 'Scripted', desc: 'За написаними тест-кейсами', istqb: true },
    { name: 'Exploratory', desc: 'Дослідження + тестування одночасно', istqb: true },
    { name: 'Ad-hoc', desc: 'Без плану, інтуїтивно', istqb: false }
  ];
  
  return (
    <div className="slide slide--compact">
      <SlideHeader 
        icon={Layers} 
        title="Типи тестування: на практиці" 
        subtitle="Testing Types Used in Real Projects" 
      />
      
      <div className="slide__content mx-auto">
        
        <div className="highlight-box highlight-box--yellow mb-base">
          <p className="highlight-box__text">
            🛠️ Ці терміни використовують щодня, навіть якщо їх немає в ISTQB
          </p>
        </div>
  
        <div className="slide-grid slide-grid--2col">
  
          {/* За доступом до коду */}
          <div className="step-list__item step-list__item--cyan fade-in">
            <div className="step-list__content">
              <p className="step-list__title step-list__title--cyan mb-base">За доступом до коду</p>
              <div className="flex flex-col gap-sm">
                {byCodeAccess.map((item, i) => (
                  <div key={i} className="definition flex justify-between items-center">
                    <div>
                      <span className="text-primary font-semibold">{item.name}</span>
                      <span className="text-disabled"> — {item.desc}</span>
                    </div>
                    {!item.istqb && <span className="badge badge--yellow">не в ISTQB</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* За часом виконання */}
          <div className="step-list__item step-list__item--green fade-in-delay-2">
            <div className="step-list__content">
              <p className="step-list__title step-list__title--green mb-base">За часом виконання</p>
              <div className="flex flex-col gap-sm">
                {byTime.map((item, i) => (
                  <div key={i} className="definition flex justify-between items-center">
                    <div>
                      <span className="text-primary font-semibold">{item.name}</span>
                      <span className="text-disabled"> — {item.desc}</span>
                    </div>
                    {!item.istqb && <span className="badge badge--yellow">не в ISTQB</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* За позитивністю */}
          <div className="step-list__item step-list__item--purple fade-in-delay-3">
            <div className="step-list__content">
              <p className="step-list__title step-list__title--purple mb-base">За позитивністю</p>
              <div className="flex flex-col gap-sm">
                {byPositivity.map((item, i) => (
                  <div key={i} className="definition">
                    <p className={`text-${item.color} font-semibold mb-0`}>
                      {item.name} <span className="text-muted font-normal">({item.ua})</span>
                    </p>
                    <p className="text-muted fs-body-sm mb-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* За підходом */}
          <div className="step-list__item step-list__item--orange fade-in-delay-4">
            <div className="step-list__content">
              <p className="step-list__title step-list__title--orange mb-base">За підходом</p>
              <div className="flex flex-col gap-sm">
                {byApproach.map((item, i) => (
                  <div key={i} className="definition flex justify-between items-center">
                    <div>
                      <span className="text-primary font-semibold">{item.name}</span>
                      <span className="text-disabled"> — {item.desc}</span>
                    </div>
                    {!item.istqb && <span className="badge badge--yellow">не в ISTQB</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
  
        </div>
  
        {/* За виконанням */}
        <div className="step-list__item step-list__item--pink mt-base fade-in-delay-5">
          <div className="step-list__content">
            <p className="step-list__title step-list__title--pink mb-base">За виконанням</p>
            <div className="slide-grid slide-grid--2col">
              <div className="definition text-center">
                <p className="text-primary font-bold fs-lg mb-0">🧑‍💻 Manual</p>
                <p className="text-muted mb-0">Ручне — тестувальник виконує кроки</p>
              </div>
              <div className="definition text-center">
                <p className="text-primary font-bold fs-lg mb-0">🤖 Automated</p>
                <p className="text-muted mb-0">Автоматизоване — скрипти виконують тести</p>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
}

function TestPyramidSlide() {
  return (
    <div className="slide slide--compact">
      <SlideHeader icon={Layers} title="Піраміда тестування" subtitle="Test Pyramid vs Ice Cream Cone Anti-pattern" />
      
      <div className="slide__content mx-auto">
        
        <div className="slide-grid slide-grid--2col">
          
          <div className="outlined-card outlined-card--green fade-in">
            <div className="flex items-center gap-sm mb-base">
              <span style={{ fontSize: '1.5rem' }}>✅</span>
              <p className="font-heading text-green fs-lg font-bold mb-0">
                Піраміда (правильно)
              </p>
            </div>
            
            <div className="pyramid mb-base">
              <div className="pyramid__level pyramid__level--e2e">
                <p className="pyramid__label">E2E</p>
                <p className="pyramid__percentage">10%</p>
              </div>
              <div className="pyramid__level pyramid__level--integration">
                <p className="pyramid__label">Integration</p>
                <p className="pyramid__percentage">20%</p>
              </div>
              <div className="pyramid__level pyramid__level--unit">
                <p className="pyramid__label">Unit</p>
                <p className="pyramid__percentage">70%</p>
              </div>
            </div>
  
            <div className="definition">
              <p className="text-green font-semibold mb-sm">Чому це добре:</p>
              <ul className="list-styled text-primary">
                <li>⚡ Швидкий зворотний зв'язок</li>
                <li>💰 Дешево підтримувати</li>
                <li>🎯 Легко знайти причину багу</li>
                <li>🔒 Стабільні тести</li>
              </ul>
            </div>
          </div>
  
          <div className="outlined-card outlined-card--red fade-in-delay-2">
            <div className="flex items-center gap-sm mb-base">
              <span style={{ fontSize: '1.5rem' }}>🍦</span>
              <p className="font-heading text-red fs-lg font-bold mb-0">
                Ice Cream Cone (антипатерн)
              </p>
            </div>
            
            <div className="ice-cream mb-base">
              <div className="ice-cream__level ice-cream__level--manual">
                <p className="ice-cream__label">Manual E2E</p>
                <p className="ice-cream__percentage">60%+ 😱</p>
              </div>
              <div className="ice-cream__level ice-cream__level--auto-e2e">
                <p className="ice-cream__label">Auto E2E</p>
                <p className="ice-cream__percentage">25%</p>
              </div>
              <div className="ice-cream__level ice-cream__level--integration">
                <p className="ice-cream__label">Integration</p>
                <p className="ice-cream__percentage">10%</p>
              </div>
              <div className="ice-cream__level ice-cream__level--unit">
                <p className="ice-cream__label">Unit</p>
                <p className="ice-cream__percentage">5%</p>
              </div>
            </div>
  
            <div className="definition">
              <p className="text-red font-semibold mb-sm">Чому це погано:</p>
              <ul className="list-styled text-primary">
                <li>🐌 Повільний feedback (години/дні)</li>
                <li>💸 Дорого підтримувати</li>
                <li>🔍 Важко знайти причину багу</li>
                <li>🎲 Flaky тести (нестабільні)</li>
              </ul>
            </div>
          </div>
  
        </div>
  
        <div className="highlight-box highlight-box--blue mt-base">
          <p className="highlight-box__text">
            💡 <strong>Правило:</strong> чим нижче рівень — тим більше тестів. Unit тести — основа стабільності.
          </p>
          <p className="highlight-box__text mt-sm" style={{ fontSize: '0.95rem' }}>
            Піраміда — це розподіл <strong>автоматизованих</strong> тестів. Ручне тестування (exploratory, UX) — окрема активність, яка доповнює автоматизацію.
          </p>
        </div>
  
      </div>
    </div>
  );
}

function TestingPrinciplesSlide() {
  const principles = [
    { num: 1, name: 'Тестування показує наявність дефектів', en: 'Testing shows presence of defects', example: '✅ "Знайшли 10 багів" — добре. ❌ "Багів немає" — не означає, що їх нема', color: 'blue' },
    { num: 2, name: 'Вичерпне тестування неможливе', en: 'Exhaustive testing is impossible', example: 'Поле вводу тексту: неможливо перевірити ВСІ комбінації символів → застосовуємо техніки тест-дизайну для вибору найефективніших тестів', color: 'purple' },
    { num: 3, name: 'Раннє тестування', en: 'Early testing', example: 'Знайшли помилку у вимогах → виправили за 1 годину. Знайшли на продакшні → 1 тиждень + репутація', color: 'green' },
    { num: 4, name: 'Кластеризація дефектів', en: 'Defect clustering', example: '80% багів у 20% модулів. Модуль оплати падає частіше → тестуємо його ретельніше', color: 'orange' },
    { num: 5, name: 'Парадокс пестициду', en: 'Pesticide paradox', example: 'Ті самі тести перестають знаходити нові баги, як комахи звикають до пестициду → оновлюй тести', color: 'pink' },
    { num: 6, name: 'Тестування залежить від контексту', en: 'Testing is context dependent', example: 'Банківський додаток → security testing. Гра → performance + usability. Медичне ПЗ → регуляторні вимоги', color: 'cyan' },
    { num: 7, name: 'Відсутність помилок — омана', en: 'Absence of errors fallacy', example: 'Додаток без багів, але незручний → користувачі не користуються. Якість ≠ відсутність багів', color: 'yellow' },
  ];
  
  return (
    <div className="slide slide--compact">
      <SlideHeader icon={BookOpen} title="7 принципів тестування" subtitle="ISTQB Testing Principles" />
      
      <div className="slide__content mx-auto">
        <div className="principles-list">
          {principles.map((p, index) => (
            <div key={index} className={`principles-list__item fade-in-delay-${index + 1}`}>
              <div className={`principles-list__number`} style={{ background: `var(--accent-${p.color}, #3b82f6)` }}>
                {p.num}
              </div>
              <div className="principles-list__content">
                <p className="principles-list__title">{p.name}</p>
                <p className="principles-list__english">{p.en}</p>
                <p className="principles-list__example">💡 {p.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SummarySlide() {
  const points = [
    'Тестування (Testing) — процес перевірки відповідності ПЗ вимогам',
    'QA (Quality Assurance) — забезпечення якості на всіх етапах',
    'SDLC (Software Development Life Cycle) — структурований процес розробки',
    'Agile — гнучкий підхід з короткими ітераціями та постійним тестуванням',
    'Піраміда тестування: Unit → Integration → E2E',
    '7 принципів ISTQB — фундамент тестування',
  ];
  
  return (
    <div className="slide">
      <SlideHeader icon={CheckCircle} title="Підсумки" subtitle="Summary" />
      
      <div className="slide__content slide__content--narrow mx-auto">
        <div className="summary-list">
          {points.map((point, index) => (
            <div key={index} className={`summary-list__item fade-in-delay-${index + 1}`}>
              <CheckCircle className="summary-list__icon" />
              <p className="summary-list__text">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuestionsSlide() {
  return (
    <div className="slide slide--centered slide--gradient-purple-pink">
      <div className="questions-slide__emoji">🤔</div>
      
      <h2 className="questions-slide__title">Питання?</h2>
      
      <p className="questions-slide__subtitle">Questions?</p>
      
      <div className="questions-slide__next">
        <p>
          Наступна лекція: <strong className="text-primary">Вимоги. User Stories. Acceptance Criteria</strong>
        </p>
      </div>
    </div>
  );
}

// ============================================
// HELPER COMPONENTS
// ============================================

function FlowBox({ icon: Icon, title, subtitle, color }) {
  return (
    <div className={`icon-box icon-box--${color}`}>
      <Icon className={`icon-box__icon icon-box__icon--${color}`} />
      <p className="icon-box__title">{title}</p>
      <p className="icon-box__subtitle">{subtitle}</p>
    </div>
  );
}

