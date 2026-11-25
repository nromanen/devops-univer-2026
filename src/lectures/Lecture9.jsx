import React from 'react';
import LectureLayout from '../components/LectureLayout';
import SlideHeader from '../components/SlideHeader';
import { InfoCard } from '../components/Cards';
import CodeBlock from '../components/CodeBlock';
import HighlightBox from '../components/HighlightBox';
import DefBadge from '../components/DefBadge';
import SlideLink from '../components/SlideLink'; // same import as in Lecture8.jsx
import {
  AlertTriangle,
  ArrowRightLeft,
  Binary,
  BookOpen,
  Box,
  Boxes,
  Building2,
  Cloud,
  Container,
  Copy,
  Cpu,
  DoorOpen,
  Download,
  ExternalLink,
  Feather,
  FileCode,
  FileText,
  FolderTree,
  Gauge,
  GitBranch,
  Globe,
  HardDrive,
  Hash,
  HeartPulse,
  HelpCircle,
  Hourglass,
  KeyRound,
  Laptop,
  Layers,
  Lightbulb,
  List,
  Lock,
  Monitor,
  Network,
  Pencil,
  Play,
  Plug,
  Puzzle,
  RefreshCw,
  Rocket,
  RotateCcw,
  Route,
  Scale,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Ship,
  Shuffle,
  SlidersHorizontal,
  Stethoscope,
  Tag,
  Tags,
  Target,
  Terminal,
  Timer,
  Trash2,
  Undo2,
  Unlink,
  Variable,
  Workflow,
  XCircle,
} from 'lucide-react';

// ============================================
// SLIDES ARRAY
// selfStudy: true — slide is not covered in class, students read it on their own
// ============================================

const slides = [
  // --- Intro ---
  { id: 1, title: 'Титульний слайд', component: TitleSlide },
  { id: 2, title: 'Мета лекції', component: ObjectivesSlide },
  { id: 3, title: 'Навіщо оркестрація', component: WhyOrchestrationSlide },

  // --- How Kubernetes works ---
  { id: 4, title: 'Архітектура кластера', component: ClusterArchitectureSlide },
  { id: 5, title: 'Декларативна модель', component: DeclarativeSlide },         // imperative vs declarative: run vs apply
  { id: 6, title: 'Структура маніфеста', component: ManifestSlide },            // focus on spec vs status
  { id: 7, title: 'Цикл узгодження стану', component: ReconciliationSlide },      // controllers, control loop

  // --- Workloads ---
  { id: 8, title: 'Под як одиниця планування', component: PodSlide },
  { id: 9, title: 'Ресурси: requests і limits', component: ResourcesSlide },           // scheduler uses requests; Pending, OOMKilled
  { id: 10, title: 'Чому не запускають окремі поди', component: WhyNotBarePodsSlide },
  { id: 11, title: 'Мітки й селектори', component: LabelsSlide },              // before ReplicaSet: selector appears there first
  { id: 12, title: 'ReplicaSet', component: ReplicaSetSlide },          // "you never create it by hand"
  { id: 13, title: 'Deployment', component: DeploymentSlide },
  { id: 14, title: 'Оновлення й відкат', component: RolloutSlide },             // rolling update, rollout undo; bridge to CD
  { id: 15, title: 'Перевірки стану (probes)', component: ProbesSlide },              // readiness gates rollout and Service endpoints

  // --- Networking ---
  { id: 16, title: 'Service: стабільна адреса', component: ServiceSlide },             // ClusterIP vs LoadBalancer in brief
  { id: 17, title: 'Типи Service', component: ServiceTypesSlide, selfStudy: true },  // NodePort, ExternalName, headless
  { id: 18, title: 'Ingress і Gateway API', component: IngressSlide },             // Ingress API frozen, ingress-nginx retired

  // --- Configuration ---
  { id: 19, title: 'ConfigMap і Secret', component: ConfigSlide },              // keep "base64 is not encryption" in class
  { id: 20, title: 'Підключення конфігурації', component: ConfigMountingSlide, selfStudy: true },  // env, envFrom, volume

  // --- Tooling ---
  { id: 21, title: 'Простори імен', component: NamespacesSlide, selfStudy: true },
  { id: 22, title: 'kubectl: базові команди', component: KubectlSlide, selfStudy: true },
  { id: 23, title: 'Локальний кластер', component: LocalClusterSlide, selfStudy: true },  // kind / minikube / k3d

  // --- Wrap-up ---
  { id: 24, title: 'Типові помилки', component: CommonMistakesSlide },
  { id: 25, title: 'Підсумки', component: SummarySlide },             // + out of scope: storage, other controllers, Helm
  { id: 26, title: 'Питання?', component: QuestionsSlide },
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

// ---------- 2. OBJECTIVES ----------

function ObjectivesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Target} title="Мета лекції" subtitle="Learning Objectives" />

        <HighlightBox color="blue" icon={Cloud}>
          На лекції 7 PaaS сам перезапускав копії, що впали, перевіряв їхню готовність
          і почергово оновлював застосунок. Kubernetes робить те саме, але кожне з цих
          рішень ви описуєте самі, у маніфестах. Тому він гнучкіший і водночас складніший.
        </HighlightBox>

        <div className="slide-grid slide-grid--3col mt-xl">
          <InfoCard
            icon={Boxes}
            title="Архітектура"
            subtitle="Cluster architecture"
            description="Розрізняти керівну частину й робочі вузли та знати, який компонент за що відповідає"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={FileCode}
            title="Декларативна модель"
            subtitle="Desired state"
            description="Описувати бажаний стан у маніфесті й розуміти, як кластер доводить до нього реальний"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Layers}
            title="Робочі навантаження"
            subtitle="Workloads"
            description="Запускати застосунок через Deployment, задавати ресурси й перевірки стану, оновлювати й відкочувати"
            color="cyan"
            delay={3}
          />
          <InfoCard
            icon={Globe}
            title="Мережа"
            subtitle="Service & Ingress"
            description="Давати подам стабільну адресу всередині кластера й відкривати застосунок назовні"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={SlidersHorizontal}
            title="Конфігурація"
            subtitle="ConfigMap & Secret"
            description="Тримати налаштування й секрети окремо від образу й передавати їх у контейнер"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={Terminal}
            title="Інструменти"
            subtitle="kubectl & local cluster"
            description="Підняти локальний кластер і подивитися, що в ньому насправді відбувається"
            color="pink"
            delay={6}
          />
        </div>
      </div>
    </div>
  );
}


// ---------- 3. WHY ORCHESTRATION ----------

function WhyOrchestrationSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Ship} title="Навіщо оркестрація" subtitle="Beyond a Single Host" />

        <p className="fs-lg text-secondary mb-xl">
          Compose запускає кілька контейнерів разом, але на одній машині. Коли серверів
          більше, ніж один, або застосунок має пережити падіння сервера, з'являються задачі,
          яких Compose не розв'язує.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Compose на одному сервері</h3>
            <DefBadge term="Збій контейнера" description="Docker перезапустить його, але на тій самій машині" color="orange" />
            <DefBadge term="Збій сервера" description="зупиняється все, що на ньому працювало" color="orange" />
            <DefBadge term="Масштабування" description="копії лише в межах однієї машини" color="orange" />
            <DefBadge term="Оновлення" description="стару копію зупинено, нову запущено, між ними простій" color="orange" />
            <DefBadge term="Розміщення" description="ви самі вирішуєте, що й де запускати" color="orange" />
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Оркестратор над кластером</h3>
            <DefBadge term="Збій контейнера" description="перезапуск, а якщо не допомагає — нова копія" color="green" />
            <DefBadge term="Збій сервера" description="втрачені копії створюються на інших вузлах" color="green" />
            <DefBadge term="Масштабування" description="копії розподіляються між вузлами" color="green" />
            <DefBadge term="Оновлення" description="почергово; трафік іде на нову копію, коли вона готова" color="green" />
            <DefBadge term="Розміщення" description="планувальник обирає вузол за вільними ресурсами" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Container}
            title="Compose"
            subtitle="Один сервер"
            description="Ви керуєте всім, але лише на одній машині"
            color="blue"
            delay={3}
          />
          <InfoCard
            icon={Cloud}
            title="PaaS"
            subtitle="Платформа вирішує"
            description="Де й скільки запускати, вирішує провайдер. Ви бачите результат, але не механізм"
            color="purple"
            delay={4}
          />
          <InfoCard
            icon={Ship}
            title="Kubernetes"
            subtitle="Ви описуєте, кластер виконує"
            description="Ви задаєте бажаний стан, а кластер постійно його підтримує на ваших серверах"
            color="cyan"
            delay={5}
          />
        </div>

        <HighlightBox color="orange" icon={Scale}>
          Kubernetes має свою ціну: окремий шар, який треба розуміти, оновлювати й
          моніторити. Для одного застосунку з кількома копіями PaaS або Compose на
          віртуальній машині часто розумніший вибір. Kubernetes окуповується, коли сервісів
          і команд багато, а запускати їх треба однаково.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 4. CLUSTER ARCHITECTURE ----------

function ClusterArchitectureSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Boxes} title="Архітектура кластера" subtitle="Control Plane & Worker Nodes" />

        <p className="fs-lg text-secondary mb-xl">
          Кластер складається з двох частин. Керівна частина зберігає бажаний стан і
          приймає рішення. Робочі вузли запускають контейнери.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Керівна частина (control plane)</h3>
            <DefBadge term="kube-apiserver" description="єдина точка входу: приймає, перевіряє й зберігає всі об'єкти" color="blue" />
            <DefBadge term="etcd" description="сховище стану кластера; з ним працює лише API-сервер" color="blue" />
            <DefBadge term="kube-scheduler" description="обирає вузол для кожного нового пода" color="blue" />
            <DefBadge term="kube-controller-manager" description="контролери, які доводять реальний стан до бажаного" color="blue" />
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Робочий вузол (worker node)</h3>
            <DefBadge term="kubelet" description="агент вузла: запускає призначені сюди поди й звітує про їхній стан" color="green" />
            <DefBadge term="containerd / CRI-O" description="середовище виконання, яке фактично запускає контейнери" color="green" />
            <DefBadge term="kube-proxy" description="правила, за якими трафік до Service доходить до подів; деякі CNI його замінюють" color="green" />
            <DefBadge term="CNI-плагін" description="ставиться окремо: IP для кожного пода й зв'язок між вузлами" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Lightbulb}>
            Компоненти не спілкуються напряму: kubectl, контролери, планувальник і kubelet
            звертаються лише до API-сервера. Тому все, що відбувається в кластері, видно
            через API, і саме з ним ви працюєте через kubectl.
          </HighlightBox>
          <HighlightBox color="purple" icon={Container}>
            Docker на вузлах уже не потрібен, контейнери запускає containerd. Образи, зібрані
            через <code>docker build</code>, працюють і там, бо це стандартний формат OCI.
            У керованих кластерах (EKS, GKE, AKS) керівною частиною займається провайдер,
            а ви бачите лише робочі вузли.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 5. DECLARATIVE MODEL ----------

function DeclarativeSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={FileCode} title="Декларативна модель" subtitle="Imperative vs Declarative" />

        <p className="fs-lg text-secondary mb-xl">
          Змінити щось у кластері можна двома способами: дати команду, що зробити, або
          описати, яким усе має бути, і залишити кластеру решту.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Імперативно: що зробити</h3>
            <CodeBlock title="команди">{`
kubectl create deployment api \\
  --image=ghcr.io/example/wishlist-api:1.4.0
kubectl scale deployment api --replicas=3
kubectl set image deployment/api \\
  wishlist-api=ghcr.io/example/wishlist-api:1.5.0   # container=image
`}</CodeBlock>
            <DefBadge term="Повтор" description="create вдруге падає з AlreadyExists" color="orange" />
            <DefBadge term="Історія" description="лише в історії вашого терміналу" color="orange" />
            <DefBadge term="Доречно" description="налагодження й разові експерименти" color="orange" />
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Декларативно: що має бути</h3>
            <CodeBlock title="маніфести в git">{`
# deployment.yaml: replicas: 3, image ...:1.5.0
kubectl apply -f deployment.yaml

# changed the file? commit and apply again
kubectl apply -f k8s/
`}</CodeBlock>
            <DefBadge term="Повтор" description="apply вдруге нічого не змінює, якщо файл той самий" color="green" />
            <DefBadge term="Історія" description="git: хто, що й навіщо змінив, з рев'ю" color="green" />
            <DefBadge term="Відкат" description="повернути попередню версію файлу й застосувати" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Container}>
            Ви вже так працювали: <code>compose.yaml</code> описує, які сервіси мають
            бути, а <code>docker compose up</code> доводить до цього опису те, що запущено.
            <code>kubectl apply</code> робить те саме, але для кластера.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            Ручна зміна через <code>scale</code> чи <code>edit</code> живе до наступного{' '}
            <code>apply</code>: якщо поле є в маніфесті, <code>apply</code> запише значення з
            файлу, хоч би хто й навіщо застосовував зміни. Тому джерело правди має бути одне —
            файл у git.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 6. MANIFEST STRUCTURE ----------

function ManifestSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={FileText} title="Структура маніфеста" subtitle="spec vs status" />

        <p className="fs-lg text-secondary mb-xl">
          Кожен об'єкт Kubernetes має apiVersion, kind і metadata, а більшість ще й spec та
          status. Найпростіший приклад — под, хоча на практиці поди вручну не створюють
          (<SlideLink to={10} />).
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <CodeBlock title="pod.yaml — пишете ви">{`
apiVersion: v1          # API version of this kind
kind: Pod               # object type
metadata:
  name: wishlist-api
  labels:
    app: wishlist-api
spec:                   # desired state
  containers:
    - name: api
      image: ghcr.io/example/wishlist-api:1.4.0
      ports:
        - containerPort: 8000
`}</CodeBlock>
          </div>

          <div className="fade-in-delay-2">
            <CodeBlock title="kubectl get pod wishlist-api -o yaml — дописує кластер">{`
metadata:
  uid: 5f1c...           # set by the cluster
  creationTimestamp: ...
spec: ...                # your spec + defaults
status:                  # observed state
  phase: Running
  podIP: 10.244.1.7
  containerStatuses:
    - name: api
      ready: true
      restartCount: 0
`}</CodeBlock>
          </div>
        </div>

        <div className="outlined-card outlined-card--purple fade-in-delay-3 mb-xl">
          <DefBadge term="apiVersion" description="v1 для базових об'єктів, apps/v1 для Deployment" color="purple" />
          <DefBadge term="kind" description="тип об'єкта: Pod, Deployment, Service... (від нього залежить, як із ним поводиться кластер)" color="purple" />
          <DefBadge term="metadata" description="ім'я, простір імен, мітки" color="purple" />
          <DefBadge term="spec" description="бажаний стан — що має бути; пишете ви" color="purple" />
          <DefBadge term="status" description="фактичний стан — що є зараз; пише кластер" color="purple" />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Lightbulb}>
            Уся робота кластера — це зближення <code>status</code> зі <code>spec</code>.
            Поки вони різні, кластер щось робить. Поле <code>status</code> у своєму файлі
            не пишуть: кластер його ігнорує й заповнює сам.
          </HighlightBox>
          <HighlightBox color="green" icon={Lightbulb}>
            Вид об'єкта визначає, як із ним поводиться кластер. Той самий шаблон пода може
            лежати і в Deployment, і в Job: Deployment тримає поди запущеними й оновлює їх,
            а Job запускає под один раз до завершення. Тому видів так багато: будова схожа,
            поведінка різна.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 7. RECONCILIATION LOOP ----------

function ReconciliationSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={RefreshCw} title="Цикл узгодження стану" subtitle="Reconciliation Loop" />

        <p className="fs-lg text-secondary mb-xl">
          Контролер працює як термостат: постійно порівнює, що є, з тим, що має бути, і
          робить крок, який зменшує різницю. Кожен контролер відповідає за свій тип об'єктів.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--purple fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Цикл контролера</h3>
            <DefBadge term="1. Спостерігати" description="прочитати spec і поточний стан через API" color="purple" />
            <DefBadge term="2. Порівняти" description="знайти різницю: 3 поди потрібні, 2 є" color="purple" />
            <DefBadge term="3. Діяти" description="створити, видалити чи змінити об'єкти" color="purple" />
            <DefBadge term="4. Повторити" description="цикл не закінчується ніколи" color="purple" />
          </div>

          <div className="fade-in-delay-2">
            <CodeBlock title="що відбувається після kubectl apply">{`
kubectl          Deployment (replicas: 3) → API server → etcd
Deployment ctrl  no ReplicaSet yet → creates one
ReplicaSet ctrl  0 of 3 Pods → creates 3 Pods (no node yet)
scheduler        Pod without a node → assigns a node
kubelet          Pod on my node → starts containers
kubelet          writes Pod status back to API server
`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={HeartPulse}
            title="Самовідновлення"
            subtitle="Self-healing"
            description="Под видалили чи вузол зник — контролер бачить 2 з 3 і створює новий. Окремого механізму для цього немає"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Hourglass}
            title="apply ≠ готово"
            subtitle="Eventual consistency"
            description="apply завершується, щойно об'єкт записано. Чи все запустилося, видно лише в status"
            color="orange"
            delay={4}
          />
          <InfoCard
            icon={Workflow}
            title="Незалежні ланки"
            subtitle="Loose coupling"
            description="Контролери не знають одне про одного: кожен стежить за своїми об'єктами в API"
            color="blue"
            delay={5}
          />
        </div>

        <HighlightBox color="blue" icon={Search}>
          Звідси й діагностика: якщо застосунок не запустився, шукайте ланку, на якій
          ланцюжок зупинився. Под у стані <code>Pending</code> — планувальник не знайшов
          вузла. <code>ImagePullBackOff</code> — kubelet не зміг завантажити образ.
        </HighlightBox>
      </div>
    </div>
  );
}

// ---------- 8. POD ----------

function PodSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Box} title="Под як одиниця планування" subtitle="Pod" />

        <p className="fs-lg text-secondary mb-xl">
          Kubernetes не запускає окремі контейнери. Найменше, що він планує на вузол, — под:
          один або кілька контейнерів, які завжди працюють разом.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Що спільне в контейнерів одного пода</h3>
            <DefBadge term="Мережа" description="одна IP-адреса; між собою — через localhost" color="blue" />
            <DefBadge term="Томи" description="можуть монтувати ті самі томи" color="blue" />
            <DefBadge term="Вузол" description="завжди на одному вузлі, разом" color="blue" />
            <DefBadge term="Життя" description="створюються й видаляються разом" color="blue" />
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Фази пода</h3>
            <DefBadge term="Pending" description="прийнятий, але ще не працює: чекає вузла чи образу" color="purple" />
            <DefBadge term="Running" description="на вузлі, хоча б один контейнер працює чи перезапускається" color="purple" />
            <DefBadge term="Succeeded" description="усі контейнери успішно завершились (для задач)" color="purple" />
            <DefBadge term="Failed" description="контейнери завершились, хоча б один — з помилкою" color="purple" />
            <DefBadge term="Unknown" description="немає зв'язку з вузлом" color="purple" />
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Box}
            title="Один контейнер"
            subtitle="Типовий випадок"
            description="Под — одна копія одного компонента: API, UI чи бази. Більше копій — більше подів, а не контейнерів у поді"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Plug}
            title="Sidecar"
            subtitle="Допоміжний контейнер"
            description="Працює поруч з основним: збирає журнали, проксіює трафік, оновлює сертифікати"
            color="cyan"
            delay={4}
          />
          <InfoCard
            icon={Play}
            title="Init-контейнер"
            subtitle="До старту основного"
            description="Виконується й завершується, перш ніж стартує застосунок: підготувати файли, дочекатися залежності"
            color="purple"
            delay={5}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            API і Postgres в одному поді — помилка. Вони масштабуються по-різному, а
            перезапуск одного зачіпає іншого. Під кожен сервіс з <code>compose.yaml</code>{' '}
            зазвичай свій под.
          </HighlightBox>
          <HighlightBox color="blue" icon={RefreshCw}>
            Под не переїжджає й не лікується: замість нього створюють новий, з іншим
            ім'ям та IP-адресою. Тому звертатися до подів за IP не можна — для цього є
            Service (<SlideLink to={16} />).
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 9. RESOURCES: REQUESTS AND LIMITS ----------

function ResourcesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Cpu} title="Ресурси: requests і limits" subtitle="Resource Requests & Limits" />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">requests — скільки зарезервувати</h3>
            <DefBadge term="Хто читає" description="планувальник, коли обирає вузол" color="blue" />
            <DefBadge term="Як рахує" description="сума requests на вузлі, а не реальне споживання" color="blue" />
            <DefBadge term="Чи обмежує" description="ні: контейнер може взяти більше, якщо є вільне" color="blue" />
          </div>

          <div className="outlined-card outlined-card--orange fade-in-delay-2">
            <h3 className="info-card__title mb-sm">limits — більше не можна</h3>
            <DefBadge term="Хто стежить" description="ядро вузла через cgroups (лекція 4)" color="orange" />
            <DefBadge term="CPU понад ліміт" description="контейнер пригальмовують" color="orange" />
            <DefBadge term="Пам'ять понад ліміт" description="контейнер вбивають і перезапускають" color="orange" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-3">
            <CodeBlock title="containers[].resources">{`
resources:
  requests:
    cpu: 250m          # 0.25 core, reserved for scheduling
    memory: 256Mi
  limits:
    memory: 256Mi      # above this: OOMKilled
    # no CPU limit: see the note below
`}</CodeBlock>
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-3">
            <h3 className="info-card__title mb-sm">Одиниці</h3>
            <DefBadge term="cpu: 1" description="одне ядро; 500m — пів ядра" color="purple" />
            <DefBadge term="256Mi" description="мебібайти, 2²⁰ байт" color="purple" />
            <DefBadge term="256M" description="мегабайти, 10⁶ байт — інше число" color="purple" />
            <DefBadge term="256m" description="для пам'яті — мілібайти, помилка" color="purple" />
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Hourglass}
            title="Pending"
            subtitle="Insufficient cpu / memory"
            description="Жоден вузол не має стільки вільних requests. Под чекає, поки місце не з'явиться"
            color="blue"
            delay={4}
          />
          <InfoCard
            icon={XCircle}
            title="OOMKilled"
            subtitle="Exit code 137"
            description="Пам'ять перевищила ліміт. Контейнер перезапускається, а якщо це повторюється — CrashLoopBackOff"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={Gauge}
            title="Тротлінг"
            subtitle="CPU throttling"
            description="Помилок немає, застосунок просто повільний. Видно лише в метриках"
            color="purple"
            delay={6}
          />
        </div>

        <HighlightBox color="blue" icon={Lightbulb}>
          Пам'ять не можна «пригальмувати», тому її ліміт ставлять завжди, часто рівним
          request. CPU-ліміт натомість часто не задають: вільний процесорний час під час
          піку краще віддати застосунку, ніж штучно сповільнювати його. Без requests
          планувальник вважає под безкоштовним і перевантажує вузли.
        </HighlightBox>
      </div>
    </div>
  );
}


// ---------- 10. WHY NOT BARE PODS ----------

function WhyNotBarePodsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Unlink} title="Чому не запускають окремі поди" subtitle="Bare Pods vs Controllers" />

        <p className="fs-lg text-secondary mb-xl">
          Под сам себе не відновлює. Якщо його ніхто не контролює, кластер нічого не знає
          про те, скільки таких подів має бути.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--orange fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Окремий под</h3>
            <DefBadge term="Контейнер упав" description="kubelet перезапустить його" color="orange" />
            <DefBadge term="Под видалили" description="зник назавжди" color="orange" />
            <DefBadge term="Вузол зник" description="под зник разом із ним" color="orange" />
            <DefBadge term="Три копії" description="три маніфести з різними іменами" color="orange" />
            <DefBadge term="Нова версія" description="видалити й створити заново, з простоєм" color="orange" />
          </div>

          <div className="outlined-card outlined-card--green fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Под під контролером</h3>
            <DefBadge term="Контейнер упав" description="kubelet перезапустить його" color="green" />
            <DefBadge term="Под видалили" description="контролер створить новий" color="green" />
            <DefBadge term="Вузол зник" description="нові поди на інших вузлах" color="green" />
            <DefBadge term="Три копії" description="replicas: 3 в одному маніфесті" color="green" />
            <DefBadge term="Нова версія" description="почергова заміна без простою" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Rocket}
            title="Deployment"
            subtitle={<SlideLink to={13} />}
            description="Описує застосунок і керує його версіями: оновлення, відкат, історія"
            color="purple"
            delay={3}
          />
          <InfoCard
            icon={Copy}
            title="ReplicaSet"
            subtitle={<SlideLink to={12} />}
            description="Тримає потрібну кількість однакових подів однієї версії"
            color="blue"
            delay={4}
          />
          <InfoCard
            icon={Box}
            title="Pod"
            subtitle={<SlideLink to={8} />}
            description="Запускає контейнери. Створюється й видаляється контролером"
            color="cyan"
            delay={5}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Terminal}>
            Окремий под доречний лише для разової роботи руками, наприклад тимчасовий
            контейнер для налагодження:{' '}
            <code>kubectl run debug -it --rm --image=busybox -- sh</code>.
          </HighlightBox>
          <HighlightBox color="purple" icon={Layers}>
            Deployment — для застосунків без стану. Для баз даних, агентів на кожному вузлі
            й разових задач є інші контролери; їх огляд — у підсумках (<SlideLink to={25} />).
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 11. LABELS AND SELECTORS ----------

function LabelsSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Tags} title="Мітки й селектори" subtitle="Labels & Selectors" />

        <p className="fs-lg text-secondary mb-xl">
          Мітка — пара «ключ: значення» в <code>metadata.labels</code> будь-якого об'єкта.
          Селектор — запит за мітками. На них тримаються всі зв'язки між об'єктами: не за
          іменами, а за мітками.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <CodeBlock title="зв'язок через мітки">{`
# Deployment
spec:
  selector:
    matchLabels:
      app: wishlist-api       # which Pods are mine
  template:
    metadata:
      labels:
        app: wishlist-api     # every new Pod gets this
---
# Service
spec:
  selector:
    app: wishlist-api         # where to send traffic
`}</CodeBlock>
          </div>

          <div className="fade-in-delay-2">
            <div className="outlined-card outlined-card--purple mb-base">
              <h3 className="info-card__title mb-sm">Хто користується селекторами</h3>
              <DefBadge term="ReplicaSet" description="які поди рахувати своїми" color="purple" />
              <DefBadge term="Service" description="на які поди надсилати трафік" color="purple" />
              <DefBadge term="kubectl" description="фільтр у get, logs, delete" color="purple" />
            </div>
            <CodeBlock title="kubectl">{`
kubectl get pods --show-labels
kubectl get pods -l app=wishlist-api
kubectl get pods -l 'env in (staging,prod)'
`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Своїм вважається будь-який под з потрібними мітками, хоч би хто його створив.
            Дві різні Deployment з міткою <code>app: api</code> — і один Service розподіляє
            трафік між обома.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Мітки шаблону мають відповідати селектору, інакше API не прийме Deployment.
            Сам селектор після створення змінити не можна, тож обирайте його одразу:
            зазвичай це <code>app</code>, а не версія.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 12. REPLICASET ----------

function ReplicaSetSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Copy} title="ReplicaSet" subtitle="N identical Pods" />

        <p className="fs-lg text-secondary mb-xl">
          ReplicaSet — контролер з однією задачею: щоб подів з потрібними мітками було
          рівно стільки, скільки задано. Вручну його не створюють, це робить Deployment.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Що описує</h3>
            <DefBadge term="replicas" description="скільки подів має бути" color="blue" />
            <DefBadge term="selector" description="які поди рахувати своїми — за мітками" color="blue" />
            <DefBadge term="template" description="з чого створювати нові поди" color="blue" />
            <h3 className="info-card__title mb-sm" style={{ marginTop: '1rem' }}>Що робить</h3>
            <DefBadge term="Менше, ніж треба" description="створює поди з шаблону" color="blue" />
            <DefBadge term="Більше, ніж треба" description="видаляє зайві" color="blue" />
          </div>

          <div className="fade-in-delay-2">
            <CodeBlock title="kubectl get deploy,rs,pods (скорочено)">{`
NAME                           READY   UP-TO-DATE
deployment.apps/wishlist-api   3/3     3

NAME                                     DESIRED   READY
replicaset.apps/wishlist-api-7d4b9c8f6   3         3

NAME                               READY   STATUS
pod/wishlist-api-7d4b9c8f6-2xk4p   1/1     Running
pod/wishlist-api-7d4b9c8f6-9qwzt   1/1     Running
pod/wishlist-api-7d4b9c8f6-hm7cs   1/1     Running
`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Hash}
            title="Ім'я пода"
            subtitle="deployment-hash-suffix"
            description="Ім'я Deployment, хеш шаблону подів і випадковий суфікс. Однаковий хеш — та сама версія"
            color="blue"
            delay={3}
          />
          <InfoCard
            icon={Trash2}
            title="Видалили под"
            subtitle="Спробуйте на лабораторній"
            description="За секунду з'являється новий з іншим суфіксом: ReplicaSet побачив 2 з 3"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={Pencil}
            title="Змінили template"
            subtitle="Існуючі поди не змінюються"
            description="ReplicaSet лише рахує поди. Нові створить за новим шаблоном, старі не чіпає"
            color="orange"
            delay={5}
          />
        </div>

        <HighlightBox color="blue" icon={Lightbulb}>
          Через останнє ReplicaSet сам не вміє оновлювати застосунок. Це робить
          Deployment: на кожну нову версію шаблону він створює новий ReplicaSet і
          поступово переносить копії зі старого в новий.
        </HighlightBox>
      </div>
    </div>
  );
}


// ---------- 13. DEPLOYMENT ----------

function DeploymentSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Rocket} title="Deployment" subtitle="Versioned Application" />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <CodeBlock title="deployment.yaml">{`
apiVersion: apps/v1
kind: Deployment
metadata:
  name: wishlist-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: wishlist-api
  template:                  # Pod template
    metadata:
      labels:
        app: wishlist-api
    spec:
      containers:
        - name: api
          image: ghcr.io/example/wishlist-api:1.5.0
          ports:
            - containerPort: 8000
          resources:
            requests: { cpu: 250m, memory: 256Mi }
            limits: { memory: 256Mi }
`}</CodeBlock>
          </div>

          <div className="fade-in-delay-2">
            <div className="outlined-card outlined-card--purple mb-base">
              <h3 className="info-card__title mb-sm">Що додає до ReplicaSet</h3>
              <DefBadge term="Версії" description="новий ReplicaSet на кожну зміну template" color="purple" />
              <DefBadge term="Стратегія" description="як переходити між версіями (наступний слайд)" color="purple" />
              <DefBadge term="Історія" description="старі ReplicaSet лишаються з 0 копій — для відкату" color="purple" />
              <DefBadge term="Стан" description="Available, Progressing: чи вдалося оновлення" color="purple" />
            </div>
            <div className="outlined-card outlined-card--cyan">
              <h3 className="info-card__title mb-sm">Що запускає нову версію</h3>
              <DefBadge term="Зміна template" description="образ, змінні, ресурси, мітки пода" color="cyan" />
              <DefBadge term="Зміна replicas" description="ні: це масштабування в тій самій версії" color="cyan" />
            </div>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={Tag}>
            Перезібрали образ під тим самим тегом — маніфест не змінився, і нічого не
            відбувається. Тому в маніфесті конкретна версія чи digest, а не{' '}
            <code>latest</code> (лекція 5).
          </HighlightBox>
          <HighlightBox color="blue" icon={RotateCcw}>
            Перезапустити всі поди без зміни версії:{' '}
            <code>kubectl rollout restart deployment/wishlist-api</code>. Команда додає
            до template анотацію з поточним часом, тож це звичайне почергове оновлення.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 14. ROLLOUT AND ROLLBACK ----------

function RolloutSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={ArrowRightLeft} title="Оновлення й відкат" subtitle="Rolling Update & Rollback" />

        <p className="fs-lg text-secondary mb-xl">
          Під час почергового оновлення Deployment збільшує новий ReplicaSet і зменшує
          старий маленькими кроками. Старий под прибирають лише тоді, коли новий готовий.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <CodeBlock title="replicas: 3 · ● ready · ○ starting">{`
old 1.5.0   new 1.6.0
●●●         ○       one extra Pod: 4 in total
●●          ●○      new is Ready → one old removed
●           ●●○
            ●●●     done; old ReplicaSet kept at 0
`}</CodeBlock>
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Параметри стратегії</h3>
            <DefBadge term="maxSurge" description="скільки подів понад replicas; 25%, округлення вгору" color="purple" />
            <DefBadge term="maxUnavailable" description="скільки можуть бути неготовими; 25%, округлення вниз" color="purple" />
            <DefBadge term="Для 3 копій" description="до 4 подів, жодна не недоступна" color="purple" />
            <DefBadge term="Recreate" description="спершу зупинити всі старі — простій, але версії не співіснують" color="purple" />
          </div>
        </div>

        <div className="mb-xl fade-in-delay-3">
          <CodeBlock title="kubectl rollout">{`
kubectl rollout status  deployment/wishlist-api --timeout=5m   # wait for the result
kubectl rollout history deployment/wishlist-api                # list revisions
kubectl rollout undo    deployment/wishlist-api                # back to previous
kubectl rollout undo    deployment/wishlist-api --to-revision=2
`}</CodeBlock>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            Нові поди не стають готовими — оновлення зупиняється, а старі далі обслуговують
            трафік. Сам Kubernetes не відкочує: за 10 хвилин він лише позначить Deployment як
            такий, що не просувається. Відкат — задача конвеєра: <code>rollout status</code>{' '}
            з тайм-аутом, а при помилці — <code>rollout undo</code>.
          </HighlightBox>
          <HighlightBox color="blue" icon={Undo2}>
            <code>rollout undo</code> швидкий, але після нього кластер розходиться з git.
            Поверніть версію і в репозиторії, інакше наступний <code>apply</code> знову
            розгорне зламану.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 15. PROBES ----------

function ProbesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Stethoscope} title="Перевірки стану" subtitle="Readiness, Liveness, Startup Probes" />

        <p className="fs-lg text-secondary mb-xl">
          kubelet регулярно перевіряє кожен контейнер. Перевірок три, і кожна відповідає
          на своє питання, тому наслідки невдачі в них різні.
        </p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={DoorOpen}
            title="readiness"
            subtitle="Чи можна слати трафік?"
            description="Ні — под виключають із Service, але не перезапускають. Коли знову готовий, повертають"
            color="green"
            delay={1}
          />
          <InfoCard
            icon={HeartPulse}
            title="liveness"
            subtitle="Чи процес не завис?"
            description="Ні кілька разів поспіль — kubelet перезапускає контейнер"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={Timer}
            title="startup"
            subtitle="Чи вже запустився?"
            description="Поки не пройде, дві інші вимкнені. Дає повільному застосунку час стартувати"
            color="purple"
            delay={3}
          />
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-4">
            <CodeBlock title="containers[]">{`
readinessProbe:
  httpGet: { path: /health/ready, port: 8000 }
  periodSeconds: 5
  failureThreshold: 3
livenessProbe:
  httpGet: { path: /health/live, port: 8000 }
  periodSeconds: 10
  failureThreshold: 3
startupProbe:
  httpGet: { path: /health/live, port: 8000 }
  periodSeconds: 5
  failureThreshold: 30      # up to 150 s to start
`}</CodeBlock>
          </div>

          <div className="outlined-card outlined-card--blue fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Як перевіряти</h3>
            <DefBadge term="httpGet" description="успіх — код 200–399" color="blue" />
            <DefBadge term="tcpSocket" description="порт приймає з'єднання" color="blue" />
            <DefBadge term="exec" description="команда в контейнері повернула 0" color="blue" />
            <DefBadge term="grpc" description="стандартний gRPC health check" color="blue" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Lightbulb}>
            readiness керує і трафіком, і оновленням: старий под прибирають, коли новий
            пройшов readiness (<SlideLink to={14} />). Без неї под вважається готовим
            одразу після старту контейнера, і запити приходять, поки застосунок ще
            не слухає порт.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            liveness перевіряє лише сам процес, а не базу чи кеш. Інакше збій бази
            перезапускає всі копії разом, а базу це не лагодить. Для readiness правило
            з лекції 8 те саме: спільна залежність може вимкнути всі копії одночасно.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 16. SERVICE ----------

function ServiceSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Network} title="Service: стабільна адреса" subtitle="Service" />

        <p className="fs-lg text-secondary mb-xl">
          IP-адреса пода змінюється з кожною заміною, а копій кілька. Service дає групі подів
          одне стабільне ім'я й адресу і розподіляє з'єднання між готовими подами.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <CodeBlock title="service.yaml">{`
apiVersion: v1
kind: Service
metadata:
  name: wishlist-api
spec:
  type: ClusterIP          # default
  selector:
    app: wishlist-api      # Pods from the Deployment
  ports:
    - port: 80             # what clients connect to
      targetPort: 8000     # what the container listens on
`}</CodeBlock>
          </div>

          <div className="outlined-card outlined-card--blue fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Що дає Service</h3>
            <DefBadge term="ClusterIP" description="віртуальна IP-адреса, яка не змінюється" color="blue" />
            <DefBadge term="DNS-ім'я" description="wishlist-api — у тому самому просторі імен" color="blue" />
            <DefBadge term="Повне ім'я" description="wishlist-api.<namespace>.svc.cluster.local" color="blue" />
            <DefBadge term="port → targetPort" description="клієнт іде на 80, под отримує на 8000" color="blue" />
            <DefBadge term="Endpoints" description="IP готових подів; оновлюються самі" color="blue" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <InfoCard
            icon={Network}
            title="ClusterIP"
            subtitle="За замовчуванням"
            description="Доступний лише всередині кластера. Так UI ходить до API, а API — до бази"
            color="green"
            delay={3}
          />
          <InfoCard
            icon={Globe}
            title="LoadBalancer"
            subtitle="Назовні"
            description="Хмара створює балансувальник із публічною IP. Окремий і платний на кожен Service"
            color="purple"
            delay={4}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Container}>
            Як ім'я сервісу в Compose: там API звертався до <code>db:5432</code>, тут —
            до Service з іменем <code>db</code>. Різниця в тому, що за іменем може бути
            кілька подів на різних вузлах.
          </HighlightBox>
          <HighlightBox color="orange" icon={Search}>
            Service є, а з'єднання не проходить? Перевірте, чи є в нього поди:{' '}
            <code>kubectl get endpointslices -l kubernetes.io/service-name=wishlist-api</code>.
            Порожньо — селектор не збігається з мітками або жоден под не пройшов readiness.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 17. SERVICE TYPES (self-study) ----------

function ServiceTypesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Shuffle} title="Типи Service" subtitle="NodePort, ExternalName, Headless" />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Доступ ззовні: кожен тип додає шар</h3>
            <DefBadge term="ClusterIP" description="адреса всередині кластера" color="blue" />
            <DefBadge term="NodePort" description="+ порт 30000–32767 на кожному вузлі" color="blue" />
            <DefBadge term="LoadBalancer" description="+ зовнішній балансувальник, що веде на NodePort" color="blue" />
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Особливі випадки</h3>
            <DefBadge term="ExternalName" description="DNS-псевдонім зовнішнього хоста, без проксі" color="purple" />
            <DefBadge term="Headless" description="clusterIP: None — DNS повертає IP самих подів" color="purple" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-3">
            <CodeBlock title="ExternalName: зовнішня база під внутрішнім ім'ям">{`
apiVersion: v1
kind: Service
metadata:
  name: db
spec:
  type: ExternalName
  externalName: db.example.com   # managed database host
`}</CodeBlock>
          </div>
          <div className="fade-in-delay-3">
            <CodeBlock title="Headless: кожен под окремо">{`
apiVersion: v1
kind: Service
metadata:
  name: redis
spec:
  clusterIP: None      # no virtual IP, no balancing
  selector:
    app: redis
`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={ExternalLink}
            title="ExternalName"
            subtitle="Коли"
            description="Застосунок звертається до db, а що за ним — кластер чи хмарна база, — вирішує маніфест"
            color="purple"
            delay={4}
          />
          <InfoCard
            icon={Network}
            title="Headless"
            subtitle="Коли"
            description="Клієнт сам обирає под: репліки бази, кластери Redis чи Kafka, StatefulSet"
            color="purple"
            delay={5}
          />
          <InfoCard
            icon={Hourglass}
            title="LoadBalancer локально"
            subtitle="EXTERNAL-IP: <pending>"
            description="Без хмари створити балансувальник нікому. У k3d і minikube для цього є вбудовані засоби"
            color="orange"
            delay={6}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            ExternalName — лише псевдонім у DNS. Для HTTPS клієнт перевіряє сертифікат за
            іменем, до якого звертався, тобто <code>db</code>, а не справжнім хостом, і
            перевірка може не пройти.
          </HighlightBox>
          <HighlightBox color="blue" icon={Plug}>
            Service розподіляє з'єднання, а не запити. Клієнт, який тримає одне довге
            з'єднання (HTTP keep-alive, gRPC), увесь час працює з тим самим подом, і нові
            копії навантаження не отримують.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 18. INGRESS AND GATEWAY API ----------

function IngressSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Route} title="Ingress і Gateway API" subtitle="HTTP Routing into the Cluster" />

        <p className="fs-lg text-secondary mb-xl">
          LoadBalancer на кожен Service — дорого, і він нічого не знає про HTTP. Потрібна
          одна точка входу, яка маршрутизує за доменом і шляхом та завершує TLS.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <CodeBlock title="Ingress — стабільний, але заморожений">{`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: wishlist
spec:
  ingressClassName: traefik
  rules:
    - host: wishlist.example.com
      http:
        paths:
          - path: /api
            pathType: Prefix
            backend:
              service: { name: wishlist-api, port: { number: 80 } }
          - path: /
            pathType: Prefix
            backend:
              service: { name: wishlist-ui, port: { number: 80 } }
`}</CodeBlock>
          </div>
          <div className="fade-in-delay-2">
            <CodeBlock title="Gateway API — те саме через HTTPRoute">{`
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: wishlist
spec:
  parentRefs:
    - name: main-gateway       # Gateway set up by cluster operators
  hostnames: [wishlist.example.com]
  rules:
    - matches:
        - path: { type: PathPrefix, value: /api }
      backendRefs:
        - { name: wishlist-api, port: 80 }
    - backendRefs:             # no match = everything else
        - { name: wishlist-ui, port: 80 }
`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Building2}
            title="GatewayClass"
            subtitle="Постачальник інфраструктури"
            description="Яка реалізація обробляє трафік: Envoy Gateway, Traefik, Cilium, NGINX Gateway Fabric..."
            color="blue"
            delay={3}
          />
          <InfoCard
            icon={Server}
            title="Gateway"
            subtitle="Адміністратор кластера"
            description="Точка входу: порти, протоколи, TLS-сертифікати, які простори імен можуть підключатися"
            color="purple"
            delay={4}
          />
          <InfoCard
            icon={Route}
            title="HTTPRoute"
            subtitle="Команда застосунку"
            description="Маршрути свого застосунку: домени, шляхи, заголовки, розподіл трафіку між версіями"
            color="green"
            delay={5}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={AlertTriangle}>
            API Ingress стабільний, але заморожений: нових можливостей не буде, а все понад
            базове робиться анотаціями конкретного контролера. Найпопулярніший із них,
            ingress-nginx, припинив розвиток у березні 2026 року: без оновлень, зокрема
            безпеки. Не плутайте його з NGINX Ingress Controller від F5 — той підтримується.
          </HighlightBox>
          <HighlightBox color="blue" icon={Puzzle}>
            Ні Ingress, ні Gateway API самі нічого не роблять: потрібен контролер, який
            встановлюють окремо. Gateway API ще й не вбудований у Kubernetes — його ресурси
            (CRD) теж ставлять окремо. Для нових проєктів обирайте Gateway API, але Ingress
            треба вміти читати: він досі в більшості кластерів і інструкцій.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 19. CONFIGMAP AND SECRET ----------

function ConfigSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={KeyRound} title="ConfigMap і Secret" subtitle="Configuration & Secrets" />

        <p className="fs-lg text-secondary mb-xl">
          Налаштування живуть окремо від образу, тож один образ іде в усі середовища
          (лекція 7). ConfigMap — для звичайних налаштувань, Secret — для паролів, ключів
          і токенів. Будова в них однакова: набір пар «ключ — значення».
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <CodeBlock title="configmap.yaml">{`
apiVersion: v1
kind: ConfigMap
metadata:
  name: wishlist-api-config
data:
  LOG_LEVEL: info
  REDIS_URL: redis://redis:6379/0
`}</CodeBlock>
          </div>
          <div className="fade-in-delay-2">
            <CodeBlock title="secret.yaml">{`
apiVersion: v1
kind: Secret
metadata:
  name: wishlist-api-secrets
type: Opaque
stringData:          # plain text in, stored base64-encoded
  DATABASE_URL: postgresql://app:s3cret@db:5432/wishlist
`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-3">
            <CodeBlock title="хто може читати Secret, той бачить пароль">{`
kubectl get secret wishlist-api-secrets \\
  -o jsonpath='{.data.DATABASE_URL}' | base64 -d
# postgresql://app:s3cret@db:5432/wishlist
`}</CodeBlock>
          </div>
          <HighlightBox color="orange" icon={Binary}>
            base64 — це кодування, а не шифрування: розкодувати його може будь-хто, без
            жодного ключа. ConfigMap і Secret однакові за будовою, а відрізняються поведінкою
            кластера (<SlideLink to={6} />): доступ до Secret обмежують окремо, kubelet отримує
            лише секрети своїх подів, а <code>kubectl describe</code> не показує значень.
          </HighlightBox>
        </div>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={ShieldCheck}
            title="Доступ"
            subtitle="RBAC"
            description="Читати Secret можуть лише ті, кому це потрібно. Право get на секрети — це право бачити паролі"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={Lock}
            title="Шифрування в etcd"
            subtitle="Encryption at rest"
            description="У звичайному кластері вимкнене, його вмикає адміністратор. Керовані кластери зазвичай шифрують"
            color="blue"
            delay={5}
          />
          <InfoCard
            icon={GitBranch}
            title="Не в git"
            subtitle="Sealed Secrets, SOPS, External Secrets"
            description="У репозиторій — лише зашифроване, або Secret створює оператор зі сховища секретів"
            color="purple"
            delay={6}
          />
        </div>

        <HighlightBox color="orange" icon={AlertTriangle}>
          Маніфест Secret із <code>stringData</code> у git — це пароль у git, навіть якщо в
          кластері він лежить як base64. Як зберігати секрети по-справжньому — у лекції 14.
        </HighlightBox>
      </div>
    </div>
  );
}


// ---------- 20. MOUNTING CONFIGURATION (self-study) ----------

function ConfigMountingSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={HardDrive} title="Підключення конфігурації" subtitle="env, envFrom, volumes" />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <CodeBlock title="template.spec у Deployment">{`
spec:
  containers:
    - name: api
      envFrom:                    # every key -> env var
        - configMapRef: { name: wishlist-api-config }
      env:                        # one key -> one env var
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: wishlist-api-secrets
              key: DATABASE_URL
      volumeMounts:
        - name: tls
          mountPath: /etc/tls     # files: tls.crt, tls.key
          readOnly: true
  volumes:
    - name: tls
      secret:
        secretName: wishlist-tls  # every key -> file
`}</CodeBlock>
          </div>

          <div className="fade-in-delay-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <InfoCard
                icon={List}
                title="envFrom"
                subtitle="Усі ключі"
                description="Кожен ключ стає змінною середовища. Зручно, коли ключі вже названі як змінні"
                color="blue"
                delay={2}
              />
              <InfoCard
                icon={Variable}
                title="env + valueFrom"
                subtitle="Один ключ"
                description="Явно видно, яку змінну звідки взято. Можна дати їй інше ім'я"
                color="cyan"
                delay={3}
              />
              <InfoCard
                icon={FileText}
                title="Том"
                subtitle="Файли"
                description="Кожен ключ — файл у каталозі. Для конфігураційних файлів і сертифікатів"
                color="purple"
                delay={4}
              />
            </div>
          </div>
        </div>

        <div className="outlined-card outlined-card--orange fade-in-delay-5 mb-xl">
          <h3 className="info-card__title mb-sm">Що буде, якщо змінити ConfigMap чи Secret</h3>
          <DefBadge term="Змінні середовища" description="нічого: їх прочитали під час старту контейнера" color="orange" />
          <DefBadge term="Файли в томі" description="оновляться самі із затримкою, але застосунок має їх перечитати" color="orange" />
          <DefBadge term="Том із subPath" description="не оновлюється взагалі" color="orange" />
          <DefBadge term="Ключа немає" description="под не стартує: CreateContainerConfigError" color="orange" />
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={RefreshCw}>
            Після зміни конфігурації поди перезапускають:{' '}
            <code>kubectl rollout restart deployment/wishlist-api</code>. Інший шлях — хеш
            конфігурації в шаблоні пода: змінилась конфігурація — змінився шаблон, і
            запускається звичайне почергове оновлення. Kustomize робить це сам, у Helm-чартах
            так прийнято.
          </HighlightBox>
          <HighlightBox color="purple" icon={Lock}>
            Секрети у файлах безпечніші, ніж у змінних середовища. Змінні успадковують
            дочірні процеси, а ще їх легко випадково вивести в журнал чи звіт про помилку.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}

// ---------- 21. NAMESPACES (self-study) ----------

function NamespacesSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={FolderTree} title="Простори імен" subtitle="Namespaces" />

        <p className="fs-lg text-secondary mb-xl">
          Простір імен — логічна папка всередині кластера. Імена об'єктів мають бути
          унікальними лише в межах свого простору, тож <code>wishlist-api</code> може
          існувати і в <code>staging</code>, і в <code>prod</code>.
        </p>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="outlined-card outlined-card--blue fade-in-delay-1">
            <h3 className="info-card__title mb-sm">Є в кожному кластері</h3>
            <DefBadge term="default" description="куди потрапляє все, якщо не вказати інше" color="blue" />
            <DefBadge term="kube-system" description="компоненти самого кластера: DNS, мережа, проксі" color="blue" />
            <DefBadge term="kube-public" description="дані, які може читати будь-хто" color="blue" />
            <DefBadge term="kube-node-lease" description="сигнали «я живий» від вузлів" color="blue" />
          </div>

          <div className="outlined-card outlined-card--purple fade-in-delay-2">
            <h3 className="info-card__title mb-sm">Що належить простору, а що — кластеру</h3>
            <DefBadge term="У просторі" description="Pod, Deployment, Service, ConfigMap, Secret" color="purple" />
            <DefBadge term="На весь кластер" description="Node, Namespace, PersistentVolume, StorageClass" color="purple" />
            <DefBadge term="Перевірити" description="kubectl api-resources --namespaced=false" color="purple" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-3">
            <CodeBlock title="робота з просторами імен">{`
kubectl create namespace staging
kubectl apply -f k8s/ -n staging
kubectl get pods -n staging
kubectl get pods -A                  # all namespaces

# stop typing -n every time
kubectl config set-context --current --namespace=staging
`}</CodeBlock>
          </div>
          <div className="outlined-card outlined-card--green fade-in-delay-3">
            <h3 className="info-card__title mb-sm">Навіщо</h3>
            <DefBadge term="Застосунки й команди" description="кожен у своєму просторі" color="green" />
            <DefBadge term="Доступ" description="права RBAC видають на простір" color="green" />
            <DefBadge term="Квоти" description="ResourceQuota обмежує сумарні ресурси простору" color="green" />
            <DefBadge term="DNS" description="інший простір: wishlist-api.staging.svc.cluster.local" color="green" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={ShieldAlert}>
            Простір імен — не межа безпеки. За замовчуванням поди з різних просторів
            вільно з'єднуються між собою, а вузли спільні. Тому prod зазвичай живе в
            окремому кластері, а не просто в окремому просторі.
          </HighlightBox>
          <HighlightBox color="blue" icon={AlertTriangle}>
            <code>NotFound</code> для об'єкта, який точно існує, — найчастіше забутий{' '}
            <code>-n</code>. А <code>kubectl delete namespace</code> видаляє все, що в ньому
            було, без додаткових питань.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 22. KUBECTL BASICS (self-study) ----------

function KubectlSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Terminal} title="kubectl: базові команди" subtitle="kubectl Cheat Sheet" />

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-1">
            <CodeBlock title="подивитися">{`
kubectl get pods                     # list
kubectl get pods -o wide             # + node and Pod IP
kubectl get pods -w                  # watch changes live
kubectl get deploy wishlist-api -o yaml
kubectl describe pod <pod>           # details + Events
kubectl get events --sort-by=.lastTimestamp
`}</CodeBlock>
          </div>
          <div className="fade-in-delay-2">
            <CodeBlock title="змінити">{`
kubectl apply -f k8s/
kubectl delete -f k8s/
kubectl rollout status  deployment/wishlist-api
kubectl rollout undo    deployment/wishlist-api
kubectl scale deployment/wishlist-api --replicas=5   # temporary
`}</CodeBlock>
          </div>
          <div className="fade-in-delay-3">
            <CodeBlock title="налагодити">{`
kubectl logs <pod>                   # current container
kubectl logs <pod> --previous        # before the last crash
kubectl logs -f deploy/wishlist-api  # follow one Pod of it
kubectl exec -it <pod> -- sh         # shell inside
kubectl port-forward svc/wishlist-api 8080:80
`}</CodeBlock>
          </div>
          <div className="fade-in-delay-4">
            <CodeBlock title="кластер і контекст">{`
kubectl config get-contexts          # clusters from ~/.kube/config
kubectl config use-context k3d-devops
kubectl get nodes
kubectl explain deployment.spec.strategy
`}</CodeBlock>
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="blue" icon={Search}>
            Порядок діагностики: <code>get</code> — у якому стані под,{' '}
            <code>describe</code> — розділ Events унизу пояснює чому,{' '}
            <code>logs --previous</code> — що застосунок сказав перед падінням,{' '}
            <code>exec</code> — перевірити зсередини: змінні, файли, DNS.
          </HighlightBox>
          <HighlightBox color="orange" icon={AlertTriangle}>
            kubectl працює з тим кластером, який зараз вибраний у контексті. Перш ніж
            виконувати <code>delete</code> чи <code>apply</code>, перевірте, куди саме:{' '}
            <code>kubectl config current-context</code>.
          </HighlightBox>
        </div>
      </div>
    </div>
  );
}


// ---------- 23. LOCAL CLUSTER (self-study) ----------

