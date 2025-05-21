import Image from "next/image";
import ServiceCard from "./Components/ServiceCard";
import ServicesPage from "./Components/template";

export const runtime = 'edge';

export default function Home() {
  return (
    <ServicesPage/>
  );
}
