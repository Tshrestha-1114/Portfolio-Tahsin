export const personalInfo = {
  name: "Tahsin Nayeem Shrestha",
  tagline: "Software Engineer & AI Builder",
  bio: "I build systems end to end, from architecture and system design through implementation and deployment. AI engineering, backend infrastructure, and data pipelines, with a Studio Arts minor that taught me to see the structure inside the chaos.",
  longBio: `I'm a Software Engineer and AI practitioner who builds complete systems rather than isolated features. I completed my B.S. in Information Systems Engineering at Stony Brook University in May 2026, where I also earned a Studio Arts minor. That pairing wasn't accidental. Studying art taught me something engineering school couldn't: how to hold ambiguity, find pattern in noise, and communicate invisible systems through visible form.

What I do best is own a system from design through production. At SBU IT I architected and shipped an agentic LLM pipeline processing 50,000+ service tickets, and I designed the reasoning chain, the PostgreSQL data layer, and the reporting surface myself. At KPMG I built ML pipelines on 1M+ Census records across S3, DynamoDB, and Elasticsearch, taking them from raw ingestion through model training to policy recommendations that reached real decision makers. I built ScaleForge on my own, designing a publish-subscribe event architecture connecting independent simulation engines, because I wanted to understand distributed system design by making every call myself.

I'm a GHC Scholar, a WISE honoree, and a two-time Dean's List recipient. I'm also fluent in Bengali, Hindi, Urdu, and English, which shapes how I think about cross-cultural communication in both design and product.`,
  email: "tahsin.shrestha@stonybrook.edu",
  github: "https://github.com/Tshrestha-1114",
  linkedin: "https://linkedin.com/in/tahsin-nayeem-shrestha",
  resume: "/resume.pdf",
  location: "Brooklyn, NY · New York City",
  profileImage: "https://raw.githubusercontent.com/Tshrestha-1114/tahsin-portfolio/main/Profile.jpg",
};

export const education = [
  {
    school: "Stony Brook University",
    degree: "B.S. in Information Systems Engineering (Completed May 2026)",
    minor: "Minor in Studio Arts · Specialization: Financial System Management",
    years: "Jan 2022 – May 2026",
    gpa: "",
    honors: ["WISE Program (Women in Science & Engineering)", "Dean's List 2025", "Dean's List 2023"],
    coursework: [
      "Machine Learning",
      "Data Structures",
      "Database Systems",
      "Operating Systems",
      "Network Systems",
      "Financial Systems",
      "Probability & Statistics",
      "Information Security",
      "HCI",
      "Studio Arts",
    ],
    activities: [
      "Grace Hopper Celebration Scholar",
      "WISE Program Member",
      "Break Through Tech AI Fellow — Cornell Tech",
      "Undergraduate Research Assistant (fMRI/HPC)",
    ],
  },
  {
    school: "Cornell University",
    degree: "Certificate in Machine Learning Foundations & Artificial Intelligence",
    minor: "",
    years: "May 2023 – May 2024",
    gpa: "",
    honors: [],
    coursework: [
      "Regression Analysis",
      "Decision Tree Ensembles",
      "Neural Networks",
      "Feature Engineering",
      "Python for ML",
    ],
    activities: ["Break Through Tech AI Fellow", "Kaggle ML Competition Participant"],
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "R", "Java", "Bash", "C", "Ruby"],
  Frontend: ["React.js", "HTML/CSS", "Next.js"],
  Backend: ["Node.js", "Django", "REST APIs", "Cloudflare Workers", "Microservices"],
  "Systems & Architecture": [
    "System Design",
    "End-to-End Ownership",
    "Event-Driven Architecture",
    "Publish-Subscribe Patterns",
    "Distributed Systems",
    "API Design",
    "Serverless & Edge Computing",
    "Schema & ERD Design",
  ],
  "AI / ML": [
    "GPT-4",
    "Claude API",
    "scikit-learn",
    "TensorFlow",
    "LangChain",
    "Neural Networks",
    "Regression",
    "Feature Engineering",
    "Prompt Engineering",
    "Agentic AI",
  ],
  Data: [
    "Pandas",
    "NumPy",
    "Seaborn",
    "PostgreSQL",
    "SQLite",
    "NoSQL",
    "MongoDB",
    "ETL Pipelines",
  ],
  "Cloud / Infra": [
    "AWS S3",
    "AWS Lambda",
    "API Gateway",
    "DynamoDB",
    "Amazon OpenSearch",
    "Azure",
    "CI/CD Pipelines",
    "Git",
  ],
  Tools: ["Jira", "Agile", "Audacity", "Excel", "Jupyter", "VS Code", "Postman"],
  "Operating Systems": ["Linux", "macOS", "Windows"],
};

