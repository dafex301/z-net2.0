import Image from "next/image";

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  image: string;
}

export default function ContentCard({
  title,
  children,
  image,
}: ContentCardProps) {
  return (
    <div className="space-y-4 bg-white rounded-2xl shadow-md p-8">
      <h3 className="text-2xl font-semibold text-purple-700">{title}</h3>
      {image && (
        <div className="bg-purple-600 h-72 rounded-xl">
          <Image
            src={image}
            className="h-full w-full object-cover rounded-xl"
            alt="illustration"
            loading="lazy"
            width={900}
            height={600}
          />
        </div>
      )}
      <div className="text-justify">{children}</div>
    </div>
  );
}
