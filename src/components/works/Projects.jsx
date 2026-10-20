import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faArrowUpRightFromSquare, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const GITHUB = 'https://github.com/ISTIFANO/';

const projects = [
  {
    title: 'AIAssistantWithRAG',
    category: 'AI & LLM',
    featured: true,
    description: 'Production-ready multi-company AI assistant. RAG answers grounded in each company’s own documents, full data isolation between tenants, French / English / Darija support and smart product recommendations — running on a local LLM so data never leaves the server.',
    tags: ['Python', 'FastAPI', 'LangChain', 'Qdrant', 'Ollama', 'Docker'],
    repo: 'AIAssistantWithRAG',
    image: '/projects/ai-assistant-rag.webp',
  },
  {
    title: 'TacticalEdge-AI',
    category: 'AI & LLM',
    featured: true,
    badge: 'Hackathon WeCasablanca',
    description: 'AI football scouting & opponent intelligence platform built for the World Cup 2030. Coach dashboard with season analytics, video analysis, tactical recommendations and an AI coach assistant.',
    tags: ['TypeScript', 'React', 'AI Agents', 'Recharts'],
    repo: 'TacticalEdge-AI',
    image: '/projects/tacticaledge-ai.webp',
    gallery: ['/projects/tacticaledge-ai.webp', '/projects/tacticaledge-ai-dashboard.webp'],
  },
  {
    title: 'SmartLogisticsAI',
    category: 'Machine Learning',
    featured: true,
    description: 'End-to-end ML system predicting delivery delays in near real time: PySpark ingestion, MLlib training, Spark Streaming inference, FastAPI serving, Airflow orchestration and Streamlit / Power BI dashboards.',
    tags: ['PySpark', 'MLlib', 'Spark Streaming', 'Airflow', 'FastAPI', 'MongoDB'],
    repo: 'SmartLogisticsAI',
    image: '/projects/smartlogistics-ai.webp',
  },
  {
    title: 'ContextAI-Bot',
    category: 'AI & LLM',
    description: 'Chatbot REST API with automatic context management, multi-session conversations, a 30-message memory window for token optimization and thread-safe concurrent handling.',
    tags: ['Java', 'Spring Boot', 'LangChain4j', 'Gemini'],
    repo: 'ContextAI-Bot',
    image: '/projects/contextai-bot.webp',
  },
  {
    title: 'Brain & Blood Analyzer',
    category: 'Deep Learning',
    description: 'Deep learning for medical imaging: brain tumor detection on MRI scans (YOLO) and leukemia cell classification (GoogLeNet, PyTorch), served through a Streamlit app.',
    tags: ['PyTorch', 'YOLO', 'Computer Vision', 'Streamlit'],
    repo: 'brain-blood-analyzer',
    demo: 'https://brain-blood-analyzer-jiyjfxxaw6v5efwrq3mc5r.streamlit.app',
    image: '/projects/brain-blood-analyzer.webp',
  },
  {
    title: 'BrainScan AI',
    category: 'Deep Learning',
    description: 'Deep learning application that detects and classifies brain tumors from MRI images to make diagnosis faster and more accurate.',
    tags: ['Deep Learning', 'CNN', 'Computer Vision', 'Python'],
    repo: 'BrainScanAI',
    image: '/projects/brainscan-ai.webp',
  },
  {
    title: 'SkyPulse Analytics',
    category: 'NLP',
    description: 'Real-time NLP system that classifies airline customer reviews by sentiment and tracks satisfaction KPIs in an interactive dashboard. Sentence embeddings stored in ChromaDB; best model SVM with ROC-AUC 0.974 (vs LightGBM, XGBoost, Random Forest).',
    tags: ['Sentence-Transformers', 'ChromaDB', 'SVM', 'LightGBM', 'Airflow', 'Docker'],
    repo: 'SkyPulse-Analytics',
    image: '/projects/skypulse-analytics.webp',
  },
  {
    title: 'Spam Detection NLP',
    category: 'NLP',
    description: 'Automatic email spam classification: NLTK preprocessing, stemming and TF-IDF features, then 6 models compared (Naive Bayes, Logistic Regression, LinearSVC, Random Forest…). LinearSVC reaches 99% accuracy on the test set.',
    tags: ['Python', 'NLTK', 'TF-IDF', 'Scikit-learn'],
    repo: 'spam-detection-nlp',
    image: '/projects/spam-detection.webp',
  },
  {
    title: 'Intelligent News Categorizer',
    category: 'NLP',
    description: 'NLP pipeline that automatically classifies news articles (AG News) using Sentence Transformers embeddings, ChromaDB vector storage, Airflow orchestration and a Streamlit interface.',
    tags: ['Sentence-Transformers', 'ChromaDB', 'Airflow', 'Streamlit'],
    repo: 'intelligent-news-categorizer',
    image: '/projects/news-categorizer.webp',
  },
  {
    title: 'Diabetes Detector',
    category: 'Machine Learning',
    description: 'Predicts diabetes risk from clinical data (glucose, BMI, age…). Combines K-Means clustering to find risk profiles with classifiers (Random Forest, SVM, XGBoost), plus a Streamlit app to test the model live.',
    tags: ['Scikit-learn', 'K-Means', 'XGBoost', 'Streamlit'],
    repo: 'diabetes-detector',
    image: '/projects/diabetes-detector.webp',
  },
  {
    title: 'Churn Prediction',
    category: 'Machine Learning',
    description: 'Customer churn prediction at scale: data stored in MongoDB, preprocessing and model pipeline with PySpark MLlib, results exposed in Streamlit.',
    tags: ['PySpark', 'MLlib', 'MongoDB', 'Streamlit'],
    repo: 'ChurnPrediction',
    image: '/projects/churn-prediction.webp',
  },
  {
    title: 'Smart Insurance AI',
    category: 'Machine Learning',
    description: 'Regression model predicting health insurance charges from patient data (age, BMI, smoking, children, region), structured in clean layers (data, training, evaluation, CLI) with tests.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Regression'],
    repo: 'smart-insurance-ai',
    image: '/projects/smart-insurance.webp',
  },
  {
    title: 'Azure Consumption Forecast',
    category: 'Machine Learning',
    description: 'Consumption forecasting project on Azure: data ingestion with Azure Data Factory pipelines and model training with Azure Machine Learning.',
    tags: ['Azure ML', 'Data Factory', 'Python'],
    repo: 'dataForAzureAi',
    image: '/projects/azure-ml-forecast.webp',
  },
  {
    title: 'Premier League Analysis',
    category: 'Data',
    description: 'ELT pipeline for the 2024–2025 Premier League season: Selenium scraping, SQLAlchemy loading into SQL, then cleaning and analysis of team and player data.',
    tags: ['Python', 'Selenium', 'SQLAlchemy', 'Pandas'],
    repo: 'Pr-analysis',
    image: '/projects/premier-league.webp',
  },
  {
    title: 'AI Support Assistant',
    category: 'AI & LLM',
    description: 'Customer support assistant that analyzes the conversation context and generates relevant replies automatically, helping support teams answer faster.',
    tags: ['Java', 'Spring Boot', 'Gemini'],
    repo: 'ai-support-assistant',
    image: '/projects/ai-support-assistant.webp',
  },
  {
    title: 'Ollama Monitoring API',
    category: 'AI & LLM',
    description: 'MLOps project: a containerized Ollama service (quantized Qwen) behind a FastAPI layer, with Prometheus, Grafana and cAdvisor monitoring — tuned to run on 6 GB RAM / 2 CPU cores.',
    tags: ['Python', 'FastAPI', 'Ollama', 'Prometheus', 'Grafana', 'Docker'],
    repo: 'ollama-monitoring-api',
    image: '/projects/ollama-monitoring.webp',
  },
  {
    title: 'SEO Image Toolkit',
    category: 'Full-Stack',
    description: 'Optimizes Etsy product images for SEO: keyword-rich renaming, EXIF & PNG metadata injection, bulk processing of up to 50 images, metadata inspector, image scraper and format converter.',
    tags: ['JavaScript', 'React', 'Node.js', 'EXIF'],
    repo: 'SEO-Image-Toolkit',
    image: '/projects/seo-image-toolkit.webp',
  },
  {
    title: 'MAILSENDER',
    category: 'Full-Stack',
    description: 'Permission-based email campaign platform: 6-step campaign wizard, SMTP connection pooling with health-aware rotation, live progress over Server-Sent Events, encrypted credentials, suppression list and CSV reports.',
    tags: ['TypeScript', 'React', 'FastAPI', 'SMTP'],
    repo: 'MAILSENDER',
    image: '/projects/mailsender.webp',
  },
  {
    title: 'SEO Auditor',
    category: 'Full-Stack',
    description: 'Crawls a website you own and audits its SEO health — titles, meta, broken links, alt text, schema, sitemap & robots.txt, TF-IDF keywords — with live crawl progress and HTML / PDF reports.',
    tags: ['Python', 'FastAPI', 'React', 'BeautifulSoup'],
    repo: 'seo-auditor',
    image: '/projects/seo-auditor.webp',
  },
  {
    title: 'ISTIGest Food Delivery',
    category: 'Backend',
    description: 'Food delivery API built with Clean Architecture: menu management, order creation and asynchronous delivery processing through RabbitMQ events, with an Angular dashboard.',
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Angular'],
    repo: 'Food-delivery-api',
    image: '/projects/food-delivery.webp',
  },
  {
    title: 'MécaConnect',
    category: 'Full-Stack',
    description: 'Marketplace connecting freelance mechanics with transport companies: service booking, quotes and secure payments through a REST API with JWT authentication.',
    tags: ['React', 'Laravel', 'REST API', 'JWT', 'Tailwind'],
    repo: 'Mec-Services',
    image: '/0615.mp4',
  },
];

