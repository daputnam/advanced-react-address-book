import React from "react";

class ListOfUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: false,
      buttonText: 'Hide',
      searchText: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  listButtonHandler() {
    if (this.state.buttonText === 'Hide') {
      this.setState({
        hidden: !this.state.hidden,
        buttonText: 'Show'
      });
    } else {
      this.setState({
        hidden: !this.state.hidden,
        buttonText: 'Hide'
      });
    }


  }

  // handleChange(event) {
  //   this.setState({searchText: event.target.value});
  // }

  render() {
    var userDiv = [];
    var filteredUsers = [];
    // var buttonText = 'Hide';

    //if not hidden
    if (!this.state.hidden) {
      //filter the user data for seach
      filteredUsers = this.props.users.filter((user) => {
        if (this.state.searchText === "") {
          return true;
        } 
        //return (user.last_name === this.state.searchText);
        return user.last_name.indexOf(this.state.searchText) > -1;
      });

      userDiv = filteredUsers.map((user) => {
        return (
          <div key={user.first_name}>
            {user.first_name}-{user.last_name}
            -
            <button onClick={
              () => {
                this.props.changeUser(user);
              }
            }>
              View User
            </button>
          </div>
        )
      });

    }
    
    return (
      <div>
        Here is the list of users:
        <div id="list">{userDiv} </div>

        <button onClick={
          () => {
            this.listButtonHandler()
          }
        }>{this.state.buttonText}</button>
        <br />

        Search<input onChange={
          (e)=>{
            // the entire text box value
            this.setState({searchText: e.target.value});
          } 
        } />

      </div>
    )
  }
}

export default ListOfUsers;
