import Link from "next/link";
import CategoryIcon from "@mui/icons-material/Category";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/router";

import styles from "../styles/Nav.module.css";

export default function Nav() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link
            href="/products/"
            className={router.pathname === "/products" ? styles.active : ""}
          >
            <CategoryIcon />
          </Link>
        </li>
        <li>
          <Link
            href="/data"
            className={router.pathname === "/data" ? styles.active : ""}
          >
            <BarChartIcon />
          </Link>
        </li>
        <li>
          <Link
            href="/notifications"
            className={
              router.pathname === "/notifications" ? styles.active : ""
            }
          >
            <NotificationsNoneIcon />
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className={router.pathname === "/settings" ? styles.active : ""}
          >
            <SettingsIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
