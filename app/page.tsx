import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center">Halaman Awal</h1>
      <div className="text-center">
        <Link href="/classes">Sokin Masuk Kelas</Link>
      </div>
    </>
  );
}
