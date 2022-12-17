import Nav from "./Nav";
import Meta from "./Meta";

import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
      <Nav />
    </>
  );
}
