import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state =  {
    persons : [
      {name: 'Raj' , age :21},
      {name: 'Muthu', age : 20},
      {name: 'Jai', age : 10}
    ],
    guys : {
      "name":"SinghSaab"
    },
    showPersons : false
  };

  // switchNameHandler = (qualifiedName) => {
  //   console.log("clicked")
  //   this.setState ( {
  //     persons : [
  //       {name: qualifiedName , age :21},
  //       {name: 'Muthu Subba', age : 20},
  //       {name: 'JaiSinghaa', age : 10}
  //     ]
  //   });
  //   /* React wont override the state which are not changed , it will just update the one which is change */
  // }

  nameChangeHandler = (event, index) => {

    const person = {...this.state.persons[index]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState ( {
      persons : persons
    });
  }
  
  togglePersonHandlder = () => {
    const doesshowPersons  = this.state.showPersons;
    this.setState ( {
      showPersons : !doesshowPersons
    })
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice(); // returns a new array from begin to end
    const persons = [...this.state.persons]; // Spread Operator is the preferred way
    persons.splice(index , 1); // you should not mutate the state 
    this.setState({persons:persons});
  }

  render() {

   
    let persons = null;

 if(this.state.showPersons) {
     
      persons = (
       
        <div >
         
         <Persons 
         persons = {this.state.persons }
         clicked = {this.deletePersonHandler}
         changed = {this.nameChangeHandler}/>
         
      </div>
     
      );
 }
    

    

    return (
     
      <div className="App">
       
          <Cockpit 
          clicked = {this.togglePersonHandlder}
          persons = {this.state.persons}
          showPersons = {this.state.showPersons} />

          { persons }


      </div>
     
    )
  }
}

export default App;

/*
  This  is not a functional Component , 
  State is a special variable , which can be used only extends Component here


*/