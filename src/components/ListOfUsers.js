import React from "react";

class ListOfUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: false,
      buttonText: 'Hide',
      searchText: ''
    };
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }

  render() {
    var userDiv = '';
    // var buttonText = 'Hide';

    //if not hidden
    if (!this.state.hidden) {
      userDiv = this.props.users.map((user) => {
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
        <input type="text" value={this.state.searchText} onChange={this.handleChange } />
        <button onClick={
          () => {
            this.props.changeUser(this.state.searchText);
          }
        }>Search</button>
      </div>
    )
  }
}

export default ListOfUsers;

// import React from "react";

// console.log("List.js");


// class ListOfUsers extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             hidden: false
//         };
//     }
//     listButtonHandler() {
//         //if div id="list" hasclass hidden, remove the class
//         // else addclass
//         var listDiv = document.getElementById("list");
//         listDiv.classList.toggle('hidden');
//         this.setState({hidden:!this.state.hidden});
//     }


//     render() {
//         const userDiv = this.props.users.map((user) => {
//             return <div key={user.first_name}>{user.first_name}</div>
//         });
//         return (
//             <div>
//                 Here is the list of users:
//             <div id="list">{userDiv} </div>
//             {this.state.hidden ? <button onClick={this.listButtonHandler}>Show</button>
//             : <button onClick={this.listButtonHandler}>Hide</button>}

//             </div>
//         )
//     }

// }

// export default ListOfUsers;

