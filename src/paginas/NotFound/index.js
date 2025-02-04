import erro404 from "assets/erro_404.png";
import BotaoPrincipal from "componentes/BotaoPrincipal";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navegar = useNavigate();
  return (
    <>
      <div className="conteudoContainer">
        <span className="texto404">404</span>
        <h1 className="titulo-notfound">Ops! Página não encontrada.</h1>
        <p className="paragrafo-notfound">
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className="paragrafo-notfound">
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div className="botaoContainer-notfound" onClick={() => navegar("/")}>
          <BotaoPrincipal>Voltar</BotaoPrincipal>
        </div>
        <img
          className="imagem-cachorro"
          src={erro404}
          alt="Imagem de um cachorro na página de erro."
        />
      </div>
      <div className="espaco-em-branco"></div>
    </>
  );
};

export default NotFound;
