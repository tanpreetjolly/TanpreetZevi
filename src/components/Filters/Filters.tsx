import React from 'react'

type FiltersProps = {
  maxPrice: number;
  minRating: number;
  applyFilters: () => void;
  setMaxPrice: (maxPrice: number) => void;
  setMinRating: (minRating: number) => void;
};

const Filters: React.FC<FiltersProps> = ({
  maxPrice,
  minRating,
  setMaxPrice,
  setMinRating,
  applyFilters,
}) => {
  console.log(maxPrice);
  const handleMinRatingChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setMinRating(parseInt(event.target.value, 10));
    applyFilters();
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseFloat(event.target.value));
    applyFilters();
  };

  return (
    <div>
      <label>
        Min Rating:
        <select value={minRating} onChange={handleMinRatingChange}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Max Price:
        <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
      </label>
    </div>
  );
};

export default Filters;