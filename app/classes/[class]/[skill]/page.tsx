import SkillCard from "@/components/card/SkillCard";
import skillDetails from "@/data/skillsDetail.json";
import { ISkillDetail } from "@/interfaces/ISkillDetail";

async function getData(id: string): Promise<ISkillDetail | undefined> {
  const data: ISkillDetail[] = skillDetails;
  const skill = data.find((skill) => skill.id === id);
  return skill;
}

export default async function Class({
  params,
}: {
  params: { class: string; skill: string };
}) {
  // get the latest skills array
  const data = await getData(params.skill);
  return (
    <div className="col-span-12 bg-white rounded-2xl shadow-md p-8">
      {data && (
        <>
          <SkillCard title={data.title} image={data.image_url}>
            <div
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            ></div>
          </SkillCard>
        </>
      )}
    </div>
  );
}
