import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaJerukNipis() {
  return (
    <>
      <Head>
        <title>Jeruk Nipis | myToga.in</title>
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
                JERUK NIPIS <a className="italic">(Citrus aurantiifolia)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/nipis.jpg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded  p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Jeruk nipis adalah tanaman buah yang banyak dibudidayakan di kawasan tropis. Buah jeruk nipis terkenal karena rasa asamnya yang khas dan sering digunakan dalam berbagai resep makanan dan minuman. Selain sebagai bahan makanan, jeruk nipis juga memiliki banyak manfaat kesehatan.
              </div>
              <div className=" w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman jeruk nipis
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman jeruk nipis yang paling sering dimanfaatkan adalah buahnya. Buah jeruk nipis dapat digunakan sebagai bahan baku minuman, bumbu masakan, dan obat herbal. Selain buahnya, daun jeruk nipis juga sering digunakan sebagai bahan aromatik dalam berbagai masakan.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman jeruk nipis
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman jeruk nipis memiliki berbagai manfaat untuk kesehatan, antara lain:
                </div>
                <div className="text-gray-700  ml-5">
                  1. Meningkatkan sistem kekebalan tubuh
                  <div className="ml-5">
                    &emsp; &emsp;Jeruk nipis kaya akan vitamin C yang dapat membantu memperkuat sistem imun dan melindungi tubuh dari infeksi.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  2. Melancarkan pencernaan
                  <div className="ml-5">
                    &emsp; &emsp;Asam pada jeruk nipis dapat merangsang produksi enzim pencernaan dan membantu melancarkan pencernaan.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  3. Membantu detoksifikasi
                  <div className="ml-5">
                    &emsp; &emsp;Jeruk nipis dapat membantu membersihkan racun dalam tubuh dan memperbaiki fungsi hati.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  4. Mengurangi risiko penyakit jantung
                  <div className="ml-5 ">
                    &emsp; &emsp;Kandungan flavonoid dan antioksidan pada jeruk nipis dapat membantu menurunkan tekanan darah dan kolesterol, sehingga mengurangi risiko penyakit jantung.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman jeruk nipis
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman jeruk nipis membutuhkan perawatan yang cukup mudah namun tetap membutuhkan perhatian, terutama terkait penyiraman dan pemupukan. Berikut adalah beberapa tips pemeliharaan tanaman jeruk nipis:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman jeruk nipis membutuhkan penyiraman yang cukup, terutama pada musim kemarau. Pastikan tanah tetap lembab namun tidak tergenang air.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemupukan secara teratur dengan pupuk organik atau pupuk nitrogen dapat meningkatkan pertumbuhan dan hasil buah yang optimal.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Pemangkasan
                  <div className="ml-5">
                    &emsp; &emsp;Pemangkasan cabang yang tidak produktif dapat merangsang pertumbuhan cabang baru dan meningkatkan kualitas buah.
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
