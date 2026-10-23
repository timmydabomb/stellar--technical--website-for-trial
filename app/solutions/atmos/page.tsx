import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";
import { solutions } from "@/components/solutions";

export const metadata: Metadata = { title: "Atmos | Nanobubble Pool Solutions" };

export default function AtmosPage() {
  return <SolutionPage solution={solutions.atmos} />;
}
