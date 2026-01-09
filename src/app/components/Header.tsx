import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme based on document class or system preference
  useEffect(() => {
    // Check if .light class is already present or system pref
    const isLight = document.documentElement.classList.contains("light");
    setIsDarkMode(!isLight);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "What I Do", id: "what-i-do" },
    { label: "Selected Work", id: "work" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-background border-b border-border/50 transition-colors duration-700">
        {/* Left Branding */}
        <div className="flex items-center gap-3 text-primary pointer-events-none">
          <img
            src={isDarkMode ? logoLight : logoDark}
            alt="Logo"
            className="h-3 w-auto"
          />
          <span className="font-mono text-xs tracking-wider uppercase font-bold">
            RHASAUN CAMPBELL
          </span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-6 text-primary">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hover:opacity-70 transition-opacity flex items-center justify-center p-1"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="group flex items-center gap-2 font-mono text-xs tracking-wider uppercase hover:opacity-70 transition-opacity"
          >
            <span>{isMenuOpen ? "CLOSE" : "MENU"}</span>
            <span className="text-lg leading-none">
              {isMenuOpen ? "×" : "+"}
            </span>
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background text-foreground flex flex-col items-center justify-center border-b border-border/50"
          >
            {/* Grid Background in Menu */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                  linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                backgroundSize: '4rem 4rem'
              }}
            />

            <nav className="relative z-10 flex flex-col gap-8 text-center">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative"
                >
                  <span className="block text-4xl md:text-6xl font-medium tracking-tighter hover:text-muted-foreground transition-colors">
                    {item.label}
                  </span>
                  <span className="absolute -left-8 top-1/2 -translate-y-1/2 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                    [0{index + 1}]
                  </span>
                </motion.button>
              ))}
            </nav>

            <div className="absolute bottom-8 left-8 font-mono text-xs opacity-50">
              [ NAV_SYS_V3 ]
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}