import { Link, useSearchParams } from "react-router-dom";

const postsData = [
  { id: 1, title: "React Router" },
  { id: 2, title: "JavaScript News" },
  { id: 3, title: "Vite Guide" },
];

const NewsFeed = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const sort = searchParams.get("sort") || "asc";

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) params.set("query", value);
      else params.delete("query");
      return params;
    });
  };

  const handleSort = (e) => {
    const value = e.target.value;

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("sort", value);
      return params;
    });
  };

  const filtered = postsData
    .filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "asc") return a.title.localeCompare(b.title);
      return b.title.localeCompare(a.title);
    });

  return (
    <div>
      <h2>Новини</h2>

      <input
        type="text"
        placeholder="Пошук..."
        value={query}
        onChange={handleSearch}
      />

      <select value={sort} onChange={handleSort}>
        <option value="asc">A → Z</option>
        <option value="desc">Z → A</option>
      </select>

      <div>
        {filtered.map((post) => (
          <div key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;