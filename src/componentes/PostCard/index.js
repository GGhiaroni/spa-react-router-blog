import BotaoPrincipal from "componentes/BotaoPrincipal";
import { Link } from "react-router-dom";
import "./Post.css";

const slugify = (titulo) => {
  return titulo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const PostCard = ({ post }) => {
  const titulosPostParaParametro = slugify(post.titulo);
  return (
    <Link to={`/posts/${titulosPostParaParametro}/${post.id}`}>
      <div className="post">
        <img
          className="capa"
          src={`/assets/posts/${post.id}/capa.png`}
          alt={`Imagem para o texto sobre ${post.titulo}.`}
        />
        <h2 className="titulo">{post.titulo}</h2>
        <BotaoPrincipal>Saiba mais</BotaoPrincipal>
      </div>
    </Link>
  );
};

export default PostCard;
