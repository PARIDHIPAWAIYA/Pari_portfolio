import { useState } from "react";
import { motion } from "framer-motion";

const MouseGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      <div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)",
          left: pos.x - 192,
          top: pos.y - 192,
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />
    </motion.div>
  );
};

export default MouseGlow;
