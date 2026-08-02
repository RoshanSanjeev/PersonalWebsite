"use client";

export default function ScrollIndicator() {
  const handleScrollClick = () => {
    const targetSection = document.getElementById('Experience');
    if (targetSection) {
      // Offset for fixed header
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetSection.getBoundingClientRect().top;
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
      className="flex flex-col items-center gap-2 z-20 cursor-pointer transition-all duration-300 hover:opacity-80 will-change-transform"
      aria-label="Scroll to content"
      style={{ transform: 'translateZ(0)' }}
    >
      <span className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg font-medium">Details below</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-neutral-600 dark:text-neutral-400 animate-bounce"
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    </button>
  );
}
