export async function GET(request: Request) {
  const data = [
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

  const body = JSON.stringify(data);

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
