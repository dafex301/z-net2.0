import ContentCard from "@/components/card/ContentCard";
import skillDetails from "@/data/skillsDetail.json";
import { ISkillDetail } from "@/interfaces/ISkillDetail";

// async function getData(id: string): Promise<ISkillDetail | undefined> {
//   const data: ISkillDetail[] = skillDetails;
//   const skill = data.find((skill) => skill.id === id);
//   return skill;
// }

export default async function Class({
  params,
}: {
  params: { class: string; skill: string };
}) {
  // get the latest skills array
  // const data = await getData(params.skill);
  return (
    <>
      <div className="col-span-3 bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-gray-700 font-semibold">List Konten</h2>
      </div>
      <div className="col-span-9 bg-white rounded-2xl shadow-md p-8">
        <ContentCard title={"Hola"} image={"/nakama.webp"}>
          Hehehe
        </ContentCard>
      </div>
    </>
  );
}
