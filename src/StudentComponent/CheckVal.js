import {useParams} from 'react-router-dom';
import EditStudent from './EditStudent';
export function CheckVal(){
    const {id} = useParams();
    console.log(id)

    return(
        <>
            <EditStudent id={id} /> 
        </>
        
    )
}