import React from "react";
import { FaStar } from "react-icons/fa6";
import "./Filters.scss";

type FiltersProps = {
  maxPrice: number;
  minRating: number;
  applyFilters: () => void;
  setMaxPrice: (maxPrice: number) => void;
  setMinRating: (minRating: number) => void;
};

const Filters = ({
  maxPrice,
  minRating,
  setMaxPrice,
  setMinRating,
  applyFilters,
}: FiltersProps) => {
  
  const handleMinRatingChange = (rating: number) => {
    setMinRating(rating);
    applyFilters();
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseFloat(event.target.value));
    applyFilters();
  };

  return (
    <div className="filters-container">
      <h2>Latest Trends</h2>
      <label className="ratings">
        <span>Min Rating:</span>
        <div>
          {[5, 4, 3, 2, 1].map((rating) => (
            <>
              <div
                role="button"
                key={rating}
                className={minRating >= rating ? "selected" : ""}
                onClick={() => handleMinRatingChange(rating)}
              >
                {Array(rating)
                  .fill(null)
                  .map((_, index) => (
                    <FaStar key={index} className="star"/>
                  ))}
              </div>
            </>
          ))}
        </div>
      </label>
      <br />
      <label className="price">
        <span>Max Price:</span>
        <div>
          <input
            type="range"
            min={1}
            max={500}
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
          <span>{maxPrice}</span>
        </div>
      </label>
    </div>
  );
};

export default Filters;
