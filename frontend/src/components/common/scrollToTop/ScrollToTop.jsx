import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#inicio"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Volver arriba"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 left-6 z-[300] flex items-center justify-center w-11 h-11 rounded-full bg-brand-600 text-white shadow-brand transition-all duration-300 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </a>
  );
};

export default ScrollToTop;