"use client";

import React, { useState } from "react";

export interface TreeNodeData {
  id: string;
  title: string;
  children: TreeNodeData[];
}

interface TreeNodeProps {
  node: TreeNodeData;
  activeNode: TreeNodeData | null;
  setActiveNode: (node: TreeNodeData) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  activeNode,
  setActiveNode,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isActive = activeNode?.id === node.id;

  return (
    <div>
      <div
        className={`flex items-center p-2 rounded-xl justify-between cursor-pointer transition-colors duration-300 
          ${
            isActive
              ? "bg-purple-500 text-yellow-400 font-semibold"
              : "text-purple-500 hover:text-purple-700 hover:bg-gray-100"
          }
        `}
        onClick={() => {
          setIsOpen(!isOpen);
          setActiveNode(node);
        }}
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
            <TreeNode
              node={child}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeNode;
