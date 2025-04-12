import { useEffect, useState } from "react";
import { getGroupMembers } from "../sanity/groupindex";

const Header = () => {
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
      <nav>
        <h2>TEAM X</h2>
        <ul>
          {members.map((member, index) => (
            <li key={index}>{member.Navn}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
