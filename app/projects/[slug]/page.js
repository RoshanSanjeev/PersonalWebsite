"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "../../../contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "../../../components/Navbar";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};
import {
  SiPython, SiReact, SiFlask, SiPostgresql, SiDocker,
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiFirebase,
  SiNodedotjs, SiSupabase, SiOpencv, SiBootstrap
} from "react-icons/si";

// Project data
const projects = {
  clockin: {
    title: "ClockIn",
    tagline: "Focus on what really matters",
    description: `ClockIn is an ADHD-backed accountability system that makes focusing on work effortless. It turns every focus session into time-lapse recordings, applying the body doubling strategy endorsed by ADHD experts and clinical psychologists nationwide.

The app saves visually verifiable progress with gamified streaks and GitHub-style activity charts, making productivity addictive. Our beta validates a $2M physical device market.

Built with a modern tech stack including React Native for mobile, Next.js for web, and Supabase for real-time backend functionality.`,
    tech: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    ],
    images: [
      { src: "/clockin.png", alt: "ClockIn Landing Page" },
    ],
    links: {
      live: "https://www.clockin.now/",
    },
    status: "Live",
    features: [
      "Video-powered focus sessions with time-lapse recordings",
      "Body doubling strategy backed by clinical research",
      "Gamified streaks and GitHub-style activity charts",
      "Real-time sync across devices",
      "Community accountability features",
    ]
  },
  posevision: {
    title: "PoseVision",
    tagline: "AI Personal Trainer",
    description: `PoseVision is an AI-powered personal trainer that uses computer vision for real-time exercise form correction. Built during SASEHacks, it won 1st place for its innovative approach to fitness technology.

The system analyzes body posture in real-time using MediaPipe and OpenCV, providing instant feedback on exercise form to help prevent injuries and optimize workouts.`,
    tech: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
    ],
    media: [
      { type: "video", src: "/PoseVisionDemo.mp4", alt: "PoseVision Demo" },
      { type: "image", src: "/PoseVision2.png", alt: "PoseVision Interface" },
    ],
    sideBySide: true,
    links: {},
    status: "1st Place - SASEHacks",
    features: [
      "Real-time pose detection and analysis",
      "Form correction feedback",
      "Multiple exercise support",
      "Injury prevention alerts",
    ]
  },
  creditcompass: {
    title: "Credit Compass",
    tagline: "AI-Powered Credit Recommendations",
    description: `Credit Compass provides personalized credit card recommendations powered by LLMs. Built during HackMercedX, it won the Alumni Prize for its practical application of AI in personal finance.

The platform analyzes user spending patterns and financial goals to recommend the most suitable credit cards, helping users maximize rewards and benefits.`,
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
    media: [
      { type: "image", src: "/Hackathon.png", alt: "Credit Compass Team" },
      { type: "video", src: "/CreditCompassDemo.mov", alt: "Credit Compass Demo" },
    ],
    sideBySide: true,
    links: {},
    status: "Alumni Prize - HackMercedX",
    features: [
      "AI-powered card matching",
      "Spending pattern analysis",
      "Rewards optimization",
      "Financial goal alignment",
    ]
  },
  serenityhelp: {
    title: "SerenityHelp",
    tagline: "AI Voice Agent for Mental Health",
    description: `SerenityHelp is an AI voice agent designed for mental health crisis intervention. It uses multimodal sentiment analysis across 4 dimensions of distress to provide appropriate support and resources.

Built with cutting-edge AI technologies including Vapi for voice, Groq for fast inference, and Deepgram for speech recognition.`,
    tech: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
    ],
    images: [
      { src: "/serenity1.png", alt: "SerenityHelp Interface 1" },
      { src: "/serenity2.png", alt: "SerenityHelp Interface 2" },
      { src: "/serenity3.png", alt: "SerenityHelp Interface 3" },
    ],
    links: {},
    status: "Hackathon Project",
    features: [
      "Voice-first interaction",
      "Multimodal sentiment analysis",
      "Crisis resource routing",
      "4-dimensional distress assessment",
    ]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projects[slug];
  const { backgroundColor, textColor, currentBackground } = useTheme();
  const isDarkMode = currentBackground === 0 || currentBackground === 3;

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen py-24 px-4" style={{ backgroundColor, color: textColor }}>
      <Navbar activeSection="Projects" />

      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >

        {/* Header */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            {project.status && (
              <motion.span
                className="px-3 py-1 text-sm font-bold rounded-full bg-primary/10 text-primary border border-primary/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
              >
                {project.status}
              </motion.span>
            )}
          </div>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {project.tagline}
          </motion.p>
        </motion.div>

        {/* Media Gallery */}
        <motion.div
          variants={scaleIn}
          className="mb-12"
        >
          {/* Side by side layout for projects with media array and sideBySide flag */}
          {project.media && project.sideBySide ? (
            <motion.div
              className="flex flex-col md:flex-row gap-4 items-center justify-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {project.media.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-2xl overflow-hidden border border-border/50 flex-shrink-0 shadow-lg"
                  style={{ backgroundColor: isDarkMode ? '#171717' : '#e5e5e5', maxHeight: '500px' }}
                >
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-auto max-h-[500px]"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={600}
                      className="h-full w-auto max-h-[500px] object-contain"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Default stacked layout for images */
            <motion.div
              className="grid gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {(project.images || []).map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ scale: 1.01 }}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg"
                  style={{ backgroundColor: isDarkMode ? '#171717' : '#e5e5e5' }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Links */}
        {(project.links.live || project.links.github) && (
          <motion.div
            variants={fadeInUp}
            className="flex gap-4 mb-12"
          >
            {project.links.live && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="gap-2">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Site
                  </a>
                </Button>
              </motion.div>
            )}
            {project.links.github && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" asChild className="gap-2">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Tech Stack */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {project.tech.map((t, idx) => {
              const Icon = t.icon;
              let iconColor = t.color;
              if (t.name === "Next.js" || t.name === "Flask") {
                iconColor = isDarkMode ? "#FFFFFF" : "#000000";
              }
              return (
                <motion.div
                  key={t.name}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50 cursor-default shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon style={{ color: iconColor }} className="w-5 h-5" />
                  <span className="font-medium">{t.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {project.description.split('\n\n').map((para, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                className="text-muted-foreground leading-relaxed mb-4"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        {project.features && (
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <motion.ul
              className="space-y-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {project.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <motion.span
                    className="text-primary mt-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                  >
                    ●
                  </motion.span>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
