"use client";

import React, { useState } from "react";
import TreeNode, { TreeNodeData } from "./TreeNode";

interface TreeProps {
  data: TreeNodeData[];
}

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
