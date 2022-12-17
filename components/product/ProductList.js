import Link from "next/link";

import ProductCard from "./ProductCard";

import styles from "../../styles/ProductList.module.css";

export default function ProductList({ products }) {
  return (
    <div className={styles.container}>
      {products.length > 0 ? (
        products.map((p) => (
          <Link key={p.sn} href="/products/[sn]" as={`/products/${p.sn}`}>
            <ProductCard product={p} />
          </Link>
        ))
      ) : (
        <i>No products found.</i>
      )}
    </div>
  );
}
