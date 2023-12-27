import React, { useState } from "react";
import Search from "./SearchBar/Search";

const Hero: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  return (
    <div>
      <Search
        isSearchFocused={isSearchFocused}
        setIsSearchFocused={setIsSearchFocused}
      />
    </div>
  );
};

export default Hero;
