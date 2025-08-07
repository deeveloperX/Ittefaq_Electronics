// src/pages/Brand.jsx
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard"; // If you have it

const Brand = () => {
  const { brandSlug } = useParams();

  // Filter matching products
  const matchingProducts = products.filter(
    (p) => p.brand.toLowerCase().replace(/\s+/g, "-") === brandSlug
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 capitalize">
        Products by {brandSlug.replace(/-/g, " ")}
      </h1>

      {matchingProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {matchingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No products found for this brand.</p>
      )}
    </div>
  );
};

export default Brand;