function LocalClusterSlide() {
  return (
    <div className="slide">
      <div className="slide__content">
        <SlideHeader icon={Laptop} title="Локальний кластер" subtitle="kind, minikube, k3d" />

        <p className="fs-lg text-secondary mb-xl">
          Для навчання не потрібна хмара: кластер можна підняти на ноутбуці. Усі три
          інструменти безкоштовні й запускають вузли як контейнери (minikube — ще й як
          віртуальну машину).
        </p>

        <div className="slide-grid slide-grid--3col mb-xl">
          <InfoCard
            icon={Box}
            title="kind"
            subtitle="Kubernetes in Docker"
            description="«Чистий» Kubernetes, на якому тестують сам Kubernetes. Багато вузлів, швидкий старт; популярний у CI"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={Monitor}
            title="minikube"
            subtitle="Найстаріший"
            description="Доповнення вмикаються однією командою: ingress, metrics-server, dashboard. Для LoadBalancer — minikube tunnel"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Feather}
            title="k3d"
            subtitle="k3s in Docker"
            description="Найлегший. Одразу є Traefik, робочий LoadBalancer і локальне сховище"
            color="green"
            delay={3}
          />
        </div>

        <div className="slide-grid slide-grid--2col mb-xl">
          <div className="fade-in-delay-4">
            <CodeBlock title="k3d: від нуля до застосунку">{`
k3d cluster create devops --agents 2 -p "8080:80@loadbalancer"
kubectl get nodes                       # 1 server + 2 agents

docker build -t wishlist-api:dev .
k3d image import wishlist-api:dev -c devops
kubectl apply -f k8s/

k3d cluster delete devops               # clean up
`}</CodeBlock>
          </div>
          <div className="outlined-card outlined-card--blue fade-in-delay-4">
            <h3 className="info-card__title mb-sm">Локальний образ у кластер</h3>
            <DefBadge term="kind" description="kind load docker-image wishlist-api:dev" color="blue" />
            <DefBadge term="minikube" description="minikube image load wishlist-api:dev" color="blue" />
            <DefBadge term="k3d" description="k3d image import wishlist-api:dev" color="blue" />
            <DefBadge term="Будь-який" description="push у реєстр, як у лекції 5" color="blue" />
          </div>
        </div>

        <div className="slide-grid slide-grid--2col">
          <HighlightBox color="orange" icon={Download}>
            Кластер не бачить образів вашого Docker: у нього свій containerd. Але навіть
            після імпорту тег <code>latest</code> або тег без версії змушує вузол щоразу
            тягнути образ із реєстру, і под падає в <code>ErrImagePull</code>. Беріть явний
            тег, наприклад <code>:dev</code>.
          </HighlightBox>
          <HighlightBox color="blue" icon={Lightbulb}>
            Docker Desktop, OrbStack і Rancher Desktop мають вбудований Kubernetes, який
            вмикається в налаштуваннях. Для лабораторної підійде будь-який варіант:
            знання переносяться, відрізняються лише команди створення кластера.
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
            icon={Terminal}
            title="Ручні зміни в кластері"
            subtitle={<SlideLink to={5} />}
            description="Наступний apply усе відкотив → зміни лише через файл у git"
            color="orange"
            delay={1}
          />
          <InfoCard
            icon={Cpu}
            title="Поди без requests"
            subtitle={<SlideLink to={9} />}
            description="Планувальник перевантажує вузли → requests для кожного контейнера"
            color="orange"
            delay={2}
          />
          <InfoCard
            icon={XCircle}
            title="Ліміт пам'яті впритул"
            subtitle={<SlideLink to={9} />}
            description="OOMKilled під навантаженням → ліміт за реальним споживанням із запасом"
            color="orange"
            delay={3}
          />
          <InfoCard
            icon={Unlink}
            title="Окремі поди"
            subtitle={<SlideLink to={10} />}
            description="Под зник разом із вузлом, і ніхто його не відновив → Deployment"
            color="orange"
            delay={4}
          />
          <InfoCard
            icon={Tags}
            title="Однакові мітки в різних застосунків"
            subtitle={<SlideLink to={11} />}
            description="Service шле трафік не в ті поди → унікальна мітка app на застосунок"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={Tag}
            title="Тег latest"
            subtitle={<SlideLink to={13} />}
            description="Новий образ не розгортається, а локально — ErrImagePull → конкретна версія"
            color="orange"
            delay={6}
          />
          <InfoCard
            icon={DoorOpen}
            title="Без readiness"
            subtitle={<SlideLink to={15} />}
            description="Запити приходять до старту застосунку → readiness на кожен застосунок"
            color="orange"
            delay={7}
          />
          <InfoCard
            icon={HeartPulse}
            title="liveness перевіряє базу"
            subtitle={<SlideLink to={15} />}
            description="Збій бази перезапускає всі копії → liveness перевіряє лише процес"
            color="orange"
            delay={8}
          />
          <InfoCard
            icon={Binary}
            title="Secret у git"
            subtitle={<SlideLink to={19} />}
            description="base64 читає будь-хто → у репозиторій лише зашифроване"
            color="orange"
            delay={9}
          />
        </div>

        <HighlightBox color="blue" icon={Lightbulb}>
          Більшість цих помилок не видно, поки є одна копія на одному вузлі і нічого не
          оновлюється. Вони з'являються саме тоді, заради чого Kubernetes і беруть: копій
          кілька, вузли падають, версії змінюються.
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
            icon={FileCode}
            title="Бажаний стан, а не команди"
            subtitle="Declarative model"
            description="Ви пишете spec, кластер доводить до нього status. Джерело правди — файли в git"
            color="blue"
            delay={1}
          />
          <InfoCard
            icon={RefreshCw}
            title="Один цикл на все"
            subtitle="Reconciliation"
            description="Самовідновлення, масштабування й оновлення — це той самий цикл контролерів"
            color="purple"
            delay={2}
          />
          <InfoCard
            icon={Box}
            title="Поди не лікують, а замінюють"
            subtitle="Pods are disposable"
            description="Подами керує Deployment, а звертаються до них через Service"
            color="cyan"
            delay={3}
          />
          <InfoCard
            icon={Tags}
            title="Усе зв'язують мітки"
            subtitle="Labels & selectors"
            description="ReplicaSet і Service знаходять поди не за іменем, а за мітками"
            color="green"
            delay={4}
          />
          <InfoCard
            icon={DoorOpen}
            title="Readiness керує трафіком"
            subtitle="Probes"
            description="Service і почергове оновлення довіряють readiness. Без неї обидва працюють наосліп"
            color="orange"
            delay={5}
          />
          <InfoCard
            icon={KeyRound}
            title="Конфігурація поза образом"
            subtitle="ConfigMap & Secret"
            description="Один образ у всі середовища. Secret захищає доступ, а не base64"
            color="pink"
            delay={6}
          />
        </div>

        <div className="slide-grid slide-grid--2col">
          <div className="outlined-card outlined-card--purple fade-in-delay-7">
            <h3 className="info-card__title mb-sm">Поза лекцією</h3>
            <DefBadge term="PersistentVolume, StatefulSet" description="дані, які переживають под; бази в кластері" color="purple" />
            <DefBadge term="DaemonSet" description="по одному поду на кожному вузлі: агенти журналів і метрик" color="purple" />
            <DefBadge term="Job, CronJob" description="разові й регулярні задачі: міграції, резервні копії" color="purple" />
            <DefBadge term="Helm, Kustomize" description="маніфести для кількох середовищ без копіювання" color="purple" />
          </div>
          <HighlightBox color="blue" icon={Search}>
            Майже будь-яка проблема в Kubernetes — це розбіжність між spec і status. Знайдіть
            ланку, на якій ланцюжок зупинився (<SlideLink to={7} />), і ви знайдете причину:
            немає вузла, немає образу, не пройдено перевірку, не збігаються мітки.
          </HighlightBox>
        </div>
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
        Лекція 9 — Kubernetes: архітектура й основні об'єкти
      </h2>
      <div className="title-slide__badge">
        <p>⚙️ Далі: Kubernetes в експлуатації</p>
      </div>
    </div>
  );
}