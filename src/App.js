import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import UserDetail from "./components/UserDetail.js"
import ListOfUsers from "./components/ListOfUsers.js"


console.log("App.js");


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      

    };
  }

 
  render() {

    return (
      <div className="App">

        <ListOfUsers changeUser = {this.props.changeUser} users={this.props.users} />
        <UserDetail user={this.props.currentUser} />
        {/* <button onClick={() => {
          this.setState({ visible: !this.state.visible });
        }}>visible</button> */}
      </div>
    )
  }
}

export default App;
