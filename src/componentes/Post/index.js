import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img
        className="capa"
        src={`/assets/posts/${post.id}/capa.png`}
        alt={`Imagem para o texto sobre ${post.titulo}.`}
      />
      <h2 className="titulo">{post.titulo}</h2>
      <button className="botaoLer">Saiba mais</button>
    </div>
  );
};

export default Post;
