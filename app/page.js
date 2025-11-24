"use client";

import { useState } from "react";
import InteractiveGrid from "../components/InteractiveGrid";
import DraggableGT3RS from "../components/DraggableGT3RS";
import Image from "next/image";

export default function Home() {
  const [activeHat, setActiveHat] = useState("Software Engineering"); // Default active hat

  const renderContent = () => {
    switch (activeHat) {
      case "Software Engineering":
        return (
          <section className="p-2">
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: 'linear-gradient(135deg, rgb(64, 115, 191) 0%, rgb(153, 128, 191) 25%, rgb(191, 89, 128) 50%, rgb(217, 115, 89) 75%, rgb(230, 153, 77) 100%)',
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/dine board soft launch-5.png"
                      alt="DineBoard Software Engineering"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-8 text-white">Software Engineering</h2>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-1">Software Engineer Intern | UC, Merced</h3>
                  <p className="text-gray-400 mb-3">Aug 2025 - Present</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Emphathized with UCM stakeholders in Agile sprints to build DineBoard, an enterprise system serving ~2,500 students daily.</li>
                    <li>Engineered secure REST APIs with stateless OAuth 2.0 authentication integration, driving 80% increase in productivity for staff.</li>
                    <li>Architected Flask/Redis backend with Nginx & Gunicorn & React frontend for long-term reliability & performance.</li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-1">Software Engineer Intern | PosTrue</h3>
                  <p className="text-gray-400 mb-3">Mar 2024 - Jun 2024</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Developed Django website to display wearable sensor data, delivering posture analytics with ergonomic feedback for customers.</li>
                    <li>Designed UI/UX with HTML, CSS, JavaScript, & Bootstrap, following brand standards & responsive design.</li>
                    <li>Created a PostgreSQL analytics dashboard to visualise real-time sensor data and deliver actionable posture insights.</li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-1">Fullstack AI Developer | SASEHacks (PoseVision)</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Won 1st place for developing PoseVision in a team of 3, an injury prevention tool utilising deep learning & pose estimation from user-uploaded videos for injury prevention in the squat.</li>
                    <li>Developed Python script with MediaPipe & OpenCV to detect squat asymmetries & enhance UI/UX with visual feedback.</li>
                    <li>Containerised Docker pipeline deployed on AWS EC2, with Flask integration using git (version control) to display results.</li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-1">Fullstack AI Developer | HackMercedX (Credit Compass)</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Won Alumni Prize for developing Credit Compass in a team of 3, an AI-powered platform that delivers long-term, personalised credit card recommendations by leveraging real-time internet data.</li>
                    <li>Built a REST pipeline with the Letta AI API, JavaScript & HTML/CSS to display the personalised credit timeline in Flask.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      case "AI/ML Research":
        return (
          <section className="p-2">
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: 'linear-gradient(135deg, rgb(64, 115, 191) 0%, rgb(153, 128, 191) 25%, rgb(191, 89, 128) 50%, rgb(217, 115, 89) 75%, rgb(230, 153, 77) 100%)',
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/Research.png"
                      alt="AI/ML Research"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-8 text-white">AI/ML Research</h2>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-1">Machine Learning Research Intern | Mi3 Lab</h3>
                  <p className="text-gray-400 mb-3">Jun 2025 - Present</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Co-authored paper, published & presented at CVPR 2025 & ICCV 2025 conferences for our VLLM, which generates accurate real-time navigation instructions for users with visual impairments in complex urban environments.</li>
                    <li>Outperformed GPT-4o baseline by 43.84% via finetuning VideoLLaMa3-7B on preprocessed dataset, prompt engineering, frame sampling, & strategic post-processing across ROUGE-L, Timing F1/AUC, & Action F1 metrics.</li>
                    <li>Developed data visualisations using Pandas/Matplotlib & Python for JSON post-processing for the paper & presentation.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      case "Product Development":
        return (
          <section className="p-2">
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              {/* Image with gradient border */}
              <div className="lg:w-1/3 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: 'linear-gradient(135deg, rgb(64, 115, 191) 0%, rgb(153, 128, 191) 25%, rgb(191, 89, 128) 50%, rgb(217, 115, 89) 75%, rgb(230, 153, 77) 100%)',
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/Hackathon.png"
                      alt="Product Development"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-8 text-white">Product Development</h2>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-1">Product Development Intern | Plant Culture Systems</h3>
                  <p className="text-gray-400 mb-3">Jul 2024 - Oct 2024</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Designed & developed the AI landing page for OurGarden, using Flutterflow, integrating UI/UX feedback to enhance targeted user engagement for 500+ users.</li>
                    <li>Led image analysis feature as A.I. subteam lead, improving engagement metrics by ~50% in Agile sprints with customers & users.</li>
                    <li>Utilised ChatGPT API for chatbot queries, Firebase database for user management & Figma for frontend planning.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      case "Leadership & Community":
        return (
          <section className="p-2">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image Column */}
              <div className="lg:w-1/3 flex flex-col gap-8">
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: 'linear-gradient(135deg, rgb(64, 115, 191) 0%, rgb(153, 128, 191) 25%, rgb(191, 89, 128) 50%, rgb(217, 115, 89) 75%, rgb(230, 153, 77) 100%)',
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/SHPE.png"
                      alt="Leadership & Community"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div
                  className="relative rounded-2xl overflow-hidden animate-gradient"
                  style={{
                    background: 'linear-gradient(135deg, rgb(64, 115, 191) 0%, rgb(153, 128, 191) 25%, rgb(191, 89, 128) 50%, rgb(217, 115, 89) 75%, rgb(230, 153, 77) 100%)',
                    padding: '3px',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/Perplexity.jpeg"
                      alt="Perplexity AI"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-8 text-white">Leadership & Community</h2>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-1">AI Campus Ambassador | Perplexity</h3>
                  <p className="text-gray-400 mb-3">June 2025 - Present</p>
                  <ul className="list--disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Developed & executed a responsible AI adoption marketing strategy on campus through tailored presentations to clubs & classes engaging 300+ in-person students to date & working toward 500 sign-ups to secure Perplexity hackathon sponsorship.</li>
                  </ul>
                  <p className="text-gray-400 mt-2">Placeholder text for the Perplexity image. Let me know what you'd like to write here!</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-1">Hackathon Organiser | HackMercedX</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Worked in Backend & Outreach teams, managing hackathon website while pursuing company sponsorships & participant outreach.</li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-1">Executive Board/Recruitment | Theta Tau</h3>
                  <p className="text-400 mb-3">Mar 2024 - Present</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>As recruitment chair, led a committee of 9, with a $2,000 budget & organised class presentations to 1,000+ students.</li>
                    <li>Increased chapter growth by 70% through 5 daily events with 50+ daily attendees & created a detailed manual for future chairs.</li>
                    <li>As Executive Board, oversaw chapter operations & presented to regional executives preparing to run for President next semester.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      case "Technical Skills":
        return (
          <section className="p-2">
            <h2 className="text-3xl font-bold mb-8 text-white">Technical Skills</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
              <p className="text-gray-300">Python, C/C++, JavaScript, R, SQL, Java, HTML/CSS, MIPS Assembly, LaTeX</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Frameworks</h3>
              <p className="text-gray-300">Flask, Django, React, Pandas, Matplotlib, MediaPipe, OpenCV, Bootstrap, FlutterFlow</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Tools & Platforms</h3>
              <p className="text-gray-300">Azure, AWS EC2, Git, Docker, PostgreSQL, Redis, Linux, Microsoft Suite, Claude Code, Firebase, Figma</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">AI/ML</h3>
              <p className="text-gray-300">Computer Vision, HuggingFace, PyTorch, TensorFlow, CrewAI Agents, MediaPipe, Vapi, Nous, Masumi</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Methodologies</h3>
              <p className="text-gray-300">OOP, Agile, Scrum, Responsive Design, UI/UX, CI/CD, DevOps</p>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  const hats = [
    "Software Engineering",
    "AI/ML Research",
    "Product Development",
    "Leadership & Community",
    "Technical Skills",
  ];

  return (
    <main className="bg-black">
      <div className="min-h-screen bg-black text-foreground flex flex-col items-center justify-center py-10 relative">
        {/* Interactive Grid Background */}
        <div className="absolute inset-0 z-0 h-[70vh] semi-circle-mask">
          <InteractiveGrid />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center px-4">
          {/* Hero Section with Profile Picture */}
          <div className="mb-8 relative group">
            <div
              className="relative w-64 h-64 rounded-full animate-gradient"
              style={{
                background: 'linear-gradient(135deg, rgb(64, 115, 191) 0%, rgb(153, 128, 191) 25%, rgb(191, 89, 128) 50%, rgb(217, 115, 89) 75%, rgb(230, 153, 77) 100%)',
                padding: '4px',
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <Image
                  src="/pfp.png"
                  alt="Roshan Sanjeev"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text container with gradient border - same style as content container */}
          <div className="relative group rounded-3xl mb-12">
            <span
              className="absolute inset-0 rounded-3xl transition-opacity duration-300 opacity-100 animate-gradient"
              style={{
                background: 'linear-gradient(135deg, rgb(64, 115, 191) 0%, rgb(153, 128, 191) 25%, rgb(191, 89, 128) 50%, rgb(217, 115, 89) 75%, rgb(230, 153, 77) 100%)',
                padding: '5px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none',
              }}
            />
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl px-8 py-6 border border-white/20 relative z-10">
              <h1 className="text-5xl font-bold text-white mb-6 tracking-tight text-center">Roshan Sanjeev</h1>
              <p className="max-w-3xl text-center text-lg text-gray-300 leading-relaxed">
                Nice to virtually meet you! As a Product Manager and Software Engineer, I thrive at the intersection of technology and user needs. Explore the different types of hats I wear by clicking on the categories below to dive into my experiences in software development, AI/ML research, product leadership, and more.
              </p>
            </div>
          </div>

        {/* Navigation for Hats */}
        <nav className="flex flex-wrap justify-center gap-4 mb-10">
          {hats.map((hat) => (
            <div key={hat} className="relative group rounded-full">
              {/* Animated gradient for SELECTED state - brighter colors */}
              {activeHat === hat && (
                <span
                  className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-100 animate-gradient"
                  style={{
                    background: 'linear-gradient(135deg, rgb(100, 160, 255) 0%, rgb(200, 170, 255) 25%, rgb(255, 130, 180) 50%, rgb(255, 150, 110) 75%, rgb(255, 200, 120) 100%)',
                    padding: '4px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Hover gradient effect for NON-SELECTED state */}
              {activeHat !== hat && (
                <span
                  className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 animate-gradient"
                  style={{
                    background: 'linear-gradient(135deg, rgb(64, 115, 191) 0%, rgb(153, 128, 191) 25%, rgb(191, 89, 128) 50%, rgb(217, 115, 89) 75%, rgb(230, 153, 77) 100%)',
                    padding: '4px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    pointerEvents: 'none',
                  }}
                />
              )}

              <button
                onClick={() => setActiveHat(hat)}
                className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 backdrop-blur-sm relative ${
                  activeHat === hat
                    ? "bg-white/10 text-white shadow-lg"
                    : "bg-white/10 text-gray-300"
                }`}
              >
                <span className="relative z-10">{hat}</span>
              </button>

              {/* Default border for inactive non-hovered state */}
              {activeHat !== hat && (
                <span
                  className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:opacity-0 transition-opacity duration-300"
                  style={{ pointerEvents: 'none' }}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Content Display Area */}
        <div className="w-full max-w-5xl relative group rounded-2xl">
          <span
            className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-100 animate-gradient"
            style={{
              background: 'linear-gradient(135deg, rgb(64, 115, 191) 0%, rgb(153, 128, 191) 25%, rgb(191, 89, 128) 50%, rgb(217, 115, 89) 75%, rgb(230, 153, 77) 100%)',
              padding: '5px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              pointerEvents: 'none',
            }}
          />
          <div className="w-full h-full bg-white/10 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-white/20 relative z-10 overflow-visible">
            {renderContent()}

            {/* Draggable GT3RS with rainbow trail - positioned below content */}
            <div className="relative w-full">
              <DraggableGT3RS />
            </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
