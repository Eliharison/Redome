import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { About } from "@/components/ui/About";
import { Tech } from "@/components/ui/Techonologies";
import { Benefits } from "@/components/ui/Benefits";
import { Map } from "@/components/ui/Map"; 
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Benefits />
      <Map />
      <Footer />
    </>
  )
}
