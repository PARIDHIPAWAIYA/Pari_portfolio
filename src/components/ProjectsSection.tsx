import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, X, Github } from "lucide-react";

const projects = [
  {
    title: "Agentic AI Guardrail System",
    tagline: "Multi-layer LLM safety pipeline",
    description:
      "A comprehensive multi-layer LLM guardrail pipeline featuring prompt injection detection, toxicity filtering, RAG-based semantic validation, and structured output enforcement. Achieved 92% accuracy on 4,000+ adversarial prompts.",
    tech: ["LangChain", "FastAPI", "PostgreSQL", "RAG", "Python"],
    highlights: [
      "Multi-layer guardrail pipeline with prompt injection detection",
      "RAG-based semantic validation with FAISS vector store",
      "92% accuracy on 4,000+ adversarial test prompts",
      "FastAPI + PostgreSQL production-ready backend",
    ],
    github: "#",
  },
  {
    title: "Network Guard — AI DDoS Detection",
    tagline: "Real-time intrusion detection system",
    description:
      "A real-time intrusion detection system using Isolation Forest for anomaly detection with automated mitigation via iptables. Features live traffic monitoring dashboard and alert system.",
    tech: ["Python", "Scikit-learn", "Flask", "iptables"],
    highlights: [
      "Real-time network traffic anomaly detection",
      "Isolation Forest ML model for DDoS pattern recognition",
      "Automated mitigation through iptables integration",
      "Live monitoring dashboard with alert system",
    ],
    github: "#",
  },
  {
    title: "Multi-Agent AI Chat Platform",
    tagline: "LangGraph-powered agent orchestration",
    description:
      "An advanced chat platform with LangGraph orchestration enabling selectable AI agents for research, document analysis, coding assistance, and data analytics. Features streaming responses and modular architecture.",
    tech: ["LangGraph", "React", "FastAPI", "Groq", "Google GenAI"],
    highlights: [
      "LangGraph multi-agent orchestration system",
      "Selectable agents: Research, Document, Coding, Analytics",
      "Streaming responses with real-time UI updates",
      "Modular architecture for easy agent extension",
    ],
    github: "#",
  },
];

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: (typeof projects)[0];
  index: number;
  onOpen: () => void;
}) => (
  <motion.div
    className="glass rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ scale: 1.02 }}
    onClick={onOpen}
  >
    {/* Gradient glow border */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: "linear-gradient(135deg, hsl(217 91% 60% / 0.2), hsl(263 70% 50% / 0.2))",
      }}
    />

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <p className="text-muted-foreground text-sm mb-4">{project.tagline}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) => (
  <motion.div
    className="fixed inset-0 z-[70] flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
    <motion.div
      className="relative glass-strong rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <h3 className="text-2xl font-bold mb-2 gradient-text inline-block">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-6">{project.description}</p>

      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        Key Features
      </h4>
      <ul className="space-y-2 mb-6">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-sm flex gap-2">
            <span className="text-primary shrink-0">▹</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform"
      >
        <Github className="w-4 h-4" /> View on GitHub
      </a>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">
            Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              onOpen={() => setSelected(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <ProjectModal
            project={projects[selected]}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
