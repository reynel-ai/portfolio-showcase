// All site copy and media live here. Edit this file to update the site.

import prestigePulse from "@/assets/builds/prestige-pulse.webp";
import centralIntelligence from "@/assets/builds/central-intelligence.webp";
import toolsMarketplace from "@/assets/builds/tools-marketplace.webp";
import paidAds from "@/assets/builds/paid-ads.webp";
import unifiedDashboard from "@/assets/builds/unified-dashboard.webp";
import missionControl from "@/assets/builds/mission-control.webp";
import earningsHub from "@/assets/builds/earnings-hub.webp";
import earningsHubDataRefresh from "@/assets/builds/earnings-hub-data-refresh.png";
import dbtModelBuilder from "@/assets/builds/dbt-model-builder.webp";
import dbtModelBuilder2 from "@/assets/builds/dbt-model-builder-2.webp";
import reviewAnalytics from "@/assets/builds/review-analytics.webp";
import reviewAnalytics2 from "@/assets/builds/review-analytics-2.webp";
import propMonitor from "@/assets/builds/prop-monitor.webp";
import ibCrmOverview from "@/assets/builds/ib-crm-overview.png";

// Report and dashboard images are loaded by folder so adding one is a file drop.
const reportFiles = import.meta.glob("@/assets/reports/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const dashboardFiles = import.meta.glob("@/assets/dashboards/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function reportImages(key: string): string[] {
  return Object.entries(reportFiles)
    .filter(([path]) => path.includes(`/${key}-`))
    .sort(([a], [b]) => {
      const n = (p: string) => Number(p.match(/-(\d+)\.webp$/)?.[1] ?? 0);
      return n(a) - n(b);
    })
    .map(([, src]) => src);
}
function dashboardImage(n: number): string {
  const hit = Object.entries(dashboardFiles).find(([p]) => p.endsWith(`/dash-${n}.webp`));
  return hit ? hit[1] : "";
}

export type Shot = { src: string; alt: string };

export type Build = {
  id: string;
  title: string;
  context: "Prop Firm Match" | "Prop Firm Prestige" | "Client work";
  group: "In focus" | "Reporting and data" | "Research tools" | "Client work";
  summary: string;
  detail?: string;
  stack: string[];
  /** Defaults to "Built with". Use "Covers" when the list is capabilities, not tools. */
  stackLabel?: string;
  status?: string;
  link?: { href: string; label: string };
  shots: Shot[];
};

export const builds: Build[] = [
  {
    id: "prestige-pulse",
    title: "Prestige Pulse",
    context: "Prop Firm Prestige",
    group: "In focus",
    summary:
      "A daily watch on about 100 prop firms. It reads what traders say across X, Reddit, YouTube, reviews and news, tracks every change to firm rules and payout pages, and rolls it all into a weekly trust picture per firm.",
    stackLabel: "Covers",
    stack: ["social listening", "rule-change tracking", "news monitoring"],
    status: "Internal",
    shots: [{ src: prestigePulse, alt: "Prestige Pulse plan page with a radar visual" }],
  },
  {
    id: "central-intelligence",
    title: "Central Intelligence",
    context: "Prop Firm Match",
    group: "In focus",
    summary:
      "One brain for all PFM data. It lines up sales, content, ads, site changes, reviews and market conditions on one timeline, then splits every earnings move into what we control and what we don't. Anyone can ask it questions in Slack.",
    stack: ["LangGraph", "Neo4j", "MCP", "BigQuery", "Slack"],
    status: "Internal",
    shots: [
      { src: centralIntelligence, alt: "Central Intelligence diagram: ten data sources feeding one core" },
    ],
  },
  {
    id: "unified-dashboard",
    title: "Unified Dashboard",
    context: "Prop Firm Match",
    group: "Reporting and data",
    summary:
      "PFM's single place for traffic, sales, paid ads and the Tools Marketplace, built on BigQuery, PostHog, ActiveCampaign and Google Sheets.",
    detail:
      "Daily and weekly KPIs by firm category with period-over-period comparison, email campaign analytics, revenue attribution with last-touch and multi-touch models, and a survey dashboard with CSV export.",
    stack: ["React", "Express", "BigQuery", "PostHog", "ActiveCampaign", "Google Sheets"],
    shots: [
      { src: toolsMarketplace, alt: "Tools Marketplace page of the Unified Dashboard" },
      { src: paidAds, alt: "Paid Ads Performance page of the Unified Dashboard" },
      { src: unifiedDashboard, alt: "Main KPI view of the Unified Dashboard" },
    ],
  },
  {
    id: "earnings-hub",
    title: "Earnings Hub",
    context: "Prop Firm Match",
    group: "Reporting and data",
    summary:
      "Turns earnings from many Google Sheets into one clean dataset. Maps columns, matches each record to its firm, checks every import, and serves the result to Airbyte through an API.",
    stack: ["TypeScript", "React", "Express", "PostgreSQL", "Airbyte", "BigQuery"],
    shots: [
      { src: earningsHub, alt: "Earnings Hub sources overview" },
      { src: earningsHubDataRefresh, alt: "Earnings Hub data refresh and source sync overview" },
    ],
  },
  {
    id: "dbt-model-builder",
    title: "dbt Model Builder",
    context: "Prop Firm Match",
    group: "Reporting and data",
    summary:
      "Builds the data logic behind the dashboards. Explore BigQuery, draft SQL with AI, preview results, and send changes to GitHub for review.",
    detail:
      "Manages a three-layer dbt pipeline (staging, core, metrics) that turns PostHog events and commission sheets into BigQuery tables, with GitHub-style diffs before anything is applied.",
    stack: ["React", "Express", "BigQuery", "dbt", "GitHub Actions"],
    shots: [
      { src: dbtModelBuilder, alt: "dbt Model Builder changed-files view" },
      { src: dbtModelBuilder2, alt: "dbt Model Builder file editor" },
    ],
  },
  {
    id: "mission-control",
    title: "Mission Control",
    context: "Prop Firm Match",
    group: "Research tools",
    summary:
      "Helps prop firms design and price a challenge before launch. Set fees, targets, loss limits and payout rules, and simulated traders show pass rates, payouts, firm margin and how fair the challenge feels.",
    stack: ["Monte Carlo simulation", "React", "TypeScript"],
    status: "Futures calibrated; CFD and crypto pending",
    shots: [{ src: missionControl, alt: "Mission Control challenge simulator" }],
  },
  {
    id: "review-analytics",
    title: "Prop Firm Review Analytics",
    context: "Prop Firm Match",
    group: "Research tools",
    summary:
      "Collects Trustpilot reviews for 54 firms and compares ratings, review trends and trader sentiment, for trader research and competitor benchmarking.",
    detail:
      "Around 235,000 reviews, with AI-written sentiment themes per firm and a publication-ready landscape chart with PNG export.",
    stack: ["React", "Express", "PostgreSQL", "Drizzle ORM", "ScraperAPI"],
    shots: [
      { src: reviewAnalytics, alt: "Prop Firm Review Analytics landscape chart" },
      { src: reviewAnalytics2, alt: "Prop Firm Review Analytics firm overview" },
    ],
  },
  {
    id: "prop-monitor",
    title: "Prop Monitor",
    context: "Prop Firm Match",
    group: "Research tools",
    summary:
      "Watches prop-firm websites for changes to pricing, rules, challenges and payouts. Changes land in a log with Slack alerts, plus manual checks and a Futures Radar prototype.",
    stackLabel: "Covers",
    stack: ["change detection", "Slack alerts", "manual checks"],
    shots: [{ src: propMonitor, alt: "Prop Monitor change log" }],
  },
  {
    id: "ib-crm",
    title: "Introducing Broker CRM",
    context: "Client work",
    group: "Client work",
    summary:
      "An introducing-broker and affiliate CRM built on Twenty, the open-source CRM. Brokers see their partners, referred clients and commissions in one portal.",
    detail: "Running on sample data while the client's backend is connected.",
    stack: ["Twenty CRM", "React", "TypeScript", "Replit"],
    status: "Live demo",
    link: { href: "https://ib-crm-on-twenty.replit.app/", label: "Open the live demo" },
    shots: [{ src: ibCrmOverview, alt: "Introducing Broker CRM dashboard overview" }],
  },
];

export const buildGroups = ["In focus", "Reporting and data", "Research tools", "Client work"] as const;

export type Report = {
  id: string;
  title: string;
  category: string;
  question: string;
  outcome: string;
  findings: string[];
  tools: string[];
  images: string[];
};

export const reports: Report[] = [
  {
    id: "ux-survey",
    title: "Website perception survey",
    category: "Research",
    question: "Where does the PFM site frustrate the people who use it every day?",
    outcome:
      "Analysed 1,100+ responses across two survey forms and turned them into a prioritised UX list: filtering, navigation and small-screen layouts.",
    findings: [
      "43.7% of respondents visit several times a week; 22.5% daily",
      "Filtering was the top complaint: hard to find, slow, too many options",
      "Recommended mobile-first fixes and a simpler filter model",
    ],
    tools: ["Survey design", "Statistical analysis", "UX research"],
    images: reportImages("ux-survey"),
  },
  {
    id: "ipip",
    title: "Trader personality study",
    category: "Research",
    question: "What does the Big Five personality profile of our traders say about how to design for them?",
    outcome:
      "Ran the 50-item IPIP questionnaire, correlated traits with trading habits, and translated the results into product and UX guidance.",
    findings: [
      "Strong conscientiousness: detailed comparison tools and organised layouts fit",
      "Low extraversion: calm, self-guided pages over high-pressure calls to action",
      "Journaling habits pointed to adoption potential for a trading-journal feature",
    ],
    tools: ["IPIP framework", "Correlation analysis", "Survey design"],
    images: reportImages("ipip"),
  },
  {
    id: "advocator",
    title: "Advocator survey",
    category: "Research",
    question: "Why do PFM's most loyal users recommend it, and which features do they actually use?",
    outcome: "Mapped motivations, feature attention and perceived differentiators for brand advocates.",
    findings: [
      "46.2% named PFM's credibility as what sets it apart",
      "32.5% focus on Compare Firms; 30% on exclusive promos",
      "44% of these traders are found on X",
    ],
    tools: ["Survey design", "Sentiment analysis", "User research"],
    images: reportImages("advocator"),
  },
  {
    id: "quarterly",
    title: "Quarterly sales review and forecast",
    category: "Revenue",
    question: "How much will each partner earn next quarter, and why did last quarter move?",
    outcome:
      "Built a point-system forecast with day-of-week and monthly weightings from historical earnings, and paired it with a per-partner quarterly review.",
    findings: [
      "Day-of-week and seasonal weights validated against actual earnings",
      "CFD and futures performance compared side by side",
      "Buyer geography tracked by region for partner strategy",
    ],
    tools: ["Forecasting", "BigQuery", "SQL", "Looker Studio"],
    images: reportImages("quarterly"),
  },
  {
    id: "commission",
    title: "Monthly commission review",
    category: "Revenue",
    question: "Was this month's commission drop seasonal, or something we should fix?",
    outcome:
      "Separated seasonal decline from partner-specific causes such as re-attribution and tracking issues, and flagged firms for follow-up.",
    findings: [
      "Compared against the prior year's seasonal pattern",
      "Quantified partner re-attribution effects",
      "Site visits and active users kept growing through the dip",
    ],
    tools: ["BigQuery", "SQL", "Trend analysis", "Looker Studio"],
    images: reportImages("commission"),
  },
  {
    id: "firm-stats",
    title: "Weekly firm statistics",
    category: "Reporting",
    question: "Which partner firms gained or lost ground this week?",
    outcome:
      "A weekly report on popularity rank, revenue and firm-page traffic, with week-over-week changes for every partner.",
    findings: [
      "Popularity ranking changes per firm",
      "Revenue attribution per partner",
      "Traffic source split: organic, direct, referral",
    ],
    tools: ["Looker Studio", "BigQuery", "GA4", "SQL"],
    images: reportImages("firm-stats"),
  },
  {
    id: "futures",
    title: "Futures section launch analysis",
    category: "Product",
    question: "How are visitors using the newly launched futures pages?",
    outcome:
      "Set baseline engagement, traffic-source and behaviour metrics for the new section, benchmarked against CFD pages.",
    findings: [
      "Search visitors engaged most; direct visitors least",
      "Clarity recordings showed low rage-click rates and no major UX faults",
      "Key pages identified for optimisation",
    ],
    tools: ["GA4", "Microsoft Clarity", "BigQuery", "Looker Studio"],
    images: reportImages("futures"),
  },
  {
    id: "site-change",
    title: "Website change impact",
    category: "Product",
    question: "Did the site change help or hurt acquisition and checkouts for futures firms?",
    outcome: "A before-and-after comparison over matched 28-day windows, firm by firm.",
    findings: [
      "My Funded Futures: new users down 8.88% after the change",
      "Topstep: visits up 54.03%, checkouts down 36.26%",
      "Apex: visits down 23.85%, checkouts up 13.25%",
    ],
    tools: ["GA4", "BigQuery", "Trend analysis"],
    images: reportImages("site-change"),
  },
];

export type Dashboard = { id: string; title: string; description: string; image: string };

export const dashboards: Dashboard[] = [
  { id: "d1", title: "Revenue health", description: "Revenue, net revenue and payouts, with revenue against payouts over time.", image: dashboardImage(1) },
  { id: "d2", title: "Traffic and conversion", description: "Traffic, conversion and commission revenue across channels.", image: dashboardImage(2) },
  { id: "d3", title: "Survey trends", description: "Survey responses over time and where respondents found us.", image: dashboardImage(3) },
  { id: "d4", title: "Survey responses", description: "Nationality, visitor type and trading experience.", image: dashboardImage(4) },
  { id: "d5", title: "Members", description: "Challenges, daily activity and spend per member.", image: dashboardImage(5) },
  { id: "d6", title: "Payouts and users", description: "Payouts alongside page visits and engagement.", image: dashboardImage(6) },
  { id: "d7", title: "Multi-stat comparer", description: "Commission and visits compared across prop firms.", image: dashboardImage(7) },
  { id: "d8", title: "TrackNow commissions", description: "First orders against recurring, and top-earning firms.", image: dashboardImage(8) },
];

export type Role = { role: string; company: string; period: string; note: string };

export const experience: Role[] = [
  {
    role: "Analytics Manager",
    company: "Prop Firm Match",
    period: "2024 – now",
    note: "Own data and analytics: user behaviour, firm performance, revenue and the ranking systems. Build the internal tools that run it.",
  },
  {
    role: "Marketing Analyst",
    company: "Accenture Philippines",
    period: "2023",
    note: "Market and impact assessments that shaped business-development strategy.",
  },
  {
    role: "Research Consultant",
    company: "Google Operations Center",
    period: "2021 – 2023",
    note: "User research and interviews for Google products, turned into product recommendations.",
  },
  {
    role: "Support Ambassador",
    company: "Airbnb, via 24-7 Intouch",
    period: "2019 – 2021",
    note: "Complex account and booking cases across voice, email and chat.",
  },
  {
    role: "Digital Marketing Analyst",
    company: "TDCX, Google Ads",
    period: "2017 – 2019",
    note: "Campaign analysis for China, Brazil and EMEA markets.",
  },
];

export const toolkit: { label: string; items: string[] }[] = [
  { label: "Data and modelling", items: ["SQL", "BigQuery", "dbt", "Python", "PostgreSQL", "Airbyte"] },
  { label: "Product analytics", items: ["GA4", "Tag Manager", "PostHog", "Microsoft Clarity", "Looker Studio"] },
  { label: "Building", items: ["Claude", "Replit", "React", "TypeScript", "Node and Express", "LangGraph", "MCP"] },
  { label: "Growth", items: ["Google Ads", "Meta Ads", "ActiveCampaign"] },
];

export const contact = {
  email: "ibecomewhatithink@gmail.com",
  linkedin: "https://www.linkedin.com/in/reynelelerio",
  site: "https://reynel.pro",
  location: "Quezon City, Philippines",
};
