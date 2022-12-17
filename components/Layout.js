import Nav from "./Nav";
import Meta from "./Meta";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
      {router.pathname !== "/" && <Nav />}
    </>
  );
}
