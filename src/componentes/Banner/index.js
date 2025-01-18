import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="apresentacao">
        <h1 className="titulo">Gabriel Ghiaroni</h1>
        <p className="paragrafo">
          Boas vindas ao meu espaço pessoal! Eu sou Gabriel Ghiaroni, instrutor
          de Front-end da Alura. Aqui compartilho vários conhecimentos, espero
          que aprenda algo novo :)
        </p>
      </div>
      <div className="imagens">
        <img
          className="circuloColorido"
          src={circuloColorido}
          aria-hidden={true}
          alt="círculo colorido"
        />
        <img className="minhaFoto" src={minhaFoto} alt="minha foto de perfil" />
      </div>
    </div>
  );
};

export default Banner;
