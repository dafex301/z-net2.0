"use client";

import { nameState } from "@/states/atoms/name";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function Recoil() {
  const [name, setName] = useRecoilState(nameState);

  return (
    <>
      <h1>Enter your name</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Link href="/recoil/display">Display</Link>
    </>
  );
}
