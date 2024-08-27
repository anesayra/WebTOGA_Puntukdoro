import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaBelimbing() {
  return (
    <>
      <Head>
        <title>Belimbing | myToga.in</title>
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
                BELIMBING <a className="italic">(Averrhoa carambola)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/belimbing.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded  p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman belimbing dikenal dengan buahnya yang berbentuk bintang ketika dipotong. Buah ini memiliki rasa yang segar dan asam. Tanaman belimbing banyak ditemukan di daerah tropis dan sub-tropis. Selain memiliki rasa yang menyegarkan, belimbing juga dikenal memiliki beberapa manfaat kesehatan.
              </div>
              <div className=" w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman belimbing
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman belimbing yang dimanfaatkan adalah buahnya. Buah belimbing dapat dikonsumsi langsung, dibuat jus, atau digunakan dalam berbagai olahan makanan. Daunnya juga dapat digunakan dalam pengobatan tradisional.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman belimbing
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman belimbing memiliki banyak manfaat kesehatan. Berikut adalah beberapa manfaat dari tanaman belimbing:
                </div>
                <div className="text-gray-700  ml-5">
                  1. Menurunkan tekanan darah
                  <div className="ml-5">
                    &emsp; &emsp;Buah belimbing dikenal dapat membantu menurunkan tekanan darah karena kandungan kalium dan seratnya yang tinggi.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  2. Meningkatkan sistem kekebalan tubuh
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan vitamin C dalam buah belimbing dapat meningkatkan sistem kekebalan tubuh dan melindungi dari infeksi.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  3. Menjaga kesehatan pencernaan
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan serat dalam buah belimbing membantu melancarkan sistem pencernaan dan mencegah sembelit.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  4. Mengurangi risiko penyakit jantung
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan antioksidan dalam buah belimbing membantu mengurangi risiko penyakit jantung dengan melawan radikal bebas.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman belimbing
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman belimbing memerlukan perhatian khusus untuk memastikan pertumbuhan yang optimal. Berikut adalah beberapa hal yang perlu diperhatikan:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman belimbing membutuhkan penyiraman yang cukup, terutama selama musim kemarau. Pastikan tanah tetap lembab tetapi tidak tergenang air.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemupukan secara berkala dengan pupuk organik seperti kompos atau pupuk kandang akan membantu pertumbuhan tanaman belimbing.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Pemangkasan
                  <div className="ml-5">
                    &emsp; &emsp;Pemangkasan perlu dilakukan untuk membentuk pohon dan menghilangkan cabang-cabang yang tidak produktif agar tanaman dapat tumbuh dengan baik dan menghasilkan buah yang optimal.
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
