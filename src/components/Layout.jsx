import Header from "./Header";
import Logg from "./Logg";
import PersonCard from "./PersonCard";

export default function Layout() {
  return (
    <>
      <Header />
      <section>
        <PersonCard />
      </section>
      <section>
        <Logg />
      </section>
    </>
  );
}
