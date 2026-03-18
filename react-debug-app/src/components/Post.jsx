import { useState } from "react";

function Post({ title, content, author }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    // НАВМИСНА ПОМИЛКА
    setLikes(likes + "1");
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <small>Автор: {author}</small>
      <br />
      <button onClick={handleLike}>Like ({likes})</button>
    </div>
  );
}

export default Post;