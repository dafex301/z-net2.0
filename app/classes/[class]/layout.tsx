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
  params: { class: string; skills: string[] };
}) {
  const skills = await getData();

  return (
    <>
      <div className="grid grid-cols-12 gap-8 mt-5">
        <div className="col-span-3 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-gray-700 font-semibold">
            Skill List {params.class.toUpperCase()}
          </h2>
          <Tree data={skills} />
        </div>
        <div className="grid grid-cols-12 col-span-9">{children}</div>
      </div>
    </>
  );
}
