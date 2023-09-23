import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <Image
          className="rounded-2xl"
          src={"/nakama.webp"}
          alt={"Nakama"}
          width={500}
          height={300}
        />
        <h1 className="text-3xl font-semibold text-center">いらっしゃいませ</h1>
        <div className="text-center">
          <Link
            className=" font-medium hover:font-bold text-purple-600"
            href="/classes"
          >
            OTW CARI ONE PIECE
          </Link>
        </div>
      </div>
    </>
  );
}
