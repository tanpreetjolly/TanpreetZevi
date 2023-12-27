import React, { useState } from "react";
import Search from "./SearchBar/Search";
import Container from "./Products/ProductsContainer";

const Hero: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  return (
    <div>
      <Search setIsSearchFocused={setIsSearchFocused} />
      {isSearchFocused && <Container />}
    </div>
  );
};

export default Hero;
