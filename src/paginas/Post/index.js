import PostModelo from "componentes/PostModelo";
import posts from "json/posts.json";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import "./Post.css";

const Post = () => {
  const { id } = useParams();

  const post = posts.find((post) => {
    return post.id === Number(id);
  });

  if (!post) {
    return (
      <h1 className="h1-post-nao-encontrado">
        Post não encontrado. Por favor, verifique e tente novamente.
      </h1>
    );
  }

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

export default Post;
