import React from "react";
import { Link } from "react-router-dom";

import "./UsersDogCard.css";

function UsersDogCard({ name, breed, age, image, id, onDelete }) {
  console.debug("DogCard", image);

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <Link className="DogCard card" to={`/dogs/${id}`}>
        <div className="card-body">
          <h6 className="card-title">
            {name}
            {image && (
              <img src={image} alt={name} className="float-right ml-5" />
            )}
          </h6>
          <p>
            <small>Breed: {breed}</small>
          </p>
          <p>
            <small>Age: {age}</small>
          </p>
        </div>
        
      </Link>
      <button className="btn btn-primary btn-block" onClick={handleDelete}>Delete {name}</button>
      <br />
    </div>
  );
}

export default UsersDogCard;