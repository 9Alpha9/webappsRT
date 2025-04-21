"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        // Fade dari kiri
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{
          duration: 0.9,
          delay: 1, // delay 0.2 detik
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
