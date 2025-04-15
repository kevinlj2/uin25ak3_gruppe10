import { useEffect, useState } from "react";
import { getWorklog } from "../sanity/groupindex"; // eller hvor du har plassert funksjonen

export default function Logg() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const data = await getWorklog();
      setLogs(data);
    };

    fetchLogs();
  }, []);

  return (
    <section>
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
  );
}
