import Image from "next/image";

interface ContentCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ContentCard(props: ContentCardProps) {
  return (
    <div>
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-semibold text-purple-700">
          {props.title}
        </h3>
        <div className="bg-purple-600 h-72 rounded-xl">
          <Image
            src={props.image}
            className="h-full w-full object-cover rounded-xl"
            alt="illustration"
            loading="lazy"
            width={900}
            height={600}
          />
        </div>
        <p className="mb-6">{props.description}</p>
      </div>
    </div>
  );
}
