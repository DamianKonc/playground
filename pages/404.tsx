import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>Cant find that page, something is wrong</div>
      <Link href="./">
        <a>GO BACK</a>
      </Link>
    </div>
  );
};

export default NotFound;
