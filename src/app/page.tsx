import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Redome</h1>
      <p className="text-lg text-gray-700">O sistema de monitoramento de focos de Aedes Egypt</p>
      <Link
        className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
        href="/demo"
      >Ir para Demo</Link>
    </div>
  )
}
