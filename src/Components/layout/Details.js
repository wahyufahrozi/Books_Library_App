import React from "react";
// import M from "materialize-css";
import "./Navbardetail.css";
const Details = props => {
  const btnStatus = props.status === "Available" ? "" : "disabled";
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12 m9 left">
            <h2 className="right">{props.status}</h2>
            <a class=" waves-light btn yellow button" href="#">
              {props.genre}
            </a>
            <h1>{props.title} </h1>
            <span>
              {props.date} {props.year}
            </span>
            <p> {props.description}</p>
          </div>
          <div className="col s12 m2 right">
            <div className="cards hide-on-med-and-down">
              <div class="card-images">
                <img src={`${props.image_url}`} alt=""></img>
              </div>
            </div>
            <a
              className={` waves-effect ${btnStatus}  waves-light btn yellow`}
              href="#"
              style={{
                fontWeight: "bold"
              }}
            >
              Borrow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
