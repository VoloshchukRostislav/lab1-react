import useWindowSize from "../hooks/useWindowSize";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useLocalStorage from "../hooks/useLocalStorage";

const Home = () => {
  const { width } = useWindowSize();
  const isOnline = useOnlineStatus();
  const [name, setName] = useLocalStorage("username", "");

  const isMobile = width < 768;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Практична №8</h1>

      {/* ONLINE STATUS */}
      <p>
        Статус мережі:{" "}
        <b style={{ color: isOnline ? "green" : "red" }}>
          {isOnline ? "Онлайн" : "Офлайн"}
        </b>
      </p>

      {/* WINDOW SIZE */}
      <p>Ширина екрану: {width}px</p>

      {isMobile && (
        <div style={{ background: "#eee", padding: "10px" }}>
          📱 Мобільна версія
        </div>
      )}

      {/* LOCAL STORAGE */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Введи ім’я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>Привіт, {name || "гість"} 👋</p>
      </div>
    </div>
  );
};

export default Home;