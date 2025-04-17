import { useEffect, useState } from "react";
import { getGroupMembers } from "../sanity/groupindex";
import { Link } from "react-router-dom";
import "../styles/_header.scss";

export default function Header() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroupMembers();
      setMembers(data || []);
    };

    fetchData();
  }, []);

  return (
    <nav>
      <h2>
        <Link to="/">TEAM X</Link>
      </h2>
      <ul>
        <li>
          <Link to="/" className="home">
            Hjem
          </Link>
        </li>
        {members.map((member, index) => (
          <li key={index}>
            <Link to={`/medlem/${member.slug}`}>{member.Navn}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
