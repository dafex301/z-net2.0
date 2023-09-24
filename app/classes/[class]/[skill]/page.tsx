import SkillCard from "@/components/card/SkillCard";
import skillDetails from "@/data/skillsDetail.json";
import { SkillDetail } from "@/interfaces/SkillDetail";

async function getData(id: string): Promise<SkillDetail | undefined> {
  const data: SkillDetail[] = skillDetails;
  const skill = data.find((skill) => skill.id === id);
  return skill;
}

export default async function Class({
  params,
}: {
  params: { class: string; skill: string };
}) {
  const data = await getData(params.skill);

  return (
    <div className="col-span-12 ">
      <>
        <SkillCard title={data!.title} image={data!.image_url}>
          <div
            dangerouslySetInnerHTML={{
              __html: data!.description,
            }}
          ></div>
        </SkillCard>
      </>
    </div>
  );
}
