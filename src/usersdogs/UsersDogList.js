import React, { useState, useEffect, useContext } from "react";
import PuphubApi from "../api/api";
import UsersDogCard from "./UsersDogCard";
import UserContext from "../auth/UserContext";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with users list of dogs.
 *
 * On mount, loads dogs from API.
 * Re-loads filtered dogs on submit from search form.
 */

function UsersDogList() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.debug(
    "UsersDogList",
    "currentUser=", currentUser,
);

  const [dogs, setDogs] = useState(null);
  const [saveConfirmed, setSaveConfirmed] = useState(false);

  useEffect(function getUsersDogsOnMount() {
    console.debug("DogList useEffect getDogsOnMount");
    search();
  }, []);

  async function search(user_id) {
    let dogs = await PuphubApi.getUsersDogs("walnut");
    setDogs(dogs);
    console.log(dogs);
  }

  const handleDelete = async (id) => {
    console.log("Deleting dog with id:", id); 
    await PuphubApi.deleteDog(id);
    setSaveConfirmed(true);
    setDogs(prevDogs => prevDogs.filter(d => d.id !== id));
    setTimeout(() => {
      setSaveConfirmed(false);
    }, 3000);
  }


  if (!dogs) return (
    <center><h1>Sorry no dogs found!</h1></center>);

  return (
      <div className="CompanyList col-md-8 offset-md-2">
        {dogs.length
            ? (
                <div className="CompanyList-list">
                  {dogs.map(d => (
                      <UsersDogCard
                          key={d.id}
                          id={d.id}
                          name={d.name}
                          breed={d.breed}
                          age={d.age}
                          image={d.image}
                          onDelete={handleDelete}
                          
                      />
                              
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
            
      </div>
  );
}

export default UsersDogList;
