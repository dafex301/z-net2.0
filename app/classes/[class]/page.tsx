export default function Course({ params }: { params: { class: string } }) {
  return <div>Halaman: {params.class}</div>;
}
