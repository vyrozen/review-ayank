import "./App.css";
import Mainpage from "./components/Mainpage";
import { Fade } from "react-awesome-reveal";

function App() {
  document.body.classList.add("w-full", "h-auto", "bg-pink-200/50");
  return (
    <>
      <div>
        <Mainpage />
      </div>
    </>
  );
}

export default App;
