import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGroupMembers, getWorklog } from "../sanity/groupindex";
import "../styles/_personpage.scss";

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

      setLogs(personLogs);
    };

    fetchData();
  }, [slug]);

  if (!medlem) return <p>Laster medlem...</p>;

  return (
    <section className="personpage">
      <div className="person-header">
        <img src={medlem.BildeUrl} alt={medlem.Navn} className="person-bilde" />
        <div className="person-info">
          <h1>{medlem.Navn}</h1>
          <p>{medlem.Biografi}</p>

          <h2>Interesser</h2>
          <ul>
            <li>{medlem.Interesser}</li>
          </ul>
        </div>
      </div>

      <section className="log">
        <h2>Arbeidslogg</h2>
        {logs.map((log) => (
          <div key={log.lognumber}>
            <p>{log.dato}</p>
            <p>{log.memberlog}</p>
            <p>{log.logs}</p>
            <p>{log.hoursspent} timer</p>
          </div>
        ))}
      </section>
    </section>
  );
}
