import ContentCard from "@/components/card/ContentCard";
import Image from "next/image";

export default function Class({ params }: { params: { class: string } }) {
  return (
    <>
      <div className="col-span-12">
        <ContentCard
          title={`Ciee mo belajar buat ${params.class.toUpperCase()} nih, semangat yakk`}
          image={"/gear-5.webp"}
        >
          Pilih dulu skillnya di kiri boyy
        </ContentCard>
      </div>
    </>
  );
}
