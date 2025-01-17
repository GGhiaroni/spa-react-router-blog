import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<Sobre />} />
        <Route path="*" element={<div>Página não encontrada.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
