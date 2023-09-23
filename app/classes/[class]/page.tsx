import Image from "next/image";

export default function Class({ params }: { params: { class: string } }) {
  return (
    <div className="col-span-12 bg-white rounded-2xl shadow-md p-8">
      <div className=" space-y-4">
        <h3 className="text-2xl font-semibold text-purple-700">
          Ciee mo belajar buat {params.class.toUpperCase()} nih, semangat yakk
        </h3>
        <div className="bg-purple-600 h-72 rounded-xl">
          <Image
            src={"/gear-5.webp"}
            className="h-full w-full object-cover rounded-xl"
            alt="illustration"
            loading="lazy"
            width={900}
            height={600}
          />
        </div>
        <div className="text-justify">Sok pilih skillnya di kiri dulu boy</div>
      </div>
    </div>
  );
}
