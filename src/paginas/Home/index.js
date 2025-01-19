import Banner from "componentes/Banner";
import Post from "componentes/Post";
import posts from "json/posts.json";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Banner />
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
