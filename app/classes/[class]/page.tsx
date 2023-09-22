import { Tree } from "@/components/tree/Tree";

interface TreeNodeData {
  id: number;
  title: string;
  children: TreeNodeData[];
}

const treeData: TreeNodeData[] = [
  {
    id: 1,
    title: "Parent 1",
    children: [
      {
        id: 3,
        title: "Children 1",
        children: [],
      },
      {
        id: 4,
        title: "Children 2",
        children: [
          {
            id: 5,
            title: "Grandchildren 1",
            children: [],
          },
          {
            id: 6,
            title: "Grandchildren 2",
            children: [],
          },
        ],
      },
      {
        id: 100,
        title: "Children 5",
        children: [],
      },
    ],
  },
  {
    id: 2,
    title: "Parent 2",
    children: [
      {
        id: 10,
        title: "Children 1",
        children: [],
      },
      {
        id: 11,
        title: "Children 2",
        children: [
          {
            id: 15,
            title: "Grandchildren 1",
            children: [],
          },
          {
            id: 16,
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
          <Tree data={treeData} />
        </div>
        <div className="col-span-8 bg-white rounded-2xl shadow-md px-8 py-12 sm:px-12 lg:px-8">
          Content
        </div>
      </div>
    </div>
  );
}
