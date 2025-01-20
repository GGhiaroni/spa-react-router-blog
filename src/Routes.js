import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobremim" element={<Sobre />} />
          <Route path="posts/:slug/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<div>Página não encontrada.</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
