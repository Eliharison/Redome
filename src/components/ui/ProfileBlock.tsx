import Image from "next/image";

export function ProfileBlock() {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-right">
        <div className="text-base leading-none font-bold text-[#37475A]">Renato</div>
        <div className="text-sm leading-none font-normal text-[#4B6177]">Agente Sanitário | Campinas</div>
      </div>
      <Image
        src={"/Profile.webp"}
        alt="Avatar"
        className="rounded-full object-cover shadow-lg"
        width={38}
        height={38}
      />
    </div>
  );
}
