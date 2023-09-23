import ContentCard from "@/components/card/SkillCard";
import TreeSkillCards from "@/components/class/TreeSkillCards";
import Tree from "@/components/tree/Tree";
import { TreeNodeData } from "@/components/tree/TreeNode";

const treeData: TreeNodeData[] = [
  {
    id: "evolution-basics",
    title: "Evolution Basics",
    children: [
      {
        id: "natural-selection",
        title: "Natural Selection",
        children: [],
      },
      {
        id: "genetic-drift",
        title: "Genetic Drift",
        children: [
          {
            id: "bottleneck-effect",
            title: "Bottleneck Effect",
            children: [],
          },
          {
            id: "founder-effect",
            title: "Founder Effect",
            children: [],
          },
        ],
      },
      {
        id: "mutation",
        title: "Mutation",
        children: [],
      },
    ],
  },
  {
    id: "evolutionary-milestones",
    title: "Evolutionary Milestones",
    children: [
      {
        id: "origin-of-life",
        title: "Origin of Life",
        children: [],
      },
      {
        id: "evolution-of-humans",
        title: "Evolution of Humans",
        children: [
          {
            id: "hominid-evolution",
            title: "Hominid Evolution",
            children: [],
          },
          {
            id: "cultural-evolution",
            title: "Cultural Evolution",
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
      <TreeSkillCards treeData={treeData} />
    </div>
  );
}
