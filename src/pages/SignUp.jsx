import React, { Component } from "react";
import { FaFacebook, FaGoogle, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    this.setState({ loading: false });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", this.state.email);
    console.log("Password:", this.state.password);
  };

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }

    return (
      <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
        <Header />

        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl shadow-gray-900">
            <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up</h2>
            <form onSubmit={this.handleSubmit} className="space-y-6">
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              {/* Social Login Icons */}
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 text-2xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700 transition duration-300 text-2xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-red-500 hover:text-red-700 transition duration-300 text-2xl">
                  <FaGoogle />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition duration-300 text-2xl">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-900 hover:text-gray-700 transition duration-300 text-2xl">
                  <FaGithub />
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default SignUp;