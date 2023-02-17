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


  
//Need for filter
 
//Add name + number
const addName = (event) =>{
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
 
    alert(`${newName} is already added to phonebook`)
 } else {
    const nameObject = {
        name: newName,
        id: key,
        number: newNumber 
    }
    services 
    .create(nameObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
    .catch(() =>{ alert("something Happened")
    })
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