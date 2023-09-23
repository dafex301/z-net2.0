import ClassCard from "@/components/card/ClassCard";
import { ClassData } from "@/interfaces/ClassData";

// async function getClasses(): Promise<ClassData[]> {
//   const res = await fetch("/api/classes");
//   const data = await res.json();

//   return data;
// }

const classes: ClassData[] = [
  {
    id: 1,
    title: "UTBK",
    description:
      "Seleksi Bersama Masuk Perguruan Tinggi Negeri or SBMPTN, is an Indonesian college entrance system for admission of new students in state universities using written examinations nationally, which has various advantages, both for college applicants, public universities, as well as national interests.",
    image:
      "https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg",
    href: "utbk",
  },
  {
    id: 2,
    title: "CPNS",
    description:
      "Calon Pegawai Negeri Sipil (CPNS) adalah warga negara Republik Indonesia yang baru lulus dalam mengikuti tes seleksi penerimaan Calon Pegawai Negeri Sipil pada tahap pertama sebelum menjadi Pegawai Negeri Sipil (PNS).",
    image:
      "https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg",
    href: "cpns",
  },
  {
    id: 3,
    title: "STAN",
    description:
      "STAN Polytechnic of State Finance, is a government-affiliated college in Indonesia, located in Banten, in Bintaro Sector V Tangerang Selatan. It offers undergraduate degrees in finance. The curriculum is focused on public finance, with an emphasis on government policy and regulation",
    image:
      "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg",
    href: "stan",
  },
];

export default async function Courses() {
  // const classes = await getClasses();

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold text-center">
          Pilih Kelas yang Lo Mau
        </h1>

        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0 mt-5">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            {classes.map((course) => (
              <ClassCard
                key={course.id}
                title={course.title}
                description={course.description}
                href={course.href}
                image={course.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
