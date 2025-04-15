import Logg from "./Logg";
import PersonCard from "./PersonCard";

export default function Home() {
  return (
    <>
      <section>
        <PersonCard />
      </section>
      <section>
        <Logg />
      </section>
    </>
  );
}
