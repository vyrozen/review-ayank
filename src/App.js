import "./App.css";

import Mainpage from "./components/Mainpage";

function App() {
  document.body.classList.add(
    "w-full",
    "h-auto",
    "bg-pink-200/50",
    "overflow-x-hidden"
  );
  return (
    <>
      <div>
        <Mainpage />
      </div>
    </>
  );
}

export default App;
