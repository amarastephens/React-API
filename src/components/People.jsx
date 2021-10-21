import React, {useState, useEffect} from 'react'
import Films from './Films';


const People = () => {

   const [people, setPeople] = useState([])

   useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/people')
    .then((res) => res.json())
    .then((allPeople) => setPeople(allPeople));
})

return (
        
    <div className = "container">
    <div className="row justify-content-center mt-5">
      {people.map((pep) => (
        <div className="col-md-6" key={pep.id}>
            <div className ="card shadow my-2">
        <div className = "card-body"> 
        <h4 className = "card-title">{pep.name}  </h4>
        <p className = "card subtitle text-muted">{pep.gender} </p>
        <p className= "card-text">{pep.age} </p>
            </div>
        </div>
        </div>
    
      ))}
      </div>
    </div>
        )


}

export default People