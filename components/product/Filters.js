import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

import DropDown from "../inputs/DropDown";

import styles from "../../styles/Filters.module.css";

export default function Filters({ products, setFilteredProducts }) {
  const [filteredType, setFilteredType] = useState("All");
  const [filteredLocation, setFilteredLocation] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredProducts = products.filter(
      (p) =>
        (filteredType === "All" || p.type === filteredType) &&
        (filteredLocation === "All" || p.location === filteredLocation) &&
        (search === "" || productContains(search, p))
    );
    setFilteredProducts(filteredProducts);
  }, [filteredType, filteredLocation, search]);

  const productTypes = [];
  const productLocations = [];

  for (let i = 0; i < products.length; i++) {
    const { type, location } = products[i];
    productTypes.includes(type) || productTypes.push(type);
    productLocations.includes(location) || productLocations.push(location);
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          placeholder="Search"
          className={styles.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon />
      </div>
      <div className={styles.filtersContainer}>
        <DropDown
          name="All types"
          setSelection={setFilteredType}
          selected={filteredType}
          options={productTypes}
        />
        <DropDown
          name="All locations"
          setSelection={setFilteredLocation}
          selected={filteredLocation}
          options={productLocations}
        />
      </div>
    </div>
  );
}

function productContains(search, p) {
  let exists = false;
  Object.entries(p).forEach(([key, value]) => {
    let str = value.toString().toLowerCase();
    if (key === "danger") value ? (str = "error") : (str = "active");

    if (str.includes(search.toLowerCase())) {
      console.log(value, search);
      return (exists = true);
    }
  });
  return exists;
}
