import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {

  const { user, logout } = useContext(AuthContext);

  return (
    <div>

      <h2>Profile</h2>

      <p>User email: {user?.email}</p>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
};

export default Profile;