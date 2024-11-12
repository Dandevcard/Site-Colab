import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300); 
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-green-600 text-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 shadow-md hover:bg-green-400 transition-all duration-300 text-2xl md:text-3xl lg:text-4xl rounded-md"
        aria-label="Back to top"
      >
        ↑
      </button>
    )
  );
}