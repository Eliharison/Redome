import Logo from "@/components/ui/Logo";


export function Footer() {
  return (
    <footer
      className="
        bg-[#1A2E48] text-white
        py-8 px-4
        flex flex-col items-center
        md:flex-row md:justify-between md:items-start
        text-center md:text-left
      "
    >
      {/* LOGO + DESCRIÇÃO */}
      <div className="w-full md:w-auto px-4 mb-8">
        {/* centraliza só no mobile, remove no desktop */}
        <div className="mx-28 md:mx-0 mb-4">
          <Logo color="#F7F7F7" />
        </div>
        <p>Sua defesa avançada contra a dengue.</p>
      </div>

      {/* CONTATO */}
      <div className="w-full md:w-auto px-4 mb-4">
        <h4 className="text-xl font-bold mb-2">Contato</h4>
        <a
          href="mailto:contato@redome.com"
          className="block text-base mb-1 hover:underline"
        >
          contato@redome.com
        </a>
        <a href="#" className="block text-sm hover:underline">
          +55 (11) 1234-5678
        </a>
      </div>
    </footer>
  );
}