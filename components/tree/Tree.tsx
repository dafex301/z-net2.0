"use client";

import { usePathname } from "next/navigation";
import TreeNode from "./TreeNode";
import { TreeNodeData } from "@/interfaces/TreeNodeData";
import findPath from "@/utils/tree/findPath";

interface TreeProps {
  data: TreeNodeData[];
  title?: string;
}

const Tree: React.FC<TreeProps> = ({ data, title }) => {
  const path = usePathname();

  // Get the 3rd index of the path
  const selectedId = path.split("/")[3];

  // Find the path for the selected ID
  const nodePath: string[] | null = selectedId
    ? findPath(data, selectedId)
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-gray-700 font-semibold mb-2">{title}</h2>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} nodePath={nodePath} />
      ))}
    </div>
  );
};

export default Tree;
