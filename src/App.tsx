import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { ScrollProvider } from "./contexts/ScrollContext";
import Home from "./pages/Home";
import Kredit from "./pages/Kredit";
import Sinopsis from "./pages/Sinopsis";
import Video from "./pages/Video";
import CustomCursor from "./components/CustomCursor";

export default function App() {

  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${clientX}px`;
      cursorRef.current.style.top = `${clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="root">
      <ScrollProvider>
        <Navbar />
        <Home />
        <Sinopsis />
        <Video />
        <Kredit />
        <CustomCursor />
      </ScrollProvider>
    </div>
  );

}