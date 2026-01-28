import type { Project, Experience, Skill } from "@shared/schema";

import dashboard1 from "@assets/image_1769597107301.png";
import dashboard2 from "@assets/image_1769597144371.png";
import dashboard3 from "@assets/image_1769597205364.png";
import dashboard4 from "@assets/image_1769597222904.png";
import dashboard5 from "@assets/image_1769597260688.png";
import dashboard6 from "@assets/image_1769597284262.png";
import dashboard7 from "@assets/image_1769597366378.png";
import dashboard8 from "@assets/image_1769597408170.png";

import septReview1 from "@assets/image_1769610412480.png";
import septReview2 from "@assets/image_1769610432010.png";
import septReview3 from "@assets/image_1769610449354.png";
import septReview4 from "@assets/image_1769610476661.png";
import septReview5 from "@assets/image_1769610497242.png";
import septReview6 from "@assets/image_1769610508219.png";
import septReview7 from "@assets/image_1769610525991.png";

import futures1 from "@assets/image_1769610563345.png";
import futures2 from "@assets/image_1769610581488.png";
import futures3 from "@assets/image_1769610597671.png";
import futures4 from "@assets/image_1769610612321.png";

import ipip1 from "@assets/image_1769610680728.png";
import ipip2 from "@assets/image_1769610714500.png";
import ipip3 from "@assets/image_1769610727643.png";
import ipip4 from "@assets/image_1769610741254.png";
import ipip5 from "@assets/image_1769610764692.png";

import firmStats1 from "@assets/image_1769610796394.png";
import firmStats2 from "@assets/image_1769610810959.png";
import firmStats3 from "@assets/image_1769610821175.png";
import firmStats4 from "@assets/image_1769610835464.png";
import firmStats5 from "@assets/image_1769610848898.png";

import survey1 from "@assets/image_1769610873158.png";
import survey2 from "@assets/image_1769610884505.png";
import survey3 from "@assets/image_1769610899047.png";
import survey4 from "@assets/image_1769610910817.png";
import survey5 from "@assets/image_1769610922614.png";
import survey6 from "@assets/image_1769610951627.png";
import survey7 from "@assets/image_1769610971687.png";

import commission1 from "@assets/image_1769611002627.png";
import commission2 from "@assets/image_1769611011882.png";
import commission3 from "@assets/image_1769611024823.png";
import commission4 from "@assets/image_1769611042105.png";

import fintokei1 from "@assets/image_1769611078571.png";
import fintokei2 from "@assets/image_1769611098113.png";

import advocator1 from "@assets/image_1769611175539.png";
import advocator2 from "@assets/image_1769611187776.png";
import advocator3 from "@assets/image_1769611198269.png";
import advocator4 from "@assets/image_1769611208858.png";
import advocator5 from "@assets/image_1769611222492.png";
import advocator6 from "@assets/image_1769611237519.png";

import webChange1 from "@assets/image_1769611314155.png";
import webChange2 from "@assets/image_1769611322447.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Firm Statistics Weekly Report",
    problem: "Stakeholders needed a consolidated view of weekly performance metrics for prop trading firms to track popularity rankings, revenue trends, and traffic patterns.",
    tools: ["Looker Studio", "BigQuery", "GA4", "SQL", "Data Visualization"],
    impact: "Delivered actionable weekly insights enabling data-driven partner decisions and identification of top-performing firms with XX% traffic share.",
    category: "Business Intelligence",
    previewImages: [firmStats1, firmStats2, firmStats3, firmStats4, firmStats5],
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
    previewImages: [survey1, survey2, survey3, survey4, survey5, survey6, survey7],
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
    previewImages: [commission1, commission2, commission3, commission4],
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
    previewImages: [septReview1, septReview2, septReview3, septReview4, septReview5, septReview6, septReview7, fintokei1, fintokei2],
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
    previewImages: [futures1, futures2, futures3, futures4],
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
    previewImages: [ipip1, ipip2, ipip3, ipip4, ipip5],
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
  },
  {
    id: "7",
    title: "Advocator Responses Survey Report",
    problem: "Understanding brand advocates' motivations, preferences, and platform perceptions to optimize marketing and community engagement strategies.",
    tools: ["Survey Design", "Data Visualization", "User Research", "Sentiment Analysis"],
    impact: "Surveyed XX+ advocators revealing key insights: 46% cite PFM credibility as top differentiator, 32.5% focus on firm comparison features.",
    category: "Survey & Insights",
    previewImages: [advocator1, advocator2, advocator3, advocator4, advocator5, advocator6],
    previewSections: [
      {
        title: "Trading Motivation Analysis",
        content: [
          "28.2% motivated by quick way of earning money",
          "28.2% value freedom of time and liberty",
          "15.4% influenced by peers",
          "12.8% influenced by social media",
          "7.7% personally studied financial markets"
        ]
      },
      {
        title: "Platform Value Perception",
        content: [
          "Benefits of comparing firms: Finding best firm, discovering new firms, multi-comparer tool",
          "Loyalty points: High value perception among users",
          "Offers and discounts: Best prices, deals, and promotions appreciated",
          "Reviews: Verified traders and firm reviews drive trust"
        ]
      },
      {
        title: "Feature Attention Analysis",
        content: [
          "32.5% focus on Compare Firms feature",
          "30% pay attention to Exclusive Promos",
          "22.5% check Reviews section",
          "10% focus on Loyalty Points",
          "5% value Customer Support"
        ]
      },
      {
        title: "Competitive Differentiation",
        content: [
          "46.2% believe Credibility of PFM sets platform apart",
          "17.9% value Comparison of Firms feature",
          "15.4% cite Loyalty Points as differentiator",
          "45% see People's Trust as biggest difference vs competitors",
          "44% of traders found on X/Twitter platform"
        ]
      }
    ]
  },
  {
    id: "8",
    title: "Website Change Effects Analysis",
    problem: "Measuring the impact of website changes on user acquisition, engagement, and conversion metrics across partner firms.",
    tools: ["A/B Testing", "GA4", "Data Visualization", "Trend Analysis", "BigQuery"],
    impact: "Quantified website change impact: tracked XX% change in new users and checkout behavior across futures firms with before/after comparison.",
    category: "Business Intelligence",
    previewImages: [webChange1, webChange2],
    previewSections: [
      {
        title: "My Funded Futures Analysis",
        content: [
          "New Users Before: 766 users over 28-day period",
          "New Users After: 698 users (-8.88% change)",
          "Daily data matched on weekends for accurate comparison",
          "Trend analysis showing before/after website change patterns"
        ]
      },
      {
        title: "Cross-Firm Impact Comparison",
        content: [
          "Alpha Futures: Visits +7.34%, New Users +41.44%, Checkouts -63.71%",
          "Apex: Visits -23.85%, New Users -6.83%, Checkouts +13.25%",
          "Topstep: Visits +54.03%, New Users +41.44%, Checkouts -36.26%",
          "Comparative analysis enabling strategic recommendations"
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
  { name: "Airbyte", category: "tools" },
  { name: "Airflow", category: "tools" },
  { name: "dbt Labs", category: "tools" },
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
