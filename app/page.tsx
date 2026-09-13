import type { Metadata } from "next";
import { ProgramHub } from "@/components/ProgramHub";

export const metadata: Metadata = {
  title: "MSDSPD 2026 Curriculum Portal | Digital University Kerala",
  description:
    "Curriculum portal for M.Sc. Data Science and Product Development (MSDSPD 2026 Batch), School of Digital Sciences, Kerala University of Digital Sciences, Innovation and Technology.",
};

export default function Home() {
  return <ProgramHub />;
}
