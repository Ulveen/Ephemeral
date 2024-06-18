import { useRef, useEffect } from "react";
import './CustomCursor.css'

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const moveCursor = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        if(!cursorRef.current) return;
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      };
  
      document.addEventListener('mousemove', moveCursor);
  
      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    }, []);

    return (
        <div className="custom-cursor" ref={cursorRef} />
    )
}