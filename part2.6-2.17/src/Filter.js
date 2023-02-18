import React from "react";

  const Filter = (props) =>{
 // doTheFilter =  props.persons.filter(names => names.name.toLowerCase().includes(props.filterNames.toLowerCase()))
  
  
  
 //same const namesToShow = filterNames ? doTheFilter : props.persons;

      return(
          <div>
              <h2>Filter</h2>
        <form>
          <div>
            Filter Names :<input onChange={props.filterEvent} />
          </div>
        </form>
          </div>
      )
  }
  export default Filter

