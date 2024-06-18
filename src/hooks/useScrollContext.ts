import { useContext } from "react";
import ScrollContext from "../contexts/ScrollContext";

export default function useScrollContext() {
    const scrollY = useContext(ScrollContext);

    if(scrollY === undefined) throw new Error('useScrollContext must be used within a ScrollProvider');

    return scrollY;
}