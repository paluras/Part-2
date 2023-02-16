import { useState } from 'react'

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

//filter option
const doTheFilter =  persons.filter(names => names.name.toLowerCase().includes(filterNames.toLowerCase()))

 const filterEvent = (event) =>{   
  setFilterNames(event.target.value)
 }
 const namesToShow =filterNames ? doTheFilter : persons

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
      <h2>filter</h2>
      <form>
        <div>
          <input onChange={filterEvent} />
        </div>
      </form>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:
           <input 
          value={newName}
        onChange={handleNameChange}
          />
          <br></br>
          number:
           <input 
          value ={newNumber}
          onChange ={handleNumberChange}  
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{namesToShow.map(persons => 
        <p key={persons.name}>{persons.name}   {persons.number}</p>
        )}</div>
    </div>
  )
}
export default App