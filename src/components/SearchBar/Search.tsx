import React, { ChangeEvent, useState, useEffect } from "react";
import { useApi } from "../../api/apiContext";

type SearchProps = {
  setIsSearchFocused: (isSearchFocused: boolean) => void;
};

const Search: React.FC<SearchProps> = ({ setIsSearchFocused }) => {
  const { items, filteredItems, setFilteredItems } = useApi();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, items, setFilteredItems]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
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
