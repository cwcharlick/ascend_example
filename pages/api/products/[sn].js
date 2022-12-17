import { products } from "../../../data";

export default function handler(req, res) {
  const { sn } = req.query;
  const product = products.find((p) => p.sn === `${sn}`);

  if (!product) return res.status(404).json({ message: "product not found" });

  res.status(200).json(product);
}
