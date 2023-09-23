import React, { useState } from "react";
import TreeNode, { TreeNodeData } from "./TreeNode";

interface TreeProps {
  activeNode: TreeNodeData | null;
  setActiveNode: (node: TreeNodeData) => void;
  data: TreeNodeData[];
}

const Tree: React.FC<TreeProps> = ({ data, activeNode, setActiveNode }) => {
  return (
    <div className="p-4">
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          activeNode={activeNode}
          setActiveNode={setActiveNode}
        />
      ))}
    </div>
  );
};

export default Tree;
