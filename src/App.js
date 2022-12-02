import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("people");

  // useEffect(() => {
  //   fetch("https://www.swapi.tech/api/people"
  //   )
  //   .then(response => response.json())
  //   .then(data => setData(data.results))
  // }, []);

  const movieItems = data.map((x) => <div className="box" key={x.uid}> <img src='./Tatooine.jpeg' alt="text" /><p>{x.name}</p> </div>);

function handelChange(event){
  setOption(event.target.value);
}

function handelSubmit(event){
  event.preventDefault();
  fetch(`https://www.swapi.tech/api/${option}`)
    .then(response => response.json())
    .then(data => setData(data.results));
}

  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
       <input type="text" onChange={handelChange} />
       <input type="submit" value="Submit" />
      </form>

       {movieItems}
    </div>
  );
}

export default App;

