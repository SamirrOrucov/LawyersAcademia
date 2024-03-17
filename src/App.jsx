import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import About from "./pages/About/About";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/haqqimizda" element={<About />} />
          <Route path="/xeberler" element={<News/>}/>
          <Route path="/xeberlerdetail/:id" element={<NewsDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
