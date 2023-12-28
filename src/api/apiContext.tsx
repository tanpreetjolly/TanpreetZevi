import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";
import { faker } from "@faker-js/faker";

type childrenProps = {
  children: React.ReactNode;
};

type itemType = {
  name: string;
  price: string;
  discount: string;
  category: string;
  imageUrl: string;
  rating: number;
}[];

type ApiContextType = {
  items: itemType;
  filteredItems: itemType;
  loading: boolean;
  error: any;
  setItems: Dispatch<SetStateAction<itemType>>;
  setFilteredItems: Dispatch<SetStateAction<itemType>>;
};

const initialContextValue: ApiContextType = {
  items: [],
  filteredItems: [],
  loading: false,
  error: null,
  setFilteredItems: () => {},
  setItems: () => {},
};

const ApiContext = createContext<ApiContextType>(initialContextValue);
export const ApiProvider = ({ children }: childrenProps) => {
  const [items, setItems] = useState<itemType>([]);
  const [filteredItems, setFilteredItems] = useState<itemType>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        setLoading(true);
        const fakeData: itemType = Array.from({ length: 10 }, () => ({
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
    <ApiContext.Provider
      value={{
        items,
        loading,
        error,
        setItems,
        filteredItems,
        setFilteredItems,
      }}
    >
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
