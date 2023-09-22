"use client";

import { useState } from "react";

interface TreeNodeData {
  id: number;
  title: string;
  children: TreeNodeData[];
}

interface TreeNodeProps {
  node: TreeNodeData;
  activeNodeId: number | null;
  setActiveNodeId: (id: number) => void;
  openNodes: number[];
  setOpenNodes: (ids: number[]) => void;
  data: TreeNodeData[];
}

interface TreeProps {
  data: TreeNodeData[];
}

export const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  activeNodeId,
  setActiveNodeId,
  openNodes,
  setOpenNodes,
  data,
}) => {
  const isActive = node.id === activeNodeId;
  const isNodeOpen = openNodes.includes(node.id);

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
          if (node.children.length) {
            if (openNodes.includes(node.id)) {
              // Close the node
              const newOpenNodes = openNodes.filter((id) => id !== node.id);
              setOpenNodes(newOpenNodes);
            } else {
              // Open the node and close all nodes at the same level and above
              let current: TreeNodeData | undefined = node;
              const toClose: number[] = [];
              while (current) {
                toClose.push(current.id);
                current = data.find((n) =>
                  n.children.some((child) => child.id === current!.id)
                );
              }
              const newOpenNodes = openNodes.filter(
                (id) => !toClose.includes(id)
              );
              newOpenNodes.push(node.id);
              setOpenNodes(newOpenNodes);
            }
          }
          setActiveNodeId(node.id);
        }}
      >
        <span>{node.title}</span>
        {node.children.length > 0 && (
          <span className="ml-2">{isNodeOpen ? ">" : "v"}</span>
        )}
      </div>
      {isNodeOpen &&
        node.children.map((child) => (
          <div className="pl-4 border-l-2 border-yellow-300" key={child.id}>
            <TreeNode
              data={data}
              node={child}
              activeNodeId={activeNodeId}
              setActiveNodeId={setActiveNodeId}
              openNodes={openNodes}
              setOpenNodes={setOpenNodes}
            />
          </div>
        ))}
    </div>
  );
};

export const Tree: React.FC<TreeProps> = ({ data }) => {
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [openNodes, setOpenNodes] = useState<number[]>([]);

  return (
    <div className="p-4">
      {data.map((node) => (
        <TreeNode
          data={data}
          key={node.id}
          node={node}
          activeNodeId={activeNodeId}
          setActiveNodeId={setActiveNodeId}
          openNodes={openNodes}
          setOpenNodes={setOpenNodes}
        />
      ))}
    </div>
  );
};
