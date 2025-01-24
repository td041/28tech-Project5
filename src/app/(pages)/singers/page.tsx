import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Online Music App",
};
export default function SingerPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang kết quả tìm kiếm</h1>
    </>
  );
}
