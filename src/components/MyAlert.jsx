import { Alert } from "react-bootstrap";

const MyAlert=(props)=>{

    return(

        <>
        <Alert variant ="success">
        {props.selectedCharacter || ' none'}

        </Alert>
        </>
    )
}

export default MyAlert