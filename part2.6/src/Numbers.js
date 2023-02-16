import React from "react";

const Numbers = (props) =>{
 
    const doTheFilter =  props.persons.filter(names => names.name.toLowerCase().includes(props.filterNames.toLowerCase()))
    const namesToShow = props.filterNames ? doTheFilter : props.persons;
    return(
        <div><h2>Numbers</h2>
            <div>{namesToShow.map(persons => 
                <p key={persons.name}>{persons.name}   {persons.number}</p>
         )}</div>
    </div>
        
    )
}
export default Numbers