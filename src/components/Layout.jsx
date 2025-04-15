import Header from "./Header";
import "../styles/_layout.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>;
    </>
  );
}
