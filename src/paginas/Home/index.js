import PostCard from "componentes/PostCard";
import posts from "json/posts.json";
import "./Home.css";

const Home = () => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Home;
