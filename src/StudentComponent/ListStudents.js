import './Style.css'
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {studentDelete} from '../redux/allAction'

export function List({stud}){
    const dispatch = useDispatch()
    const {id, rlno, name, dept, year} = stud;
    return(
        <tr>
            <td>{rlno}</td>
            <td>{name}</td>
            <td>{dept}</td>
            <td>{year}</td>
            <td><Link to={`/edit/${id}`}>
            <button type="button" className='btn btn-primary mr-1'>Edit</button></Link>
            <button type="button" className='btn btn-danger' onClick={()=>dispatch(studentDelete(id))}>Delete</button></td>
        </tr>
    );
}