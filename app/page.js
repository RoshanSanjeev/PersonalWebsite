"use client";

import { useState } from "react";
import InteractiveGrid from "../components/InteractiveGrid";
import DraggableGT3RS from "../components/DraggableGT3RS";
import ColorThemeSelector from "../components/ColorThemeSelector";
import ScrollIndicator from "../components/ScrollIndicator";
import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";

export default function Home() {
  const { gradient, backgroundColor, textColor, secondaryTextColor, glassColor, borderColor, boxColor, navColor } = useTheme();
  const [activeSection, setActiveSection] = useState("Experience"); // Main section
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle smooth transitions between sections
  const handleSectionChange = (section) => {
    if (section !== activeSection) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSection(section);
        setIsTransitioning(false);
      }, 150);

      // Scroll to content section
      const contentSection = document.getElementById('content-section');
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Experience":
        return (
          <section className="space-y-12">
            {/* UC Merced - DineBoard */}
            <div className="flex flex-col lg:flex-row gap-8 pb-12 border-b" style={{ borderColor: borderColor }}>
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: gradient,
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
                    <Image
                      src="/dine board soft launch-5.png"
                      alt="DineBoard Software Engineering"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ objectPosition: '50% 39%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                    <Image
                      src="/UCM_Logo.png"
                      alt="UC Merced Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">Software Engineer Intern | UC, Merced</h3>
                      <p className="text-[var(--text-secondary)]">Aug 2025 - Present</p>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">Flask, Redis, Nginx, React, Agile, REST APIs, OAuth 2.0</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-2 text-[var(--text-secondary)]">
                  <li>Built DineBoard enterprise system serving 2,500+ students daily using Agile methodology</li>
                  <li>Engineered secure REST APIs with OAuth 2.0, driving 80% productivity increase for staff</li>
                  <li>Architected Flask/Redis backend with Nginx & React frontend for scalable performance</li>
                </ul>
              </div>
            </div>

            {/* Mi3 Lab Research */}
            <div className="flex flex-col lg:flex-row gap-8 pb-12 border-b" style={{ borderColor: borderColor }}>
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: gradient,
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
                    <Image
                      src="/Research.png"
                      alt="AI/ML Research"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                    <Image
                      src="/VideoLlama.png"
                      alt="Mi3 Lab Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">Machine Learning Research Intern | Mi3 Lab</h3>
                      <p className="text-[var(--text-secondary)]">Jun 2025 - Present</p>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">VLLM, CVPR, ICCV, GPT-4o, VideoLLaMa, Pandas, Matplotlib</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-2 text-[var(--text-secondary)]">
                  <li>Co-authored VLLM paper published at CVPR 2025 & ICCV 2025 generating real-time navigation for visually impaired users</li>
                  <li>Outperformed GPT-4o by 43.84% finetuning VideoLLaMa3-7B across ROUGE-L, Timing F1/AUC, & Action F1 metrics</li>
                  <li>Built data visualizations using Pandas/Matplotlib for JSON post-processing and conference presentations</li>
                </ul>
              </div>
            </div>

            {/* Plant Culture Systems */}
            <div className="flex flex-col lg:flex-row gap-8 pb-12 border-b" style={{ borderColor: borderColor }}>
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: gradient,
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
                    <Image
                      src="/plantCultureSys.jpeg"
                      alt="Plant Culture Systems"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                    <Image
                      src="/PlantCultureSystems.webp"
                      alt="Plant Culture Systems Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">Software Engineer Intern | Plant Culture Systems</h3>
                      <p className="text-[var(--text-secondary)]">Jul 2024 - Oct 2024</p>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">AI, Flutterflow, Firebase, Figma, Agile, ChatGPT API</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-2 text-[var(--text-secondary)]">
                  <li>Designed AI landing page for OurGarden using Flutterflow, enhancing engagement for 500+ users</li>
                  <li>Led image analysis feature as A.I. subteam lead, improving engagement metrics by ~50% in Agile sprints with customers & users..</li>
                  <li>Integrated ChatGPT API chatbot, Firebase user management, and Figma frontend planning</li>
                </ul>
              </div>
            </div>

            {/* PosTrue */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: gradient,
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
                    <Image
                      src="/PostrueMain.png"
                      alt="PosTrue Software Engineering"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                    <Image
                      src="/PosTrueLogo.png"
                      alt="PosTrue Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">Software Engineer Intern | PosTrue</h3>
                      <p className="text-[var(--text-secondary)]">Mar 2024 - Jun 2024</p>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">Django, Bootstrap, PostgreSQL, Real-time Analytics, UI/UX</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-2 text-[var(--text-secondary)]">
                  <li>Developed Django website with real-time wearable sensor analytics and ergonomic feedback</li>
                  <li>Designed responsive UI/UX with Bootstrap, HTML/CSS/JavaScript following brand standards</li>
                  <li>Built PostgreSQL dashboard visualizing real-time posture data with actionable insights</li>
                </ul>
              </div>
            </div>
          </section>
        );
      case "Hackathons/Projects":
        return (
          <section className="space-y-12">
            {/* PoseVision */}
            <div className="flex flex-col lg:flex-row gap-8 pb-12 border-b" style={{ borderColor: borderColor }}>
              {/* Video with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: gradient,
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <video
                      controls
                      className="w-full h-auto"
                      preload="metadata"
                    >
                      <source src="/PoseVisionDemo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                    <Image
                      src="/Sase.png"
                      alt="SASE Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">Fullstack AI Developer | SASEHacks (PoseVision)</h3>
                    <p className="text-[var(--text-secondary)] text-sm">AI, Deep Learning, Pose Estimation, Python, MediaPipe, OpenCV, Docker, Flask, AWS EC2</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-2 text-[var(--text-secondary)]">
                  <li>Won 1st place building AI injury prevention tool using deep learning pose estimation</li>
                  <li>Developed Python script with MediaPipe & OpenCV detecting squat asymmetries with visual feedback</li>
                  <li>Deployed Dockerized Flask pipeline on AWS EC2 with git version control</li>
                </ul>
              </div>
            </div>

            {/* Credit Compass */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: gradient,
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/Hackathon.png"
                      alt="Credit Compass Hackathon"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                    <Image
                      src="/HackMerced.png"
                      alt="HackMerced Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">Fullstack AI Developer | HackMercedX (Credit Compass)</h3>
                    <p className="text-[var(--text-secondary)] text-sm">AI, REST API, Flask, JavaScript, HTML/CSS</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-2 text-[var(--text-secondary)]">
                  <li>Won Alumni Prize building AI platform delivering personalized credit card recommendations using real-time data</li>
                  <li>Built REST pipeline with Letta AI API and Flask frontend using JavaScript & HTML/CSS</li>
                </ul>
              </div>
            </div>
          </section>
        );
      case "Leadership & Communication":
        return (
          <section className="space-y-12">
            {/* Perplexity AI Campus Ambassador */}
            <div className="flex flex-col lg:flex-row gap-8 pb-12 border-b" style={{ borderColor: borderColor }}>
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: gradient,
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/PerplexPrese.jpeg"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                    <Image
                      src="/PerplexLogo.webp"
                      alt="Perplexity Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">AI Campus Ambassador | Perplexity</h3>
                      <p className="text-[var(--text-secondary)] ml-2">June 2025 - Present</p>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm">AI Marketing, Marketing Strategy, Community Engagement</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-2 text-[var(--text-secondary)]">
                  <li>Executed responsible AI marketing strategy (via social media posts, flyers, and tabling) to engage 300+ students.</li>
                  <li>Working toward 500 sign-ups for hackathon sponsorship.</li>
                  <li>Promoted cutting-edge AI tools and resources to the university community.</li>
                </ul>
              </div>
            </div>

            {/* HackMercedX Organiser */}
            <div className="flex flex-col lg:flex-row gap-8 pb-12 border-b" style={{ borderColor: borderColor }}>
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: gradient,
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/HackathonOrganizer.png"
                      alt="HackMercedX Organiser"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                    <Image
                      src="/HackMerced.png"
                      alt="HackMerced Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">Hackathon Organiser | HackMercedX</h3>
                    <p className="text-[var(--text-secondary)] text-sm">Backend Management, Frontend, Firebase, Sponsorship, Outreach</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-2 text-[var(--text-secondary)]">
                  <li>Managed hackathon website backend while securing company sponsorships and coordinating participant outreach</li>
                  <li>Coordinated participant outreach, event logistics, and workshop schedules.</li>
                </ul>
              </div>
            </div>

            {/* Theta Tau */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: gradient,
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/SHPE.png"
                      alt="Theta Tau Leadership"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                    <Image
                      src="/ThetaTau.png"
                      alt="Theta Tau Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">Executive Board/Recruitment | Theta Tau</h3>
                      <p className="text-[var(--text-secondary)] ml-2">Mar 2024 - Present</p>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm">Leadership, Recruitment, Budget Management, Event Planning</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 space-y-2 text-[var(--text-secondary)]">
                  <li>Led recruitment committee of 9 with $2,000 budget, organizing presentations to 1,000+ students</li>
                  <li>Increased chapter growth by 70% through daily events with 50+ attendees, created succession manual</li>
                  <li>Oversaw chapter operations as Executive Board member, preparing for President role next semester</li>
                </ul>
              </div>
            </div>
          </section>
        );
      case "Skills":
        return (
          <section className="p-2">
            <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">Skills</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Languages</h3>
              <p className="text-[var(--text-secondary)]">Python, C/C++, JavaScript, R, SQL, Java, HTML/CSS, MIPS Assembly, LaTeX</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Frameworks</h3>
              <p className="text-[var(--text-secondary)]">Flask, Django, React, Pandas, Matplotlib, MediaPipe, OpenCV, Bootstrap, FlutterFlow</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Tools & Platforms</h3>
              <p className="text-[var(--text-secondary)]">Azure, AWS EC2, Git, Docker, PostgreSQL, Redis, Linux, Microsoft Suite, Claude Code, Firebase, Figma</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">AI/ML</h3>
              <p className="text-[var(--text-secondary)]">Computer Vision, HuggingFace, PyTorch, TensorFlow, CrewAI Agents, MediaPipe, Vapi, Nous, Masumi</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Methodologies</h3>
              <p className="text-[var(--text-secondary)]">OOP, Agile, Scrum, Responsive Design, UI/UX, CI/CD, DevOps</p>
            </div>
          </section>
        );
      case "Resume":
        return (
          <section className="p-2">
            <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">Resume</h2>
            <div className="w-full">
              {/* PDF Embed without border */}
              <iframe
                src="/RoshanSanjeev_Resume.pdf"
                className="w-full h-[800px] rounded-lg mb-4"
                title="Roshan Sanjeev Resume"
              />
              {/* Download Button */}
              <div className="mt-4 flex justify-center">
                <a
                  href="/RoshanSanjeev_Resume.pdf"
                  download="RoshanSanjeev_Resume.pdf"
                  className="relative group/btn rounded-full inline-block"
                >
                  <span
                    className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 animate-gradient"
                    style={{
                      background: gradient,
                      padding: '3px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      pointerEvents: 'none',
                    }}
                  />
                  <span
                    className="backdrop-blur-sm rounded-full px-6 py-3 border relative z-10 inline-block text-[var(--text-primary)] font-medium transition-all duration-300"
                    style={{ backgroundColor: glassColor, borderColor: borderColor }}
                  >
                    Download Resume
                  </span>
                </a>
              </div>
            </div>
          </section>
        );
      case "About Me":
        return (
          <section className="p-2">
            <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)] border-b pb-2" style={{ borderColor: borderColor }}>About Me</h2>

            {/* About Me Text */}
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                My name is Roshan Sanjeev, a third year computer science and engineering major at the University of California, Merced and I am passionate about building products that connect technology with user experience. My technical background spans full-stack development, cloud systems, and AI/ML, with experience interning across software engineering and app development. I have also co-authored computer vision research presented at world-renowned conferences such as CVPR in Nashville and ICCV in Hawaii.
              </p>
              <p>
                Beyond technical work, I embrace leadership and outreach. As an organizer for HackMerced, I mentor students and create opportunities for them to grow, collaborate, and bring new ideas to life. As a Perplexity Campus Ambassador, I connect my peers with cutting-edge AI tools, and I am currently leading a drive to reach 500 sign-ups to unlock Hackathon funding from Perplexity. Previously, as Recruitment Chair for Theta Tau, I led a nine-member committee, managed a $2000 budget, and organized events that reached over 1,000 students.
              </p>
              <p>
                I thrive in competitive and creative environments. My projects include PoseVision, a first-place winning deep learning tool for movement feedback at SASEHacks, and Credit Compass, an Alumni Prize-winning AI recommendation system at HackMerced.
              </p>
              <p>
                With a mix of technical expertise, product thinking, and leadership experience, I am motivated to contribute to impactful projects in technology and beyond.
              </p>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ["Experience", "Hackathons/Projects", "Leadership & Communication", "Skills", "About Me", "Resume"];

  return (
    <main style={{ backgroundColor, color: textColor }}>
      <div className="min-h-screen text-foreground flex flex-col items-center pt-24 pb-10 relative" style={{ backgroundColor, '--text-primary': textColor, '--text-secondary': secondaryTextColor }}>
        {/* Interactive Grid Background */}
        {/* <div className="absolute inset-0 z-0 h-[70vh] semi-circle-mask">
          <InteractiveGrid />
        </div> */}


        {/* Fixed Top Navigation Bar */}
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-2rem)] 2xl:w-auto max-w-[95rem] rounded-full animate-fadeInUp">
          {/* Gradient Outline (Masked) */}
          <span
            className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 animate-gradient pointer-events-none z-20"
            style={{
              background: gradient,
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          <nav
            className="relative z-10 rounded-full backdrop-blur-sm flex items-center justify-between p-1 shadow-2xl transition-all duration-300 border whitespace-nowrap"
            style={{ backgroundColor: navColor, borderColor: borderColor }}
          >
            {/* Mobile Layout: Socials | (Centered Bubble Hamburger) | Theme */}
            <div className="2xl:hidden grid grid-cols-[1fr_auto_1fr] w-full items-center px-2 mt-2">
              {/* Left: Social Icons */}
              <div className="justify-self-start flex items-center gap-4">
                <a href="https://github.com/RoshanSanjeev" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="https://discord.com/users/Proats" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/roshan-sanjeev/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>

              {/* Center: Hamburger (Bubble Style) */}
              <div className="justify-self-center relative group rounded-full">
                <span
                  className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 animate-gradient pointer-events-none"
                  style={{
                    background: gradient,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="backdrop-blur-sm shadow-2xl border rounded-full relative z-10 flex items-center justify-center w-10 h-10 transition-transform active:scale-95"
                  style={{ backgroundColor: glassColor, borderColor: borderColor }}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Right: Theme Selector (Raw Stacked) */}
              <div className="justify-self-end origin-right">
                <ColorThemeSelector compact={true} raw={true} stacked={true} />
              </div>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden 2xl:flex items-center justify-center gap-2 flex-1 px-4 overflow-x-auto no-scrollbar">
              {sections.map((section) => {
                const isActive = activeSection === section;
                return (
                  <div key={section} className="relative group rounded-full flex-shrink-0">
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100"
                        style={{
                          background: 'white',
                          padding: '2px',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                          pointerEvents: 'none',
                        }}
                      />
                    )}
                    <button
                      onClick={() => handleSectionChange(section)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10 ${isActive
                        ? "text-[var(--text-primary)] shadow-md"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:scale-105"
                        }`}
                      style={{
                        backgroundColor: isActive ? boxColor : 'transparent',
                      }}
                    >
                      {section}
                    </button>
                  </div>
                );
              })}
            </div>

          </nav>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 mt-2 p-1 z-0 animate-fadeInUp">
              <div
                className="relative rounded-3xl overflow-hidden animate-gradient"
                style={{
                  background: gradient,
                  padding: '3px',
                }}
              >
                <div
                  className="backdrop-blur-2xl rounded-3xl p-4 flex flex-col gap-2 shadow-xl"
                  style={{ backgroundColor: navColor }}
                >
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => {
                        handleSectionChange(section);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative ${activeSection === section
                        ? "text-[var(--text-primary)] bg-white/10"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"
                        }`}
                    >
                      {section}
                      {activeSection === section && (
                        <span className="absolute right-4 w-2 h-2 rounded-full animate-gradient" style={{ background: gradient }} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center w-full px-4">
          {/* Hero Section - Single Large Card Redesign */}
          <div className="w-full max-w-[95rem] mb-16 animate-fadeInUp relative">


            {/* Social Icons - Top Left of Hero (Desktop Only) */}
            <div className="absolute -top-20 left-0 z-50 animate-fadeInUp hidden 2xl:block" style={{ animationDelay: '0.2s' }}>
              <div className="relative group rounded-full">
                <span
                  className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 animate-gradient pointer-events-none"
                  style={{
                    background: gradient,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div
                  className="backdrop-blur-sm shadow-2xl border rounded-full relative z-10 flex items-center px-3 py-2 gap-2"
                  style={{ backgroundColor: glassColor, borderColor: borderColor }}
                >
                  {/* GitHub */}
                  <a href="https://github.com/RoshanSanjeev" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  {/* Discord */}
                  <a href="https://discord.com/users/Proats" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/roshan-sanjeev/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Color Theme Selector - Top Right of Hero (Desktop Only) */}
            <div className="absolute -top-20 right-0 z-50 animate-fadeInUp hidden 2xl:block" style={{ animationDelay: '0.2s' }}>
              <ColorThemeSelector />
            </div>
            {/* Gradient Background Layer */}
            <div
              className="absolute inset-0 rounded-[2.5rem] animate-gradient opacity-5 blur-md"
              style={{
                background: gradient,
              }}
            />
            {/* Gradient Outline (Masked) */}
            <span
              className="absolute inset-0 rounded-[2.5rem] animate-gradient pointer-events-none"
              style={{
                background: gradient,
                padding: '5px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div
              className="backdrop-blur-sm shadow-2xl rounded-[2.5rem] py-16 px-8 pb-32 lg:py-20 lg:px-12 lg:pb-40 relative flex flex-col items-center gap-8 overflow-visible border"
              style={{
                background: `linear-gradient(${glassColor}, ${glassColor})`,
                borderColor: borderColor
              }}
            >
              {/* Profile Picture - Engulfed */}
              <div className="relative flex-shrink-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <div
                  className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full animate-gradient"
                  style={{
                    background: gradient,
                    padding: '4px',
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <Image
                      src="/pfp.png"
                      alt="Roshan Sanjeev"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center text-center">
                <h1 className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] mb-8 tracking-tight animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  Roshan Sanjeev
                </h1>
                <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                  Nice to virtually meet you! As a Software Engineer, Machine Learning Researcher, and Product Manager, I thrive at the intersection of technology and user needs. Explore my experience, learn about me, or view my resume below.
                </p>
              </div>

              <ScrollIndicator />

              {/* GT3RS - Bottom of container */}
              <div className="absolute bottom-6 left-8 w-full animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                <DraggableGT3RS />
              </div>
            </div>
          </div>

        </div>

        {/* Content Display Area */}
        <div id="content-section" className="w-full max-w-7xl px-4 animate-fadeInUp scroll-mt-24" style={{ animationDelay: '1.1s' }}>
          <div
            className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              }`}
          >
            {renderContent()}
          </div>
        </div>
      </div>
    </main>
  );
}

