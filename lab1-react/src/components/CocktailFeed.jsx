import React from "react";
import { useFetch } from "../../hooks/useFetch"; // Перевір, чи шлях до хука правильний!
import PostCard from "../PostCard/PostCard";

const CocktailFeed = () => {
  const { data, isLoading, error } = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );

  // ПЕРЕВІРКА 1: Якщо завантаження ще триває, ми ПРИПИНЯЄМО виконання функції тут
  if (isLoading) {
    return <div className="loading">Завантаження коктейлів...</div>;
  }

  // ПЕРЕВІРКА 2: Якщо сталася помилка (наприклад, немає інтернету)
  if (error) {
    return <div className="error">Помилка: {error}</div>;
  }

  // ПЕРЕВІРКА 3: Найважливіша! Якщо дані ще null або в них немає drinks
  if (!data || !data.drinks) {
    return <div className="no-data">Дані не отримано або порожній список.</div>;
  }

  // Тільки якщо ми пройшли ВСІ перевірки вище, React почне читати цей блок:
  return (
    <div className="news-feed">
      <h2>Наші Коктейлі</h2>
      <div className="posts-grid">
        {data.drinks.map((drink) => (
          <PostCard
            key={drink.idDrink}
            title={drink.strDrink}
            body={drink.strInstructions}
          />
        ))}
      </div>
    </div>
  );
};

export default CocktailFeed;