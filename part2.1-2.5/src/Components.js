import React from "react"

const Header = (props) =>{
    return (
      <div>
        <p>{props.courses.name}</p>
      </div>
    )
  } 
  const Total = ({courses}) =>{
    return(
    <div>
        <p>
          Number of exercises 
            {courses.parts.reduce((sum, alt) => {
          return  sum + alt.exercises}, 0)
          }
        </p>
    </div>
    )
  }
  const Part = ({courses}) =>{
      return (
        <div>
           {courses.parts.map(courses =>
            <h2 key={courses.id}>
              {courses.name} {courses.exercises}
            </h2>
              
            )}
        </div>
      )
    }  
  
  const Content = ({courses}) =>{   
      return(
        <div>
          <Part courses={courses}/>
        </div>
      )
    }
  
  const Course = ({courses}) =>{
      return(
      <div>{courses.map(courses => 
      <div key= {courses.id}>
        <Header courses ={courses}/>
        <Content courses={courses} />
        <Total courses = {courses} />    
        </div>
        )}
      </div>
      )
    }

    export default Course