"use client";

import ContentCard from "../card/ContentCard";
import Tree from "../tree/Tree";
import { useState } from "react";
import { TreeNodeData } from "../tree/TreeNode";

interface ClassContentCardsProps {
  treeData: TreeNodeData[];
}

export default function ClassContentCards({
  treeData,
}: ClassContentCardsProps) {
  const [activeNode, setActiveNode] = useState<TreeNodeData | null>(null);

  return (
    <div className="grid grid-cols-12 gap-8 mt-5">
      <div className="col-span-3 bg-white rounded-2xl shadow-md p-8">
        <h2>List Konten</h2>
        <Tree
          data={treeData}
          activeNode={activeNode}
          setActiveNode={setActiveNode}
        />
      </div>
      <div className="col-span-9 bg-white rounded-2xl shadow-md p-8">
        <ContentCard
          title={
            activeNode?.title || "Pilih dulu kontennya di sebelah kiri boy"
          }
          image={activeNode ? "/coding.jpg" : ""}
        >
          {activeNode ? "Ini Konten" : ""}
        </ContentCard>
      </div>
    </div>
  );
}
