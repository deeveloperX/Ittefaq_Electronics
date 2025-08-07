import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondry text-white pt-10 pb-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Ittefaq Electronics</h2>
          <p className="text-sm text-gray-400">
            Your trusted source for home appliances across Pakistan. Fast delivery, genuine brands, and unbeatable service. We offer a wide variety of Branded Home and Kitchen Appliances at the lowest prices. Also, we provide After-Sale Services and Nationwide Delivery.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/store-location" className="hover:underline">Store Location</Link></li>
          </ul>
        </div>

        {/* Column 3: Top Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/category/air-conditioners" className="hover:underline">Air Conditioners</Link></li>
            <li><Link to="/category/refrigerators" className="hover:underline">Refrigerators</Link></li>
            <li><Link to="/category/air-coolers" className="hover:underline">Air Coolers</Link></li>
            <li><Link to="/category/led-tvs" className="hover:underline">LED TVs</Link></li>
            <li><Link to="/category/washing-machines" className="hover:underline">Washing Machines</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📍 Sialkot, Pakistan</li>
            <li>
              📞 <a href="tel:+923216126870" className="text-light text-decoration-none">+92 321 6126870</a>
            </li>
            <li>
              ✉ <a href="mailto:faizanjum79@gmail.com" className="text-light text-decoration-none">faizanjum79@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ittefaq Electronics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
