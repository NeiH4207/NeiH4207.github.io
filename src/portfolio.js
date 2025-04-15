/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
// =================================================================================================
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
// =================================================================================================
// ========================== REVIEW THIS SECTION =================================================
// =================================================================================================
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vu Quoc Hien",
  title: "Hi all, I'm Hien Vu",

  // Store subtitle as an array of elements/strings
  subTitle: [
    emoji(
      "A passionate ML Engineer 🚀 specializing in Deep Learning, NLP, Optimization, and building scalable AI solutions. Check out my work on "
    ),
    <a
      key="gslink"
      href="https://scholar.google.com/citations?user=tp3X_iQAAAAJ"
      target="_blank"
      rel="noopener noreferrer"
    >
      Google Scholar
    </a>,
    emoji(".")
  ],

  resumeLink:
    "https://drive.google.com/file/d/17PEEB8TI8IW7fMW5c8MVUTx0BB2AumfE/view?usp=sharing", // <<< ADD ACTUAL LINK
  displayGreeting: true
};

// Social Media Links
// =================================================================================================
// ========================== REVIEW THIS SECTION =================================================
// =================================================================================================
const socialMediaLinks = {
  github: "https://github.com/Neih4207",
  linkedin: "https://www.linkedin.com/in/neihvq23",
  gmail: "hienvq23@gmail.com",
  gitlab: "", // Optional
  facebook: "https://www.facebook.com/neih4207",
  medium: "", // Optional
  stackoverflow: "", // Optional
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons (e.g., add Google Scholar icon), tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
// =================================================================================================
// ========================== REVIEW THIS SECTION =================================================
// =================================================================================================
const skillsSection = {
  title: "What I do",
  subTitle: "DRIVING INNOVATION ACROSS MULTIPLE AI DOMAINS",
  skills: [
    // Derived from "AI Domains" in CV
    emoji(
      "⚡ Develop and implement solutions in Machine Learning, Deep Learning, NLP, Computer Vision, and Reinforcement Learning."
    ),
    emoji(
      "⚡ Design and build Recommendation Systems and apply Heuristic Optimization techniques."
    ),
    emoji(
      "⚡ Architect and deploy scalable AI systems using cloud platforms and robust frameworks."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Derived from CV Skills sections
    // ML/DL Frameworks
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain" // Generic AI icon, consider custom image
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-robot" // Generic AI icon
    },
    // LLM Frameworks
    {
      skillName: "Langchain",
      fontAwesomeClassname: "fas fa-link" // Chain/link icon
    },
    {
      skillName: "LlamaIndex",
      fontAwesomeClassname: "fas fa-book-reader" // Index/reading icon
    },
    {
      skillName: "Haystack",
      fontAwesomeClassname: "fas fa-search" // Search icon
    },
    // Core Libraries
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-eye" // Vision icon
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table" // Data/table icon
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-cogs" // Gears/tools icon
    },
    {
      skillName: "SciPy",
      fontAwesomeClassname: "fas fa-flask" // Science/lab icon
    },
    // Programming Languages
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-file-code" // Generic code icon
    },
    // Databases
    {
      skillName: "SQL (MySQL, PostgreSQL)",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NoSQL (MongoDB, Neo4j)",
      fontAwesomeClassname: "fas fa-database" // Re-using icon, could differentiate
    },
    {
      skillName: "Vector DB",
      fontAwesomeClassname: "fas fa-search-location" // Vector/search icon
    },
    // Cloud Platforms
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft" // Or generic cloud: fas fa-cloud
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "fas fa-server" // Server/deployment icon
    },
    // Operating Systems
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
// =================================================================================================
// ========================== LOGO NEEDS UPDATING ===============================================
// =================================================================================================
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hanoi University of Science and Technology (HUST)",
      logo: require("./assets/images/hust_logo.png"), // <<< UPDATE LOGO PATH
      subHeader:
        "B.S. in Computer Engineering",
      duration: "Aug 2018 - Mar 2023",
      desc: "Research conducted at the Modeling, Simulation, and Optimization Laboratory.",
      descBullets: [
        "Supervised by Associate Professor Huynh Thi Thanh Binh." // Link could be added if desired
      ]
    }
    // Add more schools if needed
  ]
};

