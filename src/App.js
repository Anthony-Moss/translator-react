import React from 'react';

import './App.css';

import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      names: ["oakley", "milla", "angela"]
    };
  }

  render () {
    console.log('Rendering App');
    console.log(`Top of App.render, State is now ${this.state.inputText}`);

    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {
              this.state.names.map((name, i) => (                
                <li key={i}>{name}</li>
              ))
            }
          </ul>

          {/* <input 
            onChange={ this._updateInputText }
          />
  
          <Output
            text={this.state.inputText}
          />
          <Output
            text={this.state.inputText}
            transform="l33t"
          /> */}
        </header>
      </div>
    );
  }

  _updateInputText = (e) => {
  
    console.log('onChange event fired');
    console.log(e.target.value);

    // This is a request for a change
    // that will take place in the future.
    this.setState({
      inputText: e.target.value
    }, () => {
      console.log(`After setState, State is now ${this.state.inputText}`);
    });
    
  }
}

export default App;


// JSX
{/* <div className="cat">
  Oakley
</div> */}

// JavaScript
// React.createElement("div", { className: "cat"}, "Oakley");

// React Element
// {
//   type: "div", {
//     className: "cat"
//   }, "Milla"
// }