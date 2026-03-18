import { useState } from "react";
import Post from "./Post";

const mockPosts = [
  { id: 1, title: "React", content: "Вивчаємо React", author: "Іван" },
  { id: 2, title: "Hooks", content: "useState важливий", author: "Petro" },
];

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = mockPosts.filter((post) => {
    // ПОМИЛКА ЛОГІКИ
    return (
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) &&
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Стрічка новин</h2>

      <input
        type="text"
        placeholder="Пошук..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredPosts.map((post) => (
        // ПОМИЛКА KEY
        <Post key="same-key" {...post} />
      ))}
    </div>
  );
};

export default Feed;