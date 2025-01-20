import PostModelo from "componentes/PostModelo";
import posts from "json/posts.json";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  const post = posts.find((post) => {
    return post.id === Number(id);
  });

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <ReactMarkdown>{post.texto}</ReactMarkdown>
    </PostModelo>
  );
};

export default Post;
