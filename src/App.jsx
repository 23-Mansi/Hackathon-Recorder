
import React, { useState, useEffect } from "react";
import "./App.css";
import HackathonCard from "./components/HackathonCard";

function App() {
  const [hackathons, setHackathons] = useState(
    JSON.parse(localStorage.getItem("hackathons")) || []
  );
  const [form, setForm] = useState({
    name: "",
    organizer: "",
    date: "",
    team: "",
    Role:"",
    project: "",
    description: "",
    github: "",
    demo: "",
  });

  useEffect(() => {
    localStorage.setItem("hackathons", JSON.stringify(hackathons));
  }, [hackathons]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.name || !form.project) return alert("Please fill all details!");
    setHackathons([...hackathons, form]);
    setForm({
      name: "",
      organizer: "",
      date: "",
      team: "",
      Role:"",
      project: "",
      description: "",
      github: "",
      demo: "",
    });
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Hackathon Recorder</h1>
        <button onClick={handleAdd}>Add Record</button>
      </div>

      <div className="form">
        <input name="name" placeholder="Hackathon Name" onChange={handleChange} value={form.name} />
        <input name="organizer" placeholder="Organizer" onChange={handleChange} value={form.organizer} />
        <input type="date" name="date" onChange={handleChange} value={form.date} />
        <input name="team" placeholder="Team Name" onChange={handleChange} value={form.team} />
        <input name="Role" placeholder="Role in Team" onChange={handleChange} value={form.Role} />
        <input name="project" placeholder="Project Title" onChange={handleChange} value={form.project} />
        <textarea name="description" placeholder="Project Description" onChange={handleChange} value={form.description}></textarea>
        <input name="github" placeholder="GitHub Link" onChange={handleChange} value={form.github} />
        <input name="linkedin" placeholder="LinkedIn Link " onChange={handleChange} value={form.demo} />
      </div>

      <div className="cards">
        {hackathons.map((h, index) => (
          <HackathonCard key={index} {...h} />
        ))}
      </div>
    </div>
  );
}

export default App;