export const experience = [
  {
    company: "Stony Brook University — IT Department",
    role: "Software Developer (Data & Systems)",
    team: "SBU IT",
    dates: "Dec 2025 – Present",
    location: "Stony Brook, NY",
    type: "fulltime",
    bullets: [
      "Engineered an LLM-powered (GPT-4, Claude) ticket analysis pipeline processing 50,000+ TDX IT service records across multiple academic years, automating classification and summarization workflows that significantly reduced manual categorization effort.",
      "Built an agentic multi-step reasoning workflow using GPT-4 and Claude to dynamically triage unstructured ticket data, detect anomalies, and surface macOS/Windows imaging trends — enabling faster, evidence-based decisions for campus IT operations.",
      "Partnered with a cross-functional data analytics team to design standardized reporting methodologies and PostgreSQL data quality pipelines, translating raw IT service data into actionable insights for data-driven decision-making at scale.",
    ],
    tech: ["Python", "GPT-4", "Claude API", "PostgreSQL", "LangChain", "Data Pipelines"],
  },
  {
    company: "KPMG International Limited",
    role: "Machine Learning Engineer",
    team: "AI Studio (via Break Through Tech)",
    dates: "Aug 2023 – Dec 2023",
    location: "New York City, NY",
    type: "internship",
    bullets: [
      "Spearheaded a Python-based analysis of 1M+ U.S. Census 2020 records stored in AWS S3, building and deploying regression, ensemble, and neural network models that quantified income disparities in New York State, directly informing equity policy recommendations.",
      "Engineered predictive modeling pipelines with NumPy, Pandas, and Seaborn, using DynamoDB for scalable record management to detect gender-based salary gaps of up to 15% in low-wage sectors, improving model interpretability and decision-support accuracy by 20%.",
      "Translated model outputs indexed via Amazon Elasticsearch into actionable equity recommendations that drove a measurable 10% reduction in regional pay inequality, validated through continuous model retraining and iterative benchmarking.",
    ],
    tech: ["Python", "scikit-learn", "AWS S3", "DynamoDB", "Amazon Elasticsearch", "NumPy", "Pandas"],
  },
  {
    company: "Stony Brook University",
    role: "Undergraduate Research Assistant",
    team: "Neuroscience Lab",
    dates: "Sep 2024 – Feb 2025",
    location: "Stony Brook, NY",
    type: "research",
    bullets: [
      "Assisted in the analysis of fMRI data from 800 patients to study neural connectivity and water molecule diffusion using Python and HPC clusters.",
      "Developed hypotheses on prefrontal cortex abnormalities and their impact on cognitive dysfunctions through statistical data analysis.",
      "Explored machine learning models to identify patterns and enhance understanding of psychiatric and neurological disorders.",
    ],
    tech: ["Python", "HPC", "fMRI Analysis", "scikit-learn", "NumPy"],
  },
  {
    company: "Stony Brook University — IT Department",
    role: "Information Technology Assistant",
    team: "Division of Information Technology",
    dates: "Sep 2022 – Dec 2025",
    location: "Stony Brook, NY",
    type: "campus",
    bullets: [
      "Delivered technical support to 500+ students, faculty, and staff via walk-ins, remote sessions, and on-site troubleshooting across 10+ campus buildings, maintaining 99% service satisfaction.",
      "Performed 200+ hardware/software maintenance tasks including OS imaging, secure data wiping, and driver configuration; contributed to campus-wide print system uptime of 100%.",
      "Trained and mentored 50+ new technicians, improving onboarding efficiency by 30% while streamlining documentation and ticket-resolution workflows.",
    ],
    tech: ["Linux", "macOS", "Windows", "IT Service Management", "Hardware"],
  },
  {
    company: "Stony Brook Medicine",
    role: "Student Assistant",
    team: "Dean's Office — Finance Department",
    dates: "May 2022 – Aug 2022",
    location: "Stony Brook, NY",
    type: "campus",
    bullets: [
      "Handled payroll files and pay transactions for cross-disciplinary faculty personnel at Stony Brook Hospital.",
      "Designed a workflow using SOLAR and MS Excel to analyze salaried and termed files, supporting accurate and timely payroll completion for medical personnel.",
    ],
    tech: ["Excel", "SOLAR", "Workflow Design"],
  },
];

