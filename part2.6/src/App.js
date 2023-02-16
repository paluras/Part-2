import { useState } from 'react'
import AddNum from './AddNum'
import Filter from './Filter'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilterNames] = useState ("")

//Need for filter
const doTheFilter =  persons.filter(names => names.name.toLowerCase().includes(filterNames.toLowerCase()))

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
               doTheFilter={doTheFilter}
               filterNames={filterNames} />
      
    </div>
  )
}
export default App