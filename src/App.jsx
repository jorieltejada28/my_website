import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import landingPageImage from "./images/rb_1816.png"; 
import featureOneImage from "./images/featureone.png";
import featureTwoImage from "./images/featuretwo.png";
import featureThreeImage from "./images/featurethree.png"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      <Header />

      {/* Hero Section */}
      <section
        className="w-full h-screen flex items-center justify-start text-left"
        style={{ 
          backgroundImage: `url(${landingPageImage})`,
          backgroundSize: '55%', 
          backgroundPosition: 'right center', 
          backgroundRepeat: 'no-repeat'
        }}
        id="home"
      >
        <div className="ml-4 md:ml-14 max-w-lg p-4 md:p-9 rounded-lg mt-20 md:mt-25">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-10">Welcome to My Landing Page</h2>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ex dolorem mollitia porro deleniti culpa voluptas corporis molestiae
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo omnis officiis earum? Minima recusandae iste obcaecati dolorem ex veniam,
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="bg-indigo-600 text-white font-semibold py-2 px-4 md:py-2 md:px-5 rounded-full shadow hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-100 rounded-lg shadow-md text-center relative group overflow-hidden">
              <img
                src={featureOneImage}
                alt="Feature One"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="text-white p-4">
                  <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Feature One</h4>
                  <p>Enjoy blazing fast performance with optimized designs.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md text-center relative group overflow-hidden">
              <img
                src={featureTwoImage}
                alt="Feature Two"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="text-white p-4">
                  <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Feature Two</h4>
                  <p>Looks great on all devices, from desktop to mobile.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md text-center relative group overflow-hidden">
              <img
                src={featureThreeImage}
                alt="Feature Three"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="text-white p-4">
                  <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Feature Three</h4>
                  <p>Easily customize to suit your needs and preferences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">About Us</h3>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg mb-4 md:mb-6">
              We are a team of passionate developers and designers dedicated to creating modern, responsive web applications. Our mission is to provide the tools and resources needed to build beautiful, functional websites quickly and efficiently.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              With years of experience in the industry, we understand the challenges that come with web development. That's why we've created a platform that simplifies the process, allowing you to focus on what matters most - creating amazing user experiences.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Join our community and start building your next project with us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Contact Us</h3>
          <div className="max-w-3xl mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="4"></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-indigo-700">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;