import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import { useRef } from "react";
import Head from "next/head";
import ProductCard from "@/components/TogaCard";

const dataToga = [
  {
    title: "KUNYIT",
    latin: "(Curcuma longa)",
    imageUrl: "/kunyit.jpg",
    description:
      "Kunyit merupakan tumbuhan yang sering dijadikan rempah-rempah dan jamu untuk kesehatan. Selain itu, kunyit memiliki sisi kebermanfaatan dibidang perawatan kulit hingga pewarna alami",
    route: "/kunyit",
  },
  {
    title: "JAHE",
    latin: "(Zingiber Officinale)",
    imageUrl: "/jahe.jpg",
    description:
      "Tanaman jenis rempah-rempah yang memiliki nama latin Zingiber Officinale",
    route: "/jahe",
  },
  {
    title: "KUNIR PUTIH",
    latin: "(Curcuma zedoaria Rocs.)",
    imageUrl: "/kunyit_putih.png",
    description:
      " Kunir putih dapat tumbuh diberbagai cuaca tetapi kunir putih dapat tumbuh dengan optimal pada awal musim hujan. Kunir putih sebaiknya ditanam pada tanah yang tidak mengandung genangan air dan tidak bersifat basa.",
    route: "/kunir-putih",
  },
  {
    title: "JERUK NIPIS",
    latin: "(Citrus Aurantifolia.)",
    imageUrl: "/jnipis.jpeg",
    description:
      " buah citrus yang terkenal karena kandungan vitamin C-nya yang tinggi, digunakan secara luas dalam pengobatan tradisional dan sebagai bahan penyegar dalam berbagai hidangan.",
    route: "/Jeruknipis",
  },
  {
    title: "PARI JOTO",
    latin: "(Medinila Magnifica.)",
    imageUrl: "/parijoto.jpeg",
    description:
      " Tanaman parijoto dikenal dengan buah kecil berwarna ungu yang memiliki bentuk bulat menyerupai anggur mini. Buah parijoto diyakini memiliki khasiat yang luar biasa bagi kesehatan terutama pada sistem reproduksi wanita",
    route: "/Pari-joto",
  },
  {
    title: "DAUN JINTEN",
    latin: "(Plectranthus Amboinicus.)", 
    imageUrl: "/daunjinten.jpeg",
    description:
      " Tanaman daun jinten memiliki daun tebal beraroma khas, sering digunakan sebagai obat tradisional untuk berbagai macam penyakit. ",
    route: "/daun-jinten",
  },
  {
    title: "TEMULAWAK",
    latin: "(Curcuma Xanthorrhiza.)",
    imageUrl: "/temulawak.jpeg",
    description:
      " Temulawak adalah tanaman herbal yang telah lama dikenal dan digunakan dalam pengobatan tradisional Indonesia",
    route: "/temulawak",
  },
  {
    title: "KEJI BELING",
    latin: "(Strobilanthes Crispus.)",
    imageUrl: "/kejibeling.jpeg",
    description:
      " Keji Beling, juga dikenal dengan nama Strobilanthes crispus, adalah tanaman herbal yang memiliki manfaat besar dalam pengobatan tradisional",
    route: "/keji-beling",
  },
  {
    title: "DAUN UNGU",
    latin: "(Graptophyllum pictum.)",
    imageUrl: "/daunungu.jpeg",
    description:
      " Tanaman daun ungu, dikenal juga sebagai Graptophyllum pictum, adalah tanaman hias yang populer dengan daun berwarna ungu yang menarik..",
    route: "/daun-ungu",
  },
  {
    title: "TAPAK DARA",
    latin: "(Catharanthus Roseus.)",
    imageUrl: "/tapakdara.jpeg",
    description:
      " Tanaman tapak dara, juga dikenal dengan nama Catharanthus roseus, adalah tanaman obat yang memiliki banyak manfaat kesehatan.",
    route: "/tapak-dara",
  },
  {
    title: "ROSELLA ",
    latin: "(Hibiscus Sabdariffa.)",
    imageUrl: "/ROSELLA.jpeg",
    description:
      " Tanaman rosella dikenal dengan bunga berwarna merah cerah yang memiliki bentuk menyerupai bunga sepatu.",
    route: "/rosella",
  },
  {
    title: "SEREH ",
    latin: "(Cymbopogon Citratus.)",
    imageUrl: "/sereh.jpeg",
    description:
      " Tanaman sereh atau serai adalah tanaman herbal yang banyak digunakan dalam masakan Asia Tenggara.",
    route: "/sereh",
  },
  {
    title: "KENCUR ",
    latin: "(Kaempferia Galanga.)",
    imageUrl: "/kencur.jpeg",
    description:
      " Tanaman kencur adalah tanaman rempah yang sering digunakan dalam masakan dan obat tradisional di Indonesia.",
    route: "/kencur",
  },
  {
    title: "DAUN MUTIARA ",
    latin: "(Pilea cadierei.)",
    imageUrl: "/alumunium.jpeg",
    description:
      " Tanaman daun mutiara dikenal dengan daun kecil berwarna hijau dengan tepi berwarna perak, yang memberikan kesan berkilauan.",
    route: "/daun-alumunium",
  },
  {
    title: "JERUK LEMON ",
    latin: "(Citrus Limon.)",
    imageUrl: "/lemon.jpeg",
    description:
      " Jeruk lemon adalah buah sitrun dengan kulit berwarna kuning dan rasa yang asam. Buah ini dikenal memiliki berbagai manfaat kesehatan dan sering digunakan dalam masakan serta minuman. ",
    route: "/Jeruk-lemon",
  },
  {
    title: "BAWANG MERAH ",
    latin: "(Allium ascalonicum.)",
    imageUrl: "/bawang.jpeg",
    description:
      " Tanaman bawang merah adalah salah satu jenis bawang yang sering digunakan dalam berbagai masakan.",
    route: "/bawang-merah",
  },
  {
    title: "BELIMBING ",
    latin: "(Averrhoa carambola.)",
    imageUrl: "/belimbing.jpeg",
    description:
      " Tanaman belimbing dikenal dengan buahnya yang berbentuk bintang ketika dipotong.",
    route: "/belimbing",
  },
  {
    title: "SINGAWALANG ",
    latin: "(Petiveria alliacea.)",
    imageUrl: "/singa.jpeg",
    description:
      " Tanaman singawalang dikenal dengan daun yang berbentuk lonjong dan bunga kecil berwarna ungu.",
    route: "/siwalang",
  },
];

