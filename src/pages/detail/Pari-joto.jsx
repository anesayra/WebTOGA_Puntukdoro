import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaParijoto() {
  return (
    <>
      <Head>
        <title>Pari Joto | myToga.in</title>
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
                PARI JOTO <a className="italic">(Medinilla cumingii)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/parijoto.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded  p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Tanaman parijoto dikenal dengan buah kecil berwarna ungu yang memiliki bentuk bulat menyerupai anggur mini. Buah parijoto diyakini memiliki khasiat yang luar biasa bagi kesehatan terutama pada sistem reproduksi wanita. Tanaman ini banyak ditemukan di kawasan perbukitan dan pegunungan dengan ketinggian 800 hingga 2.300 meter di atas permukaan laut.
              </div>
              <div className=" w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman parijoto
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman parijoto yang paling sering dimanfaatkan adalah buahnya. Buah parijoto dapat dimakan langsung atau diolah menjadi obat herbal. Selain buahnya, daun parijoto juga memiliki manfaat sebagai bahan baku pembuatan obat tradisional untuk berbagai penyakit.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman parijoto
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Tanaman parijoto dipercaya memiliki banyak manfaat kesehatan, terutama dalam menjaga keseimbangan hormon. Berikut adalah beberapa manfaat dari tanaman parijoto:
                </div>
                <div className="text-gray-700  ml-5">
                  1. Meningkatkan kesuburan
                  <div className="ml-5">
                    &emsp; &emsp;Konsumsi buah parijoto diyakini dapat meningkatkan kesuburan pada wanita, sehingga sering dikonsumsi oleh mereka yang sedang menjalani program kehamilan.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  2. Menurunkan tekanan darah tinggi
                  <div className="ml-5">
                    &emsp; &emsp;Buah parijoto juga dikenal dapat membantu menurunkan tekanan darah tinggi karena kandungan antioksidan dan senyawa aktif lainnya yang dapat membantu menyeimbangkan sistem kardiovaskular.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  3. Meningkatkan daya tahan tubuh
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan nutrisi dalam buah parijoto, seperti vitamin C dan senyawa antioksidan, dapat membantu meningkatkan daya tahan tubuh serta melindungi dari berbagai penyakit.
                  </div>
                </div>
                <div className="text-gray-700  ml-5">
                  4. Membantu pencernaan
                  <div className="ml-5 ">
                    &emsp; &emsp;Buah parijoto diketahui juga memiliki efek positif dalam membantu proses pencernaan karena kandungan serat yang ada di dalamnya, membantu melancarkan sistem pencernaan dan mencegah sembelit.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman parijoto
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman parijoto membutuhkan perhatian terhadap lingkungan tumbuhnya. Tanaman ini tumbuh subur di daerah dengan kelembaban tinggi dan tanah yang kaya akan bahan organik. Berikut adalah beberapa hal yang perlu diperhatikan dalam pemeliharaan tanaman parijoto:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman parijoto membutuhkan penyiraman yang cukup, terutama pada musim kemarau. Pastikan tanah tetap lembab, tetapi tidak tergenang air.
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
                    &emsp; &emsp;Pastikan untuk membersihkan gulma yang tumbuh di sekitar tanaman agar tidak menghambat pertumbuhan dan penyerapan nutrisi oleh tanaman parijoto.
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
