import React from "react";
import { Tour } from "./Tour";
export const Tours = ({ tours, deleteTours }) => {
  return (
    <section>
      <h3 className="text-center display-3 fw-bold ">Our Tours</h3>
      <div className="d-flex " style={{width: "100%"}}>
        <div className="d-flex flex-wrap justify-content-center" style={{ width: "100%" }}>
          {tours.map((item) => {
            return <Tour key={item.id} {...item} deleteTours={deleteTours} />;
          })}
        </div>
        ;
      </div>
    </section>
  );
};