// Your top 3 proficient stacks/tech experience
// =================================================================================================
// ========================== REVIEW THIS SECTION =================================================
// =================================================================================================
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    // Based on overall CV focus - adjust percentages as needed
    {
      Stack: "AI / Machine Learning / Deep Learning",
      progressPercentage: "95%"
    },
    {
      Stack: "NLP & LLM Engineering (RAG, Langchain, etc.)",
      progressPercentage: "90%"
    },
    {
      Stack: "Python & Data Science Libraries",
      progressPercentage: "95%"
    },
    {
      Stack: "Databases (SQL, NoSQL, Vector)",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud Platforms (Azure, AWS)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section - UPDATED WITH YOUR CV DATA
// =================================================================================================
// ============================ LOGOS NEED UPDATING ===============================================
// =================================================================================================
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      // Future role based on CV timeline
      role: "Machine Learning Engineer",
      company: "Trusting Social",
      companylogo: require("./assets/images/logo_trustingsocial.png"), // <<< UPDATE LOGO PATH
      date: "May 2025 – Present | HCM, Vietnam", // As of April 15, 2025, this is upcoming
      desc: "Developing machine learning solutions.", // Add description when available
      descBullets: [
        // Add specific achievements/responsibilities later
      ]
    },
    {
      role: "AI/LLM Engineer",
      company: "FPT Software AI Center",
      companylogo: require("./assets/images/fpt_logo.png"), // <<< UPDATE LOGO PATH
      date: "Sep 2024 – May 2025 | Hanoi, Vietnam",
      desc: "Developed and led projects involving RAG pipelines, document analysis, and AI chatbots on Azure.",
      descBullets: [
        // "**Microsoft SharePoint RAG**: Developed an Agentic RAG solution for question answering and document retrieval on Microsoft SharePoint using Azure Cloud Services, achieving a document hit rate exceeding **85%** across **over 100** SharePoint files and folders.",
        // "**Document Q&A**: Led the design and development of a robust data pipeline & RAG pipeline for analyzing complex PDF documents, resulting in a **40%** reduction in data processing time through dynamic querying and insightful data extraction, and **92%** overall accuracy on Q&A benchmark dataset, as evaluated by the RAGAS evaluation tool.",
        // "**GenAI Chatbot**: Developed an AI-powered chatbot utilizing advanced RAG techniques to enhance Automated Bug Categorization Solution, improving model accuracy and operational efficiency by **30%**."
      ]
    },
    {
      role: "Bioinformatic AI Scientist",
      company: "Genestory JSC",
      companylogo: require("./assets/images/genestory_logo.png"), // <<< UPDATE LOGO PATH
      date: "Apr 2022 – Sep 2024 | Hanoi, Vietnam",
      desc: "Applied AI and statistical methods to bioinformatics, focusing on drug response and genetic risk prediction.",
      descBullets: [
        // "**SCARs -- Drug Response Prediction**: Spearheaded a project on Severe Cutaneous Adverse Reactions (SCARs) to reduce patient risk by screening for harmful genetic variants linked to Allopurinol and Carbamazepine prescriptions. Leveraged statistical methods and machine learning to achieve prediction accuracies of **99.7%** and **85.7%**, respectively.",
        // "**Genetic‑Risk Prediction**: Engineered predictive models (e.g., polygenic risk scores) using advanced statistical methods to assess genetic predisposition to complex diseases and nutrigenomic profiles. Implemented automated analysis workflows, resulting in a significant acceleration (**>30x**) of results generation compared to previous methods.",
        // "**Drug-Gene Interaction Database**: Built a graph-based platform using Neo4j to model gene-drug interactions, enhancing the Pharmacogenomics (PGx) Database. Improved analysis speed by **fourfold** while boosting scalability."
        // Removed seminar talks as they were commented out in the CV
      ]
    },
    {
      role: "AI Engineer",
      company: "Vingroup Big Data Institute",
      companylogo: require("./assets/images/vbdi_logo.png"), // <<< UPDATE LOGO PATH
      date: "Jul 2021 – Mar 2022 | Hanoi, Vietnam",
      desc: "Developed AI models for clinical applications and managed large-scale genomic data.",
      descBullets: [
        // "**Human Leukocyte Antigen (HLA) Imputation**: Developed a neural network model incorporating fusion logic for HLA imputation in Vietnamese patient cohorts, achieving high accuracy (**88–99%**) and delivering significant clinical value.",
        // "**Variant Annotation -- EML**: Architected a **6 TB** PostgreSQL database housing over **9 billion** genetic variants and applied ensemble machine learning for comprehensive variant analysis."
      ]
    },
    {
      role: "AI Researcher",
      company: "Modelling, Simulation, and Optimization Laboratory (HUST)",
      companylogo: require("./assets/images/mso_logo.png"), // <<< UPDATE LOGO PATH (Use HUST logo or a generic lab icon)
      date: "Nov 2019 – Apr 2023 | HUST",
      desc: "Researched Multi‑objective Optimization, Machine Learning, and Deep Reinforcement Learning.",
      descBullets: [
        // "**Main Projects:** Electric Vehicle Routing Problem ([GitHub](https://github.com/NeiH4207/EVRP-Python)), Task Scheduling in Fog-Cloud w/ Blockchain ([GitHub](https://github.com/NeiH4207/DhoH)).", // Combined main projects
        // "**Side Projects:** Developed MCTS/DRL for board games ([GitHub](https://github.com/NeiH4207/castle-invasion-rl)), implemented DQN algorithms for Castle Invasion game ([GitHub](https://github.com/NeiH4207/castle-invasion-rl)), applied neuroevolution for Flappy Bird AI ([GitHub](https://github.com/NeiH4207/Flappy-Bird-Neuroevolution))." // Combined side projects
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
// =================================================================================================
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  // Uses github link from socialMediaLinks
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
// =================================================================================================
// ============================ IMAGES NEED UPDATING ==============================================
// =================================================================================================
const bigProjects = {
  title: "Selected Projects",
  subtitle: "RESEARCH AND DEVELOPMENT PROJECTS",
  projects: [
    // Extracted from AI Researcher role in CV
    {
      image: require("./assets/images/github_logo.png"), // <<< UPDATE IMAGE PATH
      projectName: "Electric Vehicle Routing Problem (EVRP)",
      projectDesc:
        "Application of evolutionary algorithms and greedy search methods to solve the EVRP.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/NeiH4207/EVRP-Python"
        }
      ]
    },
    {
      image: require("./assets/images/github_logo.png"), // <<< UPDATE IMAGE PATH
      projectName: "Task Scheduling in Fog-Cloud Environments with Blockchain",
      projectDesc:
        "Developed nature-inspired algorithms (Dholes Hunting) for optimal task scheduling in integrated systems.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/NeiH4207/DhoH"
        }
      ]
    },
    {
      image: require("./assets/images/github_logo.png"), // <<< UPDATE IMAGE PATH
      projectName: "Reinforcement Learning Series",
      projectDesc:
        "Implemented MCTS, DQN variants, and Neuroevolution for agents in games like Castle Invasion and Flappy Bird.",
      footerLink: [
        {
          name: "Castle Invasion RL",
          url: "https://github.com/NeiH4207/castle-invasion-rl"
        },
        {
          name: "Flappy Bird NE",
          url: "https://github.com/NeiH4207/Flappy-Bird-Neuroevolution"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section (Includes Honors, Awards, and Publications)
// =================================================================================================
// ============================ IMAGES NEED UPDATING ==============================================
// =================================================================================================
const achievementSection = {
  title: emoji("Achievements, Awards & Publications 🏆 "),
  award_title: emoji("Achievements, Awards🏆 "),
  publication_title: emoji("Publications📚 "),
  subtitle:
    "Recognition received and contributions to the scientific community.",

  achievementsCards: [
    // === Honors & Awards ===
    {
      title: "Third Prize, ICPC Asia Can Tho Regional Contest 2020",
      subtitle: "International Collegiate Programming Contest.",
      image: require("./assets/images/icpc_logo.png"), // <<< UPDATE IMAGE PATH
      imageAlt: "ICPC Logo",
      footerLink: [] // Add link if available
    },
    {
      title: "Third Prize, EVRP Competition @ IEEE WCCI 2020",
      subtitle:
        "Competition held at the world’s largest technical event on computational intelligence (Glasgow, UK).",
      image: require("./assets/images/wcci_logo.png"), // <<< UPDATE IMAGE PATH
      imageAlt: "IEEE Logo",
      footerLink: [] // Add link if available
    },
    {
      title: "Second Prize, National Olympiad in Informatics 2019",
      subtitle: "Ranked 5th out of 130+ participants (Da Nang, Vietnam).",
      image: require("./assets/images/olpvn_logo.png"), // <<< UPDATE IMAGE PATH
      imageAlt: "Olympiad Icon",
      footerLink: []
    },
    {
      title: "Third Prize, Procon (Kyogi) 2021",
      subtitle:
        "National Programming Contest organized by Vietnam Association for Information Processing.",
      image: require("./assets/images/olpvn_logo.png"), // <<< UPDATE IMAGE PATH
      imageAlt: "Procon Logo",
      footerLink: [
        {
          name: "Award PDF (Example)",
          url: "https://www.naprock.jp/wp-content/uploads/2020/07/NAPROCK202003BoA.pdf"
        } // Using 2020 link as example
      ]
    },
    {
      title: "Second Prize, Procon (Kyogi) 2020",
      subtitle:
        "National Programming Contest organized by Vietnam Association for Information Processing.",
      image: require("./assets/images/olpvn_logo.png"), // <<< UPDATE IMAGE PATH
      imageAlt: "Procon Logo",
      footerLink: [
        {
          name: "Award PDF",
          url: "https://www.naprock.jp/wp-content/uploads/2020/07/NAPROCK202003BoA.pdf"
        }
      ]
    }
  ],
  publicationsCards: [
    {
      title: "Greedy Search Evolutionary Algorithm for EVRP",
      subtitle: "Published in Applied Intelligence (Q1), 2023.",
      image: require("./assets/images/springer_logo.png"), // <<< UPDATE IMAGE PATH
      imageAlt: "Publication Icon",
      footerLink: [
        {
          name: "View Publication",
          url: "https://www.researchgate.net/profile/Cong-Dao-Tran/publication/360604653_A_greedy_search_based_evolutionary_algorithm_for_electric_vehicle_routing_problem/links/641d203a315dfb4ccea54309/A-greedy-search-based-evolutionary-algorithm-for-electric-vehicle-routing-problem.pdf"
        }
      ]
    },
    {
      title: "ML for Prediction of Severe Cutaneous Adverse Drug Reactions",
      subtitle: "Published in Internal Medicine Journal (Q2), 2023.",
      image: require("./assets/images/springer_logo.png"), // <<< UPDATE IMAGE PATH
      imageAlt: "Publication Icon",
      footerLink: [
        {
          name: "View Publication",
          url: "https://ieeexplore.ieee.org/document/10174621"
        } // Note: Link seems incorrect in CV, using placeholder
      ]
    },
    // === Publications ===
    {
      title: "Dholes Hunting Algorithm for Blockchain Consensus",
      subtitle: "Published in IEEE Access (Q1), 2024.",
      image: require("./assets/images/springer_logo.png"), // <<< UPDATE IMAGE PATH
      imageAlt: "Publication Icon",
      footerLink: [
        {
          name: "View Publication",
          url: "https://ieeexplore.ieee.org/document/10571943"
        }
      ]
    },
    {
      title:
        "Nature-Inspired Algorithm for Task Scheduling in Fog-Cloud Blockchain",
      subtitle: "Published in IEEE Internet of Things Journal (Q1), 2023.",
      image: require("./assets/images/springer_logo.png"), // <<< UPDATE IMAGE PATH
      imageAlt: "Publication Icon",
      footerLink: [
        {
          name: "View Publication",
          url: "https://ieeexplore.ieee.org/document/10174621"
        } // Note: Link seems reused/incorrect in CV, using placeholder
      ]
    },
    {
      title: "Multi-Objective Sparrow Search for Task Scheduling",
      subtitle: "Published in IEEE SCC 2021 Conference.",
      image: require("./assets/images/springer_logo.png"), // <<< UPDATE IMAGE PATH
      imageAlt: "Publication Icon",
      footerLink: [
        {
          name: "View Publication",
          url: "https://ieeexplore.ieee.org/document/9592438"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section - Hidden as CV lists Publications instead
// =================================================================================================
const blogSection = {
  title: "Blogs",
  subtitle: "Writing about AI, Development, and Technology.", // Placeholder
  displayMediumBlogs: "false", // Set true if you fetch from Medium
  blogs: [
    // Add blog posts here if you have any
  ],
  display: false // Set true to display this section, defaults to false
};

// Talks Sections - Hidden as CV doesn't list specific talks
// =================================================================================================
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Sharing knowledge through presentations and workshops. 🎤" // Placeholder
  ),
  talks: [
    // Add talks here if you have any
  ],
  display: false // Set true to display this section, defaults to false
};

// Podcast Section - Hidden as CV doesn't list podcasts
// =================================================================================================
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Discussing technology and personal projects.", // Placeholder
  podcast: [
    // Add podcast embed links here if you have any
  ],
  display: false // Set true to display this section, defaults to false
};

// Resume Section
// =================================================================================================
// ========================== REQUIRES RESUME LINK IN GREETING ====================================
// =================================================================================================
const resumeSection = {
  title: "Resume",
  subtitle: "Download my professional summary",
  resumeLink: greeting.resumeLink, // Uses the link defined in the greeting section
  display: greeting.resumeLink !== "" // Only display if a resume link is provided
};

// Contact Section
// =================================================================================================
// ========================== REVIEW THIS SECTION =================================================
// =================================================================================================
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to discussing collaborations, projects, or opportunities. Reach out!",
  number: "+84-333-545-027", // <<< UPDATE YOUR PHONE (Optional) or remove field
  email_address: socialMediaLinks.gmail // Uses the email from socialMediaLinks
};

// Twitter Section - Hidden as no Twitter username provided
// =================================================================================================
const twitterDetails = {
  userName: "your_twitter_username", // Replace with your Twitter username without @ if you have one
  display: false // Set true to display this section, defaults to false
};

// Hireable Section
// =================================================================================================
// ========================== REVIEW THIS SECTION =================================================
// =================================================================================================
const isHireable = true; // Set based on current situation (CV implies availability around May 2025)

// Export all constants
// =================================================================================================
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection, // Exported but display is false
  talkSection, // Exported but display is false
  podcastSection, // Exported but display is false
  contactInfo,
  twitterDetails, // Exported but display is false
  isHireable,
  resumeSection
};
