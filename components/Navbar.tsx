// "use client";
import Image from "next/image";
import Logo from "../public/fav.png";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  // const {} = useRouter();
  return (
    <div className="flex">
      <Image src={Logo} alt="Logo" height={50} width={50} priority />
      <div>
        <Link href={"/progjects"}>Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
