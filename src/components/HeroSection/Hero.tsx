import React, { useEffect, useState } from "react";
import Search from "../SearchBar/Search";
import Container from "../Products/ProductsContainer";
import Filters from "../Filters/Filters";
import { useApi } from "../../api/apiContext";

const Hero: React.FC = () => {
  const { items, setFilteredItems } = useApi();
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number>(1);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const applyFilters = () => {
    let updatedItems = items.slice();

    if (minRating > 0) {
      updatedItems = updatedItems.filter((item) => item.rating >= minRating);
    }

    if (maxPrice > 0) {
      updatedItems = updatedItems.filter(
        (item) => parseFloat(item.price) <= maxPrice
      );
    }

    setFilteredItems(updatedItems);
  };

  useEffect(() => {
    applyFilters();
  }, [minRating, maxPrice]);

  return (
    <div className="hero">
      <Search setIsSearchFocused={setIsSearchFocused} />
      {isSearchFocused && (
        <div>
          <Filters
            minRating={minRating}
            setMinRating={setMinRating}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            applyFilters={applyFilters}
          />
          <Container setIsSearchFocused={setIsSearchFocused} />
        </div>
      )}
    </div>
  );
};

export default Hero;
