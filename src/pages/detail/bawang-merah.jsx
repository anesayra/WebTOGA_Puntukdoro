import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaBawangMerah() {
  return (
    <>
      <Head>
        <title>Bawang Merah | myToga.in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <div className="flex flex-col justify-center items-center bg-neutral-100">
          <HeaderComp />

          <div className="container h-auto flex justify-center items-center mx-auto px-4 py-8">
            <div
              data-aos="fade-up"
              className="flex flex-col overflow-hidden items-center justify-center w-full lg:w-4/5 lg:mt-[60px]"
            >
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-[40px] lg:mb-[50px]">
                BAWANG MERAH <a className="italic">(Allium ascalonicum)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/bawang.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman bawang merah adalah salah satu jenis bawang yang sering digunakan dalam berbagai masakan. Bawang merah memiliki umbi bulat kecil dengan kulit merah atau ungu yang tipis. Tanaman ini banyak ditemukan di berbagai belahan dunia dan memiliki manfaat kesehatan yang signifikan.
              </div>
              <div className="w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman bawang merah
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman bawang merah yang paling sering dimanfaatkan adalah umbinya. Umbi bawang merah dapat digunakan dalam berbagai masakan sebagai bahan penyedap rasa. Selain itu, daun bawang merah juga dapat digunakan sebagai bahan tambahan dalam masakan.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman bawang merah
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman bawang merah memiliki banyak manfaat kesehatan. Berikut adalah beberapa manfaat dari bawang merah:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Menurunkan tekanan darah
                  <div className="ml-5">
                    &emsp; &emsp;Konsumsi bawang merah dapat membantu menurunkan tekanan darah tinggi berkat kandungan senyawa allicin yang dapat membantu memperlebar pembuluh darah.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Meningkatkan sistem kekebalan tubuh
                  <div className="ml-5">
                    &emsp; &emsp;Bawang merah kaya akan vitamin C dan antioksidan yang dapat meningkatkan sistem kekebalan tubuh dan melindungi dari infeksi.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Memperbaiki kesehatan pencernaan
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan serat dalam bawang merah dapat membantu memperbaiki sistem pencernaan dan mencegah masalah pencernaan seperti sembelit.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  4. Mencegah kanker
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan senyawa sulfur dalam bawang merah dapat membantu mencegah beberapa jenis kanker dengan melawan radikal bebas dan mengurangi peradangan.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman bawang merah
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman bawang merah memerlukan perhatian khusus agar tanaman tumbuh optimal. Berikut adalah beberapa tips untuk pemeliharaan bawang merah:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman bawang merah membutuhkan penyiraman yang teratur, terutama selama fase pertumbuhan awal. Pastikan tanah tidak kering namun juga tidak tergenang air.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemupukan secara berkala dengan pupuk organik atau pupuk kandang sangat dianjurkan untuk memastikan pertumbuhan umbi yang sehat dan besar.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Penyiangan gulma
                  <div className="ml-5">
                    &emsp; &emsp;Penyiangan gulma secara rutin diperlukan untuk mencegah persaingan nutrisi antara bawang merah dan gulma yang tumbuh di sekitarnya.
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
