"use client";

import ContentCard from "../card/SkillCard";
// import Tree from "../tree/Tree";
import { useState } from "react";
import { TreeNodeData } from "../tree/TreeNode";
import Tree from "../tree/Tree2";

interface TreeSkillCardsProps {
  treeData: TreeNodeData[];
}

export default function TreeSkillCards({ treeData }: TreeSkillCardsProps) {
  const [activeNode, setActiveNode] = useState<TreeNodeData | null>(null);

  return (
    <div className="grid grid-cols-12 gap-8 mt-5">
      <div className="col-span-3 bg-white rounded-2xl shadow-md p-8">
        <h2>List Skill</h2>
        {/* <Tree
          data={treeData}
          activeNode={activeNode}
          setActiveNode={setActiveNode}
        /> */}
        <Tree data={treeData} />
      </div>
      <div className="col-span-9 bg-white rounded-2xl shadow-md p-8">
        <ContentCard
          title={activeNode?.title || "Pilih dulu skillnya di sebelah kiri boy"}
          image={activeNode ? "/coding.jpg" : ""}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rem,
          obcaecati temporibus veritatis, mollitia, reprehenderit aliquid porro
          eaque esse exercitationem totam beatae labore ipsum odit magni
          accusantium quisquam dolorum quia eum illo! Natus adipisci error cum
          odio ducimus vero amet.
        </ContentCard>
      </div>
    </div>
  );
}