const categories = ['All', 'AI & LLM', 'Machine Learning', 'Deep Learning', 'NLP', 'Data', 'Backend', 'Full-Stack'];

const isVideo = (src) => src.endsWith('.mp4');

function Media({ src, alt, className }) {
  return isVideo(src) ? (
    <video src={src} className={className} muted loop playsInline preload="metadata"
           onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => e.currentTarget.pause()} />
  ) : (
    <img src={src} alt={alt} className={className} loading="lazy" />
  );
}

function Projects() {
  const [category, setCategory] = useState('All');
  const [preview, setPreview] = useState(null);

  const visible = category === 'All' ? projects : projects.filter((p) => p.category === category);

  return (
    <section className="py-6 sm:py-10 px-0 sm:px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#884830] mb-3 sm:mb-4"
            style={{fontFamily: 'Acme'}}>
          My Works
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl">
          AI agents, RAG assistants, data pipelines and full-stack apps — a selection of projects from my GitHub,
          from production-grade LLM systems to hackathon builds.
        </p>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 mb-6 sm:mb-8 -mx-1 px-1">
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)}
                    className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                      ${category === c ? 'bg-[#884830] text-white shadow-md' : 'bg-[#FFE5DD] text-[#884830] hover:bg-[#F1AA76] hover:text-white'}`}>
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article key={p.title} layout
                              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.25 }}
                              className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#FFE5DD]
                                          shadow-md hover:shadow-2xl hover:-translate-y-1 transition-[box-shadow,transform] duration-300`}>
                <button className="relative aspect-[16/10] overflow-hidden bg-[#3C3535] text-left"
                        onClick={() => setPreview(p)} aria-label={`Preview ${p.title}`}>
                  <Media src={p.image} alt={p.title}
                         className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[#884830] text-xs font-bold shadow">
                      {p.category}
                    </span>
                    {p.featured && (
                      <span className="px-2.5 py-1 rounded-full bg-[#884830] text-white text-xs font-bold shadow">
                        <FontAwesomeIcon icon={faStar} className="mr-1" />Featured
                      </span>
                    )}
                  </div>
                </button>

                <div className="flex flex-col flex-1 p-5">
                  <h2 className="text-xl font-bold text-[#473D3D] mb-1" style={{fontFamily: 'Acme'}}>{p.title}</h2>
                  {p.badge && (
                    <p className="text-xs font-semibold text-[#CE7857] mb-2">
                      <FontAwesomeIcon icon={faTrophy} className="mr-1" />{p.badge}
                    </p>
                  )}
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-[#FFE5DD] text-[#884830] text-xs font-semibold">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={GITHUB + p.repo} target="_blank" rel="noopener noreferrer"
                       className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#343434] text-white
                                  text-sm font-semibold hover:bg-[#884830] transition-colors">
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer"
                         className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-[#884830]
                                    text-[#884830] text-sm font-semibold hover:bg-[#884830] hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-8 sm:mt-10">
          <a href="https://github.com/ISTIFANO?tab=repositories" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-[#884830] font-semibold hover:underline">
            <FontAwesomeIcon icon={faGithub} /> See all my repositories on GitHub →
          </a>
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 sm:p-6"
                      onClick={() => setPreview(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl"
                        onClick={(e) => e.stopPropagation()}>
              {(preview.gallery || [preview.image]).map((src) =>
                isVideo(src) ? (
                  <video key={src} src={src} className="w-full rounded-xl" autoPlay loop muted playsInline controls />
                ) : (
                  <img key={src} src={src} alt={preview.title} className="w-full rounded-xl mb-3" />
                )
              )}
              <button onClick={() => setPreview(null)} aria-label="Close preview"
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#884830] text-white hover:bg-[#CE7857] transition-colors">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
