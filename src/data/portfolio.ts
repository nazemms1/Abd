import type {
  PersonalInfo,
  Project,
  Skill,
  Education,
  Experience,
} from "../types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Abdulrahman Nuzha",
  title: "AI Engineer | Back-end Developer",
  bio: "Passionate AI engineer and back-end developer creating intelligent solutions for successful software development.",
  email: "abdalrahmannuzha@gmail.com",
  phone: "+963 988 701 921",
  address: "Damascus, Syria",
  github: "https://github.com/abdulrahman-nuzha",
  linkedin: "https://linkedin.com/in/abdulrahman-nuzha",
  gitlab: "https://gitlab.com/abdulrahman-nuzha",
};

export const education: Education[] = [
  {
    degree: "Master's Degree in Technology Management (PMTM)",
    institution: "Syrian Virtual University",
    period: "2024 – Present",
    location: "Damascus, Syria",
  },
  {
    degree: "Bachelor's Degree in Information and Communication Engineering",
    institution: "Arab International University",
    period: "2018 – 2024",
    location: "Damascus, Syria",
    note: "Majored in Artificial Intelligence",
  },
];

export const experience: Experience[] = [
  {
    title: "AI Engineer ",
    company: "XINA Innovation National Advisory",
    type: "Full-time",
    period: "Jul 2025 - Present",
    location: "United Arab Emirates, UAE",
    bullets: [
      "Fine-tuned and evaluated transformer-based models (BERT, RoBERTa, XLM-RoBERTa, E5, ModernBERT, MARBERT, Arabert) and LLMs (Qwen2.5, DeepSeek-R1) for sentiment classification (Arabic & English).",
      "Used Hugging Face Transformers, Torchtune, Unsloth, and Optuna for training and optimization.",
      "Deployed ONNX models via Triton; built and integrated inference APIs into Django.",
      "Built a FastAPI-based labelling platform with multi-role access and multiple NLP/voice tasks.",
      "Built an analytics service to process and visualize social data from X (Twitter) and integrated it into Django.",
      "Applied data preprocessing and cleaning for fine-tuning and labeling tasks; implemented tweet deduplication using Jaccard similarity with MinHash LSH.",
      "Contributed to backend and system design of a WasteManagement ERP using ABP Framework.",
    ],
  },
  {
    title: "AI Engineer | Backend Developer",
    company: "Soutify",
    type: "Full-time",
    period: "Jan 2025 – Jul 2025",
    location: "Remotely, KSA",
    bullets: [
      "Fine-tuned and evaluated transformer-based models (BERT, RoBERTa, XLM-RoBERTa, E5, ModernBERT, MARBERT, Arabert) and LLMs (Qwen2.5, DeepSeek-R1) for sentiment classification (Arabic & English).",
      "Used Hugging Face Transformers, Torchtune, Unsloth, and Optuna for training and optimization.",
      "Deployed ONNX models via Triton; built and integrated inference APIs into Django.",
      "Built a FastAPI-based labelling platform with multi-role access and multiple NLP/voice tasks.",
      "Built an analytics service to process and visualize social data from X (Twitter) and integrated it into Django.",
      "Applied data preprocessing and cleaning for fine-tuning and labeling tasks; implemented tweet deduplication using Jaccard similarity with MinHash LSH.",
      "Contributed to backend and system design of a WasteManagement ERP using ABP Framework.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Codiay",
    type: "Full-time",
    period: "Aug 2024 – Nov 2024",
    location: "Remotely, UAE",
    bullets: [
      "Collaborated on developing and maintaining an ERP system.",
      "Identified, troubleshot, and resolved system issues to improve performance and functionality.",
      "Contributed to additional tasks as part of a cross-functional team.",
    ],
  },
  {
    title: "Backend Developer",
    company: "Freelancer",
    type: "Freelance",
    period: "May 2024 – Present",
    location: "Remotely",
    bullets: [],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Soutify – Social Media Analytics Platform",
    context: "Soutify",
    period: "Jan 2025 – Jul 2025",
    description:
      "Developed and deployed multilingual sentiment and topic classification services for social media data using fine-tuned transformer and LLM models. Handled preprocessing, fine-tuning, evaluation, and deployment for Arabic and English datasets.",
    bullets: [
      "Sentiment and topic classification using fine-tuned transformer and LLM models.",
      "Arabic and English dataset preprocessing, cleaning, and evaluation workflows.",
      "Model inference services deployed via Triton Inference Server with ONNX conversion.",
      "Analytics Service for exploring real-time trends and insights.",
      "End-to-end fine-tuning, hyperparameter optimization (Optuna), and evaluation of BERT, RoBERTa, E5, ModernBERT, MARBERT, Arabert, Qwen2.5, and DeepSeek-R1.",
      "Django-based APIs to serve inference results from Triton and expose analytics endpoints.",
    ],
    tech: [
      "Transformers",
      "LLMs",
      "Hugging Face",
      "Triton",
      "ONNX",
      "Optuna",
      "Django",
      "Git",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 2,
    title: "Labelify – Multi-Task Data Labelling Platform",
    context: "Soutify",
    period: "May 2025 – Jul 2025",
    description:
      "Designed and built a full-featured data labelling platform to support a variety of NLP and speech tasks with role-based access.",
    bullets: [
      "Supports tasks like classification, text generation, summarization, NER, POS, speech-to-text, and text-to-speech.",
      "Multi-role support (Admin, Company, Employee).",
      "Tweet deduplication to prevent redundant labeling using Jaccard similarity and MinHash LSH.",
      "Dataset cleaning and preprocessing pipelines for better annotation quality.",
      "JWT-based authentication and RESTful API endpoints.",
    ],
    tech: ["FastAPI", "Python", "NLP", "MinHash LSH", "JWT", "Git"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Ketabook – Online Bookstore & Publishing Platform",
    context: "Freelance",
    period: "May 2024 – Sep 2024",
    description:
      "Collaborated on building a full-featured platform for book publishing and sales, enabling publishers to manage content and readers to discover, purchase, and read books via a mobile app.",
    bullets: [
      "Mobile app for readers to buy, read, bookmark, and review books.",
      "Follow publishers, request specific or physical books, gift books to others.",
      "Notifications, reading lists, book ratings, and reporting features.",
      "Admin and publisher dashboards to manage books, categories, and sales.",
      "Stripe integration for secure electronic payments.",
      "Backend built with Laravel, covering authentication, API development, and database design.",
      "Admin dashboard built with Vue.js; full relational database structure designed.",
    ],
    tech: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "Flutter",
      "Stripe",
      "REST APIs",
      "Git",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 4,
    title: "ChatPDF",
    context: "Graduation Project",
    period: "Oct 2023 – Feb 2024",
    description:
      "An innovative PDF application leveraging generative AI for efficient PDF exploration and comprehension, revolutionising document management.",
    bullets: [
      "Chat with Your PDF: Enhanced exploration using LLM and the RAG technique.",
      "Summarization: Concise summaries extracted from extensive textual data.",
      "OCR: Efficient extraction of text from handwritten images.",
      "Generate Quiz: Creation of interactive quizzes based on PDF content.",
      "Convert audio into text: Seamless conversion of audio files into PDF format.",
      "File Editing: Merge or split PDF pages directly.",
      "Format Conversion: Convert Word, images, and spreadsheets into PDF.",
      'Contributed to "Chat with your PDF" and "Generate Quiz" features as an AI engineer in a team of 5.',
    ],
    tech: [
      "Generative AI",
      "LLM",
      "RAG",
      "Django",
      "Flutter",
      "LangChain",
      "PyTorch",
      "OpenCV",
      "Git",
    ],
    githubUrl: "",
    liveUrl: "",
  },
];

export const skills: Skill[] = [
  // AI
  { name: "Python", category: "ai" },
  { name: "Hugging Face Transformers", category: "ai" },
  { name: "scikit-learn", category: "ai" },
  { name: "Pandas", category: "ai" },
  { name: "NumPy", category: "ai" },
  { name: "Torchtune", category: "ai" },
  { name: "Unsloth", category: "ai" },
  { name: "Optuna", category: "ai" },
  { name: "Triton Inference Server", category: "ai" },
  { name: "Fine-tuning", category: "ai" },
  { name: "Transfer Learning", category: "ai" },
  { name: "LLM", category: "ai" },
  { name: "RAG", category: "ai" },
  // Backend
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "ABP Framework", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "SQLite", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "Docker", category: "backend" },
  { name: "Git", category: "backend" },
  // Soft Skills
  { name: "Problem-Solving", category: "soft" },
  { name: "Critical Thinking", category: "soft" },
  { name: "Teamwork", category: "soft" },
];

export const languages = [
  { name: "Arabic", level: "Native Speaker" },
  { name: "English", level: "Very Good – B2" },
];
