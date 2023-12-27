// ApiContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import faker from "faker";
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        setLoading(true);
        const fakeData = Array.from({ length: 10 }, () => ({
          name: faker.commerce.productName(),
          price: faker.commerce.price({ min: 1, max: 500 }),
          discount: faker.commerce.price({ min: 1, max: 50 }),
          category: faker.commerce.department(),
          imageUrl: faker.image.url(),
          rating: faker.number.int({ min: 1, max: 5 }),
        }));
        setItems(fakeData);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ items, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};


export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
