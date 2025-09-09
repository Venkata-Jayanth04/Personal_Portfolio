import "../css/About.css";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "C", icon: "C.svg" },
    { name: "C++", icon: "cpp.svg" },
    { name: "Python", icon: "python.svg" },
    { name: "JavaScript", icon: "js.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Node.js", icon: "node.svg" },
    { name: "OpenCV", icon: "opencv.svg" },
    { name: "PHP", icon: "php.svg" }
  ];

  return (
    <main className="container about-page">
      <section className="about-top">
        {/* Profile image animates from left */}
        <motion.div
          className="portrait-wrap"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/assets/1.jpg" alt="Profile" className="portrait" />
        </motion.div>

        {/* About text animates from right */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            I'm a developer who blends design sense with engineering discipline.
            I enjoy crafting immersive web experiences, building ML-backed tools,
            and shipping polished UI with smooth performance.
          </p>
        </motion.div>
      </section>

      {/* Skills grid */}
      <motion.section
        className="skills-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Skills</h3>
        <div className="skill-grid">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill-cube"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <img src={`/icons/${s.icon}`} alt={s.name} />
              <span className="skill-label">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
