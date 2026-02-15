import { motion } from "framer-motion";
import { Briefcase, Users, Bot } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "AI/ML Intern",
    company: "Hindustan Petroleum Corporation Limited (HPCL)",
    period: "May 2025 – July 2025",
    points: [
      "Built multi-agent conversational AI platform with LangGraph orchestration",
      "Integrated Groq API & Google GenAI for high-speed LLM inference",
      "Implemented RAG pipelines using FAISS, Chroma, and Qdrant vector stores",
      "Added voice interaction capabilities with STT/TTS integration",
      "Set up monitoring and observability using LangSmith",
    ],
  },
  {
    icon: Users,
    title: "Student Placement Coordinator",
    company: "VIT Vellore",
    period: "2025 – 2026",
    points: [
      "Coordinating placement activities for the student body",
      "Liaising between companies and students for recruitment drives",
      "Managing logistics and communication for placement events",
    ],
  },
  {
    icon: Bot,
    title: "AI/ML Lead",
    company: "RoboVITics — VIT Robotics Club",
    period: "2024 – Present",
    points: [
      "Leading 200+ members in the AI/ML vertical",
      "Conducting workshops on machine learning and deep learning",
      "Managing Robowars logistics and technical operations",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">
            Experience
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={i}
                  className="relative pl-12 md:pl-16"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 md:left-3.5 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-xs font-mono text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary mt-1 shrink-0">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
