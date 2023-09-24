"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import ContentListData from "@/data/contents.json";

export default function ContentListCard() {
  const router = useRouter();
  const path = usePathname();
  const id = path.split("/")[5] ?? "";

  const [selected, setSelected] = useState(id);

  const basePath = path.split("/").slice(0, 5).join("/");

  const handleContentClick = (id: string) => {
    setSelected(id);
    router.push(`${basePath}/${id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-gray-700 font-semibold mb-2">List Konten</h2>
      <div className="flex flex-col text-gray-400 gap-1">
        {ContentListData.map((content) => (
          <button
            className={`text-left hover:text-purple-800 transition-all ${
              selected === content.id
                ? "text-purple-700 font-semibold hover:text-purple-800"
                : ""
            }`}
            onClick={() => handleContentClick(content.id)}
            key={content.id}
          >
            {content.title}
          </button>
        ))}
      </div>
    </div>
  );
}
