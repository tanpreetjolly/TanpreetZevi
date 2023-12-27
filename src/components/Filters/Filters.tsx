import React from 'react'

type FiltersProps = {
  maxPrice: number;
  minRating: number;
  setMaxPrice: (maxPrice: number) => void;
  setMinRating: (minRating: number) => void;
};

const Filters: React.FC<FiltersProps> = () => {
  return <div>Filters</div>;
};

export default Filters