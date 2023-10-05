import { selector } from "recoil";
import { nameState } from "../atoms/name";

const charState = selector({
  key: "charState",
  get: ({ get }) => {
    const name = get(nameState);
    return name.length;
  },
});

export { charState };
