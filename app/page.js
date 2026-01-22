"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import DraggableGT3RS from "../components/DraggableGT3RS";
import ScrollIndicator from "../components/ScrollIndicator";
import { AuroraBackground } from "../components/ui/aurora-background";
import { ProjectCarousel } from "../components/ui/project-carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

// Lucide Icons
import {
  Github, Linkedin, Download, Sun, Moon, Mail, ChevronDown, Copy, Check, ArrowUpRight, Menu, X
} from "lucide-react";

// Real Brand Icons from react-icons
import {
  SiPython, SiReact, SiFlask, SiDjango, SiPostgresql, SiRedis, SiDocker,
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiFirebase,
  SiTensorflow, SiFigma, SiGit, SiNginx, SiOpenai, SiNodedotjs,
  SiPandas, SiNumpy, SiOpencv, SiAmazon, SiLinux, SiFlutter, SiSupabase,
  SiPytorch, SiCplusplus, SiHtml5, SiBootstrap
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

// Sections
const sections = ["Home", "Projects", "Experience"];

// Scroll animation helper
const ScrollReveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Resume Viewer Component with Tabs
const ResumeViewer = ({ isDarkMode }) => {
  const [activeResume, setActiveResume] = useState("technical");

  const resumes = [
    { id: "technical", label: "Technical", file: "/RoshanSanjeev_Resume_Technical.pdf" },
    { id: "product", label: "Product & Consulting", file: "/RoshanSanjeev_Resume.pdf" },
  ];

  const currentResume = resumes.find(r => r.id === activeResume);

  return (
    <Card className="border-border/50 overflow-hidden">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-2 p-4 bg-secondary/30 border-b border-border/50">
        {resumes.map((resume) => (
          <button
            key={resume.id}
            onClick={() => setActiveResume(resume.id)}
            className="px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200"
            style={activeResume === resume.id
              ? { backgroundColor: isDarkMode ? '#ffffff' : '#171717', color: isDarkMode ? '#171717' : '#ffffff', border: 'none' }
              : { backgroundColor: 'transparent', color: isDarkMode ? '#9ca3af' : '#6b7280', border: `1px solid ${isDarkMode ? '#404040' : '#d1d5db'}` }
            }
          >
            {resume.label}
          </button>
        ))}
      </div>

      {/* PDF Viewer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeResume}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full h-[700px] bg-white"
        >
          <iframe
            src={currentResume.file}
            className="w-full h-full"
            title={`${currentResume.label} Resume`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Download Button */}
      <div className="p-6 flex justify-center bg-secondary/30 border-t border-border/50">
        <Button asChild className="rounded-full px-6">
          <a href={currentResume.file} download className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download {currentResume.label} Resume
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default function Home() {
  const { gradient, backgroundColor, textColor, navColor, currentBackground, setCurrentBackground } = useTheme();
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const toggleTheme = () => setCurrentBackground(currentBackground === 0 ? 1 : 0);
  const isDarkMode = currentBackground === 0 || currentBackground === 3;

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }),
      { threshold: 0.05, rootMargin: "-10% 0px -40% 0px" }
    );
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    // For About section, scroll to bottom of page
    if (sectionId === "About") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 100;
        const pos = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: "smooth" });
      }
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  // Real Tech Icons Map
  const techIcons = {
    "Python": { icon: SiPython, color: "#3776AB" },
    "React": { icon: SiReact, color: "#61DAFB" },
    "React Native": { icon: SiReact, color: "#61DAFB" },
    "Flask": { icon: SiFlask, color: isDarkMode ? "#FFFFFF" : "#000000" },
    "Django": { icon: SiDjango, color: isDarkMode ? "#44B78B" : "#092E20" },
    "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
    "Redis": { icon: SiRedis, color: "#DC382D" },
    "Docker": { icon: SiDocker, color: "#2496ED" },
    "TypeScript": { icon: SiTypescript, color: "#3178C6" },
    "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
    "Next.js": { icon: SiNextdotjs, color: isDarkMode ? "#FFFFFF" : "#000000" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
    "TailwindCSS": { icon: SiTailwindcss, color: "#06B6D4" },
    "Firebase": { icon: SiFirebase, color: "#FFCA28" },
    "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
    "Figma": { icon: SiFigma, color: "#F24E1E" },
    "Git": { icon: SiGit, color: "#F05032" },
    "Nginx": { icon: SiNginx, color: "#009639" },
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    "Pandas": { icon: SiPandas, color: "#150458" },
    "NumPy": { icon: SiNumpy, color: "#013243" },
    "OpenCV": { icon: SiOpencv, color: "#5C3EE8" },
    "AWS": { icon: SiAmazon, color: "#FF9900" },
    "Linux": { icon: SiLinux, color: "#FCC624" },
    "Supabase": { icon: SiSupabase, color: "#3FCF8E" },
    "PyTorch": { icon: SiPytorch, color: "#EE4C2C" },
    "C++": { icon: SiCplusplus, color: "#00599C" },
    "HTML/CSS": { icon: SiHtml5, color: "#E34F26" },
    "Bootstrap": { icon: SiBootstrap, color: "#7952B3" },
    "Flutterflow": { icon: SiFlutter, color: "#02569B" },
    "Azure OAuth": { icon: VscAzure, color: "#0078D4" },
    "GitHub Actions": { icon: Github, color: isDarkMode ? "#FFFFFF" : "#181717" },
    "ChatGPT API": { icon: SiOpenai, color: "#412991" },
    "OpenAI": { icon: SiOpenai, color: "#412991" },
    "Scikit-learn": { icon: SiPython, color: "#F7931E" },
  };

  const getTechIcon = (tech) => {
    const mapping = techIcons[tech];
    if (mapping) {
      const IconComponent = mapping.icon;
      return <IconComponent style={{ color: mapping.color }} className="w-4 h-4" />;
    }
    return null;
  };

  // Experience Data
  const experienceData = [
    {
      role: "Software Engineer Intern",
      company: "University of California, Merced",
      team: "Enterprise Application Services",
      date: "Aug 2025 - Present",
      current: true,
      image: "/dine board soft launch-5.png",
      tech: ["Flask", "React", "Redis", "Azure OAuth", "Nginx", "GitHub Actions"],
      highlights: [
        { value: "2,500+", label: "daily users" },
        { value: "80%", label: "productivity gain" },
      ],
      bullets: [
        "Built enterprise web apps serving 2,500+ daily users, resolving Jira tickets in Agile sprints",
        "Integrated Azure Entra ID OAuth 2.0, driving 80% staff productivity increase",
        "Architected Nginx + Gunicorn hosting with Flask/Redis backend & React frontend",
      ]
    },
    {
      role: "Machine Learning Research Intern",
      company: "Mi3 Lab, UC Merced",
      team: "Computer Vision Research",
      date: "Jun 2025 - Present",
      current: true,
      images: [
        { type: "image", src: "/Research.png", alt: "Research" },
        { type: "image", src: "/Mi31.jpeg", alt: "ICCV 2025 Honolulu", imageClassName: "object-cover object-left" }
      ],
      tech: ["Python", "TensorFlow", "Pandas"],
      highlights: [
        { value: "43.84%", label: "better than GPT-4o" },
        { value: "2", label: "publications" },
      ],
      bullets: [
        "Published at CVPR 2025 & ICCV 2025 for VLLM navigation for visually impaired users",
        "Outperformed GPT-4o baseline by 43.84% via frame sampling & model finetuning",
        "Developed visualizations with Pandas/Matplotlib for paper & conference presentation",
      ]
    },
    {
      role: "Product Development Intern",
      company: "Plant Culture Systems",
      team: "AI Product Team Lead",
      date: "Jul 2024 - Oct 2024",
      image: "/plantCultureSys.jpeg",
      tech: ["Flutterflow", "Firebase", "ChatGPT API", "Figma"],
      highlights: [
        { value: "500+", label: "users" },
        { value: "50%", label: "engagement lift" },
      ],
      bullets: [
        "Designed AI landing page for OurGarden using Flutterflow, engaging 500+ users",
        "Led image analysis feature as A.I. subteam lead, improving engagement by 50%",
        "Integrated ChatGPT API & Firebase, designed component system in Figma",
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "PosTrue",
      team: "Analytics Platform",
      date: "Mar 2024 - Jun 2024",
      image: "/PostrueMain.png",
      tech: ["Django", "PostgreSQL", "JavaScript", "Bootstrap"],
      highlights: [
        { value: "Real-time", label: "analytics" },
      ],
      bullets: [
        "Translated customer requirements into technical specs for posture analytics",
        "Designed responsive UI with HTML, CSS, JavaScript & Bootstrap",
        "Built PostgreSQL analytics dashboard for real-time sensor visualization",
      ]
    }
  ];

  // Leadership Data
  const leadershipData = [
    {
      title: "AI Campus Ambassador",
      org: "Perplexity",
      date: "Sept 2025 - Present",
      logo: "/PerplexLogo.webp",
      logoStyle: "invert", // Invert for dark backgrounds
      images: [
        { type: "image", src: "/perplexity2.jpeg", alt: "Perplexity Campus Partner Presentation" },
        { type: "image", src: "/PerplexPrese.jpeg", alt: "Perplexity Presentation" }
      ],
      highlights: [{ value: "300+", label: "students engaged" }],
      description: "Developing AI adoption strategy for Comet browser through tailored presentations, working toward 500 sign-ups for hackathon sponsorship."
    },
    {
      title: "Executive Board & Recruitment Chair",
      org: "Theta Tau Engineering Fraternity",
      date: "Mar 2024 - Present",
      logo: "/ThetaTau.png",
      images: [
        { type: "image", src: "/ThetaTau0.png", alt: "Theta Tau Recruitment Booth", imageClassName: "object-cover" },
        { type: "image", src: "/ThetaTau2.jpeg", alt: "Theta Tau Presentation", imageClassName: "object-cover", imageStyle: { objectPosition: "center 40%" } },
        { type: "image", src: "/ThetaTau1.jpeg", alt: "Theta Tau Brothers", imageClassName: "object-cover", imageStyle: { objectPosition: "center 20%" } }
      ],
      highlights: [{ value: "70%", label: "chapter growth" }, { value: "$2K", label: "budget" }],
      description: "Led committee of 9, grew membership from ~10 to 40+ members. Organized presentations reaching 1,000+ students."
    },
    {
      title: "Hackathon Organizer",
      org: "HackMerced",
      date: "2024 - Present",
      logo: "/HackMerced.png",
      image: "/HackathonOrganizer.png",
      highlights: [{ value: "500+", label: "participants" }],
      description: "Organizing the largest hackathon in the San Joaquin Valley, coordinating logistics, sponsors, and workshops to foster student innovation."
    }
  ];

  // Skills with icons
  const skillsData = [
    { category: "Languages", skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
    ]},
    { category: "Frameworks", skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: isDarkMode ? "#fff" : "#000" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Flask", icon: SiFlask, color: isDarkMode ? "#fff" : "#000" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    ]},
    { category: "AI/ML", skills: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
    ]},
    { category: "Infrastructure", skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ]},
  ];

  return (
    <main className="min-h-screen relative selection:bg-primary/20 transition-colors duration-500" style={{ backgroundColor, color: textColor }}>

      {/* NAVIGATION */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 pointer-events-none flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pointer-events-auto bg-background/70 backdrop-blur-2xl border border-border/50 shadow-xl rounded-full px-3 py-2 flex items-center gap-1"
          style={{ backgroundColor: navColor }}
        >
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => {
              if (section === "Projects") {
                return (
                  <div key={section} className="flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection("Projects")}
                      className={cn(
                        "rounded-full text-sm font-medium px-4 py-2 h-9 transition-all rounded-r-none pr-2",
                        activeSection === "Projects"
                          ? "bg-foreground/10 text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                      )}
                    >
                      Projects
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "rounded-full text-sm font-medium px-2 py-2 h-9 transition-all rounded-l-none",
                            activeSection === "Projects"
                              ? "bg-foreground/10 text-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                          )}
                        >
                          <ChevronDown className="w-3 h-3 opacity-60" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="center"
                        className="backdrop-blur-xl rounded-xl p-1.5 min-w-[160px] mt-2 border"
                        style={{
                          backgroundColor: isDarkMode ? 'rgba(23, 23, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <DropdownMenuItem asChild>
                          <a
                            href="https://www.clockin.now/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium flex items-center justify-between"
                            style={{ color: isDarkMode ? '#ffffff' : '#171717' }}
                          >
                            ClockIn
                            <ArrowUpRight className="w-3 h-3 opacity-60" />
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/projects/posevision"
                            className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium"
                            style={{ color: isDarkMode ? '#ffffff' : '#171717' }}
                          >
                            PoseVision
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/projects/creditcompass"
                            className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium"
                            style={{ color: isDarkMode ? '#ffffff' : '#171717' }}
                          >
                            Credit Compass
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/projects/serenityhelp"
                            className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium"
                            style={{ color: isDarkMode ? '#ffffff' : '#171717' }}
                          >
                            SerenityHelp
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                );
              }
              if (section === "Experience") {
                return (
                  <div key={section} className="flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection("Experience")}
                      className={cn(
                        "rounded-full text-sm font-medium px-4 py-2 h-9 transition-all rounded-r-none pr-2",
                        activeSection === "Experience" || activeSection === "Leadership" || activeSection === "Resume" || activeSection === "About"
                          ? "bg-foreground/10 text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                      )}
                    >
                      Experience
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "rounded-full text-sm font-medium px-2 py-2 h-9 transition-all rounded-l-none",
                            activeSection === "Experience" || activeSection === "Leadership" || activeSection === "Resume" || activeSection === "About"
                              ? "bg-foreground/10 text-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                          )}
                        >
                          <ChevronDown className="w-3 h-3 opacity-60" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="center"
                        className="backdrop-blur-xl rounded-xl p-1.5 min-w-[140px] mt-2 border"
                        style={{
                          backgroundColor: isDarkMode ? 'rgba(23, 23, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {["Leadership", "Resume", "About"].map((item) => (
                          <DropdownMenuItem
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium"
                            style={{ color: isDarkMode ? '#ffffff' : '#171717' }}
                          >
                            {item}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                );
              }
              return (
                <Button
                  key={section}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(section)}
                  className={cn(
                    "rounded-full text-sm font-medium px-4 py-2 h-9 transition-all",
                    activeSection === section
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  {section}
                </Button>
              );
            })}

            {/* Contact */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-full text-sm font-medium px-4 py-2 h-9 gap-1 text-muted-foreground hover:text-foreground">
                  Contact <ChevronDown className="w-3 h-3 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="backdrop-blur-xl rounded-xl p-1.5 w-72 mt-2 border"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(23, 23, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  color: isDarkMode ? '#ffffff' : '#171717'
                }}
              >
                <div className="flex items-center gap-2 p-2">
                  <a href="mailto:roshan.sanjeev@gmail.com" className="flex-1 flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    roshan.sanjeev@gmail.com
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => {
                      navigator.clipboard.writeText("roshan.sanjeev@gmail.com");
                      setEmailCopied(true);
                      setTimeout(() => setEmailCopied(false), 2000);
                    }}
                  >
                    {emailCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <DropdownMenuItem asChild>
                  <a href="https://www.linkedin.com/in/roshan-sanjeev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2" style={{ color: isDarkMode ? '#ffffff' : '#171717' }}>
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://github.com/RoshanSanjeev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2" style={{ color: isDarkMode ? '#ffffff' : '#171717' }}>
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="h-5 w-px bg-border/50 mx-2" />

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9 rounded-full">
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9 rounded-full">
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-9 w-9 rounded-full">
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-72 md:hidden px-4"
          >
            <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl p-2 flex flex-col gap-1" style={{ backgroundColor: navColor }}>
              {sections.map((section) => (
                <Button key={section} variant="ghost" onClick={() => scrollToSection(section)}
                  className={cn("w-full justify-start rounded-xl text-sm h-10 px-4",
                    activeSection === section ? "bg-foreground/10" : ""
                  )}>
                  {section}
                </Button>
              ))}
              <div className="h-px bg-border/50 my-1" />
              {["Leadership", "Resume", "About"].map((item) => (
                <Button key={item} variant="ghost" onClick={() => scrollToSection(item)}
                  className="w-full justify-start rounded-xl text-sm h-10 px-4 text-muted-foreground">
                  {item}
                </Button>
              ))}
              <div className="h-px bg-border/50 my-1" />
              <div className="px-4 py-2 flex items-center gap-3">
                <a href="https://www.linkedin.com/in/roshan-sanjeev/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/RoshanSanjeev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:roshan.sanjeev@gmail.com" className="text-muted-foreground hover:text-foreground">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <AuroraBackground className="min-h-screen w-full" id="Home">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center justify-center px-4 text-center"
        >
          {/* Name with gradient fade */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent select-none"
            style={{
              backgroundImage: isDarkMode
                ? 'linear-gradient(to bottom, #ffffff, #ffffff, #a3a3a3)'
                : 'linear-gradient(to bottom, #171717, #737373, #d4d4d4)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Roshan Sanjeev
          </motion.h1>

          {/* Title with arrows */}
          <motion.p
            className="mt-4 text-lg sm:text-xl md:text-2xl font-light"
            style={{ color: isDarkMode ? '#d4d4d4' : '#525252' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Software Engineer → Published ML Researcher → AI Product Builder
          </motion.p>

          {/* Blurb - line by line */}
          <motion.div
            className="mt-6 text-sm md:text-base font-light max-w-2xl leading-relaxed"
            style={{ color: isDarkMode ? '#a3a3a3' : '#737373' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>Built enterprise software serving 2,500+ daily users.</p>
            <p>Published ML Research at CVPR & ICCV 2025.</p>
            <p>Perplexity AI Ambassador, Hackathon Winner & Organizer, Theta Tau Executive Board</p>
          </motion.div>

          {/* Seeking internships */}
          <motion.p
            className="mt-6 text-sm md:text-base font-medium italic"
            style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Seeking SWE & PM 2026 internships
          </motion.p>

        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <ScrollIndicator />
        </motion.div>
      </AuroraBackground>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* PROJECTS - Bento Box Layout */}
        <section id="Projects" className="py-24 scroll-mt-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-12 w-1 rounded-full bg-gradient-to-b from-primary to-primary/20" />
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Projects</h2>
            </div>
          </ScrollReveal>

          {/* Bento Grid - Asymmetric puzzle layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-[180px] md:auto-rows-[200px]">

            {/* ClockIn - Hero card, spans 8 cols */}
            <ScrollReveal delay={0.1} className="md:col-span-8 md:row-span-2">
              <a href="https://www.clockin.now/" target="_blank" rel="noopener noreferrer" className="group block h-full">
                <div className="relative h-full rounded-2xl overflow-hidden border border-border/30 hover:border-primary/40 transition-all duration-500 cursor-pointer">
                  <Image
                    src="/clockin.png"
                    alt="ClockIn"
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">ClockIn</h3>
                      <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
                        LIVE
                      </span>
                    </div>
                    <p className="text-white/80 text-sm md:text-base max-w-lg mb-3 leading-relaxed">
                      Shipping Accountability SaaS webapp that makes focusing on work effortless. Turns every focus session into time-lapse recordings, applying body doubling strategy endorsed by ADHD experts and clinical psychologists nationwide.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {["React Native", "Next.js", "TypeScript", "Supabase"].map((tech) => (
                          <span key={tech} className="flex items-center gap-1.5 px-2 py-1 text-xs bg-white/10 backdrop-blur-sm rounded-full text-white/90 border border-white/10">
                            {getTechIcon(tech)}
                            <span className="hidden sm:inline">{tech}</span>
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1.5 text-white font-medium text-sm group-hover:gap-2 transition-all">
                        clockin.now <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* PoseVision - Tall vertical card, spans 4 cols, 2 rows */}
            <ScrollReveal delay={0.15} className="md:col-span-4 md:row-span-2">
              <Link href="/projects/posevision" className="block h-full">
                <div className="group relative h-full rounded-2xl overflow-hidden border border-border/30 hover:border-amber-500/40 transition-all duration-500 cursor-pointer">
                  <ProjectCarousel
                    media={[
                      { type: "video", src: "/PoseVisionDemo.mp4", alt: "PoseVision Demo" },
                      { type: "image", src: "/PoseVision2.png", alt: "PoseVision", imageClassName: "object-cover" }
                    ]}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10 pointer-events-none">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">PoseVision</h3>
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
                        1st Place
                      </span>
                    </div>
                    <p className="text-white/70 text-xs md:text-sm mb-3 line-clamp-2">
                      AI personal trainer with real-time form correction via computer vision
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["Python", "OpenCV", "Flask"].map((t) => (
                        <span key={t} className="flex items-center gap-1 px-2 py-0.5 text-[10px] bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/10">
                          {getTechIcon(t)}
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Credit Compass - Wide horizontal card */}
            <ScrollReveal delay={0.2} className="md:col-span-5 md:row-span-1">
              <Link href="/projects/creditcompass" className="block h-full">
                <div className="group relative h-full rounded-2xl overflow-hidden border border-border/30 hover:border-blue-500/40 transition-all duration-500 cursor-pointer">
                  <ProjectCarousel
                    media={[
                      { type: "image", src: "/Hackathon.png", alt: "Credit Compass", imageClassName: "object-cover" },
                      { type: "video", src: "/CreditCompassDemo.mov", alt: "Demo" }
                    ]}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none z-10" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-lg md:text-xl font-bold text-white">Credit Compass</h3>
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-sm">
                        Winner
                      </span>
                    </div>
                    <p className="text-white/70 text-xs mb-2 line-clamp-1">
                      AI-powered personalized credit card recommendations
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["React", "Flask", "Python"].map((t) => (
                        <span key={t} className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/10">
                          {getTechIcon(t)}
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* SerenityHelp - Square-ish card */}
            <ScrollReveal delay={0.25} className="md:col-span-7 md:row-span-1">
              <Link href="/projects/serenityhelp" className="block h-full">
                <div className="group relative h-full rounded-2xl overflow-hidden border border-border/30 hover:border-purple-500/40 transition-all duration-500 cursor-pointer">
                  <ProjectCarousel
                    media={[
                      { type: "image", src: "/serenity2.png", alt: "SerenityHelp", imageClassName: "object-cover" },
                      { type: "image", src: "/serenity1.png", alt: "SerenityHelp 1", imageClassName: "object-cover" },
                      { type: "image", src: "/serenity3.png", alt: "SerenityHelp 3", imageClassName: "object-cover" }
                    ]}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none z-10" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-lg md:text-xl font-bold text-white">SerenityHelp</h3>
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-purple-600 text-white border border-purple-400/50 shadow-lg">
                        Hackathon
                      </span>
                    </div>
                    <p className="text-white/70 text-xs mb-2 line-clamp-1">
                      AI voice agent for mental health crisis intervention with multimodal sentiment analysis
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["Python", "React"].map((t) => (
                        <span key={t} className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/10">
                          {getTechIcon(t)}
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="Experience" className="py-24 scroll-mt-24">
          <div className="mb-24">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-12 w-1 rounded-full bg-gradient-to-b from-primary to-primary/20" />
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold">Experience</h3>
                  <p className="text-sm text-muted-foreground mt-1">Professional journey</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-border transition-all duration-300">
                    <div className="grid md:grid-cols-12 gap-0">
                      {/* Image or Carousel */}
                      <div className="relative md:col-span-4 h-48 md:h-auto md:min-h-[260px] overflow-hidden" style={{ backgroundColor: isDarkMode ? '#171717' : '#e5e5e5' }}>
                        {exp.images ? (
                          <ProjectCarousel media={exp.images} />
                        ) : (
                          <Image src={exp.image} alt={exp.company} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                        {exp.current && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-2 py-1 text-xs font-bold rounded bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
                              Current
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="md:col-span-8 p-6 md:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h4 className="text-xl md:text-2xl font-bold">{exp.role}</h4>
                          <span className="text-sm text-muted-foreground">{exp.date}</span>
                        </div>
                        <p className="text-sm text-primary font-medium mb-4">{exp.company} · {exp.team}</p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-4 mb-5">
                          {exp.highlights.map((h, i) => (
                            <div key={i} className="text-center">
                              <div className="text-2xl md:text-3xl font-bold text-foreground">{h.value}</div>
                              <div className="text-xs text-muted-foreground">{h.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Tech */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {exp.tech.map((tech) => (
                            <span key={tech} className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-secondary/50 rounded-md">
                              {getTechIcon(tech)} {tech}
                            </span>
                          ))}
                        </div>

                        {/* Bullets */}
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          {exp.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-primary mt-1.5 text-xs">●</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* LEADERSHIP */}
          <div id="Leadership" className="scroll-mt-24 mb-24">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-12 w-1 rounded-full bg-gradient-to-b from-primary to-primary/20" />
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold">Leadership</h3>
                  <p className="text-sm text-muted-foreground mt-1">Impact & community</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {leadershipData.map((role, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="group overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-border transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-64 md:h-72 overflow-hidden flex-shrink-0" style={{ backgroundColor: isDarkMode ? '#171717' : '#e5e5e5' }}>
                      {role.images ? (
                        <ProjectCarousel media={role.images} />
                      ) : (
                        <Image src={role.image} alt={role.org} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      )}
                      {/* Logo Badge */}
                      {role.logo && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1, type: "spring", stiffness: 200 }}
                          className="absolute bottom-3 left-3 z-10"
                        >
                          <div
                            className="p-1.5 rounded-xl backdrop-blur-md shadow-lg border w-11 h-11 flex items-center justify-center"
                            style={{
                              backgroundColor: isDarkMode ? 'rgba(23, 23, 23, 0.85)' : 'rgba(255, 255, 255, 0.9)',
                              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
                            }}
                          >
                            <Image
                              src={role.logo}
                              alt={`${role.org} logo`}
                              width={32}
                              height={32}
                              className={cn(
                                "w-8 h-8 object-contain",
                                role.logoStyle === "invert" && isDarkMode && "invert"
                              )}
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>
                    <div className="p-5 flex-grow">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-lg font-bold">{role.title}</h4>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{role.date}</span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-2">{role.org}</p>
                      <p className="text-sm text-muted-foreground line-clamp-3">{role.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-10 w-1 rounded-full bg-gradient-to-b from-primary to-primary/20" />
              <h3 className="text-2xl font-bold">Skills</h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillsData.map((cat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="p-4 rounded-xl border border-border/40 bg-card/30 hover:bg-card hover:border-border transition-all duration-300 h-full">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">{cat.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div key={skill.name} className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium bg-secondary/40 rounded-md hover:bg-secondary transition-colors">
                          <Icon style={{ color: skill.color }} className="w-3.5 h-3.5" />
                          {skill.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* RESUME */}
        <section id="Resume" className="py-24 scroll-mt-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-12 w-1 rounded-full bg-gradient-to-b from-primary to-primary/20" />
              <h2 className="text-4xl font-bold">Resume</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ResumeViewer isDarkMode={isDarkMode} />
          </ScrollReveal>
        </section>

        {/* ABOUT */}
        <section id="About" className="py-24 pb-40 scroll-mt-24">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-12 w-1 rounded-full bg-gradient-to-b from-primary to-primary/20" />
              <div>
                <h2 className="text-4xl font-bold">About Me</h2>
                <p className="text-sm text-muted-foreground mt-1">The person behind the code</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Photo Gallery */}
            <ScrollReveal delay={0.1} className="md:col-span-2">
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                <div className="aspect-[4/5]">
                  <ProjectCarousel
                    media={[
                      { type: "image", src: "/Life0.png", alt: "Life moment" },
                      { type: "image", src: "/Life2.jpeg", alt: "Life moment" },
                      { type: "image", src: "/Life1.png", alt: "Life moment" },
                      { type: "video", src: "/life5.MOV", alt: "Life moment" },
                    ]}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* About Content */}
            <ScrollReveal delay={0.2} className="md:col-span-3 space-y-6">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
                  Third-year Computer Science & Engineering student at <span className="text-primary font-medium">UC Merced</span>, building products that connect technology with exceptional user experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I thrive at the intersection of engineering and product thinking. Whether it's architecting enterprise systems serving thousands of users, publishing ML research at top-tier venues, or leading teams to build impactful solutions—I'm driven by the challenge of turning complex problems into elegant experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond code, I'm passionate about community building. As Theta Tau's Recruitment Chair, I've grown our chapter by 70%. As a HackMerced organizer, I help students discover their potential through hackathons. And as a Perplexity AI Ambassador, I'm helping shape how the next generation interacts with AI.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  PS: The last slide is a funny video of my dog Zoey when she was a puppy.
                </p>
              </div>

            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* GT3RS Easter Egg */}
      <div className="relative w-full h-32 pointer-events-none -mt-40">
        <DraggableGT3RS />
      </div>
    </main>
  );
}
