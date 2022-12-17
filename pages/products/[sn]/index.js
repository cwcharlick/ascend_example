import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import Link from "next/link";
import { useState } from "react";

import { server } from "../../../config";

import ProductCard from "../../../components/product/ProductCard";
import ProductConfig from "../../../components/product/ProductConfig";
import ProductInfo from "../../../components/product/ProductInfo";
import ProductItemNav from "../../../components/product/ProductItemNav";
import ProductReports from "../../../components/product/ProductReports";
import Scrollable from "../../../components/VerticalScroll";

export default function product({ product, logs }) {
  const links = [
    { name: "Info", content: <ProductInfo product={product} logs={logs} /> },
    { name: "Configure", content: <ProductConfig /> },
    { name: "Reports", content: <ProductReports /> },
  ];
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Link href="/products">
        <div className="page-header">
          <ArrowCircleUpRoundedIcon
            style={{ transform: "rotate(-90deg)", margin: 10 }}
          />
          {product.sn}
        </div>
      </Link>
      <ProductCard product={product} />
      <ProductItemNav
        selected={selected}
        setSelected={setSelected}
        links={links}
      />
      <Scrollable>{links[selected].content}</Scrollable>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const productRes = await fetch(`${server}/api/products/${context.params.sn}`);
  const product = await productRes.json();

  const logsRes = await fetch(`${server}/api/logs/${context.params.sn}`);

  const logs = await logsRes.json();

  return { props: { product, logs } };
};
