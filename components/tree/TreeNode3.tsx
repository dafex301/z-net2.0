"use client";

// TreeNode.tsx
import React, { useState } from "react";

interface TreeNodeData {
  id: number;
  title: string;
  children: TreeNodeData[];
}

interface TreeNodeProps {
  node: TreeNodeData;
  activeNodeId: number | null;
  setActiveNodeId: (id: number) => void;
}

interface TreeProps {
  data: TreeNodeData[];
}

const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  activeNodeId,
  setActiveNodeId,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isActive = node.id === activeNodeId;

  return (
    <div>
      <div
        className={`flex items-center justify-between cursor-pointer transition-colors duration-300 
          ${
            isActive
              ? "bg-purple-500 text-yellow-400"
              : "text-purple-500 hover:text-purple-700"
          }
        `}
        onClick={() => {
          setIsOpen(!isOpen);
          setActiveNodeId(node.id);
        }}
      >
        <span>{node.title}</span>
        {node.children.length > 0 && (
          <span className="ml-2">{isOpen ? "▼" : "▶"}</span>
        )}
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {node.children.map((child) => (
          <div className="pl-4 border-l-2 border-yellow-300" key={child.id}>
            <TreeNode
              node={child}
              activeNodeId={activeNodeId}
              setActiveNodeId={setActiveNodeId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Tree: React.FC<TreeProps> = ({ data }) => {
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);

  return (
    <div className="p-4">
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          activeNodeId={activeNodeId}
          setActiveNodeId={setActiveNodeId}
        />
      ))}
    </div>
  );
};

export default Tree;
