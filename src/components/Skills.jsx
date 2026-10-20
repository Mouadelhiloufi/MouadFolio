const skillGroups = [
    { title: 'Backend & APIs', items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'NestJS', 'Laravel', 'REST API', 'OAuth 2.0', 'Webhooks'] },
    { title: 'AI / LLM / Automation', items: ['RAG', 'LangChain', 'LLM Integration', 'AI Agents', 'ChromaDB', 'PyTorch', 'Scikit-learn', 'YOLO'] },
    { title: 'API Integration', items: ['WhatsApp Business API', 'Instagram API', 'PrestaShop', 'Shopify', 'WooCommerce'] },
    { title: 'Data Engineering', items: ['Apache Airflow', 'Apache Spark', 'PySpark', 'Power BI', 'Pandas', 'ETL Pipelines'] },
    { title: 'Frontend', items: ['React', 'Angular', 'Next.js', 'Tailwind CSS'] },
    { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'ChromaDB (vector DB)'] },
    { title: 'Cloud / DevOps', items: ['Azure', 'Docker', 'Jenkins', 'Prometheus', 'Grafana', 'Loki'] },
    { title: 'Tools', items: ['Git/GitHub', 'Claude Code', 'Maven', 'JUnit', 'Swagger/OpenAPI'] },
];

const colors = ['bg-[#884830]', 'bg-[#473D3D]', 'bg-[#C89F66]'];

function Skills() {
 return (
 <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CE7857] mb-6 sm:mb-8
                ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-20"
     style={{fontFamily: 'Acme'}}>
 Skills
 </h2>

 <div className="max-w-6xl mx-auto">
 <p className="text-sm sm:text-base md:text-lg text-[#343434] mb-8 sm:mb-10 md:mb-12
              px-2 sm:px-0">
 From backend APIs and AI agents to data pipelines and monitoring — here is the stack I use to build
 and ship production systems.
 </p>

 {skillGroups.map((group) => (
 <div key={group.title} className="mb-8 sm:mb-10 md:mb-12">
 <h3 className="text-xl sm:text-2xl font-semibold text-[#343434] mb-4 sm:mb-6
                ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-32"
     style={{fontFamily: 'Acme'}}>
     {group.title}
 </h3>
 <div className="flex flex-wrap gap-2 sm:gap-3 md:grid md:grid-cols-4 md:gap-4">
 {group.items.map((item, i) => (
 <div key={item}
      className={`${colors[i % colors.length]} text-white font-bold py-2 px-4 md:py-10 md:px-6
                rounded-full md:rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1`}>
     {item}
 </div>
 ))}
 </div>
 </div>
 ))}
 </div>
 </section>
 );
}

export default Skills;
