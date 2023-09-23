"use client";

import { usePathname } from "next/navigation";
import TreeNode from "./TreeNode";
import { TreeNodeData } from "@/interfaces/TreeNodeData";
import findPath from "@/utils/tree/findPath";

interface TreeProps {
  data: TreeNodeData[];
}

// const Tree: React.FC<TreeProps> = ({ data }) => {
//   const path = usePathname();
//   const basePath = path.split("/").slice(0, 3).join("/");

//   return (
//     <div className="mt-2">
//       {data.map((node) => (
//         <TreeNode key={node.id} node={node} basePath={basePath} />
//       ))}
//     </div>
//   );
// };

const Tree: React.FC<TreeProps> = ({ data }) => {
  const path = usePathname();

  // Get the ID from the last segment of the path
  const selectedId = path.split("/").pop();

  // Find the path for the selected ID
  const nodePath = selectedId ? findPath(data, selectedId) : null;
  return (
    <div className="mt-2">
      {data.map((node) => (
        <TreeNode key={node.id} node={node} nodePath={nodePath} />
      ))}
    </div>
  );
};

export default Tree;
