import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";

let currentUser = users[0];

function changeUser(user){
  currentUser = user;
  render();
}
function searchUser(firstName){
  // Use filter or something to search the array
}

function render() {
  ReactDOM.render(
    <App users={users} changeUser={changeUser} currentUser={currentUser}/>,
    document.getElementById("root")
  );
}
//console.log("index.js");
render();
