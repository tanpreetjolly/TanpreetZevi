import { useApi } from "../../api/apiContext";
import ProductCard from "./ProductCard";
import { IoIosCloseCircle } from "react-icons/io";
type ContainerProps = {
  setIsSearchFocused: (isSearchFocused: boolean) => void;
};

const Container = ({ setIsSearchFocused }: ContainerProps) => {
  const { filteredItems, loading } = useApi();
  return (
    <div className="products-container">
      <IoIosCloseCircle
        className="close-icon"
        type="button"
        onClick={() => {
          setIsSearchFocused(false);
        }}
      />
      {!loading &&
        filteredItems.map((item) => (
          <ProductCard key={item.name} item={item} />
        ))}
    </div>
  );
};

export default Container;
