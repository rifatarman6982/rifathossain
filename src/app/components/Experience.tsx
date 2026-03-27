import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior UI/UX Designer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description:
      "Leading design initiatives for enterprise software products, managing a team of 3 designers, and establishing design systems.",
  },
  {
    type: "work",
    title: "UI/UX Designer",
    company: "Digital Studios Inc.",
    period: "2020 - 2022",
    description:
      "Designed mobile and web applications for various clients, conducted user research, and created interactive prototypes.",
  },
  {
    type: "work",
    title: "Junior Designer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description:
      "Assisted in creating user interfaces, wireframes, and visual designs for web and mobile applications.",
  },
];

const education = [
  {
    type: "education",
    title: "Master of Design",
    company: "Design Institute",
    period: "2016 - 2018",
    description:
      "Specialized in Human-Computer Interaction and User Experience Design.",
  },
  {
    type: "education",
    title: "Bachelor of Fine Arts",
    company: "Art & Design University",
    period: "2012 - 2016",
    description:
      "Major in Graphic Design with focus on digital media and interactive design.",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-32 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="relative pl-8 pb-8 border-l-2 border-zinc-800 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="absolute -left-[9px] top-0 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"
                  />

                  <div className="bg-zinc-800/50 p-6 rounded-xl hover:bg-zinc-800 transition-all duration-300">
                    <span className="text-sm text-cyan-400 font-semibold">
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-semibold text-white mt-2 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-zinc-400 mb-3">{exp.company}</p>
                    <p className="text-zinc-500 text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: -10 }}
                  className="relative pl-8 pb-8 border-l-2 border-zinc-800 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="absolute -left-[9px] top-0 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"
                  />

                  <div className="bg-zinc-800/50 p-6 rounded-xl hover:bg-zinc-800 transition-all duration-300">
                    <span className="text-sm text-cyan-400 font-semibold">
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-semibold text-white mt-2 mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-zinc-400 mb-3">{edu.company}</p>
                    <p className="text-zinc-500 text-sm">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
