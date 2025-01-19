import Rodape from "componentes/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<Sobre />} />
        <Route path="*" element={<div>Página não encontrada.</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
