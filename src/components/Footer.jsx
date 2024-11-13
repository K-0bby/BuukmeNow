import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from "../assets/FooterLogo.svg"; // Replace with the actual logo path

const Footer = () => {
  return (
    <footer className="bg-[#004741] text-white py-8 px-3 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="md:w-1/3 mb-6 md:mb-0">
            {/* Logo */}
            <div className="mb-4">
              <img src={Logo} alt="Logo" className="h-[24px] w-[125.32px]" /> 
            </div>
            <h2 className="text-base font-normal mb-4">
              Join our newsletter to stay up to date on features and releases.
            </h2>
            <div className="flex sm:flex-row items-center gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-2 text-gray-900 rounded-sm"
              />
              <button className="bg-black py-[11px] px-4 md:px-5 md:py-2.5 text-sm rounded-sm">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#FFFFFF]">
              By subscribing you agree to our Privacy Policy and provide consent to receive
              updates from our company.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-10 mt-16 md:mt-0">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold mb-2">Column One</h3>
              <Link to="#" className="hover:text-gray-300 text-sm">Link One</Link>
              <Link to="#" className="hover:text-gray-300 text-sm">Link Two</Link>
              <Link to="#" className="hover:text-gray-300 text-sm">Link Three</Link>
              <Link to="#" className="hover:text-gray-300 text-sm">Link Four</Link>
              <Link to="#" className="hover:text-gray-300 text-sm">Link Five</Link>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold mb-2">Column Two</h3>
              <Link to="#" className="hover:text-gray-300 text-sm">Link Six</Link>
              <Link to="#" className="hover:text-gray-300 text-sm">Link Seven</Link>
              <Link to="#" className="hover:text-gray-300 text-sm">Link Eight</Link>
              <Link to="#" className="hover:text-gray-300 text-sm">Link Nine</Link>
              <Link to="#" className="hover:text-gray-300 text-sm">Link Ten</Link>
            </div>

            {/* Social Media Section */}
            <div className='flex flex-col'>
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex flex-col gap-4">
                <Link to="#" className="hover:text-gray-300 flex items-center gap-3 text-sm">
                  <Facebook size={20} /> Facebook
                </Link>
                <Link to="#" className="hover:text-gray-300 flex items-center gap-3 text-sm">
                  <Instagram size={20} /> Instagram
                </Link>
                <Link to="#" className="hover:text-gray-300 flex items-center gap-3 text-sm">
                  <Twitter size={20} /> Twitter
                </Link>
                <Link to="#" className="hover:text-gray-300 flex items-center gap-3 text-sm">
                  <Linkedin size={20} /> LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="md:border-b border-[#CCCFCE80] py-4 my-4">
          <div className="flex flex-col md:flex-row justify-between text-sm ">
            <p className=''>© 2023 Buukmenow. All rights reserved.</p>
            <div className="flex border-t md:border-none border-[#CCCFCE80] py-4 my-4 md:py-0 md:my-0 gap-4">
              <Link to="#" className="hover:text-gray-300">Privacy policy</Link>
              <Link to="#" className="hover:text-gray-300">Terms of use</Link>
              <Link to="#" className="hover:text-gray-300">Contact us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
