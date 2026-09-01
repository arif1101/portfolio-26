"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export function MotionFadeIn({ children, delay = 0, className, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 16,
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({ children, className, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionCardHover({ children, className, ...props }: MotionDivProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
