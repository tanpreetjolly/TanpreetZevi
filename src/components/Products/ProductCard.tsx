import { useState } from "react";

type ProductProps = {
  item: {
    name: string;
    price: string;
    discount: string;
    category: string;
    imageUrl: string;
    rating: number;
  };
};

const ProductCard = ({ item }: ProductProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <p>{item?.name}</p>
      <img src={item?.imageUrl} alt="" />
      <p>Price : {item?.price}</p>
      <p>{item?.rating}</p>
      <button className={isHovered ? "hovered" : "notHovered"}>
        View Product
      </button>
      <button>Heart</button>
    </div>
  );
};

export default ProductCard;
