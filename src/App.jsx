import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import About from "./pages/About/About";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import Qanunvericilik from "./pages/Qanunvericilik/Qanunvericilik";
import QanunvericilikDetail from "./pages/QanunvericilikDetail/QanunvericilikDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/haqqimizda" element={<About />} />
          <Route path="/xeberler" element={<News/>}/>
          <Route path="/detail/:id" element={<NewsDetail />} />
          <Route path="/qanunvericilik" element={<Qanunvericilik/>}/>
          <Route path="/qanunvericilik/detail/:id" element={<QanunvericilikDetail/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
