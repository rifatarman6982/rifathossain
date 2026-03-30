import { motion } from "motion/react";
import { Download, ChevronDown } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { memo, useEffect, useMemo, useState } from "react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ROLES = ["UI/UX Designer", "Problem Solver", "UI Animator", "UX Researcher"];
const LONGEST_ROLE = ROLES.reduce(
  (longest, role) => (role.length > longest.length ? role : longest),
  ROLES[0]
);

const HomeBackground = memo(function HomeBackground({
  init,
  particlesOptions,
}: {
  init: boolean;
  particlesOptions: ISourceOptions;
}) {
  return (
    <>
      {init && (
        <div
          className="absolute inset-0 z-0"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        >
          <Particles
            id="tsparticles"
            options={particlesOptions}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
        </div>
      )}

      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>
    </>
  );
});

export function HomeSection() {
  const [init, setInit] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const fullText = ROLES[roleIndex];

      setTypedText(fullText.substring(0, charIndex));

      if (!isDeleting && charIndex < fullText.length) {
        charIndex += 1;
        timeoutId = setTimeout(type, 100);
        return;
      }

      if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, 1400);
        return;
      }

      if (isDeleting && charIndex > 0) {
        charIndex -= 1;
        timeoutId = setTimeout(type, 50);
        return;
      }

      isDeleting = false;
      roleIndex = (roleIndex + 1) % ROLES.length;
      timeoutId = setTimeout(type, 250);
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 8,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#06b6d4", "#3b82f6", "#8b5cf6", "#06b6d4", "#0ea5e9"],
        },
        links: {
          color: "#06b6d4",
          distance: 140,
          enable: true,
          opacity: 0.5,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 200,
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
          },
        },
        shape: {
          type: ["circle", "triangle", "polygon", "star"],
        },
        size: {
          value: { min: 1, max: 5 },
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 1,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 overflow-hidden transition-colors duration-300"
      style={{ isolation: "isolate" }}
    >
      <HomeBackground init={init} particlesOptions={particlesOptions} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-4">Hello, I'm</h3>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6 leading-tight"
          >
            Md Rifat Hossain
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
            <div className="relative min-w-[16ch] sm:min-w-[18ch] md:min-w-[20ch]">
              <span className="invisible text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">
                {LONGEST_ROLE}
              </span>
              <p className="absolute inset-0 whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-600 dark:text-zinc-400">
                {typedText}
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl leading-relaxed"
          >
            I design beautiful, user-friendly interfaces that bring ideas to life.
            Passionate about creating seamless digital experiences that users love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow text-sm sm:text-base"
            >
              <Download size={18} />
              Download CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition-all text-sm sm:text-base"
            >
              Hire Me
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={scrollToAbout}
        className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
      >
        <ChevronDown className="text-cyan-400" size={32} />
      </motion.div>
    </section>
  );
}
