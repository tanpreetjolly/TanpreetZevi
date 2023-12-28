import React, { useEffect, useRef, useState } from "react";
import Search from "../SearchBar/Search";
import Container from "../Products/ProductsContainer";
import Filters from "../Filters/Filters";
import { useApi } from "../../api/apiContext";
import { IoIosCloseCircle } from "react-icons/io";

const Hero= () => {
  const { items, setFilteredItems } = useApi();
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number>(1);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsSearchFocused(false);
    }
  };

  useEffect(() => {
    applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minRating, maxPrice]);
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);
  
  return (
    <div className="hero">
      <Search setIsSearchFocused={setIsSearchFocused} />

      <div
        className={`parent-container ${
          isSearchFocused ? "visible" : "notVisible"
        }`}
        ref={containerRef}
      >
        <IoIosCloseCircle
          className="close-icon"
          type="button"
          onClick={() => {
            setIsSearchFocused(false);
          }}
        />
        <Filters
          minRating={minRating}
          setMinRating={setMinRating}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          applyFilters={applyFilters}
        />
        <Container />
      </div>
    </div>
  );
};

export default Hero;
