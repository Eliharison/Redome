import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={110}
        height={18}
        className="mr-2 md:w-[125px] md:h-[20px]"
      />
    </div>
  );
}
