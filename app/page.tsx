import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center">いらっしゃいませ</h1>
      <div className="text-center mt-5">
        <Link
          className=" font-medium hover:font-bold text-purple-600"
          href="/classes"
        >
          Sokin Masuk Kelas
        </Link>
      </div>
    </>
  );
}
