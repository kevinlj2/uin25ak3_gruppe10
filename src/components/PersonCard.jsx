import { useEffect, useState } from "react";
import { getGroupMembers } from "../sanity/groupindex";

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
        <div key={index} className="personcard">
          <h2>{member.Navn}</h2>
          <p>{member.Epost}</p>
          {member.BildeUrl && (
            <img src={member.BildeUrl} alt={member.Name} width="200" />
          )}
        </div>
      ))}
    </div>
  );
}
