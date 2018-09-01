import React, { Component } from 'react';
import './App.css';

function Details(props) {
  const phrase = props.info;
  return <div  className="info"> {phrase} </div>

}
function Content1(props){
  const phrase = `${props.title}`;
  return <div className="red-card">
  {phrase}
    <div> <Details info = "Age of Ultron: 7:00am, 10:30 am, 1:00 pm, 3:14pm"/> </div>
    <div> <Details info = "Another Marvel Movie: 7:00am, 10:30 am, 1:00 pm, 3:14pm"/> </div>
  </div>
}
function Content2(props){
  const phrase = `${props.title}`;
  return <div className="teal-card">{phrase}
   <div> <Details info = "Mission Impossible"/> </div>
   <div> <Details info = "Fantastic Beasts"/> </div>
   <div> <Details info = "Mrs Doubtfire part 2"/> </div>
   </div>
}
function Content3(props){
  const phrase = `${props.title}`;
  return <div className="blue-card">{phrase}
   <div> <Details info = "Drag Show Tuesdays"/> </div>
   <div> <Details info = "Provo High Prom"/> </div>
  </div>
}
function Content4(props){
  const phrase = `${props.title}`;
  return <div className="orange-card">{phrase}
  <div> <Details info = "(385) 654-5241"/>
  <Details info = "sometheater@somemail.com"/>
   </div>
  </div>
}

class Header extends Component {
  render() {
    const phrase = "Welcome to the Movies";
    return (
      <div className="header">
      {phrase}
      </div>
    )
  }
}

class Footer extends Component {
  render(){

    return(
      <div className = "footer">
        Copyright @Someone2018
      </div>
    )
  }
}




class App extends Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    console.log('handleChange()')
    this.setState({
      name: event.target.value

    })
  }

  render() {
    //what ever js can go here
    console.log('render()')
    

    return (
      <div className="App">
      <Header/>
      <input value={this.state.name} onChange={this.handleChange}/> 
      <div> {this.state.name} </div>
      <Content1 title = "SHOWTIMES"/>
      <Content2 title = "UPCOMING"/>
      <Content3 title = "EVENTS"/>
      <Content4 title = "CONTACT"/>
     
      <Footer/>

      <input value={this.state.name}/> 
   
    
      </div>
    );
  }
}

export default App;
