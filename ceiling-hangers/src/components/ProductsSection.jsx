import React from 'react';
import './ProductsSection.css'; // Import styles for this component

// Import product images (you'll need to add these to your src/assets folder)
import roofHangerImage from '../assets/roof-hanger.png';
import wallRackImage from '../assets/wall-rack.png';
import shoeRackImage from '../assets/shoe-rack.png';

function ProductsSection() {
  // Ensure this 'products' array is defined here, inside the component function
  const products = [
    {
      id: 1,
      image: roofHangerImage,
      title: 'Cloth Drying Roof Hangers',
      description: 'A space-saving, pulley-operated ceiling hanger—ideal for drying clothes in balconies or utility areas. Durable, rust-free, and easy to use!',
    },
    {
      id: 2,
      image: wallRackImage,
      title: 'Wall-Mounted Cloth Drying Racks',
      description: 'Compact and sturdy wall rack for daily drying needs. Perfect for small spaces like bathrooms and kitchens.',
    },
    {
      id: 3,
      image: shoeRackImage,
      title: 'Modular Shoe Racks',
      description: 'Stylish vertical shoe rack with multiple layers. Keeps your footwear organized in minimal space, available in open and closed designs.',
    },
  ];

  const phoneNumber = "6302588530"; // Define the phone number for calls
  const whatsappNumber = "6302588530"; // The correct WhatsApp number

  return (
    <section className="products-section" id="products-section">
      <div className="products-header">
        <span className="products-tag">Our Products</span>
      </div>
      <div className="products-carousel">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-buttons">
              <a
                href={`tel:+91${phoneNumber}`}
                className="btn product-call-btn"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn product-whatsapp-btn"
              >
                WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;