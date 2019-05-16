import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    userInput : '',
    inputLength: 0
  };

  textChangeHandler= (event) => {
    let txt = event.target.value;

    this.setState({
      userInput   : txt,
      inputLength : txt.length
    })
  }

  onCharClick = (index) => {
    let txt = this.state.userInput;
    let txtArr = txt.split('');
    txtArr.splice(index, 1);
    let updatedString = txtArr.join('');
    this.setState({
      userInput: updatedString,
      inputLength: updatedString.length
    })
  }

  render() {
    let chars = null;
    let charArr = this.state.userInput.split('');
    if(charArr.length) {
      chars = (
        charArr.map((char, index) => {
            return <CharComponent 
                      key={index}
                      char={char} 
                      clickHandler={() => this.onCharClick(index)}
                    />;
        })
      )
    }
    return (
      <div className="App">
        <input type="text" value={this.state.userInput} onChange={ (event) => this.textChangeHandler(event)}/>
        <p>Entered text length is: {this.state.inputLength}</p>
        <ValidationComponent inputLength={this.state.inputLength}></ValidationComponent>
        {chars}
      </div>
    );
  }
}

export default App;