import type { NextPage } from "next";
import Link from "next/link";

const NavBar: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="/"> Home</Link>
      </li>
      <li>
        <Link href="/PokeApi">Poke Api</Link>
      </li>
      <li>
        <Link href="/NBPApi">Nbp Api</Link>
      </li>
      <li>
        <Link href="/">Contact</Link>
      </li>
    </ul>
  );
};

export default NavBar;
