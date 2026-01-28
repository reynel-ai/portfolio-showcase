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
    tools: ["Survey Design", "Statistical Analysis", "Python", "Visualization"],
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
    tools: ["GA4", "BigQuery", "Python", "Data Modeling"],
    impact: "Developed multi-touch attribution model that optimized ad spend, improving ROAS by 42%.",
    category: "Marketing Analytics"
  },
  {
    id: "5",
    title: "Executive KPI Dashboard",
    problem: "Leadership needed a single source of truth for key business metrics across departments.",
    tools: ["Looker Studio", "BigQuery", "SQL", "Data Warehousing"],
    impact: "Created unified dashboard serving 15+ stakeholders, reducing reporting time by 75%.",
    category: "Business Intelligence"
  },
  {
    id: "6",
    title: "Churn Prediction Model",
    problem: "High customer churn rate with no early warning system to identify at-risk customers.",
    tools: ["Python", "Machine Learning", "SQL", "Statistical Analysis"],
    impact: "Built predictive model with 85% accuracy, enabling proactive retention strategies that reduced churn by 23%.",
    category: "Data Science"
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Analytics Manager",
    company: "Prop Firm Match",
    period: "2022 - Present",
    description: "Leading end-to-end analytics operations including revenue analysis, sales tracking, and dashboard development. Driving data-informed decision making across the organization.",
    highlights: [
      "Built comprehensive analytics infrastructure from the ground up",
      "Developed revenue and sales tracking dashboards for executive team",
      "Designed and analyzed customer surveys to drive product improvements",
      "Implemented GTM and GA4 for accurate data collection",
      "Created automated reporting systems saving 30+ hours monthly"
    ]
  },
  {
    id: "2",
    role: "Business Intelligence Analyst",
    company: "Digital Marketing Agency",
    period: "2020 - 2022",
    description: "Provided data-driven insights to optimize marketing campaigns and improve client ROI across multiple digital channels.",
    highlights: [
      "Analyzed campaign performance for 20+ clients",
      "Built custom reporting dashboards in Looker Studio",
      "Developed attribution models for marketing spend optimization",
      "Trained team members on analytics tools and best practices"
    ]
  },
  {
    id: "3",
    role: "Data Analyst",
    company: "E-commerce Startup",
    period: "2018 - 2020",
    description: "Supported business growth through customer analytics, sales forecasting, and operational reporting.",
    highlights: [
      "Created weekly sales and inventory reports",
      "Analyzed customer behavior patterns to improve conversion",
      "Automated data collection and ETL processes",
      "Collaborated with marketing team on campaign analysis"
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
  { name: "Predictive Modeling", category: "data" },
  { name: "GA4", category: "tools" },
  { name: "GTM", category: "tools" },
  { name: "Looker Studio", category: "tools" },
  { name: "BigQuery", category: "tools" },
  { name: "SQL", category: "tools" },
  { name: "Python", category: "tools" },
  { name: "Replit", category: "tools" },
  { name: "Google Sheets", category: "tools" },
  { name: "Website Creation", category: "growth" },
  { name: "Content Management", category: "growth" },
  { name: "Ads Management", category: "growth" },
  { name: "SEO", category: "growth" },
  { name: "Marketing Analytics", category: "growth" }
];

export const dashboards = [
  {
    id: "1",
    title: "Revenue Analytics Dashboard",
    description: "Real-time revenue tracking and forecasting"
  },
  {
    id: "2",
    title: "Sales Performance Dashboard",
    description: "Comprehensive sales metrics and KPIs"
  },
  {
    id: "3",
    title: "Marketing Attribution Report",
    description: "Multi-channel marketing ROI analysis"
  },
  {
    id: "4",
    title: "Customer Insights Dashboard",
    description: "Survey results and customer feedback analysis"
  },
  {
    id: "5",
    title: "Executive KPI Dashboard",
    description: "High-level business performance metrics"
  },
  {
    id: "6",
    title: "Churn Analysis Report",
    description: "Customer retention and churn metrics"
  }
];
