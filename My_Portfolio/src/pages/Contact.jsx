import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import "../css/Contact.css";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // Generate captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  // Initialize captcha
  if (!captcha) {
    setCaptcha(generateCaptcha());
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if (captchaInput.trim().toUpperCase() !== captcha) {
      setStatus("❌ Captcha does not match.");
      return;
    }

    setStatus("Sending...");
    try {
      await emailjs.sendForm(
        "service_176ft2h",
        "template_7gxcgfs",
        formRef.current,
        { publicKey: "eY3FntSQXGXj4Xx38" }
      );
      setStatus("✅ Message sent! I will get back to you soon.");
      formRef.current.reset();
      setCaptcha(generateCaptcha()); // refresh captcha
      setCaptchaInput("");
    } catch (err) {
      setStatus("❌ Failed to send. Please try again later.");
      console.error(err);
    }
  };

  return (
    <main className="container contact-page">
      <h2 className="contact-title">CONTACT</h2>
      <h3 className="contact-sub">I&apos;d ♡ to Connect!</h3>
      <p className="contact-desc">
        I like to create things with fun, open-minded people. Feel free to say
        hello!
      </p>

      <div className="contact-grid">
        {/* Left form */}
        <form ref={formRef} onSubmit={onSubmit} className="contact-form">
          <input name="from_name" type="text" placeholder="Your Name" required />
          <input
            name="from_email"
            type="email"
            placeholder="Email"
            required
          />
          <textarea name="message" placeholder="Message" rows="5" required />

          {/* Captcha */}
          <div className="captcha-wrap">
            <span className="captcha-text">{captcha}</span>
            <input
              type="text"
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />
          </div>

          <button className="btn send-btn" type="submit">
            Send
          </button>
          <p className="status">{status}</p>
        </form>

        {/* Right contact details */}
        <div className="contact-details">
          <p>
            <strong>Venkata Jayanth</strong>
          </p>
          <p>
            <FaPhone /> +91-6353560225
          </p>
          <p>
            <FaEnvelope /> venkatajayanth.k143@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt /> Andhra Pradesh, India
          </p>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/venkata-jayanth/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Venkata-Jayanth04" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
