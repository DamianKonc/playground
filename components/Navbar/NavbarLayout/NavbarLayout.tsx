import type { NextPage } from "next";

import styles from "./NavbarLayout.module.scss";
import NavbarLink from "../NavbarLink/NavbarLink";

const NavbarLayout: NextPage = () => {
  return (
    <ul className={styles.navbarLayout}>
      <li className={styles.navbarLayout__el}>
        <NavbarLink link="/" text="Home" />
      </li>
      <li className={styles.navbarLayout__el}>
        <NavbarLink link="/PokeApi/PokeApi" text="Poke Api" />
      </li>
      <li className={styles.navbarLayout__el}>
        <NavbarLink link="/NBPApi/NBPApi" text="Nbp Api" />
      </li>
      <li className={styles.navbarLayout__el}>
        <NavbarLink link="/Contact/Contact" text="Contact" />
      </li>
    </ul>
  );
};

export default NavbarLayout;
