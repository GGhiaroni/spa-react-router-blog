import { Link, useLocation } from "react-router-dom";
import "./MenuLink.css";

const MenuLink = ({ children, to }) => {
  const localizacao = useLocation();
  return (
    <Link
      className={`link ${localizacao.pathname === to ? "linkDestacado" : ""}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
