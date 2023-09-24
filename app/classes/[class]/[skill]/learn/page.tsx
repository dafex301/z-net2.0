import ContentCard from "@/components/card/ContentCard";
import ContentListCard from "@/components/card/ContentListCard";

export default async function Learn({
  params,
}: {
  params: { class: string; skill: string };
}) {
  // get the latest skills array
  // const data = await getData(params.skill);
  return (
    <>
      <ContentCard title={"Dikit lagi nemu one piece"} image={"/nakama.webp"}>
        Pilih dulu kontennya di sebelah yak
      </ContentCard>
    </>
  );
}
