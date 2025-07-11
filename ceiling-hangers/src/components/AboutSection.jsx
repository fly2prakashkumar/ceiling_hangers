import React from 'react';
import './AboutSection.css'; // Import styles for this component
import dryingRackImage from '../assets/drying-rack-about.png'; // Make sure you have this image

function AboutSection() {
  return (
    <section className="about-section" id="about-section"> {/* ADDED ID HERE */}
      <div className="about-image-container">
        <img src={dryingRackImage} alt="Drying Rack" className="about-image" />
      </div>
      <div className="about-content">
        <h2 className="about-heading">
          About - <span className="highlight-text-about">Neelamani Durga Home Needs</span>
        </h2>
        <div className="about-text-scrollable">
          <p>
            At Neelamani Durga Home Needs, we specialize in providing innovative
            cloth drying solutions for modern homes. Based in Anantapur, we are
            known for our high-quality roof-mounted cloth drying hangers that help
            customers save space and dry clothes efficiently—especially in
            apartments and small homes.
          </p>
          <p>
            Our mission is to make your daily life easier by offering durable, stylish,
            and easy-to-use drying systems that blend with your home interiors.
            We offer a range of models and sizes, suitable for every type of
            household.
          </p>
          <p>
            With a focus on affordable pricing, professional installation, and
            customer satisfaction, we have served hundreds of happy families
            across the region. We also provide modular shoe racks, making us a
            one-stop destination for practical home needs.
          </p>
          <p>
            Whether it's monsoon or summer, our products are built to perform in all
            seasons, ensuring privacy, neatness, and smart use of your balcony or
            indoor space.
          </p>
          <p>
            We are committed to continuous innovation, bringing you the latest in home
            utility solutions. Our team is dedicated to providing excellent customer
            service, from initial consultation to post-installation support. We believe
            in creating products that not only serve a purpose but also enhance the
            aesthetic appeal of your home.
          </p>
          <p>
            Our commitment extends to environmental responsibility, as our drying
            solutions promote natural drying, reducing reliance on energy-intensive
            appliances. Join our growing family of satisfied customers and experience
            the convenience and quality of Neelamani Durga Home Needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;