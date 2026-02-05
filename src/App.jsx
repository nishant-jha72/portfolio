import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiDownload, FiSun, FiMoon, FiMail } from "react-icons/fi";

// Social links
const socials = [
  { name: "GitHub", href: "https://github.com/nishant-jha72" },
  { name: "LinkedIn", href: "https://linkedin.com/in/nishant-jha-3b6aba265" },
];

// Project data
const projects = [
  {
  {
    id: 1,
    title: "PROMOS (In Progress)",
    desc:
      "Building a MERN-based platform that connects promoters and creators. Developed the frontend for both user roles.",
    tech: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js"],
    link: "https://github.com/nishant-jha72/PROMOS",
  },
    {
    id: 2,
    title: "Internshala Clone (Minor Project)",
    desc:
      "College minor project: Full-stack web app built using MERN stack. Collaborated as backend developer; deployed on Render.",
    tech: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js"],
    link: "https://github.com/nishant-jha72/internshala-clone",
  },
  id: 3,
    title: "Hospital Management System (Major Project)",
    desc:
      "Developed a QT based application for hospital management: appointing doctors, booking appointments, and fee payment. Used SMTP to send appointment details to users and doctors on due date.",
    tech: ["QT", "C++", "MySQL", "SMTP"],
    link: "https://github.com/nishant-jha72/hospital-management-system-using-c-and-mysql",
  },
  {
    id: 4,
    title: "Online Quiz System",
    desc:
      "Building a CLI based quiz System using C++ as Primary Language and SQL as DATABASE Connection.",
    tech: ["C++", "MySQL"],
    link: "https://github.com/nishant-jha72/quiz_system_with_c-",
  }
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const handleThemeToggle = () => setDark(!dark);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 dark:from-indigo-900 dark:to-pink-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* Navigation */}
        <nav className="container mx-auto p-4 flex items-center justify-between">
          <a href="#home" className="font-bold text-xl tracking-tight">Nishant Jha</a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <button onClick={handleThemeToggle} aria-label="Toggle theme" className="p-2 rounded-md">
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border dark:border-gray-700 hover:bg-indigo-600 hover:text-white transition"
            >
              <FiDownload /> Resume
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
            {navOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: navOpen ? "180px" : 0 }}
          transition={{ type: "spring" }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col p-4 gap-3">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </motion.div>

        {/* Home Section */}
        <motion.section
          id="home"
          className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left: Intro */}
          <motion.div initial={{ x: -30 }} animate={{ x: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-indigo-500 font-medium">Hi, I am</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Nishant Jha
            </h1>
            <p className="mt-4 max-w-xl text-lg">
              I build scalable backend systems and full-stack web products. Currently working on generative AI, IoT projects, and energy-efficient systems. Well-versed in problem-solving and passionate about emerging tech.
            </p>

            <div className="mt-6 flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 rounded-md bg-indigo-600 text-white shadow-lg"
              >
                See Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 rounded-md border dark:border-gray-700"
              >
                Get in touch
              </motion.a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  {s.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Animated Profile Picture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full p-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 animate-spin-slow">
              <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center p-2">
                <img
                  src="/profile.jpeg" // replace with your profile image path
                  alt="Nishant Jha"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-2">Projects</h2>
          <p className="text-sm opacity-80 mb-6">A selection of projects I built — full source and case studies available.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-800 shadow"
              >
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm opacity-80">{p.desc}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href={p.link} className="text-indigo-600" target="_blank" rel="noopener noreferrer">View</a>
                  <a href="#contact" className="text-sm inline-flex items-center gap-2"><FiMail /> Hire me</a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* About & Education Section */}
        <motion.section
          id="about"
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="md:col-span-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                Passionate and detail-oriented software developer skilled with C++, Python, web technologies, and AI. Experienced in developing intelligent applications with generative AI and solving algorithmic challenges. Prepping for campus placements and building scalable web products.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                <li>Languages: C, Python, C++</li>
                <li>Frameworks: React.js, Node.js, Express.js, QT</li>
                <li>Databases: MySQL, MongoDB</li>
                <li>Tools: Git, Docker, Kafka (learning), Vertex AI</li>
              </ul>
            </motion.div>

            <motion.aside whileHover={{ scale: 1.02 }} className="p-4 rounded-xl border dark:border-gray-700">
              <h4 className="font-medium">Quick Info</h4>
              <p className="text-sm opacity-80 mt-2">B.Tech Final Year Student @Meerut Institute of Technology (AKTU)</p>
              <p className="text-sm opacity-80">CGPA: 7.2</p>
              <p className="text-sm opacity-80">Location: Banka, Bihar / Meerut, India</p>
              <a className="mt-4 inline-block text-sm" href="/resume.pdf">Download Resume</a>
            </motion.aside>
          </div>

          {/* Education Timeline */}
          <div className="mt-12 relative">
            <h3 className="text-xl font-bold text-center mb-8">Education Journey</h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-pink-400 to-purple-400 transform -translate-x-1/2"></div>

              {/* Step 1 */}
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="mb-12 flex justify-between items-center w-full">
                <div className="w-5/12 text-right">
                  <h4 className="font-semibold text-lg text-indigo-700 dark:text-pink-400">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Meerut Institute of Technology (2022–2026)</p>
                  <p className="text-xs text-gray-500 mt-1">Percentage: 73.2%</p>
                </div>
                <div className="rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-3"></div>
                <div className="w-5/12"></div>
              </motion.div>

              {/* Step 2 */}
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-12 flex justify-between items-center w-full">
                <div className="w-5/12"></div>
                <div className="rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 p-3"></div>
                <div className="w-5/12">
                  <h4 className="font-semibold text-lg text-indigo-700 dark:text-pink-400">Intermediate (12th)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Marwari College, Bhagalpur — BSEB Board</p>
                  <p className="text-xs text-gray-500 mt-1">Percentage: 73.8%</p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-12 flex justify-between items-center w-full">
                <div className="w-5/12 text-right">
                  <h4 className="font-semibold text-lg text-indigo-700 dark:text-pink-400">Matriculation (10th)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">MVHS High School, Bharatshila — BSEB Board</p>
                  <p className="text-xs text-gray-500 mt-1">Percentage: 78.6%</p>
                </div>
                <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-3"></div>
                <div className="w-5/12"></div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              action="https://formspree.io/f/yourformid"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="text-sm">Your name</label>
                <input name="name" required className="w-full mt-1 p-3 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input name="email" type="email" required className="w-full mt-1 p-3 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800" />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea name="message" required rows={5} className="w-full mt-1 p-3 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800" />
              </div>
              <button type="submit" className="px-6 py-3 rounded-md bg-indigo-600 text-white inline-flex items-center gap-2">
                <FiMail /> Send Message
              </button>
            </motion.form>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-lg border dark:border-gray-700">
              <h4 className="font-medium">Other ways to reach me</h4>
              <p  className="mt-2 text-sm opacity-80">Email: nishant.jha@mitmeerut.ac.in</p>
              <p className="mt-1 text-sm opacity-80">Phone: +91-9142198460 </p>
              <p className="mt-1 text-sm opacity-80">Location: Banka, Bihar / Meerut, India</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm opacity-70 border-t dark:border-gray-700 mt-12">
          © {new Date().getFullYear()} Nishant Jha. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
