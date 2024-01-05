import Header from "../components/Header";
import Services from "../components/Services";
import Hiring from "@/components/Hiring";
import HiringStep from "../components/HiringStep";
import Benefits from "../components/Benefits";
import TalentCategory2 from "../components/TalentCategory2";
import Flexibility from "../components/Flexibility";
import Pricing from "../components/Pricing";
export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Hiring />
      <HiringStep />
      <Benefits />
      <Flexibility />
      <TalentCategory2 />

      <Pricing />
    </div>
  );
}
