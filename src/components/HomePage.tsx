import { FirstSection } from "./FirstSection";
import { NavBar } from "./NavBar";
import { SecondSection } from "./SecondSection";


export function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <FirstSection />
      <SecondSection/>
    </div>
  );
}
