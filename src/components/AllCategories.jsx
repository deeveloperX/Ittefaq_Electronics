import { Link } from "react-router-dom";
import categories from "../data/categories";

const AllCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">All Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.slug || cat.id}`}
            className="block hover:scale-105 transition-transform duration-300 bg-white"
          >
            {/* Image Container */}
            <div className="w-full h-40 flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="max-h-full object-contain"
              />
            </div>

            {/* Category Name */}
            <div className="p-2 text-center text-sm font-medium text-gray-700">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllCategories;
