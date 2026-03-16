import ProfilePage from "./pages/ProfilePage";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div>

      <h1>User Dashboard</h1>

      <ProfilePage />

      <hr />

      <h1>Product</h1>

      <ProductCard />

    </div>
  );
}

export default App;