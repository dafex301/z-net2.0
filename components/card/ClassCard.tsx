import Image from "next/image";
import Link from "next/link";

interface ClassCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

export default function ClassCard(props: ClassCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-semibold text-purple-900">
          {props.title}
        </h3>
        <p className="mb-6">{props.description}</p>
        <Link
          href={`classes/${props.href}`}
          className="block font-medium text-purple-600"
        >
          Gasskeun!
        </Link>
      </div>
      <Image
        src={props.image}
        className="w-2/3 ml-auto -mb-12"
        alt="illustration"
        loading="lazy"
        width={900}
        height={600}
      />
    </div>
  );
}
