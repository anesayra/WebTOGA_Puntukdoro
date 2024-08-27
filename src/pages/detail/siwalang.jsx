import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaSingawalang() {
  return (
    <>
      <Head>
        <title>Singawalang | myToga.in</title>
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
                SINGAWALANG <a className="italic">(petiveria)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/singa.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded  p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman singawalang dikenal dengan daun yang berbentuk lonjong dan bunga kecil berwarna ungu. Tanaman ini banyak ditemukan di kawasan tropis dan memiliki berbagai manfaat kesehatan. Singawalang sering digunakan dalam pengobatan tradisional untuk mengatasi berbagai masalah kesehatan.
              </div>
              <div className=" w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman singawalang
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman singawalang yang paling sering dimanfaatkan adalah daunnya. Daun singawalang dapat digunakan dalam bentuk ramuan herbal untuk mengobati berbagai penyakit. Selain itu, bunga singawalang juga sering digunakan untuk tujuan terapeutik.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman singawalang
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman singawalang dikenal memiliki berbagai manfaat kesehatan. Berikut adalah beberapa manfaat dari tanaman singawalang:
                </div>
                <div className="text-gray-700  ml-5">
                  1. Mengatasi masalah pencernaan
                  <div className="ml-5">
                    &emsp; &emsp;Daun singawalang dapat digunakan untuk meredakan masalah pencernaan seperti diare dan gangguan perut.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  2. Mengurangi peradangan
                  <div className="ml-5">
                    &emsp; &emsp;Sifat anti-inflamasi dari singawalang dapat membantu mengurangi peradangan pada berbagai kondisi, termasuk arthritis dan radang sendi.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  3. Meningkatkan daya tahan tubuh
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan nutrisi dalam daun singawalang, seperti vitamin C dan senyawa antioksidan, dapat membantu meningkatkan sistem kekebalan tubuh dan melindungi dari infeksi.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  4. Membantu penyembuhan luka
                  <div className="ml-5 ">
                    &emsp; &emsp;Daun singawalang dapat digunakan sebagai kompres untuk membantu penyembuhan luka dan mengurangi rasa sakit.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman singawalang
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman singawalang membutuhkan perhatian terhadap lingkungan tumbuhnya. Tanaman ini tumbuh dengan baik di daerah yang cukup lembab dan tanah yang subur. Berikut adalah beberapa hal yang perlu diperhatikan dalam pemeliharaan tanaman singawalang:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman singawalang membutuhkan penyiraman yang cukup, terutama pada musim kemarau. Pastikan tanah tetap lembab, tetapi tidak tergenang air.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemberian pupuk organik secara berkala sangat dianjurkan untuk memastikan pertumbuhan tanaman yang optimal. Pupuk kompos atau pupuk kandang dapat digunakan untuk meningkatkan kualitas tanah.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Penyiangan gulma
                  <div className="ml-5">
                    &emsp; &emsp;Pastikan untuk membersihkan gulma yang tumbuh di sekitar tanaman agar tidak menghambat pertumbuhan dan penyerapan nutrisi oleh tanaman singawalang.
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
