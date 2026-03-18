import { useParams, Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Router", body: "Деталі..." },
  { id: 2, title: "JavaScript News", body: "Новини..." },
  { id: 3, title: "Vite Guide", body: "Гайд..." },
];

const PostDetails = () => {
  const { postId } = useParams();

  const post = posts.find((p) => p.id === Number(postId));

  if (!post) return <p>Пост не знайдено</p>;

  return (
    <div>
      <Link to="/">← Назад</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;