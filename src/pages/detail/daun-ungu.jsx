import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaDaunUngu() {
  return (
    <>
      <Head>
        <title>Daun Ungu | myToga.in</title>
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
                DAUN UNGU <a className="italic">(Graptophyllum pictum)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/daunungu.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman daun ungu, dikenal juga sebagai Graptophyllum pictum, adalah tanaman hias yang populer dengan daun berwarna ungu yang menarik. Tanaman ini sering digunakan dalam desain taman karena warna daunnya yang mencolok dan kemampuannya untuk tumbuh dengan baik di berbagai kondisi. Tanaman ini memiliki manfaat tambahan dalam pengobatan tradisional dan perawatan kulit.
              </div>
              <div className="w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman daun ungu
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman daun ungu yang sering dimanfaatkan adalah daunnya. Daun ungu dapat digunakan sebagai bahan dekoratif dalam taman atau pot tanaman hias. Selain itu, daun ungu juga memiliki khasiat dalam pengobatan tradisional dan perawatan kulit.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman daun ungu
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman daun ungu dikenal memiliki berbagai manfaat kesehatan dan estetika. Berikut adalah beberapa manfaat dari tanaman daun ungu:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Meningkatkan kesehatan kulit
                  <div className="ml-5">
                    &emsp; &emsp;Ekstrak daun ungu sering digunakan dalam produk perawatan kulit karena kemampuannya untuk membantu mengatasi masalah kulit seperti jerawat dan peradangan.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Menyegarkan udara
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman daun ungu dapat membantu menyegarkan udara di sekitar lingkungan, menjadikannya pilihan yang baik untuk dekorasi interior dan eksterior.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Mengurangi stres
                  <div className="ml-5">
                    &emsp; &emsp;Kehadiran tanaman daun ungu di sekitar rumah atau kantor dapat membantu mengurangi stres dan meningkatkan kesejahteraan mental melalui efek menenangkan dari warna daunnya.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  4. Menggunakan dalam pengobatan tradisional
                  <div className="ml-5">
                    &emsp; &emsp;Daun ungu dalam pengobatan tradisional sering digunakan untuk meredakan nyeri dan peradangan, serta membantu penyembuhan luka.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman daun ungu
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman daun ungu membutuhkan perhatian terhadap lingkungan tumbuhnya. Tanaman ini tumbuh subur di daerah yang mendapat cahaya cukup dan tanah yang drainase baik. Berikut adalah beberapa hal yang perlu diperhatikan dalam pemeliharaan tanaman daun ungu:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman daun ungu membutuhkan penyiraman yang teratur untuk menjaga kelembaban tanah. Namun, hindari penyiraman berlebihan yang dapat menyebabkan akar membusuk.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemberian pupuk secara berkala dapat membantu pertumbuhan tanaman yang optimal. Gunakan pupuk organik atau pupuk seimbang untuk memberikan nutrisi yang dibutuhkan.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Pemangkasan
                  <div className="ml-5">
                    &emsp; &emsp;Pemangkasan daun ungu secara berkala dapat membantu mempertahankan bentuk tanaman yang rapi dan menghilangkan daun yang kering atau rusak.
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
