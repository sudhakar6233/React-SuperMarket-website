import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';import a1 from './images/a1.jpg';
import a2 from './images/a2.jpg';
import a3 from './images/a3.jpg';
import f1 from './images/f1.jpg';
import f2 from './images/f2.jpg';
import f3 from './images/f3.jpg' 
import f4 from './images/f4.jpg';
import f5 from './images/f5.jpg';
import f6 from './images/f6.jpg';
import f7 from './images/f7.jpg';
import f8 from './images/f8.jpg';
import f9 from './images/f9.jpg';
import f10 from './images/f10.jpg';
import f11 from './images/f11.jpg';
import f12 from './images/f12.jpg';
import f13 from './images/f13.jpg';
import f14 from './images/f14.jpg';
import f15 from './images/f15.jpg';
import f16 from './images/f16.jpg';
import c1 from './images/c1.jpg';
import d1 from './images/d1.png';
import ft1 from './images/ft1.png';



const Home = () => {
    const fruitItems = [
        { img: f1, title: "Apples", text: "Crisp and sweet, great for snacking and baking." },
        { img: f2, title: "Bananas", text: "Rich in potassium, perfect for smoothies and quick snacks." },
        { img: f3, title: "Oranges", text: "Juicy and packed with vitamin C, great for fresh juice." },
        { img: f4, title: "Strawberries", text: "Sweet and delicious, perfect for desserts and smoothies." },
        { img: f5, title: "Grapes", text: "Small and juicy, great for snacking and making wine." },
        { img: f6, title: "Pineapple", text: "Tropical and tangy, perfect for juices and salads." },
        { img: f7, title: "Mangoes", text: "Rich and creamy, great for smoothies and desserts." },
        { img: f8, title: "Blueberries", text: "Antioxidant-rich, perfect for breakfasts and snacks." },
        { img: f9, title: "Peaches", text: "Juicy and fragrant, great for fresh eating and baking." },
        { img: f10, title: "Cherries", text: "Sweet and tart, perfect for snacking and desserts." },
        { img: f11, title: "Pomegranates", text: "Packed with nutrients, great for fresh juice and salads." },
        { img: f12, title: "Watermelon", text: "Refreshing and hydrating, perfect for hot days." },
        { img: f13, title: "Kiwi", text: "Tangy and full of vitamin C, great for salads and smoothies." },
        { img: f14, title: "Papaya", text: "Sweet and tropical, good for digestion and smoothies." },
        { img: f15, title: "Plums", text: "Juicy and slightly tart, great for snacking and baking." },
        { img: f16, title: "Avocado", text: "Creamy and nutritious, perfect for toast and salads." }
    ];
    
    return (
        <>
         {/* Main Carousel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={a1} className="d-block w-100" alt="Slide 1" style={{ height: "500px" }} />
          </div>
          <div className="carousel-item">
            <img src={a2} className="d-block w-100" alt="Slide 2" style={{ height: "500px" }} />
          </div>
          <div className="carousel-item">
            <img src={a3} className="d-block w-100" alt="Slide 3" style={{ height: "500px" }} />
          </div>
        </div>
        {/* Carousel Controls */}
      </div>
            {/* Previous Button */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            {/* Next Button */}
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
   {/* Fruit Cards Section */}
   <div className="container py-5">
                <h2 className="text-center mb-4">Fresh Fruits Collection</h2>
                <div className="row">
                    {fruitItems.map((fruit, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card h-100 shadow-sm">
                                <img src={fruit.img} className="card-img-top" alt={fruit.title} style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{fruit.title}</h5>
                                    <p className="card-text">{fruit.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>           
{/* Mid-Page Promotional Carousel */}
<div id="promoCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
  <div className="carousel-inner">
      {[c1].map((img, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={img} className="d-block w-100" alt={`Promo Slide ${index + 1}`} style={{ objectFit: 'cover', height: '400px' }} />
          </div>
      ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>  
 {/* Hero section for Vegetable Shop */}
<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={d1} className="d-block mx-lg-auto img-fluid" alt="Fresh Vegetables" width="700" height="500" loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-success lh-1 mb-3">Fresh & Organic Vegetables Delivered to Your Doorstep</h1>
      <p className="lead">
        Experience the goodness of farm-fresh, organic vegetables handpicked for quality. We bring nature’s best produce straight from the farm to your home, ensuring health and freshness in every bite.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-success btn-lg px-4 me-md-2">Shop Now</button>
        <button type="button" className="btn btn-outline-success btn-lg px-4">Learn More</button>
      </div>
    </div>
  </div>
</div>
{/* footer section */}
<footer className="bg-success text-white py-5 mt-4">
      <div className="container">
        <div className="row text-center text-md-center d-flex justify-content-between">
          
          {/* Contact Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1"><FaPhone className="me-2" /> +123 456 7890</p>
            <p className="mb-1"><FaEnvelope className="me-2" /> info@vegetablemart.com</p>
            <p className="mb-0"><FaMapMarkerAlt className="me-2" /> 123 Greenway St, Freshville, NAMAKKAL</p>
            <p className="mt-3">Open Hours: Mon - Sat, 8:00 AM - 9:00 PM</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {["Home", "About Us", "Shop", "Contact", "FAQ"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white text-decoration-none d-block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Help</h5>
            <ul className="list-unstyled">
              {["Customer Support", "Shipping & Delivery", "Returns & Refunds", "Privacy Policy"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white text-decoration-none d-block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & App Download Section */}
          <div className="col-md-3 mb-4 text-center text-md-start">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white social-icon"><FaFacebook size={28} /></a>
              <a href="#" className="text-white social-icon"><FaInstagram size={28} /></a>
              <a href="#" className="text-white social-icon"><FaTwitter size={28} /></a>
            </div>
            <h5 className="fw-bold mt-3">Download Our App</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#"><img src={ft1} alt="Google Play" className="app-img" /></a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Copyright Section */}
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Vegetable Mart. All Rights Reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .social-icon {
          transition: transform 0.3s ease-in-out, color 0.3s;
        }
        .social-icon:hover {
          color: #FFD700;
          transform: scale(1.2);
        }
        .app-img {
          width: 200px;
          margin: 15px 0px;
        }
      `}</style>
    </footer>
           
        </>
    );
};

export default Home;
