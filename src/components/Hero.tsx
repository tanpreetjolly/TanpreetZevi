import React, { useEffect, useState } from "react";
import Search from "./SearchBar/Search";
import Container from "./Products/ProductsContainer";
import Filters from "./Filters/Filters";
import { useApi } from "../api/apiContext";

const Hero: React.FC = () => {
  const { items, setItems } = useApi();
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number>(5);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const applyFilters = () => {
  
    if (minRating > 0) {
      setItems(items.filter((item) => item.rating >= minRating));
    }

    if (maxPrice > 0) {
      setItems(items.filter((item) => parseInt(item.price) <= maxPrice));
    }

  };

  useEffect(() => {
    applyFilters();
  }, [minRating, maxPrice]);

  return (
    <div>
      <Search setIsSearchFocused={setIsSearchFocused} />
      {isSearchFocused && (
        <div>
          <Filters
            minRating={minRating}
            setMinRating={setMinRating}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
          <Container />
        </div>
      )}
    </div>
  );
};

export default Hero;
