import React, { Component } from 'react';
import './App.scss';
import Character from "./components/Character";
import { GetData } from "./components/GetData";

class App extends Component {
  constructor() {
    super();
    this.state = {
        next: '',
        prev: '',
      starwarsChars: []
    };
  }

  componentDidMount() {
      GetData("https://swapi.co/api/people", (data) => {
          debugger;
        this.setState({starwarsChars: data.results, next: data.next, prev: data.previous})
      })
  }
    
    getPrev = () => {
        debugger;
        GetData(this.state.prev, (data) => {
            this.setState({starwarsChars: data.results, next: data.next, prev: data.previous});
        });
    };
  
  getNext = () => {
      debugger;
    GetData(this.state.next, (data) => {
      this.setState({starwarsChars: data.results, next: data.next, prev: data.previous});
    });
  };

  render() {
    return (
      <div className="App">
          <div className="page-buttons">
              {(this.state.prev ? <button onClick={this.getPrev} className="prev">Prev</button> : '')}
              {(this.state.next ? <button onClick={this.getNext} className="next">Next</button> : '')}
          </div>
          <div className="background"/>
        <h1 className="Header">React Wars</h1>
          {this.state.starwarsChars.map(character => <Character key={character.name} character={character}/>)}
      </div>
      
    );
  }
}

export default App;
