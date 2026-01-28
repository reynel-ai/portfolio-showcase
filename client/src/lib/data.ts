import type { Project, Experience, Skill } from "@shared/schema";

import dashboard1 from "@assets/image_1769597107301.png";
import dashboard2 from "@assets/image_1769597144371.png";
import dashboard3 from "@assets/image_1769597205364.png";
import dashboard4 from "@assets/image_1769597222904.png";
import dashboard5 from "@assets/image_1769597260688.png";
import dashboard6 from "@assets/image_1769597284262.png";
import dashboard7 from "@assets/image_1769597366378.png";
import dashboard8 from "@assets/image_1769597408170.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Firm Statistics Weekly Report",
    problem: "Stakeholders needed a consolidated view of weekly performance metrics for prop trading firms to track popularity rankings, revenue trends, and traffic patterns.",
    tools: ["Looker Studio", "BigQuery", "GA4", "SQL", "Data Visualization"],
    impact: "Delivered actionable weekly insights enabling data-driven partner decisions and identification of top-performing firms with XX% traffic share.",
    category: "Business Intelligence",
    previewSections: [
      {
        title: "Report Overview",
        content: [
          "Weekly performance tracking for partner prop trading firms",
          "Popularity ranking changes with week-over-week comparisons",
          "Revenue generated metrics with growth/decline indicators",
          "Traffic visitor analysis across firm pages"
        ]
      },
      {
        title: "Key Metrics Tracked (Censored)",
        content: [
          "Total Platform Visits: [REDACTED] visits",
          "Revenue Generated: $[REDACTED] (+/- X.XX%)",
          "Firm Ranking: Position changes from #X to #X",
          "Share of Firm-Page Visits: XX% of total traffic",
          "Favorite Change: +/- X.XX% week-over-week"
        ]
      },
      {
        title: "Insights Delivered",
        content: [
          "Identification of firms gaining or losing popularity",
          "Revenue attribution per partner firm",
          "Traffic source analysis (organic, direct, referral)",
          "Competitive positioning metrics"
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Website User Perception Survey Analysis",
    problem: "Limited understanding of user experience pain points and website functionality issues affecting visitor satisfaction and engagement.",
    tools: ["Survey Design", "Statistical Analysis", "Data Visualization", "UX Research"],
    impact: "Analyzed 1,100+ survey responses identifying key friction points, leading to UX improvements in navigation, filtering, and mobile responsiveness.",
    category: "Survey & Insights",
    previewSections: [
      {
        title: "Survey Scope",
        content: [
          "Total Respondents: 1,100+ users across two survey forms",
          "Visit Frequency Analysis: Daily (22.5%), Multiple times weekly (43.7%)",
          "Trading Experience Levels: Early/Intermediate (53.8%), Advanced (46.1%)"
        ]
      },
      {
        title: "General Functionality Pain Points Identified",
        content: [
          "Filtering Issues: Users reported difficulty finding filters, slow loading, too many options",
          "Navigation Difficulties: Confusion with UI, multiple pages to find information",
          "User Interface: Improvement requests for cleaner layouts",
          "Tabs and Menu Bar: Arrangement improvements requested",
          "Adaptation Resolution: Screen size compatibility issues on smaller displays"
        ]
      },
      {
        title: "Key Recommendations",
        content: [
          "Mobile optimization priority for smaller screen users",
          "Simplified filtering system with fewer options",
          "Improved navigation with clearer information hierarchy",
          "Multi-language support consideration"
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Monthly Commission Analytics Report",
    problem: "Need for comprehensive monthly performance analysis comparing commission trends, partner contributions, and seasonal patterns.",
    tools: ["Looker Studio", "BigQuery", "SQL", "Trend Analysis", "Forecasting"],
    impact: "Provided executive-level insights on seasonal performance, identifying XX% expected decline with root cause analysis per partner firm.",
    category: "Finance Analytics",
    previewSections: [
      {
        title: "Performance Summary (Censored)",
        content: [
          "Total Commission Change: -XX% month-over-month (seasonal pattern)",
          "Comparison to prior year seasonal pattern analyzed",
          "Partner-specific factors identified vs underlying demand"
        ]
      },
      {
        title: "Commission Ranking Analysis",
        content: [
          "Top contributors to decline identified with root cause",
          "Partner re-attribution effects quantified (~$XXK impact)",
          "Firms under review for tracking or technical issues",
          "Active investigation on variance patterns"
        ]
      },
      {
        title: "Website Performance Metrics",
        content: [
          "Firm Visits: +XX% increase month-over-month",
          "New Users: +XX% growth during period",
          "Active Users: Doubled compared to prior month",
          "Engagement remained elevated post-campaign events"
        ]
      },
      {
        title: "Closing Takeaways",
        content: [
          "Seasonal patterns followed expectations",
          "Platform fundamentals remain strong",
          "Record growth in users and engagement",
          "Analytics team monitoring partner performance closely"
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Quarterly Sales Review & Forecasting",
    problem: "Leadership required predictive models for sales forecasting and detailed analysis of quarterly performance across partner firms.",
    tools: ["Statistical Modeling", "Looker Studio", "BigQuery", "Forecasting", "SQL"],
    impact: "Built point-system forecasting model achieving XX% accuracy, enabling proactive planning for seasonal variations and partner strategy.",
    category: "Data Science",
    previewSections: [
      {
        title: "Forecasting Model Design",
        content: [
          "Point System Model: Daily and monthly weightings based on historical profitability",
          "Day-of-week patterns: Monday-Sunday earning variations analyzed",
          "Monthly seasonality factors applied (Jan-Dec adjustments)",
          "Model validated against actual earnings with XX% accuracy"
        ]
      },
      {
        title: "Quarterly Earnings Analysis (Censored)",
        content: [
          "Q3 Total Earnings: $[REDACTED] across all partners",
          "Top CFD Earners: [FIRM NAMES REDACTED] with +/-XX% changes",
          "Bottom Performers: Identified with root cause analysis",
          "Futures Earnings: XX% of overall revenue from futures products"
        ]
      },
      {
        title: "Regional & Segment Insights",
        content: [
          "Geographic buyer distribution tracked (UK, EU, etc.)",
          "CFD vs Futures performance comparison",
          "Month-over-month trends by partner category",
          "Forecasted earnings for upcoming quarters"
        ]
      }
    ]
  },
  {
    id: "5",
    title: "Futures Trading Analytics Dashboard",
    problem: "New futures section launched needed comprehensive analytics to track page performance, user engagement, and revenue attribution.",
    tools: ["GA4", "Microsoft Clarity", "Looker Studio", "BigQuery", "User Behavior Analysis"],
    impact: "Established baseline metrics showing XX% of visitors engaging with futures pages, with XX% higher engagement rate vs site average.",
    category: "Marketing Analytics",
    previewSections: [
      {
        title: "Futures Page Performance",
        content: [
          "XX% of overall visitors go to futures pages",
          "Average Engagement Rate: XX.XX% (vs XX.XX% site average)",
          "Average Time on Page: Xm XXs (vs Xm XXs site average)",
          "Top XX% of visits concentrated in key partner pages"
        ]
      },
      {
        title: "Traffic Source Analysis",
        content: [
          "Organic Search: XX.X% of futures page visitors",
          "Direct Traffic: XX.XX% of visitors",
          "Users from search engines show highest engagement",
          "Direct visitors show lowest engagement patterns"
        ]
      },
      {
        title: "Key Pages Performance",
        content: [
          "Extra Account & Best Sellers: XX% of key page traffic",
          "Reviews section: X% engagement (lower than CFD)",
          "Key pages represent XX.XX% of total futures visits",
          "Comparison to CFD section benchmarks provided"
        ]
      },
      {
        title: "User Behavior (Clarity Analysis)",
        content: [
          "Dead Clicks: XX.XX% (associated with misclicks on specific elements)",
          "Rage Clicks: X.XX% (minimal friction detected)",
          "Top interaction points identified for optimization",
          "No major UX flaws detected in session recordings"
        ]
      }
    ]
  },
  {
    id: "6",
    title: "Traders Personality Study (IPIP Big Five)",
    problem: "Understanding trader personality traits to inform product design, user experience, and platform feature development.",
    tools: ["Survey Design", "Statistical Analysis", "IPIP Framework", "Correlation Analysis", "Data Visualization"],
    impact: "Profiled XX% of active traders revealing actionable patterns: XX% high conscientiousness indicating strong journaling feature adoption potential.",
    category: "Survey & Insights",
    previewSections: [
      {
        title: "Study Methodology",
        content: [
          "IPIP (International Personality Item Pool) 50-item questionnaire",
          "Big Five personality traits assessed: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
          "Rating scale: 1-5 based on how accurately statements describe participant",
          "Correlated with Successful Trader Survey responses"
        ]
      },
      {
        title: "Key Trait Findings (Summary)",
        content: [
          "Agreeableness: XX% Moderate, XX% Low - implications for social proof reliance",
          "Conscientiousness: XX% High/Moderate - strong detail-orientation among users",
          "Extraversion: XX% Low - preference for self-guided, quiet exploration",
          "Neuroticism: Varied - need for reassurance and transparency in UX"
        ]
      },
      {
        title: "Website Design Implications",
        content: [
          "High Conscientiousness: Detailed comparison tools, organized layouts, save-progress features",
          "Low Extraversion: Clean, distraction-free environment, in-depth resources",
          "Trust signals and transparent policies for security-conscious users",
          "Avoid high-pressure CTAs; prefer calm, supportive tone"
        ]
      },
      {
        title: "Platform Development Insights",
        content: [
          "XX% of users journal trades consistently - high adoption potential for trading platform",
          "Additional XX% journal occasionally - feature awareness opportunity",
          "Personality-based segmentation enables targeted feature rollouts",
          "Correlation analysis informing product roadmap priorities"
        ]
      }
    ]
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
    image: dashboard1
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description: "Traffic & conversion metrics, commission revenue tracking across channels",
    image: dashboard2
  },
  {
    id: "3",
    title: "Survey Trends",
    description: "Tracking survey responses over time with discovery source analysis",
    image: dashboard3
  },
  {
    id: "4",
    title: "Survey Responses Analysis",
    description: "Comprehensive survey analytics with nationality, visitor type, and trading experience",
    image: dashboard4
  },
  {
    id: "5",
    title: "Members Analytics",
    description: "User challenges, daily activity tracking, and investment breakdown",
    image: dashboard5
  },
  {
    id: "6",
    title: "Payouts & User Analytics",
    description: "Payouts tracking with page visits and user engagement metrics",
    image: dashboard6
  },
  {
    id: "7",
    title: "Multi-Stat Comparer",
    description: "Compare metrics across prop firms with commission and visits analysis",
    image: dashboard7
  },
  {
    id: "8",
    title: "TrackNow Dashboard",
    description: "Commission tracking with first order vs recurring breakdown and top earning firms",
    image: dashboard8
  }
];
