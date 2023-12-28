import React from 'react';
import { useApi } from "../../api/apiContext";
import ProductCard from "./ProductCard";

const Container = () => {
  const { filteredItems, loading } = useApi();
  return (
    <div>
      {!loading && filteredItems.map((item) => (
        <ProductCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Container;