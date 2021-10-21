import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import Films from "./components/Films";
import People from "./components/People";

const App = () => {
  
  const [filmsLoaded, setFilmsLoaded] = useState();
  const [peopleLoaded, setPeopleLoaded] = useState() 


  const handleFilms = () => {
    setFilmsLoaded(true)
    setPeopleLoaded(false)
}

const handlePeople = () => {
    setPeopleLoaded(true)
    setFilmsLoaded(false)
}


  if (filmsLoaded) {
    return (
        <div>
        <button onClick={handleFilms}>Films</button>
        <button onClick={handlePeople}>People</button>
        <Films />
        </div>
    );
    
  }

  else if (peopleLoaded) {

    return (
        <div>
    <button onClick={handleFilms}>Films</button>
    <button onClick={handlePeople}>People</button>

    <People />
    </div>
    )
  }

else {
    return (
        <div>
            <h1>Welcome</h1>
          <button onClick={handleFilms}>Load Films</button>
          <button onClick={handlePeople}>Load People</button>
        </div>
      );
  } 
 
};

export default App;
