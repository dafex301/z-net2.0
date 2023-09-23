"use client";

import { usePathname } from "next/navigation";
// components/Tree.tsx
import { TreeNodeData } from "./TreeNode";
import TreeNode from "./TreeNode2";

interface TreeProps {
  data: TreeNodeData[];
}

const Tree: React.FC<TreeProps> = ({ data }) => {
  const path = usePathname();
  const basePath = path.split("/").slice(0, 3).join("/");

  return (
    <div className="mt-2">
      {data.map((node) => (
        <TreeNode key={node.id} node={node} basePath={basePath} />
      ))}
    </div>
  );
};

export default Tree;
