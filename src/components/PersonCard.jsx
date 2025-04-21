import { useEffect, useState } from "react";
import { getGroupMembers } from "../sanity/groupindex";
import { Link } from "react-router-dom";

export default function PersonCard() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroupMembers();
      setMembers(data || []);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {members.map((member, index) => (
        <Link to={`/medlem/${member.slug}`}>
          <div key={index} className="personcard">
            <h2>{member.Navn}</h2>
            <p>
              <a href={`mailto:${member.Epost}`}>{member.Epost}</a>
            </p>
            {member.BildeUrl && <img src={member.BildeUrl} alt={member.Name} />}
          </div>
        </Link>
      ))}
    </div>
  );
}
