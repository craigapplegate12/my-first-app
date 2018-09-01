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
  const alphabetizedNames = this.state.data.sort((a, b) => a.name > b.name);  
   this.setState({data: alphabetizedNames})
  }

  handleSortByHeight = () => {
    const sortedHeight = this.state.data.sort((a,b) => a.height - b.height);
    this.setState({data: sortedHeight});
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