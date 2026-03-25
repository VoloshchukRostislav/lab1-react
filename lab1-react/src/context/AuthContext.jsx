const login = async (email) => {

  try {

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    const userData = await response.json();
    setIsAuthenticated(true);

    setUser({
      ...userData,
      email
    });

  } catch (error) {

    console.error("Login error:", error);

  }

};