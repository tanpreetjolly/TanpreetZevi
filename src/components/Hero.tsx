import React, { useState } from "react";
import Search from "./SearchBar/Search";
import Container from "./Products/ProductsContainer";
import Filters from "./Filters/Filters";

const Hero: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number>(5);
  const [maxPrice, setMaxPrice] = useState<number>(0);

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
