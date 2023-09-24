import ContentListCard from "@/components/card/ContentListCard";

export default async function PracticeLayout({
  children,
  params, // will be a page or nested layout
}: {
  children: React.ReactNode;
  params: { class: string };
}) {
  return (
    <>
      <div className="col-span-12">{children}</div>
    </>
  );
}
