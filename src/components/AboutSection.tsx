import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = ["DSA", "OS", "DBMS", "CN", "AI", "ML", "Cloud Architecture"];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate AI/ML engineer specializing in building secure,
              production-grade AI systems. My expertise spans multi-agent
              architectures, RAG pipelines, LLM guardrail frameworks, and
              scalable backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work extensively with LangChain, LangGraph, and modern AI
              orchestration tools to create intelligent systems that are both
              powerful and safe. My focus is on making AI systems trustworthy
              through robust guardrail architectures and security-first design.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="mb-4">
              <p className="font-semibold">B.Tech Computer Science & Engineering</p>
              <p className="text-muted-foreground">VIT Vellore • 2023 – 2027</p>
              <p className="text-primary font-mono text-sm mt-1">CGPA: 8.99</p>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-accent" />
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Coursework
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
