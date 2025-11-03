import React from "react";
import "./HackathonCard.css";

function HackathonCard({ name, organizer, date, team, Role, project, description, github, linkedin }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="sub">{organizer}</p>
      <p className="date">{date}</p>

      <h3>{team}</h3>
      <p className="sub">{Role}</p>

      <h3>{project}</h3>
      <p>{description}</p>

      <div className="links">
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={linkedin} target="_blank" rel="noreferrer">Demo</a>
      </div>
    </div>
  );
}

export default HackathonCard;