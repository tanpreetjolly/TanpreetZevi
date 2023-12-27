import React from 'react';
import { useApi } from "../../api/apiContext";
import ProductCard from "./ProductCard";

const Container: React.FC = () => {
  const { filteredItems } = useApi();
  console.log(filteredItems)
  return (
    <div>
      {filteredItems.map((item) => (
        <ProductCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Container;