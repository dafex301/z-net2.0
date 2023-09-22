import Logo from "@/components/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t-2 border-opacity-30 border-purple-800 p-5">
      <Link href="/">
        <Logo width={90} />
      </Link>
      <p>Kegiatan gabut Fahrel</p>
    </div>
  );
}
