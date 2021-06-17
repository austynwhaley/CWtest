import React, { useState, useEffect } from "react";
import user from "../APIs/user";
import cats from "../APIs/cats";
import countries from "../APIs/countries";
import covid from "../APIs/covid";
import spaceX from "../APIs/spaceX";

function MainFunctional() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    user.getRandomUserNames().then((response) => {
      console.log(response.data.results)
      setData(response.data.results);
    });
    // spaceX.latest().then((response) => {
    //   console.log("got spaceX", response.data);
    // });
    // cats.getRandomCat().then((response) => {
    //   console.log("got random cat: ", response);
    // });
    // countries.getCountries().then((response) => {
    //   console.log("got countries", response);
    // });
    // covid.getCurrentCovidStats().then((response) => {
    //   console.log("got covid", response);
    // });
  }, []);

  return (
    <div className="App">
      <input
            type="text"
            id="header-search"
            placeholder="Search..."
            onChange={event=> {setSearchTerm(event.target.value)}}
            name="s" 
        />
      {data.filter((val) => {
        if (searchTerm == "") {
          return val
        }else if (val.name.first.includes(searchTerm)) {
          return val
        }
      }).map((item, index) => {
        return  <div className="user" key={index}><p>{item.name.first}</p></div>;
      })}
    </div>
  );
}

export default MainFunctional;

// .filter((item) => {
//   if (searchTerm == "") {
//     return item
//   } else if (item.name.first.toLowercase().includes(searchTerm.toLowerCase())){
//     return item
//   }
// })
