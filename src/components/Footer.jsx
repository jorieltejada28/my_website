import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} My WebApp. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
