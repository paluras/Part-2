import { useState, useEffect } from 'react'
import axios from "axios"
import AddNum from './AddNum'
import Filter from './Filter'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([
   
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilterNames] = useState ("")
  
  console.log(persons);
  useEffect(() =>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
    setPersons(response.data)

    } ) 
  }, [])
  
//Need for filter
 const filterEvent = (event) =>{   
  setFilterNames(event.target.value)
 }
//Add name + number
const addName = (event) =>{
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
 
    alert(`${newName} is already added to phonebook`)
 } else {
    const nameObject = {
        name: newName,
        id: newName,
        number: newNumber
    }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
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
  return (
    <div>
      <Filter filterEvent={filterEvent}/>
      
      <AddNum addName={addName}
              newName={newName}    
              handleNameChange={handleNameChange}
              newNumber={newNumber}
              handleNumberChange={handleNumberChange}/>    
     
      <Numbers persons = {persons}
               filterNames={filterNames} />
      
    </div>
  )
}
export default App