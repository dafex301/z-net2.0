import ContentListCard from "@/components/card/ContentListCard";

export default async function ContentLayout({
  children,
  params, // will be a page or nested layout
}: {
  children: React.ReactNode;
  params: { class: string };
}) {
  return (
    <>
      <div className="col-span-3">
        <ContentListCard />
      </div>
      <div className="col-span-9 ">{children}</div>
    </>
  );
}
