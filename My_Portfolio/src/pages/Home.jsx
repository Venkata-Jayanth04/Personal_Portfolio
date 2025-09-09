import { motion } from "framer-motion";
import CometScene from "../components/CometScene";
import { Github, Linkedin, Download } from "lucide-react"; // 👈 icons
import "../css/Home.css";

export default function Home() {
  return (
    <main className="container home-center">
      <CometScene />

      <section className="hero-intro">
        <p className="eyebrow">Hello !!!</p>
        <h1 className="hero-name big">
          Venkata&nbsp;Jayanth <br /> Kocherla
        </h1>
        <div className="role-badge large">
          AI/ML Engineer and Web Developer
        </div>
        <p className="hero-copy wider">
          I craft elegant, performant experiences across web and ML — focused on
          clean code, usable design, and building things that matter.
        </p>

        {/* 🔗 Social Icons Row */}
        <motion.div
          className="social-icons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/venkata-jayanth/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <Linkedin size={26} />
          </a>
          <a
            href="https://github.com/Venkata-Jayanth04"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <Github size={26} />
          </a>
          <a href="/assets/VENKATA JAYANTH_202211040_IIITV-ICD.pdf" download className="icon-link">
            <Download size={26} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
