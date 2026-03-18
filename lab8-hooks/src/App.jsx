import Home from "./pages/Home";
import useOnlineStatus from "./hooks/useOnlineStatus";

function App() {
  const isOnline = useOnlineStatus();

  return (
    <>
      {!isOnline && (
        <div
          style={{
            background: "red",
            color: "white",
            textAlign: "center",
            padding: "10px",
          }}
        >
          ⚠️ Немає інтернету
        </div>
      )}

      <Home />
    </>
  );
}

export default App;