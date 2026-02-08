import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-black text-primary tracking-tighter">
          JK.
        </a>

        <div className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Home</a>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Projects
          </button>
          <a 
            href="mailto:juuyoung9575@gmail.com" 
            className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
