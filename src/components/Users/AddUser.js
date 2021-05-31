import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

const AddUser = (props) => {
  const [UserName, setUserName] = useState("");
  const [UserAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (UserName.trim().length === 0 || UserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age.'
      });
      return;
    }
    if (+UserAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'please enter a valid age.'
      });
      return;
    }

    props.onAddUser(UserName, UserAge);
    setUserAge("");
    setUserName("");
  };

  const ChangeUserNameHandler = (ev) => {
    setUserName(ev.target.value);
  };

  const ChangeUserAgeHandler = (ev) => {
    setUserAge(ev.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className="input">
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={ChangeUserNameHandler}
            value={UserName}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={ChangeUserAgeHandler}
            value={UserAge}
          />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
