import type { NextPage } from "next";
import styles from "./Footer.module.scss";

const Footer: NextPage = () => {
  return (
    <footer data-testid="footer" className={styles.footer}>
      Stopa @ datas cos tam{" "}
    </footer>
  );
};

export default Footer;
