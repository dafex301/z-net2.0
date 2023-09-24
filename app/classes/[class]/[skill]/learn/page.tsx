import ContentCard from "@/components/card/ContentCard";

export default async function Learn({
  params,
}: {
  params: { class: string; skill: string };
}) {
  return (
    <>
      <ContentCard title={"Dikit lagi nemu one piece"} image={"/nakama.webp"}>
        Pilih dulu kontennya di sebelah yak
      </ContentCard>
    </>
  );
}
