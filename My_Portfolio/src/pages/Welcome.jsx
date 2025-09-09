import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Welcome.css";

const welcomeBg = "/assets/Welcome-bg.jpg";

export default function Welcome() {
  const [step, setStep] = useState(0); // 0=intro, 1=WELCOME, 2=zoom
  const navigate = useNavigate();

  const pageRef = useRef(null);
  const cRef = useRef(null);

  const handleClick = () => {
    if (step !== 0) return;
    setStep(1); // show "WELCOME"
    setTimeout(() => setStep(2), 1500); // hold 1.5s then zoom
  };

  useEffect(() => {
    if (step === 2 && pageRef.current && cRef.current) {
      const rect = cRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // Set CSS vars for transform-origin in pixels (viewport-based)
      pageRef.current.style.setProperty("--zoom-x", `${cx}px`);
      pageRef.current.style.setProperty("--zoom-y", `${cy}px`);

      // Trigger zooming class
      pageRef.current.classList.add("zooming");

      // Navigate after the zoom finishes (keep in sync with CSS duration)
      const t = setTimeout(() => navigate("/home"), 1300);
      return () => clearTimeout(t);
    }
  }, [step, navigate]);

  return (
    <main
      ref={pageRef}
      className="welcome-page"
      style={{ "--welcome-bg": `url(${welcomeBg})` }}
      onClick={handleClick}
    >
      <div className="welcome-content">
        {step === 0 && (
          <>
            <h1 className="welcome-title">
              Explore my world of innovation
            </h1>
            <p className="welcome-sub">Touch anywhere to begin the journey.</p>
          </>
        )}

        {step === 1 && <h1 className="welcome-final">WELCOME</h1>}

        {step === 2 && (
          <h1 className="welcome-final zoom-c">
            WEL<span ref={cRef} className="zoom-target">C</span>OME
          </h1>
        )}
      </div>
    </main>
  );
}
