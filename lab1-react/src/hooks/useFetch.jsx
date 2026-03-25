import { useState, useEffect } from "react";

export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortController = new AbortController();

    const fetchData = async () => {

      setIsLoading(true);

      try {

        const response = await fetch(url, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
        setError(null);

      } catch (err) {

        if (err.name === "AbortError") {
          console.log("Request aborted");
        } else {
          setError(err.message);
        }

      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };

  }, [url]);

  return { data, isLoading, error };
};