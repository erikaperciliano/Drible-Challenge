import { Carrousel } from "./FirstSection/Carrousel";
import { NavBar } from "./NavBar";
import { SecondSection } from "./SecondSection/SecondSection";


export function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <Carrousel />
      <SecondSection/>
    </div>
  );
}
