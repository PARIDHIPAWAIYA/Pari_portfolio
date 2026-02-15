import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Github, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/paridhipawaiya" },
    { icon: Github, label: "GitHub", href: "https://github.com/paridhipawaiya" },
    { icon: Mail, label: "Email", href: "mailto:paridhipawaiya@gmail.com" },
    { icon: Phone, label: "Phone", href: "tel:+917742768284" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors text-sm resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              {sent ? "Sent! ✓" : <><Send className="w-4 h-4" /> Send Message</>}
            </button>
          </motion.form>

          <motion.div
            className="flex flex-col justify-center gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-muted-foreground mb-4">
              I'm always open to discussing AI/ML projects, research
              collaborations, or career opportunities. Feel free to reach out!
            </p>
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 glass rounded-xl hover:border-primary/50 transition-all group"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm group-hover:text-primary transition-colors">
                    {s.label}
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-24 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p>© 2025 Paridhi Pawaiya. Built with passion for AI.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
