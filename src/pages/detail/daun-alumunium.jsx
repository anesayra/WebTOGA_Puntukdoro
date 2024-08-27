import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaDaunMutiara() {
  return (
    <>
      <Head>
        <title>Daun Mutiara | myToga.in</title>
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
                DAUN MUTIARA <a className="italic">(Pilea Cadierei)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/alumunium.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded  p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman daun mutiara dikenal dengan daun kecil berwarna hijau dengan tepi berwarna perak, yang memberikan kesan berkilauan. Tanaman ini juga dikenal dengan nama lain seperti daun alumunium. Daun mutiara sering digunakan sebagai tanaman hias indoor yang menambah keindahan dekorasi ruangan.
              </div>
              <div className=" w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman daun mutiara
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian yang paling dimanfaatkan dari tanaman daun mutiara adalah daunnya. Daun mutiara biasanya digunakan sebagai tanaman hias indoor karena tampilannya yang menarik. Selain itu, tanaman ini juga dapat dimanfaatkan sebagai elemen dekoratif dalam komposisi tanaman lainnya.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman daun mutiara
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman daun mutiara memiliki beberapa manfaat, terutama dalam konteks dekorasi ruangan dan lingkungan. Berikut adalah beberapa manfaat dari tanaman daun mutiara:
                </div>
                <div className="text-gray-700  ml-5">
                  1. Menambah keindahan ruangan
                  <div className="ml-5">
                    &emsp; &emsp;Daun mutiara memiliki penampilan yang menarik dengan daun hijau berkilau dan tepi perak, menjadikannya sebagai pilihan populer untuk dekorasi indoor.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  2. Mudah perawatannya
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman ini relatif mudah dirawat dan tidak memerlukan perhatian khusus, menjadikannya pilihan ideal untuk tanaman hias dalam ruangan dengan sedikit pencahayaan.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  3. Menyerap polutan udara
                  <div className="ml-5">
                    &emsp; &emsp;Seperti banyak tanaman hias lainnya, daun mutiara dapat membantu menyaring dan menyerap polutan udara, meningkatkan kualitas udara di dalam ruangan.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman daun mutiara
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman daun mutiara relatif mudah jika kondisi lingkungannya sesuai. Berikut adalah beberapa hal yang perlu diperhatikan dalam pemeliharaan tanaman daun mutiara:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman daun mutiara membutuhkan penyiraman secara teratur. Pastikan tanah tetap lembab tetapi tidak tergenang air, untuk menghindari pembusukan akar.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pencahayaan
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman ini tumbuh baik di tempat dengan cahaya tidak langsung. Hindari paparan sinar matahari langsung yang bisa membakar daunnya.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemberian pupuk cair sebulan sekali dapat membantu tanaman tumbuh dengan baik. Pilih pupuk yang seimbang untuk tanaman hias.
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
