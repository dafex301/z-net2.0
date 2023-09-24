import SkillCard from "@/components/card/SkillCard";

export default function NotFound() {
  return (
    <SkillCard title="Skillnya gada nih bos">
      <div
        dangerouslySetInnerHTML={{
          __html: "yee jan edit-edit url makanya",
        }}
      ></div>
    </SkillCard>
  );
}
