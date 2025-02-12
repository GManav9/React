import React, { useEffect, useState } from "react";

export default function Crud() {
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [city, setCity] = useState("");

  const [record, setRecord] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Student")) || [];
    setRecord(data);
  }, []);

  const hanlesubmit = () => {
    let obj = { id: Date.now(), name, sub, city };
    setRecord([...record, obj]);
    localStorage.setItem("Student", JSON.stringify([...record, obj]));
  };

  return (
    <div>
      <input type="text" value={name} placeholder="Enter the Name" />
      <input type="text" value={sub} placeholder="Enter the Subject" />
      <input type="text" value={city} placeholder="Enter the City" />
      <button onClick={hanlesubmit}>Submit</button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {record.map((el, i) => {
            return (
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.sub}</td>
                <td>{el.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
