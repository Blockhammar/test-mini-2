import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("people");
  const [thePerson, setThePerson] = useState("");


  useEffect(() => {
    fetch("https://swapi.py4e.com/api/people"
    )
    .then(response => response.json())
    .then(data => setData(data.results))
  }, []);

  // const movieItems = data.map((x) => <div className="box" key={x.uid}> <img src="https://media.sketchfab.com/models/6543e8e057ea4a85ba3586ce00e42b98/thumbnails/4e7d79f43e904b5e8c0e6d523e897ee8/4951d7fd286d4868ad692c352eb9b59e.jpeg" alt="text" /><h1>{x.name}</h1> </div>);
  

function handelChange(event){
  setOption(event.target.value);
}

function handelSubmit(event){
  event.preventDefault();
  
  for (let index = 0; index < data.length; index++) {
    if(data[index].name.toLowerCase().includes(option.toLowerCase())){
    setThePerson(
      <div className="box">
        <img src={data[index].name}></img>
        <h1>{data[index].name}</h1>
        <p>Eye color: {data[index].eye_color}</p>
        <p>Height: {data[index].height}</p>
        <p>Gender: {data[index].gender}</p>
        <p>Year of birth: {data[index].birth_year}</p>


        </div>);
    }
  }
}


  return (
    <div className="App">
     
        <form onSubmit={handelSubmit}>
        <input className ="tex"type="text" onChange={handelChange} />
        <input className="sub"type="submit" value="Submit" />
        </form>
      {thePerson}
    </div>
  );
}

export default App;

