import React, { ChangeEvent, useState, useEffect } from "react";
import { useApi } from "../../api/apiContext";
import "./Search.scss"
import { FiSearch } from "react-icons/fi";

type SearchProps = {
  setIsSearchFocused: (isSearchFocused: boolean) => void;
};

const Search = ({ setIsSearchFocused }: SearchProps) => {
  const { items, setFilteredItems } = useApi();
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
    <div className="search-container">
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        placeholder="Search"
        onFocus={() => setIsSearchFocused(true)}
      />
      <FiSearch className="search-icon" />
    </div>
  );
};

export default Search;
