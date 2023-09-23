"use client";

// components/TreeNode.tsx
import { TreeNodeData } from "@/interfaces/TreeNodeData";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface TreeNodeProps {
  node: TreeNodeData;
  nodePath: string[] | null;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, nodePath }) => {
  const router = useRouter();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(nodePath && nodePath.includes(node.id));
  const pathParts = path.split("/");
  const latestNodeId = pathParts[pathParts.length - 1];
  const basePath = pathParts.slice(0, 3).join("/");

  const isActive = latestNodeId === node.id;

  const handleNodeClick = () => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    }
    setTimeout(() => {
      router.push(`${basePath}/${node.id}`);
    }, 100);
  };

  // close the node if the path doesn't include the node id
  useEffect(() => {
    if (nodePath && !nodePath.includes(node.id)) {
      setIsOpen(false);
    }
  }, [nodePath, node.id]);

  return (
    <div>
      <div
        className={`flex items-center p-1 px-3 rounded-full justify-between cursor-pointer transition-colors duration-100 
          ${
            isActive
              ? "bg-purple-500 text-yellow-400 font-semibold"
              : "text-purple-500 hover:text-purple-700 hover:bg-gray-100"
          }
        `}
        onClick={handleNodeClick}
      >
        <span>{node.title}</span>
        {node.children.length > 0 && (
          <span
            className={`ml-2 cursor-pointer transform transition-transform ${
              isOpen ? "-rotate-90" : ""
            }`}
          >
            v
          </span>
        )}
      </div>
      <div
        className={`transform transition-all duration-100 ease-in-out origin-top ${
          isOpen ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0"
        }`}
      >
        {node.children.map((child) => (
          <div className="pl-4 border-l-2 border-gray-200" key={child.id}>
            <TreeNode node={child} nodePath={nodePath} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeNode;
