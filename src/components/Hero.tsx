import { motion } from "framer-motion";
import ahmedPhoto from "@/assets/ahmed-photo.jpeg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px] floating" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] floating" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-accent/8 blur-[100px] floating" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Welcome to my portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Ahmed Raza</span>
            <br />
            <span className="text-foreground">Future Full Stack Developer.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            I craft engaging web experiences combining web development and student skills.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects" className="glow-button inline-block">View Projects</a>
            <a href="#contact" className="glass-card px-6 py-3 font-medium text-foreground hover:border-primary/40 transition-all duration-300 inline-block">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="floating">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-card p-1.5">
              <img
                src={ahmedPhoto}
                alt="Ahmed Raza"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
