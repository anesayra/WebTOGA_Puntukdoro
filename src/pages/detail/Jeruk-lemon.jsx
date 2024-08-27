import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";

export default function DetailTogaJerukLemon() {
  return (
    <>
      <Head>
        <title>Jeruk Lemon | myToga.in</title>
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
                JERUK LEMON <a className="italic">(Citrus limon)</a>
              </h1>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  src="/lemon.jpeg"
                  alt="Product"
                  className="w-full h-auto object-fill shadow-lg bg-white rounded p-4 max-h-[670px] mb-[20px] lg:mb-[40px]"
                />
              </div>
              <div className="text-gray-700 mt-2 self-start">
                Jeruk lemon adalah buah sitrun dengan kulit berwarna kuning dan rasa yang asam. Buah ini dikenal memiliki berbagai manfaat kesehatan dan sering digunakan dalam masakan serta minuman. Jeruk lemon tumbuh di daerah beriklim subtropis dan tropis dengan kondisi tanah yang baik dan drainase yang cukup.
              </div>
              <div className="w-full pl-5 pr-4 pb-4 flex flex-col justify-between">
                
                <div className="text-gray-700 font-bold mt-2 text-left">
                  A. Bagian yang dimanfaatkan dari tanaman jeruk lemon
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Bagian tanaman jeruk lemon yang paling sering dimanfaatkan adalah buahnya. Buah jeruk lemon dapat dikonsumsi langsung, dijadikan jus, atau digunakan sebagai bahan dalam berbagai resep kuliner. Kulit jeruk lemon juga sering digunakan dalam pembuatan minyak esensial dan sebagai aroma pada produk kecantikan.
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  B. Manfaat tanaman jeruk lemon
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Jeruk lemon dikenal memiliki berbagai manfaat kesehatan yang signifikan. Berikut adalah beberapa manfaat dari tanaman jeruk lemon:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Meningkatkan sistem kekebalan tubuh
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan vitamin C yang tinggi dalam jeruk lemon dapat membantu meningkatkan sistem kekebalan tubuh dan melawan infeksi.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Menjaga kesehatan pencernaan
                  <div className="ml-5">
                    &emsp; &emsp;Jeruk lemon dapat membantu meningkatkan pencernaan dengan merangsang produksi cairan pencernaan dan mencegah sembelit.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Menurunkan risiko batu ginjal
                  <div className="ml-5">
                    &emsp; &emsp;Kandungan asam sitrat dalam jeruk lemon dapat membantu mencegah pembentukan batu ginjal dengan meningkatkan tingkat urine dan mencegah kristalisasi kalsium.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  4. Meningkatkan kesehatan kulit
                  <div className="ml-5">
                    &emsp; &emsp;Vitamin C dan antioksidan dalam jeruk lemon dapat membantu meningkatkan kesehatan kulit, mengurangi keriput, dan mencerahkan kulit.
                  </div>
                </div>

                <div className="text-gray-700 font-bold mt-2 text-left">
                  C. Pemeliharaan tanaman jeruk lemon
                </div>
                <div className="text-gray-700">
                  &emsp; &emsp;Pemeliharaan tanaman jeruk lemon memerlukan perhatian terhadap kondisi tumbuhnya. Tanaman ini lebih cocok untuk tumbuh di daerah dengan iklim hangat dan tanah yang kaya nutrisi. Berikut adalah beberapa hal yang perlu diperhatikan dalam pemeliharaan tanaman jeruk lemon:
                </div>
                <div className="text-gray-700 ml-5">
                  1. Penyiraman
                  <div className="ml-5">
                    &emsp; &emsp;Jeruk lemon memerlukan penyiraman yang teratur, terutama pada musim kemarau. Pastikan tanah tetap lembab tetapi tidak tergenang air.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  2. Pemupukan
                  <div className="ml-5">
                    &emsp; &emsp;Pemberian pupuk yang kaya akan nitrogen, fosfor, dan kalium secara berkala dapat membantu meningkatkan hasil panen dan kesehatan tanaman jeruk lemon.
                  </div>
                </div>
                <div className="text-gray-700 ml-5">
                  3. Pengendalian hama
                  <div className="ml-5">
                    &emsp; &emsp;Tanaman jeruk lemon perlu diperiksa secara rutin untuk mencegah dan mengendalikan hama serta penyakit yang dapat mempengaruhi kualitas buah.
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
