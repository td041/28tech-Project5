import Link from "next/link";
import { FaHeart, FaPlay } from "react-icons/fa6";

interface Item {
  image: string;
  title: string;
  singer: string;
  listen: string;
  link: string;
}
export const SongItem = (props: { item: Item }) => {
  const { item } = props;
  return (
    <>
      <div className="bg-[#212121] rounded-[15px] p-[10px] flex items-center">
        <div className="w-[76px] aspect-square rounded-[10px] truncate mr-[10px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="mb-[2px]">
            <Link
              href={item.link}
              className="font-[600] text-[16px] text-white"
            >
              {item.title}
            </Link>
          </div>
          <div className="font-[400] text-[12px] text-[#ffffff80] mb-[5px]">
            {item.singer}
          </div>
          <div className="font-[400] text-[12px] text-white">
            {item.listen.toLocaleString()} lượt nghe
          </div>
        </div>
        <div className="">
          <button
            className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white ml-[10px]"
            title="button"
          >
            <FaPlay />
          </button>
          <button
            className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white ml-[10px]"
            title="button"
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
};
