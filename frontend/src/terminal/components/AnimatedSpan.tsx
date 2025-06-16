"use client";

import { motion } from "motion/react";
import type { MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className="grid text-sm font-normal tracking-tight"
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  const isString = typeof children === "string";

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);

  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);

      return () => clearTimeout(startTimeout);
    }
  }, [isInView, delay]);

  useEffect(() => {
    if (!started || !isString) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      setDisplayedText((children as string).substring(0, i + 1));
      i++;

      if (i >= (children as string).length) {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [children, duration, started, isString]);

  return (
    <MotionComponent
      ref={inViewRef}
      className={`text-sm font-normal tracking-tight ${className || ""}`}
      {...props}
    >
      {isString ? displayedText : children}
    </MotionComponent>
  );
};


interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal = ({ children, className }: TerminalProps) => {
  return (
    <div
      className={`z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-border bg-background ${className || ""}`}
    >
      <div className="flex flex-col gap-y-2 border-b border-border p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{children}</code>
      </pre>
    </div>
  );
};
