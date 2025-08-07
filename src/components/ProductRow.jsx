import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductRow = ({ category, title }) => {
  const filtered = products.filter((p) => p.category === category).slice(0, 5); // limit to 5

  if (!filtered.length) return null;

  return (
    <section className="max-w-full mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold mx-auto pb-5 lg:pb-10"> — {title} — </h2>
      </div>

      {/* Grid with 5 columns on large screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link
        to={`/category/${category}`}
        className="text-sm mt-4 block text-center bg-black hover:bg-hoverbutton cursor-pointer text-white px-6 py-2 rounded-full w-fit mx-auto transition duration-300 font-bold"
      >
        View All
      </Link>
    </section>
  );
};

export default ProductRow;
