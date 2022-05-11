import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Widget } from "./components/Widget";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Widget />} />
    </Routes>
  );
}
