import React, { Component } from 'react';
import { getData } from './dataService';
import './App.css';


function StarWarsCard(props) {
  return (
    <div className="starWars-card">
      <div>Name: {props.name}</div>
      <div>Height: {props.height}</div>
      <div>Gender: {props.gender}</div>
    </div>
  )
}


class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    getData().then((data) => {
      this.setState({ data: data })
    })
  }


  handleSortByName = () => {
    const alphabetizedNames = this.state.data.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  
   this.setState({data: alphabetizedNames})
  return;
  }

  handleSortByHeight = () => {
    const sortedHeight = this.state.data.sort((a,b) => a.height - b.height);
    this.setState({data: sortedHeight});
    // do not modify state directly. Practice immutability
    // make a new array of the newly sorted data
    // set that data to state
  }


  render() {
    const starWarsList = this.state.data.map((person, i) => {
      return <StarWarsCard key={i} name={person.name} height={person.height} gender={person.gender} />
    })

    return (
      <div className="App">
        <div className="filters">
          <button onClick={this.handleSortByName}>Sort by Name</button>
          <button onClick={this.handleSortByHeight}>Sort by Height</button>
        </div>
        {starWarsList}
      </div>
    );
  }
}

export default App;