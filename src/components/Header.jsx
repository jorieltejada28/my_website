import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("bg-indigo-600", "bg-opacity-75");
    } else {
      header.classList.remove("bg-indigo-600", "bg-opacity-75");
    }
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <header className="bg-white shadow-md fixed top-0 w-full z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-xl md:text-2xl font-bold text-indigo-600">
            My WebApp
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex flex-grow justify-center">
            <ul className="flex flex-row space-x-6">
              <li><a href="#features" className="text-sm md:text-base hover:text-indigo-600">Features</a></li>
              <li><a href="#about" className="text-sm md:text-base hover:text-indigo-600">About</a></li>
              <li><a href="#contact" className="text-sm md:text-base hover:text-indigo-600">Contact</a></li>
            </ul>
          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link to="/sign-in" className="border border-indigo-600 text-sm md:text-base text-indigo-600 py-1 px-4 rounded-full shadow hover:bg-indigo-600 hover:text-white">Sign In</Link>
            <a href="#" className="border border-indigo-600 text-sm md:text-base text-indigo-600 py-1 px-4 rounded-full shadow hover:bg-indigo-600 hover:text-white">Sign Up</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-indigo-600" onClick={this.toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden bg-white shadow-md text-center transition-all duration-300 ease-in-out ${this.state.isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <ul className="flex flex-col space-y-4 px-4 py-4 text-lg font-bold">
            <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
            <li><Link to="/sign-in" className="border border-indigo-600 text-indigo-600 py-2 px-4 shadow hover:bg-indigo-600 hover:text-white block">Sign In</Link></li>
            <li><a href="#" className="border border-indigo-600 text-indigo-600 py-2 px-4 shadow hover:bg-indigo-600 hover:text-white block">Sign Up</a></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
