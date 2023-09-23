import SkillCard from "@/components/card/SkillCard";

export default function Class({ params }: { params: { class: string } }) {
  return (
    <div className="col-span-12 bg-white rounded-2xl shadow-md p-8">
      <SkillCard
        title={"Pilih dulu skillnya di sebelah kiri boy"}
        image={"/gear-5.webp"}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rem,
        obcaecati temporibus veritatis, mollitia, reprehenderit aliquid porro
        eaque esse exercitationem totam beatae labore ipsum odit magni
        accusantium quisquam dolorum quia eum illo! Natus adipisci error cum
        odio ducimus vero amet.
      </SkillCard>
    </div>
  );
}
