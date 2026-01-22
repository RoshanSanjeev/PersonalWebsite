"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Github, Linkedin, Sun, Moon, Mail, ChevronDown, Copy, Check, ArrowUpRight
} from "lucide-react";

const sections = ["Home", "Projects", "Experience"];

export default function Navbar({ activeSection = "Home", onSectionClick }) {
  const router = useRouter();
  const { navColor, currentBackground, setCurrentBackground } = useTheme();
  const [emailCopied, setEmailCopied] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const projectsTimeout = useRef(null);
  const experienceTimeout = useRef(null);
  const contactTimeout = useRef(null);

  const isDarkMode = currentBackground === 0 || currentBackground === 3;
  const toggleTheme = () => setCurrentBackground(currentBackground === 0 ? 1 : 0);

  const handleSectionClick = (sectionId) => {
    if (onSectionClick) {
      onSectionClick(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleMouseEnter = (setter, timeoutRef) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setter(true);
  };

  const handleMouseLeave = (setter, timeoutRef) => {
    timeoutRef.current = setTimeout(() => setter(false), 300);
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pointer-events-auto bg-background/70 backdrop-blur-2xl border border-border/50 shadow-xl rounded-full px-2 py-1.5 flex items-center gap-0.5"
          style={{ backgroundColor: navColor }}
        >
          <div className="flex items-center gap-0.5">
            {sections.map((section) => {
              if (section === "Projects") {
                return (
                  <div
                    key={section}
                    className="flex items-center"
                    onMouseEnter={() => handleMouseEnter(setProjectsOpen, projectsTimeout)}
                    onMouseLeave={() => handleMouseLeave(setProjectsOpen, projectsTimeout)}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSectionClick("Projects")}
                      className={cn(
                        "rounded-full text-xs font-medium px-2 sm:px-3 py-1 h-7 sm:h-8 transition-all rounded-r-none pr-1 cursor-pointer",
                        activeSection === "Projects"
                          ? "bg-foreground/10 text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                      )}
                    >
                      Projects
                    </Button>
                    <DropdownMenu open={projectsOpen} onOpenChange={(open) => open && setProjectsOpen(true)} modal={false}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "rounded-full text-xs font-medium px-1 py-1 h-7 sm:h-8 transition-all rounded-l-none cursor-pointer",
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
                        onMouseEnter={() => handleMouseEnter(setProjectsOpen, projectsTimeout)}
                        onMouseLeave={() => handleMouseLeave(setProjectsOpen, projectsTimeout)}
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
                  <div
                    key={section}
                    className="flex items-center"
                    onMouseEnter={() => handleMouseEnter(setExperienceOpen, experienceTimeout)}
                    onMouseLeave={() => handleMouseLeave(setExperienceOpen, experienceTimeout)}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSectionClick("Experience")}
                      className={cn(
                        "rounded-full text-sm font-medium px-4 py-2 h-9 transition-all rounded-r-none pr-2 cursor-pointer",
                        activeSection === "Experience" || activeSection === "Leadership" || activeSection === "Resume" || activeSection === "About"
                          ? "bg-foreground/10 text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                      )}
                    >
                      Experience
                    </Button>
                    <DropdownMenu open={experienceOpen} onOpenChange={(open) => open && setExperienceOpen(true)} modal={false}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "rounded-full text-sm font-medium px-2 py-2 h-9 transition-all rounded-l-none cursor-pointer",
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
                        onMouseEnter={() => handleMouseEnter(setExperienceOpen, experienceTimeout)}
                        onMouseLeave={() => handleMouseLeave(setExperienceOpen, experienceTimeout)}
                      >
                        {["Leadership", "Resume", "About"].map((item) => (
                          <DropdownMenuItem
                            key={item}
                            onClick={() => handleSectionClick(item)}
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
                  onClick={() => handleSectionClick(section)}
                  className={cn(
                    "rounded-full text-sm font-medium px-4 py-2 h-9 transition-all cursor-pointer",
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
            <div
              onMouseEnter={() => handleMouseEnter(setContactOpen, contactTimeout)}
              onMouseLeave={() => handleMouseLeave(setContactOpen, contactTimeout)}
            >
              <DropdownMenu open={contactOpen} onOpenChange={(open) => open && setContactOpen(true)} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full text-sm font-medium px-4 py-2 h-9 gap-1 text-muted-foreground hover:text-foreground cursor-pointer">
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
                  onMouseEnter={() => handleMouseEnter(setContactOpen, contactTimeout)}
                  onMouseLeave={() => handleMouseLeave(setContactOpen, contactTimeout)}
                >
                  <button
                    className="flex items-center gap-2 p-2 w-full text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText("roshan.sanjeev@gmail.com");
                      setEmailCopied(true);
                      setTimeout(() => setEmailCopied(false), 2000);
                    }}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="flex-1 text-left">roshan.sanjeev@gmail.com</span>
                    {emailCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 opacity-60" />}
                  </button>
                  <DropdownMenuItem asChild>
                    <a href="https://www.linkedin.com/in/roshan-sanjeev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 cursor-pointer" style={{ color: isDarkMode ? '#ffffff' : '#171717' }}>
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://github.com/RoshanSanjeev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 cursor-pointer" style={{ color: isDarkMode ? '#ffffff' : '#171717' }}>
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="h-4 w-px bg-border/50 mx-1" />

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-7 w-7 sm:h-8 sm:w-8 rounded-full cursor-pointer">
              {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
