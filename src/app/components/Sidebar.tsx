import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail, Facebook, Linkedin, Dribbble, Sun, Moon } from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

interface SidebarProps {
  activeSection: string;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About Me", icon: User },
  { id: "resume", label: "Resume", icon: Briefcase },
  { id: "portfolio", label: "Portfolio", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Sidebar({ activeSection }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button - Profile Image */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/20"
        aria-label="Toggle menu"
      >
        <img
          src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwbWFufGVufDF8fHx8MTc3NDE3MTIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-zinc-900 z-50 lg:hidden overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <SidebarContent activeSection={activeSection} scrollToSection={scrollToSection} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:block fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-zinc-900 z-40 overflow-y-auto shadow-2xl"
      >
        <SidebarContent activeSection={activeSection} scrollToSection={scrollToSection} />
      </motion.aside>
    </>
  );
}

interface SidebarContentProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

function SidebarContent({ activeSection, scrollToSection }: SidebarContentProps) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col h-full p-6 sm:p-8">
      {/* Dark/Light Mode Toggle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center mb-6"
      >
        <button
          onClick={toggleTheme}
          className="relative w-16 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full p-1 transition-colors duration-300 hover:bg-zinc-300 dark:hover:bg-zinc-700"
          aria-label="Toggle theme"
        >
          <motion.div
            animate={{ x: isDarkMode ? 0 : 32 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
          >
            {isDarkMode ? (
              <Moon size={14} className="text-white" />
            ) : (
              <Sun size={14} className="text-white" />
            )}
          </motion.div>
        </button>
      </motion.div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cyan-400/20">
          <img
            src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwbWFufGVufDF8fHx8MTc3NDE3MTIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-1">Md Rifat Hossain</h2>
        <p className="text-cyan-400 text-xs sm:text-sm">UI/UX Designer</p>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base ${
                    isActive
                      ? "bg-cyan-400 text-zinc-900"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-zinc-900"
                    />
                  )}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="pt-6 sm:pt-8 border-t border-zinc-200 dark:border-zinc-800"
      >
        <p className="text-zinc-500 text-xs sm:text-sm text-center mb-3 sm:mb-4">Follow Me</p>
        <div className="flex justify-center gap-2 sm:gap-3">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
            aria-label="Behance"
          >
            <FaBehance className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
            aria-label="Dribbble"
          >
            <Dribbble size={18} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}