import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <header>
      <nav className="navegacao">
        <Link className="link" to="/">
          Início
        </Link>
        <Link className="link" to="/sobremim">
          Sobre mim
        </Link>
      </nav>
    </header>
  );
};

export default Menu;
