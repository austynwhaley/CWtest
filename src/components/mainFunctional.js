import React, { useState, useEffect } from "react";
import "../../src"
import user from "../APIs/user";
import cats from "../APIs/cats";
import NameBtn from "../components/NameBtn/index"
import { Container, Col, Row } from "./Grid/index";

function MainFunctional() {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

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
        <Row>
          <img className="catImg" src={cat.url}/>
        </Row>
      <Row>
      <input
          type="text"
          id="header-search"
          placeholder="Search Names..."
          onChange={event=> {setSearchTerm(event.target.value)}}
          name="s" 
      />
      </Row>
      <Row>
        <Col className="names" size="lg-12 xl-12 mx-auto">
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
                name={item.name.first}/>
      })}
        </Col>
      </Row>
    </div>
    </Container>
    
  );
}

export default MainFunctional;
