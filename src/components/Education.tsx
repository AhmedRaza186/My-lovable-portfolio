import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const educationItems = [
  {
    icon: GraduationCap,
    title: "Intermediate Part 2 – Commerce",
    subtitle: "Currently Enrolled",
    description: "Studying commerce with a focus on accounting and business fundamentals.",
  },
  {
    icon: BookOpen,
    title: "Full Stack Web Development",
    subtitle: "Saylani Mass IT Training",
    description: "Learning modern web technologies including React, Node.js, and databases.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Education</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {educationItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div className="glass-card-hover p-6 md:p-8 md:w-[45%] w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-primary">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
