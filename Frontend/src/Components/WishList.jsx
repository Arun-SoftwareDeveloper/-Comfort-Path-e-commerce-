// WishList.jsx
import React from "react";
import menProducts from "../Products/MenProducts";

const WishList = () => {
  const wishlistProducts = menProducts.filter(
    (product) => product.isInWishlist
  );

  return (
    <div className="container mt-4">
      <h1>Your Wishlist</h1>
      <div className="row" id="wishlist">
        {wishlistProducts.map((product, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {product.images.map((image, i) => (
                    <div
                      key={i}
                      className={`carousel-item${i === 0 ? " active" : ""}`}
                    >
                      <img
                        src={image}
                        className="d-block w-100"
                        alt={`Image ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₹{product.price}</p>
                {/* Add any additional details you want to display */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
