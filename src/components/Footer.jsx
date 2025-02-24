import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Contact Section */}
        <div>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaCommentDots /> <span>Chat With Sales</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone /> <span>1 (888) 602-6756</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope /> <a href="#" className="hover:underline">mywebsite@pressable.com</a>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h2 className="text-green-400 font-semibold mb-2">Solutions</h2>
          <ul className="text-sm space-y-2">
            <li>Managed WordPress Hosting</li>
            <li>Agencies</li>
            <li>Small & Medium-Sized Businesses</li>
            <li>Freelancers</li>
            <li>High-Traffic Websites</li>
            <li>WooCommerce</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-green-400 font-semibold mb-2">Company</h2>
          <ul className="text-sm space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Customer Stories</li>
            <li>Contact</li>
            <li>Legal</li>
            <li>Press Kit</li>
          </ul>
        </div>

        {/* Resources + Social Media */}
        <div>
          <h2 className="text-green-400 font-semibold mb-2">Resources</h2>
          <ul className="text-sm space-y-2">
            <li>Blog</li>
            <li>eBooks</li>
            <li>Knowledge Base</li>
            <li>Customer Reviews</li>
            <li>Affiliate Program</li>
            <li>Strategic Partners</li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white text-xl"><FaFacebook /></a>
            <a href="#" className="text-white text-xl"><FaLinkedin /></a>
            <a href="#" className="text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-white text-xl"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
        <p>Powered by WordPress</p>
        <a href="#" className="text-green-400 hover:underline">Host With Pressable</a>
        <p className="mt-2">&copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
