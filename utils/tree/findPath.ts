import { TreeNodeData } from "@/interfaces/TreeNodeData";

const findPath = (
  data: TreeNodeData[],
  targetId: string,
  currentPath: string[] = []
): string[] | null => {
  for (let item of data) {
    const newPath = [...currentPath, item.id];

    if (item.id === targetId) {
      return newPath;
    }

    if (item.children.length > 0) {
      const result = findPath(item.children, targetId, newPath);
      if (result) {
        return result;
      }
    }
  }

  return null;
};

export default findPath;
