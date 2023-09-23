import Image from "next/image";

interface SkillCardProps {
  title: string;
  children: React.ReactNode;
  image: string;
}

export default function SkillCard({ title, children, image }: SkillCardProps) {
  return (
    <div>
      <div className=" space-y-4">
        <h3 className="text-2xl font-semibold text-purple-700">{title}</h3>
        <div className="bg-purple-600 h-72 rounded-xl">
          {image && (
            <Image
              src={image}
              className="h-full w-full object-cover rounded-xl"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600}
            />
          )}
        </div>
        <p className="text-justify">{children}</p>
        <div className="flex gap-3">
          <button className="text-lg bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-full w-full">
            Belajar
          </button>
          <button className="text-lg bg-purple-600 hover:bg-purple-800 text-white py-3 rounded-full w-full">
            Latihan
          </button>
        </div>
      </div>
    </div>
  );
}
