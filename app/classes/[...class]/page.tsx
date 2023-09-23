import ContentCard from "@/components/card/ContentCard";
import ClassCards from "@/components/class/ClassContentCards";
import Tree from "@/components/tree/Tree";

interface TreeNodeData {
  id: string;
  title: string;
  children: TreeNodeData[];
  parent_id: string | null;
}

const treeData: TreeNodeData[] = [
  {
    id: "1",
    parent_id: null,
    title: "Parent 1",
    children: [
      {
        id: "3",
        parent_id: "1",
        title: "Children 1",
        children: [],
      },
      {
        id: "4",
        parent_id: "1",
        title: "Children 2",
        children: [
          {
            id: "5",
            parent_id: "4",
            title: "Grandchildren 1",
            children: [],
          },
          {
            id: "6",
            parent_id: "4",
            title: "Grandchildren 2",
            children: [],
          },
        ],
      },
      {
        id: "100",
        parent_id: "1",
        title: "Children 5",
        children: [],
      },
    ],
  },
  {
    id: "2",
    parent_id: null,
    title: "Parent 2",
    children: [
      {
        id: "10",
        parent_id: "2",
        title: "Children 1",
        children: [],
      },
      {
        id: "11",
        parent_id: "2",
        title: "Children 2",
        children: [
          {
            id: "15",
            parent_id: "11",
            title: "Grandchildren 1",
            children: [],
          },
          {
            id: "16",
            parent_id: "11",
            title: "Grandchildren 2",
            children: [],
          },
        ],
      },
    ],
  },
];

export default function Course({ params }: { params: { class: string[] } }) {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">
        {params.class[0].toUpperCase()}
      </h1>
      <ClassCards treeData={treeData} />
    </div>
  );
}
