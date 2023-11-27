import {ListGroup} from 'react-bootstrap'
import { useEffect, useState } from "react";



function MyList({handleClick, selectedCharacter}){
    const [data, setData]= useState([])
const url = 'https://api.openbrewerydb.org/breweries';

const fetchUrl= async()=>{
try {
   
	const response = await fetch(url);
	const result = await response.json();
	console.log(result);
    setData(result)
     } catch (error) {
	console.error(error);
}
}
useEffect( ()=>{
    fetchUrl()
}, [])

    
    
    return(
<>
<ListGroup>
      <ListGroup.Item className='pointer' onClick={handleClick}>{data.map((d)=>d.name)}</ListGroup.Item>
      <ListGroup.Item className='pointer' onClick={handleClick}>{data.map((d)=>d.website_url)}</ListGroup.Item>
      {/* <ListGroup.Item className='pointer' onClick={handleClick}>Blacky</ListGroup.Item>
      <ListGroup.Item className='pointer' onClick={handleClick}>Wolfy</ListGroup.Item> */}
      
    </ListGroup>
    <p className='mt-3'>The Selected Character is {selectedCharacter || ' none'} </p>
    </>

    );
}

export default MyList;