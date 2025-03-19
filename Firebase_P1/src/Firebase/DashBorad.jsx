import React, { use, useEffect, useState } from "react";
import { auth, db } from "../../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function DashBorad() {
  const [uid, setUid] = useState(null);
  const [record, setRecord] = useState({});

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    if (uid) {
      fetchUser();
    }
  }, [uid]);

  const fetchUser = async () => {
    await getDoc(doc(db, "Users", uid)).then((res) => {
      let data = res.data();
      setRecord(data);
    });
  };

  return (
    // <div>
    //   DashBorad
    //   <h1>Welcome {record.name}</h1>
    // </div>

    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
      >
      <h3>Users</h3>
      <div
        className="card shadow-sm p-3 mb-3 bg-white rounded"
        style={{ width: "18rem" }}
      >
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{record.name}</h5>
          <p className="card-text text-muted">{record.email}</p>
        </div>
      </div>
    </div>
  );
}
