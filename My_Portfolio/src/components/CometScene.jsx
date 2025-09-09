import React, { useEffect, useRef } from "react";

export default function FireflyScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    class Firefly {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 2; // small glowing dot
        this.speedX = (Math.random() - 0.5) * 0.6; 
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.6 + 0.4;
        this.flicker = Math.random() * 0.1 + 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // bounce at edges
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        // flicker effect
        this.opacity += (Math.random() - 0.5) * this.flicker;
        if (this.opacity < 0.2) this.opacity = 0.2;
        if (this.opacity > 1) this.opacity = 1;
      }

      draw() {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 4
        );
        gradient.addColorStop(0, `rgba(255, 255, 180, ${this.opacity})`); // warm glow
        gradient.addColorStop(1, "rgba(255, 255, 180, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const fireflies = Array.from({ length: 40 }, () => new Firefly());

    function animate() {
      ctx.clearRect(0, 0, width, height);
      fireflies.forEach((f) => {
        f.update();
        f.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
}
