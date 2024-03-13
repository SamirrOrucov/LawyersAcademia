import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/haqqimizda" element={<About />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
