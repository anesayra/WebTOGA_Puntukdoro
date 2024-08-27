import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaTapakDara() {
  return (
    <>
      <Head>
        <title>Tapak Dara | myToga.in</title>
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
                TAPAK DARA <a className="italic">(Catharanthus roseus)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/tapakdara.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman tapak dara, juga dikenal dengan nama Catharanthus roseus, adalah tanaman obat yang memiliki banyak manfaat kesehatan. Tanaman ini dikenal dengan bunga berwarna cerah dan daun hijau yang digunakan dalam berbagai aplikasi herbal. Tapak dara banyak ditemukan di daerah tropis dan subtropis.
              </div>
              <div className="w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman tapak dara
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman tapak dara yang paling sering dimanfaatkan adalah daunnya. Daun tapak dara dapat digunakan untuk membuat ramuan herbal yang berkhasiat. Selain itu, bunga dan akar tanaman ini juga digunakan dalam pengobatan tradisional.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman tapak dara
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman tapak dara dikenal memiliki berbagai manfaat kesehatan. Berikut adalah beberapa manfaat dari tanaman tapak dara:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Mengatasi diabetes
                  <div className="ml-5">
                    &emsp; &emsp;Ekstrak daun tapak dara diketahui dapat membantu menurunkan kadar gula darah, sehingga bermanfaat bagi penderita diabetes.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Mengatasi hipertensi
                  <div className="ml-5">
                    &emsp; &emsp;Daun tapak dara juga dapat membantu menurunkan tekanan darah tinggi karena kandungan senyawa aktif yang dapat membantu menyeimbangkan tekanan darah.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Menyembuhkan infeksi
                  <div className="ml-5">
                    &emsp; &emsp;Sifat antimikroba dari tanaman tapak dara membantu dalam penyembuhan infeksi dan mempercepat proses pemulihan dari luka.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  4. Menyembuhkan kanker
                  <div className="ml-5">
                    &emsp; &emsp;Beberapa senyawa dalam tapak dara, seperti vincristine dan vinblastine, digunakan dalam pengobatan kanker untuk menghambat pertumbuhan sel kanker.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman tapak dara
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman tapak dara melibatkan perhatian khusus terhadap kondisi tumbuhnya. Berikut adalah beberapa hal yang perlu diperhatikan dalam pemeliharaan tanaman tapak dara:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman tapak dara membutuhkan penyiraman yang cukup, terutama pada musim kemarau. Pastikan tanah tetap lembab, tetapi tidak tergenang air.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemupukan secara teratur dengan pupuk organik atau pupuk lengkap akan mendukung pertumbuhan tanaman yang sehat.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Penyiangan gulma
                  <div className="ml-5">
                    &emsp; &emsp;Rutin membersihkan gulma di sekitar tanaman tapak dara penting untuk mencegah persaingan nutrisi dan mendukung pertumbuhan optimal tanaman.
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
