import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Code, Palette, Users, Award } from "lucide-react";
import { AnimatedCounter } from "../AnimatedCounter";

const skills = [
  { name: "App Design", percentage: 95 },
  { name: "Website Design ", percentage: 90 },
  { name: "Dashboard Design", percentage: 90 },
  { name: "Prototyping", percentage: 95},
  { name: "User Research", percentage: 88 },
];

const stats = [
  { icon: Award, value: "2+", label: "Years Experience" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Code, value: "50+", label: "Projects Done" },
  { icon: Palette, value: "50+", label: "Cup of Coffe" },
  
];

// Random transition variants
const transitions = [
  { duration: 0.6, ease: "easeInOut" },
  { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
  { duration: 0.7, ease: "easeOut" },
  { duration: 0.75, ease: [0.6, -0.05, 0.01, 0.99] },
  { duration: 0.65, ease: "anticipate" },
];

const getRandomTransition = () => transitions[Math.floor(Math.random() * transitions.length)];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="min-h-screen py-16 sm:py-20 lg:py-32 bg-white dark:bg-zinc-900 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getRandomTransition()}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {/* Left Column - About Info */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={getRandomTransition()}
            className="bg-zinc-100/50 dark:bg-zinc-800/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-400/10"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6 sm:mb-8 group-hover:text-cyan-400 transition-colors duration-300">
                About Me
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm a passionate UI/UX designer with over 5 years of experience creating
                beautiful and functional digital experiences. I love turning complex problems
                into simple, intuitive designs that users enjoy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-zinc-500 text-xs sm:text-sm mb-1">Email:</p>
                  <p className="text-black dark:text-white font-semibold text-sm sm:text-base">rifat@example.com</p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-zinc-500 text-xs sm:text-sm mb-1">Phone:</p>
                  <p className="text-black dark:text-white font-semibold text-sm sm:text-base">+1 (555) 123-4567</p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-zinc-500 text-xs sm:text-sm mb-1">Location:</p>
                  <p className="text-black dark:text-white font-semibold text-sm sm:text-base">Dhaka, Bangladesh</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={getRandomTransition()}
            className="bg-zinc-100/50 dark:bg-zinc-800/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-400/10"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6 sm:mb-8 group-hover:text-cyan-400 transition-colors duration-300">
                My Skills
              </h3>
              <div className="space-y-5 sm:space-y-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-black dark:text-white font-medium text-sm sm:text-base">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 + 0.5 }}
                        className="text-cyan-400 font-semibold text-sm sm:text-base"
                      >
                        {skill.percentage}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%`, opacity: 1 } : {}}
                        transition={{ 
                          duration: 1.2,
                          delay: 0.6 + index * 0.1,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: [0.5, 1, 0.5] } : {}}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.6 + index * 0.1 + 1.2,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...getRandomTransition(), delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-zinc-100/50 dark:bg-zinc-800/50 p-4 sm:p-6 rounded-xl text-center border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400/50 transition-all"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <Icon className="text-cyan-400 mx-auto mb-3 sm:mb-4" size={28} />
                </motion.div>
                <h4 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-1 sm:mb-2">
                  <AnimatedCounter value={stat.value} isInView={isInView} />
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}