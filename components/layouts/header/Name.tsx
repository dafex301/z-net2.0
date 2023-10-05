"use client";

import { nameState } from "@/states/atoms/name";
import { useRecoilState } from "recoil";

export default function Name() {
  const [name, setName] = useRecoilState(nameState);
  return <p className="font-semibold opacity-80">Hello, {name}</p>;
}
