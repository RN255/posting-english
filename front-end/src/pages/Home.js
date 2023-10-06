import React from "react";
import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3001";

export default function Home() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [newEntryTwo, setNewEntryTwo] = useState("");

  useEffect(() => {
    GetEntries();

    console.log(entries);
  }, []);

  const GetEntries = () => {
    fetch(API_BASE + "/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error(err));
  };

  // mark as complete or not
  const completeEntry = async (id) => {
    const data = await fetch(API_BASE + "/entry/complete/" + id).then((res) =>
      res.json()
    );

    setEntries((entries) =>
      entries.map((entry) => {
        if (entry._id === data._id) {
          entry.complete = data.complete;
        }
        return entry;
      })
    );
  };

  // delete an entry
  const deleteEntry = async (id) => {
    const data = await fetch(API_BASE + "/entry/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setEntries((entries) => entries.filter((entry) => entry._id !== data._id));
  };

  // add new entry
  const addNewEntry = async () => {
    const data = await fetch(API_BASE + "/entry/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newEntry,
        textTwo: newEntryTwo,
      }),
    }).then((res) => res.json());

    setEntries([...entries, data]);
    setNewEntry("");
    setNewEntryTwo("");
  };

  return (
    <>
      <div className="container border mt-5 py-5">
        <div className="row">
          <div className="col">
            <p>Some information will go here</p>
            <p>But for now I will leave it blank</p>
            <p>Let's get onto that all important database</p>
            <p>Rendering the info from a database</p>
            <p>and an option for users to input information</p>
          </div>
        </div>

        {entries.map((entry) => (
          <div className="row" key={entry._id}>
            <div className="col">{entry.text}</div>
            <div className="col">{entry.textTwo}</div>
            <div
              className={
                "col border " +
                (entry.complete ? "text-primary" : "text-danger")
              }
              onClick={() => completeEntry(entry._id)}
            >
              Complete?
            </div>
            <div className="col border" onClick={() => deleteEntry(entry._id)}>
              DELETE
            </div>
          </div>
        ))}
        <div className="row">
          <div className="col">
            <h3>Add an entry</h3>
            <input
              type="text"
              onChange={(e) => setNewEntry(e.target.value)}
              value={newEntry}
            ></input>
            <input
              type="text"
              onChange={(e) => setNewEntryTwo(e.target.value)}
              value={newEntryTwo}
            ></input>
            <button onClick={addNewEntry}>Click me</button>
          </div>
        </div>
      </div>
    </>
  );
}
