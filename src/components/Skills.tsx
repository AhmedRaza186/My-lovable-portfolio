import { motion } from "framer-motion";

const technicalSkills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "Firebase", level: 80 },
  { name: "Supabase", level: 70 },
  { name: "Node.js / Express", level: 65 },
  { name: "MongoDB", level: 60 },
];

const softSkills = ["Teamwork", "Communication", "Commerce & Accounting", "Problem Solving", "Time Management"];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex justify-between mb-1.5 text-sm">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-5 py-2.5 glass-card text-foreground text-sm font-medium hover:border-primary/30 transition-colors duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
