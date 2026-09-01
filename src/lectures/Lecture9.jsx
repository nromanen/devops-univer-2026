import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard, InfoCardFeatured, BadgeCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import ExtLink from '../components/ExtLink';
import {
  Server,
  Target,
  AlertTriangle,
  BookOpen,
  HelpCircle,
  Construction,
} from 'lucide-react';

// ============================================
// SLIDES ARRAY
// ============================================

const slides = [
  { id: 1,  title: 'Титульний слайд',                 component: TitleSlide },
  { id: 2,  title: 'Мета лекції',                     component: ObjectivesSlide },
  { id: 3,  title: 'Навіщо оркестрація',              component: WhyOrchestrationSlide },
  { id: 4,  title: 'Архітектура кластера',            component: ClusterArchitectureSlide },
  { id: 5,  title: 'Декларативна модель',             component: DeclarativeSlide },
  { id: 6,  title: 'Цикл узгодження стану',           component: ReconciliationSlide },
  { id: 7,  title: 'Под як одиниця планування',       component: PodSlide },
  { id: 8,  title: 'Чому не запускають окремі поди',  component: WhyNotBarePodsSlide },
  { id: 9,  title: 'ReplicaSet',                      component: ReplicaSetSlide },
  { id: 10, title: 'Deployment',                      component: DeploymentSlide },
  { id: 11, title: 'Мітки й селектори',               component: LabelsSlide },
  { id: 12, title: 'Service: стабільна адреса',       component: ServiceSlide },
  { id: 13, title: 'Типи Service',                    component: ServiceTypesSlide },
  { id: 14, title: 'Ingress: вхід ззовні',            component: IngressSlide },
  { id: 15, title: 'ConfigMap',                       component: ConfigMapSlide },
  { id: 16, title: 'Secret',                          component: SecretSlide },
  { id: 17, title: 'Простори імен',                   component: NamespacesSlide },
  { id: 18, title: 'Структура маніфеста',             component: ManifestSlide },
  { id: 19, title: 'kubectl: базові команди',         component: KubectlSlide },
  { id: 20, title: 'Локальний кластер',               component: LocalClusterSlide },
  { id: 21, title: 'Типові помилки',                  component: CommonMistakesSlide },
  { id: 22, title: 'Підсумки',                        component: SummarySlide },
  { id: 23, title: 'Питання?',                        component: QuestionsSlide },
];

export default function Lecture9() {
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
        <Server />
      </div>
      <h1 className="title-slide__title">
        Kubernetes: архітектура й основні об'єкти
      </h1>
      <h2 className="title-slide__subtitle">
        Лекція 9 — Основи DevOps
      </h2>
      <p className="title-slide__english">
        Kubernetes Architecture
      </p>
      <div className="title-slide__badge">
        <p>☸️ Декларативний опис бажаного стану</p>
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

function ObjectivesSlide() { return <TodoSlide title="Мета лекції" />; }
function WhyOrchestrationSlide() { return <TodoSlide title="Навіщо оркестрація" />; }
function ClusterArchitectureSlide() { return <TodoSlide title="Архітектура кластера" />; }
function DeclarativeSlide() { return <TodoSlide title="Декларативна модель" />; }
function ReconciliationSlide() { return <TodoSlide title="Цикл узгодження стану" />; }
function PodSlide() { return <TodoSlide title="Под як одиниця планування" />; }
function WhyNotBarePodsSlide() { return <TodoSlide title="Чому не запускають окремі поди" />; }
function ReplicaSetSlide() { return <TodoSlide title="ReplicaSet" />; }
function DeploymentSlide() { return <TodoSlide title="Deployment" />; }
function LabelsSlide() { return <TodoSlide title="Мітки й селектори" />; }
function ServiceSlide() { return <TodoSlide title="Service: стабільна адреса" />; }
function ServiceTypesSlide() { return <TodoSlide title="Типи Service" />; }
function IngressSlide() { return <TodoSlide title="Ingress: вхід ззовні" />; }
function ConfigMapSlide() { return <TodoSlide title="ConfigMap" />; }
function SecretSlide() { return <TodoSlide title="Secret" />; }
function NamespacesSlide() { return <TodoSlide title="Простори імен" />; }
function ManifestSlide() { return <TodoSlide title="Структура маніфеста" />; }
function KubectlSlide() { return <TodoSlide title="kubectl: базові команди" />; }
function LocalClusterSlide() { return <TodoSlide title="Локальний кластер" />; }
function CommonMistakesSlide() { return <TodoSlide title="Типові помилки" />; }
function SummarySlide() { return <TodoSlide title="Підсумки" />; }
function QuestionsSlide() { return <TodoSlide title="Питання?" />; }
