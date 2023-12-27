import React, { ChangeEvent, useState } from "react";
import { useApi } from "../../api/apiContext";

type SearchProps = {
  isSearchFocused: boolean;
  setIsSearchFocused: (isSearchFocused: boolean) => void;
};

const Search: React.FC<SearchProps> = ({
  isSearchFocused,
  setIsSearchFocused,
}) => {
  const { items, setItems } = useApi();

  const handleSearch = (term: string) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setItems(filtered);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        placeholder="Search"
        onFocus={() => setIsSearchFocused(true)}
      />
    </div>
  );
};

export default Search;
