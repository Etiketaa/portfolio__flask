import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;        // ms por caracter
  startDelay?: number;   // ms antes de empezar
  cursor?: boolean;      // mostrar cursor parpadeante
  prompt?: string;       // prompt estilo bash (ej: "user@portfolio:~$ ")
  onComplete?: () => void;
}

const Typewriter = ({ 
  text, 
  className = "", 
  speed = 30, 
  startDelay = 200, 
  cursor = true,
  prompt = "",
  onComplete 
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(cursor);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const prefersReducedMotion = useMediaQuery({ query: '(prefers-reduced-motion: reduce)' });
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(text);
      if (onComplete) onComplete();
      return;
    }

    if (inView && !isTyping) {
      setIsTyping(true);
      timeoutRef.current = setTimeout(() => {
        let i = 0;
        const type = () => {
          if (i <= text.length) {
            setDisplayText(text.slice(0, i));
            i++;
            timeoutRef.current = setTimeout(type, speed + Math.random() * 20); // variación humana
          } else {
            setIsTyping(false);
            if (onComplete) onComplete();
            // Parpadeo del cursor al final
            if (cursor) {
              const blink = setInterval(() => setShowCursor(prev => !prev), 530);
              return () => clearInterval(blink);
            }
          }
        };
        type();
      }, startDelay);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, prefersReducedMotion, text, speed, startDelay, cursor, onComplete]);

  return (
    <span ref={ref} className={`font-display ${className}`}>
      {prompt && <span className="text-primary mr-2 font-body">{prompt}</span>}
      <span className="text-ink">{displayText}</span>
      {cursor && isTyping && <span className="text-primary animate-pulse-soft ml-1 font-body">_</span>}
      {cursor && !isTyping && displayText === text && showCursor && <span className="text-primary ml-1 font-body">_</span>}
    </span>
  );
};

export { Typewriter };