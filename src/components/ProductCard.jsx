import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.slug}`} className="block group overflow-hidden transition duration-300">
      {/* Product Image */}
      <div className="bg-white aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-3">
        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        <h3 className="text-sm font-medium text-gray-800 leading-tight line-clamp-2">{product.name}</h3>
        <p className="mt-2 text-red-600 font-semibold text-sm">Rs. {product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
