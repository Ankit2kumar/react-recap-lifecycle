import {ListGroup} from 'react-bootstrap'


function MyList({handleClick, selectedCharacter}){

    
    

    return(
<>
<ListGroup>
      <ListGroup.Item className='pointer' onClick={handleClick}>Browny</ListGroup.Item>
      <ListGroup.Item className='pointer' onClick={handleClick}>Whitey</ListGroup.Item>
      <ListGroup.Item className='pointer' onClick={handleClick}>Blacky</ListGroup.Item>
      <ListGroup.Item className='pointer' onClick={handleClick}>Wolfy</ListGroup.Item>
      
    </ListGroup>
    <p className='mt-3'>The Selected Character is {selectedCharacter || ' none'} </p>
    </>

    );
}

export default MyList;