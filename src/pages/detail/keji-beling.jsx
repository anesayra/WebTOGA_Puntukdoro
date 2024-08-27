import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaKejiBeling() {
  return (
    <>
      <Head>
        <title>Keji Beling | myToga.in</title>
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
                KEJI BELING <a className="italic">(Strobilanthes crispus)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/kejibeling.jpeg"
                  alt="Keji Beling"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded  p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Keji Beling, juga dikenal dengan nama <i>Strobilanthes crispus</i>, adalah tanaman herbal yang memiliki manfaat besar dalam pengobatan tradisional. Tanaman ini dikenal mampu membantu menyembuhkan berbagai penyakit, terutama yang berhubungan dengan ginjal dan saluran kemih. Keji Beling sering ditemukan di wilayah tropis dan tumbuh subur di dataran rendah.
              </div>
              <div className=" w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman keji beling
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian yang sering dimanfaatkan dari tanaman keji beling adalah daunnya. Daun keji beling digunakan dalam bentuk teh atau dijadikan ramuan herbal untuk mengobati berbagai penyakit. Selain daun, akar dan batangnya juga memiliki potensi manfaat kesehatan.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman keji beling
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman keji beling memiliki berbagai manfaat kesehatan, berikut beberapa di antaranya:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Mengobati batu ginjal
                  <div className="ml-5">
                    &emsp; &emsp;Daun keji beling dipercaya dapat melarutkan batu ginjal, menjadikannya ramuan alami yang sering digunakan untuk penderita penyakit ginjal.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Menurunkan kadar gula darah
                  <div className="ml-5">
                    &emsp; &emsp;Ekstrak daun keji beling dipercaya dapat membantu menurunkan kadar gula darah, sehingga bermanfaat bagi penderita diabetes.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Menjaga kesehatan pencernaan
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan serat dalam daun keji beling dapat membantu melancarkan pencernaan dan mencegah gangguan pada saluran pencernaan.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  4. Menjaga kesehatan kulit
                  <div className="ml-5">
                    &emsp; &emsp;Penggunaan keji beling sebagai masker atau ramuan dipercaya dapat membantu merawat kulit dari jerawat dan penyakit kulit lainnya.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman keji beling
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Keji beling merupakan tanaman yang relatif mudah dipelihara. Tanaman ini membutuhkan perawatan yang sederhana, seperti penyiraman secara rutin dan pemberian pupuk organik. Berikut adalah beberapa tips pemeliharaan keji beling:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman ini membutuhkan penyiraman secara teratur, terutama pada musim kemarau. Pastikan tanah tetap lembab, tetapi hindari genangan air.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Penggunaan pupuk organik, seperti kompos, akan membantu tanaman tumbuh subur dan memperkuat sistem imunnya.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Penyiangan gulma
                  <div className="ml-5">
                    &emsp; &emsp;Penting untuk menjaga area di sekitar tanaman agar bersih dari gulma yang dapat mengganggu pertumbuhan keji beling.
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
