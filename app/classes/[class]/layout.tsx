import Tree from "@/components/tree/Tree";
import skills from "@/data/skills.json";

// Mocking an API call
const getData = async () => {
  return skills;
};

export default async function ContentLayout({
  children,
  params, // will be a page or nested layout
}: {
  children: React.ReactNode;
  params: { class: string };
}) {
  const skills = await getData();

  return (
    <>
      <div className="grid grid-cols-12 gap-8 mt-5">
        <div className="col-span-3">
          <Tree
            data={skills}
            title={`Skill List ${params.class.toUpperCase()}`}
          />
        </div>
        <div className="grid grid-cols-12 col-span-9 gap-8">{children}</div>
      </div>
    </>
  );
}
