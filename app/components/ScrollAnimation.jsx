"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimation({ children, delay = 0.3 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -80px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: 1.5,
        delay: 0.9,
        ease: [1, 0.06, 0.22, 0.83],
      }}
    >
      {children}
    </motion.div>
  );
}
