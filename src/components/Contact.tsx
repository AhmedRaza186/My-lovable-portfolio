import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:sallumoon650@gmail.com", color: "from-primary to-primary" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-raza-14188b35b/", color: "from-blue-400 to-blue-600" },
  { icon: Github, label: "GitHub", href: "https://github.com/AhmedRaza186", color: "from-gray-400 to-gray-600" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/the_ahmed__raza/?hl=en", color: "from-pink-400 to-pink-600" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
          <p className="text-muted-foreground mt-4">Feel free to reach out through any platform below.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
