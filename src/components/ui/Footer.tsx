import Logo from "@/components/ui/Logo";


export function Footer() {
    return (
      <footer className="bg-[#1A2E48] text-white py-8 px-4 flex flex-wrap justify-center text-center">

        <div className="footer-section flex-1 min-w-[200px] ml-4">
          <div className="mx-auto mb-4 mt-4 sm: mx-auto sm: mb-5">
          <Logo
            color={"#F7F7F7"}
          />
          </div>
          <p className="mt-2">Sua defesa avançada contra a dengue.</p>
        </div>
        <div className="footer-section flex-1 min-w-[200px] ml-2">
          <h4 className="text-xl font-bold mt-6 mb-2">Contato</h4>
          <a href="mailto:contato@redome.com" className="block text-base mb-1 hover:underline">
            contato@redome.com
          </a>
          <a href="#" className="block text-sm hover:underline">
            +55 (11) 1234-5678
          </a>
        </div>
      </footer>
    );
  }