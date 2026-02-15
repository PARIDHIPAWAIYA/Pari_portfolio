import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Brain, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Java", "Python", "C/C++", "JavaScript", "SQL", "React"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["LangChain", "RAG", "LangGraph", "TensorFlow", "Keras", "Scikit-learn", "OpenCV"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["FastAPI", "Flask", "REST APIs", "PostgreSQL", "SQLAlchemy"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Ubuntu", "AWS S3", "AWS Rekognition", "Jupyter", "Colab"],
  },
];

const SkillCard = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) => {
  const [hover, setHover] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      className="glass rounded-2xl p-6 relative group cursor-default overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow border on hover */}
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, hsl(217 91% 60% / 0.3), hsl(263 70% 50% / 0.3))",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm rounded-lg bg-muted/50 text-foreground border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">
            Skills
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
