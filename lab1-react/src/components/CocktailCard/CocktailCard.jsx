const CocktailCard = ({ name, image, instructions }) => {

  return (

    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      borderRadius: "10px",
      width: "250px"
    }}>

      <img
        src={image}
        alt={name}
        style={{ width: "100%" }}
      />

      <h3>{name}</h3>

      <p>{instructions}</p>

    </div>

  );
};

export default CocktailCard;