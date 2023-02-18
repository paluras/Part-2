import React from "react";

const AddNum = (prop) =>{


    return(
        <div><h2>Phonebook</h2>
      <form onSubmit={prop.addName}>
        <div>
          name:
           <input 
          value={prop.newName}
        onChange={prop.handleNameChange}
          />
          <br></br>
          number:
           <input 
          value ={prop.newNumber}
          onChange ={prop.handleNumberChange}  
            />
        </div>
        <div><br></br>
          <button className="submitButton" type="submit">add</button>
          
        </div>
        <br></br>
      </form></div>
    )

}

export default AddNum