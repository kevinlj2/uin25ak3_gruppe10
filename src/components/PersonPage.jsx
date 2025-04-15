import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGroupMembers, getWorklog } from "../sanity/groupindex";

export default function PersonPage() {
  const { slug } = useParams();

  const [medlem, setMedlem] = useState(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const members = await getGroupMembers();
      const funnet = members.find((m) => m.slug === slug);
      setMedlem(funnet);

      const allLogs = await getWorklog();
      const personLogs = allLogs.filter(
        (log) => log.memberlog === funnet?.Navn
      );

      console.log("LOGS FOR:", funnet?.Navn, personLogs); // Debug
      setLogs(personLogs);
    };

    fetchData();
  }, [slug]);

  if (!medlem) return <p>Laster medlem...</p>;
  return (
    <>
      <h1>{medlem.Navn}</h1>
      <p>Interesser: {medlem.Interesser}</p>
      <p>{medlem.Biografi}</p>
      <img src={medlem.BildeUrl} alt={medlem.Navn} width="200" />
      <h2>Arbeidslogg</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.Lognumber}>
            {log.dato} {log.logs} – {log.hoursspent} timer
          </li>
        ))}
      </ul>
    </>
  );
}
