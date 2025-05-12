"use client"; // Ensures this component runs on the client-side only (important for hooks like useScroll)

import { motion, MotionValue, useScroll, useTransform } from "motion/react"; // Animation & scroll handling from Framer Motion
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils"; // Utility for conditional className merging (tailwind-safe)

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string; // The string of text to animate (must be a plain string)
}

// Main animated component
export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null); // Ref for scroll tracking
  const { scrollYProgress } = useScroll({ target: targetRef }); // Hook to track scroll progress of the target

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string"); // Safety check
  }

  const words = children.split(" "); // Split sentence into individual words

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      {/* Sticky section so words animate while scrolling */}
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center justify-center bg-transparent px-[1rem] py-[5rem]">
        {/* Word container - uses Tailwind to wrap and center text */}
        <div className="flex flex-wrap justify-center text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length; // Starting scroll position for the word
            const end = start + 1 / words.length; // Ending scroll position
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                className={className} // Optional: pass in custom styling
              >
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>; // Scroll progress value
  range: [number, number]; // Range of scroll where opacity will change
  className?: string;
}

// Word component with scroll-controlled opacity animation
const Word: FC<WordProps> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0, 1]); // Map scroll progress to opacity

  return (
    <motion.span
      style={{ opacity }} // Animate opacity
      className={cn("mx-1 transition-opacity duration-300", className)} // Space between words and transition styling
    >
      {children}
    </motion.span>
  );
};
