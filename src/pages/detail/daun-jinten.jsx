import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaDaunJinten() {
  return (
    <>
      <Head>
        <title>Daun Jinten | myToga.in</title>
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
                DAUN JINTEN <a className="italic">(Plectranthus amboinicus)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/daunjinten.jpeg"
                  alt="Daun Jinten"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman daun jinten memiliki daun tebal beraroma khas, sering digunakan sebagai obat tradisional untuk berbagai macam penyakit. Tanaman ini berasal dari daerah tropis dan sering digunakan dalam pengobatan alternatif, terutama di Asia Tenggara.
              </div>
              <div className=" w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman daun jinten
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian yang paling sering dimanfaatkan dari tanaman daun jinten adalah daunnya. Daun jinten digunakan dalam pengobatan tradisional untuk mengobati masalah pencernaan, batuk, serta digunakan sebagai antiseptik alami.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman daun jinten
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman daun jinten memiliki beragam manfaat kesehatan. Berikut beberapa manfaatnya:
                </div>
                <div className="text-gray-700  ml-5">
                  1. Mengatasi masalah pencernaan
                  <div className="ml-5">
                    &emsp; &emsp;Daun jinten dikenal untuk mengatasi masalah pencernaan seperti perut kembung, diare, dan gangguan pencernaan lainnya.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  2. Meredakan batuk dan flu
                  <div className="ml-5">
                    &emsp; &emsp;Ekstrak daun jinten sering digunakan sebagai obat alami untuk meredakan batuk, pilek, dan masalah pernapasan ringan lainnya.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  3. Mengurangi peradangan
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman ini juga dikenal memiliki sifat antiinflamasi yang dapat membantu mengurangi peradangan dan pembengkakan.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  4. Antiseptik alami
                  <div className="ml-5 ">
                    &emsp; &emsp;Daun jinten dapat digunakan sebagai antiseptik alami untuk membantu menyembuhkan luka kecil dan infeksi ringan pada kulit.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman daun jinten
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman daun jinten sangat mudah dalam perawatannya. Berikut beberapa tips pemeliharaan untuk memastikan tanaman daun jinten tumbuh dengan baik:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Daun jinten memerlukan penyiraman yang cukup, terutama selama musim kemarau. Namun, pastikan tanah tidak tergenang air.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pencahayaan
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman ini membutuhkan pencahayaan yang cukup, tetapi bisa bertahan di tempat yang sedikit teduh. Paparan sinar matahari langsung akan membantu pertumbuhannya.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemupukan secara berkala dengan pupuk organik akan membantu meningkatkan kesuburan tanah dan mempercepat pertumbuhan tanaman.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  4. Penyiangan gulma
                  <div className="ml-5">
                    &emsp; &emsp;Penyiangan secara rutin diperlukan untuk memastikan tidak ada gulma yang mengganggu pertumbuhan tanaman daun jinten.
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
