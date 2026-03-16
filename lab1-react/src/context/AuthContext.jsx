import { createContext, useState } from "react";

// створюємо контекст
export const AuthContext = createContext();

// створюємо провайдер
export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // функція входу
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  // функція виходу
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};