import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaLock,
  FaChartLine,
  FaTools,
  FaPencilRuler,
  FaPaintBrush,
} from "react-icons/fa";
import Navbar from "../Components/Navbar"; // import the Navbar component
import "./Main.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="text-white d-flex align-items-center justify-content-center text-center hero-section"
        style={{
          minHeight: "60vh",
          background: "linear-gradient(135deg, #1f3c88, #5aa9e6, #6dd5ed)",
          padding: "3rem 1rem",
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
        }}
      >
        <div>
          <h1 className="display-4 fw-bold">Welcome to Elite IT Solutions</h1>
          <p className="lead mt-3">
            Empowering businesses through innovative technology and design
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Our Services</h2>
        <div className="row g-4">
          {[
            {
              icon: <FaLaptopCode size={50} />,
              title: "Web Development",
              desc: "We build modern, high-performance websites using the latest technologies like React, Node.js, and MongoDB. Whether it's an eCommerce platform, business portfolio, or web app, we ensure speed, security, and scalability.",
            },
            {
              icon: <FaPencilRuler size={50} />,
              title: "Web Designing",
              desc: "Our design team creates user-friendly interfaces that reflect your brand identity. We focus on responsive layouts, intuitive navigation, and seamless user experience (UX) to boost engagement and conversions.",
            },
            {
              icon: <FaPaintBrush size={50} />,
              title: "Graphic Design",
              desc: "From logo design to marketing collateral, we offer creative graphic design services that communicate your brand message with clarity and style. Visual storytelling that leaves a lasting impression.",
            },
            {
              icon: <FaMobileAlt size={50} />,
              title: "Mobile App Development",
              desc: "We develop powerful cross-platform mobile apps using React Native and Flutter. From ideation to deployment, we create solutions that deliver seamless performance on both Android and iOS.",
            },
            {
              icon: <FaCloud size={50} />,
              title: "Cloud Services",
              desc: "Scale your business with our cloud consulting and deployment services. We help migrate, manage, and secure your data on AWS, Azure, or Google Cloud with best practices and 24/7 support.",
            },
            {
              icon: <FaLock size={50} />,
              title: "Cybersecurity",
              desc: "Protect your digital infrastructure from threats with our enterprise-grade cybersecurity solutions. We offer vulnerability assessments, penetration testing, firewalls, and secure authentication protocols.",
            },
            {
              icon: <FaChartLine size={50} />,
              title: "Digital Marketing",
              desc: "Boost your visibility with our SEO, PPC, and social media marketing services. We create data-driven campaigns that bring targeted traffic, increase brand awareness, and maximize ROI.",
            },
            {
              icon: <FaTools size={50} />,
              title: "IT Consulting",
              desc: "Get expert guidance on your IT strategy. Our consultants help align technology with your business goals, streamline operations, and identify areas for automation and digital transformation.",
            },
          ].map((service, index) => (
            <div className="col-md-3" key={index}>
              <div className="card text-center shadow service-card h-100 p-4">
                <div className="mb-3 text-primary">{service.icon}</div>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 why-choose-us">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Why Choose Elite IT Solutions?
          </h2>
          <div className="row g-4">
            {[
              {
                icon: "uil uil-lightbulb-alt",
                bg: "linear-gradient(135deg, #667eea, #764ba2)",
                title: "Creative Solutions",
                desc: "We craft unique, creative digital products tailored to your business vision.",
              },
              {
                icon: "uil uil-shield-check",
                bg: "linear-gradient(135deg, #f7971e, #ffd200)",
                title: "Reliable & Secure",
                desc: "Security and trust are the cornerstones of our digital strategies.",
              },
              {
                icon: "uil uil-rocket",
                bg: "linear-gradient(135deg, #43cea2, #185a9d)",
                title: "Future-Ready Tech",
                desc: "Using cutting-edge technologies, we future-proof your digital presence.",
              },
              {
                icon: "uil uil-users-alt",
                bg: "linear-gradient(135deg, #ff6a00, #ee0979)",
                title: "Client-Centric Approach",
                desc: "We focus on long-term relationships by delivering beyond expectations.",
              },
            ].map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="text-center p-4 h-100 feature-box shadow-sm rounded-4">
                  <div
                    className="icon-box mb-3 mx-auto"
                    style={{
                      background: item.bg,
                    }}
                  >
                    <i
                      className={`${item.icon} text-white`}
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="about-section py-5"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container">
          <h2 className="text-center mb-4 fw-bold" style={{ color: "#1f3c88" }}>
            About Elite IT Solutions
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <p className="lead" style={{ color: "#333" }}>
                Elite IT Solutions has been a trusted technology partner for
                businesses across various industries. We specialize in
                delivering tailor-made IT services that drive digital
                transformation, improve operational efficiency, and enhance
                customer experience.
              </p>
              <p style={{ color: "#555" }}>
                Our team of skilled developers, designers, and consultants
                collaborate closely with clients to understand their unique
                challenges and create innovative solutions that help them stay
                ahead in the competitive digital landscape.
              </p>
              <p style={{ color: "#555" }}>
                Commitment to quality, transparency, and continuous improvement
                are at the core of everything we do. Join us on your journey to
                success with technology that empowers and inspires.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="About Elite IT Solutions"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="our-process py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Process</h2>
          <div className="row g-4">
            {[
              {
                icon: "https://cdn.lordicon.com/mfmkufkr.json",
                title: "Consultation",
                desc: "We start by understanding your business goals to shape a digital strategy.",
              },
              {
                icon: "https://cdn.lordicon.com/msoeawqm.json",
                title: "Planning & Design",
                desc: "Crafting intuitive and appealing UI/UX designs tailored to your brand.",
              },
              {
                icon: "https://cdn.lordicon.com/qhgmphtg.json",
                title: "Development",
                desc: "We build responsive and powerful web and mobile solutions using modern tech.",
              },
              {
                icon: "https://cdn.lordicon.com/slkvcfos.json",
                title: "Launch & Support",
                desc: "After launch, we ensure continuous support, updates, and improvements.",
              },
            ].map((step, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="flip-card h-100">
                  <div className="flip-card-inner">
                    {/* Front Side */}
                    <div className="flip-card-front d-flex flex-column align-items-center justify-content-center p-4">
                      <lord-icon
                        src={step.icon}
                        trigger="hover"
                        colors="primary:#2a9df4,secondary:#66d7f4"
                        style={{ width: "80px", height: "80px" }}
                      ></lord-icon>
                      <h5 className="fw-bold mt-3">{step.title}</h5>
                    </div>
                    {/* Back Side */}
                    <div className="flip-card-back p-4 d-flex align-items-center justify-content-center">
                      <p className="mb-0">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#1f3c88" }}>
            Contact Us
          </h2>
          <p className="text-center text-muted mb-5">
            Let’s talk about how Elite IT Solutions can help your business grow.
          </p>
          <div className="row align-items-start">
            {/* Contact Form */}
            <div className="col-md-6 mb-4">
              <div className="p-4 rounded shadow-sm bg-white">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 mt-4">
              <div className="d-flex mb-4">
                <i className="bi bi-geo-alt-fill text-primary fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Our Office</h6>
                  <p className="text-muted mb-0">
                    123 Elite Avenue, Tech City, India
                  </p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <i className="bi bi-telephone-fill text-primary fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Call Us</h6>
                  <p className="text-muted mb-0">+91 98765 43210</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <i className="bi bi-envelope-fill text-primary fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted mb-0">
                    contact@eliteitsolutions.com
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <i className="bi bi-globe text-primary fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Website</h6>
                  <p className="text-muted mb-0">www.eliteitsolutions.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#1f3c88",
          color: "#ffffff",
          fontFamily: "'Poppins', sans-serif",
        }}
        className="pt-5 pb-4"
      >
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Elite IT Solutions</h5>
              <p className="small">
                Empowering businesses through innovative digital solutions
                including web, mobile, design, and cloud.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled small">
                <li>
                  <a href="#home" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white text-decoration-none"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold">Contact Us</h6>
              <p className="small mb-1">
                <i className="bi bi-geo-alt-fill me-2"></i>123 Elite Avenue,
                Tech City, India
              </p>
              <p className="small mb-1">
                <i className="bi bi-telephone-fill me-2"></i>+91 98765 43210
              </p>
              <p className="small">
                <i className="bi bi-envelope-fill me-2"></i>
                contact@eliteitsolutions.com
              </p>
              <div className="mt-3">
                <a href="#" className="text-white me-3">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="border-light" />
          <div className="text-center small">
            © {new Date().getFullYear()} Elite IT Solutions. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
