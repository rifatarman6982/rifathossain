import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const education = [
  {
    year: "2015 - 2019",
    degree: "Bachelor of Design",
    institution: "University of Creative Arts",
    description:
      "Studied design fundamentals, user experience principles, and modern design tools.",
  },
  {
    year: "2019 - 2020",
    degree: "Master in UX Design",
    institution: "Design Institute of Technology",
    description:
      "Advanced studies in user research, interaction design, and design thinking methodologies.",
  },
];

const experience = [
  {
    year: "2020 - Present",
    position: "Senior UI/UX Designer",
    company: "Creative Digital Agency",
    description:
      "Leading design projects for major clients, mentoring junior designers, and establishing design systems.",
  },
  {
    year: "2019 - 2020",
    position: "UI/UX Designer",
    company: "Tech Startup Inc.",
    description:
      "Designed user interfaces for mobile and web applications, conducted user research and usability testing.",
  },
  {
    year: "2018 - 2019",
    position: "Junior Designer",
    company: "Design Studio",
    description:
      "Assisted in creating wireframes, prototypes, and visual designs for various client projects.",
  },
];

const certificates = [
  {
    title: "Psychology of Interaction Design",
    organization: "GoldenGrid Academy",
    membershipId: "XXXX-XXXX-XXXX",
    date: "19 April 2018",
    image: "https://images.unsplash.com/photo-1613825787346-ef9c6189774b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGJhZGdlJTIwYXdhcmQlMjBnb2xkfGVufDF8fHx8MTc3NDI1NjkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Advanced UI/UX Design",
    organization: "Design Institute",
    membershipId: "YYYY-YYYY-YYYY",
    date: "15 June 2019",
    image: "https://images.unsplash.com/photo-1762330916233-221b49fce7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0aW9uJTIwbG9nbyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQyNTY5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "User Research & Testing",
    organization: "UX Professionals",
    membershipId: "ZZZZ-ZZZZ-ZZZZ",
    date: "22 September 2020",
    image: "https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXBsb21hJTIwY2VydGlmaWNhdGUlMjBkZXNpZ258ZW58MXx8fHwxNzc0MjU2OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
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

export function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="resume" className="min-h-screen py-16 sm:py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}  }
          transition={getRandomTransition()}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            My <span className="text-cyan-400">Resume</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={getRandomTransition()}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                  transition={{ ...getRandomTransition(), delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-zinc-200 dark:border-zinc-800 last:pb-0"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ ...getRandomTransition(), delay: 0.4 + index * 0.1 }}
                    className="absolute -left-[9px] top-0 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"
                  />
                  <motion.div 
                    className="bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-cyan-400/50 transition-all group relative overflow-hidden"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 60px -15px rgba(6, 182, 212, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs sm:text-sm rounded-full mb-3 group-hover:bg-cyan-400/20 transition-colors duration-300">
                        {item.year}
                      </span>
                      <motion.h4 
                        className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.degree}
                      </motion.h4>
                      <p className="text-cyan-400 mb-2 sm:mb-3 font-medium text-sm sm:text-base">{item.institution}</p>
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={getRandomTransition()}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, rotate: 2 }}
                  animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                  transition={{ ...getRandomTransition(), delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-zinc-200 dark:border-zinc-800 last:pb-0"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ ...getRandomTransition(), delay: 0.4 + index * 0.1 }}
                    className="absolute -left-[9px] top-0 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"
                  />
                  <motion.div 
                    className="bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-cyan-400/50 transition-all group relative overflow-hidden"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 60px -15px rgba(6, 182, 212, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs sm:text-sm rounded-full mb-3 group-hover:bg-cyan-400/20 transition-colors duration-300">
                        {item.year}
                      </span>
                      <motion.h4 
                        className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.position}
                      </motion.h4>
                      <p className="text-cyan-400 mb-2 sm:mb-3 font-medium text-sm sm:text-base">{item.company}</p>
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-16 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...getRandomTransition(), delay: 0.9 }}
            className="flex items-center gap-3 mb-8 sm:mb-10"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Award className="text-white" size={20} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Certificates</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
                transition={{ ...getRandomTransition(), delay: 1.0 + index * 0.15 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 } 
                }}
                className="bg-white dark:bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:border-cyan-400/50 transition-all group shadow-lg hover:shadow-2xl hover:shadow-cyan-400/10"
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                <div className="flex h-full">
                  {/* Certificate Image/Logo */}
                  <motion.div 
                    className="w-32 sm:w-36 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center p-4 flex-shrink-0 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <div className="relative w-full h-full z-10">
                      <img
                        src={cert.image}
                        alt={cert.organization}
                        className="w-full h-full object-cover rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </motion.div>

                  {/* Certificate Details */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center">
                    <motion.h4 
                      className="text-base sm:text-lg font-bold text-black dark:text-white mb-2 leading-tight"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.1 + index * 0.15 }}
                    >
                      {cert.title}
                    </motion.h4>
                    <motion.p 
                      className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.15 }}
                    >
                      Membership ID: {cert.membershipId}
                    </motion.p>
                    <motion.p 
                      className="text-zinc-500 text-xs flex items-center gap-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.3 + index * 0.15 }}
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                      {cert.date}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}