import TreeComponent from "@/components/tree/TreeComponent";
import Tree from "@/components/tree/TreeNode3";

interface TreeNodeData {
  id: number;
  title: string;
  children: TreeNodeData[];
  parent_id: number | null;
}

const treeData: TreeNodeData[] = [
  {
    id: 1,
    parent_id: null,
    title: "Parent 1",
    children: [
      {
        id: 3,
        parent_id: 1,
        title: "Children 1",
        children: [],
      },
      {
        id: 4,
        parent_id: 1,
        title: "Children 2",
        children: [
          {
            id: 5,
            parent_id: 4,
            title: "Grandchildren 1",
            children: [],
          },
          {
            id: 6,
            parent_id: 4,
            title: "Grandchildren 2",
            children: [],
          },
        ],
      },
      {
        id: 100,
        parent_id: 1,
        title: "Children 5",
        children: [],
      },
    ],
  },
  {
    id: 2,
    parent_id: null,
    title: "Parent 2",
    children: [
      {
        id: 10,
        parent_id: 2,
        title: "Children 1",
        children: [],
      },
      {
        id: 11,
        parent_id: 2,
        title: "Children 2",
        children: [
          {
            id: 15,
            parent_id: 11,
            title: "Grandchildren 1",
            children: [],
          },
          {
            id: 16,
            parent_id: 11,
            title: "Grandchildren 2",
            children: [],
          },
        ],
      },
    ],
  },
];

export default function Course({ params }: { params: { class: string } }) {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">
        {params.class.toUpperCase()}
      </h1>
      <div className="grid grid-cols-12 gap-8 mt-5">
        <div className="col-span-4 bg-white rounded-2xl shadow-md px-8 py-12 sm:px-12 lg:px-8">
          {/* <Tree data={treeData} /> */}
          <Tree data={treeData} />
        </div>
        <div className="col-span-8 bg-white rounded-2xl shadow-md px-8 py-12 sm:px-12 lg:px-8">
          Content
        </div>
      </div>
    </div>
  );
}
