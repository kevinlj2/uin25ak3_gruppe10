import { useState, useEffect } from "react";
import { getHeaderData } from "../sanity/client";

export default function Header() {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    getHeaderData().then((data) => setHeaderData(data));
  }, []);

  return (
    <header>
      <h1>{headerData.gruppeNummer}</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Hjem</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
