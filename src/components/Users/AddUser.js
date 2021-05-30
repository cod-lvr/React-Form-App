import React from "react";
import Card from "../UI/Card";
import Button from '../UI/Button';
import "./AddUser.css";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className="input">
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">PhoneNumber</label>
        <input type="number" id="age" />
        <Button type="submit">AddUser</Button>
      </form>
    </Card>
  );
};

export default AddUser;
