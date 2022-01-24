import './Style.css'
import { useState } from "react"
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {studentAdd} from '../redux/allAction'
import shortid from 'shortid'

export function AddStudent(){

    const dispatch = useDispatch()

    const redirect = useNavigate()

    const [inputSt, setInput] = useState({
        rlno: '',
        name: '',
        dept: '',
        year: ''
    })
    const inputHandler = (e) =>{
        setInput({...inputSt,[e.target.name]:e.target.value})
    }

    const submitButton = async()=>{
        console.log(inputSt)
        Object.assign(inputSt, {id: shortid.generate()})
        dispatch(studentAdd(inputSt))
        redirect('/home')
    }
    return(
        <div className="container">
            <div className="row login">
                <h3 className="heading" style={{marginTop: '20px'}}>Add Student</h3><br/>
                <div className="col-md-2"></div>
                <div className="col-md-6"><br/>
                    <form autoComplete="off" action="/login-user" method="post" className="border border-success rounded">
                        <div className="mb-3">
                            <label className="form-label">Roll No</label>
                            <input type="text" className="form-control" name="rlno" value=
                            {inputSt.rlno} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value=
                            {inputSt.name} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Department</label>
                            <input type="text" className="form-control" name="dept" value=
                            {inputSt.dept} onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Year</label>
                            <input type="text" className="form-control" name="year" value=
                            {inputSt.year} onChange={inputHandler} />
                        </div>
                        <br />
                        <div>
                            <button type="button" className="btn btn-success" onClick={submitButton}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}