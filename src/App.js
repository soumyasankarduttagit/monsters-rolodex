import React, {Component} from 'react';
import './App.css';
import {Cardlist} from './components/Card-list/Card-list.component';
import { SearchBox } from './components/Search-box/Search-box.component';
class App extends Component{
constructor(){
  super();
  this.state={
    monsters:[
    
    ],
    searchField:''
  }
}


componentDidMount(){

  fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({monsters:users}));
}

handleChange =(e)=>{
  this.setState({'searchField' : e.target.value});
}

  render(){
    const{monsters,searchField}= this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
   return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
      placeholder='Search Monster...'
      handleChange={this.handleChange} 
      />
      <Cardlist monsters={filteredMonsters}>
      </Cardlist>
      </div>
    );
  }
}

export default App;
