import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Cards';
import MenData from './Men.json'; 

function Kinds() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    setProducts(MenData);
  }, []); 

  return (
    <div>
      <Navbar />


      <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {products.map((product) => (
          <Cards key={product.id} item={product} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Kinds;