export const projects = [
  {
    slug: "llm-ticket-pipeline",
    title: "LLM Ticket Analysis Pipeline",
    tagline: "GPT-4 & Claude agentic system for 50k+ IT service records",
    category: ["AI", "Backend", "Data"],
    problem:
      "SBU IT was manually categorizing thousands of service tickets each year, a slow and error-prone process that delayed reporting and trend detection.",
    solution:
      "Built an agentic multi-step reasoning workflow using GPT-4 and Claude that automatically triages, classifies, and summarizes unstructured ticket data — surfacing macOS/Windows imaging trends and anomalies without human intervention.",
    tech: ["Python", "GPT-4", "Claude API", "LangChain", "PostgreSQL"],
    impact: [
      "Processed 50,000+ TDX IT service records across multiple academic years",
      "Significantly reduced manual categorization effort and improved reporting turnaround",
      "Enabled faster, evidence-based IT operations decisions",
    ],
    architecture:
      "Raw ticket text ingested from TDX → preprocessing → GPT-4/Claude agentic reasoning chain (classify, summarize, detect anomalies) → structured output to PostgreSQL → reporting layer.",
    github: "https://github.com/Tshrestha-1114/REPLACE-REPO-NAME",
    demo: null,
    featured: true,
  },
  {
    slug: "scaleforge",
    title: "ScaleForge",
    tagline: "Interactive distributed systems platform where you play the on-call engineer",
    category: ["Systems", "Full Stack"],
    problem:
      "System design is usually taught through videos and static diagrams, so learners never feel the consequences of a bad architectural decision until they hit production.",
    solution:
      "Built a six-stage learning loop: read the concept, watch a live simulation, diagnose a production incident, choose an intervention under pressure, defend the reasoning in a Socratic AI interview, then unlock the next module. Wrong choices visibly degrade the simulated system in real time as error rates and latency spike and dashboards turn red.",
    tech: ["JavaScript", "Three.js", "Cloudflare Pages", "Event-Driven Architecture", "Distributed Systems"],
    impact: [
      "Architected and built solo, including every design, simulation, and interaction decision",
      "Publish-subscribe event bus connecting independent simulation engines with no direct coupling",
      "Three.js 3D node graph rendering animated packet flow across cache, CDN, load balancer, and database nodes",
      "Modules covering caching, CDNs, and load balancing with deep dives on Netflix, Uber, and Discord",
    ],
    architecture:
      "Native ES modules with no build toolchain → publish-subscribe event bus → independent simulation engines (incident simulator, metrics, 3D visualization) subscribing to a shared event stream → rule-based AI mentor with keyword scoring → deployed as a static site on Cloudflare Pages.",
    github: "https://github.com/Tshrestha-1114/Scaleforge",
    demo: "https://scaleforge-83v.pages.dev/",
    featured: true,
  },
  {
    slug: "census-ml-equity",
    title: "Census ML Equity Analysis",
    tagline: "ML models on 1M+ Census records to surface income & gender pay disparities",
    category: ["AI", "Data"],
    problem:
      "KPMG needed data-driven evidence to quantify income and gender pay gaps in New York State and provide actionable equity recommendations to policymakers.",
    solution:
      "Built regression, ensemble, and neural network models on 1M+ U.S. Census 2020 records stored in AWS S3, with DynamoDB for scalable record management and Amazon Elasticsearch for indexed output delivery.",
    tech: ["Python", "scikit-learn", "NumPy", "Pandas", "AWS S3", "DynamoDB", "Amazon Elasticsearch"],
    impact: [
      "Detected gender-based salary gaps of up to 15% in low-wage sectors",
      "Improved model interpretability and decision-support accuracy by 20%",
      "Drove a measurable 10% reduction in regional pay inequality via recommendations",
    ],
    architecture:
      "Census data in S3 → ETL with Pandas → model training (regression, RF, NN) → predictions indexed to Elasticsearch → recommendations report to KPMG policy team.",
    github: "https://github.com/Tshrestha-1114/REPLACE-REPO-NAME",
    demo: null,
    featured: true,
  },
  {
    slug: "pathfix-app",
    title: "Pathfix App",
    tagline: "Course-to-career skill matching using scraped job market data",
    category: ["Full Stack", "Data"],
    problem:
      "Students struggle to understand which courses map to which job skills — leaving a gap between what they study and what employers actually want.",
    solution:
      "Mined and analyzed data from 200+ courses and 1,000+ job skill sets using Google Jobs and Kaggle datasets. Built a Python/MongoDB-powered web app that surfaces skill gaps and course recommendations.",
    tech: ["Python", "MongoDB", "Web Scraping", "Data Analysis"],
    impact: [
      "Achieved 95% accuracy in course-to-skill matching",
      "Improved data integration efficiency by 30% through feature augmentation",
    ],
    architecture:
      "Data pipeline scrapes job listings and course catalogs → feature engineering → skill gap model → MongoDB storage → web interface for student queries.",
    github: "https://github.com/Tshrestha-1114/REPLACE-REPO-NAME",
    demo: null,
    featured: true,
  },
  {
    slug: "edge-analytics-platform",
    title: "Edge Ticket Aggregator & Analyzer",
    tagline: "Serverless support-ticket analytics running entirely on Cloudflare Workers",
    category: ["Backend", "Systems"],
    problem:
      "Traditional server-based analytics introduce latency and scaling costs, and standing up a backend just to aggregate ticket data from a handful of REST endpoints is more infrastructure than the problem deserves.",
    solution:
      "Built a support-ticket aggregation and analysis tool that pulls ticket data through REST APIs and processes it entirely at the edge using Cloudflare Workers, with no traditional backend. Surfaces patterns in ticket volume and response times.",
    tech: ["Cloudflare Workers", "JavaScript", "REST APIs", "Serverless"],
    impact: [
      "Runs with no server provisioning or backend infrastructure to maintain",
      "Demonstrated serverless-first architecture for distributed data aggregation",
      "Built to understand low-latency edge processing by owning the architecture end to end",
    ],
    architecture:
      "External ticket sources → REST API integrations → Cloudflare Workers processing at the edge → aggregation and pattern analysis → low-latency response to clients.",
    github: "https://github.com/Tshrestha-1114/REPLACE-REPO-NAME",
    demo: null,
    featured: false,
  },
  {
    slug: "bank-fraud-detection",
    title: "Bank Fraud Detection System",
    tagline: "Real-time anomaly detection with MySQL, Python, and ML",
    category: ["AI", "Backend", "Data"],
    problem:
      "Traditional rule-based fraud detection misses novel patterns and produces high false-positive rates.",
    solution:
      "Engineered a fraud detection system with MySQL and Python, deploying complex SQL for real-time anomaly detection alongside ML models for predictive analysis. Designed the database schema with an ERD and automated fraud alerts.",
    tech: ["Python", "MySQL", "ML", "ERD Design", "Anomaly Detection"],
    impact: [
      "Automated ML-based detection significantly bolstered fraud prevention",
      "Automated fraud alerts reduced manual review workload",
      "Strengthened bank security protocols through validated model retraining",
    ],
    architecture:
      "Transaction data → MySQL with complex SQL queries for rule-based flagging → ML model layer for pattern detection → alert system → monitoring dashboard.",
    github: "https://github.com/Tshrestha-1114/REPLACE-REPO-NAME",
    demo: null,
    featured: true,
  },
  {
    slug: "network-traffic-toolkit",
    title: "Network Traffic & Protocol Toolkit",
    tagline: "PCAP analysis tool for TCP, DNS, and routing protocol diagnostics",
    category: ["Systems", "Backend"],
    problem:
      "Diagnosing protocol inefficiencies in real-world network traces requires parsing low-level PCAP data.",
    solution:
      "Built a Python toolkit to analyze PCAP network traffic, extracting flow-level statistics across TCP, DNS, and routing protocols, computing latency, throughput, packet loss, and congestion patterns.",
    tech: ["Python", "PCAP", "TCP/IP", "DNS", "Network Analysis"],
    impact: [
      "Diagnosed protocol inefficiencies under varying network conditions",
      "Applied to validate protocol performance assumptions in academic research",
    ],
    architecture:
      "PCAP file ingestion → packet parsing → flow extraction → per-protocol stat computation → report output.",
    github: "https://github.com/Tshrestha-1114/REPLACE-REPO-NAME",
    demo: null,
    featured: false,
  },
];

