import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Linkedin } from "lucide-react";

import quizifyImg from "@/assets/projects/quizify.jpg";
import healthmateImg from "@/assets/projects/healthmate.jpg";
import rollclashImg from "@/assets/projects/rollclash.jpg";
import guessmynumberImg from "@/assets/projects/guessmynumber.jpg";
import tictactoeImg from "@/assets/projects/tictactoe.jpg";
import eatucraveImg from "@/assets/projects/eatyoucrave.jpg";
import buyyouwantImg from "@/assets/projects/buyyouwant.jpg";
import linkupImg from "@/assets/projects/linkup.jpg";
import luxursImg from "@/assets/projects/luxurs.jpg";
import fakestoreImg from "@/assets/projects/fakestore.jpg";
import forkifyImg from "@/assets/projects/forkify.jpg";
import newswaveImg from "@/assets/projects/newswave.jpg";
import atmosImg from "@/assets/projects/atmos.jpg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  linkedinUrl?: string;
  category: string;
  image?: string;
}

const categories = ["All", "Full Stack", "Games", "Frontend", "API Projects"];

const projects: Project[] = [
  {
    title: "Quizify",
    description: "An interactive quiz application with user authentication, score tracking, and real-time feedback.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    repoUrl: "https://github.com/AhmedRaza186/Quizify",
    liveUrl: "https://ahmedraza186.github.io/Quizify/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7426992859721129984/",
    category: "Full Stack",
    image: quizifyImg,
  },
  {
    title: "HealthMate",
    description: "A health tracking web app to monitor daily habits, BMI, and wellness goals.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    repoUrl: "https://github.com/AhmedRaza186/HealthMate",
    liveUrl: "https://health-mate12.netlify.app/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7429524809665110016/",
    category: "Full Stack",
    image: healthmateImg,
  },
  {
    title: "Roll Clash",
    description: "🎲 Roll Clash – A 2-player dice game with score tracking, animations, and a leaderboard using HTML, CSS & JS.",
    tech: ["JavaScript", "CSS", "HTML"],
    repoUrl: "https://github.com/AhmedRaza186/Roll-Clash",
    liveUrl: "https://ahmedraza186.github.io/Roll-Clash/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7396530695965208576/",
    category: "Games",
    image: rollclashImg,
  },
  {
    title: "Guess My Number",
    description: "\"Guess My Number\" is a fun, interactive number guessing game where you try to guess a randomly generated number and earn points for each round.",
    tech: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/AhmedRaza186/guessTheNumber",
    liveUrl: "https://ahmedraza186.github.io/guessTheNumber/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7402336069133733888/",
    category: "Games",
    image: guessmynumberImg,
  },
  {
    title: "Tic Tac Toe",
    description: "A lightweight Tic Tac Toe game made with HTML, CSS, and JS featuring player vs player, player vs computer, and popup-based results.",
    tech: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/AhmedRaza186/My-Tic-Tac-Toe-game",
    liveUrl: "https://ahmedraza186.github.io/My-Tic-Tac-Toe-game/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7374767817335808001/",
    category: "Games",
    image: tictactoeImg,
  },
  {
    title: "Eat U Crave",
    description: "A modern ecommerce storefront for food lovers – discover what you prefer and order with ease.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/AhmedRaza186/Eat-You-Crave",
    liveUrl: "https://ahmedraza186.github.io/Eat-You-Crave/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7391783898428448768/",
    category: "Frontend",
    image: eatucraveImg,
  },
  {
    title: "Buy You Want",
    description: "Buy You Want is a responsive e-commerce website built using HTML, CSS, and JavaScript. It features a dynamic add-to-cart system with real-time updates and automatic price calculations.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/AhmedRaza186/Buy-You-Want",
    liveUrl: "https://ahmedraza186.github.io/Buy-You-Want/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7385610773785636864/",
    category: "Frontend",
    image: buyyouwantImg,
  },
  {
    title: "LinkUp",
    description: "LinkUp is a social media web app built during the Saylani Mini Hackathon. It includes authentication, post creation, editing, liking, filtering, and theme switching — all powered by localStorage.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/AhmedRaza186/LinkUp",
    liveUrl: "https://ahmedraza186.github.io/LinkUp/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7398170873117032448/",
    category: "Frontend",
    image: linkupImg,
  },
  {
    title: "Luxurs.",
    description: "Luxurs. represents luxury, power, and motion in one seamless experience. Built to showcase premium car brands with cinematic visuals and immersive effects.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/AhmedRaza186/Luxurs.",
    liveUrl: "https://ahmedraza186.github.io/Luxurs./",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7388855999979261954/",
    category: "Frontend",
    image: luxursImg,
  },
  {
    title: "FakeStore",
    description: "A modern e-commerce web app built using Fake Store API, featuring dynamic product loading, a localStorage-based cart system, and quantity management.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    repoUrl: "https://github.com/AhmedRaza186/FakeStore-API-project",
    liveUrl: "https://ahmedraza186.github.io/FakeStore-API-project/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7420051573294166016/",
    category: "API Projects",
    image: fakestoreImg,
  },
  {
    title: "Forkify",
    description: "Forkify is a responsive recipe finder web app that allows users to search and explore over 1M recipes using an API with detailed recipe views and smooth navigation.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    repoUrl: "https://github.com/AhmedRaza186/Forkify",
    liveUrl: "https://ahmedraza186.github.io/forkify/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7418260292884836352/",
    category: "API Projects",
    image: forkifyImg,
  },
  {
    title: "NewsWave",
    description: "A dynamic news web app built with JavaScript and APIs, featuring real-time news fetching, category-based filtering, search functionality, and a fully responsive UI.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    repoUrl: "https://github.com/AhmedRaza186/NewsWave",
    liveUrl: "https://ahmedraza186.github.io/NewsWave/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7417123938578755586/",
    category: "API Projects",
    image: newswaveImg,
  },
  {
    title: "Atmos",
    description: "A mini weather app built using the OpenWeather API that fetches real-time data, handles API errors, and displays live weather updates.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    repoUrl: "https://github.com/AhmedRaza186/Atmos---The-weather-App",
    liveUrl: "https://ahmedraza186.github.io/Atmos---The-weather-App/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7415374400100925440/",
    category: "API Projects",
    image: atmosImg,
  },
];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-heading">Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-muted/50 text-muted-foreground border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="glass-card-hover group relative overflow-hidden flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden rounded-t-xl bg-muted/30">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                      <span className="text-2xl font-bold text-muted-foreground/50">{project.title[0]}</span>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 text-[10px] px-2 py-0.5 rounded-full bg-secondary/20 text-secondary font-semibold uppercase tracking-wider backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-muted text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-primary/15 text-primary hover:bg-primary/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </a>
                    )}
                    {project.linkedinUrl && (
                      <a
                        href={project.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-[hsl(210,80%,45%)]/15 text-[hsl(210,80%,45%)] hover:bg-[hsl(210,80%,45%)]/30 transition-all duration-300"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* See More Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AhmedRaza186"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            See More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
