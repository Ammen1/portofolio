export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech_stack: string[];
  github_url: string | null;
  live_url: string | null;
  play_store_url: string | null;
  is_featured: boolean;
  category: string;
  impact?: string;
  status?: "completed" | "in_progress";
}

export const staticProjects: Project[] = [
  {
    id: "1",
    title: "StarPay Ethiopia",
    description:
      "Scalable fintech infrastructure powering digital payment services across Ethiopia.",
    longDescription:
      "Contributed to the development of scalable fintech infrastructure powering digital payment services in Ethiopia. Built secure backend APIs for transaction processing, authentication, and merchant integrations. Implemented wallet services, transaction workflows, and financial reporting systems.",
    tech_stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    github_url: null,
    live_url: "https://starpayethiopia.com",
    play_store_url:
      "https://play.google.com/store/apps/details?id=com.eaglelionsystems.starpay&hl=en-US",
    is_featured: true,
    category: "Fintech",
    impact: "Thousands of users across Ethiopia",
    status: "completed",
  },
  {
    id: "2",
    title: "Ethiopay",
    description:
      "Backend integrations for Ethiopia's national digital payment ecosystem.",
    longDescription:
      "Worked on backend integrations and payment-related services for Ethiopia's national digital payment ecosystem. Developed secure APIs and financial transaction workflows supporting interoperable payment services. Implemented Saga-based transaction coordination.",
    tech_stack: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Saga Pattern",
      "Microservices",
    ],
    github_url: null,
    live_url: "https://ethswitch.com/ethiopay/",
    play_store_url: null,
    is_featured: true,
    category: "National Payment",
    impact: "National-scale payment infrastructure",
    status: "completed",
  },
  {
    id: "3",
    title: "CashGo – Bank of Abyssinia",
    description:
      "Backend systems powering mobile financial services and digital wallet operations.",
    longDescription:
      "Contributed to backend systems powering mobile financial services and digital wallet operations. Developed APIs for user authentication, transaction management, and banking integrations. Focused on scalability, reliability, and secure transaction processing.",
    tech_stack: ["Node.js", "MongoDB", "Redis", "JWT", "Docker"],
    github_url: null,
    live_url: "https://www.cashgoethiopia.com/",
    play_store_url:
      "https://play.google.com/store/apps/details?id=com.bankofabyssinia.cashgo&hl=en-US",
    is_featured: true,
    category: "Banking",
    impact: "Bank of Abyssinia customers",
    status: "completed",
  },
  {
    id: "4",
    title: "GetFee Enterprise Platform",
    description:
      "Enterprise payment and fee collection systems handling large-scale financial operations.",
    longDescription:
      "Worked on enterprise payment and fee collection systems handling large-scale financial operations. Helped build systems supporting more than 60 billion birr in processed transactions. Developed backend services for payment workflows, reporting, reconciliation, and secure integrations.",
    tech_stack: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Microservices",
      "CI/CD",
    ],
    github_url: null,
    live_url: "https://www.getfeeenterprise.com/",
    play_store_url:
      "https://play.google.com/store/apps/details?id=com.eaglelionsystems.getfeeenterprise&hl=en-US",
    is_featured: true,
    category: "Enterprise",
    impact: "60B+ ETB processed",
    status: "completed",
  },
  {
    id: "5",
    title: "Dashen Super App Integrations",
    description:
      "Backend integrations and scalable financial services for Dashen Super App ecosystems.",
    longDescription:
      "Contributed to backend integrations and scalable financial services connected to Dashen Super App ecosystems. Built secure APIs and optimized transaction services supporting high-volume user activity.",
    tech_stack: ["Node.js", "TypeScript", "PostgreSQL", "API Gateway", "Redis"],
    github_url: null,
    live_url: null,
    play_store_url:
      "https://play.google.com/store/apps/details?id=com.dashen.dashensuperapp&hl=en-US",
    is_featured: true,
    category: "Banking",
    impact: "High-volume user activity",
    status: "completed",
  },
  {
    id: "6",
    title: "TeleTv – Online Cinema Platform",
    description:
      "Scalable backend for Ethiopia's online cinema streaming platform.",
    longDescription:
      "Built scalable backend services for Ethiopia's online cinema streaming platform. Implemented secure rental APIs, payment integration, content access control, and authentication systems. Optimized backend architecture to support thousands of concurrent mobile users.",
    tech_stack: [
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Payment Gateway",
    ],
    github_url: null,
    live_url: null,
    play_store_url: null,
    is_featured: false,
    category: "Streaming",
    impact: "Thousands of concurrent users",
    status: "completed",
  },
  {
    id: "7",
    title: "Ketari – Recruitment Platform",
    description:
      "Skill-based recruitment APIs matching candidates with employers.",
    longDescription:
      "Designed and developed recruitment platform APIs matching candidates with employers based on skills and experience. Implemented recruiter-applicant workflows, authentication systems, and advanced filtering/search features with 40%+ performance improvement.",
    tech_stack: ["Express.js", "MongoDB", "JWT", "RBAC", "Node.js"],
    github_url: null,
    live_url: null,
    play_store_url: null,
    is_featured: false,
    category: "Enterprise",
    impact: "40%+ search performance boost",
    status: "completed",
  },
  {
    id: "8",
    title: "Genius Lyrics Clone API",
    description:
      "Production-grade backend API inspired by Genius.com built in Go.",
    longDescription:
      "Built a production-grade backend API inspired by Genius.com functionality using Go. Implemented authentication, CRUD operations, structured logging, middleware patterns, and clean architecture practices.",
    tech_stack: ["Go", "PostgreSQL", "Clean Architecture", "JWT", "Swagger"],
    github_url: "https://github.com/Ammen1",
    live_url: null,
    play_store_url: null,
    is_featured: false,
    category: "Personal Project",
    impact: "Demonstrating Go & clean architecture",
    status: "completed",
  },
  {
    id: "payflow",
    title: "PayFlow — Distributed Payment Processing Platform",
    description:
      "Production-grade, high-throughput fintech backend inspired by Stripe, engineered in Go with gRPC, Kafka event streaming, and double-spend protection.",
    longDescription:
      "A distributed, highly-scalable payment gateway ecosystem built with Go 1.22 and organized as a microservices workspace. Features a custom API Gateway reverse proxy with sliding-window rate limiting. Implements eight microservices coordinating over gRPC (auth, user, merchant, payment, wallet, fee, transaction, notification). Employs Kafka event-driven architecture with Dead-Letter Queues (DLQ) for reliable processing, PostgreSQL row-level locks (SELECT FOR UPDATE) to prevent double-spending in ledger writes, Redis sliding-window idempotency caching, custom circuit breakers, and complex multi-layered fee calculations (tiered discounts, custom merchant overrides, and local taxes). Fully observable via Prometheus, Grafana, and Jaeger distributed tracing.",
    tech_stack: [
      "Go (Golang)",
      "Kafka",
      "gRPC",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "Prometheus & Grafana",
      "Jaeger",
    ],
    github_url: "https://github.com/Ammen1/pay-flow-distributed-payments",
    live_url: null,
    play_store_url: null,
    is_featured: true,
    category: "Fintech",
    impact:
      "High-volume distributed processing, zero-double-spend guarantees, 24h idempotency caches, and full tracing observability.",
    status: "completed",
  },
];
