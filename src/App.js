import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";

const pagina = window.location.pathname === "/" ? <Home /> : <Sobre />;

function App() {
  return pagina;
}

export default App;
