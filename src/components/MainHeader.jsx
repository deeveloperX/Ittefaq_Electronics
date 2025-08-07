import { useState } from "react";
import { FaBars, FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import products from "../data/products"; // Import products.js
import logo from "../assets/logo.png";

// Get unique categories from products.js (dynamic extraction)
const uniqueCategories = [...new Set(products.map(p => p.category))];

// Function to format category name
const formatCategoryName = (name) => {
  return name
    .replace("-", " ") // Replace hyphens with spaces
    .split(" ") // Split by spaces to capitalize each word
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(" "); // Join back with spaces
};

const MainHeader = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow py-3 px-4 sticky top-0 z-50">
            <div className="max-w-full mx-auto px-2 flex items-center justify-between">
                {/* Mobile: Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(true)}>
                        <FaBars className="text-xl" />
                    </button>
                </div>

                {/* Logo */}
                <div className="flex-1 text-center md:text-left md:flex-none">
                    <img src={logo} alt="Logo" className="h-20 mx-auto md:mx-0" />
                </div>

                {/* Search + Category - Desktop */}
                <div className="hidden md:flex flex-1 justify-center items-center gap-4">
                    {/* Dropdown */}
                    <select
                        className="border border-gray-300 px-3 py-2 rounded-full text-sm"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        {uniqueCategories.map((cat, idx) => (
                            <option key={idx} value={cat.toLowerCase().replace(/\s+/g, '-')}>
                                {formatCategoryName(cat)}
                            </option>
                        ))}
                    </select>

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Search for products"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 px-4 py-2 w-64 rounded-full text-sm"
                    />

                    {/* Search button */}
                    <button className="bg-button hover:bg-hoverbutton cursor-pointer text-white px-4 py-2 rounded-full text-sm flex items-center gap-1">
                        <FaSearch />
                        Search
                    </button>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <FaUser className="text-xl cursor-pointer" />
                    <FaHeart className="text-xl cursor-pointer" />
                    <FaShoppingCart className="text-xl cursor-pointer" />
                </div>
            </div>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </header>
    );
};

export default MainHeader;
