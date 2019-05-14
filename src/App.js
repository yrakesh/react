import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      {name: 'Rakesh'},
      {name: 'Mahesh'},
      {name: 'Ganesh'}
    ],
    userName : '__RAKESH__',
    showUsers : !true
  };

  userNameChangeHandler = (event) => {
    this.setState({
      users: [
        {name: 'Rakesh'},
        {name: event.target.value},
        {name: 'Ganesh'}
      ]
    });
  }

  toggleUsers = () => {
    this.setState({
      showUsers : !this.state.showUsers
    })
  }
  
  deleteUser = (userIndex) => {
    const users = this.state.users;
    users.splice(userIndex, 1);
    this.setState({
      users: users
    });
  }

  render() {
    let users = null;
    if(this.state.showUsers) {
      users = (
        <div>
          {
            this.state.users.map((user, index) => {
              return <UserOutput userName={user.name} deleteHandler={() => this.deleteUser(index)}/>
            })
          }
        </div> 
      );
    }
    return (
      <div className="App">
        <UserInput changeHandler={this.userNameChangeHandler} />
        <button onClick={this.toggleUsers}>Toggle User Display</button>
        {users}
      </div>
    );
  }
}

export default App;