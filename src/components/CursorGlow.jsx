import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${positionRef.current.x}px`;
          cursorRef.current.style.top = `${positionRef.current.y}px`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[100] mix-blend-darken"
      style={{
        width: "350px",
        height: "350px",
        background:
          "radial-gradient(circle, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.15) 40%, transparent 70%)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        filter: "blur(40px)",
      }}
    />
  );
}
