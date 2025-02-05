import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import landingPageImage from "./images/rb_1816.png";
import featureOneImage from "./images/featureone.png";
import featureTwoImage from "./images/featuretwo.png";
import featureThreeImage from "./images/featurethree.png";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Base Component Class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }

    return (
      <Router basename="/my_website">
        <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
          {/* Conditionally render Header and Footer */}
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HeroSection />
                  <FeaturesSection />
                  <AboutSection />
                  <ContactSection />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

// Hero Section Component
class HeroSection extends Component {
  render() {
    return (
      <section
        className="w-full h-screen flex items-center justify-start text-left"
        style={{
          backgroundImage: `url(${landingPageImage})`,
          backgroundSize: "55%",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
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
    );
  }
}

// Features Section Component
class FeaturesSection extends Component {
  renderFeature(image, title, description) {
    return (
      <div className="bg-gray-100 rounded-lg shadow-md text-center relative group overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="text-white p-4">
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section id="features" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {this.renderFeature(featureOneImage, "Feature One", "Blazing fast performance.")}
            {this.renderFeature(featureTwoImage, "Feature Two", "Responsive on all devices.")}
            {this.renderFeature(featureThreeImage, "Feature Three", "Easy customization.")}
          </div>
        </div>
      </section>
    );
  }
}

// About Section Component
class AboutSection extends Component {
  render() {
    return (
      <section id="about" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            About Us
          </h3>

          <div className="mb-6">
            <p className="text-center max-w-3xl mx-auto">
              We are a passionate and highly skilled team of developers and designers dedicated to crafting innovative,
              modern, and fully responsive web applications. Our mission is to merge creativity with technology, delivering
              solutions that are not only visually appealing but also highly functional, efficient, and user-friendly.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-center max-w-3xl mx-auto">
              With a deep understanding of the latest industry trends and best practices, we prioritize building
              applications that offer seamless performance across all devices, whether it’s desktops, tablets, or mobile
              phones. We believe that great design should go hand in hand with robust functionality, ensuring that users
              can navigate effortlessly while experiencing smooth interactions and optimized performance.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-center max-w-3xl mx-auto">
              Our development process is rooted in writing clean, maintainable, and scalable code, allowing for easy
              updates and long-term sustainability. We pay close attention to every detail, from the architecture and
              backend logic to the frontend design and user interface. By leveraging modern frameworks, advanced programming
              techniques, and cutting-edge technologies, we create digital solutions that not only meet but exceed
              expectations.
            </p>
          </div>

          <div>
            <p className="text-center max-w-3xl mx-auto">
              Understanding that every project is unique, we tailor our approach to suit the specific needs of each client.
              Whether it’s a simple, elegant website for a small business, a sophisticated e-commerce platform, or a complex
              enterprise-level web application, we ensure that our solutions align perfectly with business objectives. We work
              closely with our clients to understand their vision, refine their ideas, and translate them into a digital reality
              that drives engagement and success.
            </p>
          </div>

        </div>
      </section>
    );
  }
}

// Contact Section Component
class ContactSection extends Component {
  render() {
    return (
      <section id="contact" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Contact Us</h3>
          <form className="max-w-3xl mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full px-3 py-2 border rounded-md" />
            <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" />
            <textarea placeholder="Message" className="w-full px-3 py-2 border rounded-md" rows="4"></textarea>
            <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-full">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
}

export default App;
