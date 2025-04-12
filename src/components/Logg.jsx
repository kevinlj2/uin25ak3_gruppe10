import { useEffect, useState } from "react";
import { getWorklog } from "../sanity/groupindex"; // eller hvor du har plassert funksjonen

const Logg = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const data = await getWorklog();
      setLogs(data);
    };

    fetchLogs();
  }, []);

  return (
    <div>
      <h2>Arbeidslogg</h2>
      {logs.length === 0 ? (
        <p>Ingen logger funnet.</p>
      ) : (
        logs.map((log) => (
          <div key={log.Lognumber}>
            <h3>Logg {log.Lognumber}</h3>
            <p>
              <strong>Loggført av:</strong> {log.memberlog}
            </p>
            <p>
              <strong>Timer brukt:</strong> {log.hoursspent}
            </p>
            <p>
              <strong>Beskrivelse:</strong> {log.logs}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Logg;
