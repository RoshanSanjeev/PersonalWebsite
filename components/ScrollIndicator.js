"use client";

export default function ScrollIndicator() {
  const handleScrollClick = () => {
    const experienceSection = document.getElementById('Experience');
    if (experienceSection) {
      // Offset for fixed header
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = experienceSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <button
      onClick={handleScrollClick}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer transition-opacity hover:opacity-80"
      aria-label="Scroll to content"
    >
      <span className="text-[var(--text-secondary)] text-sm font-medium">Scroll down to see my work</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--text-secondary)] animate-bounce-interval"
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    </button>
  );
}
