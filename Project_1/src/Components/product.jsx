import React from "react";
import "./new.css";

function Product({ list }) {
  return (
    <>
      <div className="row d-flex mt-5 justify-content-center align-items-center">
        <table className="col-6 border border-1 border-success">
          <thead className="">
            <th className="">Name</th>
            <th className="">Image</th>
            <th className="">Price</th>
          </thead>
          <tbody>
            {list.map((el) => {
              return (
                <>
                  <tr>
                    <td id="img">
                      <img src={el.img} alt="" />
                    </td>
                    <td id="img">{el.name}</td>
                    <td id="img">{el.price}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Product;
