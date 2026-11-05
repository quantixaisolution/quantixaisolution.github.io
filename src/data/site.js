/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this file to change the website's text.
 *  Components read from here; no copy is hard-coded in JSX.
 *
 *  ⚠ SAMPLE CONTENT: `stats`, `caseStudies` and `testimonials`
 *  are placeholders. Replace with real Quantix data before launch.
 * ─────────────────────────────────────────────────────────────
 */
import {
  BadgePercent,
  Bot,
  BrainCircuit,
  Calculator,
  ChartNoAxesCombined,
  Code2,
  FlaskConical,
  Sparkles,
  Search,
  PencilRuler,
  Rocket,
  LifeBuoy,
  Users,
  Target,
  LineChart,
  Award,
  ShoppingBag,
  Factory,
  Landmark,
  HeartPulse,
  Truck,
  Cloud,
} from "lucide-react";

/** Resolve a file in public/images (respects Vite's base path for sub-folder deploys). */
const img = (name) => `${import.meta.env.BASE_URL}images/${name}.webp`;

export const brand = {
  name: "Quantix",
  subtitle: "AI Solutions",
  fullName: "Quantix AI Solutions",
  mark: `${import.meta.env.BASE_URL}brand/quantix-mark.png`,
  tagline: "Innovative Solutions. Smarter Decisions. A Data-Driven Future.",
  slogan: "Turning Data into Intelligence | Driving Business Growth with AI & Analytics",
  email: "hello@quantix.ai", // TODO: replace with real address
  linkedin: "https://www.linkedin.com/company/quantix-ai-solutions/",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "Why us", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  titleStart: "Let's turn",
  titleRotating: ["data into decisions.", "pricing into profit.", "workflows into AI agents.", "ideas into products."],
  description:
    "Turning data into intelligence and driving business growth with AI & analytics. One team for pricing, BI, data science, machine learning, generative & agentic AI, accounting and software development.",
  primaryCta: { label: "Start a project", href: "#contact" },
  secondaryCta: { label: "Explore services", href: "#services" },
  trust: ["Free consultation", "NDA on day one", "Tailored to your business"],
  console: [
    { k: "pricing", v: "Elasticity model → +6.2% margin scenario" },
    { k: "bi", v: "Revenue dashboard refreshed (12 sources)" },
    { k: "ml", v: "Churn model AUC 0.91 · deployed" },
    { k: "agent", v: "Month-end reconciliation complete ✓" },
  ],
};

export const techStack = [
  "Python", "SQL", "Power BI", "Tableau", "Excel", "Snowflake", "dbt", "scikit-learn", "PyTorch", "XGBoost",
  "OpenAI", "Anthropic", "LangChain", "LangGraph", "CrewAI", "AWS", "Azure", "React", "Next.js", "Node.js",
];

