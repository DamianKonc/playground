import { NextPage } from "next";
import Link from "next/link";
import styles from "./NavbarLink.module.scss";
import { Props } from "./types";

const NavbarLink = ({ link, text }: Props) => {
  return (
    <Link href={link}>
      <a className={styles.navbarLink}> {text}</a>
    </Link>
  );
};

export default NavbarLink;
