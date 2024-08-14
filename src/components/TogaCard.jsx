import { useRouter } from "next/router";
import { useEffect } from "react";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

export default function TogaCard({ toga }) {
  const router = useRouter();

  return (
    <div
      data-aos="fade-up"
      className="w-5/6 sm:max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 self-center"
    >
      <div className="relative">
        <img
          src={toga.imageUrl}
          alt={toga.title}
          className="w-full h-48 object-fill"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">
          {truncateText(toga.title, 29)}
        </div>
        <p className="text-gray-700 text-base">
          {truncateText(toga.description, 70)}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => {
            router.push(`/detail${toga.route}`);
          }}
          className="mt-4 transition ease-in-out border border-black hover:border-none  hover:-translate-y-1 hover:scale-110 hover:bg-[#315c48] hover:text-white duration-300 px-4 py-2 rounded flex items-center bg-white text-black"
        >
          Explore More
        </button>
      </div>
    </div>
  );
}
