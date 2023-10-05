"use client";

import { nameState } from "@/states/atoms/name";
import { charState } from "@/states/selectors/char";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Recoil() {
  const [name, setName] = useRecoilState(nameState);
  const charName = useRecoilValue(charState);

  return (
    <>
      <h1>Your name is {name}</h1>
      <h2>Your name length is {charName}</h2>
      <Link href="/recoil">Back</Link>
    </>
  );
}
