import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseconfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { data } from "react-router-dom";

export default function dashboard() {
  const [uid, setuid] = useState("");
  const [record, setrecord] = useState("");
  const [allRecord, setAllRecord] = useState("");
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [EditIndex, setEditIndex] = useState(null);

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuid(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    if (uid) {
      fetchUser();
      fetchData();
    }
  }, [uid]);

  const fetchUser = async () => {
    await getDoc(doc(db, "Users", uid)).then((res) => {
      let data = res.data();
      setrecord(data);
    });
  };

  const fetchData = async () => {
    await getDocs(collection(db, "Tasks")).then((data) => {
      let allData = data.docs.map((e, i) => ({ docID: e.id, ...e.data() }));
      setAllRecord(allData);
    });
  };

  const addTask = async () => {
    if (EditIndex == null) {
      await addDoc(collection(db, "Tasks"), {
        userID: uid,
        task,
        priority,
      }).then((res) => {
        console.log(res);
        setAllRecord([...allRecord, { userID: uid, task, priority }]);
      });
    } else {
      await updateDoc(doc(db, "Tasks", EditIndex), { task, priority }).then(
        () => {
          fetchData();
        }
      );
    }
    setTask("");
    setPriority("");
    setEditIndex(null);
  };

  const handleDelete = async (docID) => {
    await deleteDoc(doc(db, "Tasks", docID)).then(() => {
      let filterdata = allRecord.filter((item) => item.docID != docID);
      setAllRecord(filterdata);
    });
  };

  const handleEdit = (docID) => {
    let singledata = allRecord.find((item) => item.docID == docID);
    setTask(singledata.task);
    setPriority(singledata.priority);
    setEditIndex(docID);
  };

  return (
    <div>
      <h1>DASHBOARD</h1>
      <h3>{record.name}</h3>
      <h3>{record.email}</h3>
      <input
        type="text"
        placeholder="enter the task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value);
        }}
      >
        <option hidden>Select Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={addTask}>
        {EditIndex == null ? "Add Task" : "Update Task"}
      </button>

      {allRecord &&
        allRecord.map((e, i) => {
          return (
            <ul key={i}>
              <li>{e.userID}</li>
              <li>{e.task}</li>
              <li>{e.priority}</li>
              <button onClick={() => handleEdit(e.docID)}>Edit</button>
              <button onClick={() => handleDelete(e.docID)}>Delete</button>
            </ul>
          );
        })}
    </div>
  );
}
