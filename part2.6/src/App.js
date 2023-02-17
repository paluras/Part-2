import { useState, useEffect } from 'react'
import axios from "axios"
import AddNum from './AddNum'
import Filter from './Filter'
import Numbers from './Numbers'
import services from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([
    
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilterNames] = useState ("")
  const [key, Setkey] = useState(persons.length )
  




  console.log(persons);
  useEffect(() =>{
    services
      .getAll()
      .then(response => {
    setPersons(response.data)
    })
  }, [])

           
  const handleUpdate = (id, updatedNumber) => {
    const personToUpdate = persons.find(person => person.id === id);
    const updatedPerson = { ...personToUpdate, number: updatedNumber };
    
    services
      .update(id, updatedPerson)
      .then(response => {
        setPersons(persons.map(person =>
          person.id === id ? response.data : person
        ));
      })
      .catch(error => {
        console.log(error);
      });
  }     
console.log(handleUpdate);
  
//Need for filter
 
//Add name + number
const addName = (event) => {
  event.preventDefault();
  const existingPerson = persons.find(person => person.name === newName);

  if (existingPerson) {
    if (window.confirm(`${newName} is already added to the phonebook. Replace the old number with a new one?`)) {
      const updatedPerson = { ...existingPerson, number: newNumber };

      services
        .change(existingPerson.id, updatedPerson)
        .then(response => {
          setPersons(persons.map(person =>
            person.id === existingPerson.id ? response.data : person
          ));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          console.log(error);
        });
    }
  } else {
    const nameObject = {
      name: newName,
      number: newNumber,
      id:key
    };

    services
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
      })
      .catch(() => {
        alert('Something went wrong.');
      });
  }
}



const handleNameChange = (event) =>{
    console.log(event.target.value);
    setNewName(event.target.value)
}   

//Handle number type
const handleNumberChange = (e)=>{
    setNewNumber(e.target.value)
}
const filterEvent = (event) =>{   
  setFilterNames(event.target.value)
 }
      
  return (
    <div>
      <Filter filterEvent={filterEvent}/>
      
      <AddNum addName={addName}
              newName={newName}    
              handleNameChange={handleNameChange}
              newNumber={newNumber}
              handleNumberChange={handleNumberChange}/>    
     
      <Numbers persons = {persons}
               filterNames={filterNames}
               setPersons={setPersons}
               
                />
      
    </div>
  )
}
export default App