import React, { Component } from "react";
import { useNavigate, useLocation } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: localStorage.getItem("menuOpen") === "true" };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    // ✅ Scroll to last visited section on refresh
    const lastSection = localStorage.getItem("lastSection");
    if (lastSection && document.getElementById(lastSection)) {
      setTimeout(() => {
        document.getElementById(lastSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
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
    this.setState(
      (prevState) => {
        const newState = !prevState.isOpen;
        localStorage.setItem("menuOpen", newState); // ✅ Store menu state in localStorage
        return { isOpen: newState };
      }
    );
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
    localStorage.setItem("menuOpen", "false"); // ✅ Close menu and update localStorage
  };

  scrollToSection = (id) => {
    const { navigate, location } = this.props;

    // ✅ Store last clicked section
    localStorage.setItem("lastSection", id);

    // ✅ Detect base path dynamically
    const basePath = window.location.pathname.includes("/") ? "/" : "";

    if (location.pathname !== `${basePath}/`) {
      navigate(`${basePath}/`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  render() {
    return (
      <header className="bg-white shadow-md fixed top-0 w-full z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <button className="text-xl md:text-2xl font-bold text-blue-700" onClick={() => this.scrollToSection("home")}>
            My WebApp
          </button>

          {/* Center Navigation */}
          <nav className="hidden md:flex flex-grow justify-center">
            <ul className="flex flex-row space-x-6">
              {["features", "about", "contact"].map((section) => (
                <li key={section}>
                  <button className="text-sm md:text-base hover:text-blue-700" onClick={() => this.scrollToSection(section)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex space-x-4">
            <button onClick={() => this.props.navigate("/sign-in")} className="border border-blue-700 text-sm md:text-base text-blue-700 py-1 px-4 shadow hover:bg-blue-700 hover:text-white rounded-full">Sign In</button>
            <button onClick={() => this.props.navigate("/sign-up")} className="border border-blue-700 text-sm md:text-base text-blue-700 py-1 px-4 shadow hover:bg-blue-700 hover:text-white rounded-full">Sign Up</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-blue-700" onClick={this.toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden bg-white shadow-md text-center transition-all duration-300 ease-in-out ${this.state.isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col space-y-4 px-4 py-4 text-lg font-bold">
            {["features", "about", "contact"].map((section) => (
              <li key={section}>
                <button className="hover:text-blue-700" onClick={() => { this.closeMenu(); this.scrollToSection(section); }}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => (this.closeMenu(), this.props.navigate("/sign-in"))} className="w-full border border-blue-700 text-blue-700 py-2 px-4 shadow hover:bg-blue-700 hover:text-white">
                Sign In
              </button>
            </li>
            <li>
              <button onClick={() => (this.closeMenu(), this.props.navigate("/sign-up"))} className="w-full border border-blue-700 text-blue-700 py-2 px-4 shadow hover:bg-blue-700 hover:text-white">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

// ✅ Fix for React Router v6+
function WithRouterWrapper(props) {
  const navigate = useNavigate();
  const location = useLocation();
  return <Header {...props} navigate={navigate} location={location} />;
}

export default WithRouterWrapper;