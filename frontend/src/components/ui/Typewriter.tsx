import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  cursor?: boolean;
  prompt?: string;
  onComplete?: () => void;
}

const Typewriter = ({
  text,
  className = "",
  speed = 30,
  startDelay = 200,
  cursor = true,
  prompt = "",
  onComplete,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(cursor);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const prefersReducedMotion = useMediaQuery({ query: '(prefers-reduced-motion: reduce)' });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(text);
      if (onComplete) onComplete();
      return;
    }

    if (inView && !isTyping && displayText === "") {
      setIsTyping(true);
      timeoutRef.current = setTimeout(() => {
        let i = 0;
        const type = () => {
          if (i <= text.length) {
            setDisplayText(text.slice(0, i));
            i++;
            timeoutRef.current = setTimeout(type, speed + Math.random() * 20);
          } else {
            setIsTyping(false);
            if (onComplete) onComplete();
          }
        };
        type();
      }, startDelay);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, prefersReducedMotion, text, speed, startDelay, cursor, onComplete]);

  // Parpadeo del cursor al terminar (sin cambiar el ancho del texto)
  useEffect(() => {
    if (prefersReducedMotion || !cursor || isTyping || displayText !== text) return;
    const blink = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(blink);
  }, [prefersReducedMotion, cursor, isTyping, displayText, text]);

  const cursorVisible = prefersReducedMotion ? true : (isTyping ? true : showCursor);

  return (
    <span ref={ref} className={`font-display ${className}`}>
      {prompt && <span className="text-primary mr-2 font-body">{prompt}</span>}
      <span className="text-ink">{displayText}</span>
      {cursor && (
        <span
          className="text-primary ml-1 font-body"
          style={{ opacity: cursorVisible ? 1 : 0, transition: 'opacity 100ms linear' }}
          aria-hidden="true"
        >
          _
        </span>
      )}
    </span>
  );
};

export { Typewriter };
