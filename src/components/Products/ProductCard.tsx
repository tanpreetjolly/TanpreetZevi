import { useState } from "react";
import { FaStar } from "react-icons/fa6";

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
      className="product-card"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img src={item?.imageUrl} alt="" className="img" />
      <p className="name">{item?.name}</p>
      <div className="money">
        <p className="price">Rs.{item?.price}</p>
        <p className="discount">
          Rs
          {Math.floor(
            parseFloat(item?.price) -
              (parseFloat(item?.price) * parseFloat(item?.discount)) / 100
          )}.00
        </p>
      </div>

      <div className="rating">
        {Array(item.rating)
          .fill(null)
          .map((_, index) => (
            <FaStar key={index} />
          ))}
      </div>
      <button className={isHovered ? "hovered" : "notHovered"}>
        View Product
      </button>
      <button>Heart</button>
    </div>
  );
};

export default ProductCard;
