import React from 'react';
import logo from './logo.svg';
import './App.css';
import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    };
  }

  render() {

  return (
    <div className="App">
      <header className="App-header">

      <img src={logo} className="App-logo" alt="logo" />

        <input 
          onChange={ (e) => {
            console.log('You are typing');
            console.log(e.target.value);

            this.setState({
              inputText: e.target.value
            });

          } }
        />

          <Output 
          text={this.state.inputText} />
      </header>
    </div>
  );
}
}

export default App;