export default function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>Home | ticket.in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <div className="flex flex-col justify-center items-center bg-neutral-100">
          <HeaderComp />

          <div className="flex flex-col justify-center items-center h-[670px] sm:h-[870px] w-screen bg-[#315c48] mt-[5px] lg:mt-[10px] xl:mt-[20px]">
            <section className="relative w-screen h-full">
              <img
                src="/bg.jpg"
                alt="Farmer"
                className="absolute right-0 h-full w-full w-screen lg:w-5/6 object-cover z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#315c48] to-transparent lg:hidden z-10"></div>
              <div className="hidden lg:block  lg:absolute lg:inset-0 lg:bg-gradient-to-r from-[#315c48] from-40% to-transparent to-100% lg:z-10"></div>
              <div className="hidden lg:block   absolute h-[170px] w-[900px] bg-gradient-to-r rigth-0 from-[#225248] to-transparent z-[11]"></div>
              <div className="hidden lg:block   absolute h-[170px] lg:w-[400px] xl:w-[500px] bg-gradient-to-r rigth-0 from-transparent from-5% via-[#225248] via-75% to-[#315c48] mt-[170px] z-[11]"></div>
              <div className="hidden lg:block   absolute h-[170px] w-[900px] bg-gradient-to-r rigth-0 from-[#225248] to-transparent z-[11] mt-[340px]"></div>
              <div className="hidden lg:block   absolute h-[170px] lg:w-[400px] xl:w-[500px] bg-gradient-to-r rigth-0 from-transparent from-5% via-[#225248] via-75% to-[#315c48] mt-[510px] z-[11]"></div>
              <div className="hidden lg:block   absolute h-[170px] w-[900px] bg-gradient-to-r rigth-0 from-[#225248] to-transparent z-[11] mt-[680px]"></div>

              <div className="relative flex justify-center items-center h-full z-20">
                <div className="w-1/2 pb-[100px] left-10 lg:w-1/2 absolute bottom-6 lg:bottom-auto lg:left-15 xl:left-40 text-start text-white  lg:pb-0">
                  <h1 className=" text-lg max-[300px]:text-xl max-[500px]:text-3xl  max-[700px]:text-5xl max-[2000px]:text-7xl font-bold">
                    WELCOME TO TAMAN TOGA DESA PUNTUKDORO
                  </h1>
                  <p className="mt-4 text-sm lg:text-base">
                  Website TOGA Desa PuntukDoro adalah platform digital yang memberikan informasi mengenai jenis-jenis tanaman obat keluarga (TOGA) yang ada di Taman Desa Puntukdoro. Website ini bertujuan untuk mengedukasi masyarakat tentang manfaat, cara penanaman, dan pengolahan tanaman obat, serta meningkatkan kesadaran akan pentingnya penggunaan tanaman tradisional untuk kesehatan.
                  </p>
                  <button
                    onClick={handleClick}
                    className="mt-6 bg-orange-500 px-4 py-2 lg:px-6 lg:py-3 rounded text-white"
                  >
                    Discover More
                  </button>
                </div>
              </div>
            </section>
          </div>

          <div ref={ref} className="w-screen h-[100px]"></div>

          <div
            data-aos="fade"
            className="flex flex-col w-screen justify-center items-center "
          >
            <p className="text-[#315c48] font-bold text-5xl text-center mb-3">
              Tanaman TOGA
            </p>
            <p className="text-gray-500 mt-2 w-full lg:w-1/2 px-7 lg:px-0 text-center">
            Tanaman Obat Keluarga (TOGA) adalah kelompok tanaman yang ditanam di sekitar rumah atau pekarangan dengan tujuan utama untuk dimanfaatkan sebagai obat tradisional oleh anggota keluarga. TOGA memiliki berbagai jenis tanaman yang mengandung zat-zat aktif yang berkhasiat untuk mencegah, mengobati, atau meredakan berbagai penyakit. Penggunaan tanaman obat keluarga merupakan bagian dari upaya masyarakat untuk kembali ke alam dan memanfaatkan sumber daya lokal secara mandiri dan berkelanjutan. Dengan pengetahuan yang tepat, tanaman TOGA dapat menjadi solusi alternatif yang efektif dalam menjaga kesehatan keluarga tanpa harus bergantung sepenuhnya pada obat-obatan kimia.
            </p>
          </div>

          <div className="container mx-auto px-4 py-8 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center self-center content-center items-center">
              {dataToga.map((toga) => (
                <ProductCard
                  key={toga.latin}
                  toga={toga}
                  className="justify-self-center"
                />
              ))}
            </div>
          </div>

          <div className="w-screen h-[100px]"></div>
          <FooterComp />
        </div>
      </main>
    </>
  );
}
