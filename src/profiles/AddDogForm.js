import React, { useState, useContext } from "react";
import Alert from "../common/Alert";
import PuphubApi from "../api/api"; 
import UserContext from "../auth/UserContext";

import useTimedMessage from "../hooks/useTimedMessage";

/** Profile editing form.
 *
 * Displays profile form and handles changes to local form state.
 * Submitting the form calls the API to save, and triggers user reloading
 * throughout the site.
 *
 * Confirmation of a successful save is normally a simple <Alert>, but
 * you can opt-in to our fancy limited-time-display message hook,
 * `useTimedMessage`, but switching the lines below.
 *
 * Routed as /profile
 * Routes -> ProfileForm -> Alert
 */

function AddDogForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    last_name: currentUser.last_name,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  const [saveConfirmed, setSaveConfirmed] = useState(false);

  console.debug(
      "ProfileForm",
      "currentUser=", currentUser,
      "formData=", formData,
      "formErrors=", formErrors,
      "saveConfirmed=", saveConfirmed,
  );

  async function handleSubmit(evt) {
    evt.preventDefault();

    let dogData = {
      username: formData.username,
      name: formData.name,
      age: formData.age,
      breed: formData.breed,
      gender: formData.gender,
      image: formData.image,
    };

    let username = formData.username;
    dogData.age = parseInt(dogData.age);
    let updatedUser;

    try {
      updatedUser = await PuphubApi.addDog(dogData, username);
      setSaveConfirmed(true);
      setTimeout(() => {
        setSaveConfirmed(false);
      }, 3000);
    } catch (errors) {
      
      setFormErrors(errors);
      return;
    }

    setFormData(f => ({ ...f, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);

    setCurrentUser(updatedUser);
  }

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }

  return (
      <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3>Add Dog</h3>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Username</label>
                <p className="form-control-plaintext">{formData.username}</p>
              </div>
              <div className="form-group">
                <label>Dogs Name</label>
                <input
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                    name="age"
                    type="number"
                    className="form-control"
                    value={formData.age}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Breed</label>
                <input
                    name="breed"
                    className="form-control"
                    value={formData.breed}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <input
                    name="gender"
                    className="form-control"
                    value={formData.gender}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                    name="image"
                    className="form-control"
                    value={formData.image}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Confirm password to add dog:</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                />
              </div>

              {formErrors.length
                  ? <Alert type="danger" messages={formErrors} />
                  : null}
              {saveConfirmed && <Alert type="success" messages={["Dog added successfully."]} />}

              <button
                  className="btn btn-primary btn-block mt-4"
                  onClick={handleSubmit}
              >
                Add Dog
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default AddDogForm;