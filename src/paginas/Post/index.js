import PostCard from "componentes/PostCard";
import PostModelo from "componentes/PostModelo";
import posts from "json/posts.json";
import NotFound from "paginas/NotFound";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import "./Post.css";

const Post = () => {
  const { id } = useParams();

  const post = posts.find((post) => {
    return post.id === Number(id);
  });

  if (!post) {
    return <NotFound />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  console.log(postsRecomendados);

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
      <h2 className="titulos-outros-posts">
        Outros posts que você pode gostar:
      </h2>
      <ul className="posts-recomendados">
        {postsRecomendados.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
        ; ;
      </ul>
    </PostModelo>
  );
};

export default Post;
