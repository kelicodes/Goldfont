import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext.jsx";
import Card from "../Card/Card.jsx";
import "./Collection.css";

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    let tempProducts = [...products];

    // Filter by category
    if (categoryFilter !== "All") {
      tempProducts = tempProducts.filter(
        (prod) => prod.category === categoryFilter
      );
    }

    // Sort products
    if (sortOption === "price-high") {
      tempProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "price-low") {
      tempProducts.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(tempProducts);
  }, [products, categoryFilter, sortOption]);

  const categories = ["All", "Shoes", "Sweatpants", "Jackets", "Hoodies"];

  return (
    <section className="collection">
      <h2 className="collection-title">Our Collection</h2>

      {/* Filter Controls */}
      <div className="collection-controls">
        <div className="filter-group">
          <label>Category:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Sort by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-high">Price: High to Low</option>
            <option value="price-low">Price: Low to High</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="collection-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              price={product.price}
              desc={product.desc}
              category={product.category}
              image={product.images[0]} // first image
            />
          ))
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default Collection;
