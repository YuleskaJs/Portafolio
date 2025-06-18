import { motion, useAnimation, Variants } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
}

const AnimatedSection = ({ children, direction = "left" }: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // ← para que se repita
    threshold: 0.3,     // ← % visible para disparar
  });

  const animationVariants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
