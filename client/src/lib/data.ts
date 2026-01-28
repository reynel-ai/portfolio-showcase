import type { Project, Experience, Skill } from "@shared/schema";

export const projects: Project[] = [
  {
    id: "1",
    title: "Revenue Analytics Dashboard",
    problem: "Prop Firm Match lacked real-time visibility into revenue streams and sales performance, making it difficult to identify growth opportunities.",
    tools: ["Looker Studio", "BigQuery", "GA4", "SQL"],
    impact: "Enabled data-driven decisions resulting in 35% improvement in revenue forecasting accuracy and identification of top-performing sales channels.",
    category: "Finance Analytics"
  },
  {
    id: "2",
    title: "Customer Insights Survey System",
    problem: "Limited understanding of customer preferences and satisfaction levels across different product offerings.",
    tools: ["Survey Design", "Statistical Analysis", "PostHog", "Visualization"],
    impact: "Captured feedback from 2,000+ customers, leading to product improvements that increased NPS by 18 points.",
    category: "Survey & Insights"
  },
  {
    id: "3",
    title: "Sales Performance Tracker",
    problem: "Manual tracking of sales metrics was time-consuming and prone to errors, delaying critical business decisions.",
    tools: ["Looker Studio", "Google Sheets", "GTM", "SQL"],
    impact: "Automated 90% of reporting workflows, saving 20+ hours weekly and providing real-time sales visibility.",
    category: "Business Intelligence"
  },
  {
    id: "4",
    title: "Marketing Attribution Model",
    problem: "Unclear ROI across marketing channels made budget allocation challenging and inefficient.",
    tools: ["GA4", "BigQuery", "Meta Ads Manager", "Data Modeling"],
    impact: "Developed multi-touch attribution model that optimized ad spend, improving ROAS by 42%.",
    category: "Marketing Analytics"
  },
  {
    id: "5",
    title: "Executive KPI Dashboard",
    problem: "Leadership needed a single source of truth for key business metrics across departments.",
    tools: ["Looker Studio", "BigQuery", "SQL", "Microsoft Clarity"],
    impact: "Created unified dashboard serving 15+ stakeholders, reducing reporting time by 75%.",
    category: "Business Intelligence"
  },
  {
    id: "6",
    title: "User Behavior Analysis System",
    problem: "Needed deeper understanding of user behaviors to drive conversion optimization.",
    tools: ["PostHog", "Microsoft Clarity", "GA4", "ActiveCampaign"],
    impact: "Built comprehensive tracking and analysis system, enabling proactive strategies that improved conversion by 28%.",
    category: "Data Science"
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Analytics Manager",
    company: "Prop Firm Match Global FZCO",
    period: "March 2024 - Present",
    description: "Leading the full analytics lifecycle from data collection and management to analysis and reporting. Driving data-informed decision making across finance, marketing, product, and operations.",
    highlights: [
      "Lead the full analytics lifecycle from data collection and management to analysis and reporting",
      "Develop data-driven dashboards and insights to guide strategic decisions across marketing, product, and operations",
      "Design and optimize tracking systems using Google Tag Manager and GA4 to ensure accurate data capture",
      "Conduct performance evaluation of digital campaigns and user behaviors to drive revenue growth and conversion optimization",
      "Partner with cross-functional teams to translate analytical findings into actionable business strategies",
      "Handle multiple roles across finance, marketing, content, and paid ads"
    ]
  },
  {
    id: "2",
    role: "Marketing Analyst",
    company: "Accenture Philippines",
    period: "May 2023 - October 2023",
    description: "Delivered comprehensive market and impact assessments to evaluate business opportunities and support strategic decision-making.",
    highlights: [
      "Delivered comprehensive market and impact assessments to evaluate business opportunities",
      "Synthesized large data sets into actionable insights for marketing and business development teams",
      "Supported strategy design by identifying key market trends and customer behaviors"
    ]
  },
  {
    id: "3",
    role: "Research Consultant",
    company: "Google Operations Center",
    period: "January 2021 - May 2023",
    description: "Conducted user research and interviews for Google Products, analyzing qualitative and quantitative data to inform product improvements.",
    highlights: [
      "Conducted user research and interviews for Google Products, analyzing qualitative and quantitative data",
      "Delivered insights that informed product design and user experience improvements",
      "Led data interpretation and reporting to translate research findings into strategic recommendations"
    ]
  },
  {
    id: "4",
    role: "Support Ambassador",
    company: "Airbnb (24-7 Intouch Inc.)",
    period: "June 2019 - December 2021",
    description: "Managed user support cases across multiple channels while maintaining high satisfaction scores.",
    highlights: [
      "Managed user support cases across multiple channels (voice, email, and chat)",
      "Ensured resolution of complex account and booking issues while maintaining high satisfaction scores"
    ]
  },
  {
    id: "5",
    role: "Digital Marketing Analyst (Google Ads)",
    company: "TDCX",
    period: "March 2017 - March 2019",
    description: "Managed and analyzed digital campaigns across China, Brazil, and EMEA markets.",
    highlights: [
      "Managed and analyzed digital campaigns across China, Brazil, and EMEA markets",
      "Evaluated campaign effectiveness and provided insights into regional market performance",
      "Supported lead generation strategies by identifying trends in ad signals and user behaviors"
    ]
  }
];

