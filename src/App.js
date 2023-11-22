import './App.css'
//import  Button  from "react-bootstrap/Button";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import MyList from "./components/MyList";
import { Col, Container, Row } from "react-bootstrap";
import MyAlert from './components/MyAlert';


function App() {

  const [selectedCharacter, setSelectedCharacter]=useState("")

  const handleClick=(e)=>{
    setSelectedCharacter( e.target.innerText)
}
  return (
    <div className="App">
      <header className="App-header">
     {/* <Button onClick={()=> setCount({num:count.num-1})}>DECREMENT</Button>
      {count.num}
      <Button onClick={()=> setCount({num: count.num+1})}>INCREMENT</Button> */}
      <Container>
      <Row>
        <Col>
        <MyList selectedCharacter={selectedCharacter} handleClick={handleClick}/>
        </Col>
        <Col className='my-auto'>
        <MyAlert selectedCharacter= {selectedCharacter}/>
        </Col>
      </Row>
      </Container>
      </header>
      </div>
      
  );
}

export default App;
