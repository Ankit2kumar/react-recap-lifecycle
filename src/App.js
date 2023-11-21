import './App.css'
//import  Button  from "react-bootstrap/Button";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import MyList from "./components/MyList";
import { Col, Container, Row } from "react-bootstrap";


function App() {

  const [count, setCount]= useState({num:0});
  return (
    <div className="App">
      <header className="App-header">
     {/* <Button onClick={()=> setCount({num:count.num-1})}>DECREMENT</Button>
      {count.num}
      <Button onClick={()=> setCount({num: count.num+1})}>INCREMENT</Button> */}
      <Container>
      <Row>
        <Col>
        <MyList/>
        </Col>
      </Row>
      </Container>
      </header>
      </div>
      
  );
}

export default App;
