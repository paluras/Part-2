import React from 'react';
import services from './services/persons';

const Numbers = ({ persons, filterNames, setPersons,setErrorMessage }) => {

  const filteredPersons = filterNames
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filterNames.toLowerCase()))
    : persons;

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      services
        .remove(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error=>setErrorMessage(`${name} has already been removed from server`));
        setTimeout(()=>{
          setErrorMessage(null)
        },4000)
    }
  }

  return (
    <div>
      {filteredPersons.map(person =>
        <div key={person.id}>
          {person.name} {person.number} {' '}
          <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
        </div>
      )}
    </div>
  );
};

export default Numbers;
