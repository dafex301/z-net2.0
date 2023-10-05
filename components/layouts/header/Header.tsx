import Logo from "@/components/Logo";
import Link from "next/link";
import NavLink from "./NavLink";
import Name from "./Name";

export default function Header() {
  return (
    <div className="flex bg-purple-800 text-white p-5 border-b-4 border-yellow-500 gap-8 items-center">
      <Link href="/">
        <Logo type="light" />
      </Link>
      <NavLink href="/">Beranda</NavLink>
      <NavLink href="/classes">Kelas</NavLink>
      <NavLink href="/recoil">Recoil Playground</NavLink>
      <div className="flex-1 flex justify-end">
        <Name />
      </div>
    </div>
  );
}
