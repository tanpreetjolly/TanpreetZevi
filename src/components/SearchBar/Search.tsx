import React, { ChangeEvent, useState } from "react";
import { useApi } from "../../api/apiContext";

const Search: React.FC = () => {
  const { items, setItems } = useApi();
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);

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
