import React from 'react'
import { useApi } from "../../api/apiContext";
import ProductCard from "./ProductCard";

const Container: React.FC = () => {
  const { items } = useApi();
  return (
    <div>
      {items.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Container