export const extracurriculars = [
  {
    org: "Grace Hopper Celebration",
    role: "GHC Scholar",
    dates: "2023, 2024",
    description:
      "Selected as a GHC Scholar to attend the world's largest gathering of women technologists. Engaged with thousands of engineers across academia and industry, and represented Stony Brook University.",
    highlights: [
      "Awarded GHC Scholarship — competitive, merit-based selection",
      "Networked with engineers at Google, Amazon, Microsoft, and early-stage AI startups",
      "Explored tracks in AI/ML, backend systems, and product engineering",
    ],
  },
  {
    org: "Women in Science & Engineering (WISE)",
    role: "Program Member & Honors Recipient",
    dates: "2022 – 2026",
    description:
      "Member of SBU's WISE Program, supporting women pursuing degrees in STEM through mentorship, community, and academic programming.",
    highlights: [
      "WISE Honors recognition for academic achievement",
      "Dean's List 2023 and Dean's List 2025",
      "Participated in WISE community events and peer mentorship",
    ],
  },
  {
    org: "Break Through Tech — Cornell Tech",
    role: "AI/ML Fellow",
    dates: "May 2023 – May 2024",
    description:
      "Selected as a Break Through Tech AI Fellow at Cornell Tech — a competitive program empowering high-potential undergraduate technologists with real-world AI and machine learning expertise.",
    highlights: [
      "Completed ML Foundations curriculum: regression, ensembles, neural networks",
      "Applied ML skills in an industry project with KPMG (AI Studio)",
      "Participated in a Kaggle ML competition using predictive modeling on real-world data",
    ],
  },
];

