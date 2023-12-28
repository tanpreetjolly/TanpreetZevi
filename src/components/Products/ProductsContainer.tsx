import { useApi } from "../../api/apiContext";
import ProductCard from "./ProductCard";
import "./Products.scss";

const Container = () => {
  const { filteredItems, loading } = useApi();
  return (
    <div className="products-container">
      {!loading &&
        filteredItems.map((item) => (
          <ProductCard key={item.name} item={item} />
        ))}
    </div>
  );
};

export default Container;
