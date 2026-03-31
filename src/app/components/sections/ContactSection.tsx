import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Facebook, Linkedin, Dribbble } from "lucide-react";
import { FaBehance } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "rifatarman82@gamil.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+880 194556-7646",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Dhaka, Bangladesh",
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

const getRandomTransition = () =>
  transitions[Math.floor(Math.random() * transitions.length)];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 sm:py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -1 }}
            animate={
              isInView ? { opacity: 1, x: 0, rotate: 0 } : {}
            }
            transition={getRandomTransition()}
            className="space-y-4 sm:space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                  }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-cyan-400/50 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={18} />
                  </div>
                  <div>
                    <h4 className="text-black dark:text-white font-semibold mb-1 text-sm sm:text-base">
                      {info.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm break-all">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                ...getRandomTransition(),
                delay: 0.6,
              }}
              className="p-4 sm:p-6 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-xl border border-cyan-400/20"
            >
              <h4 className="text-black dark:text-white font-semibold mb-3 text-sm sm:text-base">
                Follow Me
              </h4>
              <div className="flex gap-2 sm:gap-3">
                <motion.a
                  href="https://www.facebook.com/rifatarman22/"
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-cyan-400 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </motion.a>
                <motion.a
                  href="https://www.behance.net/rifatarman1"
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-cyan-400 hover:text-white transition-all"
                  aria-label="Behance"
                >
                  <FaBehance size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rifat-hossain82/"
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-cyan-400 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="https://dribbble.com/search/Md-Rifat-Hossain"
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-cyan-400 hover:text-white transition-all"
                  aria-label="Dribbble"
                >
                  <Dribbble size={18} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, x: 0, scale: 1 } : {}
            }
            transition={getRandomTransition()}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative">
                  <label className="block text-zinc-600 dark:text-zinc-400 mb-2 text-xs sm:text-sm font-medium">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ 
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-lg focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 focus:outline-none text-black dark:text-white transition-all placeholder:text-zinc-400 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div className="relative">
                  <label className="block text-zinc-600 dark:text-zinc-400 mb-2 text-xs sm:text-sm font-medium">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ 
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-lg focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 focus:outline-none text-black dark:text-white transition-all placeholder:text-zinc-400 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-zinc-600 dark:text-zinc-400 mb-2 text-xs sm:text-sm font-medium">
                  Subject
                </label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  whileFocus={{ 
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-lg focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 focus:outline-none text-black dark:text-white transition-all placeholder:text-zinc-400 text-sm sm:text-base"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="relative">
                <label className="block text-zinc-600 dark:text-zinc-400 mb-2 text-xs sm:text-sm font-medium">
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  whileFocus={{ 
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-lg focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 focus:outline-none text-black dark:text-white transition-all resize-none placeholder:text-zinc-400 text-sm sm:text-base"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <Send
                    className="group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center"
        >
          <p className="text-zinc-500 text-xs sm:text-sm">
            © 2024 Md Rifat Hossain. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}