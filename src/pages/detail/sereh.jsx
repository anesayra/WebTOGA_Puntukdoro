import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaSereh() {
  return (
    <>
      <Head>
        <title>Sereh | myToga.in</title>
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
                SEREH <a className="italic">(Cymbopogon citratus)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/sereh.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded  p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman sereh atau serai adalah tanaman herbal yang banyak digunakan dalam masakan Asia Tenggara. Dikenal karena aroma citrus-nya yang menyegarkan, sereh sering digunakan sebagai bumbu masakan, serta dalam pembuatan teh herbal. Tanaman ini memiliki manfaat kesehatan yang signifikan dan dapat tumbuh dengan baik di daerah tropis dengan sinar matahari penuh.
              </div>
              <div className=" w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman sereh
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman sereh yang paling sering dimanfaatkan adalah batangnya. Batang sereh, yang dikenal juga sebagai serai, sering digunakan dalam masakan untuk memberikan aroma dan rasa citrus. Selain batang, daun sereh juga dapat digunakan dalam pembuatan teh herbal atau sebagai bahan tambahan dalam obat tradisional.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman sereh
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman sereh memiliki berbagai manfaat kesehatan, antara lain:
                </div>
                <div className="text-gray-700  ml-5">
                  1. Mengatasi gangguan pencernaan
                  <div className="ml-5">
                    &emsp; &emsp;Sereh dikenal dapat membantu meredakan gangguan pencernaan seperti kembung dan gas, serta membantu melancarkan pencernaan.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  2. Memiliki sifat antiinflamasi
                  <div className="ml-5">
                    &emsp; &emsp;Sereh mengandung senyawa antiinflamasi yang dapat membantu mengurangi peradangan dalam tubuh.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  3. Menurunkan tekanan darah
                  <div className="ml-5">
                    &emsp; &emsp;Konsumsi sereh dapat membantu menurunkan tekanan darah dan menjaga kesehatan jantung.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  4. Memiliki sifat antimikroba
                  <div className="ml-5 ">
                    &emsp; &emsp;Sereh juga dikenal memiliki sifat antimikroba yang dapat membantu melawan infeksi bakteri dan jamur.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman sereh
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman sereh melibatkan beberapa hal penting agar tanaman tumbuh dengan baik. Berikut adalah beberapa tips untuk pemeliharaan sereh:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Sereh membutuhkan penyiraman yang cukup untuk menjaga kelembaban tanah. Pastikan tanah tidak terlalu kering, tetapi juga tidak tergenang air.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemberian pupuk organik secara berkala dapat membantu pertumbuhan sereh. Pupuk kompos atau pupuk kandang sangat dianjurkan untuk memberikan nutrisi yang dibutuhkan.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Penyiangan gulma
                  <div className="ml-5">
                    &emsp; &emsp;Gulma dapat menghambat pertumbuhan sereh. Pastikan untuk membersihkan gulma yang tumbuh di sekitar tanaman agar tidak bersaing dengan sereh dalam mendapatkan nutrisi.
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
