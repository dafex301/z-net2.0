"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = () => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <Link
      href={href}
      className={`font-bold hover:bg-white hover:bg-opacity-10 transition-all ${
        !isActive() && "opacity-70"
      } px-3 py-1 rounded-full`}
    >
      {children}
    </Link>
  );
}
