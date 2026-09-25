import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Subproject from "./Subproject";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subproject" element={<Subproject />} />
      </Routes>
    </BrowserRouter>
  )
}