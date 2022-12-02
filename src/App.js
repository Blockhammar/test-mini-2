import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("people");
  const [thePerson, setThePerson] = useState("people");


  useEffect(() => {
    fetch("https://swapi.dev/api/people/"
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
    if(data[index].name.includes(option))
    setThePerson(
      <div className="box">
        <h1>{data[index].name}</h1>
        <h1>{data[index].eye_color}</h1>
        <p>{data[index].homeworld}</p>
        </div>);
        
  }
}


  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
       <input type="text" onChange={handelChange} />
       <input type="submit" value="Submit" />
      </form>
      {thePerson}

    </div>
  );
}

export default App;

