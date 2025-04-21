"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimation({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
