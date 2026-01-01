"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";
import DraggableGT3RS from "../components/DraggableGT3RS";
import ScrollIndicator from "../components/ScrollIndicator";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Timeline } from "../components/ui/timeline";
import { ProjectCarousel } from "../components/ui/project-carousel";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { Github, Linkedin, MessageSquare, Download, Menu, Terminal, Code, Sun, Moon, Mail, ChevronDown, ExternalLink, Copy, Check } from "lucide-react";

// Sections data
const sections = [
  "Home",
  "About",
  "Projects"
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
  const [emailCopied, setEmailCopied] = useState(false);

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
      title: "Jul 2025 - Present",
      content: (
        <Card className="bg-background/40 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Software Engineer Intern, Enterprise Systems</CardTitle>
            <p className="text-xl font-semibold text-foreground">University of California, Merced</p>
            <p className="text-muted-foreground italic font-medium">
              Flask, Nginx, Gunicorn, Azure OAuth 2.0, GitHub Actions
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/10 shadow-inner bg-white/5 p-4">
              <Image src="/dine board soft launch-5.png" alt="UC Merced" fill className="object-contain p-2" />
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>UCM Dining Website development (1,800,000 page views this semester).</li>
              <li>Empathized with UCM Dining stakeholders to develop <span className="text-primary font-semibold">DineBoard</span>, an enterprise software system serving 2,500+ students daily.</li>
              <li>Built a secure REST API in <span className="text-primary font-semibold">Flask</span> with rate limiting, integrating stateless Azure OAuth 2.0 authentication.</li>
              <li>Automated CI/CD pipelines via GitHub Actions, and production hosting using Nginx with Gunicorn.</li>
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
            <CardTitle className="text-2xl font-bold text-primary">Event Organizer, Backend / Logistics</CardTitle>
            <p className="text-xl font-semibold text-foreground">HackMerced</p>
            <p className="text-muted-foreground italic font-medium">
              Event Management, Logistics, Backend Support
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/10 shadow-inner bg-white/5 p-4">
              <Image src="/HackMerced.png" alt="HackMerced" fill className="object-contain p-2" />
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Largest Hackathon in the San Joaquin Valley.</li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "May 2025 - Present",
      content: (
        <Card className="bg-background/40 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Published Machine Learning Research Intern</CardTitle>
            <p className="text-xl font-semibold text-foreground">UC Merced Mi3 Lab</p>
            <p className="text-muted-foreground italic font-medium">
              VideoLLaMA3-7B, VLLM, HPC, Python
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/10 shadow-inner bg-white/5 p-4">
              <Image src="/Research.png" alt="UC Merced Mi3 Lab" fill className="object-contain p-2" />
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Co-authored paper, published & presented at <span className="text-primary font-semibold">CVPR 2025 & ICCV 2025</span> conferences for our VLLM, which generates accurate real-time navigation instructions.</li>
              <li>Leveraged Linux HPC and prompt engineering to fine-tune <span className="text-primary font-semibold">VideoLLaMA3-7B</span>, outperforming GPT-4o baseline by 43.84%.</li>
              <li>Developed data visualization scripts using Pandas, Matplotlib & Python post-processing script for JSON data.</li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Jan 2024 - Present",
      content: (
        <Card className="bg-background/40 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Executive Board (Recruitment Co-Chair)</CardTitle>
            <p className="text-xl font-semibold text-foreground">Theta Tau - Mu Delta Chapter</p>
            <p className="text-muted-foreground italic font-medium">
              Leadership, Recruitment, Strategic Planning
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/10 shadow-inner bg-white/5 p-4">
              <Image src="/ThetaTau.png" alt="Theta Tau" fill className="object-contain p-2" />
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Led a committee of 7, managing a ~$2000 budget, and leading to a <span className="text-primary font-semibold">70% increase in chapter growth</span>.</li>
              <li>Organized presentations to 500+ students, with daily recruitment events with 50+ attendees.</li>
              <li>Documented a detailed strategic manual for future recruitment chairs to follow.</li>
              <li>Achieved 90% chapter growth, increasing membership from 20 to 38 members.</li>
              <li>Raised over $500 through organized food & unique merchandise fundraising.</li>
              <li>Edited and formatted 20+ resumes for active & potential members.</li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "May 2024 - May 2025",
      content: (
        <Card className="bg-background/40 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Product Development Intern</CardTitle>
            <p className="text-xl font-semibold text-foreground">Plant Culture Systems</p>
            <p className="text-muted-foreground italic font-medium">
              Flutterflow, Figma, Chatbot Development, LLMs
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/10 shadow-inner bg-white/5 p-4">
              <Image src="/plantCultureSys.jpeg" alt="Plant Culture Systems" fill className="object-contain p-2" />
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Designed & developed AI landing page for <span className="text-primary font-semibold">OurGarden</span>, using Flutterflow, integrating UI/UX feedback to enhance targeted user engagement for 500+ users.</li>
              <li>Spearheaded image analysis API feature as A.I. subteam lead, collaborating in Agile Scrum sprints to meet release goals.</li>
              <li>Utilized Firebase database in backend user chat management/recommended questions, & Figma for frontend planning.</li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Feb 2024 - Jun 2024",
      content: (
        <Card className="bg-background/40 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Web Developer</CardTitle>
            <p className="text-xl font-semibold text-foreground">PosTrue</p>
            <p className="text-muted-foreground italic font-medium">
              Django, PostgreSQL, HTML/CSS/JS, Bootstrap
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-white/10 shadow-inner bg-white/5 p-4">
              <Image src="/PostrueMain.png" alt="PosTrue" fill className="object-contain p-2" />
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Engineered a <span className="text-primary font-semibold">Django analytics dashboard</span> with PostgreSQL to visualize real-time sensor data for user posture insights.</li>
              <li>Designed UI/UX with HTML, CSS, JavaScript, and Bootstrap, following responsive design & brand standards.</li>
              <li>Designed to display postural analytics over time with data visualizations, ensuring a seamless user experience.</li>
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
    <main className="min-h-screen relative selection:bg-primary/20 transition-colors duration-500" style={{ backgroundColor, color: textColor }}>

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
            {sections.map((section) => {
              if (section === "About") {
                return (
                  <DropdownMenu key={section}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => scrollToSection("About")}
                        className={cn(
                          "rounded-full text-xs font-medium transition-all hover:bg-black/5 dark:hover:bg-white/10 px-3 py-1.5 h-8 gap-1",
                          activeSection === "About" || activeSection === "Experience" || activeSection === "Leadership" || activeSection === "Skills" ? "bg-black/5 dark:bg-white/15 text-primary shadow-sm" : "text-muted-foreground/80 hover:text-primary"
                        )}
                      >
                        About <ChevronDown className="w-3 h-3 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl p-1 w-40 mt-2">
                      <DropdownMenuItem onClick={() => scrollToSection("Experience")} className="cursor-pointer rounded-lg px-2 py-2 text-xs font-medium text-foreground/80 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary transition-colors focus:bg-black/5 dark:focus:bg-white/10 focus:text-primary">
                        Experience
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => scrollToSection("Leadership")} className="cursor-pointer rounded-lg px-2 py-2 text-xs font-medium text-foreground/80 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary transition-colors focus:bg-black/5 dark:focus:bg-white/10 focus:text-primary">
                        Leadership
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => scrollToSection("Resume")} className="cursor-pointer rounded-lg px-2 py-2 text-xs font-medium text-foreground/80 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary transition-colors focus:bg-black/5 dark:focus:bg-white/10 focus:text-primary">
                        Resume
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Button
                  key={section}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(section)}
                  className={cn(
                    "rounded-full text-xs font-medium transition-all hover:bg-black/5 dark:hover:bg-white/10 px-3 py-1.5 h-8",
                    activeSection === section ? "bg-black/5 dark:bg-white/15 text-primary shadow-sm" : "text-muted-foreground/80 hover:text-primary"
                  )}
                >
                  {section}
                </Button>
              );
            })}

            {/* Contact Dropdown - Integrated into list for better spacing */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-xs font-medium transition-all hover:bg-black/5 dark:hover:bg-white/10 px-3 py-1.5 h-8 gap-1 text-muted-foreground/80 hover:text-primary data-[state=open]:bg-black/5 dark:data-[state=open]:bg-white/10 data-[state=open]:text-primary"
                >
                  Contact <ChevronDown className="w-3 h-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl p-1 w-64 mt-2">
                <div className="relative flex items-center gap-1 p-1">
                  <DropdownMenuItem asChild className="flex-1">
                    <a
                      href="mailto:roshan.sanjeev@gmail.com"
                      className="flex items-center gap-2 cursor-pointer rounded-lg px-2 py-2 text-xs font-medium text-foreground/80 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary transition-colors focus:bg-black/5 dark:focus:bg-white/10 focus:text-primary truncate"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">roshan.sanjeev@gmail.com</span>
                    </a>
                  </DropdownMenuItem>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 shrink-0 text-muted-foreground hover:text-primary hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-all rounded-full"
                    title="Copy Email"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigator.clipboard.writeText("roshan.sanjeev@gmail.com");
                      setEmailCopied(true);
                      setTimeout(() => setEmailCopied(false), 2000);
                    }}
                  >
                    {emailCopied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </Button>
                </div>
                <DropdownMenuItem asChild>
                  <a href="https://www.linkedin.com/in/roshan-sanjeev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer rounded-lg px-2 py-2 text-xs font-medium text-foreground/80 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary transition-colors focus:bg-black/5 dark:focus:bg-white/10 focus:text-primary">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://github.com/RoshanSanjeev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer rounded-lg px-2 py-2 text-xs font-medium text-foreground/80 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary transition-colors focus:bg-black/5 dark:focus:bg-white/10 focus:text-primary">
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Vertical Separator */}
            <div className="h-4 w-[1px] bg-white/10 mx-1"></div>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10 hover:text-yellow-400 transition-all"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </motion.div>
      </div >

      {/* Mobile Menu Dropdown */}
      < AnimatePresence >
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
        )
        }
      </AnimatePresence >


      {/* HERO SECTION WITH AURORA & BOLD FADE-IN */}
      < AuroraBackground className="h-[calc(100vh-6rem)] mt-0 md:mt-0 w-full" id="Home" >
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
            <h1 className="text-6xl md:text-8xl font-bold text-center tracking-tighter pb-4 pr-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 via-neutral-500 to-neutral-200 dark:from-white dark:via-white dark:to-neutral-500 select-none opacity-80">
              Roshan Sanjeev
            </h1>
            {/* Job Title: Skinny, no container */}
            {/* Job Title: Skinny, no container */}
            <div className="mt-2 font-extralight text-xl md:text-3xl text-neutral-600 dark:text-neutral-300 text-center">
              Software Engineer → Published ML Researcher → AI Product Builder
            </div>

            {/* Blurb restored */}
            <p className="mt-4 text-sm md:text-md font-light text-neutral-500 dark:text-neutral-400 max-w-2xl text-center leading-relaxed">
              Built enterprise software serving 2,500+ daily users.
              <br />
              Published ML Research at CVPR & ICCV 2025.
              <br />
              Perplexity AI Ambassador, Hackathon Winner & Organizer, Theta Tau Executive Board
              <br />
              <br />
              <span className="font-normal italic">Seeking SWE & PM 2026 internships</span>
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator - Positioned at bottom */}
        {/* Scroll Indicator - Positioned at bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col gap-4 items-center z-20">
          <ScrollIndicator />
        </div>
      </AuroraBackground >

      <div className="relative z-10 flex flex-col items-center w-full max-w-[95rem] mx-auto px-4 pb-10">

        {/* PROJECTS - CLEAN GRID LAYOUT */}
        {/* PROJECTS - CLEAN GRID LAYOUT */}
        <section id="Projects" className="w-full max-w-6xl px-4 py-12 scroll-mt-24">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="h-10 w-1.5 rounded-full" style={{ background: gradient }} />
                <h2 className="text-4xl font-bold">Projects</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ClockIn */}
              <Card className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300">
                <a href="https://www.clockin.now/" target="_blank" rel="noopener noreferrer" className="block relative h-64 overflow-hidden">
                  <Image
                    src="/clockin.png"
                    alt="ClockIn"
                    fill
                    className="object-contain bg-neutral-900 group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold">ClockIn</CardTitle>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                        React Native
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-green-500/10 text-green-500 border border-green-500/20">
                        Subscription Based
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 flex-wrap">
                    An app that helps you stay accountable by recording timelapses of you working, so you can “clock in” with social proof.
                    <a href="https://www.clockin.now/" className="inline-flex items-center gap-1 text-primary hover:text-blue-500 hover:underline font-medium transition-colors" target="_blank" rel="noopener noreferrer">
                      clockin.now <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </CardHeader>
              </Card>

              {/* PoseVision */}
              <Card className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <ProjectCarousel
                    media={[
                      { type: "video", src: "/PoseVisionDemo.mp4", alt: "PoseVision Demo" },
                      { type: "image", src: "/PoseVision2.png", alt: "PoseVision Image", imageClassName: "object-contain bg-black" } // Assuming png
                    ]}
                  />
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
                    AI Personal Trainer utilizing computer vision for form correction. 1st Place @ SASEHacks.
                  </p>
                </CardHeader>
              </Card>

              {/* Credit Compass */}
              <Card className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <ProjectCarousel
                    media={[
                      { type: "image", src: "/Hackathon.png", alt: "Credit Compass Main" },
                      { type: "video", src: "/CreditCompassDemo.mov", alt: "Credit Compass Demo" }
                    ]}
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

              {/* SerenityHelp */}
              <Card className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <ProjectCarousel
                    media={[
                      { type: "image", src: "/serenity1.png", alt: "SerenityHelp 1", imageClassName: "object-cover object-top" },
                      { type: "image", src: "/serenity2.png", alt: "SerenityHelp 2", imageClassName: "object-cover object-top" },
                      { type: "image", src: "/serenity3.png", alt: "SerenityHelp 3", imageClassName: "object-cover object-top" }
                    ]}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold">SerenityHelp</CardTitle>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                        AI
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                        Mental Health
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI Voice Agent Helpline for mental health crises. Built with Vapi, Fetch.ai, Groq, and Deepgram. Triages calls using multimodal sentiment analysis for 4 dimensions of distress.
                  </p>
                </CardHeader>
              </Card>

            </div>
          </ScrollReveal>
        </section>

        {/* ABOUT ME - WITH PHOTO, EXPERIENCE & SKILLS */}
        <section id="About" className="w-full max-w-6xl px-4 py-12 scroll-mt-24 text-center mx-auto">
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

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-16">
              <p>
                My name is Roshan Sanjeev, a third year computer science and engineering major at the University of California, Merced and I am passionate about building products that connect technology with user experience. My technical background spans full-stack development, cloud systems, and AI/ML.
              </p>
              <p>
                Beyond technical work, I embrace leadership and outreach. As an organizer for HackMerced, I mentor students and create opportunities for them to grow.
              </p>
            </div>

            {/* EXPERIENCE in About */}
            <div id="Experience" className="mb-16 text-left scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1.5 rounded-full" style={{ background: gradient }} />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <Timeline data={experienceData} className="bg-transparent dark:bg-transparent" />
            </div>


            {/* LEADERSHIP in About */}
            <div id="Leadership" className="mb-16 text-left scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1.5 rounded-full" style={{ background: gradient }} />
                <h3 className="text-2xl font-bold">Leadership</h3>
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
            </div>

            {/* SKILLS in About */}
            <div className="text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1.5 rounded-full" style={{ background: gradient }} />
                <h3 className="text-2xl font-bold">Skills</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsCategories.map((category, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <h4 className="text-xl font-bold text-foreground border-b border-border pb-2">
                      {category.title}
                    </h4>
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

      {/* GT3RS - Below resume section */}
      <div className="relative w-full h-32 pointer-events-none -mt-40">
        <DraggableGT3RS />
      </div>
    </main >
  );
}
