import ContentCard from "@/components/card/ContentCard";
import Tree from "@/components/tree/Tree";

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
        <div className="col-span-3 bg-white rounded-2xl shadow-md p-8">
          <h2>List Konten</h2>
          <Tree data={treeData} />
        </div>
        <div className="col-span-9 bg-white rounded-2xl shadow-md p-8">
          <ContentCard title={"Content"} image={"/coding.jpg"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            incidunt eius quos sit voluptatum quidem enim nostrum perspiciatis a
            ab! Vero iusto vitae, rem odit minus voluptate doloremque reiciendis
            debitis numquam consequuntur pariatur sapiente repudiandae velit a
            dolor, id et dicta laboriosam accusantium magnam ex quidem? Numquam
            est porro corporis.
          </ContentCard>
        </div>
      </div>
    </div>
  );
}