export const services = [
  {
    icon: BadgePercent,
    title: "Pricing Analytics & Optimization",
    image: img("svc-pricing"),
    description: "Pricing optimization, revenue and profitability analysis, and data-driven pricing strategies that protect margin.",
    tags: ["Optimization", "Elasticity", "Profitability"],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data Analytics & Business Intelligence",
    image: img("svc-bi"),
    description: "Data visualization, reporting and dashboards that turn scattered data into actionable business insight.",
    tags: ["Dashboards", "Power BI", "Reporting"],
  },
  {
    icon: FlaskConical,
    title: "Data Science",
    image: img("svc-datasci"),
    description: "Predictive analytics, statistical modeling and forecasting to see what's next and act before it happens.",
    tags: ["Forecasting", "Statistics", "Prediction"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning Engineering",
    image: img("svc-ml"),
    description: "ML model development, deployment, automation and optimization — built to run reliably in production.",
    tags: ["MLOps", "Deployment", "Optimization"],
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    image: img("svc-genai"),
    description: "AI-powered applications, LLM integration and intelligent chatbots that enhance real business processes.",
    tags: ["LLMs", "RAG", "Chatbots"],
  },
  {
    icon: Bot,
    title: "Agentic AI & Automation",
    image: img("svc-agentic"),
    description: "Intelligent AI agents and autonomous workflows that take repetitive tasks off your team's plate.",
    tags: ["AI agents", "Workflows", "Automation"],
  },
  {
    icon: Calculator,
    title: "Accounting & Financial Analytics",
    image: img("svc-accounting"),
    description: "Financial reporting, accounting support, cost analysis, budgeting and performance insights.",
    tags: ["Reporting", "Budgeting", "Cost analysis"],
  },
  {
    icon: Code2,
    title: "Software & Web Development",
    image: img("svc-web"),
    description: "Fast, modern websites, portals and web apps — with analytics and AI features built in from day one.",
    tags: ["React", "Next.js", "Web apps"],
  },
];

export const about = {
  title: "Technology, analytics and finance — under one roof",
  description:
    "Quantix AI Solutions is a technology-driven consulting and professional services company focused on transforming business challenges into intelligent, data-driven solutions. We help businesses improve decision-making, optimize operations and accelerate growth.",
  mission:
    "To empower organizations with innovative technology, intelligent automation, and actionable insights that create measurable business value.",
  images: {
    main: { src: img("about-team"), alt: "Quantix team collaborating on laptops" },
    secondary: { src: img("about-meeting"), alt: "Two colleagues celebrating a successful project" },
  },
  belief: "The future belongs to businesses that combine data, intelligence, and innovation.",
  pillars: [
    { label: "Technology", detail: "ML, generative & agentic AI, web" },
    { label: "Analytics", detail: "BI, data science, pricing" },
    { label: "Finance", detail: "Accounting & financial analytics" },
  ],
};

export const industries = [
  { icon: ShoppingBag, name: "Retail & E-commerce", image: img("ind-retail"), uses: ["Dynamic pricing", "Demand forecasting", "Customer analytics"] },
  { icon: Factory, name: "Manufacturing", image: img("ind-manufacturing"), uses: ["Cost & margin analysis", "Predictive maintenance", "Quality analytics"] },
  { icon: Landmark, name: "Banking & Finance", image: img("ind-finance"), uses: ["Financial reporting", "Risk models", "AI document processing"] },
  { icon: HeartPulse, name: "Healthcare", image: img("ind-healthcare"), uses: ["Operational dashboards", "Patient-flow forecasting", "GenAI assistants"] },
  { icon: Truck, name: "Logistics & Supply Chain", image: img("ind-logistics"), uses: ["Route & inventory optimization", "AP automation", "Delivery analytics"] },
  { icon: Cloud, name: "SaaS & Technology", image: img("ind-saas"), uses: ["Churn prediction", "Pricing & packaging", "AI product features"] },
];

export const cta = {
  title: "Ready to turn your data into decisions?",
  description: "Book a free 30-minute consultation. We'll review your challenge and suggest the fastest path to measurable value.",
  image: img("cta-office"),
  primary: { label: "Book a free consultation", href: "#contact" },
  secondary: { label: "Email us", href: `mailto:${brand.email}` },
};

export const stats = [
  { value: 8, suffix: "", label: "Service practices" },
  { value: 50, suffix: "+", label: "Projects delivered" }, // SAMPLE
  { value: 98, suffix: "%", label: "Client satisfaction" }, // SAMPLE
  { value: 24, suffix: "h", label: "Response time" },
];

export const workCategories = ["Pricing & Finance", "Analytics & ML", "AI & Agents", "Web"];

/** SAMPLE case studies — replace with real projects. */
export const caseStudies = [
  {
    category: "Pricing & Finance",
    title: "Dynamic pricing model",
    image: img("work-pricing"),
    client: "D2C retail brand",
    result: "+6.5% gross margin",
    description: "Price-elasticity models per SKU with guardrails, feeding weekly pricing decisions.",
    gradient: "from-orange-500/40 via-amber-500/20 to-transparent",
  },
  {
    category: "Analytics & ML",
    title: "Executive BI command center",
    image: img("work-bi"),
    client: "Multi-location services company",
    result: "Reporting cut from 5 days to 1 hour",
    description: "Unified 12 data sources into automated Power BI dashboards for leadership.",
    gradient: "from-sky-500/40 via-blue-500/20 to-transparent",
  },
  {
    category: "AI & Agents",
    title: "Agentic accounts-payable workflow",
    image: img("work-ap"),
    client: "Logistics company",
    result: "80% of invoices processed hands-free",
    description: "AI agents extract, validate, match and post invoices — escalating exceptions to finance.",
    gradient: "from-violet-600/40 via-fuchsia-500/20 to-transparent",
  },
  {
    category: "Analytics & ML",
    title: "Customer churn prediction",
    image: img("work-churn"),
    client: "Subscription business",
    result: "22% lower churn in at-risk segment",
    description: "ML model scores every customer weekly and triggers targeted retention campaigns.",
    gradient: "from-emerald-500/40 via-teal-500/20 to-transparent",
  },
  {
    category: "Pricing & Finance",
    title: "Profitability & cost analysis",
    image: img("work-profit"),
    client: "Manufacturing firm",
    result: "Unprofitable product lines identified",
    description: "Activity-based costing and margin analysis across products, customers and channels.",
    gradient: "from-rose-500/40 via-pink-500/20 to-transparent",
  },
  {
    category: "Web",
    title: "GenAI-powered client portal",
    image: img("work-portal"),
    client: "Professional services firm",
    result: "Launched in 8 weeks",
    description: "React web app with dashboards and an LLM assistant that answers questions over client documents.",
    gradient: "from-indigo-500/40 via-cyan-500/20 to-transparent",
  },
  {
    category: "Pricing & Finance",
    title: "Budgeting & cash-flow forecast",
    image: img("work-fin-forecast"),
    client: "Growing services company",
    result: "13-week cash visibility, updated daily",
    description: "Rolling budget and cash-flow model linked to accounting data, with scenario planning for leadership.",
    gradient: "from-amber-500/40 via-yellow-500/20 to-transparent",
  },
  {
    category: "Analytics & ML",
    title: "Demand forecasting engine",
    image: img("work-demand"),
    client: "Wholesale distributor",
    result: "18% fewer stockouts",
    description: "SKU-level demand forecasts feeding purchase orders, with accuracy tracked in a live dashboard.",
    gradient: "from-teal-500/40 via-cyan-500/20 to-transparent",
  },
  {
    category: "AI & Agents",
    title: "Customer support AI chatbot",
    image: img("work-chatbot"),
    client: "E-commerce brand",
    result: "60% of queries resolved instantly",
    description: "LLM chatbot grounded in policies and order data, with smooth hand-off to human agents.",
    gradient: "from-fuchsia-500/40 via-purple-500/20 to-transparent",
  },
  {
    category: "AI & Agents",
    title: "Sales lead qualification agent",
    image: img("work-leads"),
    client: "B2B SaaS company",
    result: "2.4× more sales-ready meetings",
    description: "AI agent enriches, scores and routes inbound leads to the right rep within a minute.",
    gradient: "from-blue-500/40 via-indigo-500/20 to-transparent",
  },
  {
    category: "Web",
    title: "E-commerce store rebuild",
    image: img("work-ecommerce"),
    client: "D2C lifestyle brand",
    result: "35% faster page loads",
    description: "Modern storefront with product analytics, smart search and AI-assisted recommendations.",
    gradient: "from-rose-500/40 via-orange-500/20 to-transparent",
  },
  {
    category: "Web",
    title: "Corporate website & CMS",
    image: img("work-website"),
    client: "Consulting firm",
    result: "2× more inbound enquiries",
    description: "Fast, SEO-friendly website with an easy CMS, lead forms and built-in visitor analytics.",
    gradient: "from-sky-500/40 via-violet-500/20 to-transparent",
  },
];

export const process = [
  { icon: Search, title: "Discover", duration: "Week 1", description: "A free consultation to understand your goals, data and constraints. You get a clear scope, plan and quote." },
  { icon: PencilRuler, title: "Design & prototype", duration: "Weeks 2–3", description: "Quick wins first: a prototype model, dashboard or agent on your real data, so you see value early." },
  { icon: Rocket, title: "Build & deploy", duration: "Weeks 4–10", description: "Iterative delivery with regular demos, shared progress tracking and a single point of contact." },
  { icon: LifeBuoy, title: "Support & optimize", duration: "Ongoing", description: "Monitoring, model tuning and reporting support — or a clean handover with documentation and training." },
];

/** "Why us" comparison vs. other ways of getting this work done. */
export const comparison = {
  columns: ["Quantix", "Freelance marketplaces", "In-house hiring"],
  rows: [
    { label: "Analytics, AI, finance & web in one team", values: [true, false, "Varies"] },
    { label: "Business-focused, customized solutions", values: [true, "Varies", true] },
    { label: "Time to start", values: ["Days", "1–2 weeks of vetting", "2–4 months"] },
    { label: "Single point of accountability", values: [true, false, true] },
    { label: "Code, models & IP owned by you", values: [true, "Varies", true] },
    { label: "Ongoing support after delivery", values: [true, "Varies", true] },
    { label: "No platform fees", values: [true, false, true] },
  ],
};

/** From "Why Quantix AI Solutions?" */
export const guarantees = [
  { icon: Users, title: "Cross-functional experts", description: "Skilled professionals across technology, analytics and finance." },
  { icon: Target, title: "Business-focused", description: "Customized solutions built around your goals, not generic templates." },
  { icon: LineChart, title: "Data-driven decisions", description: "Every recommendation is backed by evidence and measurable outcomes." },
  { icon: Award, title: "Quality & client success", description: "Committed to quality, efficiency and results you can see." },
];

/** SAMPLE testimonials — replace with real client quotes (with permission). */
export const testimonials = [
  { quote: "Their pricing analysis paid for the engagement within a quarter. Clear, practical and grounded in our numbers.", name: "Priya Menon", role: "COO, Retail brand" },
  { quote: "One team handled our dashboards, forecasting and the AI assistant. No juggling multiple freelancers.", name: "Daniel Brooks", role: "Head of Ops, Logistics" },
  { quote: "Rare to find people who understand both machine learning and accounting. That combination made the difference.", name: "Aisha Rahman", role: "CFO, Manufacturing" },
  { quote: "The agentic workflow they built handles our month-end grunt work. Our finance team finally has time for analysis.", name: "Marco Ruiz", role: "Finance Director, SaaS" },
  { quote: "Our new website and client portal launched on time and the built-in analytics are genuinely useful.", name: "Sophie Laurent", role: "Founder, Consulting firm" },
  { quote: "Honest about trade-offs, quick to respond, and the documentation they handed over is excellent.", name: "Kenji Watanabe", role: "CTO, Subscription business" },
];

export const pricing = [
  {
    name: "Consulting Sprint",
    price: "Fixed scope",
    unit: "2–3 weeks",
    description: "Pricing review, analytics audit or AI proof of concept.",
    features: ["Discovery workshop", "Analysis or working prototype", "Findings & ROI report", "Action roadmap"],
    cta: "Book a sprint",
  },
  {
    name: "Project Delivery",
    price: "Fixed price",
    unit: "per project",
    description: "End-to-end delivery of a model, dashboard, AI agent or web app.",
    features: ["Dedicated project lead", "Cross-functional team", "Regular demos & reporting", "Post-launch support", "Full IP & documentation handover"],
    cta: "Start a project",
    featured: true,
  },
  {
    name: "Ongoing Partnership",
    price: "Monthly",
    unit: "retainer",
    description: "Continuous analytics, finance and AI support as you grow.",
    features: ["Flexible capacity", "Recurring reporting & insights", "Model monitoring & tuning", "Priority support"],
    cta: "Talk to us",
  },
];

export const faqs = [
  { question: "How is Quantix different from hiring on a freelance platform?", answer: "You get one accountable team covering analytics, pricing, data science, AI, accounting and web development — no need to find, vet and coordinate several individual freelancers, and no platform fees." },
  { question: "Do you only work on AI projects?", answer: "No. Many clients start with pricing analysis, BI dashboards or financial reporting. We bring in machine learning and AI only where it clearly adds value." },
  { question: "Can you combine finance and AI work?", answer: "Yes — that's one of our strengths. Examples include automated financial reporting, AI agents for reconciliations and accounts payable, and cost and profitability models." },
  { question: "Do we need clean data before starting?", answer: "No. Assessing and organizing your data is part of discovery. We often start with a high-value slice and improve data quality alongside delivery." },
  { question: "Who owns the work you deliver?", answer: "You do. Code, models, dashboards and documentation are handed over in full." },
  { question: "Do you also build websites?", answer: "Yes. We build modern websites, portals and web apps — and can add dashboards, chatbots or AI features to them." },
];

export const contact = {
  title: "Let's turn your data into decisions.",
  description: "Tell us about your challenge — pricing, reporting, forecasting, automation, AI or a new website. We'll reply within one business day to set up a free consultation.",
  budgets: ["< $5k", "$5k – $20k", "$20k – $50k", "$50k+", "Not sure yet"],
  services: [...services.map((s) => s.title), "Other"],
};

export const footer = {
  blurb: "Technology-driven consulting across data, AI and finance — turning business challenges into intelligent solutions.",
  columns: [
    { title: "Services", links: services.slice(0, 4).map((s) => ({ label: s.title, href: "#services" })) },
    { title: "More services", links: services.slice(4).map((s) => ({ label: s.title, href: "#services" })) },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Work", href: "#work" },
        { label: "FAQ", href: "#faq" },
        { label: "LinkedIn", href: brand.linkedin, external: true },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
};
