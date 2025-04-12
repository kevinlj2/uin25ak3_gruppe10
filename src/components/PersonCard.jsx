import { useEffect, useState } from "react";
import { getGroupMembers } from "../sanity/groupindex";

const PersonCard = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroupMembers();
      setMembers(data || []);
    };

    fetchData();
  }, []);

  return (
    <div>
      {members.map((member, index) => (
        <div key={index}>
          <h2>{member.Navn}</h2>
          <p>{member.Epost}</p>
          {member.BildeUrl && (
            <img src={member.BildeUrl} alt={member.Name} width="200" />
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonCard;
