import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaKencur() {
  return (
    <>
      <Head>
        <title>Kencur | myToga.in</title>
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
                KENCUR <a className="italic">(Kaempferia galanga)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/kencur.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman kencur adalah tanaman rempah yang sering digunakan dalam masakan dan obat tradisional di Indonesia. Kencur memiliki akar yang beraroma khas dan digunakan dalam berbagai resep masakan serta sebagai bahan dasar obat herbal. Tanaman ini tumbuh subur di daerah tropis dan memiliki berbagai manfaat kesehatan.
              </div>
              <div className="w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman kencur
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman kencur yang paling sering dimanfaatkan adalah akarnya. Akar kencur dapat digunakan sebagai bahan penyedap masakan atau diolah menjadi obat herbal. Selain akar, daun kencur juga dapat digunakan sebagai bahan pelengkap masakan.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman kencur
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman kencur memiliki banyak manfaat kesehatan yang dikenal luas. Berikut adalah beberapa manfaat dari tanaman kencur:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Mengatasi gangguan pencernaan
                  <div className="ml-5">
                    &emsp; &emsp;Kencur dapat membantu meredakan gangguan pencernaan seperti perut kembung dan gangguan lambung. Kandungan senyawa aktifnya berfungsi sebagai obat herbal yang efektif.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Menyegarkan badan
                  <div className="ml-5">
                    &emsp; &emsp;Akar kencur yang diolah menjadi minuman herbal dapat memberikan efek menyegarkan tubuh serta meningkatkan stamina.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Menurunkan tekanan darah
                  <div className="ml-5">
                    &emsp; &emsp;Kencur juga diketahui memiliki efek antihipertensi yang dapat membantu menurunkan tekanan darah tinggi.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  4. Menyembuhkan batuk dan pilek
                  <div className="ml-5">
                    &emsp; &emsp;Kencur memiliki sifat antiinflamasi dan antibakteri yang dapat membantu meredakan batuk dan pilek serta mempercepat proses penyembuhan.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman kencur
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman kencur memerlukan perhatian terhadap kondisi tanah dan lingkungan tumbuhnya. Berikut adalah beberapa hal yang perlu diperhatikan dalam pemeliharaan tanaman kencur:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman kencur memerlukan penyiraman yang cukup, terutama pada musim kemarau. Pastikan tanah tetap lembab tetapi tidak tergenang air.
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
                    &emsp; &emsp;Pastikan untuk membersihkan gulma yang tumbuh di sekitar tanaman agar tidak menghambat pertumbuhan dan penyerapan nutrisi oleh tanaman kencur.
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
