import posts from "json/posts.json";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  const post = posts.find((post) => {
    return post.id === Number(id);
  });

  console.log(post);
};

export default Post;
