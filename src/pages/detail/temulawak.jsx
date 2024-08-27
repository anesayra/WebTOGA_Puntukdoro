import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaTemulawak() {
  return (
    <>
      <Head>
        <title>Temulawak | myToga.in</title>
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
                TEMULAWAK <a className="italic">(Curcuma xanthorrhiza)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/temulawak.jpeg"
                  alt="Temulawak"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded  p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Temulawak adalah tanaman herbal yang telah lama dikenal dan digunakan dalam pengobatan tradisional Indonesia. Tanaman ini memiliki rimpang besar berwarna kuning-oranye yang sering dimanfaatkan sebagai bahan obat herbal untuk meningkatkan kesehatan, terutama dalam menjaga fungsi hati dan sistem pencernaan.
              </div>
              <div className=" w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman temulawak
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian yang paling sering dimanfaatkan dari tanaman temulawak adalah rimpangnya. Rimpang temulawak digunakan untuk membuat obat tradisional yang bermanfaat bagi kesehatan hati, sistem pencernaan, dan meningkatkan nafsu makan. Daun dan bunga temulawak juga memiliki potensi sebagai bahan baku obat herbal.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman temulawak
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Temulawak memiliki banyak manfaat kesehatan yang telah terbukti secara ilmiah. Berikut adalah beberapa manfaat dari tanaman temulawak:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Meningkatkan fungsi hati
                  <div className="ml-5">
                    &emsp; &emsp;Temulawak terkenal dengan kemampuannya untuk meningkatkan fungsi hati dan membantu mencegah gangguan hati, seperti hepatitis.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Meredakan peradangan
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan kurkumin dalam temulawak memiliki sifat anti-inflamasi yang dapat membantu meredakan nyeri sendi dan peradangan.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Meningkatkan nafsu makan
                  <div className="ml-5">
                    &emsp; &emsp;Temulawak sering digunakan untuk meningkatkan nafsu makan, terutama pada anak-anak yang mengalami penurunan nafsu makan.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  4. Melancarkan pencernaan
                  <div className="ml-5 ">
                    &emsp; &emsp;Rimpang temulawak juga bermanfaat dalam melancarkan pencernaan dan mengatasi gangguan lambung seperti perut kembung dan sembelit.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman temulawak
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Temulawak dapat tumbuh dengan baik di daerah tropis dengan kelembaban tinggi. Pemeliharaan tanaman ini cukup sederhana, namun ada beberapa hal yang perlu diperhatikan untuk memastikan pertumbuhannya optimal:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman temulawak membutuhkan penyiraman secara teratur, terutama pada musim kemarau. Namun, pastikan tanah tidak terlalu basah agar rimpang tidak busuk.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemberian pupuk organik seperti kompos sangat dianjurkan untuk menjaga kesuburan tanah dan mendukung pertumbuhan rimpang yang optimal.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Penyiangan gulma
                  <div className="ml-5">
                    &emsp; &emsp;Pastikan gulma di sekitar tanaman temulawak selalu dibersihkan agar tidak mengganggu pertumbuhan tanaman.
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
