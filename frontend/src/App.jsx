import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Upload from "./pages/Upload/Upload";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
      </Routes>
    </>
  );
}

export default App;
