"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  Github, Linkedin, Sun, Moon, Mail, ChevronDown, Copy, Check, ArrowUpRight, Menu, X
} from "lucide-react";

const sections = ["Home", "Projects", "Experience"];

export default function Navbar({ activeSection = "Home", onSectionClick }) {
  const router = useRouter();
  const { navColor, currentBackground, setCurrentBackground } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const isDarkMode = currentBackground === 0 || currentBackground === 3;
  const toggleTheme = () => setCurrentBackground(currentBackground === 0 ? 1 : 0);

  const handleSectionClick = (sectionId) => {
    if (onSectionClick) {
      onSectionClick(sectionId);
    } else {
      // Navigate to home page with section hash
      router.push(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 pointer-events-none flex justify-center">
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
                  <div key={section} className="flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSectionClick("Projects")}
                      className={cn(
                        "rounded-full text-xs font-medium px-2 sm:px-3 py-1 h-7 sm:h-8 transition-all rounded-r-none pr-1",
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
                            "rounded-full text-xs font-medium px-1 py-1 h-7 sm:h-8 transition-all rounded-l-none",
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
                      onClick={() => handleSectionClick("Experience")}
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

            <div className="h-4 w-px bg-border/50 mx-1" />

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-7 w-7 sm:h-8 sm:w-8 rounded-full">
              {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
