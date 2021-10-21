import React,  {useState, useEffect} from "react"


const Films = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
          .then((res) => res.json())
          .then((allFilms) => setFilms(allFilms));
      }, []);


    return (
        
<div className = "container">
<div className="row justify-content-center mt-5">
  {films.map((film) => (
    <div className="col-md-6" key={film.id}>
        <div className ="card shadow my-2">
    <div className = "card-body"> 
    <h4 className = "card-title"> {film.title}</h4>
    <p className = "card subtitle text-muted">{film.description}</p>
    <p className= "card-text">{film.release_date}</p>
        </div>
    </div>
    </div>

  ))}
  </div>
</div>
    )
}

export default Films 