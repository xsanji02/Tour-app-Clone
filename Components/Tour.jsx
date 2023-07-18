import { useState } from "react";

export const Tour = ({ id, image, info, name, price, deleteTours }) => {
  const [showMore, setShowMore] = useState(true);

  const seeMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <article className="m-2 p-2 " style={{ width: "25rem" }}>
      <img className="rounded-top" src={image} style={{ width: "24rem", height: "20rem" }} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="mt-3">
          {showMore ? info.substring(0, 150) : info}
          <a className="text-decoration-none ms-2" href="" onClick={seeMore}>
            {showMore ? "see more" : "see less"}
          </a>
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between fixed-buttom">
        <h3 className="text text-primary">{price}</h3>
        <button className="btn btn-primary" onClick={()=> deleteTours(id)}>NOT INTERESTED</button>
      </div>
      
    </article>
  );
};
