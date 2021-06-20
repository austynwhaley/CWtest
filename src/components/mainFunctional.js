import React, { useState, useEffect } from "react";
import "../../src"
import user from "../APIs/user";
import cats from "../APIs/cats";
import NameBtn from "../components/NameBtn/index"
import { Container, Col, Row } from "./Grid/index";
import Jumbotron from "./Jumbotron";




function MainFunctional() {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [catNames, setArray] = useState([])

  function refresh() {
    window.location.reload()
  }


  function  clearNames() {
    catNames.length = 0
    console.log(catNames)
  }
 
  useEffect(() => {
    user.getRandomUserNames().then((response) => {
      setData(response.data.results);
    });
    cats.getRandomCat().then((response) => {
      setCat(response.data[0]);
    });
  
  }, []);

  return (
    <Container>
      <div className="App">
        <Jumbotron  src={`${process.env.PUBLIC_URL}/imgs/capture.png`} />
        <button style={{borderRadius: "15px"}} onClick={refresh}>New Cat</button>
        <Row>
          <Col size= "lg-1 mx-auto">
            <img className="catImg" src={cat.url}/>
          </Col>
        </Row>

        <Row>
          <div>
            <h1 className="header">
              Pick 3 names!
            </h1>
          </div>
        </Row>

        <Row>
        <Col size= "md-4 mx-auto"><h3 className="choices">{catNames[0]}</h3></Col>
        <Col size= "md-4 mx-auto"><h3 className="choices">{catNames[1]}</h3></Col>
        <Col size= "md-4 mx-auto"><h3 className="choices">{catNames[2]}</h3></Col>
        </Row>

        <Row>
          <Col size= "-6 "><button  style={{marginTop: "30px"}}type="button" className=" clear btn btn btn-dark btn-lg">Name it!</button></Col>
          <Col size= "xs-3 "> <button onClick={clearNames} style={{marginTop: "30px"}}type="button" className=" clear btn btn btn-danger btn-lg">Clear Names</button></Col>
        </Row>

        <Row>
        <input
            type="text"
            id="header-search"
            placeholder="Filter Names..."
            onChange={event=> {setSearchTerm(event.target.value)}}
            name="s" 
        />
        </Row>
        <Row>
          <Col size= "lg-2" ></Col>
          <Col className="names" size="lg-9 xl-8 mx-auto">
          {data.filter((val) => {
          let firstName = JSON.stringify(val.name.first)
          if (searchTerm == "") {
            return val
          }else if (firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((item,index) => {
          return  <NameBtn 
                  key={index} 
                  onClick={() => setArray(oldArray => [...oldArray,item.name.first])}
                  name={item.name.first}/>
        })}
          </Col>
        </Row>
      </div>
    </Container>
    
  );
}

export default MainFunctional;
