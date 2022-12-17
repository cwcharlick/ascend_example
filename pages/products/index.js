import { useState } from "react";

import Filters from "../../components/product/Filters";
import ProductList from "../../components/product/ProductList";
import Scrollable from "../../components/VerticalScroll";

export default function ProductPage({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  return (
    <>
      <div className="page-header">
        <img src="/dominicon.webp" /> ASCEND
      </div>

      <Filters products={products} setFilteredProducts={setFilteredProducts} />
      <Scrollable>
        <ProductList products={filteredProducts} />
      </Scrollable>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products/`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
