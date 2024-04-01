import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Kredit from "./pages/Kredit";
import Sinopsis from "./pages/Sinopsis";
import Video from "./pages/Video";

export default function App() {
  return (
    <div className="root">
      <Navbar />
        <Home />
        <Sinopsis />
        <Video />
        <Kredit />
    </div>
  );

}