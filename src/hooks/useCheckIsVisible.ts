import { useEffect, useRef, useState } from "react";
import useScrollContext from "./useScrollContext";

export default function useCheckIsVisible<T extends HTMLElement>() {
    const { scrollY } = useScrollContext();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<T | null>(null);

    useEffect(() => {
        function checkVisibility() {
            const element = ref.current
            if (element) {
                const rect = element.getBoundingClientRect();
                const inViewport = rect.bottom > 0;
                setIsVisible(inViewport);
            }
        };

        checkVisibility();
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);

        return () => {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    }, [scrollY]);

    return { isVisible, ref };
};
