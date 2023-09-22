"use client";

import React, { useState } from "react";

type TreeNodeProps = {
  node: {
    id: number;
    title: string;
    children: Array<any>;
  };
  selectNode: (id: number) => void;
};

const TreeNode: React.FC<TreeNodeProps> = ({ node, selectNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pl-4">
      <div
        className="flex items-center cursor-pointer hover:bg-yellow-200"
        onClick={handleToggle}
      >
        {node.children.length > 0 && (
          <span
            className={`transition-transform transform ${
              isOpen ? "rotate-0" : "rotate-180"
            } text-purple-600 mr-2`}
          >
            {"v"}
          </span>
        )}
        <span onClick={() => selectNode(node.id)} className="text-purple-600">
          {node.title}
        </span>
      </div>
      {isOpen &&
        node.children.map((child) => (
          <TreeNode key={child.id} node={child} selectNode={selectNode} />
        ))}
    </div>
  );
};

export default TreeNode;
