import { useState, useMemo } from "react";

const generateHeavyAnalytics = (num) => {
  console.log("Heavy function працює...");
  let result = 0;

  for (let i = 0; i < 100000000; i++) {
    result += num;
  }

  return result;
};

const NewsFeed = () => {
  const [inputValue, setInputValue] = useState("");
  const [analyticsNumber] = useState(1);

  // ❌ ПОМИЛКА
  const analyticsResult = useMemo(() => {
  return generateHeavyAnalytics(analyticsNumber);
}, [analyticsNumber]);

  return (
    <div>
      <h1>Стрічка новин</h1>

      <p>Результат: {analyticsResult}</p>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Почни писати..."
      />
    </div>
  );
};

export default NewsFeed;