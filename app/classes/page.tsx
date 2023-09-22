import ClassCard from "@/components/card/ClassCard";
import { ClassData } from "@/interfaces/ClassData";

async function getClasses(): Promise<ClassData[]> {
  const res = await fetch("http://localhost:3000/api/classes");
  const data = await res.json();

  return data;
}

export default async function Courses() {
  const classes = await getClasses();

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
