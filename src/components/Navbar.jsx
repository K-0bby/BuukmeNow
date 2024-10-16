import  { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full text-black shadow-sm mb-2 lg:shadow-none">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-[130px] md:w-30 h-8" />
          <Link
            to="/"
            className="bg-[#004741] hidden lg:flex gap-2 py-2 px-4 rounded-full text-white cursor-pointer"
          >
            Looking for businesses to patronise?
            <span>
              <ArrowUpRight />
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/marketplace" className="text-base hover:text-[#004741]">
            Marketplace
          </Link>
          <Link to="/blog" className="text-base hover:text-[#004741]">
            Blog
          </Link>
          <Link to="/about" className="text-base hover:text-[#004741]">
            About
          </Link>
          <div className="space-x-4">
            <Link
              to="/login"
              className="py-3 px-5 border border-[#CCCFCE3D] text-green-900 rounded-md hover:bg-[#e0f7fa] transition duration-200"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="py-3 px-5 bg-[#004741] text-white rounded-md hover:bg-[#003838] transition duration-200"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 lg:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                to="/marketplace"
                className="text-base hover:text-[#004741]"
                onClick={toggleMenu}
              >
                Marketplace
              </Link>
              <Link to="/blog" className="text-base hover:text-[#004741]" onClick={toggleMenu}>
                Blog
              </Link>
              <Link to="/about" className="text-base hover:text-[#004741]" onClick={toggleMenu}>
                About
              </Link>
              <div className="space-y-4">
                <Link
                  to="/login"
                  className="block w-full text-center py-4 px-5 border border-[#CCCFCE3D] text-green-900 rounded-md hover:bg-[#e0f7fa] transition duration-200"
                  onClick={toggleMenu}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center py-4 px-5 bg-green-900 text-white rounded-md hover:bg-green-800 transition duration-200"
                  onClick={toggleMenu}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
