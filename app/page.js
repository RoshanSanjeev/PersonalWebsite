"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";
import DraggableGT3RS from "../components/DraggableGT3RS";
import ScrollIndicator from "../components/ScrollIndicator";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Timeline } from "../components/ui/timeline";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { Github, Linkedin, MessageSquare, Download, Menu, Terminal, Code, Sun, Moon, Mail } from "lucide-react";

// Sections data
const sections = [
  "Home",
  "Experience",
  "Hackathons/Projects",
  "Leadership",
  "Skills",
  "About",
  "Resume"
];

// Helper for animations
const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const { gradient, backgroundColor, textColor, navColor, currentBackground, setCurrentBackground } = useTheme();
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Theme Function
  const toggleTheme = () => {
    // 0 is Black (Dark), 1 is White (Light)
    setCurrentBackground(currentBackground === 0 ? 1 : 0);
  };

  const isDarkMode = currentBackground === 0 || currentBackground === 3; // Assuming 0 and 3 are dark themes

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.05, rootMargin: "-10% 0px -40% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  // Timeline Data - Enhanced with Cards
  const experienceData = [
    {
      title: "Aug 2025 - Present",
      content: (
        <Card className="bg-background/40 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Software Engineer Intern @ UC Merced</CardTitle>
            <p className="text-muted-foreground italic font-medium">
              Flask, Redis, Nginx, React, Agile, REST APIs
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/10 shadow-inner bg-black/20">
              <Image src="/dine board soft launch-5.png" alt="DineBoard" fill className="object-contain" />
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Built <span className="text-primary font-semibold">DineBoard</span> enterprise system serving 2,500+ students daily.</li>
              <li>Engineered secure REST APIs with <span className="text-primary font-semibold">OAuth 2.0</span>, increasing productivity by 80%.</li>
              <li>Architected scalable <span className="text-primary font-semibold">Flask/Redis</span> backend for high-performance data handling.</li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Jun 2025 - Present",
      content: (
        <Card className="bg-background/40 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">ML Research Intern @ Mi3 Lab</CardTitle>
            <p className="text-muted-foreground italic font-medium">
              VLLM, CVPR, ICCV, GPT-4o, VideoLLaMa
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/10 shadow-inner bg-black/20">
              <Image src="/Research.png" alt="Research" fill className="object-contain" />
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Co-authored <span className="text-primary font-semibold">VLLM paper</span> published at CVPR & ICCV 2025.</li>
              <li>Outperformed <span className="text-primary font-semibold">GPT-4o by 43.84%</span> finetuning VideoLLaMa3-7B.</li>
              <li>Built complex data visualizations for international conference presentations.</li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Jul 2024 - Oct 2024",
      content: (
        <Card className="bg-background/40 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">SWE Intern @ Plant Culture Systems</CardTitle>
            <p className="text-muted-foreground italic font-medium">
              Flutterflow, Firebase, Figma, AI
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/10 shadow-inner bg-black/20">
              <Image src="/plantCultureSys.jpeg" alt="Plant Culture" fill className="object-contain" />
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Designed AI landing page for <span className="text-primary font-semibold">OurGarden</span>, enhancing engagement for 500+ users.</li>
              <li>Led image analysis feature using computer vision, improving app engagement by 50%.</li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Mar 2024 - Jun 2024",
      content: (
        <Card className="bg-background/40 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">SWE Intern @ PosTrue</CardTitle>
            <p className="text-muted-foreground italic font-medium">
              Django, Bootstrap, PostgreSQL, Real-time Analytics
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/10 shadow-inner bg-black/20">
              <Image src="/PostrueMain.png" alt="PosTrue" fill className="object-contain" />
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Developed Django website with <span className="text-primary font-semibold">real-time wearable sensor analytics</span>.</li>
              <li>Designed responsive UI/UX with Bootstrap, reducing bounce rate by 25%.</li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
  ];

  // Bento Grid Data
  const projectsData = [
    {
      title: "PoseVision",
      description: "AI Injury Prevention Tool. 1st Place @ SASEHacks.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[20rem] rounded-xl bg-black border border-transparent dark:border-white/[0.2] overflow-hidden">
          <video controls className="w-full h-full object-contain">
            <source src="/PoseVisionDemo.mp4" type="video/mp4" />
          </video>
        </div>
      ),
      icon: <Terminal className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
    {
      title: "Credit Compass",
      description: "AI Personalized Credit Recommendations. Alumni Prize @ HackMercedX.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-neutral-200 dark:border-white/[0.2]">
          <Image src="/Hackathon.png" alt="Credit Compass" width={400} height={300} className="w-full h-full object-cover" />
        </div>
      ),
      icon: <Code className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
  ];

  // Skills Data - Categorized
  const skillsCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Django", "Flask", "TailwindCSS", "Node.js"]
    },
    {
      title: "AI & Data Science",
      skills: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "OpenCV", "Scikit-learn"]
    },
    {
      title: "Tools & Cloud",
      skills: ["Git", "Docker", "AWS", "Firebase", "PostgreSQL", "Redis", "Linux"]
    },
    {
      title: "Design & Soft Skills",
      skills: ["Figma", "Product Management", "Agile", "User Research", "Public Speaking"]
    }
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-primary/20 transition-colors duration-500" style={{ backgroundColor, color: textColor }}>

      {/* FLOATING GLASS NAVIGATION */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:auto pointer-events-none flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="pointer-events-auto bg-background/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-2 py-2 flex items-center gap-2 md:gap-4 overflow-x-auto max-w-[95vw]"
          style={{ backgroundColor: navColor }}
        >
          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <Button
                key={section}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(section)}
                className={cn(
                  "rounded-full text-xs font-medium transition-all hover:bg-white/10 px-3 py-1.5 h-8",
                  activeSection === section ? "bg-white/15 text-primary shadow-sm" : "text-muted-foreground/80 hover:text-primary"
                )}
              >
                {section}
              </Button>
            ))}
          </div>

          {/* Mobile Nav Trigger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full px-3 h-8 flex items-center gap-2 hover:bg-white/10"
            >
              <Menu className="w-4 h-4" />
              <span className="text-xs font-medium">{activeSection}</span>
            </Button>
          </div>

          {/* Vertical Separator */}
          <div className="h-4 w-[1px] bg-white/10 mx-1 hidden md:block"></div>

          {/* Socials & Theme Toggle */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-white/10 hover:text-primary hover:scale-110 transition-all" asChild>
              <a href="https://github.com/RoshanSanjeev" target="_blank" rel="noopener noreferrer"> <Github className="w-4 h-4" /> </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-white/10 hover:text-primary hover:scale-110 transition-all" asChild>
              <a href="https://www.linkedin.com/in/roshan-sanjeev/" target="_blank" rel="noopener noreferrer"> <Linkedin className="w-4 h-4" /> </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-white/10 hover:text-primary hover:scale-110 transition-all" asChild>
              <a href="mailto:roshan@example.com" target="_blank" rel="noopener noreferrer"> <Mail className="w-4 h-4" /> </a>
            </Button>

            {/* Theme Toggle Button */}
            <div className="w-[1px] bg-white/10 h-4 mx-1"></div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 rounded-full hover:bg-white/10 hover:text-yellow-400 transition-all"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-64 md:hidden pointer-events-auto"
          >
            <div className="bg-background/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-2 flex flex-col gap-1">
              {sections.map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  onClick={() => scrollToSection(section)}
                  className={cn(
                    "w-full justify-start rounded-xl text-sm h-10 px-4",
                    activeSection === section ? "bg-white/15 text-primary" : "text-muted-foreground hover:bg-white/10"
                  )}
                >
                  {section}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* HERO SECTION WITH AURORA & BOLD FADE-IN */}
      <AuroraBackground className="h-[calc(100vh-6rem)] mt-0 md:mt-0 w-full" id="Home">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="flex flex-col items-center z-20 relative">
            {/* Name: Fading effect, smaller, cleaner */}
            <h1 className="text-6xl md:text-8xl font-bold text-center tracking-tighter pb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 via-neutral-500 to-neutral-200 select-none opacity-80">
              Roshan Sanjeev
            </h1>
            {/* Job Title: Skinny, no container */}
            <div className="mt-2 font-extralight text-xl md:text-3xl text-neutral-600 text-center">
              Product Manager & Software Engineer
            </div>

            {/* Blurb restored */}
            <p className="mt-4 text-sm md:text-lg font-light text-neutral-500 max-w-lg text-center leading-relaxed">
              I blend technical expertise with user empathy.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator - Positioned at bottom */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col gap-4 items-center z-20">
          <ScrollIndicator />
          <DraggableGT3RS />
        </div>
      </AuroraBackground>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[95rem] mx-auto px-4 pb-10">

        {/* EXPERIENCE - TIMELINE WITH CARDS */}
        <section id="Experience" className="w-full max-w-7xl px-4 py-12 scroll-mt-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4 pl-4 md:pl-10">
              <div className="h-10 w-1.5 rounded-full" style={{ background: gradient }} />
              <h2 className="text-4xl font-bold">Experience</h2>
            </div>
            {/* Timeline with new Card-based data */}
            <Timeline data={experienceData} className="bg-transparent dark:bg-transparent" />
          </ScrollReveal>
        </section>

        {/* PROJECTS - CLEAN GRID LAYOUT */}
        <section id="Hackathons/Projects" className="w-full max-w-6xl px-4 py-12 scroll-mt-24">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="h-10 w-1.5 rounded-full" style={{ background: gradient }} />
                <h2 className="text-4xl font-bold">Projects</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PoseVision */}
              <Card className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 bg-black overflow-hidden">
                  <video controls className="w-full h-full object-contain">
                    <source src="/PoseVisionDemo.mp4" type="video/mp4" />
                  </video>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold">PoseVision</CardTitle>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                        Python
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                        OpenCV
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI Injury Prevention Tool. 1st Place @ SASEHacks.
                  </p>
                </CardHeader>
              </Card>

              {/* Credit Compass */}
              <Card className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/Hackathon.png"
                    alt="Credit Compass"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold">Credit Compass</CardTitle>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                        React
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                        Flask
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI Personalized Credit Recommendations. Alumni Prize @ HackMercedX.
                  </p>
                </CardHeader>
              </Card>
            </div>
          </ScrollReveal>
        </section>

        {/* LEADERSHIP */}
        <section id="Leadership" className="w-full max-w-6xl px-4 py-12 scroll-mt-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-10 w-1.5 rounded-full" style={{ background: gradient }} />
              <h2 className="text-4xl font-bold">Leadership</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "HackMercedX Organizer", desc: "Managed backend, secured sponsorships.", img: "/HackathonOrganizer.png" },
                { title: "Perplexity Ambassador", desc: "AI Marketing & Strategy.", img: "/PerplexPrese.jpeg" },
                { title: "Theta Tau Exec Board", desc: "Recruitment & Professional Dev.", img: "/SHPE.png" }
              ].map((item, i) => (
                <Card key={i} className="bg-background/50 backdrop-blur-sm border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="h-48 w-full relative">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* SKILLS - CATEGORIZED GRID */}
        <section id="Skills" className="w-full max-w-6xl px-4 py-12 scroll-mt-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-10 w-1.5 rounded-full" style={{ background: gradient }} />
              <h2 className="text-4xl font-bold">Skills</h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsCategories.map((category, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-foreground border-b border-border pb-2">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-default select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ABOUT ME - WITH PHOTO */}
        <section id="About" className="w-full max-w-4xl px-4 py-12 scroll-mt-24 text-center mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>

            {/* Photo - Subtle Professional Animation */}
            <div className="mb-8 flex justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.6, ease: "easeOut" }
                }}
              >
                {/* Subtle static glow */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 opacity-30 blur-xl" />

                {/* Avatar with clean border */}
                <Avatar className="w-40 h-40 lg:w-56 lg:h-56 border-4 border-white dark:border-neutral-800 shadow-2xl relative ring-1 ring-neutral-200 dark:ring-neutral-700">
                  <AvatarImage src="/pfp.png" alt="Roshan Sanjeev" className="object-cover" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
              </motion.div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My name is Roshan Sanjeev, a third year computer science and engineering major at the University of California, Merced and I am passionate about building products that connect technology with user experience. My technical background spans full-stack development, cloud systems, and AI/ML.
              </p>
              <p>
                Beyond technical work, I embrace leadership and outreach. As an organizer for HackMerced, I mentor students and create opportunities for them to grow.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* RESUME */}
        <section id="Resume" className="w-full max-w-6xl px-4 py-12 pb-40 scroll-mt-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-10 w-1.5 rounded-full" style={{ background: gradient }} />
              <h2 className="text-4xl font-bold">Resume</h2>
            </div>
            <Card className="border-border/50 bg-white shadow-2xl overflow-hidden">
              <div className="w-full h-[800px]">
                <iframe src="/RoshanSanjeev_Resume.pdf" className="w-full h-full" title="Roshan Sanjeev Resume" />
              </div>
              <div className="p-8 flex justify-center bg-neutral-50 border-t border-neutral-200">
                <Button
                  size="lg"
                  className="px-8 h-12 rounded-full bg-white text-neutral-800 text-base font-medium border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-neutral-50 hover:scale-[1.02] transition-all duration-300"
                  asChild
                >
                  <a href="/RoshanSanjeev_Resume.pdf" download="RoshanSanjeev_Resume.pdf" className="flex items-center gap-3">
                    <Download className="w-4 h-4 text-neutral-500" />
                    <span className="tracking-tight">Download Resume</span>
                  </a>
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </section>

      </div>
    </main>
  );
}
