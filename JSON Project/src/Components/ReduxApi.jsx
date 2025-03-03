import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchApi } from "../Features/ApiSlice";

export default function ReduxApi() {
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(FetchApi());
  });

  const record = useSelector((state) => {
    return state.ApiReducer;
  });

  return (
    <div>
      <h1>ReduxApiCom</h1>
      {record.data &&
        record.data.map((e, i) => {
          return (
            <ul key={i}>
              <li>{e.title}</li>
            </ul>
          );
        })}
    </div>
  );
}
