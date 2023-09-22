"use client";

import React, { useState } from "react";
import TreeNode from "./TreeNode2";

type TreeProps = {
  data: Array<any>;
};

const TreeComponent: React.FC<TreeProps> = ({ data }) => {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  console.log(selectedNode);

  const selectNode = (id: number) => {
    setSelectedNode(id);
  };

  return (
    <div className="p-4">
      {data.map((node) => (
        <TreeNode key={node.id} node={node} selectNode={selectNode} />
      ))}
      {selectedNode && (
        <div className="mt-4 p-2 bg-yellow-300 text-purple-700">
          Selected Node ID: {selectedNode}
        </div>
      )}
    </div>
  );
};

export default TreeComponent;
