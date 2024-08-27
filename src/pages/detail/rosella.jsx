import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaRosella() {
  return (
    <>
      <Head>
        <title>Rosella | myToga.in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <div className="flex flex-col justify-center items-center bg-neutral-100">
          <HeaderComp />

          <div className="container h-auto  flex  justify-center items-center mx-auto px-4 py-8">
            <div
              data-aos="fade-up"
              className="flex flex-col  overflow-hidden items-center justify-center w-full lg:w-4/5  lg:mt-[60px]"
            >
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-[40px] lg:mb-[50px]">
                ROSSELLA <a className="italic">(Hibiscus sabdariffa)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/ROSELLA.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded  p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman rosella dikenal dengan bunga berwarna merah cerah yang memiliki bentuk menyerupai bunga sepatu. Bunga rosella sering digunakan dalam berbagai olahan minuman dan produk kesehatan. Tanaman ini tumbuh subur di iklim tropis dan subtropis.
              </div>
              <div className=" w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman rosella
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman rosella yang paling sering dimanfaatkan adalah bunga dan kelopak buahnya. Kelopak bunga rosella dapat dikeringkan dan digunakan untuk membuat teh atau ekstrak herbal. Selain itu, daun rosella juga bisa digunakan sebagai bahan tambahan dalam masakan.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman rosella
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman rosella memiliki berbagai manfaat kesehatan, terutama berkat kandungan antioksidan dan vitamin C-nya. Berikut adalah beberapa manfaat dari tanaman rosella:
                </div>
                <div className="text-gray-700  ml-5">
                  1. Menurunkan tekanan darah
                  <div className="ml-5">
                    &emsp; &emsp;Teh rosella dikenal dapat membantu menurunkan tekanan darah tinggi karena kandungan antosianin dan asam organik yang terdapat di dalam kelopak bunga.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  2. Meningkatkan kesehatan pencernaan
                  <div className="ml-5">
                    &emsp; &emsp;Kelopak bunga rosella juga memiliki efek positif dalam meningkatkan kesehatan pencernaan dan mencegah sembelit berkat kandungan seratnya.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  3. Memperkuat sistem kekebalan tubuh
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan vitamin C yang tinggi dalam rosella membantu memperkuat sistem kekebalan tubuh dan melindungi dari infeksi.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  4. Meningkatkan kesehatan kulit
                  <div className="ml-5 ">
                    &emsp; &emsp;Antioksidan dalam rosella dapat membantu menjaga kesehatan kulit dengan mengurangi kerusakan akibat radikal bebas dan mendukung proses regenerasi sel.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman rosella
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman rosella melibatkan beberapa langkah penting untuk memastikan pertumbuhannya yang optimal. Berikut adalah beberapa hal yang perlu diperhatikan dalam pemeliharaan tanaman rosella:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman rosella membutuhkan penyiraman yang cukup, terutama selama periode pertumbuhan aktif. Pastikan tanah tetap lembab, tetapi tidak tergenang air.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemberian pupuk organik secara berkala akan mendukung pertumbuhan tanaman dan kualitas bunga. Gunakan pupuk yang kaya akan nutrisi seperti nitrogen, fosfor, dan kalium.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Pengendalian hama dan penyakit
                  <div className="ml-5">
                    &emsp; &emsp;Periksa tanaman secara rutin untuk mendeteksi hama atau penyakit. Gunakan metode pengendalian alami atau bahan kimia yang sesuai jika diperlukan.
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center mt-4 space-y-4 md:space-y-0 md:space-x-4"></div>
              </div>
            </div>
          </div>

          <FooterComp />
        </div>
      </main>
    </>
  );
}
