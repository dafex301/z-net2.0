"use client";

// components/TreeNode.tsx
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export interface TreeNodeData {
  id: string;
  title: string;
  children: TreeNodeData[];
}

interface TreeNodeProps {
  node: TreeNodeData;
  basePath: string;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, basePath }) => {
  const router = useRouter();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // extract the latest node id from the path
  const pathParts = path.split("/");
  const latestNodeId = pathParts[pathParts.length - 1];

  const isActive = latestNodeId === node.id;

  useEffect(() => {
    if (path.includes(node.id)) {
      setIsOpen(true);
    }
  }, [path]);

  const handleNodeClick = () => {
    router.push(`${basePath}/${node.id}`);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`flex items-center p-1 px-3 rounded-full justify-between cursor-pointer transition-colors duration-300 
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
        className={`overflow-hidden transition-max-height duration-200 ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {node.children.map((child) => (
          <div className="pl-4 border-l-2 border-gray-200" key={child.id}>
            <TreeNode node={child} basePath={`${basePath}/${node.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeNode;
