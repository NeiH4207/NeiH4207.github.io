export const portfolio = {
  name: "Vu Quoc Hien",
  shortName: "VH",
  role: "Senior AI Engineer",
  subtitle: "MLOps | Production AI Systems | LLM & RAG | Responsible AI",
  summary:
    "Senior AI Engineer with 5+ years of experience designing, deploying, and operating production-grade AI/ML systems end-to-end. Deep expertise in MLOps, model lifecycle management, RAG, and responsible AI, including automated retraining pipelines, drift detection, observability, and safety controls. Proven track record delivering measurable business impact in fintech and enterprise environments.",
  currentFocus: {
    title: "Data Scientist @ Trusting Social",
    description:
      "Architecting multi-agent AI systems with MCP integration and analyzing large-scale financial and behavioral data for production credit scoring."
  },
  stats: [
    { label: "Experience", value: "5+ years" },
    { label: "Domains", value: "Fintech & Enterprise" },
    { label: "Focus", value: "MLOps, LLM, RAG" },
    { label: "Publications", value: "Q1 / Q2" }
  ],
  links: {
    email: "mailto:hienvq23@gmail.com",
    emailLabel: "hienvq23@gmail.com",
    github: "https://github.com/NeiH4207",
    githubLabel: "NeiH4207",
    linkedin: "https://www.linkedin.com/in/hienvq23",
    linkedinLabel: "hienvq23",
    scholar: "https://scholar.google.com/citations?user=tp3X_iQAAAAJ",
    scholarLabel: "Google Scholar",
    phone: "tel:+84333545027",
    phoneLabel: "+84-333-545-027"
  },
  nav: [
    { id: "summary", label: "Summary" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "publications", label: "Publications" },
    { id: "honors", label: "Honors" },
    { id: "contact", label: "Contact" }
  ],
  skillGroups: [
    {
      title: "Core",
      items: [
        { label: "Languages", value: "Python, C/C++, R" },
        {
          label: "Data Science",
          value: "EDA, statistics, feature engineering, experimentation, hypothesis testing"
        },
        {
          label: "ML/DL Frameworks",
          value: "PyTorch, TensorFlow, HuggingFace Transformers, scikit-learn, OpenCV, pandas, SciPy"
        },
        {
          label: "ML/DL/RL Training & Evaluation",
          value: "Training, validation, tuning, ablation, error analysis, RL experimentation"
        },
        {
          label: "LLM & RAG",
          value: "LangChain, LangGraph, LlamaIndex, MCP, LoRA/QLoRA/PEFT, prompt engineering, guardrails"
        },
        {
          label: "LLM Fine-tuning & Evaluation",
          value: "SFT, LoRA/QLoRA/PEFT, benchmarking, RAGAS, hallucination and safety evaluation"
        }
      ]
    },
    {
      title: "Systems & MLOps",
      items: [
        {
          label: "MLOps & CI/CD",
          value: "MLFlow, Docker, Git, CI/CD pipelines, model registry and versioning, automated retraining, A/B testing"
        },
        {
          label: "Model Lifecycle",
          value: "Drift detection, performance monitoring, telemetry, model rollback, hyperparameter tuning"
        },
        {
          label: "Feature & Data Pipelines",
          value: "Feature engineering, Pinecone, Chroma, batch ingestion, and data curation"
        },
        {
          label: "Responsible AI",
          value: "Output filtering, hallucination mitigation, content safety controls, and response validation"
        },
        {
          label: "Cloud & Infra",
          value: "GCP, AWS, Azure AI Search, BigQuery, Docker"
        },
        {
          label: "Databases",
          value: "Pinecone, Chroma, Azure Search, PostgreSQL, SQL/NoSQL, Neo4j"
        }
      ]
    }
  ],
  experiences: [
    {
      role: "Data Scientist",
      company: "Trusting Social",
      companyUrl: "https://trustingsocial.com/",
      period: "May 2025 - Present",
      location: "Ho Chi Minh City, Vietnam",
      summary:
        "Leading production AI initiatives including multi-agent MCP systems and behavior-driven credit scoring, combining large-scale data analysis, statistical evaluation, observability, and measurable fintech impact."
    },
    {
      role: "AI/LLM Engineer",
      company: "FPT Software AI Center",
      companyUrl: "https://www.fpt-aic.com/en",
      period: "Sep 2024 - May 2025",
      location: "Hanoi, Vietnam",
      summary:
        "Built enterprise LLM systems and advanced RAG pipelines for large document search and chatbot use cases, improving retrieval quality, latency, and deployment safety for production environments."
    },
    {
      role: "Bioinformatic AI Scientist",
      company: "Genestory JSC",
      companyUrl: "https://genestory.ai/home",
      period: "Apr 2022 - Sep 2024",
      location: "Hanoi, Vietnam",
      summary:
        "Developed applied AI solutions in bioinformatics, spanning drug reaction prediction, genomic ML pipelines, and knowledge graph systems, while also mentoring junior team members."
    },
    {
      role: "AI Engineer",
      company: "Vingroup Big Data Institute",
      companyUrl: "https://vinbigdata.com/en",
      period: "Jul 2021 - Mar 2022",
      location: "Hanoi, Vietnam",
      summary:
        "Worked on population-scale machine learning for HLA imputation, combining high-accuracy neural models with large-scale data infrastructure for ensemble workflows."
    },
    {
      role: "AI Researcher",
      company: "MSO Laboratory, HUST",
      companyUrl: "https://soict.hust.edu.vn/mso-lab",
      period: "Nov 2019 - May 2021",
      location: "Hanoi, Vietnam",
      summary:
        "Conducted research in optimization, machine learning, deep learning, and reinforcement learning, resulting in Q1 publications and international competition recognition."
    }
  ],
  education: {
    school: "Hanoi University of Science and Technology (HUST)",
    degree: "B.S. in Computer Engineering",
    period: "Aug 2018 - Mar 2023",
    location: "Hanoi, Vietnam",
    description:
      "Specialized in Data Science, Bioinformatics, and AI. Researching in the MSO Lab (Modeling, Simulation, and Optimization Laboratory).",
    supervisor: {
      name: "Assoc. Prof. Huynh Thi Thanh Binh",
      url: "https://scholar.google.com/citations?user=vJYe5lkAAAAJ"
    },
    thesis: "Deep Learning Applications in Bioinformatics and Optimization"
  },
  publications: [
    {
      year: "2024",
      title: "Dholes Hunting - A Multi-Local Search Algorithm Using Gradient Approximation",
      url: "https://ieeexplore.ieee.org/document/10571943",
      journal: "IEEE Access",
      quartile: "Q1",
      authors: "Nguyen, B.M., Nguyen, T., Vu, Q.H., et al."
    },
    {
      year: "2023",
      title: "A Greedy Search Based Evolutionary Algorithm for the Electric Vehicle Routing Problem",
      url: "https://www.researchgate.net/profile/Cong-Dao-Tran/publication/360604653",
      journal: "Applied Intelligence",
      quartile: "Q1",
      authors: "Vu, Q.H. (First Author) et al."
    },
    {
      year: "2023",
      title: "Machine learning for prediction of Severe Cutaneous Adverse Drug Reactions",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/imj.18_16230",
      journal: "Internal Medicine Journal",
      quartile: "Q2",
      authors: "Nguyen, V.D., Vu, Q.H. et al."
    },
    {
      year: "2023",
      title: "A Novel Nature-Inspired Algorithm for Optimal Task Scheduling in Fog-Cloud Blockchain Systems",
      url: "https://ieeexplore.ieee.org/document/10174621",
      journal: "IEEE Internet of Things Journal",
      quartile: "Q1",
      authors: "Nguyen, B.M., Vu, Q.H. et al."
    }
  ],
  honors: [
    {
      title: "3rd Place - Electric Vehicle Routing Problem, IEEE WCCI 2020",
      detail: "World's largest computational intelligence event",
      location: "Glasgow, UK"
    },
    {
      title: "3rd Place - ICPC Asia Regional Contest 2020",
      location: "Can Tho, Vietnam"
    },
    {
      title: "2nd Place - National Olympiad in Informatics 2019",
      detail: "Ranked 5th/130+",
      location: "Da Nang, Vietnam"
    },
    {
      title: "2nd and 3rd Place - Procon (Kyogi) National Programming Contest 2020/2021"
    }
  ]
};
