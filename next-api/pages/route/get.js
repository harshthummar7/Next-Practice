import React, { useState } from "react";

function get() {
  const [data, setData] = useState([]);
  const [v, setV] = useState("");

  async function load() {
    const data = await fetch("/api/comments");
    const result = await data.json();
    setData(result);
  }

  async function submitData() {
    const data = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ v }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await data.json();
    console.log(result);
  }

  const deleteData = async (id) => {
    const data = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const result = await data.json();
    console.log(result);
    load();
  };

  return (
    <div>
      <input type="text" value={v} onChange={(e) => setV(e.target.value)} />
      <button onClick={submitData}>submit</button>
      <button onClick={load}>Load Data</button>
      {data.map((d) => {
        return (
          <div key={d.id}>
            {d.id}..........{d.title}
            <button onClick={() => deleteData(d.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default get;
