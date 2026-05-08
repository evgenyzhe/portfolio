export const positioningItems = [
  "Структурировать сложные процессы и\u00a0пользовательские сценарии",
  "Снижать когнитивную нагрузку в\u00a0насыщенных интерфейсах",
  "Превращать бизнес-логику в\u00a0понятные UX-решения",
  "Синхронизировать дизайн с\u00a0аналитикой, разработкой и\u00a0продуктом"
];

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  area: string;
  previewImage: string;
  intro: string;
  problem: string;
  role: string;
  process: string[];
  solution: string[];
  outcome: string[];
  nextCaseSlug: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ux-audit-complex-service",
    title: "UX audit of a complex service",
    subtitle:
      "Clarifying fragmented service journeys and creating a practical roadmap for design decisions.",
    area: "Service ecosystem",
    previewImage: "images/case-studies/ux-audit-preview.png",
    intro:
      "This placeholder case study shows how I would structure an audit for a mature service with multiple entry points, operational constraints, and accumulated UX debt.",
    problem:
      "A mature product had fragmented flows, unclear decision points, and support-heavy scenarios across connected service journeys.",
    role:
      "Mapped key journeys, identified UX debt, and prioritized improvements with product and engineering stakeholders.",
    process: [
      "Reviewed the current experience across the main service scenarios and identified where users lost orientation or confidence.",
      "Grouped findings into recurring problem patterns such as inconsistent logic, duplicated steps, and weak feedback states.",
      "Aligned the backlog with product owners and engineering leads so the audit could guide actual delivery decisions."
    ],
    solution: [
      "Structured the audit around user journeys, business rules, and interface patterns instead of isolated screens.",
      "Created a prioritised list of improvements that linked experience issues to specific product and operational consequences.",
      "Defined a clearer interaction model for the next design iteration so future flows could be more consistent."
    ],
    outcome: [
      "Placeholder outcome: a shared audit backlog that gave the team a clearer starting point for redesign.",
      "Placeholder outcome: service logic became easier to discuss across design, product, and engineering."
    ],
    nextCaseSlug: "financial-scenario-banking-product"
  },
  {
    slug: "financial-scenario-banking-product",
    title: "Financial scenario / banking product",
    subtitle:
      "Translating conditional financial logic into a guided decision flow that feels understandable and trustworthy.",
    area: "Fintech",
    previewImage: "images/case-studies/financial-scenario-preview.png",
    intro:
      "This placeholder case study focuses on a banking scenario where product value depended on making complex rules legible without oversimplifying them.",
    problem:
      "Users needed to compare financial options while the business logic depended on multiple conditions, edge cases, and risk states.",
    role:
      "Translated rules, risks, states, and edge cases into a guided UX architecture and prototype.",
    process: [
      "Worked through the underlying financial logic with domain stakeholders to understand states, dependencies, and exceptions.",
      "Framed the experience around key user decisions rather than around internal product structures.",
      "Tested the interaction model at prototype level before preparing it for delivery."
    ],
    solution: [
      "Designed a step-based flow that surfaced the right information at the moment a user needed to make a decision.",
      "Used progressive disclosure to reduce cognitive load while keeping critical rules visible and traceable.",
      "Prepared annotated handoff materials so development could implement the logic with fewer interpretation gaps."
    ],
    outcome: [
      "Placeholder outcome: the team had a clearer decision flow for a complex banking scenario.",
      "Placeholder outcome: product, design, and engineering could review the same logic model with less ambiguity."
    ],
    nextCaseSlug: "dashboard-analytics-interface"
  },
  {
    slug: "dashboard-analytics-interface",
    title: "Dashboard / analytics interface",
    subtitle:
      "Organising dense signals into a dashboard that supports fast scanning, comparison, and action.",
    area: "Analytics",
    previewImage: "images/case-studies/dashboard-analytics-preview.png",
    intro:
      "This placeholder case study represents the kind of analytical interface work where the core challenge is not adding data, but making it operationally useful.",
    problem:
      "Teams needed faster access to operational signals without drowning in raw data and disconnected charts.",
    role:
      "Defined information hierarchy, dashboard modules, empty states, filters, and validation scenarios.",
    process: [
      "Separated the dashboard into decision-oriented layers: status, trends, exceptions, and next actions.",
      "Prioritised what should be visible by default versus what should sit behind filters or deeper views.",
      "Validated how teams would scan the interface during recurring operational use."
    ],
    solution: [
      "Built a modular dashboard structure with clearer hierarchy between KPIs, charts, alerts, and tables.",
      "Reduced noise by tightening the number of visible elements in the default state and clarifying filter behaviour.",
      "Designed supporting states so the interface remained useful with sparse, delayed, or exceptional data."
    ],
    outcome: [
      "Placeholder outcome: the interface became easier to scan during recurring analytical work.",
      "Placeholder outcome: teams gained a more focused structure for comparing signals and spotting exceptions."
    ],
    nextCaseSlug: "ux-audit-complex-service"
  }
];

export const processSteps = [
  {
    title: "Погружаюсь в\u00a0контекст",
    description:
      "Разбираюсь в\u00a0продуктовой логике, целях бизнеса, ограничениях системы и\u00a0реальных пользовательских задачах."
  },
  {
    title: "Структурирую сложность",
    description:
      "Собираю карту сценариев, выделяю ключевые сущности и\u00a0упрощаю без\u00a0потери смысла."
  },
  {
    title: "Проектирую решение",
    description:
      "Продумываю интерфейс как\u00a0рабочую систему: сценарии, роли, состояния, ошибки, приоритеты."
  },
  {
    title: "Синхронизирую с\u00a0командой",
    description:
      "Работаю в\u00a0связке с\u00a0продуктом, аналитикой и\u00a0разработкой, чтобы\u00a0решение было качественным и\u00a0реализуемым."
  }
];

export const strengths = [
  "Systems thinking",
  "Product logic",
  "Stakeholder alignment",
  "Interface clarity",
  "Working with ambiguity",
  "Design for measurable outcomes"
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
