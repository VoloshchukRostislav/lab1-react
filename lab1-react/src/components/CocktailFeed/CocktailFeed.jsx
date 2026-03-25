import { useFetch } from "../../hooks/useFetch";
import CocktailCard from "../CocktailCard/CocktailCard";

const CocktailFeed = () => {

  const {
    data,
    isLoading,
    error
  } = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );

  if (isLoading) {
    return <h2>Loading cocktails...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (

    <div>

      <h2>Cocktails</h2>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>

        {data.drinks.map((drink) => (

          <CocktailCard
            key={drink.idDrink}
            name={drink.strDrink}
            image={drink.strDrinkThumb}
            instructions={drink.strInstructions}
          />

        ))}

      </div>

    </div>

  );
};

export default CocktailFeed;