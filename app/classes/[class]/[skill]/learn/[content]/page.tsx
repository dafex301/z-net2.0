import ContentCard from "@/components/card/ContentCard";
import ContentListCard from "@/components/card/ContentListCard";
import ContentDetailData from "@/data/contentDetail.json";

export default async function Learn({
  params,
}: {
  params: { class: string; skill: string; content: string };
}) {
  const data = ContentDetailData.find(
    (content) => content.id === params.content
  );

  return (
    <>
      <ContentCard title={data!.title}>
        <div
          dangerouslySetInnerHTML={{
            __html: data!.description,
          }}
        ></div>
      </ContentCard>
    </>
  );
}
