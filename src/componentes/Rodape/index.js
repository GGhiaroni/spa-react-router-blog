import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";
import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <MarcaRegistrada />
      Desenvolvido por Gabriel Ghiaroni.
    </footer>
  );
};

export default Rodape;