export const skills: Skill[] = [
  { name: "Data Analysis", category: "data" },
  { name: "Business Intelligence", category: "data" },
  { name: "Revenue & Sales Analytics", category: "data" },
  { name: "Survey Design & Insights", category: "data" },
  { name: "Statistical Analysis", category: "data" },
  { name: "Data Visualization", category: "data" },
  { name: "User Research", category: "data" },
  { name: "Google Analytics 4", category: "tools" },
  { name: "Google Tag Manager", category: "tools" },
  { name: "Google Looker Studio", category: "tools" },
  { name: "BigQuery", category: "tools" },
  { name: "HeidiSQL", category: "tools" },
  { name: "PostHog", category: "tools" },
  { name: "Microsoft Clarity", category: "tools" },
  { name: "Google Sheets", category: "tools" },
  { name: "ActiveCampaign", category: "tools" },
  { name: "Replit", category: "tools" },
  { name: "Meta Ads Manager", category: "growth" },
  { name: "Google Ads", category: "growth" },
  { name: "Digital Marketing", category: "growth" },
  { name: "Campaign Analysis", category: "growth" },
  { name: "Marketing Analytics", category: "growth" }
];

export const dashboards = [
  {
    id: "1",
    title: "Revenue Health Dashboard",
    description: "Total revenue, net revenue, payouts tracking with revenue vs payouts trends",
    image: "/attached_assets/image_1769597107301.png"
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description: "Traffic & conversion metrics, commission revenue tracking across channels",
    image: "/attached_assets/image_1769597144371.png"
  },
  {
    id: "3",
    title: "Survey Trends",
    description: "Tracking survey responses over time with discovery source analysis",
    image: "/attached_assets/image_1769597205364.png"
  },
  {
    id: "4",
    title: "Survey Responses Analysis",
    description: "Comprehensive survey analytics with nationality, visitor type, and trading experience",
    image: "/attached_assets/image_1769597222904.png"
  },
  {
    id: "5",
    title: "Members Analytics",
    description: "User challenges, daily activity tracking, and investment breakdown",
    image: "/attached_assets/image_1769597260688.png"
  },
  {
    id: "6",
    title: "Payouts & User Analytics",
    description: "Payouts tracking with page visits and user engagement metrics",
    image: "/attached_assets/image_1769597284262.png"
  },
  {
    id: "7",
    title: "Multi-Stat Comparer",
    description: "Compare metrics across prop firms with commission and visits analysis",
    image: "/attached_assets/image_1769597366378.png"
  },
  {
    id: "8",
    title: "TrackNow Dashboard",
    description: "Commission tracking with first order vs recurring breakdown and top earning firms",
    image: "/attached_assets/image_1769597408170.png"
  }
];
