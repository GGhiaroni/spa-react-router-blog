import Post from "componentes/Post";
import posts from "json/posts.json";
import "./Home.css";

const Home = () => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Home;
