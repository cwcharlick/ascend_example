import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src="/DominLogo.avif" />
        ASCEND
      </div>
      <div className={styles.text}>
        <span>Welcome to my example project.</span>
        This login page is purely a placeholder. Please click the <b>
          Log In
        </b>{" "}
        button to go to your products.
      </div>
      <div className={styles.buttons}>
        <Link href="/" className={styles.getStarted}>
          <div>Get Started</div>
        </Link>
        <Link href="/products">
          <div>Log In</div>
        </Link>
      </div>
    </div>
  );
}
