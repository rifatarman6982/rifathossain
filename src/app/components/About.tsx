import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code2, Palette, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Creative Design",
    description: "Transforming ideas into visually stunning interfaces",
  },
  {
    icon: Code2,
    title: "User-Centered",
    description: "Designing with empathy and user needs in mind",
  },
  {
    icon: Zap,
    title: "Fast Prototyping",
    description: "Rapid iterations to bring concepts to life",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working seamlessly with cross-functional teams",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1652498196118-4577d5f6abd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB1aSUyMHV4JTIwZGVzaWduZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0MjQ3MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="UI/UX Designer workspace"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              I'm Md Rifat Hossain, a passionate UI/UX Designer
            </h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              With a keen eye for detail and a passion for creating seamless user
              experiences, I specialize in crafting digital products that are not
              only visually appealing but also highly functional and user-friendly.
            </p>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              My design philosophy centers around understanding user needs,
              iterative design processes, and staying current with the latest design
              trends and technologies. I believe great design is invisible – it just
              works.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-zinc-800 rounded-full text-cyan-400 text-sm">
                5+ Years Experience
              </div>
              <div className="px-4 py-2 bg-zinc-800 rounded-full text-cyan-400 text-sm">
                50+ Projects Completed
              </div>
              <div className="px-4 py-2 bg-zinc-800 rounded-full text-cyan-400 text-sm">
                Happy Clients Worldwide
              </div>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h4>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
