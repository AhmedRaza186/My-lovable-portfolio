import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card p-8 md:p-10"
        >
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Hi! I'm Ahmed Raza, currently studying in 12th Class (Commerce) and enrolled in the Modern Web Development course at Saylani Mass IT Training. I'm passionate about technology, coding, and financial systems.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            My goal is to become a skilled Full Stack Web Developer. I'm currently a trainee at Saylani Mass IT Training, where I'm sharpening my skills in both frontend and backend technologies. Alongside my tech journey, I aim to expand my knowledge in finance and continue growing in that field, blending financial insight with my technical expertise.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["Teamwork", "Web Development", "Commerce + Tech", "Problem Solving"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