// All raw GitHub image URLs for your artwork
const GH = "https://raw.githubusercontent.com/Tshrestha-1114/tahsin-portfolio/main";

export const artworks = [
  {
    id: "1",
    title: "Veiled in Bloom",
    medium: "Mixed Media / Textile",
    year: "2024",
    category: "Mixed Media",
    description:
      "Shown at the 2024 Senior Show. Explores themes of identity, cultural layering, and the tension between visibility and concealment — using textile, fabric, and floral elements to evoke both vulnerability and ornamentation.",
    image: `${GH}/ShresthaTahsinNayeem.VeiledinBloom_SeniorShow2024.jpeg`,
  },
  {
    id: "2",
    title: "Veiled Bride",
    medium: "Photography / Mixed Media",
    year: "2024",
    category: "Photography",
    description:
      "A companion piece to Veiled in Bloom — examining bridal ritual, cultural expectation, and the constructed nature of feminine identity through portraiture and textile.",
    image: `${GH}/veiled_bride.jpg`,
  },
  {
    id: "3",
    title: "Whispers of the Abyss",
    medium: "Mixed Media / Installation",
    year: "2025",
    category: "Mixed Media",
    description:
      "Featured in the 2025 Senior Show. A meditation on depth, silence, and what lies beneath the surface — combining materials and spatial arrangement to evoke the unseen weight of emotional undercurrents.",
    image: `${GH}/ShresthaTahsinNayeem_WhispersOfTheAbyss_SeniorShow2025.jpeg`,
  },
  {
    id: "4",
    title: "Whispers of the Abyss (Detail)",
    medium: "Mixed Media / Installation",
    year: "2025",
    category: "Mixed Media",
    description:
      "Detail view of the 2025 Senior Show installation — revealing the layered textures, material choices, and compositional decisions that anchor the larger work.",
    image: `${GH}/ShresthaTahsinNayeem_WhispersOfTheAbyss_SeniorShow2025_03.jpeg`,
  },
  {
    id: "5",
    title: "Portrait Study I",
    medium: "Photography",
    year: "2023",
    category: "Photography",
    description:
      "From the Studio Arts photography coursework at Stony Brook University. Examining light, gaze, and the relationship between subject and camera.",
    image: `${GH}/DSC_0156.JPG`,
  },
  {
    id: "6",
    title: "Portrait Study II",
    medium: "Photography",
    year: "2023",
    category: "Photography",
    description:
      "A continuation of the portrait series — exploring directional light and subject composure as a language for interior states.",
    image: `${GH}/DSC_0191.JPG`,
  },
  {
    id: "7",
    title: "Sketch Study I",
    medium: "Drawing / Sketch",
    year: "2023",
    category: "Drawing",
    description:
      "Sketchbook work from the Studio Arts minor — observational drawing practice exploring form, proportion, and line quality.",
    image: `${GH}/IMG_4728.jpg`,
  },
  {
    id: "8",
    title: "Sketch Study II",
    medium: "Drawing / Sketch",
    year: "2023",
    category: "Drawing",
    description:
      "Studio sketchbook study focused on gesture and movement — capturing the energy of a pose in quick, deliberate marks.",
    image: `${GH}/IMG_6523.jpg`,
  },
  {
    id: "9",
    title: "Sketch Study III",
    medium: "Drawing / Sketch",
    year: "2023",
    category: "Drawing",
    description:
      "Continued sketchbook practice — building fluency in observational drawing through repeated study of form and negative space.",
    image: `${GH}/IMG_6527.jpg`,
  },
  {
    id: "10",
    title: "Sketch Study IV",
    medium: "Drawing / Sketch",
    year: "2023",
    category: "Drawing",
    description:
      "Sketchbook study in charcoal and pencil — working through figure drawing and structural observation.",
    image: `${GH}/IMG_6533.jpg`,
  },
  {
    id: "11",
    title: "Studio Work",
    medium: "Mixed Media",
    year: "2024",
    category: "Mixed Media",
    description:
      "Studio arts coursework exploring materiality and composition.",
    image: `${GH}/image_4.JPG`,
  },
  {
    id: "12",
    title: "Different, Not Less: Surfaces & Shadows",
    medium: "Photography",
    year: "2025",
    category: "Photography",
    description:
      "A photo series exploring high-functioning depression and anxiety — the invisible experience beneath a composed exterior. Shot with long exposures, motion blur, and sharp directional lighting to reveal the duality between what is shown and what is felt.",
    image: "https://you.stonybrook.edu/tahsin/files/2025/10/DSC_5697-300x200.jpg",
  },
  {
    id: "13",
    title: "Emergency Transmission",
    medium: "Audio / Sound Design",
    year: "2025",
    category: "Multimedia",
    description:
      "A 30-second multimedia audio piece designed as an eerie emergency radio broadcast. Created in Audacity with reverb, wah-wah effects, and voice pitch modification — simulating the last coherent signal before total communication collapse.",
    image: "",
  },
];
